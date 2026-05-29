import type { Metadata } from 'next'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { BefaringCTA } from '@/components/BefaringCTA'

export const metadata: Metadata = {
  title: 'Tjenester – VBM Elektro AS',
  description: 'Elbillader, sikringsskap, smarthus, renovering, feilsøking og næringsbygg. Autorisert elektriker i Bærum, Oslo og Asker.',
  alternates: { canonical: 'https://vbmelektro.no/tjenester' },
}

const TJENESTER = [
  {
    id: 'elbillader',
    icon: <path d="M13 2L4.09 13.09a.5.5 0 00.39.81H11l-1.27 7.27a.5.5 0 00.86.4L20 10.81a.5.5 0 00-.39-.81H13l1.27-7.27a.5.5 0 00-.86-.4z" />,
    tittel: 'Elbillader',
    tekst: 'Monterer Zaptec, Easee og Defa. Inkluderer kabling, vern og dokumentasjon. Klart til bruk samme dag i de fleste tilfeller.',
    fra: 'Fra kr 12 490',
  },
  {
    id: 'service',
    icon: <><path d="M14.7 6.3a4.5 4.5 0 015.7 5.7l-1.9 1.9-3.8-3.8 1.9-1.9z" /><path d="M14.6 10.2L4 20.8l-1.4-1.4L13.2 8.8" /><path d="M16 4.5l3.5 3.5" /></>,
    tittel: 'Serviceoppdrag',
    tekst: 'Sikringer, stikkontakter, jordfeilbrytere og alt som bare må fikses. Vi kommer, finner feilen og ordner det.',
    fra: 'Fra kr 1 200 / time',
  },
  {
    id: 'smarthus',
    icon: <><rect x="7" y="2" width="10" height="20" rx="2" /><line x1="12" y1="18" x2="12" y2="18.01" /><path d="M9.5 6h5" /></>,
    tittel: 'Smarthus',
    tekst: 'Lys, dimmere og styring som faktisk er enkelt å bruke. Vi hjelper deg med smarte løsninger uten unødvendig kompleksitet.',
    fra: 'Pris etter befaring',
  },
  {
    id: 'renovering',
    icon: <><path d="M3 11.5L12 4l9 7.5" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></>,
    tittel: 'Renovering',
    tekst: 'Nytt kjøkken, bad, tilbygg eller totalrenovering. Vi samarbeider med de andre fagene og holder ting ryddig underveis.',
    fra: 'Pris etter befaring',
  },
  {
    id: 'feilsoking',
    icon: <><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.5" y2="16.5" /></>,
    tittel: 'Feilsøking',
    tekst: 'Noe som lukter brent? Kurser som slår ut? Vi finner problemet og forklarer hva som må gjøres — før vi starter.',
    fra: 'Fra kr 1 200 / time',
  },
  {
    id: 'naering',
    icon: <><rect x="3" y="7" width="18" height="14" rx="1" /><path d="M8 7V5a1 1 0 011-1h6a1 1 0 011 1v2" /><line x1="3" y1="13" x2="21" y2="13" /></>,
    tittel: 'Næringsbygg',
    tekst: 'For sameier, butikker, kontorer og entreprenører. Fast kontaktperson, tydelig kommunikasjon, alltid dokumentert.',
    fra: 'Pris etter befaring',
  },
]

export default function TjenesterPage() {
  return (
    <div className="subpage">
      <SiteHeader />
      <div className="subpage-pt">

        <section className="subpage-hero">
          <div className="wrap">
            <div className="eyebrow">Tjenester</div>
            <h1>Hva kan vi hjelpe deg med?</h1>
            <p>Elbillader, renovering, sikringsskap, feilsøking, smarthus og næringsbygg. Ryddig utført, dokumentert og med tydelig pris.</p>
          </div>
        </section>

        <section style={{ padding: '80px 0', background: 'var(--bg)' }}>
          <div className="wrap">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
              {TJENESTER.map((t) => (
                <div key={t.id} id={t.id} style={{ background: 'white', borderRadius: 12, padding: '32px 28px', border: '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ width: 44, height: 44, background: 'var(--bg-warm)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" width={22} height={22} aria-hidden="true">
                      {t.icon}
                    </svg>
                  </div>
                  <h2 style={{ fontSize: 20, fontWeight: 700 }}>{t.tittel}</h2>
                  <p style={{ color: 'var(--text-soft)', lineHeight: 1.6, flex: 1 }}>{t.tekst}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
                    <span style={{ fontWeight: 600, color: 'var(--red)', fontSize: 15 }}>{t.fra}</span>
                    <a href="/befaring" className="btn btn-red" style={{ padding: '10px 18px', fontSize: 14 }}>Få tilbud <span className="arr">→</span></a>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 64, background: 'var(--bg-dark)', borderRadius: 16, padding: '48px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
              <div>
                <div className="eyebrow" style={{ color: 'var(--red)' }}>Gratis og uforpliktende</div>
                <h2 style={{ color: 'white', marginTop: 12, fontSize: 'clamp(24px, 3vw, 36px)' }}>Usikker på hva du trenger?</h2>
                <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: 8 }}>Book en gratis befaring — vi vurderer jobben og gir deg konkret pris.</p>
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <BefaringCTA label="Book gratis befaring" className="btn btn-red" />
                <a href="tel:90633118" className="btn btn-ghost" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>Ring 90 63 31 18</a>
              </div>
            </div>
          </div>
        </section>

      </div>
      <SiteFooter />
    </div>
  )
}
