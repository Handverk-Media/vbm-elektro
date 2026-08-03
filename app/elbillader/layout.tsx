import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'

export const metadata: Metadata = {
  title: 'Elbillader ferdig montert i Asker og Bærum',
  description:
    'Elbillader ferdig montert fra 14 900 kr. Fast pris før vi starter, samsvarserklæring inkludert. Vi hjelper deg med Enova-støtten. Ring 90 63 31 18.',
  alternates: { canonical: 'https://vbmelektro.no/elbillader' },
  openGraph: {
    title: 'Elbillader ferdig montert fra 14 900 kr | VBM Elektro',
    description:
      'Fast pris før vi starter. Inntil 10 000 kr fra Enova. Vi fyller ut søknaden. Asker, Bærum, Oslo og Drammen.',
    locale: 'nb_NO',
    type: 'website',
    url: 'https://vbmelektro.no/elbillader',
    siteName: 'VBM Elektro AS',
  },
}

export default function ElbilladerKampanjeLayout({ children }: { children: React.ReactNode }) {
  return <div className={GeistSans.className}>{children}</div>
}
