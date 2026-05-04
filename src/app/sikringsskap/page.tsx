import type { Metadata } from "next"
import { SEOLandingPage } from "@/components/SEOLandingPage"

export const metadata: Metadata = {
  title: "Sikringsskap bytte og oppgradering — VBM Elektro",
  description:
    "Bytte eller oppgradering av sikringsskap i Asker og Bærum. Forutsigbar pris, rask utførelse og sertifiserte elektrikere. Ring VBM Elektro.",
  keywords: ["sikringsskap bytte", "sikringsskap pris", "el-tavle oppgradering"],
}

export default function SikringsskapPage() {
  return (
    <SEOLandingPage
      keyword="Sikringsskap"
      headline={`Sikringsskap\nbytte og\noppgradering`}
      subheadline="Gammelt sikringsskap? Vi bytter det raskt og ryddig. Forutsigbar pris og sertifiserte fagfolk i Asker og Bærum."
      intro="Et gammelt eller overbelastet sikringsskap er en sikkerhetsrisiko. VBM Elektro tilbyr profesjonell feilsøking, bytte og oppgradering av sikringsskap og el-tavler for private og bedrifter i Asker, Bærum og Oslo. Vi gir deg alltid en forutsigbar pris og forklarer hva som må gjøres — uten teknisk sjargong. De fleste jobber utføres på én dag."
      trustPoints={[
        "Rask feilsøking og diagnose",
        "Forutsigbar fastpris",
        "Ferdig på én dag i de fleste tilfeller",
        "Sertifiserte elektrikere",
      ]}
      faq={[
        {
          q: "Hva koster det å bytte et sikringsskap?",
          a: "Prisen avhenger av størrelse og kompleksitet, men et standard bytte ligger typisk på 15 000–40 000 kr inkludert arbeid og materialer.",
        },
        {
          q: "Når må jeg bytte sikringsskapet?",
          a: "Hvis du har skrutsikringer, hyppige utfall, lukter svidd, eller skal installere elbillader eller varmepumpe, bør sikringsskapet vurderes. Vi gjør alltid en gratis vurdering.",
        },
        {
          q: "Må jeg miste strøm under bytte?",
          a: "Ja, kortvarig strømbrudd er nødvendig. Vi planlegger arbeidet for å minimere nedetid og varsler deg i god tid.",
        },
      ]}
    />
  )
}
