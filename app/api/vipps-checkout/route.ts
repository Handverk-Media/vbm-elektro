// ─────────────────────────────────────────────────────────────────────────────
// Vipps ePayment API
//
// Krevede miljøvariabler (.env.local):
//   VIPPS_BASE_URL          = https://api.vipps.no (prod) eller https://apitest.vipps.no (test)
//   VIPPS_MSN               = Merchant Serial Number (fra Vipps-portalen)
//   VIPPS_CLIENT_ID         = Client ID
//   VIPPS_CLIENT_SECRET     = Client secret
//   VIPPS_SUBSCRIPTION_KEY  = Ocp-Apim-Subscription-Key
//   NEXT_PUBLIC_URL         = https://vbmelektro.no (prod-URL)
//
// Dokumentasjon: https://developer.vippsmobilepay.com/docs/APIs/epayment-api/
// ─────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from "next/server"

const BASE = process.env.VIPPS_BASE_URL ?? "https://apitest.vipps.no"
const MSN = process.env.VIPPS_MSN ?? ""
const CLIENT_ID = process.env.VIPPS_CLIENT_ID ?? ""
const CLIENT_SECRET = process.env.VIPPS_CLIENT_SECRET ?? ""
const SUB_KEY = process.env.VIPPS_SUBSCRIPTION_KEY ?? ""
const SITE_URL = process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000"

async function getAccessToken(): Promise<string> {
  const res = await fetch(`${BASE}/accesstoken/get`, {
    method: "POST",
    headers: {
      "client_id": CLIENT_ID,
      "client_secret": CLIENT_SECRET,
      "Ocp-Apim-Subscription-Key": SUB_KEY,
      "Merchant-Serial-Number": MSN,
    },
  })
  if (!res.ok) throw new Error(`Token error: ${res.status}`)
  const data = await res.json()
  return data.access_token
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { items, kontakt, betaling } = body

  const totalNOK: number = items.reduce(
    (sum: number, i: { tjeneste: { pris: number }; antall: number }) =>
      sum + i.tjeneste.pris * i.antall,
    0
  )

  const orderId = `vbm-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`

  // Non-Vipps orders → just log/forward and confirm
  if (betaling !== "vipps") {
    // TODO: send order to CRM / e-post / Slack
    console.log("New order:", { orderId, items, kontakt, betaling, totalNOK })
    return NextResponse.json({ success: true })
  }

  // Vipps: abort early if credentials are missing (dev mode)
  if (!CLIENT_ID || !CLIENT_SECRET || !SUB_KEY || !MSN) {
    console.warn("Vipps credentials not configured — redirecting to /takk in dev")
    return NextResponse.json({ redirectUrl: "/takk?order=" + orderId })
  }

  try {
    const token = await getAccessToken()

    const payRes = await fetch(`${BASE}/epayment/v1/payments`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Ocp-Apim-Subscription-Key": SUB_KEY,
        "Merchant-Serial-Number": MSN,
        "Content-Type": "application/json",
        "Idempotency-Key": orderId,
      },
      body: JSON.stringify({
        amount: {
          currency: "NOK",
          value: totalNOK * 100, // øre
        },
        paymentMethod: { type: "WALLET" },
        reference: orderId,
        returnUrl: `${SITE_URL}/takk?order=${orderId}`,
        userFlow: "WEB_REDIRECT",
        paymentDescription: `VBM Elektro – ${items.length} tjeneste${items.length !== 1 ? "r" : ""}`,
      }),
    })

    if (!payRes.ok) {
      const err = await payRes.text()
      console.error("Vipps payment error:", err)
      return NextResponse.json({ error: "Betalingsfeil fra Vipps" }, { status: 502 })
    }

    const payData = await payRes.json()
    return NextResponse.json({ redirectUrl: payData.redirectUrl })
  } catch (err) {
    console.error("Checkout error:", err)
    return NextResponse.json({ error: "Intern feil" }, { status: 500 })
  }
}
