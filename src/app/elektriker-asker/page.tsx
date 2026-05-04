import type { Metadata } from "next"
import { SEOLandingPage } from "@/components/SEOLandingPage"

export const metadata: Metadata = {
  title: "Elektriker Asker — Rask og lokal hjelp",
  description:
    "Trenger du elektriker i Asker? VBM Elektro svarer samme dag. Elbillader, sikringsskap, oppussing og akutthjelp i Asker. Ring 900 00 000.",
  keywords: ["elektriker asker", "elektriker i asker", "lokal elektriker asker"],
}

export default function ElektrikerAskerPage() {
  return (
    <SEOLandingPage
      keyword="Elektriker i Asker"
      headline={`Elektriker\ni Asker`}
      subheadline="Vi svarer raskt og gjør jobben riktig — første gang. Lokal elektriker for alle typer el-arbeid i Asker."
      intro="VBM Elektro er din lokale elektriker i Asker. Vi tilbyr rask respons, forutsigbar pris og faglig dyktighet på alle typer elektrisk arbeid — fra enkle stikkontakter til full renovering av sikringsskap og installasjon av elbilladere. Som lokal aktør kjenner vi Asker godt og kan stille opp samme dag ved akutte behov. Kontakt oss i dag — vi svarer innen en time i arbeidstiden."
      trustPoints={[
        "Lokal elektriker — rask til Asker",
        "Svar innen 60 minutter i arbeidstiden",
        "Fastpris og forutsigbar kostnad",
        "100% sertifiserte fagfolk",
      ]}
      faq={[
        {
          q: "Hvor raskt kan dere komme til Asker?",
          a: "Vi prioriterer lokale oppdrag og kan i mange tilfeller stille opp same-day. Ring oss direkte for akutte henvendelser.",
        },
        {
          q: "Hva koster en elektriker i Asker?",
          a: "Timeprisen i markedet ligger på 900–1400 kr. Vi gir alltid forutsigbar pris og avklarer kostnad før vi starter jobben.",
        },
        {
          q: "Installerer dere elbillader i Asker?",
          a: "Ja — vi installerer alle ledende merker elbilladere hjemme hos deg i Asker. Ofte ferdig på én dag.",
        },
      ]}
    />
  )
}
