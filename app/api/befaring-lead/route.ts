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
  } catch (err) {
    console.error('Mail feil (befaring-lead):', err)
  }

  return NextResponse.json({ ok: true })
}
