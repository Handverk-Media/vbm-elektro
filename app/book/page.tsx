"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BEDRIFT } from "@/data/bedrift"

const KALENDER_URL = "https://api.leadconnectorhq.com/widget/bookings/vbmelektro"

export default function BookPage() {
  const [laster, setLaster] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLaster(true)
    const fd = new FormData(e.currentTarget)
    await fetch("/api/befaring-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(fd)),
    }).catch(() => {})
    window.location.href = KALENDER_URL
  }

  return (
    <div className="min-h-screen bg-[#F7F6F3]">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#F7F6F3]/95 backdrop-blur-sm border-b border-[#EEEDE8]">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.svg" alt="VBM Elektro" width={120} height={48} priority />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" />
            </svg>
            Tilbake
          </Link>
        </div>
      </header>

      {/* Form */}
      <div className="pt-32 pb-20 px-6 flex justify-center">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <svg viewBox="0 0 177 352" fill="currentColor" className="w-[8px] h-4 text-[#E1342B]">
                <polygon points="148.63,0.48 103.24,139.95 177.14,139.95 27.66,351.9 72.66,194.79 0,194.79 36.62,0.48" />
              </svg>
              <span className="text-xs font-semibold text-[#6B6B6B] tracking-widest uppercase">Gratis · Uforpliktende</span>
            </div>
            <h1 className="text-3xl font-bold text-[#1A1A1A] tracking-tight mb-2">Book befaring</h1>
            <p className="text-[#6B6B6B] text-sm">Fyll inn info — velg tid i neste steg</p>
          </div>

          <div className="bg-[#EEEDE8] rounded-2xl p-7">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-[#6B6B6B] mb-1.5 block">Navn *</label>
                  <input
                    name="navn"
                    type="text"
                    required
                    placeholder="Ola Nordmann"
                    className="w-full bg-[#F7F6F3] rounded-lg px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B6B6B]/50 focus:outline-none focus:ring-2 focus:ring-[#E1342B]/20"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#6B6B6B] mb-1.5 block">Telefon *</label>
                  <input
                    name="telefon"
                    type="tel"
                    required
                    placeholder="900 00 000"
                    className="w-full bg-[#F7F6F3] rounded-lg px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B6B6B]/50 focus:outline-none focus:ring-2 focus:ring-[#E1342B]/20"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#6B6B6B] mb-1.5 block">Hva gjelder det? *</label>
                <select
                  name="tjeneste"
                  required
                  defaultValue=""
                  className="w-full bg-[#F7F6F3] rounded-lg px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#E1342B]/20 appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236B6B6B' stroke-width='2'%3E%3Cpath d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 14px center",
                    backgroundSize: "16px",
                  }}
                >
                  <option value="" disabled>Velg type oppdrag…</option>
                  <option value="Elbillader">Elbillader-installasjon</option>
                  <option value="El-anlegg">El-anlegg og sikringsskap</option>
                  <option value="Renovering">Bad- og kjøkkenrenovering</option>
                  <option value="Smarthus">Smarthus og styringssystemer</option>
                  <option value="Montering">Montering av punkter og lamper</option>
                  <option value="Elkontroll">Elkontroll og feilsøking</option>
                  <option value="Næringsbygg">Næringsbygg og kontor</option>
                  <option value="Nybygg">Nybygg og tilbygg</option>
                  <option value="Annet">Annet</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#6B6B6B] mb-1.5 block">Adresse / område</label>
                <input
                  name="adresse"
                  type="text"
                  placeholder="F.eks. Sandvika, Bærum"
                  className="w-full bg-[#F7F6F3] rounded-lg px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B6B6B]/50 focus:outline-none focus:ring-2 focus:ring-[#E1342B]/20"
                />
              </div>

              <button
                type="submit"
                disabled={laster}
                className="w-full bg-[#E1342B] text-white font-bold py-4 rounded-lg hover:bg-[#c42d24] transition-colors flex items-center justify-center gap-2 text-base disabled:opacity-60"
              >
                {laster ? "Sender…" : "Velg tidspunkt"}
                {!laster && (
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
                  </svg>
                )}
              </button>

              <p className="text-xs text-[#6B6B6B] text-center">
                Gratis og uforpliktende · Du velger tid i neste steg
              </p>
            </form>
          </div>

          <div className="mt-6 text-center text-sm text-[#6B6B6B]">
            Foretrekker å ringe?{" "}
            <a href={`tel:${BEDRIFT.telefon.replace(/\s/g, "")}`} className="font-semibold text-[#1A1A1A] hover:text-[#E1342B] transition-colors">
              {BEDRIFT.telefon}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
