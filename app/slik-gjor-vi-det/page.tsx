import type { Metadata } from 'next'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { BefaringCTA } from '@/components/BefaringCTA'

export const metadata: Metadata = {
  title: 'Slik gjør vi det – VBM Elektro AS',
  description: 'Fem enkle steg fra første kontakt til ferdig jobb. Tydelig pris, rask respons og dokumentasjon levert som standard.',
  alternates: { canonical: 'https://vbmelektro.no/slik-gjor-vi-det' },
}

const LOEFTER = [
  { n: '01', tittel: 'Pris før vi starter', tekst: 'Du får skriftlig fastpris etter befaring eller videovurdering. Tillegg avklares før vi gjør jobben — aldri etter. Slik håndverkertjenesteloven § 32 krever.' },
  { n: '02', tittel: 'Avtalt dag = avtalt dag', tekst: 'Vi booker den dagen som passer deg og kommer den dagen. Hvis noe blir forsinket, ringer vi — ikke omvendt.' },
  { n: '03', tittel: 'Dokumentasjon levert som standard', tekst: 'Samsvarserklæring, kursfortegnelse og sluttkontroll leveres digitalt rett etter jobb. Klart for boligsalg eller tilsyn.' },
  { n: '04', tittel: 'Du får tak i oss', tekst: 'Mandag til fredag, 07–16. Etter det: vakttelefon for haster. Hvis vi ikke tar — ringer vi tilbake innen 1 time.' },
]

const STEG = [
  { n: 1, bubble: 'Start her', tittel: 'Send oss jobben', tekst: 'Send bilde, melding eller ring oss. Du trenger ikke vite hva ting heter — det finner vi ut av sammen.' },
  { n: 2, bubble: 'Typisk 30 min', tittel: 'Du hører fra oss', tekst: 'Vi svarer raskt med vurdering, spørsmål eller forslag til løsning. Mange jobber kan vurderes direkte fra bilder.' },
  { n: 3, bubble: null, tittel: 'Pris og avtale', tekst: 'Du får tydelig pris og forslag til tidspunkt før vi starter. Hvis noe må endres underveis, avklarer vi det først.' },
  { n: 4, bubble: null, tittel: 'Vi gjør jobben', tekst: 'Vi møter opp, gjør jobben ryddig og holder deg oppdatert underveis. Ingen overraskelser. Ingen jakt på elektrikeren etterpå.' },
  { n: 5, bubble: 'Garantert', tittel: 'Ferdig dokumentert', tekst: 'Samsvarserklæring og dokumentasjon sendes rett etter jobben er gjort. Klart for Boligmappa, forsikring og boligsalg.' },
]

export default function SlikGjorViDetPage() {
  return (
    <div className="subpage">
      <SiteHeader />
      <div className="subpage-pt">

        <section className="subpage-hero">
          <div className="wrap">
            <div className="eyebrow">Slik gjør vi det</div>
            <h1>Enkelt og forutsigbart — fordi det burde være det</h1>
            <p>Fem steg fra første melding til ferdig jobb. Tydelig pris, raske svar og dokumentasjon på plass.</p>
          </div>
        </section>

        <section style={{ padding: '80px 0', background: 'var(--bg)' }}>
          <div className="wrap">
            <div className="steps">
              {STEG.map((s) => (
                <div key={s.n} className="step">
                  {s.bubble && <span className="bubble red">{s.bubble}</span>}
                  <div className="num">{s.n}</div>
                  <h4>{s.tittel}</h4>
                  <p>{s.tekst}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '80px 0', background: 'white' }}>
          <div className="wrap">
            <div style={{ maxWidth: 720, margin: '0 auto 64px', textAlign: 'center' }}>
              <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: 16 }}>Våre fire løfter</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700 }}>Det du alltid kan forvente av oss</h2>
            </div>
            <div className="promise-grid">
              {LOEFTER.map((l) => (
                <div key={l.n} className="promise">
                  <div className="n">{l.n}</div>
                  <h3>{l.tittel}</h3>
                  <p>{l.tekst}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '0 0 80px' }}>
          <div className="wrap">
            <div style={{ background: 'var(--bg-dark)', borderRadius: 16, padding: '48px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
              <div>
                <div className="eyebrow" style={{ color: 'var(--red)' }}>Klar til å komme i gang?</div>
                <h2 style={{ color: 'white', marginTop: 12, fontSize: 'clamp(24px, 3vw, 36px)' }}>Start med en gratis befaring</h2>
                <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: 8 }}>Vi vurderer jobben og gir deg konkret pris — gratis og uforpliktende.</p>
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <BefaringCTA label="Book gratis befaring" className="btn btn-red" />
                <a href="tel:90633118" className="btn btn-ghost" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>Ring 90 63 31 18</a>
              </div>
            </div>
          </div>
        </section>

      </div>
      <SiteFooter />
    </div>
  )
}
