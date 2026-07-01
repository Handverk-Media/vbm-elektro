# VBM Elektro AS — Nettside

Nettside for VBM Elektro AS, bygget av Shift Media.

- **Live:** https://web-ochre-rho-55.vercel.app
- **GitHub:** https://github.com/Handverk-Media/vbm-elektro
- **Lokalt:** http://localhost:3000

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Språk | TypeScript 5 |
| Styling | Tailwind CSS 4 + LightningCSS |
| Deploy | Vercel |

## Kom i gang

```bash
npm install
npm run dev
```

## Prosjektstruktur

```
app/
  page.tsx              # Forside
  befaring/             # Befaringslandingsside
  bestill/              # Bestillingsside
  blogg/                # Blogg (statisk + [slug])
  book/                 # Book befaring
  kontakt/              # Kontaktside
  om-oss/               # Om oss
  personvern/           # Personvern
  takk/                 # Takkeside (etter skjema)
  tjenester/[slug]/     # Tjenestesider (dynamisk)
  videoavklaring/       # Videoavklaringsside
  api/
    befaring-lead/      # Motta befaringsforespørsler
    nyhetsbrev/         # Nyhetsbrevpåmelding
    videoavklaring/     # Videoavklaringsforespørsler
    vipps-checkout/     # Vipps-betaling

components/
  SiteHeader.tsx        # Navigasjon
  CartDrawer.tsx        # Handlekurv
  CookieConsent.tsx     # Cookie-samtykke
  Providers.tsx         # Context providers

context/
  CartContext.tsx        # Handlekurv-state

data/
  bedrift.ts            # Bedriftsinfo (navn, adresse, kontakt)
  priser.ts             # Prisliste
  posts.json            # Blogginnlegg (genereres av script)
  innlegg.ts            # TypeScript-type for blogginnlegg

scripts/
  generate-post.mjs     # AI-script for å generere blogginnlegg

.github/workflows/
  generate-blog.yml     # GitHub Actions: kjører generate-post automatisk
```

## Nøkkelfiler

- **Bedriftsdata:** `data/bedrift.ts` — navn, adresse, telefon, åpningstider
- **Priser:** `data/priser.ts` — tjenester og priser
- **Blogg:** `data/posts.json` — redigeres manuelt eller via script
- **Farger/fonts:** `app/globals.css`
