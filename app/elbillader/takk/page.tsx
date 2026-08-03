'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { trackEvent } from '@/lib/analytics'

const TELEFON = '90 63 31 18'
const TELEFON_HREF = 'tel:+4790633118'

export default function ElbilladerTakkPage() {
  useEffect(() => {
    trackEvent('lead_skjema', { service: 'elbillader' })
    if (typeof window !== 'undefined' && typeof (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq === 'function') {
      ;(window as unknown as { fbq: (...args: unknown[]) => void }).fbq('track', 'Lead')
    }
  }, [])

  return (
    <div className="takk-page">
      <header className="takk-header">
        <Link href="/">
          <Image src="/logo.svg" alt="VBM Elektro" width={120} height={48} />
        </Link>
      </header>

      <div className="takk-body">
        <div className="takk-box">
          <div className="takk-icon">
            <svg viewBox="0 0 177 352" fill="currentColor">
              <polygon points="148.63,0.48 103.24,139.95 177.14,139.95 27.66,351.9 72.66,194.79 0,194.79 36.62,0.48" />
            </svg>
          </div>

          <h1>Takk. Vi ringer deg i dag.</h1>
          <div className="takk-line" />
          <p>
            Du skal ha fått en SMS som bekreftelse. Kommer den ikke, har vi kanskje fått feil
            nummer — ring oss på{' '}
            <a href={TELEFON_HREF} style={{ color: 'inherit', fontWeight: 700 }}>{TELEFON}</a>.
          </p>

          <div className="takk-checks">
            {[
              'Vi ringer og stiller noen spørsmål om boligen og sikringsskapet',
              'Deretter får du en skriftlig pris. Den prisen gjelder.',
              'Samsvarserklæring legges i Boligmappa etter jobben',
            ].map((t) => (
              <div key={t} className="takk-check">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                {t}
              </div>
            ))}
          </div>

          <div style={{ marginTop: 24, padding: '20px 24px', background: '#F7F6F3', borderRadius: 12, textAlign: 'left', fontSize: 14, lineHeight: 1.6, color: '#5A5A57' }}>
            <strong style={{ color: '#1A1A1A', display: 'block', marginBottom: 8 }}>Vil du forberede deg?</strong>
            Ta gjerne et bilde av sikringsskapet innvendig, og et av stedet laderen skal stå. Da går samtalen fortere og prisen blir mer treffsikker.
          </div>

          <Link href="/" className="takk-back">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" />
            </svg>
            Tilbake til forsiden
          </Link>
        </div>
      </div>
    </div>
  )
}
