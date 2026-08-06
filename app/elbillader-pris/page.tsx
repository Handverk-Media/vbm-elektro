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
import { IcCamera, IcSearch, IcDoc, IcPin, IcShield, IcStar, IcChat, IcFolder, IcUser, IcPhoneOutline, IcPencil, IcMail, IcDistance, IcCable, IcPanelLines, IcBalance, IcWrench2, IcClipboardCheck, IcCalculator } from '@/components/lp/LpIcons'
import { trackLpPrimaryCta } from '@/lib/analytics'

const PAGE = 'elbillader-pris'
const CTA = 'Få skriftlig pris'

const FAQ = [
  { q: 'Hva koster det å montere elbillader?', a: 'Prisen avhenger av sikringsskapets kapasitet, avstand til ladepunktet og om noe må oppgraderes. Send bilde av sikringsskapet og kursfortegnelsen, så gir vi deg skriftlig pris før noe arbeid starter.' },
  { q: 'Hvorfor trenger dere bilde av sikringsskapet?', a: 'Bildet viser oss kapasiteten i anlegget ditt, slik at vi kan gi deg en presis, skriftlig pris med det samme — uten befaring.' },
  { q: 'Må sikringsskapet byttes?', a: 'Ikke alltid. Vi vurderer om skapet tåler en ny kurs til laderen, eller om det trenger oppgradering — det ser vi når vi har fått bilder av skapet.' },
  { q: 'Kan VBM montere en lader kunden allerede har kjøpt?', a: 'Ja. Fortell oss om det i skjemaet, så vurderer vi installasjonen ut fra den.' },
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
        h1="Få skriftlig pris før vi starter"
        lede="Send bilde av sikringsskapet, så vurderer vi anlegget ditt og gir deg fast pris før arbeidet starter."
        bgImage="/hero-elbillader-pris.png"
        bgAlt="Elbillader montert på husvegg i skumring"
        bgPosition="45% 22%"
        checklist={['Skriftlig pris før oppstart', 'Tillegg avklares på forhånd', 'Samsvarserklæring inkludert', 'Dokumentasjon i Boligmappa']}
      >
        <div className="lp3-form-head">
          <p className="lp3-card-title">Send bilde og få skriftlig pris</p>
          <p className="lp3-body">Fyll ut skjemaet, så vurderer vi anlegget ditt og gir deg fast pris før vi starter.</p>
        </div>
        <LpForm
          page={PAGE}
          idPrefix="eb-"
          submitLabel={CTA}
          rows={[
            [{ kind: 'text', name: 'navn', label: 'Navn', placeholder: 'Ditt navn', required: true, icon: <IcUser size={18} /> }, { kind: 'tel', name: 'telefon', label: 'Telefonnummer', placeholder: 'Ditt telefonnummer', required: true, icon: <IcPhoneOutline size={18} /> }],
            [{ kind: 'text', name: 'postnummer', label: 'Postnummer', placeholder: 'Postnummer', required: true, icon: <IcPin size={18} /> }, { kind: 'email', name: 'epost', label: 'E-post', placeholder: 'Din e-post', icon: <IcMail size={18} /> }],
            [{ kind: 'radio', name: 'har_lader', label: 'Har du allerede kjøpt elbillader?', options: ['Ja', 'Nei'] }],
            [{ kind: 'file', name: 'bilde_sikringsskap', label: 'Last opp bilde av sikringsskapet', required: true }, { kind: 'file', name: 'bilde_plassering', label: 'Last opp bilde av ønsket plassering' }],
            [{ kind: 'textarea', name: 'beskrivelse', label: 'Kort beskrivelse av oppdraget', placeholder: 'Beskriv kort hva du trenger hjelp med', rows: 3, icon: <IcPencil size={18} /> }],
          ]}
        />
      </LpHero>

      <LpProcessSteps
        id="prosess"
        label="Enkel prosess"
        heading="Slik fungerer det"
        steps={[
          { icon: <IcCamera size={24} />, title: 'Send bilde', text: 'Ta bilde av sikringsskapet og fyll ut skjemaet.' },
          { icon: <IcSearch size={24} />, title: 'Vi vurderer', text: 'Vi ser på anlegget ditt og avklarer eventuelle spørsmål.' },
          { icon: <IcDoc size={24} />, title: 'Du får pris', text: 'Du mottar skriftlig pris før vi starter.' },
        ]}
      />

      <LpTwoCards
        id="prisinformasjon"
        label="Viktig å vite"
        heading="Dette inngår — og dette påvirker prisen"
        cards={[
          {
            title: 'Dette inngår i prisen', tone: 'accent', watermark: <IcClipboardCheck />,
            items: [
              { text: 'Montering og tilkobling' },
              { text: 'Nødvendig tilkobling og materiell' },
              { text: 'Testing og funksjonssjekk' },
              { text: 'Samsvarserklæring' },
              { text: 'Dokumentasjon i Boligmappa' },
            ],
          },
          {
            title: 'Dette kan påvirke prisen', tone: 'neutral', watermark: <IcCalculator />,
            items: [
              { text: 'Avstand fra sikringsskap til ladepunkt', icon: <IcDistance size={20} /> },
              { text: 'Kabelvei og gjennomføringer', icon: <IcCable size={20} /> },
              { text: 'Kapasitet i eksisterende anlegg', icon: <IcPanelLines size={20} /> },
              { text: 'Behov for lastbalansering/oppgradering', icon: <IcBalance size={20} /> },
              { text: 'Andre forhold ved installasjonen', icon: <IcWrench2 size={20} /> },
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
        labels={['Bilde: montert lader', 'Bilde: sikringsskap', 'Bilde: lader utendørs', 'Bilde: lader i garasje', 'Bilde: ferdig kabelføring', 'Bilde: sikringsskap åpent']}
      />

      <LpSection id="faq" label="Spørsmål" heading="Ofte stilte spørsmål">
        <LpFaq items={FAQ} />
      </LpSection>

      <section id="kontakt" className="lp3-closing">
        <div className="lp3-wrap lp3-closing-row">
          <div>
            <h2>Send bilde av sikringsskapet og få skriftlig pris før vi starter</h2>
            <p>Du får vite hva det koster — før vi starter.</p>
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
