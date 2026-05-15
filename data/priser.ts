// ─────────────────────────────────────────────────────────────
// REDIGER HER: Tjenester og priser
//
// pris = beløp i NOK inkl. mva
// Legg til, fjern eller endre linjer etter behov.
// id må være unik (brukes internt i handlekurven).
// ─────────────────────────────────────────────────────────────

export type Tjeneste = {
  id: string
  navn: string
  beskrivelse: string
  pris: number        // NOK inkl. mva
  enhet: string       // f.eks. "fra" eller "per time"
  kategori: string
  varighet?: string   // vises som info, påvirker ikke pris
}

export const TJENESTER: Tjeneste[] = [
  // ── Elbillader ─────────────────────────────────────────────
  {
    id: "elbil-standard",
    navn: "Elbillader – standard installasjon",
    beskrivelse:
      "Montering av hjemmelader i garasje eller carport. Inkluderer kabling fra sikringsskap, nødvendig vern, dokumentasjon og idriftsettelse.",
    pris: 9990,
    enhet: "fra",
    kategori: "Elbillader",
    varighet: "2–4 timer",
  },
  {
    id: "elbil-komplex",
    navn: "Elbillader – kompleks installasjon",
    beskrivelse:
      "Installasjon med krevende kabelføring, kursoppgradering eller montering i parkeringskjeller/borettslag.",
    pris: 14900,
    enhet: "fra",
    kategori: "Elbillader",
    varighet: "4–8 timer",
  },

  // ── Service og kontroll ────────────────────────────────────
  {
    id: "elkontroll-bolig",
    navn: "Elkontroll bolig",
    beskrivelse:
      "Gjennomgang av sikringsskap, kurser, jordfeilbrytere og synlig installasjon. Skriftlig rapport med eventuelle avvik leveres.",
    pris: 2990,
    enhet: "fra",
    kategori: "Service",
    varighet: "1–2 timer",
  },
  {
    id: "feilsok-time",
    navn: "Feilsøking og retting",
    beskrivelse:
      "Diagnose og utbedring av elektrisk feil. Pris inkluderer oppmøte, kjøring og dokumentasjon.",
    pris: 1490,
    enhet: "per time",
    kategori: "Service",
    varighet: "Avhenger av feil",
  },

  // ── Belysning ──────────────────────────────────────────────
  {
    id: "downlight-5",
    navn: "Downlights – 5 stk",
    beskrivelse:
      "Montering av 5 downlights inkludert hulltakfresing og ny kabelføring. Spotlights ikke inkludert.",
    pris: 5990,
    enhet: "fra",
    kategori: "Belysning",
    varighet: "2–4 timer",
  },
  {
    id: "downlight-10",
    navn: "Downlights – 10 stk",
    beskrivelse:
      "Montering av 10 downlights inkludert hulltakfresing og ny kabelføring. Spotlights ikke inkludert.",
    pris: 9990,
    enhet: "fra",
    kategori: "Belysning",
    varighet: "4–6 timer",
  },
  {
    id: "lampe-speil",
    navn: "Bytte lampe over speil",
    beskrivelse:
      "Montering av ny lampe over baderomsspeil. Inkluderer kabling og jordfeilbrytertilkobling.",
    pris: 2490,
    enhet: "fra",
    kategori: "Belysning",
    varighet: "1–2 timer",
  },

  // ── Smarthus ───────────────────────────────────────────────
  {
    id: "smart-plejd-5rom",
    navn: "Plejd smarthus – 5 rom",
    beskrivelse:
      "Installasjon av Plejd-system med dimmer og on/off-brytere for inntil 5 rom. Inkluderer utstyr, oppsett og programmering.",
    pris: 9900,
    enhet: "fra",
    kategori: "Smarthus",
    varighet: "Halvdag",
  },

  // ── Sikringsskap ───────────────────────────────────────────
  {
    id: "skap-leilighet",
    navn: "Bytte av sikringsskap – leilighet",
    beskrivelse:
      "Nytt skap med jordfeilautomater og overspenningsvern. Inkluderer demontering, dokumentasjon og sluttkontroll.",
    pris: 18500,
    enhet: "fra",
    kategori: "Sikringsskap",
    varighet: "6–10 timer",
  },
  {
    id: "skap-enebolig",
    navn: "Bytte av sikringsskap – enebolig",
    beskrivelse:
      "Større anlegg, flere kurser. Pris avhenger av eksisterende kabling og om hovedinntak må oppgraderes.",
    pris: 24900,
    enhet: "fra",
    kategori: "Sikringsskap",
    varighet: "1–2 dager",
  },
  {
    id: "varmekabler-bad",
    navn: "Varmekabler – bad opp til 6 m²",
    beskrivelse:
      "Inkluderer kabel, termostat, kontroll og dokumentasjon. Avrettingsmasse gjøres av flislegger.",
    pris: 7490,
    enhet: "fra",
    kategori: "Belysning",
    varighet: "3–5 timer",
  },

  // ── Renovering ─────────────────────────────────────────────
  {
    id: "renovering-bad",
    navn: "El-arbeider bad – standard",
    beskrivelse:
      "Elektroarbeider ved bad-renovering. Inkluderer nye kurser, varmekabler, jordfeilbryter, koordinering og dokumentasjon.",
    pris: 24900,
    enhet: "fra",
    kategori: "Renovering",
    varighet: "1–2 dager",
  },
]
