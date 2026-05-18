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

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Noe gikk galt' }, { status: 500 })
  }
}
