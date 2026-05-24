'use client'
import { useState, useEffect } from 'react'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <button
        className="nav-mobile-toggle"
        onClick={() => setOpen(true)}
        aria-label="Åpne meny"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <>
          <div className="mobile-overlay" onClick={close} />
          <div className="mobile-panel">
            <div className="mobile-panel-head">
              <a href="/" className="logo" onClick={close}>
                <svg width="22" height="30" viewBox="0 0 175 340" aria-hidden="true">
                  <path d="M 60 0 L 130 0 L 100 130 L 165 130 L 40 340 L 95 195 L 10 195 Z" fill="#1A1A1A" />
                </svg>
                <div className="marks">
                  <span className="name">VBM</span>
                  <div className="div" />
                  <span className="sub">Elektro AS</span>
                </div>
              </a>
              <button className="mobile-close" onClick={close} aria-label="Lukk meny">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="mobile-nav-links">
              <a href="/#tjenester" onClick={close}>Tjenester</a>
              <a href="/#priser" onClick={close}>Priser</a>
              <a href="/#prosess" onClick={close}>Slik gjør vi det</a>
              <a href="/#faq" onClick={close}>FAQ</a>
              <a href="/#kontakt" onClick={close}>Kontakt</a>
            </nav>

            <div className="mobile-nav-cta">
              <a href="tel:90633118" className="mobile-phone" onClick={close}>
                <span className="pulse" />
                90 63 31 18
              </a>
              <a href="/#kontakt" className="btn btn-red" style={{ width: '100%', justifyContent: 'center' }} onClick={close}>
                Få tilbud <span className="arr">→</span>
              </a>
              <a href="/book" className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }} onClick={close}>
                Gratis Befaring
              </a>
            </div>
          </div>
        </>
      )}
    </>
  )
}
