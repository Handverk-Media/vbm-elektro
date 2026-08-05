'use client'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ContactForm } from './ContactForm'

interface Props {
  open: boolean
  onClose: () => void
}

export function TilbudModal({ open, onClose }: Props) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      document.body.classList.add('modal-open')
    } else {
      document.body.style.overflow = ''
      document.body.classList.remove('modal-open')
    }
    return () => {
      document.body.style.overflow = ''
      document.body.classList.remove('modal-open')
    }
  }, [open])

  if (!open || !mounted) return null

  return createPortal(
    <div className="bm-overlay" onClick={onClose}>
      <div className="bm-panel" role="dialog" aria-modal="true" aria-label="Be om tilbud" onClick={e => e.stopPropagation()}>
        <button className="bm-close" onClick={onClose} aria-label="Lukk">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="bm-head">
          <p className="bm-title">Be om tilbud</p>
          <p className="bm-sub">Fortell oss hva du trenger — vi svarer innen 1 time</p>
        </div>

        <ContactForm variant="plain" idPrefix="tilbud-" />
      </div>
    </div>,
    document.body
  )
}
