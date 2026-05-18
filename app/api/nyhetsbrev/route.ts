import { NextResponse } from 'next/server'
import { sendMail } from '@/lib/mail'

export async function POST(req: Request) {
  try {
    const { epost } = await req.json()
    if (!epost || !epost.includes('@')) {
      return NextResponse.json({ error: 'Ugyldig e-post' }, { status: 400 })
    }

    await sendMail(
      `Nyhetsbrev påmelding: ${epost}`,
      `<p style="font-family:sans-serif;font-size:15px;">Ny påmelding til nyhetsbrev: <strong>${epost}</strong></p>`
    ).catch((err) => console.error('Mail feil (nyhetsbrev):', err))

    await sendMail(
      'Du er påmeldt nyhetsbrevet — VBM Elektro',
      `
        <div style="font-family:sans-serif;font-size:15px;max-width:520px;">
          <h2 style="color:#c0392b;">Velkommen!</h2>
          <p>Du er nå påmeldt nyhetsbrevet til VBM Elektro. Vi sender deg tips, tilbud og nyheter innen elektro.</p>
          <p>Du kan melde deg av når som helst ved å svare på denne e-posten.</p>
          <hr style="border:none;border-top:1px solid #eee;margin:24px 0;">
          <p style="color:#888;font-size:13px;">VBM Elektro AS · Tlf: 975 45 115 · vbmelektro.no</p>
        </div>
      `,
      epost
    ).catch((err) => console.error('Mail feil (nyhetsbrev-bekreftelse):', err))

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Noe gikk galt' }, { status: 500 })
  }
}
