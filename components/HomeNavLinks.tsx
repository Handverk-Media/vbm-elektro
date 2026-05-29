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
  return (
    <div className="nav-links">
      {NAV_SECTIONS.map(({ label, id }) => (
        <button key={id} onClick={() => scrollTo(id)}>{label}</button>
      ))}
      <a href="/kontakt">Kontakt</a>
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
