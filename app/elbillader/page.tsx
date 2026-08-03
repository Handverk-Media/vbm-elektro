'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {
  User, Phone, CheckCircle, CaretRight, Question,
  PhoneCall, FileText, Wrench, ClipboardText, Certificate, ShieldCheck,
} from '@phosphor-icons/react'
import { getUtmParams } from '@/lib/utm'
import { getStoredGclid } from '@/hooks/useGclid'
import { trackEvent, trackPhoneClick } from '@/lib/analytics'

const TELEFON = '90 63 31 18'
const TELEFON_HREF = 'tel:+4790633118'

function PhoneCTA({ location, children, style, className }: { location: string; children: React.ReactNode; style?: React.CSSProperties; className?: string }) {
  return (
    <a href={TELEFON_HREF} style={style} className={className} onClick={() => trackPhoneClick(location)}>
      {children}
    </a>
  )
}

interface LeadFormProps {
  formId: string
  compact?: boolean
}

function LeadForm({ formId, compact }: LeadFormProps) {
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
    <form onSubmit={handleSubmit} className={compact ? 'lp2-form lp2-form-compact' : 'lp2-form'}>
      <div className="lp2-field">
        <User size={18} weight="bold" className="lp2-field-icon" />
        <input id={`${formId}-navn`} name="navn" type="text" required placeholder="Ola Hansen" autoComplete="name" aria-label="Navn" />
      </div>
      <div className="lp2-field">
        <Phone size={18} weight="bold" className="lp2-field-icon" />
        <input id={`${formId}-telefon`} name="telefon" type="tel" required placeholder="400 00 000" autoComplete="tel" aria-label="Telefon" />
      </div>

      {feil && <p className="lp2-form-error">{feil}</p>}

      <button type="submit" disabled={laster} className="lp2-btn-primary">
        {laster ? 'Sender...' : 'Få pris'}
      </button>

      {!compact && (
        <p className="lp2-form-fine">
          Vi ringer for å avklare hva du trenger. Vi selger ikke opplysningene dine videre.
        </p>
      )}

      <p className="lp2-form-call">
        Vil du heller ringe? <PhoneCTA location={`elbillader-lp2-${formId}`} className="lp2-form-call-link">{TELEFON}</PhoneCTA>
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
          <Image src="/logo-white.svg" alt="VBM Elektro" width={124} height={50} className="lp2-logo" priority />
          <PhoneCTA location="elbillader-lp2-header" className="lp2-header-phone">
            <Phone size={16} weight="fill" />{TELEFON}
          </PhoneCTA>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="lp2-hero">
        <div className="lp2-wrap lp2-hero-grid">
          <div className="lp2-hero-copy">
            <h1>
              Få fast pris på elbillader.<br />
              <span className="lp2-hero-accent">Vi ringer deg i dag.</span>
            </h1>
            <p className="lp2-hero-sub">
              Ferdig montert fra 14 900 kr i Asker, Bærum, Oslo og Drammen. Du får skriftlig pris før vi starter, og den prisen gjelder.
            </p>
            <ul className="lp2-hero-points">
              <li><CheckCircle size={20} weight="fill" className="lp2-check" />Fast pris før vi starter</li>
              <li><CheckCircle size={20} weight="fill" className="lp2-check" />Befaring innen 3 dager</li>
              <li><CheckCircle size={20} weight="fill" className="lp2-check" />Inntil 10 000 kr fra Enova</li>
            </ul>
          </div>

          <div className="lp2-hero-visual">
            <Image
              src="/elbillader-hero.jpg"
              alt=""
              fill
              priority
              sizes="(max-width: 980px) 0px, 55vw"
              className="lp2-hero-image"
              aria-hidden="true"
            />
            <div className="lp2-hero-visual-scrim" />

            <div id="skjema" className="lp2-card lp2-hero-card">
              <p className="lp2-card-title">Få pris på elbillader</p>
              <p className="lp2-card-sub">Vi ringer deg i dag. Ingen forpliktelser.</p>
              <LeadForm formId="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Tillit ─────────────────────────────────────────── */}
      <section className="lp2-trustbar">
        <div className="lp2-wrap lp2-trust-row">
          <div className="lp2-trust-item">
            <Certificate size={26} weight="light" />
            <span>Medlem NELFO</span>
          </div>
          <div className="lp2-trust-item">
            <FileText size={26} weight="light" />
            <span>Registrert i Elvirksomhetsregisteret</span>
          </div>
          <div className="lp2-trust-item">
            <ShieldCheck size={26} weight="light" />
            <span>Trygghet i alle ledd</span>
          </div>
        </div>
      </section>

      {/* ── Slik går det videre ────────────────────────────── */}
      <section className="lp2-section">
        <div className="lp2-wrap">
          <h2 className="lp2-h2">Slik går det videre</h2>
          <div className="lp2-steps">
            {[
              { Icon: PhoneCall, tittel: '1. Vi ringer deg i dag', tekst: 'Ofte holder det med et par bilder på SMS.' },
              { Icon: FileText, tittel: '2. Du får skriftlig pris', tekst: 'Alt spesifisert. Ingen «ca.»' },
              { Icon: Wrench, tittel: '3. Vi monterer', tekst: 'De fleste jobber tar tre til fem timer.' },
              { Icon: ClipboardText, tittel: '4. Papirene kommer', tekst: 'Samsvarserklæringen ligger i Boligmappa før vi drar.' },
            ].map((s, i, arr) => (
              <div className="lp2-step-wrap" key={s.tittel}>
                <div className="lp2-step">
                  <div className="lp2-step-icon"><s.Icon size={26} weight="bold" /></div>
                  <p className="lp2-step-title">{s.tittel}</p>
                  <p className="lp2-step-text">{s.tekst}</p>
                </div>
                {i < arr.length - 1 && <CaretRight size={18} weight="bold" className="lp2-step-caret" />}
              </div>
            ))}
          </div>
          <div className="lp2-cta-row">
            <a href="#skjema" className="lp2-btn-primary lp2-btn-inline">Få pris</a>
          </div>
        </div>
      </section>

      {/* ── Prisen holder ──────────────────────────────────── */}
      <section className="lp2-section lp2-section-tint">
        <div className="lp2-wrap lp2-price-grid">
          <div>
            <h2 className="lp2-h2">Prisen holder</h2>
            <p className="lp2-body-text">
              De fleste får en pris på telefon og en annen på fakturaen. Hos oss står prisen i tilbudet du får skriftlig.
              Finner vi noe uventet bak veggen, ringer vi deg først, du får en ny pris å ta stilling til, og du kan si nei.
              Du får aldri en regning som er høyere enn det du har sagt ja til.
            </p>
            <div className="lp2-cta-row lp2-cta-row-left">
              <a href="#skjema" className="lp2-btn-primary lp2-btn-inline">Få pris</a>
            </div>
          </div>
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
        </div>
      </section>

      {/* ── Tre spørsmål ───────────────────────────────────── */}
      <section className="lp2-section">
        <div className="lp2-wrap lp2-wrap-narrow">
          <h2 className="lp2-h2">Tre spørsmål</h2>
          <div className="lp2-faq-card">
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
                <summary>
                  <span className="lp2-faq-q"><Question size={16} weight="bold" />{sp}</span>
                  <CaretRight size={16} weight="bold" className="lp2-faq-chevron" />
                </summary>
                <p>{sv}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Avslutning ─────────────────────────────────────── */}
      <section className="lp2-closing">
        <div className="lp2-wrap lp2-closing-row">
          <div>
            <h2 className="lp2-h2 lp2-h2-tight">Få prisen før du bestemmer deg</h2>
            <p className="lp2-body-text lp2-body-text-tight">
              Det koster ingenting å spørre, og du får et konkret tall å forholde deg til.
            </p>
          </div>
          <LeadForm formId="bunn" compact />
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="lp2-footer">
        <div className="lp2-wrap lp2-footer-top">
          <div className="lp2-footer-brand">
            <Image src="/logo-white.svg" alt="VBM Elektro" width={124} height={50} className="lp2-logo" />
            <p>Autorisert elektriker i Asker, Bærum, Oslo og Drammen.</p>
          </div>

          <div className="lp2-footer-col">
            <p className="lp2-footer-heading">Kontakt</p>
            <PhoneCTA location="elbillader-lp2-footer" className="lp2-footer-phone">
              <Phone size={15} weight="fill" />{TELEFON}
            </PhoneCTA>
            <p>Billingstadletta 22, 1396 Billingstad</p>
          </div>

          <div className="lp2-footer-col">
            <p className="lp2-footer-heading">Godkjenninger</p>
            <span className="lp2-footer-badge"><Certificate size={16} weight="bold" />Medlem NELFO</span>
            <span className="lp2-footer-badge"><ShieldCheck size={16} weight="bold" />Elvirksomhetsregisteret</span>
          </div>
        </div>

        <div className="lp2-wrap lp2-footer-bottom">
          <span>VBM Elektro AS · Org.nr 935 452 856</span>
          <a href="/personvern" className="lp2-footer-link">Personvern</a>
        </div>
      </footer>

      <style>{`
        .lp2-page {
          --lp-text: #111111;
          --lp-body: #63635F;
          --lp-line: #E5E5E5;
          --lp-red: #E31E25;
          --lp-red-dark: #C81920;
          --lp-red-soft: rgba(227,30,37,0.09);
          --lp-dark: #121317;
          --lp-radius: 16px;
          --lp-radius-sm: 10px;
          color: var(--lp-text);
          background: #FFFFFF;
        }
        .lp2-page * { box-sizing: border-box; }
        .lp2-wrap { max-width: 1120px; margin: 0 auto; padding: 0 24px; }
        .lp2-wrap-narrow { max-width: 680px; }

        /* Header */
        .lp2-header { position: sticky; top: 0; z-index: 50; background: var(--lp-dark); }
        .lp2-header-inner {
          max-width: 1120px; margin: 0 auto; padding: 16px 24px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .lp2-logo { height: 30px; width: auto; }
        .lp2-header-phone {
          display: flex; align-items: center; gap: 8px;
          color: #fff; font-weight: 700; font-size: 15px; text-decoration: none;
        }

        /* Hero */
        .lp2-hero { background: var(--lp-dark); padding-bottom: 0; }
        .lp2-hero-grid { display: grid; grid-template-columns: 1fr 1.15fr; align-items: stretch; gap: 0; }
        .lp2-hero-copy { padding: 48px 32px 56px 0; display: flex; flex-direction: column; justify-content: center; }
        .lp2-hero-copy h1 { font-size: clamp(30px, 3.6vw, 46px); font-weight: 800; line-height: 1.12; letter-spacing: -0.02em; color: #fff; margin: 0 0 18px; }
        .lp2-hero-accent { color: var(--lp-red); }
        .lp2-hero-sub { font-size: 16px; line-height: 1.6; color: rgba(255,255,255,0.68); margin: 0 0 26px; max-width: 46ch; }
        .lp2-hero-points { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }
        .lp2-hero-points li { display: flex; align-items: center; gap: 10px; font-size: 15px; font-weight: 500; color: rgba(255,255,255,0.9); }
        .lp2-check { color: var(--lp-red); flex-shrink: 0; }

        .lp2-hero-visual { position: relative; min-height: 560px; display: flex; align-items: center; justify-content: flex-end; padding: 40px; overflow: hidden; }
        .lp2-hero-image { object-fit: cover; }
        .lp2-hero-visual-scrim { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(18,19,23,0.55) 0%, rgba(18,19,23,0.05) 45%); }

        /* Card / Form */
        .lp2-card { position: relative; z-index: 1; background: #FFFFFF; border-radius: var(--lp-radius); padding: 30px 28px; box-shadow: 0 24px 60px rgba(0,0,0,0.28); width: 100%; max-width: 380px; }
        .lp2-card-title { font-size: 20px; font-weight: 800; letter-spacing: -0.01em; margin: 0 0 4px; }
        .lp2-card-sub { font-size: 13.5px; color: var(--lp-body); margin: 0 0 22px; }
        .lp2-form { display: flex; flex-direction: column; gap: 12px; }
        .lp2-field { position: relative; display: flex; align-items: center; }
        .lp2-field-icon { position: absolute; left: 14px; color: #9A9A9A; pointer-events: none; }
        .lp2-field input {
          width: 100%; font-family: inherit; font-size: 15px; padding: 13px 14px 13px 40px;
          border: 1px solid var(--lp-line); border-radius: var(--lp-radius-sm); background: #FFFFFF; color: var(--lp-text);
        }
        .lp2-field input::placeholder { color: #9A9A9A; }
        .lp2-field input:focus { outline: none; border-color: var(--lp-text); }
        .lp2-btn-primary {
          display: flex; align-items: center; justify-content: center;
          width: 100%; background: var(--lp-red); color: #FFFFFF; font-weight: 700; font-size: 15px;
          padding: 14px; border: none; border-radius: var(--lp-radius-sm); cursor: pointer; text-decoration: none;
        }
        .lp2-btn-primary:hover { background: var(--lp-red-dark); }
        .lp2-btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
        .lp2-btn-inline { width: auto; padding: 13px 32px; }
        .lp2-form-error { font-size: 13px; color: var(--lp-red); margin: 0; }
        .lp2-form-fine { font-size: 12px; line-height: 1.5; color: var(--lp-body); text-align: center; margin: 2px 0 0; }
        .lp2-form-call { font-size: 13px; color: var(--lp-body); text-align: center; margin: 4px 0 0; }
        .lp2-form-call-link { color: var(--lp-red); font-weight: 700; text-decoration: none; }
        .lp2-cta-row { display: flex; justify-content: center; margin-top: 36px; }
        .lp2-cta-row-left { justify-content: flex-start; margin-top: 28px; }

        /* Trust bar */
        .lp2-trustbar { background: #F7F6F4; border-bottom: 1px solid var(--lp-line); }
        .lp2-trust-row { display: flex; align-items: center; justify-content: center; gap: 0; padding: 28px 24px; flex-wrap: wrap; }
        .lp2-trust-item { display: flex; align-items: center; gap: 12px; padding: 8px 36px; color: var(--lp-text); }
        .lp2-trust-item:not(:first-child) { border-left: 1px solid var(--lp-line); }
        .lp2-trust-item svg { color: var(--lp-red); flex-shrink: 0; }
        .lp2-trust-item span { font-size: 14px; font-weight: 600; line-height: 1.3; max-width: 16ch; }

        /* Sections */
        .lp2-section { padding: 88px 0; }
        .lp2-section-tint { background: #FAFAFA; }
        .lp2-h2 { font-size: clamp(26px, 3vw, 34px); font-weight: 800; letter-spacing: -0.02em; margin: 0 0 28px; }
        .lp2-h2-tight { margin-bottom: 12px; }
        .lp2-body-text { font-size: 16px; line-height: 1.65; color: var(--lp-body); margin: 0 0 0; max-width: 56ch; }
        .lp2-body-text-tight { margin-bottom: 0; }

        /* Steps */
        .lp2-steps { display: flex; align-items: flex-start; gap: 4px; }
        .lp2-step-wrap { display: flex; align-items: flex-start; flex: 1; min-width: 0; }
        .lp2-step { flex: 1; min-width: 0; }
        .lp2-step-icon {
          width: 52px; height: 52px; border-radius: 50%; background: var(--lp-red-soft); color: var(--lp-red);
          display: flex; align-items: center; justify-content: center; margin-bottom: 16px;
        }
        .lp2-step-title { font-size: 15.5px; font-weight: 700; margin: 0 0 6px; }
        .lp2-step-text { font-size: 13.5px; line-height: 1.5; color: var(--lp-body); margin: 0; }
        .lp2-step-caret { color: #C9C9C6; flex-shrink: 0; margin: 16px 12px 0; }

        /* Price */
        .lp2-price-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
        .lp2-stats { display: flex; flex-direction: column; gap: 0; }
        .lp2-stat { display: flex; justify-content: space-between; align-items: baseline; gap: 16px; padding: 18px 0; border-bottom: 1px solid var(--lp-line); }
        .lp2-stat-nr { font-size: 24px; font-weight: 800; letter-spacing: -0.02em; color: var(--lp-red); white-space: nowrap; }
        .lp2-stat-label { font-size: 14px; color: var(--lp-text); font-weight: 500; }

        /* FAQ */
        .lp2-faq-card { border: 1px solid var(--lp-line); border-radius: var(--lp-radius); overflow: hidden; background: #fff; }
        .lp2-faq { border-bottom: 1px solid var(--lp-line); padding: 18px 20px; }
        .lp2-faq:last-child { border-bottom: none; }
        .lp2-faq summary { display: flex; align-items: center; justify-content: space-between; gap: 16px; cursor: pointer; list-style: none; }
        .lp2-faq summary::-webkit-details-marker { display: none; }
        .lp2-faq-q { display: flex; align-items: center; gap: 10px; font-size: 15px; font-weight: 700; }
        .lp2-faq-q svg { color: var(--lp-red); flex-shrink: 0; background: var(--lp-red-soft); border-radius: 50%; padding: 3px; width: 22px; height: 22px; box-sizing: border-box; }
        .lp2-faq-chevron { color: #B5B5B2; flex-shrink: 0; transition: transform 0.2s; }
        .lp2-faq[open] .lp2-faq-chevron { transform: rotate(90deg); }
        .lp2-faq p { font-size: 14px; line-height: 1.6; color: var(--lp-body); margin: 12px 0 0 32px; }

        /* Closing */
        .lp2-closing { background: var(--lp-dark); padding: 64px 0; }
        .lp2-closing .lp2-h2, .lp2-closing .lp2-body-text { color: #fff; }
        .lp2-closing .lp2-body-text { color: rgba(255,255,255,0.65); }
        .lp2-closing-row { display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 48px; }
        .lp2-form-compact { flex-direction: row; flex-wrap: wrap; align-items: center; gap: 12px; }
        .lp2-form-compact .lp2-field { width: 220px; }
        .lp2-form-compact .lp2-btn-primary { width: auto; padding: 13px 28px; }
        .lp2-form-compact .lp2-form-call { width: 100%; text-align: left; margin-top: 8px; }
        .lp2-form-compact .lp2-form-call, .lp2-form-compact .lp2-form-call-link { color: rgba(255,255,255,0.6); }
        .lp2-form-compact .lp2-form-call-link { color: var(--lp-red); }
        .lp2-form-compact .lp2-form-error { width: 100%; }

        /* Footer */
        .lp2-footer { background: var(--lp-dark); border-top: 1px solid rgba(255,255,255,0.08); }
        .lp2-footer-top { display: grid; grid-template-columns: 1.4fr 1fr 1fr; gap: 40px; padding: 56px 0 40px; }
        .lp2-footer-brand { display: flex; flex-direction: column; gap: 14px; }
        .lp2-footer-brand p { font-size: 14px; line-height: 1.5; color: rgba(255,255,255,0.55); max-width: 32ch; }
        .lp2-footer-heading { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: rgba(255,255,255,0.4); margin: 0 0 4px; }
        .lp2-footer-col { display: flex; flex-direction: column; gap: 10px; }
        .lp2-footer-col p { font-size: 14px; color: rgba(255,255,255,0.6); margin: 0; }
        .lp2-footer-phone { display: flex; align-items: center; gap: 8px; color: #fff; font-weight: 700; font-size: 15px; text-decoration: none; }
        .lp2-footer-phone svg { color: var(--lp-red); }
        .lp2-footer-badge { display: flex; align-items: center; gap: 8px; font-size: 13.5px; color: rgba(255,255,255,0.75); }
        .lp2-footer-badge svg { color: var(--lp-red); flex-shrink: 0; }
        .lp2-footer-bottom {
          display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;
          padding: 20px 0; border-top: 1px solid rgba(255,255,255,0.08);
        }
        .lp2-footer-bottom span { font-size: 12.5px; color: rgba(255,255,255,0.4); }
        .lp2-footer-link { font-size: 12.5px; color: rgba(255,255,255,0.55); text-decoration: underline; }

        @media (max-width: 980px) {
          .lp2-hero-grid { grid-template-columns: 1fr; }
          .lp2-hero-visual { min-height: 0; padding: 0; justify-content: stretch; }
          .lp2-hero-image, .lp2-hero-visual-scrim { display: none; }
          .lp2-hero-copy { padding: 28px 0 0; }
          #skjema.lp2-card { max-width: 100%; box-shadow: none; border: 1px solid var(--lp-line); margin-top: 28px; }
          .lp2-price-grid { grid-template-columns: 1fr; gap: 32px; }
          .lp2-closing-row { grid-template-columns: 1fr; gap: 28px; }
          .lp2-form-compact .lp2-field { width: 100%; }
        }
        @media (max-width: 760px) {
          .lp2-steps { flex-direction: column; gap: 24px; }
          .lp2-step-wrap { flex-direction: column; }
          .lp2-step-caret { display: none; }
        }
        @media (max-width: 640px) {
          .lp2-header-inner { padding: 10px 16px; }
          .lp2-logo { height: 26px; }
          .lp2-hero { padding-bottom: 24px; }
          .lp2-hero-copy { padding: 20px 0 0; }
          .lp2-hero-copy h1 { font-size: 24px; margin-bottom: 10px; }
          .lp2-hero-sub { font-size: 13.5px; line-height: 1.45; margin-bottom: 16px; }
          .lp2-wrap { padding: 0 16px; }
          .lp2-card { padding: 18px 16px 20px; margin-top: 20px !important; }
          .lp2-card-title { font-size: 17px; }
          .lp2-h2 { font-size: 22px; margin-bottom: 18px; }
          .lp2-section { padding: 48px 0; }
          .lp2-trust-row { padding: 20px 16px; justify-content: flex-start; gap: 20px 0; }
          .lp2-trust-item { padding: 4px 18px 4px 0; border-left: none !important; }
          .lp2-trust-item span { max-width: none; }
          .lp2-closing { padding: 40px 0; }
          .lp2-footer-top { grid-template-columns: 1fr; gap: 28px; padding: 40px 0 28px; }
          .lp2-footer-bottom { padding: 16px 0 24px; }
        }
      `}</style>
    </div>
  )
}
