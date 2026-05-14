import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nyhetsbrev – El-innsikt fra VBM Elektro",
  description:
    "Meld deg på nyhetsbrevet fra VBM Elektro. Én e-post i uken med tips om elbillading, smarthus, elkontroll og regelverk.",
  alternates: { canonical: "https://vbmelektro.no/nyhetsbrev" },
  openGraph: {
    title: "Nyhetsbrev – VBM Elektro",
    description: "Praktiske tips om elektroteknologi. Gratis, én gang i uken.",
    url: "https://vbmelektro.no/nyhetsbrev",
  },
}

export default function NyhetsbrevLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
