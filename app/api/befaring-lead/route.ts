import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { navn, telefon, epost, tjeneste, adresse, melding } = await req.json()

  // TODO: forward to GHL / CRM / email
  console.log("Befaring lead:", { navn, telefon, epost, tjeneste, adresse, melding })

  return NextResponse.json({ ok: true })
}
