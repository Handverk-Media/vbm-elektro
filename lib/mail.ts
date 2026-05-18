import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: { ciphers: 'SSLv3' },
})

export async function sendMail(subject: string, html: string) {
  await transporter.sendMail({
    from: `"VBM Elektro nettside" <${process.env.SMTP_USER}>`,
    to: 'benjamin@vbmelektro.no',
    subject,
    html,
  })
}
