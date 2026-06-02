import { NextRequest, NextResponse } from 'next/server'
import { sendMail } from '@/lib/mail'

const GHL_WEBHOOK = "https://services.leadconnectorhq.com/hooks/N3BOu2IUcQj6WVFJ2no2/webhook-trigger/3c55c49f-06fe-4b66-b4c4-fd11de2739ce"

export async function POST(req: NextRequest) {
  const fd = await req.formData()
  const navn = fd.get('navn')?.toString() ?? ''
  const telefon = fd.get('telefon')?.toString() ?? ''
  const adresse = fd.get('adresse')?.toString() ?? ''
  const beskrivelse = fd.get('beskrivelse')?.toString() ?? ''
  const filer = fd.getAll('filer') as File[]

  const rawPhone = telefon.replace(/\s/g, "")
  const phone = rawPhone.startsWith("+") ? rawPhone : `+47${rawPhone}`

  await fetch(GHL_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName: navn.split(" ")[0] ?? navn,
      lastName: navn.split(" ").slice(1).join(" ") || "",
      phone,
      address: adresse,
      message: beskrivelse,
      source: "VBM Elektro – Videoavklaring",
    }),
  }).catch((err) => console.error("GHL webhook feilet:", err))

  try {
    await sendMail(
      `Ny videoavklaring: ${navn} — ${telefon}`,
      `
        <h2>Ny videoavklaring fra vbmelektro.no</h2>
        <table cellpadding="6" style="font-family:sans-serif;font-size:15px;">
          <tr><td><strong>Navn</strong></td><td>${navn}</td></tr>
          <tr><td><strong>Telefon</strong></td><td>${telefon}</td></tr>
          <tr><td><strong>Adresse</strong></td><td>${adresse || '—'}</td></tr>
          <tr><td><strong>Beskrivelse</strong></td><td>${beskrivelse || '—'}</td></tr>
          <tr><td><strong>Antall filer</strong></td><td>${filer.length}</td></tr>
        </table>
      `
    )
  } catch (err) {
    console.error('Mail feil (videoavklaring):', err)
  }

  return NextResponse.json({
    ok: true,
    melding: `Takk ${navn}! Vi ser på bildene og tar kontakt innen 2 timer.`,
  })
}
