import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendMail(subject: string, html: string) {
  await resend.emails.send({
    from: 'VBM Elektro <nettside@vbmelektro.no>',
    to: 'benjamin@vbmelektro.no',
    subject,
    html,
  })
}
