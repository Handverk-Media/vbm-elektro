import { NextRequest, NextResponse } from 'next/server'
import { sendMail } from '@/lib/mail'

const GHL_WEBHOOK = "https://services.leadconnectorhq.com/hooks/N3BOu2IUcQj6WVFJ2no2/webhook-trigger/3c55c49f-06fe-4b66-b4c4-fd11de2739ce"

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { navn, telefon, epost, tjeneste, adresse, melding, gclid, utm_source, utm_medium, utm_campaign, utm_term, utm_content } = body

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
      message: melding ?? "",
      source: "VBM Elektro – Kontaktskjema",
      utm_source: utm_source ?? "",
      utm_medium: utm_medium ?? "",
      utm_campaign: utm_campaign ?? "",
      utm_term: utm_term ?? "",
      utm_content: utm_content ?? "",
      gclid: gclid ?? "",
    }),
  }).catch((err) => console.error("GHL webhook feilet:", err))

  try {
    await sendMail(
      `Ny befaring/lead: ${navn} — ${tjeneste ?? 'ukjent'}`,
      `
        <h2>Ny henvendelse fra vbmelektro.no</h2>
        <table cellpadding="6" style="font-family:sans-serif;font-size:15px;">
          <tr><td><strong>Navn</strong></td><td>${navn ?? '—'}</td></tr>
          <tr><td><strong>Telefon</strong></td><td>${telefon ?? '—'}</td></tr>
          <tr><td><strong>E-post</strong></td><td>${epost ?? '—'}</td></tr>
          <tr><td><strong>Tjeneste</strong></td><td>${tjeneste ?? '—'}</td></tr>
          <tr><td><strong>Adresse</strong></td><td>${adresse ?? '—'}</td></tr>
          <tr><td><strong>Melding</strong></td><td>${melding ?? '—'}</td></tr>
        </table>
      `
    )

    if (epost) {
      await sendMail(
        'Vi har mottatt din henvendelse — VBM Elektro',
        `
          <div style="font-family:sans-serif;font-size:15px;max-width:520px;">
            <h2 style="color:#c0392b;">Takk, ${navn ?? 'kunde'}!</h2>
            <p>Vi har mottatt din henvendelse og tar kontakt innen 1 time i normal arbeidstid.</p>
            <p><strong>Hva skjer nå?</strong><br>
            En elektriker fra VBM Elektro vil ringe deg på <strong>${telefon ?? '—'}</strong> for å avtale gratis befaring.</p>
            <hr style="border:none;border-top:1px solid #eee;margin:24px 0;">
            <p style="color:#888;font-size:13px;">VBM Elektro AS · Tlf: 975 45 115 · vbmelektro.no</p>
          </div>
        `,
        epost
      )
    }
  } catch (err) {
    console.error('Mail feil (befaring-lead):', err)
  }

  return NextResponse.json({ ok: true })
}
