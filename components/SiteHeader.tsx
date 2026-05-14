"use client"

import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/context/CartContext"
import { BEDRIFT } from "@/data/bedrift"

const NAV_LINKS = [
  { label: "Tjenester", id: "tjenester" },
  { label: "Elbillader", id: "elbillader" },
  { label: "Slik fungerer det", id: "prosess" },
  { label: "Kontakt", id: "kontakt" },
]

interface Props {
  /** true on the homepage where scrollIntoView works */
  homePage?: boolean
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.9 10.9a19.79 19.79 0 01-3.07-8.68A2 2 0 012.83 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l.98-.98a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}

function CartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  )
}

export function SiteHeader({ homePage = false }: Props) {
  const { antall, setÅpen } = useCart()

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#F7F6F3]/95 backdrop-blur-sm border-b border-[#EEEDE8]">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={homePage ? (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }) } : undefined}
          className="flex-shrink-0"
        >
          <Image src="/logo.svg" alt="VBM Elektro" width={130} height={52} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#1A1A1A]">
          {NAV_LINKS.map(({ label, id }) =>
            homePage ? (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="hover:text-[#E1342B] transition-colors cursor-pointer"
              >
                {label}
              </button>
            ) : (
              <Link key={id} href={`/#${id}`} className="hover:text-[#E1342B] transition-colors">
                {label}
              </Link>
            )
          )}
          <Link href="/blogg" className="hover:text-[#E1342B] transition-colors">Blogg</Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <a
            href={`tel:${BEDRIFT.telefon.replace(/\s/g, "")}`}
            className="hidden md:flex items-center gap-2 text-sm font-semibold text-[#1A1A1A] hover:text-[#E1342B] transition-colors mr-2"
          >
            <PhoneIcon className="w-4 h-4" />
            {BEDRIFT.telefon}
          </a>

          <button
            onClick={() => setÅpen(true)}
            className="relative p-2 text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors"
            aria-label="Åpne handlekurv"
          >
            <CartIcon className="w-5 h-5" />
            {antall > 0 && (
              <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#E1342B] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {antall}
              </span>
            )}
          </button>

          <a
            href={homePage ? "#kontakt" : "/#kontakt"}
            onClick={homePage ? (e) => { e.preventDefault(); scrollTo("kontakt") } : undefined}
            className="hidden md:inline-flex items-center bg-[#1A1A1A] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#333] transition-colors"
          >
            Book befaring
          </a>

          <a
            href={homePage ? "#kontakt" : "/#kontakt"}
            onClick={homePage ? (e) => { e.preventDefault(); scrollTo("kontakt") } : undefined}
            className="bg-[#E1342B] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#c42d24] transition-colors"
          >
            Få tilbud
          </a>
        </div>
      </div>
    </header>
  )
}
