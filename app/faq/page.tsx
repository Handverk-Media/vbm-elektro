import type { Metadata } from 'next'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { BefaringCTA } from '@/components/BefaringCTA'

export const metadata: Metadata = {
  title: 'FAQ – Vanlige spørsmål – VBM Elektro AS',
  description: 'Svar på de vanligste spørsmålene om elbillader, pris, dokumentasjon, responstid og autorisasjon.',
  alternates: { canonical: 'https://vbmelektro.no/faq' },
}

const SPOERSMAAL = [
  {
    q: 'Hva koster en elbillader-installasjon hos dere?',
    a: 'Standard installasjon starter på kr 12 490. Det inkluderer kabling fra sikringsskap, nødvendig vern, dokumentasjon og idriftsettelse. Hvis det trengs kursoppgradering eller ekstra kabling, ligger vi typisk på kr 18 490 og oppover. Selve laderen kommer i tillegg — vi monterer alle godkjente merker som Zaptec, Easee og Defa.',
  },
  {
    q: 'Hvor raskt kan dere komme?',
    a: 'Vanlige serviceoppdrag og elbillader: 1–5 dager avhengig av sesong. Akutte feil (strømmen er borte, lukter svidd): ring 90 63 31 18 så hjelper vi deg å prioritere.',
  },
  {
    q: 'Hva hvis jobben blir større enn dere trodde — kommer det tillegg?',
    a: 'Du hører fra oss før det skjer. Hvis vi oppdager noe uventet, stopper vi, ringer deg og forklarer hva som må til og hva det koster. Du tar avgjørelsen før vi går videre. Håndverkertjenesteloven § 32 slår fast at vi ikke kan gå vesentlig over prisoverslaget — og vi gjør det aldri.',
  },
  {
    q: 'Jobber dere på hytte og fritidsbolig?',
    a: 'Ja, men vi tar primært jobber i Oslo, Bærum, Asker og Drammen. For lengre reise legger vi til kjørekostnad — som vi sier ifra om på forhånd.',
  },
  {
    q: 'Er dere godkjent og autorisert?',
    a: 'Ja. Vi er registrert i Elvirksomhetsregisteret hos DSB, medlem av NHO Elektro og Elektro Union, og alle elektrikere har relevant fagbrev.',
  },
  {
    q: 'Kan dere brukes som underentreprenør på rehab-prosjekter?',
    a: 'Ja — vi leverer elektrofaget på rehab-prosjekter for entreprenører i Oslo og Viken. Vi følger byggemøter, leverer dokumentasjon i tide og jobber etter NS 8415/8416-rammer. Vi tar også rammeavtaler for borettslag og næringseiendom.',
  },
  {
    q: 'Hva er en samsvarserklæring og trenger jeg den?',
    a: 'Samsvarserklæring er lovpålagt dokumentasjon på at el-arbeidet er utført av autorisert installatør i henhold til NEK 400. Den er viktig ved boligsalg, forsikringsoppgjør og tilsyn. Vi leverer den digitalt etter ferdig jobb — alltid.',
  },
  {
    q: 'Kan jeg velge hvilken ladeboks jeg vil ha?',
    a: 'Ja. Vi monterer ladebokser fra alle kjente leverandører — Zaptec, Easee, Defa, Schneider og andre. Du kan kjøpe boksen selv eller vi kan skaffe den. Beste valg avhenger av boligsituasjon, effektbehov og app-preferanser.',
  },
]

export default function FaqPage() {
  return (
    <div className="subpage">
      <SiteHeader />
      <div className="subpage-pt">

        <section className="subpage-hero">
          <div className="wrap">
            <div className="eyebrow">FAQ</div>
            <h1>Spørsmål folk faktisk stiller</h1>
            <p>Svar på det vi oftest får spørsmål om — pris, tid, dokumentasjon og hva du kan forvente.</p>
          </div>
        </section>

        <section style={{ padding: '80px 0' }}>
          <div className="wrap-tight">
            <div className="faq-list">
              {SPOERSMAAL.map((s, i) => (
                <details key={i} className="faq-item" open={i === 0}>
                  <summary>{s.q}<span className="ico">+</span></summary>
                  <div className="answer"><p>{s.a}</p></div>
                </details>
              ))}
            </div>

            <div style={{ marginTop: 64, background: 'var(--bg-dark)', borderRadius: 16, padding: '48px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
              <div>
                <div className="eyebrow" style={{ color: 'var(--red)' }}>Finner du ikke svaret?</div>
                <h2 style={{ color: 'white', marginTop: 12, fontSize: 'clamp(22px, 3vw, 32px)' }}>Ring oss — vi svarer innen 1 time</h2>
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="tel:90633118" className="btn btn-red">Ring 90 63 31 18 <span className="arr">→</span></a>
                <BefaringCTA label="Book befaring" className="btn btn-ghost" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }} />
              </div>
            </div>
          </div>
        </section>

      </div>
      <SiteFooter />
    </div>
  )
}
