'use client'
import type { CSSProperties, ReactNode } from 'react'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const NAV_LINKS = [
  { label: 'Tjenester', href: '/tjenester' },
  { label: 'Priser', href: '/priser' },
  { label: 'Slik gjør vi det', href: '/slik-gjor-vi-det' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'Befaring', href: '/befaring' },
  { label: 'Blogg', href: '/blogg' },
]

export function HomeNavLinks() {
  return (
    <div className="nav-links">
      {NAV_LINKS.map(({ label, href }) => (
        <a key={href} href={href}>{label}</a>
      ))}
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
