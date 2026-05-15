'use client'
import { useState, useEffect } from 'react'

const KALENDER_URL = 'https://api.leadconnectorhq.com/widget/bookings/vbmelektro'

interface Props {
  open: boolean
  onClose: () => void
}

export function BefaringModal({ open, onClose }: Props) {
  const [step, setStep] = useState<'form' | 'calendar'>('form')
  const [laster, setLaster] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      setStep('form')
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLaster(true)
    const fd = new FormData(e.currentTarget)
    await fetch('/api/befaring-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(fd)),
    }).catch(() => {})
    setLaster(false)
    setStep('calendar')
  }

  if (!open) return null

  return (
    <>
      <div className="bm-overlay" onClick={onClose} />
      <div className="bm-panel" role="dialog" aria-modal="true" aria-label="Book gratis befaring">
        <button className="bm-close" onClick={onClose} aria-label="Lukk">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {step === 'form' ? (
          <>
            <div className="bm-head">
              <p className="bm-title">Book gratis befaring</p>
              <p className="bm-sub">Fyll inn info — velg tid i neste steg</p>
            </div>

            <form onSubmit={handleSubmit} className="bm-form">
              <div className="bm-row">
                <div className="form-field">
                  <label htmlFor="bm-navn">Navn</label>
                  <input id="bm-navn" name="navn" type="text" placeholder="Ola Nordmann" required />
                </div>
                <div className="form-field">
                  <label htmlFor="bm-telefon">Telefon</label>
                  <input id="bm-telefon" name="telefon" type="tel" placeholder="900 00 000" required />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="bm-tjeneste">Hva gjelder befaringen?</label>
                <select id="bm-tjeneste" name="tjeneste" required defaultValue="">
                  <option value="" disabled>Velg type oppdrag…</option>
                  <option value="Elbillader">Elbillader-installasjon</option>
                  <option value="El-anlegg">El-anlegg og sikringsskap</option>
                  <option value="Renovering">Bad- og kjøkkenrenovering</option>
                  <option value="Smarthus">Smarthus og styringssystemer</option>
                  <option value="Montering">Montering av punkter og lamper</option>
                  <option value="Elkontroll">Elkontroll og feilsøking</option>
                  <option value="Næringsbygg">Næringsbygg og kontor</option>
                  <option value="Annet">Annet</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="bm-adresse">Adresse / område</label>
                <input id="bm-adresse" name="adresse" type="text" placeholder="F.eks. Sandvika, Bærum" />
              </div>

              <button type="submit" className="btn btn-red form-submit" disabled={laster}>
                {laster ? 'Sender…' : 'Velg tidspunkt'} <span className="arr">→</span>
              </button>
              <p className="form-fine">Gratis og uforpliktende · Du velger tid i neste steg</p>
            </form>
          </>
        ) : (
          <div className="bm-calendar">
            <p className="bm-title" style={{ marginBottom: 16 }}>Velg tidspunkt</p>
            <iframe
              src={KALENDER_URL}
              title="Book tidspunkt"
              className="bm-iframe"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </>
  )
}
