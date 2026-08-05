import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zaptec Go ferdig montert | VBM Elektro',
  description: 'Få skriftlig pris på montering av Zaptec Go i Drammen, Asker og Bærum.',
  alternates: { canonical: 'https://vbmelektro.no/zaptec-go-montering' },
  openGraph: {
    title: 'Zaptec Go ferdig montert | VBM Elektro',
    description: 'Send bilde av sikringsskapet — få skriftlig pris før montering.',
    url: 'https://vbmelektro.no/zaptec-go-montering',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
