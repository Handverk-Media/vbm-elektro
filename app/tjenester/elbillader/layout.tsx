import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elbillader installasjon – fra 12 490 kr | VBM Elektro AS',
  description: 'Autorisert elbillader-installasjon i Bærum, Oslo og Asker. Zaptec og Easee. Fast pris fra 12 490 kr. Gratis befaring — ring 90 63 31 18.',
  alternates: { canonical: 'https://vbmelektro.no/tjenester/elbillader' },
  keywords: ['elbillader installasjon', 'Zaptec installasjon Bærum', 'Easee installasjon Oslo', 'elbillader elektriker Asker', 'hjemmelader installasjon'],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
