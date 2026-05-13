"use client"

import type { Metadata } from "next"
import Link from "next/link"
import { useState } from "react"
import { BEDRIFT } from "@/data/bedrift"

const TEMAER = [
  {
    tittel: "Smarthus og teknologi",
    beskrivelse: "Plejd, KNX, integrert styring og fremtidens bolig. Praktiske tips for smart strømstyring.",
  },
  {
    tittel: "Elbillading og energi",
    beskrivelse: "Nyheter om ladestandarer, solcellepanel, ENØK og hva du bør vite som boligeier.",
  },
  {
    tittel: "Elektrisk sikkerhet",
    beskrivelse: "Hva elkontroll avslører, vanlige feil, og hvordan du beskytter hus og familie.",
  },
  {
    tittel: "Regelverk og dokumentasjon",
    beskrivelse: "NEK 400, samsvarserklæringer og hva du må vite ved salg eller refinansiering av bolig.",
  },
]

export default function NyhetsbrevPage() {
  const [epost, setEpost] = useState("")
  const [sendt, setSendt] = useState(false)
  const [laster, setLaster] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLaster(true)
    await fetch("/api/nyhetsbrev", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ epost }),
    }).catch(() => {})
    setLaster(false)
    setSendt(true)
  }

  return (
    <div className="min-h-screen bg-[#F7F6F3]">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors mb-12"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" />
          </svg>
          Tilbake til forsiden
        </Link>

        <div className="mb-4 flex items-center gap-2">
          <svg viewBox="0 0 177 352" fill="currentColor" className="w-[10px] h-5 text-[#E1342B]">
            <polygon points="148.63,0.48 103.24,139.95 177.14,139.95 27.66,351.9 72.66,194.79 0,194.79 36.62,0.48" />
          </svg>
          <span className="text-xs font-semibold text-[#6B6B6B] tracking-widest uppercase">El-innsikt ukentlig</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] mb-4">
          Hold deg oppdatert på<br className="hidden md:block" /> elektrisk teknologi
        </h1>
        <div className="w-12 h-[3px] bg-[#E1342B] mb-6" />
        <p className="text-lg text-[#6B6B6B] leading-relaxed max-w-xl mb-12">
          Én e-post i uken. Praktiske tips om smarthus, elbillading, sikkerhet og
          regelverk – rett fra oss som jobber med det daglig.
        </p>

        {/* Signup card */}
        <div className="bg-[#EEEDE8] rounded-2xl p-8 md:p-10 mb-16 max-w-xl">
          {sendt ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 bg-[#E1342B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-[#E1342B]">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Velkommen!</h3>
              <p className="text-[#6B6B6B] text-sm">
                Du er nå påmeldt. Første utgave kommer på fredag.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs text-[#6B6B6B] font-medium mb-1.5 block">
                  Din e-postadresse
                </label>
                <input
                  type="email"
                  required
                  value={epost}
                  onChange={(e) => setEpost(e.target.value)}
                  placeholder="din@epost.no"
                  className="w-full bg-[#F7F6F3] rounded-lg px-4 py-3 text-[#1A1A1A] placeholder:text-[#6B6B6B]/60 focus:outline-none focus:ring-2 focus:ring-[#E1342B]/25 text-sm"
                />
              </div>
              <button
                type="submit"
                disabled={laster}
                className="w-full bg-[#E1342B] text-white font-semibold py-3.5 rounded-lg hover:bg-[#c42d24] transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {laster ? "Melder på…" : "Meld meg på – gratis"}
                {!laster && (
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
                  </svg>
                )}
              </button>
              <p className="text-xs text-[#6B6B6B] text-center">
                Ingen spam. Avmelding med ett klikk.{" "}
                <Link href="/personvern" className="underline hover:text-[#1A1A1A]">Personvern</Link>.
              </p>
            </form>
          )}
        </div>

        {/* Topics */}
        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8">Hva skriver vi om?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {TEMAER.map((t) => (
            <div key={t.tittel} className="bg-[#EEEDE8] rounded-xl p-6">
              <div className="w-8 h-[3px] bg-[#E1342B] mb-4" />
              <h3 className="font-bold text-[#1A1A1A] mb-2">{t.tittel}</h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">{t.beskrivelse}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-[#EEEDE8] pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[#6B6B6B] text-sm">Utgitt av {BEDRIFT.navn} · {BEDRIFT.adresse}</p>
          <Link href="/personvern" className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors underline">
            Personvernerklæring
          </Link>
        </div>
      </div>
    </div>
  )
}
