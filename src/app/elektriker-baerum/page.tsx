import type { Metadata } from "next"
import { SEOLandingPage } from "@/components/SEOLandingPage"

export const metadata: Metadata = {
  title: "Elektriker Bærum — Rask og lokal hjelp",
  description:
    "Trenger du elektriker i Bærum? VBM Elektro svarer samme dag. Elbillader, sikringsskap, oppussing og akutthjelp i Bærum. Ring 900 00 000.",
  keywords: ["elektriker bærum", "elektriker i bærum", "lokal elektriker bærum"],
}

export default function ElektrikerBaerumPage() {
  return (
    <SEOLandingPage
      keyword="Elektriker i Bærum"
      headline={`Elektriker\ni Bærum`}
      subheadline="Lokal elektriker for Bærum og omegn. Rask respons, sertifiserte fagfolk og forutsigbar pris — første gang."
      intro="VBM Elektro er en av de mest betrodde lokale elektrikerne i Bærum. Vi hjelper deg med alt fra bytte av stikkontakter og montering av belysning til full oppgradering av sikringsskap og installasjon av elbilladere. Vi svarer raskt og gir deg en forutsigbar pris — ingen overraskelser. Kontakt oss i dag, og vi kommer til deg i Bærum så raskt som mulig."
      trustPoints={[
        "Lokal elektriker — rask til Bærum",
        "Svar innen 60 minutter i arbeidstiden",
        "Forutsigbar pris uten overraskelser",
        "Sertifiserte elektrikere",
      ]}
      faq={[
        {
          q: "Dekker dere hele Bærum?",
          a: "Ja — vi dekker hele Bærum, inkludert Sandvika, Bekkestua, Lysaker, Fornebu og omliggende områder.",
        },
        {
          q: "Kan dere hjelpe med akutte el-problemer i Bærum?",
          a: "Absolutt. Ring oss direkte ved akutte situasjoner — vi prioriterer sikkerhetsproblemer og forsøker å stille opp samme dag.",
        },
        {
          q: "Installerer dere elbillader i Bærum?",
          a: "Ja — vi installerer elbilladere hos private boligeiere og bedrifter i hele Bærum.",
        },
      ]}
    />
  )
}
