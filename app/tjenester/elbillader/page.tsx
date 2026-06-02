'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { PhoneLink } from '@/components/PhoneLink'
import { trackBefaringSubmit } from '@/lib/analytics'
import { getStoredGclid } from '@/hooks/useGclid'

// Metadata must be in a server component — keeping SEO data here as constants
// and exporting metadata from a separate layout or via generateMetadata pattern.
// For this landing page we inline the critical meta in Head via the server layout.

const KALENDER_URL = 'https://api.leadconnectorhq.com/widget/bookings/vbmelektro'

export default function ElbilladerPage() {
  const [steg, setSteg] = useState<'form' | 'kalender' | 'sendt'>('form')
  const [laster, setLaster] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLaster(true)
    const fd = new FormData(e.currentTarget)
    const data = Object.fromEntries(fd)
    await fetch('/api/book-befaring', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, tjeneste: 'Elbillader', gclid: getStoredGclid() }),
    }).catch(() => {})
    trackBefaringSubmit('Elbillader')
    setLaster(false)
    setSteg('kalender')
  }

  return (
    <div className="subpage">
      <SiteHeader />
      <div className="subpage-pt">

        {/* ── Hero ─────────────────────────────────────────── */}
        <section style={{ background: 'var(--bg-dark)', color: 'white', padding: '80px 0 72px' }}>
          <div className="wrap">
            <div className="eyebrow" style={{ color: 'var(--red)', background: 'rgba(220,38,38,0.12)' }}>
              Bærum · Oslo · Asker — Gratis befaring
            </div>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 20, maxWidth: 640 }}>
              Elbillader hjemme — installert av autorisert elektriker
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 500, marginBottom: 36, lineHeight: 1.6 }}>
              Fast pris fra <strong style={{ color: 'white' }}>12 490 kr</strong>. Ferdig på 2–4 timer. Samsvarserklæring alltid inkludert.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <PhoneLink location="elbillader-hero" className="btn btn-red" style={{ fontSize: 18, padding: '14px 28px' } as React.CSSProperties}>
                Ring 90 63 31 18
              </PhoneLink>
              <a href="#befaring" className="btn" style={{ background: 'rgba(255,255,255,0.08)', color: 'white', border: '1px solid rgba(255,255,255,0.15)', fontSize: 16, padding: '14px 24px' }}>
                Book gratis befaring <span className="arr">→</span>
              </a>
            </div>

            <div style={{ display: 'flex', gap: 24, marginTop: 40, flexWrap: 'wrap' }}>
              {['Zaptec-partner', 'Easee-installatør', 'NELFO-godkjent', 'Samsvarserklæring inkludert'].map(t => (
                <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="var(--red)">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Slik fungerer det ─────────────────────────────── */}
        <section style={{ padding: '72px 0', background: 'var(--bg)' }}>
          <div className="wrap">
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 48, textAlign: 'center' }}>Slik fungerer det</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32 }}>
              {[
                { nr: '1', tittel: 'Gratis befaring', tekst: 'Vi kommer hjem til deg, vurderer opplegget og gir deg et skriftlig fastpristilbud — kostnadsfritt.' },
                { nr: '2', tittel: 'Fastpristilbud innen 24t', tekst: 'Du vet nøyaktig hva det koster før vi starter. Ingen overraskelser.' },
                { nr: '3', tittel: 'Installasjon 2–4 timer', tekst: 'Vi monterer laderen og dokumenterer alt. Du kan lade bilen samme dag.' },
              ].map(s => (
                <div key={s.nr} style={{ display: 'flex', gap: 20 }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--red)', color: 'white', fontWeight: 800, fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{s.nr}</div>
                  <div>
                    <p style={{ fontWeight: 700, marginBottom: 6 }}>{s.tittel}</p>
                    <p style={{ color: 'var(--text-soft)', fontSize: 14, lineHeight: 1.6 }}>{s.tekst}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Priser + Skjema ───────────────────────────────── */}
        <section id="befaring" style={{ padding: '72px 0', background: 'var(--bg-warm)' }}>
          <div className="wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 56, alignItems: 'start' }}>

              {/* Priser */}
              <div>
                <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Priser elbillader</h2>
                <p style={{ color: 'var(--text-soft)', marginBottom: 32, fontSize: 15 }}>Alle priser inkl. mva. Lader/ladeboks ikke inkludert.</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
                  {[
                    { tittel: 'Standard installasjon', beskr: 'Garasje eller carport. Kabling fra skap, vern, dokumentasjon og idriftsettelse.', pris: '12 490 kr', tid: '2–4 timer' },
                    { tittel: 'Kompleks installasjon', beskr: 'Parkeringskjeller, borettslag eller krevende kabelføring.', pris: '18 490 kr', tid: '4–8 timer' },
                  ].map(p => (
                    <div key={p.tittel} style={{ background: 'white', borderRadius: 12, padding: 24, boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                        <p style={{ fontWeight: 700, fontSize: 17 }}>{p.tittel}</p>
                        <p style={{ fontWeight: 800, fontSize: 20, color: 'var(--red)', whiteSpace: 'nowrap', marginLeft: 16 }}>fra {p.pris}</p>
                      </div>
                      <p style={{ color: 'var(--text-soft)', fontSize: 14, lineHeight: 1.5, marginBottom: 8 }}>{p.beskr}</p>
                      <p style={{ fontSize: 13, color: 'var(--text-soft)' }}>Tidsbruk: {p.tid}</p>
                    </div>
                  ))}
                </div>

                <div style={{ background: 'white', borderRadius: 12, padding: 20, border: '1px solid var(--border)' }}>
                  <p style={{ fontWeight: 600, marginBottom: 4 }}>Foretrekker du å ringe?</p>
                  <PhoneLink location="elbillader-priser" style={{ fontSize: 22, fontWeight: 700, color: 'var(--red)', display: 'block', marginBottom: 4 } as React.CSSProperties}>
                    90 63 31 18
                  </PhoneLink>
                  <p style={{ color: 'var(--text-soft)', fontSize: 13 }}>Man–Fre 07:00–16:00 · Svar innen 1 time</p>
                </div>
              </div>

              {/* Skjema */}
              <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 8px 40px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
                {steg === 'form' && (
                  <div style={{ padding: '40px 36px' }}>
                    <p style={{ fontWeight: 800, fontSize: 22, marginBottom: 6 }}>Book gratis befaring</p>
                    <p style={{ color: 'var(--text-soft)', fontSize: 15, marginBottom: 28 }}>Gratis og uforpliktende — velg tid i neste steg</p>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      <div className="form-row">
                        <div className="form-field">
                          <label>Navn *</label>
                          <input name="navn" type="text" required placeholder="Ola Nordmann" />
                        </div>
                        <div className="form-field">
                          <label>Telefon *</label>
                          <input name="telefon" type="tel" required placeholder="900 00 000" />
                        </div>
                      </div>
                      <div className="form-field">
                        <label>Adresse / område *</label>
                        <input name="adresse" type="text" required placeholder="F.eks. Sandvika, Bærum" />
                      </div>
                      <div className="form-field">
                        <label>Hvilken lader ønsker du?</label>
                        <select name="lader" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236B6B6B' stroke-width='2'%3E%3Cpath d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', backgroundSize: '16px', appearance: 'none' }} defaultValue="">
                          <option value="">Vet ikke / hjelp til valg</option>
                          <option value="Zaptec Go">Zaptec Go</option>
                          <option value="Easee One">Easee One</option>
                          <option value="Annen lader">Annen lader</option>
                        </select>
                      </div>
                      <div className="form-field">
                        <label>Notat <span style={{ fontWeight: 400, opacity: 0.6 }}>(valgfritt)</span></label>
                        <textarea name="notat" rows={2} placeholder="Garasje, borettslag, annet å nevne?" />
                      </div>
                      <button type="submit" disabled={laster} className="form-submit">
                        {laster ? 'Sender…' : 'Velg tidspunkt'}
                        {!laster && <svg viewBox="0 0 20 20" fill="currentColor" width={16} height={16}><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" /></svg>}
                      </button>
                      <p className="form-note">Ingen binding · Gratis befaring</p>
                    </form>
                  </div>
                )}

                {steg === 'kalender' && (
                  <div>
                    <div style={{ padding: '28px 36px 0', fontWeight: 700, fontSize: 20 }}>Velg tidspunkt</div>
                    <iframe src={KALENDER_URL} title="Book tidspunkt" style={{ width: '100%', height: 600, border: 'none', display: 'block' }} loading="lazy" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Lokal proof ───────────────────────────────────── */}
        <section style={{ padding: '48px 0', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
          <div className="wrap" style={{ textAlign: 'center' }}>
            <p style={{ color: 'var(--text-soft)', fontSize: 15, marginBottom: 16 }}>Vi installerer elbilladere i</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px', justifyContent: 'center' }}>
              {['Bærum', 'Sandvika', 'Billingstad', 'Lysaker', 'Fornebu', 'Høvik', 'Nesbru', 'Oslo vest', 'Asker'].map(o => (
                <span key={o} style={{ background: 'var(--bg-warm)', borderRadius: 8, padding: '6px 14px', fontSize: 14, fontWeight: 500 }}>{o}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────── */}
        <section style={{ padding: '72px 0', background: 'var(--bg-warm)' }}>
          <div className="wrap" style={{ maxWidth: 720 }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 40 }}>Ofte stilte spørsmål</h2>
            {[
              { sp: 'Hva koster en standard elbillader-installasjon?', sv: 'Standard installasjon i garasje eller carport starter på 12 490 kr inkl. mva. Prisen inkluderer kabling fra sikringsskap, nødvendig vern, dokumentasjon og idriftsettelse. Selve laderen kommer i tillegg (Zaptec Go eller Easee One koster typisk 5 000–7 000 kr).' },
              { sp: 'Kan jeg velge lader selv?', sv: 'Ja. Vi installerer de fleste godkjente ladere. Zaptec og Easee er våre anbefalte merker — vi er autoriserte installatører for begge og kjenner dem godt.' },
              { sp: 'Hva er inkludert i prisen?', sv: 'Kabling fra sikringsskap til ladepunkt, kursautomatvern, jordfeilvern, montering av ladeboks, idriftsettelse, testing og samsvarserklæring til Boligmappa.' },
              { sp: 'Tar dere borettslag og sameie?', sv: 'Ja, men borettslag/sameie krever normalt godkjenning fra styret og kan kreve felles ladeinfrastruktur. Vi hjelper med dokumentasjon og dialog med styret — kom gjerne til befaring så vurderer vi opplegget.' },
              { sp: 'Hvor lang tid tar installasjonen?', sv: 'Standard installasjon tar 2–4 timer. Komplekse opplegg i parkeringskjeller eller ved lang kabelføring tar 4–8 timer. Du vet alltid tidsestimat i tilbudet.' },
            ].map(({ sp, sv }) => (
              <details key={sp} style={{ borderBottom: '1px solid var(--border)', padding: '20px 0' }}>
                <summary style={{ fontWeight: 600, fontSize: 16, cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {sp}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p style={{ color: 'var(--text-soft)', marginTop: 12, lineHeight: 1.7, fontSize: 15 }}>{sv}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── Bottom CTA ────────────────────────────────────── */}
        <section style={{ padding: '72px 0', background: 'var(--red)', color: 'white', textAlign: 'center' }}>
          <div className="wrap">
            <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 12 }}>Klar for å installere elbillader?</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 32, fontSize: 17 }}>Gratis befaring — skriftlig fastpris innen 24 timer.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#befaring" style={{ background: 'white', color: 'var(--red)', fontWeight: 700, padding: '14px 28px', borderRadius: 8, fontSize: 16, textDecoration: 'none' }}>
                Book gratis befaring →
              </a>
              <PhoneLink location="elbillader-cta-bottom" style={{ background: 'rgba(255,255,255,0.12)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', fontWeight: 700, padding: '14px 28px', borderRadius: 8, fontSize: 16, textDecoration: 'none' } as React.CSSProperties}>
                Ring 90 63 31 18
              </PhoneLink>
            </div>
          </div>
        </section>

      </div>
      <SiteFooter />
    </div>
  )
}
