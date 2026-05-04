"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"
import { Logo } from "./Logo"
import { VBM } from "@/lib/vbm"

const navLinks = [
  { href: "#tjenester", label: "Tjenester" },
  { href: "#om-oss", label: "Hvorfor VBM" },
  { href: "#kontakt", label: "Kontakt" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? "bg-white shadow-sm" : "bg-coal"}`}>
      <div className="container-vbm h-16 flex items-center justify-between">
        <Link href="/" aria-label="VBM Elektro — hjem">
          <Logo size="sm" dark={!scrolled} />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-body-sm font-medium transition-colors ${scrolled ? "text-steel hover:text-coal" : "text-white/80 hover:text-white"}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={VBM.phoneHref}
            className={`flex items-center gap-2 text-body-sm font-semibold transition-colors ${scrolled ? "text-coal hover:text-brand" : "text-white hover:text-brand"}`}
          >
            <Phone className="w-4 h-4" />
            {VBM.phone}
          </a>
          <a href={VBM.phoneHref} className="bg-brand text-white text-body-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand/90 transition-colors">
            Ring oss
          </a>
        </div>

        <button
          className={`md:hidden p-2 -mr-2 ${scrolled ? "text-coal" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Lukk meny" : "Åpne meny"}
          aria-expanded={open}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-surface px-6 py-6 flex flex-col gap-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-body font-medium text-coal" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>
          <a href={VBM.phoneHref} className="flex items-center justify-center gap-2 bg-brand text-white font-semibold py-4 rounded-md text-body">
            <Phone className="w-5 h-5" />
            Ring {VBM.phone}
          </a>
        </div>
      )}
    </header>
  )
}
