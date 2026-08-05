# CLAUDE.md — VBM Elektro

Kontekst for alt arbeid på VBM Elektros nettside og markedsføring.

---

## Hvem er hvem

**VBM Elektro AS** — elektrikerfirma på Billingstad. Kunde. Kontaktperson Benjamin.
**Håndverk Media** — byrået. Drifter nettside, annonser og oppfølging.
**Claude Code** — bygger nettside og landingssider.

VBM logger aldri inn i CRM eller annonsekontoer. De ringer kunden, gir pris, gjør jobben og svarer på én statusmelding i uka.

---

## Les alltid dette først

`docs/00-kunde-og-fakta.md` er eneste sannhetskilde for tall, priser, farger, ID-er og status. Det er del 1 av «Shift kundestandard» (`docs/00` til `docs/06`), en strengere og nyere revisjon som **erstatter** de eldre `00-faktaark.md` og `08-implementeringsplan.md` i samme mappe.

**Hent aldri en pris, adresse eller et Enova-beløp fra hukommelsen eller fra et eldre dokument.** Flere dokumenter i prosjektet inneholder utdaterte tall. Faktaarket merker hvert punkt som verifisert (✓), antatt (⚠) eller manglende (✗).

Er et tall merket `⚠ Antatt` eller `✗ Mangler`, skal det ikke publiseres. Bruk plassholder og flagg det.

**Viktig avvik, uløst per 05.08.2026:** De gamle dokumentene (`00-faktaark.md`) behandlet nettsidens prisliste (12 490/18 490 kr for elbillader) som VBMs faktiske, gjeldende priser — bare internt inkonsistente med FAQ-en. `docs/00-kunde-og-fakta.md` går lenger og sier **VBM har ikke bekreftet noen pris i det hele tatt** — tallene på siden kan være en tidligere sesjons plassholder som aldri ble verifisert med Benjamin. Dette er uavklart og må tas opp direkte med kunden før noen prisrelatert endring gjøres, i annonser eller på siden.

---

## Merkevare — gjelder all kode

```
Typografi     Geist, Geist Mono
Tekst         #111111
Brødtekst     #6B6B6B
Sekundærgrå   #A3A3A3
Linjer        #E5E5E5
Lys flate     #F4F4F4
Rød           #E31E25
```

**Rødt brukes kun på handling** — knapper, aktive lenker, det ene tallet i et regnestykke som skal stikke ut. Aldri som dekor, aldri som bakgrunn på store flater.

**Skarpe hjørner overalt.** `border-radius: 0`. Ingen skygger. Ingen runde kort, pills eller chips. Ingen gradienter.

Redaksjonelt uttrykk, ikke dashbord. Tall settes i Geist Mono på hårfine linjer, ikke i fargede kort.

---

## Ytelse er ikke valgfritt

Dette er den viktigste tekniske instruksen i filen.

Google Ads taper **57 % av mulige visninger på rangering**, og komponentanalysen peker på landingsside-opplevelse som årsaken. Den konkrete synderen er hero-video på forsiden som ødelegger LCP på mobil. **71 % av trafikken er mobil.**

Konsekvensen er direkte økonomisk: bedre LCP gir høyere kvalitetspoeng, som gir lavere klikkpris og mer synlighet uten å øke budsjettet.

**Regler:**
- Ingen video over folden. Ingen autoplay.
- Ett hero-bilde, WebP, komprimert, med eksplisitt bredde og høyde.
- LCP under 2,5 sekunder på simulert 4G mobil.
- Ingen fontblokkering — `font-display: swap`.
- Ingen tredjepartsskript før hovedinnholdet er malt.
- Mål på ekte mobil før deploy, ikke bare i desktop-Lighthouse.

Kommer noen med en idé som legger vekt over folden, er svaret nei.

---

## Landingssider

To formater som løser ulike oppgaver. Ikke bland dem.

### Opt-in-side — tar imot betalt trafikk

Gjelder `/elbillader` og alle sider annonsene peker til.

- Skjemaet skal være synlig uten å scrolle, også på iPhone SE
- To felter: navn og telefon. Ikke flere.
- **Ingen navigasjonsmeny.** Ingen lenker som fører bort fra siden.
- Header: kun logo og klikkbart telefonnummer
- Samme handling gjentatt fire ganger nedover, alle til samme sted
- Under folden kun tvilsfjerning: bildebevis, fire steg, prisen holder, tre spørsmål
- POST til GHL webhook, deretter redirect til `/takk`

### Tjenesteside — rangerer organisk

Gjelder `/priser`, `/sikringsskap`, `/feilsoking` og områdesider.

Full navigasjon, mer innhold, FAQ, intern lenking. Disse skal rangere over tid og trenger substans.

### Sporing på alle skjemaer

Skjulte felter som fylles fra URL: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `gclid`, `landingsside`.

`gclid` er kritisk. Google auto-tagger klikk med gclid, ikke UTM — og uten den kan vunne oppdrag ikke kobles tilbake til kampanjen. Dette var årsaken til at testperioden ikke kunne måles.

`/takk` har `noindex, nofollow` og fyrer konverteringshendelsen.

---

## Tekst

Skriv som en fagperson som forklarer noe til en nabo. Korte setninger. Konkrete tall og tidspunkt.

«Vi kommer torsdag mellom 9 og 11» slår «rask responstid».
«Vi» og «du». Aldri «kunden» i tredje person.
Si «det gjør vi ikke» når det er sant.

**Faste setninger, kan brukes ordrett:**
- Skriftlig pris før vi starter
- Tillegg avklares før, ikke etter
- Samsvarserklæring til Boligmappa uten at du må be om det
- Avtalt dag betyr avtalt dag

**Aldri:** markedsledende, totalleverandør, skreddersydde løsninger, kvalitet til avtalt tid, «vi er billigst», «vi gjør alt», «få tre tilbud», «vi er ikke som de andre», engelsk konsulentspråk.

---

## Kjente feil som må rettes

- ~~**Prisliste og FAQ motsier hverandre.**~~ Rettet 05.08.2026 — alle forekomster (prisliste, FAQ, JSON-LD, blogg, blogg-generator) synket til 12 490/18 490 kr. **Men:** se avviket om selve tallets gyldighet i «Les alltid dette først» over — internt konsistent er ikke det samme som bekreftet av kunden.
- **Adressen spriker.** Google sier Billingstadsletta 17, nettsiden/Proff sier 22. Erik avklarer med Benjamin. Ikke rett noe sted før det er avklart.
- **Fra-pris uten lader.** «Fra 12 490» utelater hovedkomponenten. Annonser skal bruke totalpris — når prisen er bekreftet.
- **Anonyme sitater.** De fire korte utsagnene uten navn leser som plassholdere. Fjern dem — de tre navngitte er langt bedre. (Ikke gjort ennå.)
- **«4,9 av 5»** med to Google-anmeldelser. Oppgi antall, eller vent til grunnlaget er der. (Ikke gjort ennå.)
- ~~**Hero-video ødelegger LCP på mobil.**~~ Rettet 05.08.2026 — fjernet fra forsiden. Bekreftet av ekte Google Ads-data (57,3 % tapt visningsandel på rangering) som riktig prioritet, se `docs/02-markedsundersokelse.md` punkt 04.
- **To ikke-sammenslåtte `/elbillader`-branches** (`claude/campaign-landing-page-oh0f6p` og `elbillader-kampanjeside-fra-handverk-media`) bruker begge de uverifiserte prisene (14 900/17 900 kr, 35 % Enova). Ikke merge før pris er avklart med Benjamin — se `docs/06-nettside-og-landingsside.md` punkt 12.

---

## Filer

**I `vbm-elektro/docs/` — Shift kundestandard, gjeldende (v1.0/v2.0, 05.08.2026):**

```
00-kunde-og-fakta.md                  Sannhetskilde — les alltid
01-merkevare.md                       Posisjon, stemme, farger, typografi, voicelås
02-markedsundersokelse.md             Halo-segmenter, konkurrenter, søkeatferd
03-icp-og-kundesprak.md               Målgrupper, kjøpssituasjoner, kundens ord
04-tilbud-budskap-og-bevis.md         Tilbudsstruktur, budskap, beviskart
05-digital-strategi.md                Mål, konvertering, kundereise, prioritering
06-nettside-og-landingsside.md        Sidekart, seksjonsstruktur, sporing, "ferdig når"
```

Original i claude.ai-prosjektet «Vbm Elektro AS» (Shift-dokumenter, `.dc.html`); konvertert til markdown og lagt i repoet 05.08.2026 slik at Claude Code leser samme grunnlag automatisk.

**Eldre, delvis erstattet — behold for historikk, ikke som sannhetskilde ved motstrid:**

```
00-faktaark.md                        Forgjenger til docs/00 — uenig med den om pris, se avvik over
08-implementeringsplan.md             Byggeinstruks/annonsetekster med IKKE-verifiserte tall (14 900 kr, 35 % Enova). Ikke bruk uten ny bekreftelse.
```

**Ikke overført til repoet ennå** (finnes i claude.ai-prosjektet «Vbm Elektro AS»): `01-Rapport-juni-2026.html`, `02-Vekstplan-sommer-host.html` (utdatert), `03-Rapportgrunnlag-juni.md`, `04-Konsept-og-identitet.html`, `06-Konsept-og-kundeprofiler.html`, `07-Markedsplan-host-2026.html`, `09-Tilgangsmote.md`, `10-Motenotat.html`.

Ved motstrid gjelder denne rekkefølgen: `docs/00-kunde-og-fakta.md`, deretter avtalen, deretter nyeste Shift-dokument (`docs/01`–`06`), deretter eldre dokumenter.

---

## Arbeidsregler

Bygg videre på det som finnes. Ikke start på nytt.

Mangler informasjon, si det tydelig i stedet for å gjette. Et flagget hull er nyttig. Et oppdiktet tall i en annonse er skade.

Vurder alltid kundeverdi, lønnsomhet, gjennomførbarhet og vedlikehold før du foreslår noe.
