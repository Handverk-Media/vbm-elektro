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

`00-Faktaark-VBM.md` er eneste sannhetskilde for tall, priser, farger, ID-er og status.

**Hent aldri en pris, adresse eller et Enova-beløp fra hukommelsen eller fra et eldre dokument.** Flere dokumenter i prosjektet inneholder utdaterte tall. Faktaarket merker hvert punkt som verifisert, usikkert eller manglende.

Er et tall merket `⚠ USIKKER` eller `✗ MANGLER`, skal det ikke publiseres. Bruk plassholder og flagg det.

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

- **Prisliste og FAQ motsier hverandre.** Prislisten sier elbillader fra 12 490, FAQ sier 9 990. Uakseptabelt på en side som lover at prisen holder.
- **Adressen spriker.** Google sier Billingstadsletta 17, nettsiden sier 22. Avklares, deretter rettes overalt.
- **Fra-pris uten lader.** «Fra 12 490» utelater hovedkomponenten. Annonser skal bruke totalpris.
- **Anonyme sitater.** De fire korte utsagnene uten navn leser som plassholdere. Fjern dem — de tre navngitte er langt bedre.
- **«4,9 av 5»** med to Google-anmeldelser. Oppgi antall, eller vent til grunnlaget er der.

---

## Filer

```
00-Faktaark-VBM.md                    Sannhetskilde — les alltid
01-Rapport-juni-2026.html             Klientrapport
02-Vekstplan-sommer-host.html         Utdatert, erstattet
03-Rapportgrunnlag-juni.md            Rådata fra Ads
04-Konsept-og-identitet.html          Merkevarefasit
05-Markedsundersokelse.md             Segmenter, konkurrenter, SWOT
06-Konsept-og-kundeprofiler.html      ICP-er
07-Markedsplan-host-2026.html         Gjeldende plan
08-Implementeringsplan.md             Byggeinstruks, annonsetekster
09-Tilgangsmote.md                    Kontooppsett
10-Motenotat.html                     Spørsmål til kunde
```

Ved motstrid gjelder denne rekkefølgen: faktaarket, deretter avtalen, deretter nyeste plan, deretter eldre dokumenter.

---

## Arbeidsregler

Bygg videre på det som finnes. Ikke start på nytt.

Mangler informasjon, si det tydelig i stedet for å gjette. Et flagget hull er nyttig. Et oppdiktet tall i en annonse er skade.

Vurder alltid kundeverdi, lønnsomhet, gjennomførbarhet og vedlikehold før du foreslår noe.
