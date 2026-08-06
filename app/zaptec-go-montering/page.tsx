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
import { LpFooter } from '@/components/lp/LpFooter'
import { PhoneLink } from '@/components/PhoneLink'
import { IcCamera, IcPanel, IcDoc, IcPin, IcShield, IcStar, IcChat, IcFolder, IcUser, IcPhoneOutline, IcPencil, IcMail, IcDistance, IcCable, IcPanelLines, IcBalance, IcClipboardCheck, IcCalculator } from '@/components/lp/LpIcons'
import { trackLpPrimaryCta } from '@/lib/analytics'

const PAGE = 'zaptec-go-montering'
const CTA = 'Få pris på Zaptec Go'

const FAQ = [
  { q: 'Hva er inkludert i Zaptec Go-installasjonen?', a: 'Vurdering av kapasitet, nødvendig kurs og vern, kabelføring og montering, testing, samsvarserklæring og dokumentasjon i Boligmappa.' },
  { q: 'Trenger jeg lastbalansering?', a: 'Det avhenger av eksisterende kapasitet i sikringsskapet. Vi vurderer det ut fra bildene du sender inn.' },
  { q: 'Får jeg skriftlig pris før dere starter?', a: 'Ja. Du får skriftlig pris basert på bildene og informasjonen du sender inn, før noe arbeid starter.' },
  { q: 'Kan dere levere og montere Zaptec Go selv om jeg ikke har kjøpt den ennå?', a: 'Ja. Kryss av for at du ønsker tilbud på både lader og montering, så prisen dekker begge deler.' },
]

export default function ZaptecGoPage() {
  return (
    <div className="lp3-page">
      <LpHeader location={`${PAGE}-header`} />

      <LpHero
        id="skjema"
        page={PAGE}
        h1="Zaptec Go ferdig montert"
        lede="Trygg installasjon av en av Norges mest solgte smartladere. Send bilde av sikringsskapet — du får skriftlig pris før montering."
        bgImage="/hero-zaptec-go-montering.png"
        bgAlt="Zaptec Go montert på husvegg"
        bgPosition="56% 35%"
        checklist={['Skriftlig pris før oppstart', 'Tillegg avklares på forhånd', 'Samsvarserklæring inkludert', 'Dokumentasjon i Boligmappa']}
      >
        <div className="lp3-form-head">
          <p className="lp3-card-title">{CTA}</p>
          <p className="lp3-body">Fyll ut skjemaet, så vurderer vi anlegget ditt og gir deg fast pris før montering.</p>
        </div>
        <LpForm
          page={PAGE}
          idPrefix="zg-"
          submitLabel={CTA}
          rows={[
            [{ kind: 'text', name: 'navn', label: 'Navn', placeholder: 'Ditt navn', required: true, icon: <IcUser size={18} /> }, { kind: 'tel', name: 'telefon', label: 'Telefonnummer', placeholder: 'Ditt telefonnummer', required: true, icon: <IcPhoneOutline size={18} /> }],
            [{ kind: 'text', name: 'postnummer', label: 'Postnummer', placeholder: 'Postnummer', required: true, icon: <IcPin size={18} /> }, { kind: 'email', name: 'epost', label: 'E-post', placeholder: 'Din e-post', icon: <IcMail size={18} /> }],
            [{ kind: 'radio', name: 'har_lader', label: 'Har du allerede kjøpt Zaptec Go?', options: ['Ja', 'Nei', 'Ønsker tilbud på både lader og montering'] }],
            [{ kind: 'file', name: 'bilde_sikringsskap', label: 'Last opp bilde av sikringsskapet', required: true }, { kind: 'file', name: 'bilde_plassering', label: 'Last opp bilde av ønsket plassering' }],
            [{ kind: 'textarea', name: 'beskrivelse', label: 'Kort beskrivelse av oppdraget', placeholder: 'Beskriv kort hva du trenger hjelp med', rows: 3, icon: <IcPencil size={18} /> }],
          ]}
        />
      </LpHero>

      <LpProcessSteps
        id="prosess"
        label="Slik foregår installasjonen"
        heading="Fra bilde til ferdig lader"
        steps={[
          { icon: <IcCamera size={24} />, title: 'Send bilde', text: 'Du sender bilde av sikringsskapet.' },
          { icon: <IcPanel size={24} />, title: 'Vi vurderer', text: 'Kapasitet og kabelvei sjekkes.' },
          { icon: <IcDoc size={24} />, title: 'Du får pris', text: 'Skriftlig pris før montering starter.' },
        ]}
      />

      <LpTwoCards
        id="prisinformasjon"
        label="Viktig å vite"
        heading="Dette gjør vi — og dette avgjør prisen"
        cards={[
          {
            title: 'Dette gjør vi', tone: 'accent', watermark: <IcClipboardCheck />,
            items: [
              { text: 'Vurdering av kapasitet i sikringsskapet' },
              { text: 'Nødvendig kurs og vern' },
              { text: 'Kabelføring og montering' },
              { text: 'Testing' },
              { text: 'Samsvarserklæring' },
              { text: 'Dokumentasjon i Boligmappa' },
            ],
          },
          {
            title: 'Dette avgjør prisen', tone: 'neutral', watermark: <IcCalculator />,
            items: [
              { text: 'Avstand og kabelføring', icon: <IcDistance size={20} /> },
              { text: 'Kapasitet i sikringsskap', icon: <IcPanelLines size={20} /> },
              { text: 'Behov for oppgradering', icon: <IcBalance size={20} /> },
              { text: 'Om du trenger lastbalansering', icon: <IcCable size={20} /> },
            ],
          },
        ]}
      />

      <LpTrustStats
        label="Vår standard"
        heading="Derfor velger kunder VBM Elektro"
        items={[
          { icon: <IcPin size={26} />, label: 'Lokal elektriker', sub: 'Drammen, Asker, Bærum, Lier og Øvre Eiker' },
          { icon: <IcShield size={26} />, label: 'Registrert elvirksomhet', sub: 'Elvirksomhetsregisteret' },
          { icon: <IcStar size={26} />, label: 'Fagfolk med lang erfaring', sub: 'Kvalitet i alle ledd' },
          { icon: <IcChat size={26} />, label: 'Trygg og forutsigbar prosess', sub: 'Pris før oppstart' },
          { icon: <IcFolder size={26} />, label: 'Dokumentasjon du kan stole på', sub: 'Boligmappa' },
        ]}
      />

      <LpGallery
        label="Fra virkeligheten"
        heading="Nylige installasjoner"
        labels={['Bilde: Zaptec Go montert', 'Bilde: sikringsskap', 'Bilde: lader utendørs', 'Bilde: lader i garasje', 'Bilde: ferdig kabelføring', 'Bilde: sikringsskap åpent']}
      />

      <LpSection id="faq" label="Spørsmål" heading="Ofte stilte spørsmål">
        <LpFaq items={FAQ} />
      </LpSection>

      <section id="kontakt" className="lp3-closing">
        <div className="lp3-wrap lp3-closing-row">
          <div>
            <h2>Få pris på Zaptec Go i dag</h2>
            <p>Raskt, enkelt og uforpliktende.</p>
          </div>
          <div className="lp3-cta-row">
            <a href="#skjema" className="lp3-btn lp3-btn-primary" onClick={() => trackLpPrimaryCta(`${PAGE}-bunn`)}>{CTA}</a>
            <PhoneLink location={`${PAGE}-bunn`} className="lp3-btn lp3-btn-secondary">Ring 90 63 31 18</PhoneLink>
          </div>
        </div>
      </section>

      <LpFooter />

      <LpSticky page={PAGE} formLabel={CTA} />
    </div>
  )
}
