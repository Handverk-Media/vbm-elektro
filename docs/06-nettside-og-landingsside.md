# 06 · Nettside og landingsside

**Shift kundestandard · VBM Elektro AS · v2.0 · 05.08.2026**

Byggegrunnlaget for den som lager sidene — menneske eller agent. Alt innhold hentes fra dokument 00 til 04. Ingenting oppfinnes her, og ingen påstand skrives inn som ikke står i grunnlaget.

> **Utgangspunktet:** Google vurderer landingssideopplevelsen som under gjennomsnittet på nesten alle ladeord. Det er derfor 57 % av visningene tapes på rangering — ikke på budsjett.

---

## 01 · Prosjekt

| | | |
|---|---|---|
| Prosjekttype | Begge. Eksisterende nettside bygges om fra grunnen, og det etableres én dedikert landingsside for annonsetrafikken på elbillader. | ✓ |
| Prosjektnavn | VBM Elektro — nettside og LP, 2026 | ✓ |
| Domene | Siden er live, men domenet er ikke registrert i grunnlaget. Må inn før publisering, DNS og sporing kan planlegges. | ✗ |
| Språk | Norsk bokmål. Ett språk, ingen engelsk versjon. | ✓ |
| Frist | Videreutvikling av nettsiden ligger på august i vekstplanen, med landingssider per tjeneste i samme periode. | ⚠ |
| Omfang | Forside, fire tjenestesider, fire lokale sider, om oss og kontakt — samt én landingsside for elbillader. Borettslagssiden er utenfor omfang inntil systemlading er bekreftet. | ✓ |

## 02 · Grunnlag

| Dokument | Innhold |
|---|---|
| `00-kunde-og-fakta.md` | Tjenester, geografi, systemer, priser, begrensninger og åpne spørsmål. |
| `01-merkevare.md` | Posisjon, stemme, farger, typografi, bildestil og designprinsipper. |
| `02-markedsundersokelse.md` | Søkeatferd, konkurrenter, markedspriser, ordliste og innsikter. |
| `03-icp-og-kundesprak.md` | Målgrupper, kjøpssituasjoner, spørsmål, innvendinger og ordbruk. |
| `04-tilbud-budskap-og-bevis.md` | Tilbudsstruktur, budskap per situasjon, CTA og beviskartet. |
| `05-digital-strategi.md` | Godkjent retning: mål, konvertering, kundereise og prioritering. |
| Onboarding-materiale | ✗ Ikke gjennomført som eget notat. Ingen ordrette sitater fra eier. |
| Eksisterende nettside | Publisert versjon, august 2026. |
| Google Ads | Konto 596-349-6154. Kvalitetspoeng, visningsandel, enheter og søketermer, juni 2026. |

## 03 · Eksisterende nettside

| | |
|---|---|
| URL | ✗ Ikke registrert i grunnlaget. |
| Innhold som kan gjenbrukes | Grunnstrukturen i tjenestebeskrivelsene, etter kontroll mot voicelåsen. Alt som beskriver hva jobben faktisk innebærer. |
| Bilder og assets | Ingen egne bilder å gjenbruke. Logo finnes kun som JPEG med hvit bakgrunn. |
| Funksjoner som kan gjenbrukes | AI-chatten — den genererer faktisk samtaler. Må kobles til CRM før den flyttes over. Kontaktskjemaet, med bildeopplasting lagt til. |
| Må kontrolleres | All tekst mot voicelåsen i `01-merkevare.md`. Alle faktapåstander mot `00-kunde-og-fakta.md`. Geografien spesielt — Bergen står feil i en tidligere case-tekst. |
| Skal ikke videreføres | Hero-videoen i toppen. Alt som lander annonsetrafikk på forsiden. Generiske formuleringer om kvalitet og erfaring uten dekning. |

## 04 · Assets

| | | |
|---|---|---|
| Logo | JPEG, primær og invertert, begge med hvit ugjennomsiktig bakgrunn. PNG med transparens og vektorfil mangler. | ⚠ |
| Farger | #E31E25 rød, #111111 sort, #FFFFFF hvit, #F4F4F4 og #6B6B6B grå. Fem farger, ingen flere. | ✓ |
| Fonter | Geist til alt, Geist Mono til tall og etiketter. Fritt tilgjengelige. | ✓ |
| Bilder | Ingen egne bilder. Blokkerer forside, alle tjenestesider, landingssiden og Google Business-profilen. | ✗ |
| Video | Hero-video finnes, men skal ikke gjenbrukes i toppen. Kan eventuelt ligge lenger ned, lazy-lastet. | ⚠ |
| Ikoner og illustrasjoner | Ingen — og skal ikke lages. Brandguiden forbyr ikonillustrasjoner. | ✓ |
| Kundeomtaler | Ingen. Tillitsraden kan ikke vise stjerner eller antall før anmeldelsesflyten har gått en periode. | ✗ |
| Referanseprosjekter | Ingen. Tre til fem korte jobbeskrivelser ville erstattet all adjektivbruk på sidene. | ✗ |
| Sertifiseringer | Elvirksomhetsregisteret og NELFO oppgitt, ikke verifisert med nummer. Må bekreftes før de står som bevis på siden. | ⚠ |

> **Materiale som mangler — blokkerer bygging:** Priser. Telefonnummer og e-post. Bilder fra egne jobber. Logo som PNG og vektor. Organisasjonsnummer og registernummer. Uten de tre første kan ingen tjenesteside eller landingsside publiseres slik den er beskrevet her.

## 05 · Designreferanser

✗ Kunden har ikke oppgitt referanser. Radene under er Shifts observasjoner fra konkurrentgjennomgangen — hva som fungerer i markedet, ikke hva eieren liker. Bør erstattes med kundens egne svar.

| Referanse | Hva vi liker | Hva vi ikke skal kopiere |
|---|---|---|
| Kjedenes kampanjesider | Oppgir faktisk totalpris, og lister vilkårene rett under. | «Fra»-priser og kampanjespråk med utropstegn. |
| Sandvika Elektro | Egne sider per by, tydelig geografisk dekning. | Samme tekst med bynavnet byttet ut. |
| Bærum Eltek | Ett lavterskeltilbud øverst — gratis befaring. | Generisk «trygghet og lokal tilhørighet» uten bevis. |
| Energiaktørenes bestillingsflyt | Videobefaring og bildeopplasting som første steg. | Abonnementslogikk og finansiering — VBM selger håndverk. |

## 06 · Teknisk standard

**Stack:** React, JavaScript, Tailwind CSS.

> **Faktisk stack (denne økten):** Kodebasen som drives i dag (`erikeriksen82-rgb/vbm-elektro`) er Next.js 16 / React 19, med globalt CSS (`app/globals.css`) — ikke Tailwind. Følg det som faktisk står i repoet, ikke stack-beskrivelsen over, ved videre bygging.

**Krav:** Responsivt design, mobilprioritert. Gjenbrukbare komponenter og ryddig prosjektstruktur. Semantisk HTML. Tilgjengelig navigasjon og skjema. Optimaliserte bilder og god ytelse. Begrenset bruk av unødvendige avhengigheter. Enkel redigering av tekst, bilder og kontaktinformasjon. SEO-grunnlag. Analyse og konverteringssporing.

> **Ett krav over alle andre:** Ingen tung video eller stort bilde i toppen. Hastighet på mobil er den direkte årsaken til lave kvalitetspoeng, som er den direkte årsaken til at 57 % av visningene tapes. 71 % av trafikken er mobil.

## 07 · Nettside

| | |
|---|---|
| Formål | Gjøre annonsetrafikken om til henvendelser, og svare på prisspørsmålet før kunden må stille det. Sekundært: heve kvalitetspoengene i Google Ads, slik at klikkprisen faller og synligheten stiger uten økt budsjett. |
| Forretningsmål | Flere befaringer på samme annonsebudsjett. Lavere klikkpris. Færre tapte henvendelser fordi alle kanaler lander i CRM. |
| Primær handling | Ring. Nummeret i toppen på alle sider og som fast knapp nederst på mobil. |
| Sekundære handlinger | Send bilde av sikringsskapet via skjema. Start chat. Be om befaring. |
| Viktigste brukergrupper | Huseier som skal ha ladeboks montert. Huseier med en avgrenset jobb som vil vite prisen først. Boligselger med gammelt anlegg. Næring er ikke prioritert på siden ennå. |
| Viktigste brukerbehov | Forstå hva det koster og hva som er inkludert. Vurdere om firmaet er til å stole på. Kunne ringe eller sende bilde på under ti sekunder, fra mobil. |
| Prioriterte tjenester | Elbillader ferdig montert. Elektriker til fast pris. Sikringsskap og elsjekk. |
| Prioriterte områder | Drammen, Asker, Bærum. Oslo sekundært. |

## 08 · Nettsidens struktur

Struktur etter søkeintensjon, ikke etter organisasjonskart. Én side per ting folk faktisk søker på. Rekkefølgen er byggerekkefølgen.

| Side | Formål | Målgruppe | Viktigste innhold | Primær handling |
|---|---|---|---|---|
| Forside | Etablere posisjonen og lede til riktig tjeneste | Alle | Løftet, de tre stegene, tjenestene, tillitsraden | Ring |
| Elbillader | Ta imot 81 % av annonsetrafikken og utløse befaring | Huseier med elbil | Pris, hva som er inkludert, hva som kommer i tillegg, tidsbruk | Send bilde av sikringsskapet |
| Priser | Svare på prisspørsmålet som driver all trafikk | Undersøkende huseier | Timepris, typiske jobber, hva som utløser tillegg | Ring |
| Sikringsskap | Fange oppsalg fra ladejobber og eldre anlegg | Huseier med gammelt anlegg | Når skapet må byttes, hva jobben innebærer, dokumentasjon | Be om befaring |
| Elsjekk | Selge trygghet og dokumentasjon ved boligsalg | Boligselger | Hva som sjekkes, rapporten, elsjekk vs. el-kontroll | Bestill elsjekk |
| Feilsøking | Fange akutt behov med ett trykk til telefon | Akutt, stresset | Nummer, hva som skjer når du ringer, utrykningspris | Ring nå |
| Drammen · Asker · Bærum · Oslo | Fange lokale søk organisk i stedet for å betale 37–47 kr per klikk | Lokalsøkende | Utførte jobber i området, dekning, kjøreavstand | Ring |
| Om oss · Kontakt | Vise hvem som kommer hjem til deg | Skeptikeren | Ansikt, navn, sertifisering, organisasjonsnummer | Ring |
| Borettslag | På vent — krever bekreftelse på systemlading | Styre, forvalter | Laderetten, kostnadsfordeling, trinnvis utbygging | Be om beslutningsgrunnlag |

**Navigasjon:** Flat meny med tjenestene direkte synlige — ingen nedtrekk med undernivåer. Telefonnummeret i toppen på alle sider, ikke bak «Kontakt». På mobil: fast ring-knapp nederst hele veien ned. Lokale sider lenkes fra tjenestesidene, ikke fra hovedmenyen.

**Må forstås først:** Hva tjenesten koster og hva som er inkludert. At man kan ringe med én gang. At firmaet er sertifisert og finnes på ordentlig.

**Kan komme senere:** Historien om selskapet. Detaljer om norm og forskrift. Lokale sider og referanser.

**Skal ikke være med:** Hero-video over folden. Tjenester VBM ikke markedsfører. Nyhetsbrev, bloggkarusell, feed fra sosiale medier. Cookiebanner som dekker halve mobilskjermen.

**Kundereise:** Søk på pris → landing rett på tjenestesiden → prisen og hva som er inkludert leses over folden → to–tre spørsmål besvares nedover → ring eller send bilde av sikringsskapet → bekreftelse med én gang og varsel til VBM i CRM → svar samme dag → befaring og skriftlig pris → jobb → samsvarserklæring i Boligmappa → én forespørsel om Google-anmeldelse.

## 09 · Sidetyper

### Sidetype A · Prioritet 1 — Tjenesteside

| | |
|---|---|
| Formål | Utløse en henvendelse på akkurat den tjenesten. |
| Målgruppe | Huseier med et konkret behov, som allerede har søkt på tjenesten. |
| Kjøpssituasjon | Planlagt behov eller sammenligningsfase. |
| Viktigste spørsmål | Hva koster det? Hva er inkludert? Hva kan komme i tillegg? Hvor lang tid tar det? Får jeg papirene? |
| Innhold | Fast seksjonsrekkefølge — se punkt 10. |
| Bevis | Prosessen. Sertifisering og registrering når verifisert. Bilder fra egne jobber når de finnes. |
| Primær / sekundær handling | Ring / send bilde av sikringsskapet. |
| Relasjon til andre sider | Lenker til prissiden og til den lokale siden for området. Aldri til andre tjenester midt i teksten. |
| SEO-intensjon | Kjøpsorientert: tjeneste pluss pris eller «ferdig montert». |

### Sidetype B · Prioritet 4 — Lokal side

| | |
|---|---|
| Formål | Fange lokale hodeord organisk, der annonseprisen er 37–47 kr per klikk. |
| Målgruppe | Den som søker «elektriker» pluss sted — ofte akutt, ofte uten å ha bestemt tjeneste. |
| Viktigste spørsmål | Kommer dere hit? Hvor fort? Hva koster kjøringen? Hva gjør dere i mitt område? |
| Innhold | Ekte jobber utført i området, dekningsområde, kjøreavstand, lenker til tjenestesidene. Ikke samme tekst med bynavnet byttet ut. |
| Blokkering | Krever referansejobber fra hvert område. Kan ikke bygges troverdig uten. |

### Sidetype C · Prioritet 3 — Akuttside

| | |
|---|---|
| Formål | Ett trykk til telefon. Ingenting annet. |
| Kjøpssituasjon | Akutt. Personen leser ikke — hun scanner etter et nummer. |
| Innhold | Nummer øverst og stort. Hva som skjer når du ringer. Hva utrykning koster. Tre linjer om hva vi vanligvis finner. |
| Blokkering | Krever utrykningspris og en avklaring på faktisk tilgjengelighet. VBM skal ikke love døgnvakt. |

## 10 · Struktur og copy — tjenesteside

Fast seksjonsrekkefølge for hver tjenesteside. Samme rekkefølge hver gang — én side, ett mål.

1. **Overskrift med kundens egne ord.** «Ladeboks ferdig montert» — ikke «komplett ladeløsning».
2. **Prisen, over folden.** Et tall, eller en tydelig ramme med hva som avgjør. Aldri «ta kontakt for pris».
3. **Telefonnummer og skjema.** I toppen og nederst. Fast ring-knapp nederst på mobil hele veien ned.
4. **Dette er med — dette kommer i tillegg.** To lister ved siden av hverandre. Her avgjøres tilliten.
5. **De tre stegene.** Samme rekkefølge og samme ord som på forsiden. Aldri omskrevet.
6. **Bilder fra ekte jobber.** Ferdig montert lader, ryddig sikringsskap. Ingen arkivbilder.
7. **Spørsmålene fra `03-icp-og-kundesprak.md`,** besvart der de oppstår — ikke i et trekkspill nederst.
8. **Tillitsraden.** Sertifisering, Elvirksomhetsregisteret, NELFO, svartid, anmeldelser. Tekst og tall.
9. **Avslutning med samme handling som i toppen.** Én primærknapp, ingen konkurrerende valg.

| Leveranse | Fil | Status |
|---|---|---|
| Godkjent sidekart | Punkt 08 i dette dokumentet | ⚠ Ikke godkjent av kunde |
| Godkjent struktur per side | Punkt 10 i dette dokumentet | ⚠ Ikke godkjent av kunde |
| Godkjent copy | Ikke skrevet — blokkert av manglende priser | ✗ Mangler |

## 11 · Funksjoner og integrasjoner

| Funksjon | Formål | Krav |
|---|---|---|
| Klikkbart telefonnummer | Primær konvertering | tel:-lenke, fast knapp nederst på mobil, telles som konvertering |
| Kontaktskjema med bildeopplasting | Sekundær konvertering — gir VBM grunnlag for å svare presist | Navn, telefon, sted, hva det gjelder, bilde av sikringsskap. Ikke flere felter |
| AI-chat | Fange dem som ikke vil ringe | Må lande i CRM med varsel. Fem samtaler gikk tapt i juni fordi den ikke var koblet |
| Bekreftelsesside | Fortelle hva som skjer videre, og gi sporingen et konverteringspunkt | Egen URL, ikke bare en melding i skjemaet |
| Ikke bygg | Kalkulator, booking, kundeportal, nyhetsbrev | Ingen dokumentert nytte i dette markedet |

| | | |
|---|---|---|
| CRM | GHL. Alle tre kanaler skal lande her med varsel til VBM. E-posten kobles under onboarding. | ⚠ |
| E-post og SMS | Automatisk kvittering til kunde. Anmeldelsesflyt etter fullført oppdrag. | ✗ |
| Annonseplattformer | Google Ads, konto 596-349-6154. Meta planlagt fra september. | ✓ |
| Kalender og booking | Ikke aktuelt. Befaring avtales i telefon. | — |

## 12 · Nettsidens SEO

| | |
|---|---|
| Skal indekseres | Ja, alle sider. Organisk synlighet er den eneste veien forbi volumtaket på de billige annonsesøkene. |
| Primære søkeintensjoner | Pris på elbillader ferdig montert. Zaptec-montering. Timepris elektriker. |
| Sekundære søkeintensjoner | Elektriker pluss sted. Bytte sikringsskap. Elsjekk ved boligsalg. Akutt feilsøking. |
| Metadata | Egen tittel og beskrivelse per side, med tjeneste og sted. Tittel under 60 tegn, beskrivelse under 155. Prisen med i beskrivelsen der den finnes. |
| Internlenking | Tjenesteside → prisside og lokal side. Lokal side → tjenestesider. Forside → alle tjenester. Ingen lenker som leder ut av en konverteringsflyt midt i teksten. |
| Strukturert data | LocalBusiness eller Electrician med adresse, åpningstider og dekningsområde. FAQPage på sidene med spørsmål og svar. Ikke AggregateRating før anmeldelser finnes. |
| Sitemap · robots · canonical | Sitemap.xml generert automatisk. Robots.txt åpen. Canonical på alle sider — særlig viktig mellom landingssiden og tjenestesiden for elbillader, som overlapper. |
| Open Graph og delingsbilder | Ett delingsbilde per tjeneste, fra egne jobber. Kan ikke lages før bildene finnes. |

**URL-struktur:**

| Side | URL | Primær søkeintensjon |
|---|---|---|
| Forside | / | Merkevare og navigasjon |
| Elbillader | /elbillader | pris elbillader ferdig montert |
| Priser | /priser | elektriker timepris |
| Sikringsskap | /sikringsskap | bytte sikringsskap |
| Elsjekk | /elsjekk | elsjekk bolig pris |
| Feilsøking | /feilsoking | elektriker akutt |
| Lokale sider | /elektriker-drammen · /elektriker-asker · /elektriker-baerum · /elektriker-oslo | elektriker [sted] |
| Om oss · Kontakt | /om-oss · /kontakt | Navigasjon og tillit |
| Landingsside | /ladeboks-ferdig-montert | elbillader ferdig montert pris |

> **Avvik denne økten:** Kodebasen bruker i dag `/tjenester/elbillader` for tjenestesiden (ikke `/elbillader`), og `/priser`, `/faq`, `/kontakt`, `/om-oss` finnes allerede. En egen opt-in-landingsside på root-nivå (`/elbillader` eller `/ladeboks-ferdig-montert`) er IKKE bygget ennå på `main` — kun som utkast i to ikke-sammenslåtte branches (`claude/campaign-landing-page-oh0f6p` og `elbillader-kampanjeside-fra-handverk-media`), og begge bruker uverifiserte priser. Reelt neste steg: velg URL, avklar pris med Benjamin, reconciler de to branch-utkastene, bygg på nytt eller oppdater ett av dem mot bekreftede tall.

## 13 · Landingsside

Én landingsside prioriteres nå: den som tar imot annonsegruppen «Elbillader» — 81 % av forbruket og 77 av 94 klikk.

| | |
|---|---|
| Trafikkilde | Google Search. Kampanjen «VBM \| Søk \| Drammen-Asker-Bærum», annonsegruppen Elbillader. 71 % mobil. |
| Bevissthetsnivå | Kjenner løsningen, men ikke virksomheten — mange søker allerede på «zaptec go ferdig montert». Produktet er valgt; montøren er ikke. |
| Ett mål | Utløse en henvendelse om ladeboks. |
| Primær konvertering | Anrop. Sekundært skjema med bilde av sikringsskapet. |
| Målgruppe | Huseier i Drammen, Asker eller Bærum som skal ha ladeboks hjemme. Betaler selv, kan ikke faget. |
| Kjøpssituasjon | Elbil er kjøpt eller bestilt. Hun sitter med mobilen om kvelden og prøver å finne ut hva det koster å få lader på veggen. |
| Tilbud | Ladeboks ferdig montert til fast pris: lader, egen kurs, jordfeilvern, montering og samsvarserklæring i Boligmappa. |
| Forventning fra annonsen | Hun har klikket på et prisløfte. Første linje må derfor være prisen — ikke en velkomsthilsen. Ordet fra søket skal stå i overskriften. |
| Etter konvertering | Bekreftelse på egen takkeside med hva som skjer videre og når. Varsel til VBM i CRM med én gang. Kvittering på e-post eller SMS. |

## 14 · Landingssidens innhold

**Fem spørsmål siden må besvare:**
1. Hva koster det, alt inkludert?
2. Hva er med i prisen, og hva kan komme i tillegg?
3. Tåler sikringsskapet mitt en lader — og hvordan finner dere ut av det?
4. Hvor lang tid tar det, og når kan dere komme?
5. Får jeg papirene, og hvem er dere?

**Tre innvendinger:**
- «Jeg fant en som gjør det billigere.» Møtes med hva som faktisk er inkludert, punkt for punkt.
- «Kommer det tillegg etterpå?» Møtes med at tillegg avklares før, ikke etter.
- «Jeg har aldri hørt om dere.» Møtes med det som kan sjekkes: organisasjonsnummer og registrering.

| Bevis som brukes | Distraksjoner som fjernes |
|---|---|
| Hva som er inkludert, punkt for punkt | Hovedmeny og lenker til andre tjenester |
| De tre stegene | Selskapets historie |
| Sertifisering og registrering, når verifisert | Blogg, sosiale medier, nyhetsbrev |
| Bilder fra ekte jobber, når de finnes | Alt som ikke handler om ladeboks |

## 15 · Landingssidens struktur og copy

| Nr | Seksjon | Formål | Hvorfor den er med |
|---|---|---|---|
| 01 | Overskrift med søkeord + pris | Bekrefte at hun er på riktig sted | Annonsen lovet en pris. Alt annet føles som en omvei |
| 02 | Ring-knapp og bildeopplasting | Gjøre handling mulig med én gang | 71 % er mobil, ofte om kvelden |
| 03 | Dette er med — dette kommer i tillegg | Ta bort den største innvendingen | «Fra»-priser er markedets svakhet |
| 04 | De tre stegene | Vise at prosessen er tenkt gjennom | Ingen konkurrent forklarer hva som skjer etter at du ringer |
| 05 | Bilder fra ekte jobber | Gjøre løftet konkret | Dokumentasjon slår stemning |
| 06 | Fem spørsmål og svar | Fjerne resten av usikkerheten | Hentet fra faktiske søk |
| 07 | Tillitsrad | Bekrefte at firmaet er ekte | Skeptikeren sjekker alltid dette |
| 08 | Samme handling som i toppen | Konvertere den som leste hele veien | Ingen skal måtte scrolle opp igjen |

| | |
|---|---|
| Hovedbudskap | Ladeboks ferdig montert. Prisen du får, er prisen du betaler. |
| Støttebudskap | Send bilde av sikringsskapet, få skriftlig pris samme dag. Egen kurs, jordfeilvern og papirer i Boligmappa er med. Tillegg avklares før, ikke etter. |
| CTA | «Ring oss» som primær. «Send bilde og få pris» som sekundær. Alternativer å teste: «Få prisen skriftlig» og «Sjekk om anlegget ditt holder». |
| Godkjent copy | ✗ Ikke skrevet. Blokkert av manglende pris. |

## 16 · Landingssidens funksjoner og SEO

| | |
|---|---|
| Skjemafelt | Navn, telefon, sted, hva det gjelder, og bildeopplasting for sikringsskap og kursfortegnelse. Ikke flere felter enn det. |
| Bekreftelse | Egen takkeside på /takk, med hva som skjer videre og når. Gir sporingen et rent konverteringspunkt. |
| Telefon | Klikkbart nummer, fast knapp nederst på mobil. Telefonklikk telles som konvertering. |
| Skal indekseres | Ja. Siden skal også fange organisk trafikk på «elbillader ferdig montert pris». Canonical settes bevisst mot tjenestesiden dersom innholdet overlapper. |
| Strukturert data | FAQPage på de fem spørsmålene. Service med områdedekning. Ikke pris i markup før prisen er bekreftet. |

## 17 · Analyse og sporing

Dette er den mest kritiske delen av hele prosjektet. Uten sporing kan vi ikke si hva et lead koster, og Google kan ikke optimalisere mot noe.

| Konvertering | Verktøy | Status |
|---|---|---|
| Skjema sendt | GA4 + Google Ads, via takkeside | ✗ Ikke satt opp |
| Telefonklikk | GA4 + Google Ads | ✗ Ikke satt opp |
| Chat startet | GA4 + CRM | ✗ Ikke satt opp |
| gclid til CRM | GTM + skjult skjemafelt | ✗ Kritisk mangel |
| Enhanced Conversions | Google Ads | ✗ Venter på kodebit |

> **Status denne økten:** Kodebasen har allerede en del av dette: `lib/utm.ts` og `hooks/useGclid.ts` fanger UTM/gclid og sender dem med i `ContactForm`/`BefaringModal`-innsendinger til `/api/befaring-lead`, som poster videre til en GHL-webhook. Det finnes også en `Meta Pixel`-commit i historikken («Legg til Meta Pixel, koblet til eksisterende cookie-consent»). Om GA4/GTM-konverteringshendelser og Enhanced Conversions faktisk er koblet opp i Google Ads-kontoen (ikke bare i koden) er ikke verifisert av denne standarden — bør sjekkes før det merkes ✓ her.

**Verktøy som skal settes opp:** Google Tag Manager, GA4, Search Console, Google Ads-konvertering. Meta Pixel når Meta starter i september. Clarity er valgfritt, men billig innsikt i hvor folk stopper.

**Test av sporing:** Hver konvertering testes manuelt før publisering: fyll ut skjema, klikk nummer, start chat. Kontroller at hendelsen kommer inn i GA4 og Ads, og at kontakten dukker opp i CRM med kilde.

**Merknad:** Google auto-tagger klikk med gclid, ikke UTM. Så lenge gclid ikke sendes videre til CRM, kan Google-leads ikke skilles fra organiske — og all CPL-rapportering blir manuell og omtrentlig.

## 18 · Hosting og publisering

| | | |
|---|---|---|
| Hosting | Ikke avklart. Statisk hosting med CDN er tilstrekkelig for denne stacken. | ✗ |
| Domene og DNS | Domenet er i drift, men hvem som eier det og hvor DNS ligger er ikke registrert. Må avklares før relansering. | ✗ |
| Repository og branch | Ikke opprettet. Anbefalt: main som produksjon, publisering ved push. | ✗ |
| Miljøvariabler | CRM-endepunkt, GTM-ID, skjema-nøkkel. Ingen nøkler i klientkoden. | ⚠ |
| SSL | Påkrevd på alle miljøer. | ✓ |

> **Status denne økten:** Repo og branch finnes: `erikeriksen82-rgb/vbm-elektro`, `main`, hostet på Vercel (`.vercel/project.json` i repoet). Domene/DNS-eierskap fortsatt ikke bekreftet i noe dokument.

## 19 · Ferdig når

- [ ] Godkjent struktur er implementert
- [ ] Godkjent copy er implementert
- [ ] Riktige assets er brukt
- [ ] Designet følger merkevaren
- [ ] Nettsiden fungerer på mobil, nettbrett og desktop
- [ ] Alle knapper og lenker fungerer
- [ ] Skjema og bekreftelse fungerer
- [ ] Alle integrasjoner fungerer — særlig at alle tre kanaler lander i CRM
- [ ] Analyse og konverteringer er testet manuelt
- [ ] SEO-metadata er på plass
- [ ] Sitemap og robots.txt er korrekt
- [ ] Strukturert data er testet
- [ ] Bildene er optimalisert, og ingen video ligger over folden
- [ ] Det finnes ingen plassholdertekst
- [ ] **Det finnes ingen oppdiktede fakta eller udokumenterte påstander** — kontrolleres mot `00-kunde-og-fakta.md` og beviskartet i `04-tilbud-budskap-og-bevis.md`
- [ ] Det finnes ingen brutte lenker
- [ ] Publisert løsning er kontrollert på eget domene

## 20 · Notater

Rekkefølgen på arbeidet er gitt av grunnlaget, ikke av budsjettet. Fire ting må på plass før noen side kan publiseres slik dette dokumentet beskriver den: priser, telefonnummer og e-post, CRM-kobling, og bilder fra egne jobber.

Det som kan gjøres uavhengig av kunden i mellomtiden: fjerne hero-videoen, sette opp sporing og GTM, bygge sidestrukturen med reell copy der vi har dekning, og forberede metadata og strukturert data. Det alene vil løfte kvalitetspoengene.

---

*06 · Nettside og landingsside — Én side, ett mål*
