"use client"

import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/context/CartContext"
import { BEDRIFT } from "@/data/bedrift"

const NAV_LINKS = [
  { label: "Tjenester", id: "tjenester" },
  { label: "Priser", id: "priser" },
  { label: "Slik gjør vi det", id: "prosess" },
  { label: "FAQ", id: "faq" },
  { label: "Kontakt", id: "kontakt" },
]

interface Props {
  homePage?: boolean
}

export function SiteHeader({ homePage = false }: Props) {
  const { antall, setÅpen } = useCart()

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="site-header">
      <div className="sh-inner">
        <Link
          href="/"
          onClick={homePage ? (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }) } : undefined}
        >
          <Image src="/logo.svg" alt="VBM Elektro" width={120} height={48} priority />
        </Link>

        <nav className="sh-nav">
          {NAV_LINKS.map(({ label, id }) =>
            homePage ? (
              <button key={id} onClick={() => scrollTo(id)}>{label}</button>
            ) : (
              <Link key={id} href={`/#${id}`}>{label}</Link>
            )
          )}
          <Link href="/blogg">Blogg</Link>
        </nav>

        <div className="sh-right">
          <a href={`tel:${BEDRIFT.telefon.replace(/\s/g, "")}`} className="sh-phone">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.9 10.9a19.79 19.79 0 01-3.07-8.68A2 2 0 012.83 0h3a2 2 0 012 1.72c.128.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l.98-.98a2 2 0 012.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            {BEDRIFT.telefon}
          </a>

          <button className="sh-cart" onClick={() => setÅpen(true)} aria-label="Åpne handlekurv">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {antall > 0 && <span className="sh-cart-badge">{antall}</span>}
          </button>

          <a href={homePage ? "#kontakt" : "/#kontakt"} onClick={homePage ? (e) => { e.preventDefault(); scrollTo("kontakt") } : undefined} className="sh-book">
            Book befaring
          </a>

          <a href={homePage ? "#kontakt" : "/#kontakt"} onClick={homePage ? (e) => { e.preventDefault(); scrollTo("kontakt") } : undefined} className="sh-offer">
            Få tilbud
          </a>
        </div>
      </div>
    </header>
  )
}
