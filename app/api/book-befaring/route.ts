import { NextRequest, NextResponse } from 'next/server'
import { sendMail } from '@/lib/mail'

const GHL_WEBHOOK = "https://services.leadconnectorhq.com/hooks/N3BOu2IUcQj6WVFJ2no2/webhook-trigger/d042da40-fdee-4314-8c9a-d4b0c0973c84"

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { navn, telefon, epost, tjeneste, adresse, notat } = body

  await fetch(GHL_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName: navn?.split(" ")[0] ?? navn,
      lastName: navn?.split(" ").slice(1).join(" ") || "",
      phone: telefon,
      email: epost ?? "",
      service: tjeneste ?? "",
      address: adresse ?? "",
      message: notat ?? "",
      source: "VBM Elektro – Befaring",
    }),
  }).catch((err) => console.error("GHL webhook feilet:", err))

  try {
    await sendMail(
      `Ny befaring: ${navn} — ${tjeneste ?? 'ukjent'}`,
      `
        <h2>Ny befaring fra vbmelektro.no</h2>
        <table cellpadding="6" style="font-family:sans-serif;font-size:15px;">
          <tr><td><strong>Navn</strong></td><td>${navn ?? '—'}</td></tr>
          <tr><td><strong>Telefon</strong></td><td>${telefon ?? '—'}</td></tr>
          <tr><td><strong>E-post</strong></td><td>${epost ?? '—'}</td></tr>
          <tr><td><strong>Tjeneste</strong></td><td>${tjeneste ?? '—'}</td></tr>
          <tr><td><strong>Adresse</strong></td><td>${adresse ?? '—'}</td></tr>
          <tr><td><strong>Notat</strong></td><td>${notat ?? '—'}</td></tr>
        </table>
      `
    )
  } catch (err) {
    console.error('Mail feil (book-befaring):', err)
  }

  return NextResponse.json({ ok: true })
}
