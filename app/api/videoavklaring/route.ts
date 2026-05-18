import { NextRequest, NextResponse } from 'next/server'
import { sendMail } from '@/lib/mail'

export async function POST(req: NextRequest) {
  const fd = await req.formData()
  const navn = fd.get('navn')?.toString() ?? ''
  const telefon = fd.get('telefon')?.toString() ?? ''
  const adresse = fd.get('adresse')?.toString() ?? ''
  const beskrivelse = fd.get('beskrivelse')?.toString() ?? ''
  const filer = fd.getAll('filer') as File[]

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
