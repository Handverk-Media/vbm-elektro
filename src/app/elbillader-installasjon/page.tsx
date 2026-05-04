import type { Metadata } from "next"
import { SEOLandingPage } from "@/components/SEOLandingPage"

export const metadata: Metadata = {
  title: "Elbillader installasjon Asker og Bærum — VBM Elektro",
  description:
    "Installasjon av elbillader i Asker og Bærum. Alle ledende merker. Ferdig på én dag. Forutsigbar pris. Ring VBM Elektro på 900 00 000.",
  keywords: [
    "elbillader installasjon",
    "installere elbillader pris",
    "elbillader asker",
    "elbillader bærum",
  ],
}

export default function ElbilladerPage() {
  return (
    <SEOLandingPage
      keyword="Elbillader installasjon"
      headline={`Elbillader\ninstallert\npå én dag`}
      subheadline="Vi monterer alle ledende merker elbilladere hjemme hos deg i Asker og Bærum. Forutsigbar pris og ryddig arbeid."
      intro="Planlegger du å installere elbillader hjemme? VBM Elektro tilbyr profesjonell installasjon av elbilladere til private og bedrifter i Asker, Bærum og Oslo-vest. Vi jobber med alle ledende merker og sørger for at installasjonen er i tråd med gjeldende krav og standarder. De fleste installasjoner er ferdigstilt på én dag. Vi gir deg alltid en fast pris før vi starter — ingen overraskelser. Kontakt oss for uforpliktende tilbud."
      trustPoints={[
        "Alle ledende merker — Easee, Zaptec, Garo m.fl.",
        "Ferdig installert på én dag",
        "Forutsigbar fastpris",
        "Sertifiserte elektrikere med el-bil-kompetanse",
      ]}
      faq={[
        {
          q: "Hva koster det å installere elbillader?",
          a: "Prisen varierer avhengig av merke og monteringsforhold, men vi opererer typisk i intervallet 10 000–25 000 kr inkludert lader og installasjon. Du får alltid fastpris før vi starter.",
        },
        {
          q: "Hvilke merker elbilladere installerer dere?",
          a: "Vi installerer alle populære merker, inkludert Easee, Zaptec, Garo og Schneider Electric. Vi kan hjelpe deg velge riktig lader for din bolig og elbil.",
        },
        {
          q: "Tar dere også jobb med garasje eller carport?",
          a: "Ja — vi installerer elbilladere i garasje, carport, utendørs og i sameier. Kontakt oss for en befaring.",
        },
        {
          q: "Kan jeg få tilskudd fra Enova?",
          a: "Enova gir tilskudd til ladepunkter i sameier og borettslag. Vi kan veilede deg i søknadsprosessen.",
        },
      ]}
    />
  )
}
