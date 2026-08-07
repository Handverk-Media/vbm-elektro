import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hva koster en elektriker? | VBM Elektro',
  description: 'Beskriv jobben og send bilder. Få vurdering og skriftlig pris fra elektriker i Drammen, Asker og Bærum.',
  alternates: { canonical: 'https://vbmelektro.no/elektriker-pris' },
  openGraph: {
    title: 'Hva koster en elektriker? | VBM Elektro',
    description: 'Beskriv jobben, send bilder — få skriftlig pris eller forslag til befaring.',
    url: 'https://vbmelektro.no/elektriker-pris',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
