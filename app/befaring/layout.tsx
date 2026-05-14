import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book gratis befaring – Autorisert elektriker i Bærum og Oslo",
  description:
    "Book en gratis og uforpliktende befaring med VBM Elektro. Vi kommer hjem til deg i Bærum, Oslo, Asker og Drammen – og gir deg fast pris samme dag.",
  alternates: { canonical: "https://vbmelektro.no/befaring" },
  openGraph: {
    title: "Book gratis befaring – VBM Elektro",
    description: "Gratis befaring i Bærum, Oslo og Asker. Fast pris og svar innen 1 time.",
    url: "https://vbmelektro.no/befaring",
  },
}

export default function BefaringLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
