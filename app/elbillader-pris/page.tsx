'use client'
import { LpHeader } from '@/components/lp/LpHeader'
import { LpSticky } from '@/components/lp/LpSticky'
import { LpFaq } from '@/components/lp/LpFaq'
import { LpForm } from '@/components/lp/LpForm'
import { PhoneLink } from '@/components/PhoneLink'
import { trackLpPrimaryCta } from '@/lib/analytics'

const PAGE = 'elbillader-pris'

const Check = () => (
  <svg width="15" height="15" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
)

const OMRADER = ['Drammen', 'Asker', 'Bærum', 'Lier', 'Øvre Eiker']

const FAQ = [
  { q: 'Hva koster det å montere elbillader?', a: 'Prisen avhenger av sikringsskapets kapasitet, avstand til ladepunktet og om noe må oppgraderes. Send bilde av sikringsskapet og kursfortegnelsen, så gir vi deg skriftlig pris før noe arbeid starter.' },
  { q: 'Må sikringsskapet byttes?', a: 'Ikke alltid. Vi vurderer om skapet tåler en ny kurs til laderen, eller om det trenger oppgradering — det ser vi når vi har fått bilder av skapet.' },
  { q: 'Kan VBM montere en lader kunden allerede har kjøpt?', a: 'Ja. Oppgi ladermodellen i skjemaet, så vurderer vi installasjonen ut fra den.' },
  { q: 'Hva kan påvirke prisen?', a: 'Avstand fra sikringsskap til ladepunkt, kabelføring, kapasiteten i skapet, behov for oppgradering, hvilken lader som skal monteres, og om du trenger lastbalansering.' },
  { q: 'Får kunden dokumentasjon?', a: 'Ja. Du får samsvarserklæring, og dokumentasjonen legges i Boligmappa uten at du må be om det.' },
]

export default function ElbilladerPrisPage() {
  return (
    <div className="lp3-page">
      <LpHeader location={`${PAGE}-header`} />

      <section className="lp3-hero">
        <div className="lp3-wrap">
          <span className="lp3-eyebrow">Drammen · Asker · Bærum</span>
          <h1>Hva koster det å få montert elbillader?</h1>
          <p className="lp3-hero-lede">Send bilde av sikringsskapet og kursfortegnelsen. Vi vurderer anlegget og gir deg skriftlig pris før arbeidet starter.</p>
          <div className="lp3-cta-row">
            <a href="#skjema" className="lp3-btn lp3-btn-primary" onClick={() => trackLpPrimaryCta(PAGE)}>Send bilde og få pris</a>
            <PhoneLink location={`${PAGE}-hero`} className="lp3-btn lp3-btn-secondary">Ring 90 63 31 18</PhoneLink>
          </div>
          <div className="lp3-trust-row">
            <span className="lp3-trust-item"><Check />Skriftlig pris før start</span>
            <span className="lp3-trust-item"><Check />Tillegg avklares på forhånd</span>
            <span className="lp3-trust-item"><Check />Samsvarserklæring</span>
            <span className="lp3-trust-item"><Check />Dokumentasjon i Boligmappa</span>
          </div>
        </div>
      </section>

      <section className="lp3-section">
        <div className="lp3-wrap lp3-wrap-narrow">
          <span className="lp3-section-label">Før du får pris</span>
          <h2 className="lp3-h2">Dette trenger vi for å gi pris</h2>
          <div className="lp3-steps">
            <div className="lp3-step">
              <span className="lp3-step-nr mono">01</span>
              <div><p className="lp3-step-title">Ta bilde av sikringsskap og kursfortegnelse</p></div>
            </div>
            <div className="lp3-step">
              <span className="lp3-step-nr mono">02</span>
              <div><p className="lp3-step-title">Oppgi ønsket lader og plassering</p></div>
            </div>
            <div className="lp3-step">
              <span className="lp3-step-nr mono">03</span>
              <div><p className="lp3-step-title">Oppgi omtrentlig avstand fra sikringsskap til lader</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="prisinformasjon" className="lp3-section lp3-section-tint">
        <div className="lp3-wrap">
          <span className="lp3-section-label">Hva du får</span>
          <h2 className="lp3-h2">Dette inngår i arbeidet — og dette påvirker prisen</h2>
          <div className="lp3-cols">
            <div>
              <p className="lp3-col-title">Dette inngår i arbeidet</p>
              <ul className="lp3-col-list">
                {['Vurdering av eksisterende elektrisk anlegg', 'Nødvendig kurs og vern', 'Montering og tilkobling', 'Testing', 'Samsvarserklæring', 'Dokumentasjon i Boligmappa'].map(t => (
                  <li key={t}><Check />{t}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="lp3-col-title">Dette påvirker prisen</p>
              <ul className="lp3-col-list">
                {['Avstand mellom sikringsskap og ladepunkt', 'Kabelføring', 'Kapasitet i sikringsskap', 'Behov for oppgradering', 'Ladermodell', 'Lastbalansering'].map(t => (
                  <li key={t}><Check />{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="prosess" className="lp3-section">
        <div className="lp3-wrap lp3-wrap-narrow">
          <span className="lp3-section-label">Fra bilde til ferdig lader</span>
          <h2 className="lp3-h2">Slik foregår det</h2>
          <div className="lp3-steps">
            {[
              'Kunden sender bilder og informasjon',
              'VBM vurderer anlegget',
              'Kunden mottar skriftlig pris',
              'Arbeidet avtales',
              'Dokumentasjon leveres etter utført arbeid',
            ].map((t, i) => (
              <div className="lp3-step" key={t}>
                <span className="lp3-step-nr mono">0{i + 1}</span>
                <div><p className="lp3-step-title">{t}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lp3-section lp3-section-tint">
        <div className="lp3-wrap">
          <span className="lp3-section-label">Dekningsområde</span>
          <h2 className="lp3-h2 lp3-h2-tight">Områder</h2>
          <div className="lp3-areas">
            {OMRADER.map(o => <span key={o} className="lp3-area-tag">{o}</span>)}
          </div>
        </div>
      </section>

      <section id="faq" className="lp3-section">
        <div className="lp3-wrap lp3-wrap-narrow">
          <span className="lp3-section-label">Spørsmål</span>
          <h2 className="lp3-h2">Ofte stilt</h2>
          <LpFaq items={FAQ} />
        </div>
      </section>

      <section id="skjema" className="lp3-section lp3-section-tint">
        <div className="lp3-wrap lp3-wrap-narrow">
          <div className="lp3-form-head">
            <span className="lp3-section-label">Send bilde og få pris</span>
            <h2 className="lp3-h2 lp3-h2-tight">Få skriftlig pris på elbillader</h2>
            <p className="lp3-body">Fyll inn det du vet — bildene hjelper oss å gi presis pris med én gang.</p>
          </div>
          <LpForm
            page={PAGE}
            idPrefix="eb-"
            submitLabel="Send og få pris"
            rows={[
              [{ kind: 'text', name: 'navn', label: 'Navn', placeholder: 'Ola Nordmann', required: true }, { kind: 'tel', name: 'telefon', label: 'Telefonnummer', placeholder: '900 00 000', required: true }],
              [{ kind: 'email', name: 'epost', label: 'E-post', placeholder: 'ola@example.com', required: true }, { kind: 'text', name: 'postnummer', label: 'Postnummer', placeholder: '1337', required: true }],
              [{ kind: 'text', name: 'ladermodell', label: 'Ønsket ladermodell', placeholder: 'F.eks. Zaptec Go, Easee One' }],
              [{ kind: 'radio', name: 'har_lader', label: 'Har du allerede kjøpt lader?', options: ['Ja', 'Nei', 'Vet ikke'] }],
              [{ kind: 'file', name: 'bilde_sikringsskap', label: 'Bilde av sikringsskap', hint: 'Åpent skap, godt lys' }],
              [{ kind: 'file', name: 'bilde_kursfortegnelse', label: 'Bilde av kursfortegnelse', hint: 'Listen inni skapdøren' }],
              [{ kind: 'file', name: 'bilde_ladepunkt', label: 'Bilde av ønsket ladepunkt', hint: 'Valgfritt' }],
              [{ kind: 'text', name: 'kabelavstand', label: 'Omtrentlig kabelavstand', placeholder: 'F.eks. 8–10 meter' }],
              [{ kind: 'textarea', name: 'kommentar', label: 'Kommentar', placeholder: 'Annet vi bør vite?' }],
            ]}
          />
        </div>
      </section>

      <section id="kontakt" className="lp3-section" style={{ textAlign: 'center' }}>
        <div className="lp3-wrap lp3-wrap-narrow">
          <h2 className="lp3-h2">Send bilde og få pris — eller ring oss direkte</h2>
          <div className="lp3-cta-row" style={{ justifyContent: 'center' }}>
            <a href="#skjema" className="lp3-btn lp3-btn-primary" onClick={() => trackLpPrimaryCta(`${PAGE}-bunn`)}>Send bilde og få pris</a>
            <PhoneLink location={`${PAGE}-bunn`} className="lp3-btn lp3-btn-secondary">Ring 90 63 31 18</PhoneLink>
          </div>
        </div>
      </section>

      <LpSticky page={PAGE} />
    </div>
  )
}
