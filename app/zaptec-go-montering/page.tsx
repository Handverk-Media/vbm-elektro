'use client'
import { LpHeader } from '@/components/lp/LpHeader'
import { LpHero } from '@/components/lp/LpHero'
import { LpTrustStats } from '@/components/lp/LpTrustStats'
import { LpProcessSteps } from '@/components/lp/LpProcessSteps'
import { LpTwoCards } from '@/components/lp/LpTwoCards'
import { LpGallery } from '@/components/lp/LpGallery'
import { LpSection } from '@/components/lp/LpSection'
import { LpSticky } from '@/components/lp/LpSticky'
import { LpFaq } from '@/components/lp/LpFaq'
import { LpForm } from '@/components/lp/LpForm'
import { PhoneLink } from '@/components/PhoneLink'
import { IcRuler, IcPanel, IcCheckDoc, IcCamera, IcShield, IcClock, IcDoc } from '@/components/lp/LpIcons'
import { trackLpPrimaryCta } from '@/lib/analytics'

const PAGE = 'zaptec-go-montering'
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
        id="skjema"
        page={PAGE}
        h1Start="Zaptec Go"
        h1Accent="ferdig montert"
        lede="Trygg installasjon av en av Norges mest solgte smartladere. Send bilde av sikringsskapet — du får skriftlig pris før montering."
        checklist={['Skriftlig pris før oppstart', 'Samsvarserklæring', 'Dokumentasjon i Boligmappa', 'Tillegg avklares på forhånd']}
        imageLabel="Bilde: Zaptec Go montert på vegg"
      >
        <div className="lp3-form-head">
          <p className="lp3-card-title">Få pris på Zaptec Go</p>
          <p className="lp3-body">Fyll ut skjemaet — vi ringer deg tilbake innen 1 time.</p>
        </div>
        <LpForm
          page={PAGE}
          idPrefix="zg-"
          submitLabel="Send og få pris"
          rows={[
            [{ kind: 'text', name: 'navn', label: 'Navn', placeholder: 'Ola Nordmann', required: true }, { kind: 'tel', name: 'telefon', label: 'Telefonnummer', placeholder: '900 00 000', required: true }],
            [{ kind: 'email', name: 'epost', label: 'E-post', placeholder: 'ola@example.com', required: true }, { kind: 'text', name: 'postnummer', label: 'Postnummer', placeholder: '1337', required: true }],
            [{ kind: 'radio', name: 'har_lader', label: 'Har du allerede kjøpt Zaptec Go?', options: ['Ja', 'Nei', 'Vet ikke'] }],
            [{ kind: 'file', name: 'bilde_sikringsskap', label: 'Bilde av sikringsskap', hint: 'Åpent skap, godt lys' }],
            [{ kind: 'file', name: 'bilde_kursfortegnelse', label: 'Bilde av kursfortegnelse', hint: 'Listen inni skapdøren' }],
            [{ kind: 'file', name: 'bilde_ladepunkt', label: 'Bilde av ønsket ladepunkt', hint: 'Valgfritt' }],
            [{ kind: 'text', name: 'kabelavstand', label: 'Omtrentlig kabelavstand', placeholder: 'F.eks. 8–10 meter' }],
            [{ kind: 'textarea', name: 'kommentar', label: 'Kommentar', placeholder: 'Annet vi bør vite?' }],
          ]}
        />
      </LpHero>

      <LpTrustStats items={[
        { icon: <IcShield size={26} />, label: 'NELFO-medlem', sub: 'Registrert i Elvirksomhetsregisteret' },
        { icon: <IcCheckDoc size={26} />, label: 'Skriftlig pris', sub: 'Før vi starter' },
        { icon: <IcClock size={26} />, label: 'Svar innen 1 time', sub: 'I normal arbeidstid' },
        { icon: <IcDoc size={26} />, label: 'Boligmappa', sub: 'Dokumentasjon inkludert' },
      ]} />

      <LpSection label="Dette trenger vi" heading="Dette trenger vi for å gi deg pris" narrow>
        <div className="lp3-icongrid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <div className="lp3-icongrid-item"><span className="ico"><IcPanel size={22} /></span><p>Bilde av sikringsskap og kursfortegnelse</p></div>
          <div className="lp3-icongrid-item"><span className="ico"><IcRuler size={22} /></span><p>Omtrentlig avstand fra skap til lader</p></div>
          <div className="lp3-icongrid-item"><span className="ico"><IcCamera size={22} /></span><p>Bilde av ønsket plassering av laderen</p></div>
        </div>
      </LpSection>

      <LpProcessSteps
        id="prosess"
        label="Slik foregår installasjonen"
        heading="Fra bilde til ferdig lader"
        steps={[
          { icon: <IcCamera size={24} />, title: 'Bilder og info', text: 'Du sender bilder av sikringsskapet' },
          { icon: <IcPanel size={24} />, title: 'Vi vurderer', text: 'Kapasitet og kabelvei sjekkes' },
          { icon: <IcCheckDoc size={24} />, title: 'Skriftlig pris', text: 'Du får fast pris på e-post' },
          { icon: <IcRuler size={24} />, title: 'Montering', text: 'Våre elektrikere installerer laderen' },
          { icon: <IcDoc size={24} />, title: 'Dokumentasjon', text: 'Leveres etter utført arbeid' },
        ]}
      />

      <LpTwoCards
        id="prisinformasjon"
        label="Viktig å vite"
        heading="Dette gjør vi — og dette avgjør prisen"
        cards={[
          { title: 'Dette gjør vi', tone: 'accent', imageLabel: 'Bilde: elektriker monterer Zaptec Go', items: ['Vurdering av kapasitet i sikringsskapet', 'Nødvendig kurs og vern', 'Kabelføring og montering', 'Testing', 'Samsvarserklæring', 'Dokumentasjon i Boligmappa'] },
          { title: 'Dette avgjør prisen', tone: 'neutral', imageLabel: 'Bilde: kabelføring til lader', items: ['Avstand og kabelføring', 'Kapasitet i sikringsskap', 'Behov for oppgradering', 'Om du trenger lastbalansering'] },
        ]}
      />

      <LpSection label="Dekningsområde" heading="Områder" tint>
        <div className="lp3-areas">
          {OMRADER.map(o => <span key={o} className="lp3-area-tag">{o}</span>)}
        </div>
      </LpSection>

      <LpSection id="faq" label="Spørsmål" heading="Ofte stilt" narrow>
        <LpFaq items={FAQ} />
      </LpSection>

      <section id="kontakt" className="lp3-closing">
        <div className="lp3-wrap lp3-wrap-narrow">
          <h2>Få pris på Zaptec Go i dag</h2>
          <p>Raskt, enkelt og uforpliktende.</p>
          <div className="lp3-cta-row" style={{ justifyContent: 'center' }}>
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
