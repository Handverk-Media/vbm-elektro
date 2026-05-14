import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bestill tjeneste – VBM Elektro",
  description: "Bestill elektriker-tjenester fra VBM Elektro. Velg tjeneste, antall og betal enkelt med Vipps.",
  robots: { index: false, follow: false },
}

export default function BestillLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
