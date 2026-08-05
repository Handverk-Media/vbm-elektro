> ## ⚠ ADVARSEL — PRISER OG ENOVA ER IKKE VERIFISERT
>
> Dette dokumentet bruker **14 900 kr** som fra-pris på elbillader ferdig montert.
> **Tallet er ikke bekreftet av VBM.** Nettsidens prisliste sier 12 490 kr for
> installasjon uten lader, mens FAQ på samme side sier 9 990 kr.
>
> Dokumentet bruker også **35 % Enova-støtte med tilbakevirkende kraft.**
> Det er utdatert. Ordningen er nå **25 %**, og søknaden må godkjennes
> **før** arbeidet starter.
>
> **Ikke publiser annonser, landingsside eller videomanus herfra før
> begge deler er rettet.** Se `00-faktaark.md` for gjeldende status.

---

# VBM Elektro — Implementeringsplan

**For Shift. Bygges på to arbeidsdager.**
Alt materiell er ferdigskrevet. Tekst merket `[SLIK]` må bekreftes av VBM før lansering — se seksjon 15.

---

# Dette skal bygges nå

## Hovedkampanje

| | |
|---|---|
| **Kampanje** | Elbillader ferdig montert, med Enova-vinkel |
| **Kanal** | Google Search |
| **Mål** | 6–8 leads på 14 dager |
| **Landingsside** | `/elbillader` |
| **Budskap** | Ferdig montert fra 14 900 kr. Fast pris før vi starter. Med smart strømstyring får du inntil 10 000 kr fra Enova, og vi fyller ut søknaden. |
| **Materiell** | 3 mobilvideoer, 5 bilder. Produseres av VBM, se seksjon 9. |
| **Budsjett** | 65 kr per dag, 910 kr over testperioden |
| **Lansering** | Dag 2, ettermiddag |

## Støttekampanje

| | |
|---|---|
| **Kampanje** | Samme tilbud som Meta Lead Form |
| **Kanal** | Meta, Facebook og Instagram |
| **Mål** | 3–5 leads på 14 dager |
| **Landingsside** | Ingen. Lead Form i appen. |
| **Budskap** | Samme som over |
| **Materiell** | Samme videoer og bilder |
| **Budsjett** | 50 kr per dag, 700 kr over testperioden |
| **Lansering** | Dag 2, ettermiddag |

## Hvorfor akkurat denne kampanjen

Elbillader har dokumentert etterspørsel i VBMs egen konto med 15–18 % klikkrate og 16 kr klikkpris. Tjenesten krever ingen sertifisering vi må verifisere først. Materiellet kan filmes på mobil på under en time. Enova-vinkelen gir et prisargument uten at vi må underby konkurrentene, og hever samtidig ordreverdien.

Elkontroll er strategisk sterkere på sikt, men henger på NEK 405-sertifisering som ikke er bekreftet. Den bygges når svaret foreligger.

---

# 2 — Kundereisen

Ni steg. Kunden ser bare fire av dem.

### 1 · Kunden ser annonsen
**Kunden opplever:** Søker «montere elbillader» eller ser en video i feeden.
**Automatisk:** Annonsen vises på søkeord eller målgruppe.
**VBM gjør:** Ingenting.
**Shift måler:** Visninger, klikk, klikkrate, kostnad.
**System:** Google Ads, Meta Ads.

### 2 · Kunden klikker til landingssiden
**Kunden opplever:** Kommer til `/elbillader` med pris, Enova-regnestykke og skjema.
**Automatisk:** UTM-parametere lagres i skjulte skjemafelter.
**VBM gjør:** Ingenting.
**Shift måler:** Sidevisninger, tid på side, avvisningsrate.
**System:** GA4, GTM.

### 3 · Kunden sender skjema eller ringer
**Kunden opplever:** Fyller ut fem felter, eller trykker på telefonnummeret.
**Automatisk:** Skjemaet sendes til GHL via webhook. Telefonklikk registreres som hendelse.
**VBM gjør:** Tar telefonen hvis kunden ringer.
**Shift måler:** Skjema sendt, telefonklikk, konvertering per kanal.
**System:** GHL, GTM, Google Ads, Meta.

### 4 · Kunden mottar automatisk bekreftelse
**Kunden opplever:** SMS innen sekunder, e-post rett etter.
**Automatisk:** Workflow 1 sender begge.
**VBM gjør:** Ingenting.
**Shift måler:** At meldingen faktisk gikk ut.
**System:** GHL.

### 5 · VBM mottar varsel
**Kunden opplever:** Ingenting.
**Automatisk:** SMS og e-post til VBM med navn, telefon, tjeneste, kommune og melding.
**VBM gjør:** Leser varselet.
**Shift måler:** Tid fra lead til varsel.
**System:** GHL.

### 6 · VBM kontakter kunden
**Kunden opplever:** Får en telefon.
**Automatisk:** Er leadet fortsatt urørt etter 2 timer, går det en påminnelse til VBM.
**VBM gjør:** Ringer kunden. Ingenting annet.
**Shift måler:** Om leadet ble kontaktet, via ukentlig statusmelding.
**System:** Telefon. GHL i bakgrunnen.

### 7 · VBM sender tilbud
**Kunden opplever:** Får skriftlig pris fra VBM, på den måten VBM allerede bruker.
**Automatisk:** Ingenting.
**VBM gjør:** Sender tilbudet som vanlig.
**Shift måler:** Antall tilbud sendt, via ukentlig statusmelding.
**System:** VBMs eget.

### 8 · Shift registrerer vunnet eller tapt
**Kunden opplever:** Ingenting.
**Automatisk:** Fredag kl. 14 går det en SMS til VBM med ukens leads, nummerert.
**VBM gjør:** Svarer på SMS-en med ett ord per lead. Tar under ett minutt.
**Shift måler:** Vunnet, tapt, tapsårsak, ordreverdi.
**System:** GHL. Shift oppdaterer manuelt.

### 9 · Resultatet kobles tilbake til kampanjen
**Kunden opplever:** Ingenting.
**Automatisk:** Vunnet lead sendes til Google Ads og Meta som offline-konvertering med ordreverdi.
**VBM gjør:** Ingenting.
**Shift måler:** Kostnad per vunnet kunde, per kampanje og annonsegruppe.
**System:** GHL, Google Ads, Meta.

---

# 3 — Pipeline i GHL

Fem steg. **VBM logger aldri inn.** Shift flytter kortene.

| Steg | Betyr |
|---|---|
| **1 · Ny lead** | Leadet er kommet inn og varsel er sendt. Ingen har snakket med kunden ennå. |
| **2 · Kontaktet** | VBM har hatt kontakt med kunden på telefon eller SMS. |
| **3 · Tilbud sendt** | VBM har sendt en konkret pris. |
| **4 · Vunnet** | Kunden har akseptert eller bestilt. |
| **5 · Tapt** | Kunden kjøper ikke. |

### Ny lead opprettes automatisk når
- Skjema på `/elbillader` sendes inn
- Meta Lead Form sendes inn
- Ubesvart eller besvart anrop til sporingsnummeret registreres
- Shift importerer lead fra en kampanje

### Vunnet — registreres samtidig
Ordreverdi, tjeneste, kampanje, kilde.

### Tapt — velg én årsak
`fikk ikke kontakt` · `valgte annen leverandør` · `pris` · `utsatt` · `ikke relevant` · `annet`

## Slik oppdateres status

**Fredags-SMS.** Én automatisk melding til VBM klokka 14 hver fredag med ukens leads, nummerert. VBM svarer med ett ord per lead. Shift oppdaterer pipelinen mandag.

Utgående melding:

```
Ukens leads fra annonsene. Svar med status per nummer:

1. Ola Hansen, elbillader, Asker
2. Kari Nilsen, elbillader, Bærum
3. Per Olsen, elbillader, Drammen

Svar f.eks: 1 vunnet 18000, 2 tapt pris, 3 tilbud sendt

Hilsen Shift
```

Dette er den enkleste løsningen som faktisk gir konverteringsdata. Ingen innlogging, ingen opplæring, under ett minutt i uka. Svarer ikke VBM innen mandag morgen, ringer Shift.

---

# 4 — Felter og tags

## Custom fields

| Felt | Type | Fylles av |
|---|---|---|
| Navn | Tekst | Skjema |
| Telefon | Telefon | Skjema |
| E-post | E-post | Skjema |
| Tjeneste | Nedtrekk | Skjema |
| Beskrivelse av behov | Tekst | Skjema |
| Kommune | Nedtrekk | Skjema |
| Kilde | Tekst | Skjult felt, UTM |
| Kampanje | Tekst | Skjult felt, UTM |
| Annonse | Tekst | Skjult felt, UTM |
| Landingsside | Tekst | Skjult felt |
| Dato lead mottatt | Dato | Automatisk |
| Status | Nedtrekk | Shift |
| Tilbud sendt | Ja/Nei | Shift |
| Vunnet eller tapt | Nedtrekk | Shift |
| Tapsårsak | Nedtrekk | Shift |
| Ordreverdi | Tall | Shift |

**Nedtrekk Tjeneste:** Elbillader · Sikringsskap · Feilsøking · Varmekabler · Annet
**Nedtrekk Kommune:** Asker · Bærum · Oslo · Drammen · Lier · Annet

## Tags

```
source_google
source_meta
source_organic
service_elbillader
status_won
status_lost
```

Ingen flere.

---

# 5 — Workflows

## Workflow 1 · Nytt lead fra landingsside

**Trigger:** Form Submitted
**Gjelder skjema:** `LP – Elbillader`

**Handlinger i rekkefølge**
1. Create/Update Contact — match på telefonnummer
2. Legg på tags: `source_google` (eller `source_meta` ved Meta-trafikk til siden), `service_elbillader`
3. Create Opportunity → Pipeline «VBM Leads» → stage «Ny lead»
4. Sett feltene Kilde, Kampanje, Annonse, Landingsside fra skjulte skjemafelter
5. Sett Dato lead mottatt = nå
6. **SMS til kunden** — se tekst under
7. **E-post til kunden** — se tekst under
8. **SMS + e-post til VBM** — se tekst under
9. **E-post til Shift** — kort varsel til `[SHIFT-EPOST]`
10. Wait 2 timer → start Workflow 4

**Stoppregler**
- Stopper hvis opportunity flyttes ut av «Ny lead»
- Kontakt som sender inn skjema to ganger innen 24 timer får ikke ny SMS. Bruk `If/Else` på tag `lead_sms_sendt`, sett taggen etter første utsendelse og fjern den etter 24 timer.

### SMS til kunden

```
Hei [Fornavn]. Takk for henvendelsen om elbillader. Vi ringer deg
tilbake i løpet av dagen. Haster det, ring oss på [TELEFON].

Hilsen VBM Elektro
```

### E-post til kunden

**Emne:** Vi har fått henvendelsen din

```
Hei [Fornavn],

Takk for at du tok kontakt om montering av elbillader. Vi ringer deg
tilbake i løpet av dagen.

Slik gjør vi det:

Vi ringer deg og stiller noen spørsmål om boligen, sikringsskapet og
hvor laderen skal stå. Ofte holder det med noen bilder på SMS. Er det
mer omfattende, kommer vi på befaring.

Du får en skriftlig pris før vi starter. Dukker det opp noe vi ikke
kunne se på forhånd, ringer vi deg først. Du får aldri en regning som
er høyere enn det du har sagt ja til.

Når jobben er ferdig legger vi samsvarserklæringen i Boligmappa. Du
trenger ikke be om det.

Har du spørsmål før vi rekker å ringe, treffer du oss på [TELEFON].

VBM Elektro
Asker · Bærum · Oslo · Drammen
```

### Internt varsel til VBM

SMS:

```
NYTT LEAD – ELBILLADER

[Navn]
[Telefon]
[Kommune]

"[Beskrivelse]"

Fra: [Kampanje]
Ring i dag.
```

E-post, **emne:** `Nytt lead: [Navn], [Kommune] – elbillader`

```
Nytt lead fra annonsene.

Navn:       [Navn]
Telefon:    [Telefon]
E-post:     [E-post]
Kommune:    [Kommune]
Tjeneste:   Elbillader

Hva det gjelder:
[Beskrivelse]

Kom inn:    [Dato lead mottatt]
Kilde:      [Kampanje] / [Annonse]

Ring kunden i dag. Du trenger ikke gjøre noe annet – vi spør om
status på fredag.
```

---

## Workflow 2 · Meta Lead Form

**Trigger:** Facebook Lead Form Submitted
**Skjema:** `VBM – Elbillader – Lead Form`

**Feltmapping**

| Meta-felt | GHL-felt |
|---|---|
| full_name | Navn |
| phone_number | Telefon |
| email | E-post |
| Hvilken kommune bor du i? | Kommune |
| Hva gjelder det? | Beskrivelse av behov |

**Handlinger**
1. Create/Update Contact — match på telefonnummer
2. Tags: `source_meta`, `service_elbillader`
3. Create Opportunity → «Ny lead»
4. Sett Kilde = `meta`, Kampanje og Annonse fra Meta-parametere, Landingsside = `lead_form`
5. **SMS til kunden** — samme tekst som Workflow 1
6. **SMS + e-post til VBM** — samme mal, men med linjen `Fra: Facebook-annonse`
7. E-post til Shift
8. Wait 2 timer → Workflow 4

**Stoppregler:** Samme som Workflow 1. Meta-leads sender ikke e-post til kunden, fordi e-postadressen ofte er utdatert i Metas autofyll. Kun SMS.

---

## Workflow 3 · Ubesvart anrop

**Trigger:** Call Status = No Answer / Missed, retning innkommende, til sporingsnummeret.

**Handlinger**
1. Create/Update Contact på innringers nummer
2. Tag `source_google` hvis nummeret er sporingsnummeret fra Ads, ellers `source_organic`
3. **SMS til innringer** — se under
4. **SMS til VBM:** `Ubesvart anrop fra [Telefon], kl. [tid]. Ring tilbake.`
5. Opprett opportunity i «Ny lead» kun hvis kontakten er ny

**Stoppregel mot gjentakelse:** Sett tag `missed_call_sms` ved utsendelse. Workflowen sjekker taggen først og sender ikke ny melding hvis den finnes. Taggen fjernes automatisk etter 12 timer.

### SMS til innringer

```
Hei, du ringte VBM Elektro. Vi står i en jobb akkurat nå, men ringer
deg tilbake så snart vi kan. Svar gjerne på denne meldingen med hva
det gjelder, så er vi forberedt.

Hilsen VBM Elektro
```

---

## Workflow 4 · Leadpåminnelse

**Trigger:** Startes av Workflow 1 og 2 etter 2 timer.

**Betingelse:** Opportunity står fortsatt i «Ny lead».

**Handling:** SMS til VBM.

```
Påminnelse: [Navn] ([Telefon]) i [Kommune] tok kontakt for 2 timer
siden og er ikke ringt opp ennå.
```

**Andre påminnelse:** Én gang til etter ytterligere 4 timer, kun innenfor 07–20. Deretter stopper workflowen.

**Stopper når:** opportunity flyttes ut av «Ny lead», eller etter andre påminnelse. Ingen flere meldinger.

---

## Workflow 5 · Etter ferdig jobb

**Trigger:** Tag `jobb_ferdig` legges på kontakten. Shift setter denne når VBM melder jobben som utført i fredags-SMS-en.

**Handlinger**
1. Wait 1 dag
2. **SMS med anmeldelseslenke**
3. Wait 4 dager
4. Sjekk: har kontakten tag `anmeldt` eller svart på SMS-en?
5. Hvis nei → **én påminnelse**
6. Stopp

### SMS 1

```
Hei [Fornavn], takk for at du valgte oss. Er du fornøyd, betyr en
anmeldelse mye for et lite firma som vårt. Det tar under et minutt:

[ANMELDELSESLENKE]

Er det noe som ikke ble som det skulle, svar på denne meldingen så
ordner vi det.

Hilsen VBM Elektro
```

### SMS 2, påminnelse

```
Hei [Fornavn], bare en liten påminnelse hvis du fortsatt vil legge
igjen noen ord om jobben vi gjorde: [ANMELDELSESLENKE]

Har du allerede gjort det, takk. Da hører du ikke mer fra oss om
dette.

VBM Elektro
```

---

# 6 — Landingsside

**URL:** `[DOMENE]/elbillader`

**Title tag:** `Elbillader ferdig montert i Asker og Bærum | VBM Elektro`

**Meta description:** `Elbillader ferdig montert fra 14 900 kr. Fast pris før vi starter, samsvarserklæring inkludert. Vi hjelper deg med Enova-støtten. Ring [TELEFON].`

---

### Overskrift

# Elbillader ferdig montert fra 14 900 kr

### Undertittel

Du får skriftlig pris før vi starter, og prisen holder. Med smart strømstyring får du inntil 10 000 kr tilbake fra Enova — vi fyller ut søknaden for deg.

**Hoved-CTA:** `Få pris på elbillader`
**Telefon-CTA:** `Ring [TELEFON]`

---

### Problemet

De fleste som skal ha elbillader får en pris på telefon, og en annen på fakturaen. Det står gjerne «fra 11 990» i annonsen, men så kommer kabelstrekk, jordfeilbryter og utkjøring i tillegg — etterpå.

Og nesten ingen får vite at Enova gir opptil 10 000 kroner tilbake, eller hva som faktisk skal til for å få pengene.

### Slik gjør vi det

Vi ringer deg og spør om boligen, sikringsskapet og hvor laderen skal stå. Ofte holder det med noen bilder på SMS. Er det mer omfattende, kommer vi på befaring — normalt innen tre dager.

Så får du en skriftlig pris. Den prisen gjelder. Finner vi noe vi ikke kunne se på forhånd, for eksempel gamle kabler bak veggen, ringer vi deg før vi gjør noe. Du får en ny pris å ta stilling til, og du kan si nei.

### Dette er inkludert

- Lader, montering og alt materiell
- Egen kurs og jordfeilbryter type B eller tilsvarende
- Inntil 10 meter kabelstrekk
- Testing og igangkjøring
- Samsvarserklæring lagt i Boligmappa
- Hjelp med Enova-søknaden hvis du velger strømstyring
- Rydding etter oss

### Slik fungerer det

**1. Du tar kontakt**
Fyll ut skjemaet eller ring. Vi svarer samme dag.

**2. Du får en pris**
Skriftlig, med alt spesifisert. Ingen «ca.»

**3. Vi monterer**
De fleste jobber tar tre til fem timer. Du trenger ikke være hjemme hele tiden.

**4. Du får papirene**
Samsvarserklæringen ligger i Boligmappa før vi drar. Den trenger du den dagen boligen skal selges.

### Pris

| | |
|---|---|
| Zaptec Go ferdig montert | fra 14 900 kr |
| Easee Lite ferdig montert | fra 14 900 kr |
| Zaptec Pro eller Easee Charge | fra 17 900 kr |
| Kabelstrekk over 10 meter | 195 kr per meter |
| Oppgradering av sikringsskap | fra 9 500 kr |

Prisene er inkludert mva og gjelder normal installasjon i enebolig eller rekkehus med tilstrekkelig kapasitet i sikringsskapet. Du får eksakt pris skriftlig før vi starter.

### Inntil 10 000 kr fra Enova

Enova støtter ikke laderen alene. Støtten gjelder smart strømstyring som styrer minst to ting i boligen etter strømpris — for eksempel laderen og varmtvannstanken. Men laderen teller med i totalsummen, og støtten er 35 prosent av hele beløpet.

| | |
|---|---|
| Elbillader ferdig montert | 14 900 kr |
| Smart strømstyring | 6 500 kr |
| **Enova-støtte, 35 %** | **− 7 490 kr** |
| Du betaler for styringen | 6 500 kr, hvorav 7 490 kr kommer tilbake |

I praksis får du strømstyringen for under tusen kroner netto. Den sørger for at bilen lader når strømmen er billigst.

Vi fyller ut Enova-søknaden for deg og sender med spesifisert faktura og dokumentasjon. Du trenger ikke gjøre noe annet enn å signere.

*Har du allerede fått lader hos oss det siste året, teller den også med. Ta kontakt, så regner vi på det.*

### Hvorfor VBM

Vi er et lite firma. Det betyr at du snakker med den som faktisk gjør jobben, og at vi ikke har råd til misfornøyde kunder.

- **Fast pris.** Tillegg avklares før, ikke etter.
- **Vi ringer tilbake.** Samme dag, som regel innen et par timer.
- **Befaring innen tre dager** i Asker, Bærum, Oslo og Drammen.
- **Papirene kommer av seg selv.** Samsvarserklæring i Boligmappa uten at du må mase.

### Dokumentasjon og trygghet

VBM Elektro AS er registrert i Elvirksomhetsregisteret hos DSB og medlem i NELFO. Alt arbeid utføres etter NEK 400 og dokumenteres med samsvarserklæring som legges i Boligmappa.

Det betyr at du kan dokumentere anlegget den dagen boligen skal selges, og at forsikringen dekker deg hvis noe skulle skje.

### Vi jobber i

Asker · Bærum · Oslo · Drammen · Lier · Sandvika · Asker sentrum · Heggedal · Slependen · Høvik · Stabekk · Rykkinn · Konnerud

Er du i nærheten og usikker på om vi kjører til deg, ring og spør.

### Vanlige spørsmål

**Hva koster det egentlig?**
Fra 14 900 kr ferdig montert for de vanligste jobbene. Du får eksakt pris skriftlig før vi starter, og den prisen gjelder.

**Kan prisen endre seg underveis?**
Bare hvis vi finner noe vi ikke kunne se på forhånd. Da ringer vi deg før vi gjør noe, og du får en ny pris å ta stilling til.

**Har jeg nok strøm i sikringsskapet?**
De fleste boliger har det. Vi ser på det når vi er der, eller ut fra bilder du sender. Må skapet oppgraderes, får du prisen på det først.

**Hvor lang tid tar monteringen?**
Vanligvis tre til fem timer. Du trenger ikke være hjemme hele tiden.

**Hvilken lader bør jeg velge?**
Zaptec Go og Easee Lite dekker behovet til de aller fleste. Har du to biler eller planlegger det, kan det lønne seg med en modell som håndterer lastdeling. Vi sier fra hvis vi mener du kjøper mer enn du trenger.

**Får jeg virkelig 10 000 kr fra Enova?**
Inntil 10 000 kr, og det forutsetter at du også installerer smart strømstyring. Støtten er 35 prosent av totalen. Vi regner ut nøyaktig hva du får i ditt tilfelle, og fyller ut søknaden.

**Hvor raskt kan dere komme?**
Vi ringer samme dag. Befaring innen tre dager. Selve monteringen avtaler vi når prisen er klar.

**Jeg bor i borettslag — kan dere hjelpe?**
Ja, men da er det andre regler. Ta kontakt, så forklarer vi hva som gjelder og hva styret må ta stilling til.

---

### Skjema

**Overskrift over skjemaet:** Få pris på elbillader
**Hjelpetekst:** Vi ringer deg samme dag. Ingen forpliktelser.

| Felt | Type | Obligatorisk | Hjelpetekst |
|---|---|---|---|
| Navn | Tekst | Ja | — |
| Telefon | Telefon | Ja | Vi ringer deg her |
| E-post | E-post | Nei | Hvis du heller vil ha pris på e-post |
| Kommune | Nedtrekk | Ja | Asker, Bærum, Oslo, Drammen, Lier, Annet |
| Hva gjelder det? | Nedtrekk | Ja | Ny elbillader / Bytte av lader / Lader og strømstyring / Vet ikke ennå |
| Kort om boligen | Tekstfelt | Nei | For eksempel: enebolig fra 1985, laderen skal stå i garasjen ca. 8 meter fra sikringsskapet |

**Knappetekst:** `Få pris`

**Samtykketekst under knappen:**
```
Vi bruker opplysningene til å kontakte deg om denne henvendelsen.
Vi selger dem ikke videre og sender ikke nyhetsbrev.
```

**Skjulte felter:** `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `landingsside`, `gclid`

**Etter innsending:** Kunden sendes til `/takk`.
**Workflow som starter:** Workflow 1.

---

### Avsluttende CTA

## Få prisen før du bestemmer deg

Det koster ingenting å spørre, og du får et konkret tall å forholde deg til.

`Få pris på elbillader` · `Ring [TELEFON]`

---

### Takk-side

**URL:** `[DOMENE]/takk`
**Title:** `Takk for henvendelsen | VBM Elektro`
**Ikke indekseres.** `noindex, nofollow`

```
# Takk. Vi ringer deg i dag.

Du skal ha fått en SMS som bekreftelse. Kommer den ikke, har vi
kanskje fått feil nummer — ring oss på [TELEFON].

**Slik går vi fram videre**

Vi ringer og stiller noen spørsmål om boligen og sikringsskapet.
Ofte holder det med et par bilder på SMS. Er det mer omfattende,
avtaler vi befaring — normalt innen tre dager.

Deretter får du en skriftlig pris. Den prisen gjelder.

**Vil du forberede deg?**

Ta gjerne et bilde av sikringsskapet innvendig, og et av stedet
laderen skal stå. Da går samtalen fortere og prisen blir mer
treffsikker.

VBM Elektro
[TELEFON]
```

Konverteringshendelse `lead_skjema` fyres på denne siden.

---

# 7 — Google Ads

## Kampanjeoppsett

| | |
|---|---|
| **Kampanjenavn** | `VBM – Search – Elbillader – 2026H2` |
| **Type** | Søk |
| **Mål** | Potensielle kunder |
| **Geografi** | Asker, Bærum, Oslo, Drammen, Lier |
| **Områdealternativ** | **Tilstedeværelse** — ikke «interesse» |
| **Budjustering Oslo** | −25 % |
| **Språk** | Norsk, engelsk |
| **Nettverk** | Kun søk. **Søkepartnere av. Displaynettverk av.** |
| **Budstrategi** | Maksimer klikk, budtak 25 kr |
| **Dagsbudsjett** | 65 kr |
| **Annonseplan** | Alle dager 06–22. Budjustering +20 % man–fre 07–09 og 16–19. |
| **Konverteringsmål** | `lead_skjema` (primær), `lead_telefonklikk` (primær), `lead_telefonsamtale` (primær) |
| **Landingsside** | `[DOMENE]/elbillader` |
| **Annonserotasjon** | Optimaliser |

**UTM-mal på kampanjenivå:**
```
{lpurl}?utm_source=google&utm_medium=cpc&utm_campaign=elbillader&utm_content={adgroupid}&utm_term={keyword}&gclid={gclid}
```

---

## Annonsegruppe 1 — Elbillader montering

**Landingsside:** `[DOMENE]/elbillader`

**Søkeord**
```
"montere elbillader"
"installere elbillader"
"elbillader montering"
"montering av elbillader"
"elbillader ferdig montert"
"hjemmelader elbil"
"ladeboks elbil montering"
"installasjon elbillader"
[montere elbillader pris]
[hva koster elbillader montering]
[elbillader ferdig montert pris]
```

**Negative på annonsegruppenivå:** `-borettslag -sameie -garasjeanlegg -bedrift -næring`

### Responsiv søkeannonse

**Overskrifter**
```
Elbillader ferdig montert
Elbillader i Asker og Bærum
Fast pris før vi starter
Befaring innen 3 dager
Vi ringer tilbake samme dag
Inntil 10 000 kr fra Enova
Montering fra 14 900 kr
Zaptec, Easee og Wallbox
Vi ordner Enova-søknaden
Samsvarserklæring inkludert
Sertifisert elektriker
Ingen overraskelser
Elbillader hjemme
Godkjent elektrikerfirma
Få pris på under et døgn
```

**Beskrivelser**
```
Befaring, skriftlig pris, ingen overraskelser. Vi ringer tilbake innen 24 timer.
Elbillader ferdig montert i Asker, Bærum, Oslo og Drammen. Prisen vi gir, holder.
Med smart strømstyring får du inntil 10 000 kr fra Enova. Vi fyller ut søknaden.
Samsvarserklæringen legges i Boligmappa uten at du må be om det.
```

**Fest overskrift 1 til posisjon 1.** Resten roterer fritt.

---

## Annonsegruppe 2 — Ladermerker

**Landingsside:** `[DOMENE]/elbillader`

**Søkeord**
```
"zaptec montering"
"zaptec go montering"
"zaptec ferdig montert"
"montere zaptec"
"easee montering"
"easee lite montering"
"wallbox montering"
"zaptec pro installasjon"
[zaptec go ferdig montert]
[easee ferdig montert pris]
```

Disse søkene er billigere og mer kjøpsklare enn de generiske, og nesten ubetjent av lokale elektrikere.

### Responsiv søkeannonse

**Overskrifter**
```
Zaptec ferdig montert
Easee montert av elektriker
Wallbox montering
Zaptec Go med montering
Fast pris før vi starter
Inntil 10 000 kr fra Enova
Montering fra 14 900 kr
Befaring innen 3 dager
Sertifisert elektriker
Vi ringer tilbake samme dag
Alle merker, én montør
Samsvarserklæring inkludert
Zaptec i Asker og Bærum
Vi ordner Enova-søknaden
Ingen overraskelser
```

**Beskrivelser**
```
Zaptec, Easee og Wallbox montert av sertifisert elektriker. Fast pris før vi starter.
Vi monterer alle merker. Befaring innen 3 dager i Asker, Bærum, Oslo og Drammen.
Med smart strømstyring får du inntil 10 000 kr fra Enova. Vi ordner søknaden.
Skriftlig pris før arbeidet starter. Tillegg avklares før, ikke etter.
```

---

## Annonsegruppe 3 — Lokalt

**Landingsside:** `[DOMENE]/elbillader`

**Søkeord**
```
"elbillader asker"
"elbillader bærum"
"elbillader drammen"
"elbillader sandvika"
"elektriker elbillader asker"
"elektriker elbillader bærum"
"montere elbillader oslo"
[elbillader asker]
[elbillader bærum]
[elbillader drammen]
```

### Responsiv søkeannonse

**Overskrifter**
```
Elbillader i Asker
Elbillader i Bærum
Elbillader i Drammen
Elbillader i Sandvika
Lokal elektriker, fast pris
Vi kommer når vi sier
Befaring innen 3 dager
Elbillader ferdig montert
Fast pris før vi starter
Inntil 10 000 kr fra Enova
Sertifisert elektriker
Vi ringer tilbake samme dag
Montering fra 14 900 kr
Samsvarserklæring inkludert
Ring for pris i dag
```

**Beskrivelser**
```
Lokal elektriker i Asker, Bærum, Oslo og Drammen. Befaring innen 3 dager.
Ring, eller send noen bilder på SMS. Du får skriftlig pris før vi starter.
Elbillader ferdig montert fra 14 900 kr. Enova-støtte på inntil 10 000 kr.
Vi ringer tilbake samme dag. Samsvarserklæring til Boligmappa inkludert.
```

---

## Assets — gjelder alle annonsegrupper

**Sitelinks**

| Tekst | Beskrivelse 1 | Beskrivelse 2 |
|---|---|---|
| Priser | Timepris og fastpriser | Du ser prisen før du ringer |
| Zaptec og Easee | Vi monterer alle merker | Fast pris ferdig montert |
| Enova-støtte | Inntil 10 000 kr tilbake | Vi fyller ut søknaden |
| Kontakt oss | Svar innen 24 timer | Asker, Bærum, Oslo, Drammen |

**Callouts**
```
Fast pris
Befaring innen 3 dager
Samsvarserklæring
Enova-hjelp inkludert
Sertifisert elektriker
Vi ringer tilbake
```

**Strukturerte utdrag — type Tjenester**
```
Elbillader · Sikringsskap · Feilsøking · Varmekabler · Smarthus · Elkontroll
```

**Telefonasset:** `[TELEFON]`, aktiv 07–20 mandag til fredag, 09–16 lørdag. Bruk Google-videresendingsnummer så samtaler kan spores.

---

## Negative søkeord — kampanjenivå

```
-jobb -jobber -stilling -ledig -lønn -timelønn -årslønn
-utdanning -kurs -skole -fagbrev -lærling -lærlingplass -studie
-gratis -billig -billigst -tilbud på nett
-gjør det selv -selv -diy -bygge selv -montere selv
-forskrift -nek 400 -regelverk -lovkrav -veiledning
-pdf -manual -bruksanvisning -brukermanual
-brukt -bruktmarked -finn -reservedeler -deler -reparasjon av lader
-leie -utleie -abonnement
-hva er -hvordan virker -wikipedia -forum -erfaringer
-borettslag -sameie -garasjeanlegg -ladeanlegg -flere biler
-hytte -båt -campingvogn -bobil
-trondheim -bergen -stavanger -tromsø -kristiansand -ålesund -bodø
-sverige -danmark
-tesla supercharger -ladestasjon -hurtiglader
```

Borettslag og sameie er negative fordi de skal ha en egen prosess, ikke privatlandingssiden.

**Rutine:** Søketermrapport hver mandag. Legg til nye negative. Tjue minutter.

---

# 8 — Meta Ads

## Hvorfor Lead Form

Retargeting er utelukket fordi pikselen ikke har data ennå. Trafikkampanje til landingssiden er dyrere per lead enn Lead Form når merkevaren er ukjent lokalt. Lead Form fjerner friksjonen på mobil, der nesten all Meta-trafikk kommer fra, og kunden slipper å fylle ut noe manuelt.

Vi bygger målgruppedata i denne perioden. Retargeting settes opp når pikselen har nok trafikk, tidligst om fire uker.

## Kampanjeoppsett

| | |
|---|---|
| **Kampanjenavn** | `VBM – Leads – Elbillader – 2026H2` |
| **Mål** | Potensielle kunder |
| **Konverteringssted** | Øyeblikkelige skjemaer |
| **Optimalisering** | Potensielle kunder |
| **Budsjett** | 50 kr per dag, kampanjenivå |
| **Geografi** | Asker, Bærum, Sandvika, Drammen, Lier, samt Oslo vest. Radius 5 km rundt hvert punkt. **Velg «Personer som bor på dette stedet».** |
| **Alder** | 30–65 |
| **Målgruppe** | Bred. Ingen interessemålretting. Metas algoritme finner selv på dette budsjettet. |
| **Ekskluderinger** | Alle som allerede har sendt inn skjemaet |
| **Plasseringer** | Automatiske |
| **Format** | Video 9:16 og enkeltbilde 4:5 |

**Lead Form-felter:** Fullt navn · Telefonnummer · E-post · «Hvilken kommune bor du i?» (Asker/Bærum/Oslo/Drammen/Annet) · «Hva gjelder det?» (Ny elbillader/Bytte lader/Lader og strømstyring/Vet ikke)

**Skjematype:** Mer volum. **Ikke** «høyere intensjon» — det gir for få leads på dette budsjettet.

**Takkeskjerm:** `Takk. Vi ringer deg i dag.` med knapp «Ring oss nå» til `[TELEFON]`.

**Personvernlenke:** `[DOMENE]/personvern`

---

## Annonse 1 — Direkte

**Format:** Video 9:16, 25 sekunder
**Motiv:** Video 1, se seksjon 9

**Primary text**
```
Elbillader ferdig montert fra 14 900 kr.

Du får skriftlig pris før vi starter, og den prisen gjelder. Finner vi
noe uventet, ringer vi deg først — du får aldri en regning som er
høyere enn det du har sagt ja til.

Vi jobber i Asker, Bærum, Oslo og Drammen. Befaring innen tre dager.
```

**Headline:** `Elbillader ferdig montert fra 14 900 kr`
**Description:** `Fast pris. Befaring innen 3 dager.`
**CTA:** Få tilbud
**Tekst på video:** `Elbillader ferdig montert` → `fra 14 900 kr` → `Fast pris. Ingen overraskelser.`

---

## Annonse 2 — Trygghet og dokumentasjon

**Format:** Video 9:16, 30 sekunder
**Motiv:** Video 3, se seksjon 9

**Primary text**
```
Vet du hvor samsvarserklæringen på det elektriske arbeidet ditt er?

De fleste gjør ikke det — og så oppdager de det den dagen boligen
skal selges.

Hos oss legger vi den i Boligmappa før vi drar. Du trenger ikke be om
det, og det koster ikke ekstra.

Elbillader ferdig montert fra 14 900 kr i Asker, Bærum, Oslo og
Drammen.
```

**Headline:** `Papirene kommer av seg selv`
**Description:** `Samsvarserklæring i Boligmappa inkludert.`
**CTA:** Få tilbud
**Tekst på video:** `Samsvarserklæring` → `rett i Boligmappa` → `Uten at du må be om det`

---

## Annonse 3 — Pris og Enova

**Format:** Enkeltbilde 4:5
**Motiv:** Bilde 1, se seksjon 9

**Primary text**
```
Enova gir inntil 10 000 kr — men ikke for laderen alene.

Støtten gjelder smart strømstyring. Men laderen teller med i
totalsummen, og du får 35 prosent av hele beløpet tilbake.

Lader: 14 900 kr
Strømstyring: 6 500 kr
Enova-støtte: minus 7 490 kr

Vi fyller ut søknaden for deg. Du signerer, det er alt.
```

**Headline:** `Inntil 10 000 kr fra Enova`
**Description:** `Vi fyller ut søknaden for deg.`
**CTA:** Få tilbud
**Tekst på bildet:** `14 900 + 6 500` / `− 7 490 fra Enova` / `Vi ordner søknaden`

**UTM for alle Meta-annonser** (legges i Lead Form-oppfølging og på eventuelle lenker):
```
utm_source=meta&utm_medium=paid_social&utm_campaign=elbillader&utm_content={{ad.name}}
```

---

# 9 — Bilder og video

Alt filmes på mobil. Ingen profesjonell produksjon. Skal ta under halvannen time totalt.

**Generelt:** Film stående der det står 9:16. Hold telefonen i ro, gjerne mot en vegg eller på et stativ. Film i dagslys eller under god belysning i garasjen. Ta hvert klipp to–tre ganger, det første blir sjelden bra.

---

## Video 1 — Prisen holder

**Hvor:** Foran en ferdig montert lader, hjemme hos en kunde eller i egen garasje
**Hvem:** Benjamin, i arbeidsklær med logo
**Format:** Stående 9:16
**Varighet:** 25 sekunder
**Kameravinkel:** Telefonen i brysthøyde, Benjamin står litt til siden så laderen er synlig bak ham
**Brukes i:** Meta annonse 1, og øverst på landingssiden

**Manus**
```
Hei, jeg er Benjamin i VBM Elektro.

Elbillader ferdig montert koster fra 14 900 kroner hos oss. Og den
prisen står i tilbudet du får skriftlig, før vi starter.

Finner vi noe uventet bak veggen, så ringer vi deg først. Du får en
ny pris å ta stilling til, og du kan si nei.

Du får aldri en regning som er høyere enn det du har sagt ja til.

Vi jobber i Asker, Bærum, Oslo og Drammen. Ta kontakt, så ringer jeg
deg i dag.
```

**Tekst på skjermen:** `Elbillader ferdig montert` (0–3 s) · `fra 14 900 kr` (3–7 s) · `Fast pris. Ingen overraskelser.` (20–25 s)

---

## Video 2 — Enova

**Hvor:** Ved sikringsskapet eller ved laderen
**Hvem:** Benjamin
**Format:** Stående 9:16
**Varighet:** 30 sekunder
**Kameravinkel:** Litt nærmere enn video 1, brysthøyde
**Brukes i:** Meta, og i Enova-seksjonen på landingssiden

**Manus**
```
Enova gir inntil 10 000 kroner i støtte. Men ikke for laderen alene —
det er det de fleste ikke vet.

Støtten gjelder smart strømstyring, altså et system som sørger for at
bilen og varmtvannstanken bruker strøm når den er billigst.

Men her er poenget: laderen teller med i totalsummen. Så hvis du tar
begge deler, får du 35 prosent av hele beløpet tilbake.

I praksis betyr det at strømstyringen koster deg nesten ingenting.

Vi fyller ut søknaden for deg. Du bare signerer.
```

**Tekst på skjermen:** `Inntil 10 000 kr fra Enova` (0–4 s) · `Laderen teller med` (12–17 s) · `Vi ordner søknaden` (26–30 s)

---

## Video 3 — Papirene

**Hvor:** Ved et ryddig sikringsskap, gjerne rett etter en ferdig jobb
**Hvem:** Benjamin
**Format:** Stående 9:16
**Varighet:** 25 sekunder
**Kameravinkel:** Start med å filme sikringsskapet i 3 sekunder, panorer så opp til Benjamin
**Brukes i:** Meta annonse 2, og i dokumentasjonsseksjonen på landingssiden

**Manus**
```
Når vi er ferdig med en jobb, legger vi samsvarserklæringen rett inn
i Boligmappa.

Det er dokumentasjonen på at arbeidet er gjort etter forskriftene. Den
trenger du den dagen boligen skal selges — og det er som regel da folk
oppdager at de ikke har den.

Du trenger ikke be om det. Det koster ikke ekstra. Det ligger der før
vi drar.
```

**Tekst på skjermen:** `Samsvarserklæring` (0–4 s) · `rett i Boligmappa` (5–9 s) · `Uten at du må be om det` (20–25 s)

---

## Bilder

| # | Motiv | Hvor | Format | Brukes i |
|---|---|---|---|---|
| 1 | Ferdig montert lader på husvegg, med bil som lader ved siden av | Hos kunde eller egen bolig | Stående 4:5 | Meta annonse 3, hero på landingssiden |
| 2 | Nærbilde av laderen, ren og pent montert, kabelen hengt opp | Samme sted | Liggende 16:9 | Landingssiden, prisseksjon |
| 3 | Benjamin i arbeidsklær med logo, ved siden av firmabilen | Utenfor en bolig | Stående 4:5 | Landingssiden, «Hvorfor VBM» |
| 4 | Sikringsskap innvendig, ryddig og merket etter jobb | Hos kunde | Stående 4:5 | Landingssiden, dokumentasjonsseksjon |
| 5 | Hånd som holder telefon med Boligmappa åpen og samsvarserklæringen synlig | Hvor som helst | Liggende 16:9 | Landingssiden, dokumentasjonsseksjon |

Bilde 4 må ikke vise kundens navn eller adresse. Sladd om nødvendig.

---

# 10 — All tekst samlet

## SMS til nytt lead
```
Hei [Fornavn]. Takk for henvendelsen om elbillader. Vi ringer deg
tilbake i løpet av dagen. Haster det, ring oss på [TELEFON].

Hilsen VBM Elektro
```

## SMS ved ubesvart anrop
```
Hei, du ringte VBM Elektro. Vi står i en jobb akkurat nå, men ringer
deg tilbake så snart vi kan. Svar gjerne på denne meldingen med hva
det gjelder, så er vi forberedt.

Hilsen VBM Elektro
```

## Internt varsel til VBM, SMS
```
NYTT LEAD – ELBILLADER

[Navn]
[Telefon]
[Kommune]

"[Beskrivelse]"

Fra: [Kampanje]
Ring i dag.
```

## Leadpåminnelse til VBM
```
Påminnelse: [Navn] ([Telefon]) i [Kommune] tok kontakt for 2 timer
siden og er ikke ringt opp ennå.
```

## Anmeldelses-SMS
```
Hei [Fornavn], takk for at du valgte oss. Er du fornøyd, betyr en
anmeldelse mye for et lite firma som vårt. Det tar under et minutt:

[ANMELDELSESLENKE]

Er det noe som ikke ble som det skulle, svar på denne meldingen så
ordner vi det.

Hilsen VBM Elektro
```

## Anmeldelses-påminnelse
```
Hei [Fornavn], bare en liten påminnelse hvis du fortsatt vil legge
igjen noen ord om jobben vi gjorde: [ANMELDELSESLENKE]

Har du allerede gjort det, takk. Da hører du ikke mer fra oss om
dette.

VBM Elektro
```

## Fredags-SMS til VBM
```
Ukens leads fra annonsene. Svar med status per nummer:

1. [Navn], elbillader, [Kommune]
2. [Navn], elbillader, [Kommune]

Svar f.eks: 1 vunnet 18000, 2 tapt pris

Hilsen Shift
```

## E-post til kunden, landingsside
Se seksjon 5, Workflow 1.

## E-postvarsel til VBM
Se seksjon 5, Workflow 1.

## Landingsside
Se seksjon 6. All tekst er ferdig og kan kopieres direkte.

## Takk-side
Se seksjon 6.

## Alle Google Ads-overskrifter, samlet

*Gruppe 1:* Elbillader ferdig montert · Elbillader i Asker og Bærum · Fast pris før vi starter · Befaring innen 3 dager · Vi ringer tilbake samme dag · Inntil 10 000 kr fra Enova · Montering fra 14 900 kr · Zaptec, Easee og Wallbox · Vi ordner Enova-søknaden · Samsvarserklæring inkludert · Sertifisert elektriker · Ingen overraskelser · Elbillader hjemme · Godkjent elektrikerfirma · Få pris på under et døgn

*Gruppe 2:* Zaptec ferdig montert · Easee montert av elektriker · Wallbox montering · Zaptec Go med montering · Fast pris før vi starter · Inntil 10 000 kr fra Enova · Montering fra 14 900 kr · Befaring innen 3 dager · Sertifisert elektriker · Vi ringer tilbake samme dag · Alle merker, én montør · Samsvarserklæring inkludert · Zaptec i Asker og Bærum · Vi ordner Enova-søknaden · Ingen overraskelser

*Gruppe 3:* Elbillader i Asker · Elbillader i Bærum · Elbillader i Drammen · Elbillader i Sandvika · Lokal elektriker, fast pris · Vi kommer når vi sier · Befaring innen 3 dager · Elbillader ferdig montert · Fast pris før vi starter · Inntil 10 000 kr fra Enova · Sertifisert elektriker · Vi ringer tilbake samme dag · Montering fra 14 900 kr · Samsvarserklæring inkludert · Ring for pris i dag

## Alle Google Ads-beskrivelser, samlet
Se annonsegruppene i seksjon 7. Tolv beskrivelser totalt, fire per gruppe.

## Meta-annonsetekster
Se seksjon 8. Tre annonser, ferdig skrevet.

---

# 11 — Tracking

| Hendelse | Verktøy | Hvordan registreres den | Hvor vises den |
|---|---|---|---|
| Sidevisning landingsside | GTM → GA4 | Automatisk ved sidelast | GA4 |
| Skjema sendt | GTM → GA4, Google Ads, Meta | Utløses på `/takk`, hendelse `lead_skjema` | GA4, Ads, Meta |
| Telefonklikk | GTM → GA4, Google Ads | Klikk på `tel:`-lenke, hendelse `lead_telefonklikk` | GA4, Ads |
| Telefonsamtale over 60 sek | Google-videresendingsnummer | Automatisk i Ads | Google Ads |
| Meta Lead Form sendt | Meta | Automatisk, native | Meta |
| Kanal og kampanje | UTM-parametere | Lagres i skjulte skjemafelter, følger med til GHL | GHL |
| Lead opprettet | GHL | Workflow 1 og 2 | GHL |
| Kontaktet | GHL | Shift flytter kortet etter fredags-SMS | GHL |
| Tilbud sendt | GHL | Shift flytter kortet | GHL |
| Vunnet med ordreverdi | GHL → Google Ads, Meta | Offline-konvertering, matches på GCLID | Ads, Meta, GHL |
| Tapt med årsak | GHL | Shift setter felt | GHL |

## Oppsett i rekkefølge

1. **GTM-container** på alle sider. Konfigurer GA4-konfigurasjonstag.
2. **GA4-hendelser:** `lead_skjema` (utløser: sidevisning av `/takk`), `lead_telefonklikk` (utløser: klikk på lenke som inneholder `tel:`).
3. **Merk begge som nøkkelhendelser** i GA4.
4. **Importer til Google Ads** som konverteringer. Sett `lead_skjema` og `lead_telefonklikk` som primære.
5. **Google-videresendingsnummer** på i kampanjeinnstillinger, samtaler over 60 sekunder telles.
6. **Meta Pixel** i GTM. Standardhendelse `Lead` på `/takk`.
7. **UTM-parametere** som skjulte felter i skjemaet. Verdiene leses fra URL med JavaScript og fylles automatisk.
8. **GCLID** lagres som eget skjult felt — nødvendig for offline-konverteringer senere.

Ikke bygg mer enn dette nå.

---

# 12 — Rapport

Én tabell, oppdateres ukentlig.

| | Google | Meta | Totalt |
|---|---|---|---|
| Annonseforbruk | | | |
| Klikk | | | |
| Leads | | | |
| Kostnad per lead | | | |
| Kontaktede leads | | | |
| Tilbud sendt | | | |
| Vunnet | | | |
| Tapt | | | |
| Kostnad per vunnet kunde | | | |
| Registrert ordreverdi | | | |

Under tabellen: én linje per tapsårsak med antall.

Bygges som et enkelt Google Sheet. Ingen dashboard.

---

# 13 — Budsjett

**Testperiode: 14 dager.**

| | Google Search | Meta Lead Form | Sum |
|---|---|---|---|
| Dagsbudsjett | 65 kr | 50 kr | 115 kr |
| Testbudsjett, 14 dager | 910 kr | 700 kr | **1 610 kr** |

## Forventning

**Google Search**
*Antatt* klikkpris 16 kr, basert på VBMs faktiske tall fra juni.
→ ca. 57 klikk
*Antatt* konverteringsrate på landingssiden 10 %. **Dette er den svakeste antakelsen** — vi har ingen historikk på en dedikert landingsside.
→ 5–6 leads, kostnad per lead 150–180 kr

**Meta Lead Form**
*Antatt* kostnad per lead 150–250 kr for lokal håndverkertjeneste.
→ 3–5 leads

**Samlet: 8–11 leads for 1 610 kr.**

Alt merket *antatt* er anslag, ikke løfter. Meta-tallet er det mest usikre siden VBM ikke har kjørt Meta før.

## Beslutningsregler

**Stopp en annonse** når den har fått minst 1 000 visninger og klikkraten er under 4 %.

**Stopp et søkeord** når det har fått minst 30 klikk uten et eneste lead.

**Øk budsjettet** når kostnad per lead har ligget under 300 kr over minst 10 leads, og VBM har kapasitet til flere jobber. Øk med maks 30 % om gangen — større hopp resetter læringen.

**Juster kampanjen** hvis kostnad per lead overstiger 500 kr etter 20 leads. Da er det landingssiden eller tilbudet som er problemet, ikke annonsene.

**Datakrav før noen beslutning:** minst 1 000 visninger per annonse, 30 klikk per søkeord, 10 leads per kanal. Ikke rør noe før tallene er der. På 65 kr dagen tar det tid, og det er normalt.

---

# 14 — Byggeplan

## Dag 1

**1 · Landingsside**
*System:* [nettsideplattform] · *Shift gjør:* Bygger `/elbillader` med all tekst fra seksjon 6. Bygger `/takk` med noindex.
*Ferdig når:* Begge sider er publisert og fungerer på mobil.
*Testes ved:* Åpne siden på telefon. Sjekke at telefonnummeret er klikkbart og at siden laster under 3 sekunder.

**2 · Skjema**
*System:* Nettside + GHL webhook · *Shift gjør:* Bygger skjemaet med seks felter og syv skjulte UTM-felter. Kobler webhook til GHL.
*Ferdig når:* Innsending oppretter kontakt i GHL med UTM-verdiene utfylt.
*Testes ved:* Send inn med testdata via en URL med `?utm_source=test`. Sjekk at verdien havner i riktig felt i GHL.

**3 · GHL-pipeline og felter**
*System:* GHL · *Shift gjør:* Oppretter pipeline «VBM Leads» med fem steg. Oppretter de 16 custom fields og seks tags.
*Ferdig når:* Pipelinen finnes og feltene kan fylles.
*Testes ved:* Opprett en testkontakt manuelt, flytt den gjennom alle fem steg.

**4 · Workflows**
*System:* GHL · *Shift gjør:* Bygger Workflow 1, 3, 4 og 5. Workflow 2 venter til Meta-skjemaet finnes på dag 2.
*Ferdig når:* Alle fire er publisert og aktive.
*Testes ved:* Testinnsending utløser SMS til testnummer, e-post til testadresse og varsel til Shift innen 30 sekunder.

**5 · Tracking**
*System:* GTM, GA4, Google Ads, Meta · *Shift gjør:* Setter opp punkt 1–8 i seksjon 11.
*Ferdig når:* `lead_skjema` og `lead_telefonklikk` fyres og vises i GA4 sanntidsrapport.
*Testes ved:* GTM forhåndsvisning. Send inn skjema, klikk telefonnummer, se at begge hendelser registreres.

**6 · Google Ads-struktur**
*System:* Google Ads · *Shift gjør:* Oppretter kampanjen med innstillingene i seksjon 7. Bygger tre annonsegrupper med søkeord og matchtyper. Legger inn hele den negative lista.
*Ferdig når:* Kampanjen står som pauset med alt på plass.
*Testes ved:* Kjør Googles egen policykontroll. Sjekk at søkepartnere og display er avslått.

**7 · Annonsetekster**
*System:* Google Ads · *Shift gjør:* Limer inn 15 overskrifter og 4 beskrivelser per gruppe. Legger inn sitelinks, callouts, strukturerte utdrag og telefonasset.
*Ferdig når:* Alle tre annonser har «Utmerket» eller «God» annonsestyrke.
*Testes ved:* Forhåndsvisning på mobil og desktop.

**8 · Materielliste til VBM**
*System:* E-post eller SMS · *Shift gjør:* Sender seksjon 9 og seksjon 15 til VBM.
*Ferdig når:* VBM har bekreftet mottak og satt en tid for filming.

---

## Dag 2

**9 · Ferdigstill Google Ads**
*Shift gjør:* Kobler konverteringer til kampanjen. Setter budjustering på Oslo og tidsplan. Aktiverer videresendingsnummer.
*Ferdig når:* Kampanjen kan settes til aktiv uten advarsler.
*Testes ved:* Sjekk at «Konverteringshandlinger» viser alle tre mål på kampanjenivå.

**10 · Meta-kampanje**
*Shift gjør:* Bygger kampanje, annonsesett og Lead Form etter seksjon 8. Bygger Workflow 2 i GHL og kobler den til skjemaet.
*Ferdig når:* Lead Form er publisert og koblingen til GHL er bekreftet.
*Testes ved:* Bruk Metas testverktøy for øyeblikkelige skjemaer. Send en testlead og bekreft at den lander i GHL med riktig kilde.

**11 · Legg inn bilder og video**
*Shift gjør:* Laster opp materiellet fra VBM til Meta og landingssiden. Beskjærer til riktige formater. Legger på tekst på skjermen.
*Ferdig når:* Alle tre Meta-annonser har motiv, og landingssiden har bilder.
*Testes ved:* Forhåndsvisning i Meta på både Facebook og Instagram, feed og stories.

**12 · Test skjema**
*Testes ved:* Tre innsendinger — én fra Google-annonse med UTM, én direkte, én fra mobil. Alle tre skal opprette lead i GHL med riktig kilde og kampanje.

**13 · Test SMS**
*Testes ved:* Bekreftelses-SMS kommer innen 30 sekunder. Ubesvart-anrop-SMS utløses ved å ringe sporingsnummeret og legge på. Andre oppringning innen 12 timer skal **ikke** gi ny melding.

**14 · Test varsling**
*Testes ved:* VBM bekrefter at de faktisk mottok SMS og e-post på riktig nummer og adresse. Ikke stol på GHL-loggen alene her.

**15 · Test pipeline**
*Testes ved:* Flytt testleadet gjennom alle fem steg. Registrer ordreverdi på «Vunnet». Sjekk at tapsårsak er påkrevd på «Tapt».

**16 · Test tracking**
*Testes ved:* GA4 sanntid viser `lead_skjema` og `lead_telefonklikk`. Google Ads viser konvertering innen noen timer. Meta viser Lead-hendelsen.

**17 · Test hele kundereisen**
*Shift gjør:* Én person går gjennom hele reisen som en ekte kunde — klikker annonsen i forhåndsvisning, leser siden, sender skjema, mottar SMS, sjekker at VBM får varsel, at leadet ligger i pipelinen og at hendelsen er sporet.
*Ferdig når:* Alle ni steg i seksjon 2 fungerer i ett gjennomløp.

**18 · Rett feil og publiser**
*Shift gjør:* Fikser det som feilet. Aktiverer Google Ads og Meta.
*Ferdig når:* Begge kampanjer viser «Aktiv» og har begynt å bruke budsjett.

**Slett alle testkontakter fra GHL før lansering.**

---

# 15 — Det VBM må levere

Uten disse kan vi ikke lansere.

**Før vi kan bygge**
1. Telefonnummer som skal stå i annonser og på nettsiden
2. E-postadresse og mobilnummer som skal motta leadvarsler
3. Bekreftelse på prisene: 14 900 kr for Zaptec Go og Easee Lite ferdig montert, 17 900 kr for Zaptec Pro og Easee Charge, 195 kr per meter for kabelstrekk over 10 meter, 9 500 kr for oppgradering av sikringsskap. **Stemmer disse, eller skal de justeres?**
4. Bekreftelse på hvilke kommuner og steder vi skal annonsere i
5. Åpningstid, altså når VBM faktisk kan ta telefonen
6. Hvor mange elbillader-jobber dere klarer per uke
7. Tilgang til Google Ads-kontoen og Meta Business Manager
8. Lenke til Google-anmeldelsessiden
9. Logo som PNG med transparent bakgrunn

**Før vi kan lansere**
10. De tre videoene og fem bildene fra seksjon 9
11. Bekreftelse på at leverandør av smart strømstyring er på plass, siden Enova-vinkelen bygger på det
12. Navn på den som ringer opp leads

**Én rutine fremover**
13. Svar på fredags-SMS-en. Under ett minutt i uka. Det er alt vi trenger for å måle hva annonsene faktisk gir.
