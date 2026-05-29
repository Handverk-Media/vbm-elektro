import type { Metadata } from 'next'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { PricingSection } from '@/components/PricingSection'
import { BefaringCTA } from '@/components/BefaringCTA'

export const metadata: Metadata = {
  title: 'Priser – VBM Elektro AS',
  description: 'Tydelige priser på elbillader, sikringsskap, belysning og service. Ingen skjulte tillegg. Fastpris før oppstart.',
  alternates: { canonical: 'https://vbmelektro.no/priser' },
}

export default function PriserPage() {
  return (
    <div className="subpage">
      <SiteHeader />
      <div className="subpage-pt">

        <section className="subpage-hero">
          <div className="wrap">
            <div className="eyebrow">Priser</div>
            <h1>Tydelig pris — ingen overraskelser</h1>
            <p>Her ser du faste priser på de vanligste jobbene. Befaring eller videovurdering bekrefter endelig pris før vi starter. Tillegg avklares alltid med deg først.</p>
          </div>
        </section>

        <PricingSection />

        <section style={{ padding: '0 0 80px' }}>
          <div className="wrap">
            <div style={{ background: 'var(--bg-dark)', borderRadius: 16, padding: '48px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
              <div>
                <div className="eyebrow" style={{ color: 'var(--red)' }}>Gratis og uforpliktende</div>
                <h2 style={{ color: 'white', marginTop: 12, fontSize: 'clamp(24px, 3vw, 36px)' }}>Trenger du eksakt pris?</h2>
                <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: 8 }}>Book gratis befaring — vi gir deg skriftlig fastpris innen 24 timer.</p>
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
