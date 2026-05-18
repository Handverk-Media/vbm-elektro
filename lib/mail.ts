import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendMail(subject: string, html: string, to = 'benjamin@vbmelektro.no') {
  await resend.emails.send({
    from: 'VBM Elektro <nettside@vbmelektro.no>',
    to,
    subject,
    html,
  })
}
