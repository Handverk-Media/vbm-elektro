import type { Metadata } from "next"
import { SEOLandingPage } from "@/components/SEOLandingPage"

export const metadata: Metadata = {
  title: "Elektriker til oppussing og renovering — VBM Elektro",
  description:
    "El-arbeid i forbindelse med oppussing i Asker og Bærum. Bad, kjøkken og totalrenovering. Fastpris og tidsplan. Ring VBM Elektro.",
  keywords: ["elektriker oppussing", "elektriker renovering", "el-arbeid bad kjøkken"],
}

export default function OppussingPage() {
  return (
    <SEOLandingPage
      keyword="Elektriker til oppussing"
      headline={`Elektriker\ntil oppussing\nog renovering`}
      subheadline="El-arbeid i forbindelse med bad, kjøkken og totalrenovering i Asker og Bærum. Fastpris og tidsplan — ingen overraskelser."
      intro="Skal du pusse opp bad, kjøkken eller renovere hele boligen? VBM Elektro tar alle el-jobber i forbindelse med renovering — fra nye stikkontakter og belysning til full omlegging av el-anlegg. Vi jobber tett med andre håndverkere, leverer til avtalt tid og pris, og dokumenterer alt arbeid skikkelig. Kontakt oss for et uforpliktende tilbud."
      trustPoints={[
        "Samarbeider med andre håndverkere",
        "Fastpris og tidsplan fra dag én",
        "Full dokumentasjon av el-arbeid",
        "Erfaring med bad, kjøkken og totalrenovering",
      ]}
      faq={[
        {
          q: "Kan dere koordinere med andre håndverkere?",
          a: "Ja — vi er vant til å jobbe i lag med rørleggere, murere og tømrere. Vi tilpasser fremdriften til prosjektets tidsplan.",
        },
        {
          q: "Gir dere fastpris på oppussingsprosjekter?",
          a: "Ja, vi tilbyr alltid fastpris eller anbud etter befaring. Du vet nøyaktig hva el-jobben koster før vi starter.",
        },
        {
          q: "Hva trenger dere av el-arbeid på bad?",
          a: "Bad krever jordfeilbryter, riktig kursopplegg og godkjent varmekabel dersom du installerer det. Vi sørger for at alt er i henhold til krav.",
        },
      ]}
    />
  )
}
