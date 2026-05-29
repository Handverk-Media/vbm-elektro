import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book gratis befaring – VBM Elektro AS",
  description:
    "Fyll inn info og velg tidspunkt for gratis befaring med VBM Elektro. Autorisert elektriker i Bærum, Oslo, Asker og Drammen.",
  alternates: { canonical: "https://vbmelektro.no/befaring" },
  openGraph: {
    title: "Book gratis befaring – VBM Elektro",
    description: "Fyll inn info og velg tidspunkt. Gratis og uforpliktende.",
    url: "https://vbmelektro.no/befaring",
  },
}

export default function BefaringLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
