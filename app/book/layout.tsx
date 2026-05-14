import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book befaring – Velg tidspunkt",
  description:
    "Fyll inn info og velg tidspunkt for gratis befaring med VBM Elektro. Autorisert elektriker i Bærum, Oslo, Asker og Drammen.",
  alternates: { canonical: "https://vbmelektro.no/book" },
  openGraph: {
    title: "Book befaring – VBM Elektro",
    description: "Fyll inn info og velg tidspunkt. Gratis og uforpliktende.",
    url: "https://vbmelektro.no/book",
  },
}

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
