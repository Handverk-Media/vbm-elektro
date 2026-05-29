"use client"

import { useState } from 'react'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { BEDRIFT } from '@/data/bedrift'

const KALENDER_URL = 'https://api.leadconnectorhq.com/widget/bookings/vbmelektro'

export default function BefaringPage() {
  const [steg, setSteg] = useState<'form' | 'kalender'>('form')
  const [laster, setLaster] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLaster(true)
    const fd = new FormData(e.currentTarget)
    await fetch('/api/book-befaring', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(fd)),
    }).catch(() => {})
    setLaster(false)
    setSteg('kalender')
  }

  return (
    <div className="subpage">
      <SiteHeader />
      <div className="subpage-pt">

        <section className="subpage-hero">
          <div className="wrap">
            <div className="eyebrow">Gratis · Uforpliktende</div>
            <h1>Book gratis befaring</h1>
            <p>Fyll inn info og velg tidspunkt. Vi ringer deg innen 4 timer for å bekrefte — befaring er helt kostnadsfri.</p>
          </div>
        </section>

        <section style={{ padding: '80px 0', background: 'var(--bg)' }}>
          <div className="wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 64, alignItems: 'start' }}>

              <div>
                <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24 }}>Hvorfor booke befaring?</h2>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
                  {[
                    'Gratis — ingen faktura for selve befaringen',
                    'Skriftlig fastpris innen 24 timer etterpå',
                    'Vi kartlegger jobben ordentlig — ingen overraskelser',
                    'Samsvarserklæring alltid inkludert i prisen',
                  ].map((t) => (
                    <li key={t} style={{ display: 'flex', gap: 12, color: 'var(--text-soft)', fontSize: 15, lineHeight: 1.5 }}>
                      <span style={{ color: 'var(--red)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {t}
                    </li>
                  ))}
                </ul>

                <div style={{ background: 'var(--bg-warm)', borderRadius: 12, padding: 24 }}>
                  <p style={{ fontWeight: 600, marginBottom: 4 }}>Foretrekker du å ringe?</p>
                  <a href={`tel:${BEDRIFT.telefon.replace(/\s/g, '')}`} style={{ fontSize: 24, fontWeight: 700, color: 'var(--red)' }}>{BEDRIFT.telefon}</a>
                  <p style={{ color: 'var(--text-soft)', fontSize: 14, marginTop: 4 }}>Man–Fre 07:00–16:00 · Svarer innen 1 time</p>
                </div>
              </div>

              <div className="book-box" style={{ background: 'white', borderRadius: 16, boxShadow: '0 8px 40px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
                {steg === 'form' ? (
                  <div style={{ padding: '40px 36px' }}>
                    <h3 style={{ fontWeight: 700, fontSize: 22, marginBottom: 24 }}>Fyll inn info</h3>
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
                        <label>Hva gjelder det? *</label>
                        <select name="tjeneste" required defaultValue="" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236B6B6B' stroke-width='2'%3E%3Cpath d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', backgroundSize: '16px', appearance: 'none' }}>
                          <option value="" disabled>Velg type oppdrag…</option>
                          <option value="Elbillader">Elbillader-installasjon</option>
                          <option value="El-anlegg">El-anlegg og sikringsskap</option>
                          <option value="Renovering">Bad- og kjøkkenrenovering</option>
                          <option value="Smarthus">Smarthus og styringssystemer</option>
                          <option value="Montering">Montering av punkter og lamper</option>
                          <option value="Elkontroll">Elkontroll og feilsøking</option>
                          <option value="Næringsbygg">Næringsbygg og kontor</option>
                          <option value="Nybygg">Nybygg og tilbygg</option>
                          <option value="Annet">Annet</option>
                        </select>
                      </div>
                      <div className="form-field">
                        <label>Adresse / område</label>
                        <input name="adresse" type="text" placeholder="F.eks. Sandvika, Bærum" />
                      </div>
                      <div className="form-field">
                        <label>Notat <span style={{ fontWeight: 400, opacity: 0.6 }}>(valgfritt)</span></label>
                        <textarea name="notat" rows={3} placeholder="Beskriv kort hva jobben gjelder…" />
                      </div>
                      <button type="submit" disabled={laster} className="form-submit">
                        {laster ? 'Sender…' : 'Velg tidspunkt'}
                        {!laster && <svg viewBox="0 0 20 20" fill="currentColor" width={16} height={16}><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" /></svg>}
                      </button>
                      <p className="form-note">Gratis og uforpliktende · Du velger tid i neste steg</p>
                    </form>
                  </div>
                ) : (
                  <div>
                    <div style={{ padding: '28px 36px 0', fontWeight: 700, fontSize: 20 }}>Velg tidspunkt</div>
                    <iframe src={KALENDER_URL} title="Book tidspunkt" style={{ width: '100%', height: 600, border: 'none', display: 'block' }} loading="lazy" />
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>

      </div>
      <SiteFooter />
    </div>
  )
}
