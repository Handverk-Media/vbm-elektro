import { NextResponse } from 'next/server'
import { sendMail } from '@/lib/mail'

const GHL_WEBHOOK = "https://services.leadconnectorhq.com/hooks/N3BOu2IUcQj6WVFJ2no2/webhook-trigger/fc3c1e2f-0800-402e-8287-46e9b5d2d686"

export async function POST(req: Request) {
  try {
    const { epost } = await req.json()
    if (!epost || !epost.includes('@')) {
      return NextResponse.json({ error: 'Ugyldig e-post' }, { status: 400 })
    }

    await fetch(GHL_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: epost, source: "VBM Elektro – Nyhetsbrev" }),
    }).catch((err) => console.error("GHL webhook feilet:", err))

    await sendMail(
      `Nyhetsbrev påmelding: ${epost}`,
      `<p style="font-family:sans-serif;font-size:15px;">Ny påmelding til nyhetsbrev: <strong>${epost}</strong></p>`
    ).catch((err) => console.error('Mail feil (nyhetsbrev):', err))

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Noe gikk galt' }, { status: 500 })
  }
}
