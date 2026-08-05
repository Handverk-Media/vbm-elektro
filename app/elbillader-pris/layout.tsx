import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pris på elbillader ferdig montert | VBM Elektro',
  description: 'Få vurdert sikringsskapet og motta skriftlig pris på montering av elbillader i Drammen, Asker og Bærum.',
  alternates: { canonical: 'https://vbmelektro.no/elbillader-pris' },
  openGraph: {
    title: 'Pris på elbillader ferdig montert | VBM Elektro',
    description: 'Send bilde av sikringsskapet — få skriftlig pris før arbeidet starter.',
    url: 'https://vbmelektro.no/elbillader-pris',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
