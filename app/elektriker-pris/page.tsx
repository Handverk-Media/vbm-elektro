'use client'
import { LpHeader } from '@/components/lp/LpHeader'
import { LpHero } from '@/components/lp/LpHero'
import { LpTrustStats } from '@/components/lp/LpTrustStats'
import { LpProcessSteps } from '@/components/lp/LpProcessSteps'
import { LpIconGrid } from '@/components/lp/LpIconGrid'
import { LpSection } from '@/components/lp/LpSection'
import { LpSticky } from '@/components/lp/LpSticky'
import { LpFaq } from '@/components/lp/LpFaq'
import { LpForm } from '@/components/lp/LpForm'
import { LpFooter } from '@/components/lp/LpFooter'
import { PhoneLink } from '@/components/PhoneLink'
import { IcDoc, IcCamera, IcSearch, IcCheckDoc, IcPanel, IcPlug, IcBulb, IcHeat, IcMore, IcPin, IcShield, IcStar, IcChat, IcFolder, IcUser, IcPhoneOutline, IcPencil, IcMail } from '@/components/lp/LpIcons'
import { trackLpPrimaryCta } from '@/lib/analytics'

const PAGE = 'elektriker-pris'
const CTA = 'Få vurdert oppdraget'

const JOBB_TYPER = ['Feilsøking', 'Sikringsskap', 'Stikkontakt/belysning', 'Varmekabler', 'Elbillader', 'Annet']

const JOBBER = [
  { icon: <IcSearch size={20} />, title: 'Feilsøking' },
  { icon: <IcPanel size={20} />, title: 'Sikringsskap' },
  { icon: <IcBulb size={20} />, title: 'Stikkontakt/belysning' },
  { icon: <IcHeat size={20} />, title: 'Varmekabler' },
  { icon: <IcPlug size={20} />, title: 'Elbillader' },
  { icon: <IcMore size={20} />, title: 'Annet' },
]

const FAQ = [
  { q: 'Får jeg fastpris eller timepris?', a: 'Avgrensede jobber med kjent omfang kan vi ofte gi fastpris på etter å ha sett bilder og beskrivelse. Feilsøking og jobber med ukjent omfang kan kreve timearbeid — det avklarer vi før vi starter, ikke etterpå.' },
  { q: 'Hva slags jobber kan jeg sende inn?', a: 'Alt fra stikkontakter og belysning til feilsøking, varmekabler, sikringsskap og elbillader.' },
  { q: 'Kommer det tillegg jeg ikke visste om?', a: 'Nei. Eventuelle tillegg avklares med deg før de utføres, ikke etterpå.' },
  { q: 'Får jeg dokumentasjon på jobben?', a: 'Ja, der det er aktuelt — samsvarserklæring og dokumentasjon leveres etter utført arbeid.' },
]

export default function ElektrikerPrisPage() {
  return (
    <div className="lp3-page">
      <LpHeader location={`${PAGE}-header`} />

      <LpHero
        id="skjema"
        page={PAGE}
        h1="Beskriv jobben, få den vurdert"
        lede="Fortell oss hva du trenger hjelp med. Avgrensede jobber gir vi ofte fastpris på — ved feilsøking eller ukjent omfang avklarer vi pris før vi starter."
        bgImage="/hero-elektriker-pris.png"
        bgAlt="Elektriker i arbeid ved sikringsskap"
        bgPosition="56% 32%"
        checklist={['Pris eller vurdering før oppstart', 'Tillegg avklares på forhånd', 'Samsvarserklæring der det er aktuelt', 'Dokumentasjon i Boligmappa']}
      >
        <div className="lp3-form-head">
          <p className="lp3-card-title">{CTA}</p>
          <p className="lp3-body">Fyll ut skjemaet, så vurderer vi oppdraget og gir deg svar før vi starter.</p>
        </div>
        <LpForm
          page={PAGE}
          idPrefix="ep-"
          submitLabel={CTA}
          rows={[
            [{ kind: 'text', name: 'navn', label: 'Navn', placeholder: 'Ditt navn', required: true, icon: <IcUser size={18} /> }, { kind: 'tel', name: 'telefon', label: 'Telefonnummer', placeholder: 'Ditt telefonnummer', required: true, icon: <IcPhoneOutline size={18} /> }],
            [{ kind: 'text', name: 'postnummer', label: 'Postnummer', placeholder: 'Postnummer', required: true, icon: <IcPin size={18} /> }, { kind: 'email', name: 'epost', label: 'E-post', placeholder: 'Din e-post', icon: <IcMail size={18} /> }],
            [{ kind: 'select', name: 'type_jobb', label: 'Hva gjelder oppdraget?', options: JOBB_TYPER, required: true }],
            [{ kind: 'file', name: 'bilder', label: 'Last opp bilder av jobben', required: true }],
            [{ kind: 'textarea', name: 'beskrivelse', label: 'Beskriv oppdraget kort', placeholder: 'Beskriv kort hva du trenger hjelp med', rows: 3, icon: <IcPencil size={18} /> }],
          ]}
        />
      </LpHero>

      <LpIconGrid label="Send inn" heading="Typiske oppdrag vi hjelper med" items={JOBBER} />

      <LpProcessSteps
        id="prosess"
        label="Fra beskrivelse til svar"
        heading="Slik fungerer det"
        steps={[
          { icon: <IcDoc size={24} />, title: 'Beskriv jobben', text: 'Fortell oss hva du trenger, med bilder.' },
          { icon: <IcSearch size={24} />, title: 'Vi vurderer', text: 'Basert på bilder og beskrivelse.' },
          { icon: <IcCheckDoc size={24} />, title: 'Du får svar', text: 'Fastpris der vi kan, ellers avtalt time.' },
        ]}
      />

      <LpSection id="prisinformasjon" label="Prismodell" heading="Fastpris eller timepris" tint narrow>
        <ul className="lp3-check-list" style={{ maxWidth: 520, margin: '0 auto' }}>
          <li><span className="ico"><IcCheckDoc size={13} /></span>Avgrensede jobber kan vurderes og prises på forhånd</li>
          <li><span className="ico"><IcCheckDoc size={13} /></span>Feilsøking og ukjent omfang kan kreve timearbeid</li>
          <li><span className="ico"><IcCheckDoc size={13} /></span>Eventuelle tillegg avklares før de utføres</li>
        </ul>
      </LpSection>

      <LpTrustStats
        label="Vår standard"
        heading="Derfor velger kunder VBM Elektro"
        items={[
          { icon: <IcPin size={26} />, label: 'Lokal elektriker', sub: 'Drammen, Asker, Bærum, Lier og Øvre Eiker' },
          { icon: <IcShield size={26} />, label: 'Registrert elvirksomhet', sub: 'Elvirksomhetsregisteret' },
          { icon: <IcStar size={26} />, label: 'Fagfolk med lang erfaring', sub: 'Kvalitet i alle ledd' },
          { icon: <IcChat size={26} />, label: 'Trygg og forutsigbar prosess', sub: 'Vurdering før oppstart' },
          { icon: <IcFolder size={26} />, label: 'Dokumentasjon du kan stole på', sub: 'Boligmappa' },
        ]}
      />

      <LpSection id="faq" label="Spørsmål" heading="Ofte stilte spørsmål">
        <LpFaq items={FAQ} />
      </LpSection>

      <section id="kontakt" className="lp3-closing">
        <div className="lp3-wrap lp3-closing-row">
          <div>
            <h2>Beskriv jobben og få den vurdert</h2>
            <p>Enkelt, trygt og forutsigbart.</p>
          </div>
          <div className="lp3-cta-row">
            <a href="#skjema" className="lp3-btn lp3-btn-primary" onClick={() => trackLpPrimaryCta(`${PAGE}-bunn`)}>{CTA}</a>
            <PhoneLink location={`${PAGE}-bunn`} className="lp3-btn lp3-btn-secondary">Ring 90 63 31 18</PhoneLink>
          </div>
        </div>
      </section>

      <LpFooter />

      <LpSticky page={PAGE} formLabel="Beskriv jobb" />
    </div>
  )
}
