import { NextRequest, NextResponse } from 'next/server'
import { sendMail } from '@/lib/mail'

// Delt endepunkt for Google Ads-landingssidene (/elbillader-pris, /zaptec-go-montering,
// /elektriker-pris). Gjenbruker samme GHL-webhook som det eksisterende kontaktskjemaet
// (/api/befaring-lead) — leads skilles i CRM via `source` og `landingsside`-feltene,
// ikke via en egen webhook.
const GHL_WEBHOOK = "https://services.leadconnectorhq.com/hooks/N3BOu2IUcQj6WVFJ2no2/webhook-trigger/3c55c49f-06fe-4b66-b4c4-fd11de2739ce"

const KJENTE_FELT = new Set([
  'navn', 'telefon', 'epost', 'postnummer', 'adresse',
  'landingsside', 'gclid', 'referrer',
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
])

export async function POST(req: NextRequest) {
  const contentType = req.headers.get('content-type') ?? ''
  const data: Record<string, string> = {}
  const ovrige: Record<string, string> = {}
  const attachments: Array<{ filename: string; content: Buffer }> = []

  if (contentType.includes('multipart/form-data')) {
    const fd = await req.formData()
    for (const [key, value] of fd.entries()) {
      if (typeof value === 'string') {
        if (KJENTE_FELT.has(key)) data[key] = value
        else ovrige[key] = value
      } else if (value instanceof File && value.size > 0) {
        attachments.push({
          filename: value.name || `${key}.jpg`,
          content: Buffer.from(await value.arrayBuffer()),
        })
      }
    }
  } else {
    const body = await req.json()
    for (const [key, value] of Object.entries(body)) {
      if (typeof value !== 'string') continue
      if (KJENTE_FELT.has(key)) data[key] = value
      else ovrige[key] = value
    }
  }

  const {
    navn, telefon, epost, postnummer, adresse, landingsside,
    gclid, referrer, utm_source, utm_medium, utm_campaign, utm_term, utm_content,
  } = data

  const ovrigeLinjer = Object.entries(ovrige)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
  if (attachments.length > 0) ovrigeLinjer.push(`Bilder vedlagt: ${attachments.length}`)

  const SIDE_LABEL: Record<string, string> = {
    'elbillader-pris': 'Elbillader',
    'zaptec-go-montering': 'Zaptec Go',
    'elektriker-pris': 'Elektriker',
  }
  const sideLabel = SIDE_LABEL[landingsside ?? ''] ?? landingsside ?? 'ukjent'

  await fetch(GHL_WEBHOOK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: navn?.split(' ')[0] ?? navn,
      lastName: navn?.split(' ').slice(1).join(' ') || '',
      phone: telefon,
      email: epost ?? '',
      postalCode: postnummer ?? '',
      address: adresse ?? '',
      message: ovrigeLinjer.join('\n'),
      source: `Google Ads | ${sideLabel}`,
      landingsside: landingsside ?? '',
      gclid: gclid ?? '',
      referrer: referrer ?? '',
      utm_source: utm_source ?? '',
      utm_medium: utm_medium ?? '',
      utm_campaign: utm_campaign ?? '',
      utm_term: utm_term ?? '',
      utm_content: utm_content ?? '',
    }),
  }).catch(err => console.error('GHL webhook feilet (lp-lead):', err))

  try {
    await sendMail(
      `Nytt lead fra ${landingsside ?? 'annonse-landingsside'}: ${navn ?? '—'}`,
      `
        <h2>Ny henvendelse — ${landingsside ?? 'annonse-landingsside'}</h2>
        <table cellpadding="6" style="font-family:sans-serif;font-size:15px;">
          <tr><td><strong>Navn</strong></td><td>${navn ?? '—'}</td></tr>
          <tr><td><strong>Telefon</strong></td><td>${telefon ?? '—'}</td></tr>
          <tr><td><strong>E-post</strong></td><td>${epost ?? '—'}</td></tr>
          <tr><td><strong>Postnummer</strong></td><td>${postnummer ?? '—'}</td></tr>
          ${Object.entries(ovrige).filter(([, v]) => v).map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${v}</td></tr>`).join('')}
          <tr><td><strong>Kilde</strong></td><td>${landingsside ?? '—'}</td></tr>
          <tr><td><strong>gclid</strong></td><td>${gclid || '—'}</td></tr>
          <tr><td><strong>UTM</strong></td><td>${[utm_source, utm_medium, utm_campaign].filter(Boolean).join(' / ') || '—'}</td></tr>
        </table>
        ${attachments.length > 0 ? `<p style="margin-top:16px;color:#555;"><strong>Bilder vedlagt:</strong> ${attachments.length} bilde(r) — se vedlegg.</p>` : ''}
      `,
      'benjamin@vbmelektro.no',
      attachments.length > 0 ? attachments : undefined,
    )
  } catch (err) {
    console.error('Mail feil (lp-lead):', err)
  }

  return NextResponse.json({ ok: true })
}
