'use client'
import { LpHeader } from '@/components/lp/LpHeader'
import { LpHero } from '@/components/lp/LpHero'
import { LpSection } from '@/components/lp/LpSection'
import { LpSticky } from '@/components/lp/LpSticky'
import { LpFaq } from '@/components/lp/LpFaq'
import { LpForm } from '@/components/lp/LpForm'
import { PhoneLink } from '@/components/PhoneLink'
import { trackLpPrimaryCta } from '@/lib/analytics'

const PAGE = 'elektriker-pris'

const Check = () => (
  <svg width="15" height="15" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
)

const JOBBER = ['Stikkontakter', 'Lamper og belysning', 'Feilsøking', 'Varmekabler', 'Mindre arbeid ved oppussing', 'Sikringsskap', 'Elsjekk']
const PRIS_FAKTORER = ['Jobbens omfang', 'Materiell', 'Tilgang', 'Kabelføring', 'Eksisterende anlegg', 'Feilsøking', 'Dokumentasjon']

const FAQ = [
  { q: 'Får jeg fastpris eller timepris?', a: 'Avgrensede jobber med kjent omfang kan vi ofte gi fastpris på etter å ha sett bilder og beskrivelse. Feilsøking og jobber med ukjent omfang kan kreve timearbeid — det avklarer vi før vi starter, ikke etterpå.' },
  { q: 'Hva slags jobber kan jeg sende inn?', a: 'Alt fra stikkontakter og belysning til feilsøking, varmekabler, mindre arbeid ved oppussing, sikringsskap og elsjekk.' },
  { q: 'Kommer det tillegg jeg ikke visste om?', a: 'Nei. Eventuelle tillegg avklares med deg før de utføres, ikke etterpå.' },
  { q: 'Får jeg dokumentasjon på jobben?', a: 'Ja, der det er aktuelt — samsvarserklæring og dokumentasjon leveres etter utført arbeid.' },
]

export default function ElektrikerPrisPage() {
  return (
    <div className="lp3-page">
      <LpHeader location={`${PAGE}-header`} />

      <LpHero
        page={PAGE}
        eyebrow="Drammen · Asker · Bærum"
        h1="Hva koster en elektriker?"
        lede="Prisen avhenger av jobben. Send en kort beskrivelse og bilder, så vurderer vi om arbeidet kan prises på forhånd."
        primaryLabel="Beskriv jobben og få pris"
        onPrimaryClick={() => trackLpPrimaryCta(PAGE)}
        trustItems={['Skriftlig pris før start', 'Tillegg avklares på forhånd', 'Samsvarserklæring']}
        panelLabel="Slik får du pris"
        panelSteps={['Beskriv oppgaven', 'Last opp bilder', 'Få pris eller forslag til befaring']}
      />

      <LpSection id="prisinformasjon" label="Send inn" heading="Jobber kunden kan sende inn">
        <ul className="lp3-col-list">
          {JOBBER.map(t => <li key={t}><Check />{t}</li>)}
        </ul>
      </LpSection>

      <LpSection label="Prisgrunnlag" heading="Hva påvirker prisen?" tint>
        <div className="lp3-cols">
          <div>
            <p className="lp3-col-title">Dette avgjør prisen</p>
            <ul className="lp3-col-list">
              {PRIS_FAKTORER.map(t => <li key={t}><Check />{t}</li>)}
            </ul>
          </div>
          <div>
            <p className="lp3-col-title">Fastpris eller timepris</p>
            <ul className="lp3-col-list">
              <li><Check />Avgrensede jobber kan vurderes og prises på forhånd</li>
              <li><Check />Feilsøking og ukjent omfang kan kreve timearbeid</li>
              <li><Check />Eventuelle tillegg avklares før de utføres</li>
            </ul>
          </div>
        </div>
      </LpSection>

      <LpSection id="prosess" label="Fra beskrivelse til pris" heading="Slik får kunden pris">
        <div className="lp3-steps">
          {['Beskriv oppgaven', 'Last opp bilder', 'VBM vurderer informasjonen', 'Kunden får pris eller forslag til befaring'].map((t, i) => (
            <div className="lp3-step" key={t}>
              <span className="lp3-step-nr mono">{String(i + 1).padStart(2, '0')}</span>
              <div><p className="lp3-step-title">{t}</p></div>
            </div>
          ))}
        </div>
      </LpSection>

      <LpSection id="faq" label="Spørsmål" heading="Ofte stilt" tint>
        <LpFaq items={FAQ} />
      </LpSection>

      <section id="skjema" className="lp3-section">
        <div className="lp3-wrap lp3-wrap-narrow">
          <div className="lp3-form-head">
            <span className="lp3-section-label">Beskriv jobben</span>
            <h2 className="lp3-h2 lp3-h2-tight">Beskriv jobben og få pris</h2>
            <p className="lp3-body">Jo mer du beskriver og viser i bilder, jo mer presis kan prisen bli.</p>
          </div>
          <div className="lp3-form-panel">
            <LpForm
              page={PAGE}
              idPrefix="ep-"
              submitLabel="Send og få pris"
              rows={[
                [{ kind: 'text', name: 'navn', label: 'Navn', placeholder: 'Ola Nordmann', required: true }, { kind: 'tel', name: 'telefon', label: 'Telefonnummer', placeholder: '900 00 000', required: true }],
                [{ kind: 'email', name: 'epost', label: 'E-post', placeholder: 'ola@example.com', required: true }, { kind: 'text', name: 'postnummer', label: 'Postnummer', placeholder: '1337', required: true }],
                [{ kind: 'select', name: 'type_jobb', label: 'Type jobb', options: [...JOBBER, 'Annet'], required: true }],
                [{ kind: 'textarea', name: 'beskrivelse', label: 'Beskrivelse', placeholder: 'Hva skal gjøres? Beskriv gjerne omfang og rom.', required: true }],
                [{ kind: 'file', name: 'bilder', label: 'Bilder', hint: 'Last opp ett eller flere bilder av jobben' }],
                [{ kind: 'text', name: 'onsket_tidspunkt', label: 'Ønsket tidspunkt', placeholder: 'F.eks. denne uken, snarest' }],
              ]}
            />
          </div>
        </div>
      </section>

      <section id="kontakt" className="lp3-closing">
        <div className="lp3-noise" />
        <div className="lp3-wrap lp3-wrap-narrow" style={{ position: 'relative' }}>
          <h2 className="lp3-h2" style={{ marginBottom: 32 }}>Beskriv jobben og få pris — eller ring oss direkte</h2>
          <div className="lp3-cta-row" style={{ justifyContent: 'center', marginBottom: 0 }}>
            <a href="#skjema" className="lp3-btn lp3-btn-primary" onClick={() => trackLpPrimaryCta(`${PAGE}-bunn`)}>Beskriv jobben og få pris</a>
            <PhoneLink location={`${PAGE}-bunn`} className="lp3-btn lp3-btn-secondary">Ring 90 63 31 18</PhoneLink>
          </div>
        </div>
      </section>

      <div className="lp3-footer-mini">
        <a href="/personvern">Personvern</a> · VBM Elektro AS
      </div>

      <LpSticky page={PAGE} formLabel="Beskriv jobb" />
    </div>
  )
}
