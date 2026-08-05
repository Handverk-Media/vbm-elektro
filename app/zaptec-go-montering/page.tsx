'use client'
import { LpHeader } from '@/components/lp/LpHeader'
import { LpHero } from '@/components/lp/LpHero'
import { LpSection } from '@/components/lp/LpSection'
import { LpSticky } from '@/components/lp/LpSticky'
import { LpFaq } from '@/components/lp/LpFaq'
import { LpForm } from '@/components/lp/LpForm'
import { PhoneLink } from '@/components/PhoneLink'
import { trackLpPrimaryCta } from '@/lib/analytics'

const PAGE = 'zaptec-go-montering'

const Check = () => (
  <svg width="15" height="15" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
)

const OMRADER = ['Drammen', 'Asker', 'Bærum', 'Lier', 'Øvre Eiker']

const FAQ = [
  { q: 'Hva er inkludert i Zaptec Go-installasjonen?', a: 'Vurdering av kapasitet, nødvendig kurs og vern, kabelføring og montering, testing, samsvarserklæring og dokumentasjon i Boligmappa.' },
  { q: 'Trenger jeg lastbalansering?', a: 'Det avhenger av eksisterende kapasitet i sikringsskapet. Vi vurderer det ut fra bildene du sender inn.' },
  { q: 'Får jeg skriftlig pris før dere starter?', a: 'Ja. Du får skriftlig pris basert på bildene og informasjonen du sender inn, før noe arbeid starter.' },
]

export default function ZaptecGoPage() {
  return (
    <div className="lp3-page">
      <LpHeader location={`${PAGE}-header`} />

      <LpHero
        page={PAGE}
        eyebrow="Drammen · Asker · Bærum"
        h1="Zaptec Go ferdig montert hjemme"
        lede="Send bilde av sikringsskapet. Vi vurderer anlegget og gir skriftlig pris før montering."
        primaryLabel="Få pris på Zaptec Go"
        onPrimaryClick={() => trackLpPrimaryCta(PAGE)}
        trustItems={['Skriftlig pris før start', 'Tillegg avklares på forhånd', 'Samsvarserklæring', 'Dokumentasjon i Boligmappa']}
        panelLabel="Slik får du pris på Zaptec Go"
        panelSteps={['Bilde av sikringsskap', 'Vi vurderer kapasitet og kabelvei', 'Du får skriftlig pris']}
        panelStat="Svar innen 1 time"
      />

      <LpSection id="prisinformasjon" label="Hva du får" heading="Dette gjør vi — og dette avgjør prisen" tint>
        <div className="lp3-cols">
          <div>
            <p className="lp3-col-title">Dette gjør vi</p>
            <ul className="lp3-col-list">
              {['Vurdering av kapasitet i sikringsskapet', 'Nødvendig kurs og vern', 'Kabelføring og montering', 'Testing', 'Samsvarserklæring', 'Dokumentasjon i Boligmappa'].map(t => (
                <li key={t}><Check />{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="lp3-col-title">Dette avgjør prisen</p>
            <ul className="lp3-col-list">
              {['Avstand og kabelføring', 'Kapasitet i sikringsskap', 'Behov for oppgradering', 'Om du trenger lastbalansering'].map(t => (
                <li key={t}><Check />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </LpSection>

      <LpSection id="prosess" label="Fra bilde til ferdig lader" heading="Slik foregår det">
        <div className="lp3-steps">
          {['Kunden sender bilder og informasjon', 'VBM vurderer anlegget', 'Kunden mottar skriftlig pris', 'Arbeidet avtales', 'Dokumentasjon leveres etter utført arbeid'].map((t, i) => (
            <div className="lp3-step" key={t}>
              <span className="lp3-step-nr mono">{String(i + 1).padStart(2, '0')}</span>
              <div><p className="lp3-step-title">{t}</p></div>
            </div>
          ))}
        </div>
      </LpSection>

      <LpSection label="Dekningsområde" heading="Områder" tint>
        <div className="lp3-areas">
          {OMRADER.map(o => <span key={o} className="lp3-area-tag">{o}</span>)}
        </div>
      </LpSection>

      <LpSection id="faq" label="Spørsmål" heading="Ofte stilt">
        <LpFaq items={FAQ} />
      </LpSection>

      <section id="skjema" className="lp3-section lp3-section-tint">
        <div className="lp3-wrap lp3-wrap-narrow">
          <div className="lp3-form-head">
            <span className="lp3-section-label">Send bilde og få pris</span>
            <h2 className="lp3-h2 lp3-h2-tight">Få pris på Zaptec Go</h2>
            <p className="lp3-body">Samme skjema som for elbillader generelt — bildene hjelper oss å gi presis pris med én gang.</p>
          </div>
          <div className="lp3-form-panel">
            <LpForm
              page={PAGE}
              idPrefix="zg-"
              submitLabel="Send og få pris"
              rows={[
                [{ kind: 'text', name: 'navn', label: 'Navn', placeholder: 'Ola Nordmann', required: true }, { kind: 'tel', name: 'telefon', label: 'Telefonnummer', placeholder: '900 00 000', required: true }],
                [{ kind: 'email', name: 'epost', label: 'E-post', placeholder: 'ola@example.com', required: true }, { kind: 'text', name: 'postnummer', label: 'Postnummer', placeholder: '1337', required: true }],
                [{ kind: 'text', name: 'ladermodell', label: 'Ønsket ladermodell', placeholder: 'Zaptec Go' }],
                [{ kind: 'radio', name: 'har_lader', label: 'Har du allerede kjøpt lader?', options: ['Ja', 'Nei', 'Vet ikke'] }],
                [{ kind: 'file', name: 'bilde_sikringsskap', label: 'Bilde av sikringsskap', hint: 'Åpent skap, godt lys' }],
                [{ kind: 'file', name: 'bilde_kursfortegnelse', label: 'Bilde av kursfortegnelse', hint: 'Listen inni skapdøren' }],
                [{ kind: 'file', name: 'bilde_ladepunkt', label: 'Bilde av ønsket ladepunkt', hint: 'Valgfritt' }],
                [{ kind: 'text', name: 'kabelavstand', label: 'Omtrentlig kabelavstand', placeholder: 'F.eks. 8–10 meter' }],
                [{ kind: 'textarea', name: 'kommentar', label: 'Kommentar', placeholder: 'Annet vi bør vite?' }],
              ]}
            />
          </div>
        </div>
      </section>

      <section id="kontakt" className="lp3-closing">
        <div className="lp3-noise" />
        <div className="lp3-wrap lp3-wrap-narrow" style={{ position: 'relative' }}>
          <h2 className="lp3-h2" style={{ marginBottom: 32 }}>Få pris på Zaptec Go — eller ring oss direkte</h2>
          <div className="lp3-cta-row" style={{ justifyContent: 'center', marginBottom: 0 }}>
            <a href="#skjema" className="lp3-btn lp3-btn-primary" onClick={() => trackLpPrimaryCta(`${PAGE}-bunn`)}>Få pris på Zaptec Go</a>
            <PhoneLink location={`${PAGE}-bunn`} className="lp3-btn lp3-btn-secondary">Ring 90 63 31 18</PhoneLink>
          </div>
        </div>
      </section>

      <div className="lp3-footer-mini">
        <a href="/personvern">Personvern</a> · VBM Elektro AS
      </div>

      <LpSticky page={PAGE} />
    </div>
  )
}
