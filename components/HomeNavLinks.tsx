'use client'
import type { CSSProperties, ReactNode } from 'react'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const NAV_SECTIONS = [
  { label: 'Tjenester', id: 'tjenester' },
  { label: 'Priser', id: 'priser' },
  { label: 'Slik gjør vi det', id: 'prosess' },
  { label: 'FAQ', id: 'faq' },
]

export function HomeNavLinks() {
  const isHome = typeof window !== 'undefined' && window.location.pathname === '/'

  return (
    <div className="nav-links">
      {NAV_SECTIONS.map(({ label, id }) =>
        isHome ? (
          <button key={id} onClick={() => scrollTo(id)}>{label}</button>
        ) : (
          <a key={id} href={`/#${id}`}>{label}</a>
        )
      )}
      <a href="/kontakt">Kontakt</a>
      <a href="/befaring">Befaring</a>
      <a href="/blogg">Blogg</a>
    </div>
  )
}

export function ScrollLink({
  id,
  className,
  style,
  children,
}: {
  id: string
  className?: string
  style?: CSSProperties
  children: ReactNode
}) {
  return (
    <button className={className} style={style} onClick={() => scrollTo(id)}>
      {children}
    </button>
  )
}
