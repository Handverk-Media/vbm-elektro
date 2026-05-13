import { NextResponse } from "next/server"

// Plug in your email provider here (Mailchimp, Brevo, Beehiiv, etc.)
// For now, emails are logged — replace with real API call when ready.
export async function POST(req: Request) {
  try {
    const { epost } = await req.json()
    if (!epost || !epost.includes("@")) {
      return NextResponse.json({ error: "Ugyldig e-post" }, { status: 400 })
    }

    // TODO: Replace with real email provider
    // Example for Brevo (Sendinblue):
    //   await fetch("https://api.brevo.com/v3/contacts", {
    //     method: "POST",
    //     headers: { "api-key": process.env.BREVO_API_KEY!, "Content-Type": "application/json" },
    //     body: JSON.stringify({ email: epost, listIds: [1] }),
    //   })
    console.log(`Nyhetsbrev påmelding: ${epost}`)

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Noe gikk galt" }, { status: 500 })
  }
}
