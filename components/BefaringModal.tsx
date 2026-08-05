'use client'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { trackBefaringSubmit } from '@/lib/analytics'
import { getStoredGclid } from '@/hooks/useGclid'
import { getUtmParams } from '@/lib/utm'

const KALENDER_URL = 'https://api.leadconnectorhq.com/widget/bookings/vbmelektro'

interface Props {
  open: boolean
  onClose: () => void
}

export function BefaringModal({ open, onClose }: Props) {
  const [step, setStep] = useState<'form' | 'calendar'>('form')
  const [laster, setLaster] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [tjeneste, setTjeneste] = useState('')

  const erElbillader = tjeneste === 'Elbillader'

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      document.body.classList.add('modal-open')
      setStep('form')
      setTjeneste('')
    } else {
      document.body.style.overflow = ''
      document.body.classList.remove('modal-open')
    }
    return () => {
      document.body.style.overflow = ''
      document.body.classList.remove('modal-open')
    }
  }, [open])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLaster(true)
    const fd = new FormData(e.currentTarget)
    fd.set('gclid', getStoredGclid())
    const utmParams = getUtmParams()
    Object.entries(utmParams).forEach(([k, v]) => { if (v) fd.set(k, v) })
    await fetch('/api/book-befaring', {
      method: 'POST',
      body: fd,
    }).catch(() => {})
    trackBefaringSubmit(tjeneste)
    setLaster(false)
    setStep('calendar')
  }

  if (!open || !mounted) return null

  return createPortal(
    <div className="bm-overlay">
      <div className="bm-panel" role="dialog" aria-modal="true" aria-label="Book gratis befaring" onClick={e => e.stopPropagation()}>
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
                <label htmlFor="bm-tjeneste">Hva gjelder det?</label>
                <select
                  id="bm-tjeneste"
                  name="tjeneste"
                  required
                  value={tjeneste}
                  onChange={e => setTjeneste(e.target.value)}
                >
                  <option value="" disabled>Velg type arbeid…</option>
                  <option value="Generelt">Generelt elektriker arbeid</option>
                  <option value="Elbillader">Elbillader</option>
                </select>
              </div>

              {erElbillader && (
                <div className="elbil-section">
                  <p className="elbil-section-title">Elbillader — tilleggsinformasjon</p>
                  <div className="form-field">
                    <label htmlFor="bm-kabel">Kabellengde fra sikringsskap til lader</label>
                    <input id="bm-kabel" name="kabel_lengde" type="text" placeholder="F.eks. 10 meter" />
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--text-soft)', margin: '4px 0 0' }}>
                    Last gjerne opp bilder — hjelper oss å gi deg riktig pris:
                  </p>
                  <div className="form-field">
                    <label>Sikringsskap <span style={{ fontWeight: 400, opacity: 0.6 }}>(valgfritt)</span></label>
                    <input name="bilde_sikringsskap" type="file" accept="image/*" className="file-input" />
                    <span className="file-hint">Bilde av sikringsskapet ditt</span>
                  </div>
                  <div className="form-field">
                    <label>Føringsvei for kabel <span style={{ fontWeight: 400, opacity: 0.6 }}>(valgfritt)</span></label>
                    <input name="bilde_foeringsvei" type="file" accept="image/*" className="file-input" />
                    <span className="file-hint">Planlagt vei fra skap til lader</span>
                  </div>
                  <div className="form-field">
                    <label>Monteringssted <span style={{ fontWeight: 400, opacity: 0.6 }}>(valgfritt)</span></label>
                    <input name="bilde_monteringssted" type="file" accept="image/*" className="file-input" />
                    <span className="file-hint">Der du ønsker laderen montert</span>
                  </div>
                </div>
              )}

              <div className="form-field">
                <label htmlFor="bm-epost">E-post</label>
                <input id="bm-epost" name="epost" type="email" placeholder="din@epost.no" required />
              </div>

              <div className="form-field">
                <label htmlFor="bm-adresse">Adresse / område</label>
                <input id="bm-adresse" name="adresse" type="text" placeholder="F.eks. Sandvika, Bærum" />
              </div>

              <div className="form-field">
                <label htmlFor="bm-notat">Beskriv jobben</label>
                <textarea id="bm-notat" name="notat" rows={3} placeholder="Hva skal gjøres? Beskriv gjerne omfang, rom, eller annet som er relevant." required />
              </div>

              <button type="submit" className="btn btn-red form-submit" disabled={laster}>
                {laster ? 'Sender…' : 'Send forespørsel'} <span className="arr">→</span>
              </button>
              <p className="form-fine">Gratis og uforpliktende · Ingen faktura for befaring</p>
            </form>
          </>
        ) : (
          <div className="bm-calendar">
            <p className="bm-title" style={{ marginBottom: 4 }}>Forespørsel mottatt — velg et tidspunkt</p>
            <p className="bm-sub" style={{ marginBottom: 16 }}>Får du ikke valgt nå, ringer vi deg uansett innen 1 time.</p>
            <iframe
              src={KALENDER_URL}
              title="Book tidspunkt"
              className="bm-iframe"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </div>,
    document.body
  )
}
