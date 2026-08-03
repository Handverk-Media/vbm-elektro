'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { getUtmParams } from '@/lib/utm'
import { getStoredGclid } from '@/hooks/useGclid'
import { trackEvent, trackPhoneClick } from '@/lib/analytics'

const TELEFON = '90 63 31 18'
const TELEFON_HREF = 'tel:+4790633118'

function PhoneCTA({ location, children, style }: { location: string; children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <a href={TELEFON_HREF} style={style} onClick={() => trackPhoneClick(location)}>
      {children}
    </a>
  )
}

function CheckMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M4 10.5l3.5 3.5L16 6" stroke="#111111" strokeWidth="1.75" strokeLinecap="square" />
    </svg>
  )
}

interface LeadFormProps {
  formId: string
}

function LeadForm({ formId }: LeadFormProps) {
  const router = useRouter()
  const [laster, setLaster] = useState(false)
  const [feil, setFeil] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLaster(true)
    setFeil('')

    const fd = new FormData(e.currentTarget)
    const utms = getUtmParams()
    const gclid = getStoredGclid()

    const payload = {
      navn: fd.get('navn'),
      telefon: fd.get('telefon'),
      landingsside: '/elbillader',
      gclid,
      ...utms,
    }

    try {
      const res = await fetch('/api/elbillader-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Nettverksfeil')
      trackEvent('lead_skjema', { form_id: formId, service: 'elbillader' })
      router.push('/elbillader/takk')
    } catch {
      setFeil(`Noe gikk galt. Ring oss på ${TELEFON} så hjelper vi deg.`)
      setLaster(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="lp2-form">
      <div className="lp2-field">
        <label htmlFor={`${formId}-navn`}>Navn</label>
        <input id={`${formId}-navn`} name="navn" type="text" required placeholder="Ola Hansen" autoComplete="name" />
      </div>
      <div className="lp2-field">
        <label htmlFor={`${formId}-telefon`}>Telefon</label>
        <input id={`${formId}-telefon`} name="telefon" type="tel" required placeholder="400 00 000" autoComplete="tel" />
      </div>

      {feil && <p className="lp2-form-error">{feil}</p>}

      <button type="submit" disabled={laster} className="lp2-btn-primary">
        {laster ? 'Sender...' : 'Få pris'}
      </button>

      <p className="lp2-form-fine">
        Vi ringer for å avklare hva du trenger. Vi selger ikke opplysningene dine videre.
      </p>

      <p className="lp2-form-call">
        Vil du heller ringe? <PhoneCTA location={`elbillader-lp2-${formId}`} style={{ color: '#111111', fontWeight: 600 }}>{TELEFON}</PhoneCTA>
      </p>
    </form>
  )
}

export default function ElbilladerKampanje() {
  return (
    <div className="lp2-page">
      {/* ── Header ─────────────────────────────────────────── */}
      <header className="lp2-header">
        <div className="lp2-header-inner">
          <Image src="/logo.svg" alt="VBM Elektro" width={124} height={50} className="lp2-logo" priority />
          <PhoneCTA location="elbillader-lp2-header" style={{ color: '#111111', fontWeight: 700, fontSize: 15 }}>{TELEFON}</PhoneCTA>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="lp2-hero">
        <div className="lp2-wrap lp2-hero-grid">
          <div className="lp2-hero-copy">
            <h1>Få fast pris på elbillader. Vi ringer deg i dag.</h1>
            <p className="lp2-hero-sub">
              Ferdig montert fra 14 900 kr i Asker, Bærum, Oslo og Drammen. Du får skriftlig pris før vi starter, og den prisen gjelder.
            </p>
            <ul className="lp2-hero-points">
              <li><CheckMark />Fast pris før vi starter</li>
              <li><CheckMark />Befaring innen 3 dager</li>
              <li><CheckMark />Inntil 10 000 kr fra Enova</li>
            </ul>
          </div>

          <div id="skjema" className="lp2-card lp2-hero-card">
            <p className="lp2-card-title">Få pris på elbillader</p>
            <p className="lp2-card-sub">Vi ringer deg i dag. Ingen forpliktelser.</p>
            <LeadForm formId="hero" />
          </div>
        </div>
      </section>

      {/* ── 1 · Bildebevis ─────────────────────────────────── */}
      <section className="lp2-section">
        <div className="lp2-wrap lp2-wrap-narrow">
          <div className="lp2-photo-frame" role="img" aria-label="Bilde av ferdig montert elbillader mangler enda">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="2" y="6" width="20" height="14" stroke="#6B6B6B" strokeWidth="1.5" />
              <circle cx="12" cy="13" r="4" stroke="#6B6B6B" strokeWidth="1.5" />
              <path d="M8 6l1.5-2.5h5L16 6" stroke="#6B6B6B" strokeWidth="1.5" />
            </svg>
            <span>Bilde av ferdig montert lader legges inn her</span>
          </div>
          <p className="lp2-caption">Zaptec Go montert i Bærum, mars 2026</p>
        </div>
      </section>

      {/* ── 2 · Slik går det videre ────────────────────────── */}
      <section className="lp2-section lp2-section-tint">
        <div className="lp2-wrap">
          <h2 className="lp2-h2">Slik går det videre</h2>
          <div className="lp2-steps">
            {[
              { nr: '1', tittel: 'Vi ringer deg i dag', tekst: 'Ofte holder det med et par bilder på SMS.' },
              { nr: '2', tittel: 'Du får skriftlig pris', tekst: 'Alt spesifisert. Ingen «ca.»' },
              { nr: '3', tittel: 'Vi monterer', tekst: 'De fleste jobber tar tre til fem timer.' },
              { nr: '4', tittel: 'Papirene kommer', tekst: 'Samsvarserklæringen ligger i Boligmappa før vi drar.' },
            ].map(s => (
              <div key={s.nr} className="lp2-step">
                <span className="lp2-step-nr">{s.nr}</span>
                <p className="lp2-step-title">{s.tittel}</p>
                <p className="lp2-step-text">{s.tekst}</p>
              </div>
            ))}
          </div>
          <div className="lp2-cta-row">
            <a href="#skjema" className="lp2-btn-primary lp2-btn-inline">Få pris</a>
          </div>
        </div>
      </section>

      {/* ── 3 · Prisen holder ──────────────────────────────── */}
      <section className="lp2-section">
        <div className="lp2-wrap lp2-wrap-narrow">
          <h2 className="lp2-h2">Prisen holder</h2>
          <p className="lp2-body-text">
            De fleste får en pris på telefon og en annen på fakturaen. Hos oss står prisen i tilbudet du får skriftlig.
            Finner vi noe uventet bak veggen, ringer vi deg først, du får en ny pris å ta stilling til, og du kan si nei.
            Du får aldri en regning som er høyere enn det du har sagt ja til.
          </p>
          <div className="lp2-stats">
            <div className="lp2-stat">
              <span className="lp2-stat-nr">14 900 kr</span>
              <span className="lp2-stat-label">Zaptec Go ferdig montert</span>
            </div>
            <div className="lp2-stat">
              <span className="lp2-stat-nr">-7 490 kr</span>
              <span className="lp2-stat-label">Enova-støtte med strømstyring</span>
            </div>
            <div className="lp2-stat">
              <span className="lp2-stat-nr">3 dager</span>
              <span className="lp2-stat-label">Befaring i Asker og Bærum</span>
            </div>
          </div>
          <div className="lp2-cta-row">
            <a href="#skjema" className="lp2-btn-primary lp2-btn-inline">Få pris</a>
          </div>
        </div>
      </section>

      {/* ── 4 · Tre spørsmål ───────────────────────────────── */}
      <section className="lp2-section lp2-section-tint">
        <div className="lp2-wrap lp2-wrap-narrow">
          <h2 className="lp2-h2">Tre spørsmål</h2>
          {[
            {
              sp: 'Koster det noe å få pris?',
              sv: 'Nei. Vi ringer, spør om boligen og gir deg et tall. Vil du ikke gå videre, er det greit.',
            },
            {
              sp: 'Hva skjer etter at jeg fyller ut?',
              sv: 'Vi ringer deg i dag, som regel innen et par timer. Ingen automatisk e-postserie, ingen mas.',
            },
            {
              sp: 'Har jeg nok strøm i sikringsskapet?',
              sv: 'De fleste har det. Vi ser på det ut fra bilder eller på befaring. Må skapet oppgraderes, får du prisen på det først.',
            },
          ].map(({ sp, sv }) => (
            <details key={sp} className="lp2-faq">
              <summary>{sp}</summary>
              <p>{sv}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── Avslutning ─────────────────────────────────────── */}
      <section className="lp2-section lp2-closing">
        <div className="lp2-wrap lp2-wrap-narrow">
          <h2 className="lp2-h2">Få prisen før du bestemmer deg</h2>
          <p className="lp2-body-text" style={{ marginBottom: 32 }}>
            Det koster ingenting å spørre, og du får et konkret tall å forholde deg til.
          </p>
          <div className="lp2-card lp2-closing-card">
            <p className="lp2-card-title">Få pris på elbillader</p>
            <p className="lp2-card-sub">Vi ringer deg i dag. Ingen forpliktelser.</p>
            <LeadForm formId="bunn" />
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="lp2-footer">
        <div className="lp2-wrap">
          <p className="lp2-footer-name">VBM Elektro AS</p>
          <div className="lp2-footer-meta">
            <span>Org.nr 935 452 856</span>
            <span>Registrert i Elvirksomhetsregisteret</span>
            <span>Medlem NELFO</span>
            <span>{TELEFON}</span>
          </div>
          <a href="/personvern" className="lp2-footer-link">Personvern</a>
        </div>
      </footer>

      <style>{`
        .lp2-page {
          --lp-text: #111111;
          --lp-body: #6B6B6B;
          --lp-line: #E5E5E5;
          --lp-red: #E31E25;
          --lp-red-dark: #C81920;
          color: var(--lp-text);
          background: #FFFFFF;
        }
        .lp2-page * { box-sizing: border-box; }
        .lp2-wrap { max-width: 1040px; margin: 0 auto; padding: 0 20px; }
        .lp2-wrap-narrow { max-width: 640px; }

        /* Header */
        .lp2-header {
          position: sticky; top: 0; z-index: 50;
          background: rgba(255,255,255,0.94);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--lp-line);
        }
        .lp2-header-inner {
          max-width: 1040px; margin: 0 auto; padding: 14px 20px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .lp2-logo { height: 34px; width: auto; }

        /* Hero */
        .lp2-hero { padding: 40px 0 56px; }
        .lp2-hero-grid { display: grid; grid-template-columns: 1fr 420px; gap: 56px; align-items: start; }
        .lp2-hero-copy h1 { font-size: clamp(32px, 4.4vw, 54px); font-weight: 800; line-height: 1.06; letter-spacing: -0.025em; margin: 0 0 18px; }
        .lp2-hero-sub { font-size: 17px; line-height: 1.55; color: var(--lp-body); margin: 0 0 28px; max-width: 46ch; }
        .lp2-hero-points { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }
        .lp2-hero-points li { display: flex; align-items: center; gap: 10px; font-size: 15px; font-weight: 600; color: var(--lp-text); }

        /* Card / Form */
        .lp2-card { background: #FFFFFF; border: 1px solid var(--lp-line); border-top: 2px solid var(--lp-text); border-radius: 0; padding: 28px 26px 28px; }
        .lp2-card-title { font-size: 20px; font-weight: 800; letter-spacing: -0.01em; margin: 0 0 4px; }
        .lp2-card-sub { font-size: 13.5px; color: var(--lp-body); margin: 0 0 22px; }
        .lp2-form { display: flex; flex-direction: column; gap: 14px; }
        .lp2-field { display: flex; flex-direction: column; gap: 6px; }
        .lp2-field label { font-size: 13px; font-weight: 600; color: var(--lp-text); }
        .lp2-field input {
          font-family: inherit; font-size: 15px; padding: 12px 14px;
          border: 1px solid var(--lp-line); border-radius: 0; background: #FFFFFF; color: var(--lp-text);
        }
        .lp2-field input::placeholder { color: #9A9A9A; }
        .lp2-field input:focus { outline: 2px solid var(--lp-text); outline-offset: 1px; }
        .lp2-btn-primary {
          display: flex; align-items: center; justify-content: center;
          width: 100%; background: var(--lp-red); color: #FFFFFF; font-weight: 700; font-size: 15px;
          padding: 14px; border: none; border-radius: 0; cursor: pointer; text-decoration: none;
        }
        .lp2-btn-primary:hover { background: var(--lp-red-dark); }
        .lp2-btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
        .lp2-btn-inline { width: auto; padding: 13px 32px; }
        .lp2-form-error { font-size: 13px; color: var(--lp-red); margin: 0; }
        .lp2-form-fine { font-size: 12px; line-height: 1.5; color: var(--lp-body); text-align: center; margin: 2px 0 0; }
        .lp2-form-call { font-size: 13px; color: var(--lp-body); text-align: center; margin: 4px 0 0; }
        .lp2-cta-row { display: flex; justify-content: center; margin-top: 32px; }

        /* Sections */
        .lp2-section { padding: 88px 0; }
        .lp2-section-tint { background: #FAFAFA; }
        .lp2-h2 { font-size: clamp(26px, 3vw, 34px); font-weight: 800; letter-spacing: -0.02em; margin: 0 0 28px; }
        .lp2-body-text { font-size: 16px; line-height: 1.65; color: var(--lp-body); margin: 0 0 36px; max-width: 62ch; }

        /* Photo proof */
        .lp2-photo-frame {
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px;
          aspect-ratio: 16 / 9; border: 1px solid var(--lp-line); background: #F4F4F4;
        }
        .lp2-photo-frame svg { opacity: 0.8; }
        .lp2-photo-frame span { font-size: 13px; font-weight: 500; color: var(--lp-body); letter-spacing: -0.005em; }
        .lp2-caption { font-size: 13.5px; color: var(--lp-body); margin: 14px 0 0; }

        /* Steps */
        .lp2-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
        .lp2-step { border-top: 2px solid var(--lp-text); padding-top: 18px; }
        .lp2-step-nr { display: block; font-size: 28px; font-weight: 800; letter-spacing: -0.02em; color: var(--lp-text); margin-bottom: 10px; }
        .lp2-step-title { font-size: 16px; font-weight: 700; margin: 0 0 6px; }
        .lp2-step-text { font-size: 13.5px; line-height: 1.5; color: var(--lp-body); margin: 0; }

        /* Stats */
        .lp2-stats { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 2px solid var(--lp-text); }
        .lp2-stat { display: flex; flex-direction: column; gap: 6px; padding: 24px 20px 24px 0; border-bottom: 1px solid var(--lp-line); }
        .lp2-stat:not(:first-child) { padding-left: 20px; border-left: 1px solid var(--lp-line); }
        .lp2-stat-nr { font-size: 30px; font-weight: 800; letter-spacing: -0.02em; }
        .lp2-stat-label { font-size: 13px; color: var(--lp-body); line-height: 1.4; }

        /* FAQ */
        .lp2-faq { border-bottom: 1px solid var(--lp-line); padding: 22px 0; }
        .lp2-faq summary { font-size: 16px; font-weight: 700; cursor: pointer; list-style: none; }
        .lp2-faq summary::-webkit-details-marker { display: none; }
        .lp2-faq p { font-size: 14.5px; line-height: 1.6; color: var(--lp-body); margin: 12px 0 0; }

        .lp2-closing { border-top: 1px solid var(--lp-line); }

        /* Footer */
        .lp2-footer { padding: 32px 0 40px; border-top: 1px solid var(--lp-line); }
        .lp2-footer-name { font-size: 14px; font-weight: 700; margin: 0 0 10px; }
        .lp2-footer-meta { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 14px; }
        .lp2-footer-meta span { font-size: 12.5px; color: var(--lp-body); padding-left: 12px; border-left: 1px solid var(--lp-line); }
        .lp2-footer-meta span:first-child { padding-left: 0; border-left: none; }
        .lp2-footer-link { font-size: 12.5px; color: var(--lp-body); text-decoration: underline; }

        @media (max-width: 860px) {
          .lp2-hero-grid { grid-template-columns: 1fr; gap: 20px; }
          .lp2-hero-copy { display: contents; }
          .lp2-hero-copy h1 { order: 1; }
          .lp2-hero-copy .lp2-hero-sub { order: 2; }
          #skjema.lp2-card { order: 3; }
          .lp2-hero-copy .lp2-hero-points { order: 4; }
          .lp2-steps { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 640px) {
          .lp2-hero { padding: 12px 0 28px; }
          .lp2-hero-copy h1 { font-size: 22px; margin-bottom: 8px; }
          .lp2-hero-sub { font-size: 13px; line-height: 1.45; margin-bottom: 12px; }
          .lp2-card { padding: 14px 14px 16px; }
          .lp2-card-title { font-size: 16px; margin-bottom: 2px; }
          .lp2-card-sub { font-size: 12px; margin-bottom: 12px; }
          .lp2-form { gap: 10px; }
          .lp2-field input { padding: 10px 12px; font-size: 14px; }
          .lp2-btn-primary { padding: 12px; }
          .lp2-form-fine { font-size: 11px; }
          .lp2-steps { grid-template-columns: 1fr; gap: 24px; }
          .lp2-stats { grid-template-columns: 1fr; }
          .lp2-stat:not(:first-child) { padding-left: 0; border-left: none; }
          .lp2-h2 { font-size: 24px; margin-bottom: 20px; }
          .lp2-section { padding: 56px 0; }
          .lp2-header-inner { padding: 10px 16px; }
          .lp2-logo { height: 28px; }
        }
      `}</style>
    </div>
  )
}
