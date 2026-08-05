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
import { PhoneLink } from '@/components/PhoneLink'
import { IcDoc, IcCamera, IcSearch, IcCheckDoc, IcShield, IcClock, IcPanel, IcPlug, IcBulb, IcHeat, IcHouse, IcMore, IcFolder } from '@/components/lp/LpIcons'
import { trackLpPrimaryCta } from '@/lib/analytics'

const PAGE = 'elektriker-pris'

const JOBBER = [
  { icon: <IcPanel size={20} />, title: 'Sikringsskap' },
  { icon: <IcSearch size={20} />, title: 'Feilsøking' },
  { icon: <IcBulb size={20} />, title: 'Belysning' },
  { icon: <IcPlug size={20} />, title: 'Stikkontakter' },
  { icon: <IcHeat size={20} />, title: 'Varmekabler' },
  { icon: <IcHouse size={20} />, title: 'Oppussing' },
  { icon: <IcCheckDoc size={20} />, title: 'Elsjekk' },
  { icon: <IcMore size={20} />, title: 'Annet' },
]

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
        id="skjema"
        page={PAGE}
        h1Start="Elektriker"
        h1Accent="med fastpris"
        lede="Vi gir deg pris før vi starter — du slipper uventede tillegg. Send en kort beskrivelse og noen bilder, så vurderer vi jobben."
        primaryLabel="Beskriv jobben og få pris"
        bgLabel="Bakgrunnsbilde: elektriker i arbeid ved sikringsskap"
        trustItems={[
          { icon: <IcCheckDoc size={20} />, label: 'Fastpris på forhånd' },
          { icon: <IcShield size={20} />, label: 'Kvalitetsarbeid og trygghet' },
          { icon: <IcDoc size={20} />, label: 'Samsvarserklæring' },
          { icon: <IcFolder size={20} />, label: 'Dokumentasjon i Boligmappa' },
        ]}
      >
        <div className="lp3-form-head">
          <p className="lp3-card-title">Beskriv jobben og få pris</p>
          <p className="lp3-body">Vi ringer deg tilbake innen 1 time.</p>
        </div>
        <LpForm
          page={PAGE}
          idPrefix="ep-"
          submitLabel="Send og få pris"
          rows={[
            [{ kind: 'text', name: 'navn', label: 'Navn', placeholder: 'Ola Nordmann', required: true }, { kind: 'tel', name: 'telefon', label: 'Telefonnummer', placeholder: '900 00 000', required: true }],
            [{ kind: 'email', name: 'epost', label: 'E-post', placeholder: 'ola@example.com', required: true }, { kind: 'text', name: 'postnummer', label: 'Postnummer', placeholder: '1337', required: true }],
            [{ kind: 'select', name: 'type_jobb', label: 'Hva gjelder det?', options: ['Sikringsskap', 'Feilsøking', 'Belysning', 'Stikkontakter', 'Varmekabler', 'Oppussing', 'Elsjekk', 'Annet'], required: true }],
            [{ kind: 'textarea', name: 'beskrivelse', label: 'Beskriv kort hva du trenger hjelp med', placeholder: 'Skriv her …', required: true }],
            [{ kind: 'file', name: 'bilder', label: 'Bilder', hint: 'Last opp ett eller flere bilder av jobben' }],
            [{ kind: 'text', name: 'onsket_tidspunkt', label: 'Ønsket tidspunkt', placeholder: 'F.eks. denne uken, snarest' }],
          ]}
        />
      </LpHero>

      <LpIconGrid label="Send inn" heading="Typiske oppdrag vi hjelper med" items={JOBBER} />

      <LpSection label="Prisgrunnlag" heading="Hva påvirker prisen?" tint narrow>
        <div className="lp3-icongrid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: 560, margin: '0 auto' }}>
          {['Jobbens omfang', 'Materiell', 'Tilgang', 'Kabelføring', 'Eksisterende anlegg', 'Feilsøking', 'Dokumentasjon'].map(t => (
            <div className="lp3-icongrid-item" key={t} style={{ background: 'transparent', border: 'none', padding: '8px 0', flexDirection: 'row', gap: 10, textAlign: 'left' }}>
              <p style={{ fontWeight: 500 }}>{t}</p>
            </div>
          ))}
        </div>
      </LpSection>

      <LpProcessSteps
        id="prosess"
        label="Fra beskrivelse til pris"
        heading="Slik får du fastpris"
        steps={[
          { icon: <IcDoc size={24} />, title: 'Fortell oss hva du trenger', text: 'Beskriv jobben i skjemaet' },
          { icon: <IcCamera size={24} />, title: 'Vi gir deg pris', text: 'Basert på bilder og beskrivelse' },
          { icon: <IcCheckDoc size={24} />, title: 'Vi utfører jobben', text: 'Som avtalt, uten overraskelser' },
          { icon: <IcSearch size={24} />, title: 'Du godkjenner', text: 'Og vi dokumenterer arbeidet' },
        ]}
      />

      <LpSection id="prisinformasjon" label="Prismodell" heading="Fastpris eller timepris" tint narrow>
        <ul className="lp3-check-list" style={{ maxWidth: 520, margin: '0 auto' }}>
          <li><span className="ico"><IcCheckDoc size={13} /></span>Avgrensede jobber kan vurderes og prises på forhånd</li>
          <li><span className="ico"><IcCheckDoc size={13} /></span>Feilsøking og ukjent omfang kan kreve timearbeid</li>
          <li><span className="ico"><IcCheckDoc size={13} /></span>Eventuelle tillegg avklares før de utføres</li>
        </ul>
      </LpSection>

      <LpTrustStats items={[
        { icon: <IcShield size={26} />, label: 'NELFO-medlem', sub: 'Registrert i Elvirksomhetsregisteret' },
        { icon: <IcClock size={26} />, label: 'Svar innen 1 time', sub: 'I normal arbeidstid' },
        { icon: <IcCheckDoc size={26} />, label: 'Lokal ekspert', sub: 'Drammen, Asker, Bærum og omegn' },
      ]} teamImageLabel="Bilde: VBM-teamet foran servicebil" />

      <LpSection id="faq" label="Spørsmål" heading="Ofte stilt" narrow>
        <LpFaq items={FAQ} />
      </LpSection>

      <section id="kontakt" className="lp3-closing">
        <div className="lp3-wrap lp3-closing-row">
          <div>
            <h2>Få fastpris på ditt oppdrag</h2>
            <p>Enkelt, trygt og forutsigbart.</p>
          </div>
          <div className="lp3-cta-row">
            <a href="#skjema-form" className="lp3-btn lp3-btn-primary" onClick={() => trackLpPrimaryCta(`${PAGE}-bunn`)}>Beskriv jobben og få pris</a>
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
