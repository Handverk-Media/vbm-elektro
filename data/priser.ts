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
  enhet: string       // f.eks. "fast pris" eller "per time"
  kategori: string
  varighet?: string   // vises som info, påvirker ikke pris
}

export const TJENESTER: Tjeneste[] = [
  // ── Elbillader ─────────────────────────────────────────────
  {
    id: "elbil-standard",
    navn: "Elbillader – standard installasjon",
    beskrivelse:
      "Montering av hjemmelader (Zaptec Go eller Easee Charge) i garasje eller carport. Inkluderer kabling fra sikringsskap, dokumentasjon og idriftsettelse.",
    pris: 6500,
    enhet: "fast pris",
    kategori: "Elbillader",
    varighet: "2–3 timer",
  },
  {
    id: "elbil-komplex",
    navn: "Elbillader – kompleks installasjon",
    beskrivelse:
      "Installasjon med krevende kabelføring, nødvendig kursoppgradering eller montering i parkeringskjeller/borettslag.",
    pris: 9500,
    enhet: "fast pris",
    kategori: "Elbillader",
    varighet: "4–6 timer",
  },

  // ── Service og kontroll ────────────────────────────────────
  {
    id: "elkontroll-bolig",
    navn: "Elkontroll bolig",
    beskrivelse:
      "Gjennomgang av sikringsskap, kurser, jordfeilbrytere og synlig installasjon. Skriftlig rapport med eventuelle avvik leveres.",
    pris: 2990,
    enhet: "fast pris",
    kategori: "Service",
    varighet: "1–2 timer",
  },
  {
    id: "feilsok-time",
    navn: "Feilsøking og retting",
    beskrivelse:
      "Diagnose og utbedring av elektrisk feil. Pris er per påbegynte time inkl. oppmøte.",
    pris: 990,
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
    pris: 3490,
    enhet: "fast pris",
    kategori: "Belysning",
    varighet: "2–3 timer",
  },
  {
    id: "downlight-10",
    navn: "Downlights – 10 stk",
    beskrivelse:
      "Montering av 10 downlights inkludert hulltakfresing og ny kabelføring. Spotlights ikke inkludert.",
    pris: 5990,
    enhet: "fast pris",
    kategori: "Belysning",
    varighet: "4–5 timer",
  },
  {
    id: "lampe-speil",
    navn: "Bytte lampe over speil",
    beskrivelse:
      "Montering av ny lampe over baderomsspeil. Inkluderer kabling og jordfeilbrytertilkobling.",
    pris: 1990,
    enhet: "fast pris",
    kategori: "Belysning",
    varighet: "1–2 timer",
  },

  // ── Smarthus ───────────────────────────────────────────────
  {
    id: "smart-plejd-5rom",
    navn: "Plejd smarthus – 5 rom",
    beskrivelse:
      "Installasjon av Plejd-system med dimmer og on/off-brytere for inntil 5 rom. App-oppsett inkludert.",
    pris: 5990,
    enhet: "fast pris",
    kategori: "Smarthus",
    varighet: "Halvdag",
  },

  // ── Renovering ─────────────────────────────────────────────
  {
    id: "renovering-bad",
    navn: "El-arbeider bad – standard",
    beskrivelse:
      "Elektroarbeider i forbindelse med bad-renovering. Inkluderer nye kurser, varmekabler, jordfeilbryter og dokumentasjon.",
    pris: 14900,
    enhet: "fast pris",
    kategori: "Renovering",
    varighet: "1–2 dager",
  },
]
