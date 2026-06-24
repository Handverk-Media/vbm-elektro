import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface Attachment {
  filename: string
  content: Buffer
}

export async function sendMail(
  subject: string,
  html: string,
  to = 'benjamin@vbmelektro.no',
  attachments?: Attachment[]
) {
  await resend.emails.send({
    from: 'VBM Elektro <nettside@vbmelektro.no>',
    to,
    subject,
    html,
    ...(attachments && attachments.length > 0 ? { attachments } : {}),
  })
}
