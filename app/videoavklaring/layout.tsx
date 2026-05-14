import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gratis videoavklaring – Send bilder og få svar innen 2 timer",
  description:
    "Send bilder eller video av jobben til VBM Elektro. Vi vurderer løsning og omfang uten at du trenger å bestille fysisk befaring. Svar innen 2 timer.",
  alternates: { canonical: "https://vbmelektro.no/videoavklaring" },
  openGraph: {
    title: "Gratis videoavklaring – VBM Elektro",
    description: "Send bilder og få vurdering fra autorisert elektriker innen 2 timer.",
    url: "https://vbmelektro.no/videoavklaring",
  },
}

export default function VideoavklaringLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
