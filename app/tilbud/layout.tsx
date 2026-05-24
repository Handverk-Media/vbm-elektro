import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Få tilbud – VBM Elektro",
  description:
    "Be om gratis tilbud fra VBM Elektro. Autorisert elektriker i Bærum, Oslo, Asker og Drammen. Fastpris før vi starter.",
  alternates: { canonical: "https://vbmelektro.no/tilbud" },
  openGraph: {
    title: "Få tilbud – VBM Elektro",
    description: "Fyll inn hva du trenger hjelp med. Vi svarer innen 1 time.",
    url: "https://vbmelektro.no/tilbud",
  },
}

export default function TilbudLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
