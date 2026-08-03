'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { PhoneLink } from '@/components/PhoneLink'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { getUtmParams } from '@/lib/utm'
import { getStoredGclid } from '@/hooks/useGclid'
import { trackEvent } from '@/lib/analytics'

const TELEFON = '90 63 31 18'
const TELEFON_HREF = 'tel:+4790633118'

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="var(--red)" aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" />
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
  const formRef = useRef<HTMLFormElement>(null)

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
      epost: fd.get('epost'),
      kommune: fd.get('kommune'),
      hvaGjelder: fd.get('hvaGjelder'),
      boligInfo: fd.get('boligInfo'),
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
      setFeil('Noe gikk galt. Ring oss på ' + TELEFON + ' så hjelper vi deg.')
      setLaster(false)
    }
  }

  const selectStyle: React.CSSProperties = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236B6B6B' stroke-width='2'%3E%3Cpath d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 14px center',
    backgroundSize: '16px',
    appearance: 'none' as const,
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor={`${formId}-navn`}>Navn *</label>
          <input id={`${formId}-navn`} name="navn" type="text" required placeholder="Ola Nordmann" autoComplete="name" />
        </div>
        <div className="form-field">
          <label htmlFor={`${formId}-telefon`}>Telefon *</label>
          <input id={`${formId}-telefon`} name="telefon" type="tel" required placeholder="900 00 000" autoComplete="tel" />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor={`${formId}-epost`}>
          E-post <span style={{ fontWeight: 400, opacity: 0.6 }}>(valgfritt)</span>
        </label>
        <input id={`${formId}-epost`} name="epost" type="email" placeholder="ola@eksempel.no" autoComplete="email" />
      </div>

      <div className="form-field">
        <label htmlFor={`${formId}-kommune`}>Kommune *</label>
        <select id={`${formId}-kommune`} name="kommune" required defaultValue="" style={selectStyle}>
          <option value="" disabled>Velg kommune</option>
          <option value="Asker">Asker</option>
          <option value="Bærum">Bærum</option>
          <option value="Oslo">Oslo</option>
          <option value="Drammen">Drammen</option>
          <option value="Lier">Lier</option>
          <option value="Annet">Annet</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor={`${formId}-hvaGjelder`}>Hva gjelder det? *</label>
        <select id={`${formId}-hvaGjelder`} name="hvaGjelder" required defaultValue="" style={selectStyle}>
          <option value="" disabled>Velg</option>
          <option value="Ny elbillader">Ny elbillader</option>
          <option value="Bytte av lader">Bytte av lader</option>
          <option value="Lader og strømstyring">Lader og strømstyring</option>
          <option value="Vet ikke ennå">Vet ikke ennå</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor={`${formId}-boligInfo`}>
          Kort om boligen <span style={{ fontWeight: 400, opacity: 0.6 }}>(valgfritt)</span>
        </label>
        <textarea
          id={`${formId}-boligInfo`}
          name="boligInfo"
          rows={2}
          placeholder="F.eks: enebolig fra 1985, laderen skal stå i garasjen ca. 8 meter fra sikringsskapet"
        />
      </div>

      {feil && (
        <p style={{ color: 'var(--red)', fontSize: 14, lineHeight: 1.5 }}>{feil}</p>
      )}

      <button type="submit" disabled={laster} className="btn btn-red form-submit">
        {laster ? 'Sender…' : 'Få pris'}
        {!laster && (
          <svg viewBox="0 0 20 20" fill="currentColor" width={16} height={16} aria-hidden="true">
            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
          </svg>
        )}
      </button>

      <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--text-soft)', lineHeight: 1.5 }}>
        Vi bruker opplysningene til å kontakte deg om denne henvendelsen.
        Vi selger dem ikke videre og sender ikke nyhetsbrev.
      </p>
    </form>
  )
}

export default function ElbilladerKampanje() {
  return (
    <div className="subpage">
      <SiteHeader />
      <div className="subpage-pt">

        {/* ── Hero ───────────────────────────────────────────── */}
        <section style={{ background: 'var(--bg-dark)', color: 'white', padding: '80px 0 0' }}>
          <div className="wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 56, alignItems: 'start' }} className="lp-hero-grid">

              {/* Left: copy */}
              <div style={{ paddingBottom: 80 }}>
                <div className="eyebrow" style={{ color: 'var(--red)', background: 'rgba(220,38,38,0.12)', padding: '6px 14px', borderRadius: 100, marginBottom: 24 }}>
                  Asker · Bærum · Oslo · Drammen
                </div>
                <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, lineHeight: 1.05, marginBottom: 20, letterSpacing: '-0.02em' }}>
                  Elbillader ferdig montert fra 14&nbsp;900&nbsp;kr
                </h1>
                <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', maxWidth: 520, marginBottom: 32, lineHeight: 1.65 }}>
                  Du får skriftlig pris før vi starter, og prisen holder. Med smart strømstyring får du inntil{' '}
                  <strong style={{ color: 'white' }}>10&nbsp;000&nbsp;kr tilbake fra Enova</strong> — vi fyller ut søknaden for deg.
                </p>

                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
                  <a href="#skjema" className="btn btn-red" style={{ fontSize: 16, padding: '14px 28px' }}>
                    Få pris på elbillader <span className="arr">↓</span>
                  </a>
                  <PhoneLink location="elbillader-lp-hero" className="btn" style={{ background: 'rgba(255,255,255,0.08)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', fontSize: 15, padding: '14px 24px' } as React.CSSProperties}>
                    Ring {TELEFON}
                  </PhoneLink>
                </div>

                <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                  {[
                    'Fast pris. Ingen overraskelser',
                    'Samsvarserklæring inkludert',
                    'Vi ringer tilbake samme dag',
                    'Befaring innen 3 dager',
                  ].map(t => (
                    <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'rgba(255,255,255,0.65)' }}>
                      <CheckIcon />
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: form card */}
              <div id="skjema" style={{ background: 'white', borderRadius: '16px 16px 0 0', padding: '36px 32px 40px', color: 'var(--text)', position: 'relative', top: 0 }}>
                <p style={{ fontWeight: 800, fontSize: 20, marginBottom: 4, letterSpacing: '-0.01em' }}>Få pris på elbillader</p>
                <p style={{ color: 'var(--text-soft)', fontSize: 14, marginBottom: 24 }}>Vi ringer deg samme dag. Ingen forpliktelser.</p>
                <LeadForm formId="hero" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Problemet ──────────────────────────────────────── */}
        <section style={{ padding: '72px 0', background: 'var(--bg-warm)' }}>
          <div className="wrap" style={{ maxWidth: 800 }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Problemet</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, marginBottom: 24, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              De fleste får en pris på telefon, og en annen på fakturaen
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--text-soft)', marginBottom: 16 }}>
              Det står gjerne «fra 11 990» i annonsen, men så kommer kabelstrekk, jordfeilbryter og utkjøring i tillegg — etterpå.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--text-soft)' }}>
              Og nesten ingen får vite at Enova gir opptil 10&nbsp;000 kroner tilbake, eller hva som faktisk skal til for å få pengene.
            </p>
          </div>
        </section>

        {/* ── Slik gjør vi det ───────────────────────────────── */}
        <section style={{ padding: '72px 0', background: 'var(--bg)' }}>
          <div className="wrap" style={{ maxWidth: 800 }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Slik gjør vi det</div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, marginBottom: 32, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Skriftlig pris før vi starter. Tillegg avklares før, ikke etter.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text-soft)', marginBottom: 16 }}>
              Vi ringer deg og spør om boligen, sikringsskapet og hvor laderen skal stå. Ofte holder det med noen bilder på SMS. Er det mer
              omfattende, kommer vi på befaring — normalt innen tre dager.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text-soft)' }}>
              Så får du en skriftlig pris. Den prisen gjelder. Finner vi noe vi ikke kunne se på forhånd, for eksempel gamle kabler bak veggen,
              ringer vi deg før vi gjør noe. Du får en ny pris å ta stilling til, og du kan si nei.
            </p>
          </div>
        </section>

        {/* ── Inkludert ──────────────────────────────────────── */}
        <section style={{ padding: '64px 0', background: 'var(--bg-warm)', borderTop: '1px solid var(--line)' }}>
          <div className="wrap" style={{ maxWidth: 800 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 28, letterSpacing: '-0.01em' }}>Dette er inkludert</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px 32px' }}>
              {[
                'Lader, montering og alt materiell',
                'Egen kurs og jordfeilbryter type B eller tilsvarende',
                'Inntil 10 meter kabelstrekk',
                'Testing og igangkjøring',
                'Samsvarserklæring lagt i Boligmappa',
                'Hjelp med Enova-søknaden hvis du velger strømstyring',
                'Rydding etter oss',
              ].map(p => (
                <div key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '10px 0', borderBottom: '1px solid var(--line)' }}>
                  <span style={{ marginTop: 2, flexShrink: 0 }}><CheckIcon /></span>
                  <span style={{ fontSize: 15, lineHeight: 1.5 }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Steg ───────────────────────────────────────────── */}
        <section style={{ padding: '72px 0', background: 'var(--bg)' }}>
          <div className="wrap" style={{ maxWidth: 880 }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 700, marginBottom: 48, letterSpacing: '-0.02em', textAlign: 'center' }}>
              Slik fungerer det
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 32 }}>
              {[
                { nr: '1', tittel: 'Du tar kontakt', tekst: 'Fyll ut skjemaet eller ring. Vi svarer samme dag.' },
                { nr: '2', tittel: 'Du får en pris', tekst: 'Skriftlig, med alt spesifisert. Ingen «ca.»' },
                { nr: '3', tittel: 'Vi monterer', tekst: 'De fleste jobber tar tre til fem timer. Du trenger ikke være hjemme hele tiden.' },
                { nr: '4', tittel: 'Du får papirene', tekst: 'Samsvarserklæringen ligger i Boligmappa før vi drar. Den trenger du den dagen boligen skal selges.' },
              ].map(s => (
                <div key={s.nr} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--red)', color: 'white', fontWeight: 800, fontSize: 17, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {s.nr}
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, marginBottom: 6, fontSize: 16 }}>{s.tittel}</p>
                    <p style={{ color: 'var(--text-soft)', fontSize: 14, lineHeight: 1.6 }}>{s.tekst}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Priser ─────────────────────────────────────────── */}
        <section style={{ padding: '72px 0', background: 'var(--bg-warm)' }}>
          <div className="wrap" style={{ maxWidth: 800 }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 700, marginBottom: 8, letterSpacing: '-0.02em' }}>Pris</h2>
            <p style={{ color: 'var(--text-soft)', fontSize: 14, marginBottom: 32 }}>
              Inkludert mva. Gjelder normal installasjon i enebolig eller rekkehus med tilstrekkelig kapasitet i sikringsskapet.
              Du får eksakt pris skriftlig før vi starter.
            </p>

            <div style={{ background: 'white', borderRadius: 14, overflow: 'hidden', border: '1px solid var(--line)', marginBottom: 24 }}>
              {[
                { navn: 'Zaptec Go ferdig montert', pris: 'fra 14 900 kr' },
                { navn: 'Easee Lite ferdig montert', pris: 'fra 14 900 kr' },
                { navn: 'Zaptec Pro eller Easee Charge', pris: 'fra 17 900 kr' },
                { navn: 'Kabelstrekk over 10 meter', pris: '195 kr per meter' },
                { navn: 'Oppgradering av sikringsskap', pris: 'fra 9 500 kr' },
              ].map((r, i, arr) => (
                <div key={r.navn} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 24px', borderBottom: i < arr.length - 1 ? '1px solid var(--line)' : 'none', gap: 16 }}>
                  <span style={{ fontSize: 15, fontWeight: 500 }}>{r.navn}</span>
                  <span style={{ fontWeight: 700, fontSize: 16, color: 'var(--red)', whiteSpace: 'nowrap' }}>{r.pris}</span>
                </div>
              ))}
            </div>

            <div style={{ background: 'white', borderRadius: 12, padding: '16px 24px', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 14, color: 'var(--text-soft)' }}>Foretrekker du å ringe?</span>
              <a href={TELEFON_HREF} style={{ fontWeight: 700, fontSize: 18, color: 'var(--red)' }}>{TELEFON}</a>
              <span style={{ fontSize: 13, color: 'var(--text-soft)' }}>Man–fre 07–16</span>
            </div>
          </div>
        </section>

        {/* ── Enova ──────────────────────────────────────────── */}
        <section style={{ padding: '72px 0', background: 'var(--bg-dark)', color: 'white' }}>
          <div className="wrap" style={{ maxWidth: 800 }}>
            <div className="eyebrow" style={{ color: 'var(--red)', background: 'rgba(220,38,38,0.15)', padding: '6px 14px', borderRadius: 100, marginBottom: 24 }}>
              Enova-støtte
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, marginBottom: 24, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Inntil 10&nbsp;000&nbsp;kr fra Enova
            </h2>

            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', marginBottom: 16 }}>
              Enova støtter ikke laderen alene. Støtten gjelder smart strømstyring som styrer minst to ting i boligen etter strømpris
              — for eksempel laderen og varmtvannstanken. Men laderen teller med i totalsummen, og støtten er 35 prosent av hele beløpet.
            </p>

            <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: '28px 24px', marginBottom: 28 }}>
              {[
                { rad: 'Elbillader ferdig montert', beløp: '14 900 kr', dimm: false, red: false },
                { rad: 'Smart strømstyring', beløp: '6 500 kr', dimm: false, red: false },
                { rad: 'Enova-støtte, 35 %', beløp: '− 7 490 kr', dimm: false, red: true },
                { rad: 'Du betaler for styringen', beløp: '~1 000 kr netto', dimm: true, red: false },
              ].map((r, i, arr) => (
                <div key={r.rad} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none', gap: 16 }}>
                  <span style={{ fontSize: 15, color: r.dimm ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.9)' }}>{r.rad}</span>
                  <span style={{ fontWeight: 700, fontSize: 16, color: r.red ? 'var(--red)' : 'white', whiteSpace: 'nowrap' }}>{r.beløp}</span>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.65)', marginBottom: 8 }}>
              I praksis får du strømstyringen for under tusen kroner netto. Den sørger for at bilen lader når strømmen er billigst.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.65)', marginBottom: 20 }}>
              Vi fyller ut Enova-søknaden for deg og sender med spesifisert faktura og dokumentasjon. Du trenger ikke gjøre noe annet enn å signere.
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.45)', fontStyle: 'italic' }}>
              Har du allerede fått lader hos oss det siste året, teller den også med. Ta kontakt, så regner vi på det.
            </p>
          </div>
        </section>

        {/* ── Hvorfor VBM ────────────────────────────────────── */}
        <section style={{ padding: '72px 0', background: 'var(--bg-warm)' }}>
          <div className="wrap" style={{ maxWidth: 880 }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 700, marginBottom: 16, letterSpacing: '-0.02em' }}>Hvorfor VBM</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text-soft)', marginBottom: 36, maxWidth: 600 }}>
              Vi er et lite firma. Det betyr at du snakker med den som faktisk gjør jobben, og at vi ikke har råd til misfornøyde kunder.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
              {[
                { tittel: 'Fast pris', tekst: 'Tillegg avklares før, ikke etter.' },
                { tittel: 'Vi ringer tilbake', tekst: 'Samme dag, som regel innen et par timer.' },
                { tittel: 'Befaring innen tre dager', tekst: 'I Asker, Bærum, Oslo og Drammen.' },
                { tittel: 'Papirene kommer av seg selv', tekst: 'Samsvarserklæring i Boligmappa uten at du må mase.' },
              ].map(k => (
                <div key={k.tittel} style={{ background: 'white', borderRadius: 12, padding: '24px 22px', border: '1px solid var(--line)' }}>
                  <p style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: 'var(--text)' }}>{k.tittel}</p>
                  <p style={{ fontSize: 14, color: 'var(--text-soft)', lineHeight: 1.6 }}>{k.tekst}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Dokumentasjon ──────────────────────────────────── */}
        <section style={{ padding: '72px 0', background: 'var(--bg)', borderTop: '1px solid var(--line)' }}>
          <div className="wrap" style={{ maxWidth: 800 }}>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700, marginBottom: 20, letterSpacing: '-0.02em' }}>
              Dokumentasjon og trygghet
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text-soft)', marginBottom: 12 }}>
              VBM Elektro AS er registrert i Elvirksomhetsregisteret hos DSB og medlem i NELFO. Alt arbeid utføres etter NEK&nbsp;400 og
              dokumenteres med samsvarserklæring som legges i Boligmappa.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text-soft)' }}>
              Det betyr at du kan dokumentere anlegget den dagen boligen skal selges, og at forsikringen dekker deg hvis noe skulle skje.
            </p>
          </div>
        </section>

        {/* ── Områder ────────────────────────────────────────── */}
        <section style={{ padding: '48px 0', background: 'var(--bg-warm)', borderTop: '1px solid var(--line)' }}>
          <div className="wrap" style={{ textAlign: 'center' }}>
            <p style={{ color: 'var(--text-soft)', fontSize: 14, marginBottom: 16 }}>Vi jobber i</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 12px', justifyContent: 'center' }}>
              {[
                'Asker', 'Bærum', 'Oslo', 'Drammen', 'Lier', 'Sandvika',
                'Asker sentrum', 'Heggedal', 'Slependen', 'Høvik', 'Stabekk', 'Rykkinn', 'Konnerud',
              ].map(o => (
                <span key={o} style={{ background: 'white', borderRadius: 8, padding: '6px 14px', fontSize: 13, fontWeight: 500, border: '1px solid var(--line)' }}>
                  {o}
                </span>
              ))}
            </div>
            <p style={{ marginTop: 16, fontSize: 13, color: 'var(--text-soft)' }}>
              Er du i nærheten og usikker på om vi kjører til deg,{' '}
              <a href={TELEFON_HREF} style={{ color: 'var(--red)', fontWeight: 600 }}>ring og spør</a>.
            </p>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────── */}
        <section style={{ padding: '72px 0', background: 'var(--bg)' }}>
          <div className="wrap" style={{ maxWidth: 720 }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 700, marginBottom: 40, letterSpacing: '-0.02em' }}>
              Vanlige spørsmål
            </h2>
            {[
              {
                sp: 'Hva koster det egentlig?',
                sv: 'Fra 14 900 kr ferdig montert for de vanligste jobbene. Du får eksakt pris skriftlig før vi starter, og den prisen gjelder.',
              },
              {
                sp: 'Kan prisen endre seg underveis?',
                sv: 'Bare hvis vi finner noe vi ikke kunne se på forhånd. Da ringer vi deg før vi gjør noe, og du får en ny pris å ta stilling til.',
              },
              {
                sp: 'Har jeg nok strøm i sikringsskapet?',
                sv: 'De fleste boliger har det. Vi ser på det når vi er der, eller ut fra bilder du sender. Må skapet oppgraderes, får du prisen på det først.',
              },
              {
                sp: 'Hvor lang tid tar monteringen?',
                sv: 'Vanligvis tre til fem timer. Du trenger ikke være hjemme hele tiden.',
              },
              {
                sp: 'Hvilken lader bør jeg velge?',
                sv: 'Zaptec Go og Easee Lite dekker behovet til de aller fleste. Har du to biler eller planlegger det, kan det lønne seg med en modell som håndterer lastdeling. Vi sier fra hvis vi mener du kjøper mer enn du trenger.',
              },
              {
                sp: 'Får jeg virkelig 10 000 kr fra Enova?',
                sv: 'Inntil 10 000 kr, og det forutsetter at du også installerer smart strømstyring. Støtten er 35 prosent av totalen. Vi regner ut nøyaktig hva du får i ditt tilfelle, og fyller ut søknaden.',
              },
              {
                sp: 'Hvor raskt kan dere komme?',
                sv: 'Vi ringer samme dag. Befaring innen tre dager. Selve monteringen avtaler vi når prisen er klar.',
              },
              {
                sp: 'Jeg bor i borettslag — kan dere hjelpe?',
                sv: 'Ja, men da er det andre regler. Ta kontakt, så forklarer vi hva som gjelder og hva styret må ta stilling til.',
              },
            ].map(({ sp, sv }) => (
              <details key={sp} style={{ borderBottom: '1px solid var(--line)', padding: '20px 0' }}>
                <summary style={{ fontWeight: 600, fontSize: 16, cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                  {sp}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" style={{ flexShrink: 0 }}>
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p style={{ color: 'var(--text-soft)', marginTop: 12, lineHeight: 1.7, fontSize: 15, paddingRight: 36 }}>{sv}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── Avsluttende CTA + skjema ───────────────────────── */}
        <section style={{ padding: '80px 0', background: 'var(--bg-warm)', borderTop: '1px solid var(--line)' }}>
          <div className="wrap" style={{ maxWidth: 860 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 56, alignItems: 'start' }} className="lp-cta-grid">

              {/* Left: copy */}
              <div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, marginBottom: 16, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                  Få prisen før du bestemmer deg
                </h2>
                <p style={{ fontSize: 16, color: 'var(--text-soft)', lineHeight: 1.65, marginBottom: 28 }}>
                  Det koster ingenting å spørre, og du får et konkret tall å forholde deg til.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                  <a href={TELEFON_HREF} style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 700, fontSize: 18, color: 'var(--text)' }}>
                    <span style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--red)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                      </svg>
                    </span>
                    {TELEFON}
                  </a>
                  <span style={{ fontSize: 13, color: 'var(--text-soft)' }}>Man–fre 07–16, svar samme dag</span>
                </div>
              </div>

              {/* Right: form */}
              <div id="skjema-bunn" style={{ background: 'white', borderRadius: 16, padding: '32px 28px', border: '1px solid var(--line)', boxShadow: '0 4px 32px rgba(0,0,0,0.06)' }}>
                <p style={{ fontWeight: 800, fontSize: 18, marginBottom: 4 }}>Få pris på elbillader</p>
                <p style={{ color: 'var(--text-soft)', fontSize: 13, marginBottom: 24 }}>Vi ringer deg samme dag. Ingen forpliktelser.</p>
                <LeadForm formId="bunn" />
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 900px) {
          .lp-hero-grid { grid-template-columns: 1fr !important; }
          .lp-cta-grid  { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .lp-hero-grid { gap: 0 !important; }
        }
      `}</style>

      <SiteFooter />
    </div>
  )
}
