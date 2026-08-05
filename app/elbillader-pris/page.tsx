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
import { IcCamera, IcSearch, IcDoc, IcCalendar, IcCheckDoc, IcShield, IcClock, IcFolder } from '@/components/lp/LpIcons'
import { trackLpPrimaryCta } from '@/lib/analytics'

const PAGE = 'elbillader-pris'
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

      <LpHero
        id="skjema"
        page={PAGE}
        h1Start="Hva koster det å få montert"
        h1Accent="elbillader?"
        lede="Send bilde av sikringsskapet og kursfortegnelsen. Vi vurderer anlegget og gir deg skriftlig pris før arbeidet starter."
        primaryLabel="Send bilde og få pris"
        bgImage="/hero-elbillader-pris.png"
        bgAlt="Elbillader montert på husvegg i skumring"
        trustItems={[
          { icon: <IcCheckDoc size={20} />, label: 'Skriftlig pris før start' },
          { icon: <IcShield size={20} />, label: 'Tillegg avklares på forhånd' },
          { icon: <IcDoc size={20} />, label: 'Samsvarserklæring' },
          { icon: <IcFolder size={20} />, label: 'Dokumentasjon i Boligmappa' },
        ]}
      >
        <div className="lp3-form-head">
          <p className="lp3-card-title">Send bilde og få pris</p>
          <p className="lp3-body">Fyll inn det du vet — bildene hjelper oss å gi presis pris med én gang.</p>
        </div>
        <LpForm
          page={PAGE}
          idPrefix="eb-"
          submitLabel="Last opp bilder og send"
          rows={[
            [{ kind: 'text', name: 'navn', label: 'Navn', placeholder: 'Ola Nordmann', required: true }, { kind: 'tel', name: 'telefon', label: 'Telefonnummer', placeholder: '900 00 000', required: true }],
            [{ kind: 'email', name: 'epost', label: 'E-post', placeholder: 'ola@example.com', required: true }, { kind: 'text', name: 'postnummer', label: 'Postnummer', placeholder: '1337', required: true }],
            [{ kind: 'text', name: 'ladermodell', label: 'Ønsket ladermodell', placeholder: 'F.eks. Zaptec Go, Easee One' }],
            [{ kind: 'radio', name: 'har_lader', label: 'Har du allerede kjøpt lader?', options: ['Ja', 'Nei', 'Vet ikke'] }],
            [{ kind: 'file', name: 'bilder', label: 'Last opp bilder', hint: 'Sikringsskap, kursfortegnelse og ønsket ladepunkt', multiple: true }],
          ]}
        />
      </LpHero>

      <LpProcessSteps
        id="prosess"
        label="Enkel prosess"
        heading="Fra bilde til ferdig lader"
        steps={[
          { icon: <IcCamera size={24} />, title: 'Bilder og info', text: 'Du sender bilder av sikringsskapet' },
          { icon: <IcSearch size={24} />, title: 'Vi vurderer', text: 'VBM vurderer anlegget ditt' },
          { icon: <IcDoc size={24} />, title: 'Skriftlig pris', text: 'Du mottar fast pris på e-post' },
          { icon: <IcCalendar size={24} />, title: 'Vi avtaler tid', text: 'Vi finner en dag som passer' },
          { icon: <IcCheckDoc size={24} />, title: 'Dokumentasjon', text: 'Leveres etter utført arbeid' },
        ]}
      />

      <LpTwoCards
        id="prisinformasjon"
        label="Viktig å vite"
        heading="Dette inngår — og dette påvirker prisen"
        cards={[
          { title: 'Dette inngår i arbeidet', tone: 'accent', imageLabel: 'Bilde: elektriker monterer lader', items: ['Vurdering av eksisterende elektrisk anlegg', 'Nødvendig kurs og vern', 'Montering og tilkobling', 'Testing', 'Samsvarserklæring', 'Dokumentasjon i Boligmappa'] },
          { title: 'Dette påvirker prisen', tone: 'neutral', imageLabel: 'Bilde: sikringsskap før montering', items: ['Avstand mellom sikringsskap og ladepunkt', 'Kabelføring', 'Kapasitet i sikringsskap', 'Behov for oppgradering', 'Ladermodell', 'Lastbalansering'] },
        ]}
      />

      <LpTrustStats items={[
        { icon: <IcShield size={26} />, label: 'NELFO-medlem', sub: 'Registrert i Elvirksomhetsregisteret' },
        { icon: <IcClock size={26} />, label: 'Svar innen 1 time', sub: 'I normal arbeidstid' },
        { icon: <IcCheckDoc size={26} />, label: 'Lokal ekspert', sub: 'Drammen, Asker, Bærum og omegn' },
      ]} teamImageLabel="Bilde: VBM-teamet foran servicebil" />

      <LpGallery
        label="Fra virkeligheten"
        heading="Nylig utførte installasjoner"
        labels={['Bilde: montert lader', 'Bilde: sikringsskap', 'Bilde: lader utendørs', 'Bilde: lader i garasje', 'Bilde: ferdig kabelføring']}
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
        <div className="lp3-wrap lp3-closing-row">
          <div>
            <h2>Klar for skriftlig pris?</h2>
            <p>Send bilder nå — vi gjør resten.</p>
          </div>
          <div className="lp3-cta-row">
            <a href="#skjema-form" className="lp3-btn lp3-btn-primary" onClick={() => trackLpPrimaryCta(`${PAGE}-bunn`)}>Send bilde og få pris</a>
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
