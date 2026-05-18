import { NextRequest, NextResponse } from 'next/server'
import { sendMail } from '@/lib/mail'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { navn, telefon, epost, tjeneste, adresse, melding } = body

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
