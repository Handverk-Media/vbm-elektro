import { NextRequest, NextResponse } from 'next/server'
import { sendMail } from '@/lib/mail'

const GHL_WEBHOOK = "https://services.leadconnectorhq.com/hooks/N3BOu2IUcQj6WVFJ2no2/webhook-trigger/d042da40-fdee-4314-8c9a-d4b0c0973c84"

const IMAGE_FIELDS = ['bilde_sikringsskap', 'bilde_foeringsvei', 'bilde_monteringssted'] as const

export async function POST(req: NextRequest) {
  const contentType = req.headers.get('content-type') ?? ''

  let data: Record<string, string> = {}
  const attachments: Array<{ filename: string; content: Buffer }> = []

  if (contentType.includes('multipart/form-data')) {
    const fd = await req.formData()
    for (const [key, value] of fd.entries()) {
      if (typeof value === 'string') data[key] = value
    }
    for (const field of IMAGE_FIELDS) {
      const file = fd.get(field) as File | null
      if (file && file.size > 0) {
        attachments.push({
          filename: file.name || `${field}.jpg`,
          content: Buffer.from(await file.arrayBuffer()),
        })
      }
    }
  } else {
    data = await req.json()
  }

  const {
    navn, telefon, epost, tjeneste, adresse, notat, kabel_lengde,
    gclid, utm_source, utm_medium, utm_campaign, utm_term, utm_content,
  } = data

  const messageParts = [notat, kabel_lengde ? `Kabellengde: ${kabel_lengde}` : '']
  if (attachments.length > 0) messageParts.push(`Bilder vedlagt: ${attachments.length}`)

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
      message: messageParts.filter(Boolean).join('\n'),
      source: "VBM Elektro – Befaring",
      gclid: gclid ?? "",
      utm_source: utm_source ?? "",
      utm_medium: utm_medium ?? "",
      utm_campaign: utm_campaign ?? "",
      utm_term: utm_term ?? "",
      utm_content: utm_content ?? "",
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
          ${kabel_lengde ? `<tr><td><strong>Kabellengde</strong></td><td>${kabel_lengde}</td></tr>` : ''}
          <tr><td><strong>Notat</strong></td><td>${notat ?? '—'}</td></tr>
        </table>
        ${attachments.length > 0 ? `<p style="margin-top:16px;color:#555;"><strong>Bilder vedlagt:</strong> ${attachments.length} bilde(r) — se vedlegg.</p>` : ''}
      `,
      'benjamin@vbmelektro.no',
      attachments.length > 0 ? attachments : undefined,
    )
    if (epost) {
      await sendMail(
        'Vi har mottatt din forespørsel — VBM Elektro',
        `
          <div style="font-family:sans-serif;font-size:15px;max-width:520px;">
            <h2 style="color:#c0392b;">Takk, ${navn ?? 'kunde'}!</h2>
            <p>Vi har mottatt din befaringsforespørsel og tar kontakt innen 4 timer i normal arbeidstid.</p>
            <p><strong>Hva skjer nå?</strong><br>
            En elektriker fra VBM Elektro vil ringe deg på <strong>${telefon ?? '—'}</strong> for å avtale gratis befaring.</p>
            <hr style="border:none;border-top:1px solid #eee;margin:24px 0;">
            <p style="color:#888;font-size:13px;">VBM Elektro AS · Tlf: 90 63 31 18 · vbmelektro.no</p>
          </div>
        `,
        epost
      )
    }
  } catch (err) {
    console.error('Mail feil (book-befaring):', err)
  }

  return NextResponse.json({ ok: true })
}
