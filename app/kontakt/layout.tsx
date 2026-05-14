import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontakt oss – VBM Elektro AS",
  description:
    "Ta kontakt med VBM Elektro på telefon, e-post eller skjema. Vi svarer innen 1 time på hverdager. Autorisert elektriker i Bærum, Oslo, Asker og Drammen.",
  alternates: { canonical: "https://vbmelektro.no/kontakt" },
  openGraph: {
    title: "Kontakt oss – VBM Elektro",
    description: "Ring 90 63 31 18 eller send melding. Vi svarer innen 1 time.",
    url: "https://vbmelektro.no/kontakt",
  },
}

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
