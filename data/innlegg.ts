export interface Innlegg {
  slug: string
  tittel: string
  ingress: string
  innhold: string
  dato: string
  kategori: string
  lesetid: number
}

export const INNLEGG: Innlegg[] = [
  {
    slug: "slik-velger-du-elbillader-2026",
    tittel: "Slik velger du riktig elbillader i 2026",
    kategori: "Elbillading",
    dato: "2026-04-28",
    lesetid: 5,
    ingress:
      "Med dusinvis av lademodeller på markedet er det lett å bli forvirret. Vi gjennomgår de viktigste faktorene – effekt, smartfunksjoner og installasjonskrav – slik at du kan ta et informert valg.",
    innhold: `
## Hvorfor valget av lader er viktigere enn du tror

En elbillader er ikke bare en kontakt i veggen. Den bestemmer hvor raskt du lader, hvor enkelt du kan overvåke forbruket og om du kan integrere ladingen med resten av hjemmets strømstyring. Et feil valg kan bety unødvendig kostnad, støy på nettet eller at du må bytte ut utstyret etter noen år.

## Effekt: 7,4 kW eller 11 kW?

For de fleste norske husstander er **7,4 kW** (1-fase) mer enn nok. Det gir deg ca. 45 km rekkevidde per time lading – nok til å fylle opp en tom batteripakke over natten.

**11 kW** (3-fase) gir 3 ganger så rask lading og er aktuelt hvis du har:
- Elbil med 3-fase ombordlader
- Lang kjøretur daglig og lite tid til lading
- Ønske om fremtidssikring

Merk: ikke alle biler støtter 11 kW hjemmelading. Sjekk bilens maks AC-ladekapasitet.

## Smartfunksjoner du bør se etter

En god hjemmelader bør ha:

- **Lastbalansering** – justerer ladeeffekten automatisk slik at du ikke utløser sikringen
- **Strømstyring via app** – sett ladetider på natta når strøm er billigere
- **Dynamisk styring** – kobles mot smartmåler og tilpasser seg sanntidsforbruk
- **OCPP-støtte** – åpen protokoll som gjør det mulig å bytte tjenesteleverandør

## Anbefalte modeller i 2026

**Zaptec Go** er den mest populære i Norge og fungerer godt i leilighetskomplekser og rekkehus med delt nettanlegg. **Easee Home** er brukervennlig og ser bra ut. Begge støtter dynamisk lastbalansering og har gode apper.

For næringsbygg og garasjeanlegg med mange ladere anbefales **Zaptec Pro** eller **DEFA Power**.

## Installasjonskrav

Uansett hvilken lader du velger, **må en autorisert elektriker stå for installasjonen**. Dette er lovpålagt i Norge og er nødvendig for å få godkjent anlegget hos Eltilsynet. En god elektriker vil:

1. Vurdere kapasiteten i sikringsskapet
2. Trekke dedikert kurs til laderen
3. Dokumentere anlegget med samsvarserklæring
4. Aktivere garantien på ladeboksen

## Hva koster det?

I Bærum og Oslo-området koster en standard installasjon av Zaptec Go eller Easee Home fra kr 9 990 inkl. materiell. Komplekse installasjoner med lang kabeltrekk, graving eller oppgradering av sikringsskap koster mer.

Ta kontakt for et uforpliktende tilbud – vi befarer og priser jobben gratis.
    `.trim(),
  },
  {
    slug: "elkontroll-bolig-hva-koster-det",
    tittel: "Elkontroll bolig: Hva sjekkes – og hva koster det?",
    kategori: "Elkontroll",
    dato: "2026-04-14",
    lesetid: 4,
    ingress:
      "Mange boligeiere vet ikke at el-anlegget bør kontrolleres jevnlig. Her forklarer vi hva en elkontroll innebærer, hva elektriker ser etter, og hva du kan forvente å betale i Bærum og Oslo.",
    innhold: `
## Hva er en elkontroll?

En elkontroll er en systematisk gjennomgang av boligens elektriske anlegg. Formålet er å avdekke feil, slitasje eller mangler som kan utgjøre en brann- eller el-sikkerhetsrisiko.

I Norge anbefaler Direktoratet for samfunnssikkerhet og beredskap (DSB) at boligeiere kontrollerer el-anlegget minst hvert 20. år – og ved kjøp av brukt bolig.

## Hva sjekkes?

En autorisert elektriker vil typisk gå gjennom:

- **Sikringsskap og kursoppsett** – alder, kapasitet og jordfeil
- **Stikkontakter og brytere** – løse festepunkter, skadde deksler, feil jordforbindelser
- **Varmgang** – spor etter overoppheting rundt stikkontakter og koblinger
- **Gamle installasjoner** – umerkede kurser, ulovlige koblingsbokser, gammelt kabel-type
- **Utelyst og vann** – fuktskader, belysning i bad etter ny forskrift
- **Dokumentasjon** – finnes det samsvarserklæring på utført arbeid?

## Tegn på at du bør bestille elkontroll nå

- Anlegget er fra før 2000
- Sikringen løser ut ofte
- Det lukter svidd fra skap eller stikkontakter
- Du er usikker på hva halvparten av kursene i skapet er
- Du planlegger å selge boligen

## Pris for elkontroll i Bærum og Oslo

En standard elkontroll av enebolig eller leilighet koster fra **kr 2 990** hos VBM Elektro. Prisen inkluderer gjennomgang av sikringsskap, stikkontakter og synlige installasjoner, samt en skriftlig rapport med eventuelle avvik.

Hvis det avdekkes feil som bør utbedres, gis det tilbud på dette separat – aldri noe overraskende ekstraregning uten godkjenning.

## Hva skjer etter kontrollen?

Du mottar en skriftlig rapport. Avvik deles inn i tre kategorier:

1. **Farlige feil** – må utbedres umiddelbart
2. **Avvik** – bør utbedres innen rimelig tid
3. **Anmerkninger** – bør vurderes ved neste oppgradering

For boligkjøpere kan en elkontroll-rapport brukes som dokumentasjon i forbindelse med takst og boligsalg.

Ta kontakt for bestilling – vi rykker ut i Bærum, Oslo og Asker.
    `.trim(),
  },
  {
    slug: "smarthus-plejd-guide",
    tittel: "Smarthus med Plejd: Komplett guide for norske boliger",
    kategori: "Smarthus",
    dato: "2026-03-31",
    lesetid: 6,
    ingress:
      "Plejd er det enkleste og mest elegante smarthussystemet på markedet for norske boliger. Her er alt du trenger å vite – fra hva det er, til hva det koster og hva en elektriker gjør.",
    innhold: `
## Hva er Plejd?

Plejd er et svensk smarthussystem som lar deg styre lys, dimming og stikkontakter trådløst – uten å legge om hele el-anlegget. Komponentene monteres bak eksisterende lysbryterog stikkontakter og kommuniserer med hverandre via Bluetooth Mesh.

Det er ingen hub, ingen internettavhengighet for lokal styring og ingen synlig kabling. Systemet fungerer med Apples HomeKit, Google Home og Amazon Alexa.

## Hva kan du styre med Plejd?

- **Lysstyring** – dim og slukk lys fra app, tidsur eller bevegelsessensor
- **Stikkontakter** – styr varmepumpe, vifteovner eller kaffetrakteren automatisk
- **Scener** – "Film", "God natt", "Middag" – ett trykk aktiverer flere enheter
- **Tidsur og astronomiklokke** – lyset slår seg av ved solnedgang, varmer opp huset automatisk
- **Fjernkontroll** – styr hjemmet ditt fra mobilen uansett hvor du er

## Installasjon: Hva gjør elektriker?

Plejd-komponenter monteres inne i koblingsboksen bak lysbryteren. Det krever en **autorisert elektriker** å installere. Typisk arbeidsomfang for 5 rom:

1. Demontering av eksisterende brytere
2. Montering av Plejd-dimmer eller relé i koblingsboks
3. Montering av Plejd-trykknapp/ramme utenpå
4. Konfigurering av app og scene-oppsett
5. Test av alle funksjoner

## Hvilke rom passer det best til?

Plejd fungerer i alle rom, men gir størst verdi i:

- **Stue** – dimstyring og scener for ulike stemninger
- **Soverom** – gradvis dimming om morgenen, automatisk av om kvelden
- **Kjøkken** – styring av arbeidsbelysning og ventilasjon
- **Gang og uteplass** – bevegelsesstyrt lys som slukker automatisk

## Hva koster Plejd-installasjon?

En installasjon for **5 rom** koster fra **kr 9 900** inkl. materiell og arbeid hos VBM Elektro. Prisen varierer etter antall rom, typen brytere og eventuelle ekstrafunksjoner som sensorer og stikkontakter.

## Er Plejd fremtidssikkert?

Ja. Plejd er en av de mest utbredte smarthusplattformene i Norden, og systemet oppdateres jevnlig. Bluetooth Mesh-protokollen er en åpen standard, og integrasjonen mot HomeKit, Google Home og Alexa gjør at du ikke er låst til én plattform.

Vil du vite mer? Vi gir gratis veiledning og tilbud på installasjon.
    `.trim(),
  },
  {
    slug: "nek-400-krav-bolig",
    tittel: "NEK 400 forklart: Hva betyr reglene for din bolig?",
    kategori: "Regelverk",
    dato: "2026-03-17",
    lesetid: 4,
    ingress:
      "NEK 400 er den norske standarden for elektriske lavspenningsanlegg. Mange har hørt om den, men få vet hva den faktisk krever – og hva det betyr for deg som boligeier.",
    innhold: `
## Hva er NEK 400?

NEK 400 er den norske standarden for installasjon og vedlikehold av elektriske lavspenningsanlegg i bygg. Den er utgitt av Norsk Elektroteknisk Komité (NEK) og oppdateres med jevne mellomrom i takt med ny teknologi og nye forskriftskrav.

Standarden er ikke en lov i seg selv, men den er hjemlet i Forskrift om elektriske lavspenningsanlegg (FEL) – som gjør den i praksis bindende for alt el-arbeid i norske boliger og bygg.

## Hva regulerer NEK 400?

NEK 400 dekker et bredt spekter av el-installasjoner:

- **Sikringsskap** – krav til kurser, merking og jordfeilutstyr
- **Stikkontakter og bryteranlegg** – plassering, antall og type
- **Baderomsinstallasjon** – soneinndeling og krav til beskyttelsesklasse
- **Utebelysning og lavspenningsanlegg**
- **EV-lading** – krav til ladeinfrastruktur i bolig og garasje
- **Solcellepanel og batterilagring**

## Hva betyr det for deg som boligeier?

Som boligeier er du ikke pålagt å kjenne standarden selv – det er elektrikerens ansvar. Men det er nyttig å vite at:

1. **Alt el-arbeid skal dokumenteres** med en samsvarserklæring
2. **Ulovlig el-arbeid gir ikke forsikringsdekning** ved brann
3. **Manglende dokumentasjon** kan skape problemer ved boligsalg
4. **Eldre anlegg** er ikke automatisk ulovlige, men utbedringer skal følge gjeldende NEK 400

## Samsvarserklæring – hva er det?

En samsvarserklæring er et dokument som elektriker utfeder etter utført arbeid. Den bekrefter at arbeidet er utført i samsvar med NEK 400 og gjeldende forskrifter. Du bør alltid kreve dette ved alt el-arbeid.

VBM Elektro leverer alltid samsvarserklæring på utført arbeid – det er standard, ikke tilleggstjeneste.

## Ny NEK 400 – hva er endret?

Den seneste revisjonen av NEK 400 har blant annet skjerpet kravene til:
- Jordfeilinspeksjon og AFCI-vern
- EV-lading og ladekurs
- Solcellepanel og batterilagring
- Tilgjengelighet for personer med funksjonsnedsettelse

Usikker på om ditt anlegg er i henhold? Bestill en elkontroll – vi sjekker og rapporterer.
    `.trim(),
  },
  {
    slug: "elbillader-barum-asker-priser",
    tittel: "Elbillader Bærum og Asker: Priser, modeller og hva du bør vite",
    kategori: "Elbillading",
    dato: "2026-03-03",
    lesetid: 5,
    ingress:
      "Planlegger du å installere elbillader i Bærum eller Asker? Her er en komplett oversikt over priser, godkjente modeller og hva du bør spørre elektriker om – oppdatert for 2026.",
    innhold: `
## Elbillading i Bærum og Asker

Bærum og Asker er blant kommunene i Norge med høyest andel elbiler. Det betyr at de fleste elektriker-firmaer i området har solid erfaring med ladeinstallasjon – men priser og kvalitet varierer mye.

Her er det du trenger å vite før du ringer en elektriker.

## Hvilke lademodeller er godkjent?

I Norge må hjemmeladere oppfylle krav i NEK 400 og produktforskriften. Anerkjente modeller som er godt etablert i markedet:

- **Zaptec Go** – markedsleder i Norge, støtter lastbalansering og dynamisk styring
- **Easee Home** – elegant design, brukervennlig app
- **Garo Entity** – god ytelse og enkel installasjon
- **DEFA Power** – pålitelig norsk merke med god support

Alle disse leveres med 7,4 kW (1-fase) eller 11 kW (3-fase) og har apper for smart ladekontroll.

## Hva koster installasjon i Bærum og Asker?

Prisene varierer basert på:
- Avstand fra sikringsskap til garasje
- Om det kreves graving i bakken
- Kapasiteten i eksisterende anlegg
- Antall ladepunkter

**Typiske priser (inkl. materiell og arbeid):**

| Type installasjon | Pris fra |
|---|---|
| Standard (< 10m kabel, enkel) | kr 9 990 |
| Kompleks (lang trekk, graving) | kr 14 900 |
| Borettslag / sameie (per enhet) | Etter befaring |

## Støtteordninger

Enova gir **støtte på opptil kr 5 000** per ladepunkt for privatpersoner i eneboliger og rekkehus. Søknaden sendes inn etter ferdig installasjon via enova.no. VBM Elektro leverer den nødvendige dokumentasjonen.

## Hva gjør VBM Elektro?

Vi er autorisert installasjonsbedrift og offisiell installatør for Zaptec og Easee. Etter en gratis befaring:

1. Vurderer vi kapasitet og kabelføring
2. Anbefaler riktig modell og effekt
3. Installerer og dokumenterer anlegget
4. Sender samsvarserklæring til Eltilsynet
5. Hjelper deg med Enova-søknad

Ring oss på 90 63 31 18 eller book gratis befaring – vi rykker ut i Bærum, Sandvika, Billingstad, Lysaker, Fornebu og Asker.
    `.trim(),
  },
]
