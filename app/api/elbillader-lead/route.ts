import { NextRequest, NextResponse } from 'next/server'
import { sendMail } from '@/lib/mail'

const GHL_WEBHOOK =
  'https://services.leadconnectorhq.com/hooks/N3BOu2IUcQj6WVFJ2no2/webhook-trigger/3c55c49f-06fe-4b66-b4c4-fd11de2739ce'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const {
    navn, telefon,
    utm_source, utm_medium, utm_campaign, utm_content, utm_term,
    landingsside, gclid,
  } = body

  await fetch(GHL_WEBHOOK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: navn?.split(' ')[0] ?? navn,
      lastName: navn?.split(' ').slice(1).join(' ') || '',
      phone: telefon,
      service: 'Elbillader',
      source: 'VBM Elektro – Elbillader kampanje',
      utm_source: utm_source ?? '',
      utm_medium: utm_medium ?? '',
      utm_campaign: utm_campaign ?? '',
      utm_content: utm_content ?? '',
      utm_term: utm_term ?? '',
      landingsside: landingsside ?? '/elbillader',
      gclid: gclid ?? '',
      tags: ['service_elbillader', `source_${utm_source || 'organic'}`],
    }),
  }).catch((err) => console.error('GHL webhook feilet:', err))

  try {
    await sendMail(
      `Nytt lead: ${navn} – elbillader`,
      `
        <h2>Nytt lead fra annonsene</h2>
        <table cellpadding="6" style="font-family:sans-serif;font-size:15px;">
          <tr><td><strong>Navn</strong></td><td>${navn ?? '—'}</td></tr>
          <tr><td><strong>Telefon</strong></td><td>${telefon ?? '—'}</td></tr>
          <tr><td><strong>Tjeneste</strong></td><td>Elbillader</td></tr>
          <tr><td><strong>Kilde</strong></td><td>${utm_campaign ?? utm_source ?? 'direkte'} / ${utm_content ?? '—'}</td></tr>
          <tr><td><strong>GCLID</strong></td><td>${gclid ?? '—'}</td></tr>
        </table>
        <p style="margin-top:16px;color:#555;">Ring kunden i dag.</p>
      `
    )
  } catch (err) {
    console.error('Mail feil (elbillader-lead):', err)
  }

  return NextResponse.json({ ok: true })
}
