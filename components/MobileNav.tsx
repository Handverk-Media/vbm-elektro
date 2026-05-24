'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const SECTIONS = [
  { label: 'Tjenester', id: 'tjenester' },
  { label: 'Priser', id: 'priser' },
  { label: 'Slik gjør vi det', id: 'prosess' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Kontakt', id: 'kontakt' },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  function handleSectionClick(e: React.MouseEvent, id: string) {
    if (isHome) {
      e.preventDefault()
      close()
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      close()
    }
  }

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
              {SECTIONS.map(({ label, id }) => (
                <a
                  key={id}
                  href={`/#${id}`}
                  onClick={(e) => handleSectionClick(e, id)}
                >
                  {label}
                </a>
              ))}
              <a href="/blogg" onClick={close}>Blogg</a>
              <a href="/om-oss" onClick={close}>Om oss</a>
            </nav>

            <div className="mobile-nav-cta">
              <a href="tel:90633118" className="mobile-phone" onClick={close}>
                <span className="pulse" />
                90 63 31 18
              </a>
              <a
                href="/#kontakt"
                className="btn btn-red"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={(e) => handleSectionClick(e, 'kontakt')}
              >
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
