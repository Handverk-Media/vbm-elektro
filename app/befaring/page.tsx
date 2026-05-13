"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BEDRIFT } from "@/data/bedrift"

const KALENDER_URL = "https://api.leadconnectorhq.com/widget/bookings/vbmelektro"

function Bolt({ className = "w-5 h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 177 352" fill="currentColor" aria-hidden className={className}>
      <polygon points="148.63,0.48 103.24,139.95 177.14,139.95 27.66,351.9 72.66,194.79 0,194.79 36.62,0.48" />
    </svg>
  )
}

function Check() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#E1342B] flex-shrink-0">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
    </svg>
  )
}

function Star() {
  return (
    <svg viewBox="0 0 20 20" fill="#E1342B" className="w-4 h-4">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function ArrowRight({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
    </svg>
  )
}

function ArrowDown({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" />
    </svg>
  )
}

// ── Lead form — collects info then sends to calendar ──────────────────────────

function BefaringForm() {
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-semibold mb-1.5 block" style={{ color: "#6b6b6b" }}>Navn *</label>
          <input
            name="navn"
            type="text"
            required
            placeholder="Ola Nordmann"
            className="w-full bg-[#F7F6F3] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E1342B]/25"
            style={{ color: "#1a1a1a" }}
          />
        </div>
        <div>
          <label className="text-xs font-semibold mb-1.5 block" style={{ color: "#6b6b6b" }}>Telefon *</label>
          <input
            name="telefon"
            type="tel"
            required
            placeholder="900 00 000"
            className="w-full bg-[#F7F6F3] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E1342B]/25"
            style={{ color: "#1a1a1a" }}
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-semibold mb-1.5 block" style={{ color: "#6b6b6b" }}>Hva gjelder befaringen? *</label>
        <select
          name="tjeneste"
          required
          defaultValue=""
          className="w-full bg-[#F7F6F3] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E1342B]/25 appearance-none cursor-pointer"
          style={{
            color: "#1a1a1a",
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
        <label className="text-xs font-semibold mb-1.5 block" style={{ color: "#6b6b6b" }}>Adresse / område</label>
        <input
          name="adresse"
          type="text"
          placeholder="F.eks. Sandvika, Bærum"
          className="w-full bg-[#F7F6F3] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E1342B]/25"
          style={{ color: "#1a1a1a" }}
        />
      </div>

      <button
        type="submit"
        disabled={laster}
        className="w-full bg-[#E1342B] text-white font-bold py-4 rounded-lg hover:bg-[#c42d24] transition-colors flex items-center justify-center gap-2 text-base disabled:opacity-60"
      >
        {laster ? "Sender…" : "Velg tidspunkt for befaring"}
        {!laster && <ArrowRight />}
      </button>

      <p className="text-xs text-center" style={{ color: "#6b6b6b" }}>
        Gratis og uforpliktende · Du velger tid i neste steg
      </p>
    </form>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BefaringPage() {
  return (
    <div className="min-h-screen bg-[#F7F6F3]">

      {/* ── Header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F6F3]/95 backdrop-blur-sm border-b border-[#EEEDE8]">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.svg" alt="VBM Elektro" width={110} height={44} priority />
          </Link>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${BEDRIFT.telefon.replace(/\s/g, "")}`}
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold hover:text-[#E1342B] transition-colors"
              style={{ color: "#1a1a1a" }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.9 10.9a19.79 19.79 0 01-3.07-8.68A2 2 0 012.83 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l.98-.98a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              {BEDRIFT.telefon}
            </a>
            <a
              href={KALENDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#E1342B] text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-[#c42d24] transition-colors"
            >
              Book befaring
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero med form ── */}
      <section className="pt-16 bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 177 352" fill="white" className="h-full w-auto">
            <polygon points="148.63,0.48 103.24,139.95 177.14,139.95 27.66,351.9 72.66,194.79 0,194.79 36.62,0.48" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left — copy */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Bolt className="w-[10px] h-5 text-[#E1342B]" />
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Gratis · Uforpliktende · Bærum og Oslo
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-[1.04] tracking-tight text-white mb-6">
                Få en elektriker<br />
                <span style={{ color: "#E1342B" }}>hjem til deg.</span><br />
                Gratis.
              </h1>

              <p className="text-lg leading-relaxed mb-8 max-w-md" style={{ color: "rgba(255,255,255,0.5)" }}>
                Vi kommer på befaring, vurderer jobben og gir deg fast pris —
                helt uten forpliktelser.
              </p>

              <div className="flex flex-col gap-3">
                {[
                  "Autorisert elektriker på befaring",
                  "Skriftlig fast pris samme dag",
                  "Ingen forpliktelser — du bestemmer",
                  "Tilbakering innen 1 time",
                ].map((t) => (
                  <span key={t} className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                    <Check />
                    <span style={{ color: "rgba(255,255,255,0.5)" }}>{t}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-[#EEEDE8] rounded-2xl p-8">
              <div className="mb-6">
                <p className="font-bold text-lg mb-1" style={{ color: "#1a1a1a" }}>Book gratis befaring</p>
                <p className="text-sm" style={{ color: "#6b6b6b" }}>Fyll inn info — velg tid i neste steg</p>
              </div>
              <BefaringForm />
            </div>
          </div>
        </div>

        <div className="h-[3px] w-full bg-[#E1342B]" />
      </section>

      {/* ── Social proof ── */}
      <section className="bg-[#EEEDE8] py-6 border-b border-[#1A1A1A]/5">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex">{[1,2,3,4,5].map(i => <Star key={i} />)}</div>
            <span style={{ color: "#1a1a1a" }} className="font-semibold text-sm">5,0 på Google</span>
          </div>
          <div className="flex flex-wrap gap-8 text-sm">
            {[
              { num: "200+", label: "befaringer gjennomført" },
              { num: "< 1t", label: "tilbakering" },
              { num: "100%", label: "autorisert utførelse" },
            ].map((s) => (
              <div key={s.label} className="flex items-baseline gap-2">
                <span className="text-2xl font-bold" style={{ color: "#E1342B" }}>{s.num}</span>
                <span className="text-xs" style={{ color: "#6b6b6b" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hvorfor befaring ── */}
      <section className="py-20 bg-[#F7F6F3]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 style={{ color: "#1a1a1a" }} className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Hvorfor booke en befaring?
            </h2>
            <p style={{ color: "#6b6b6b" }} className="text-lg max-w-md mx-auto">
              En befaring tar 20–30 minutter og gir deg et konkret tilbud du kan stole på.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "01", tittel: "Fast pris på stedet", tekst: "Vi ser jobben med egne øyne og gir deg en skriftlig pris samme dag. Ingen skjulte kostnader." },
              { num: "02", tittel: "Riktig løsning", tekst: "Hvert hus er forskjellig. Vi finner den beste og mest kostnadseffektive løsningen for akkurat ditt anlegg." },
              { num: "03", tittel: "Gratis og uforpliktende", tekst: "Du takker ja eller nei — ingen press. Befaringen er alltid gratis uansett hva du bestemmer deg for." },
            ].map((k) => (
              <div key={k.num} className="bg-[#EEEDE8] rounded-xl p-8">
                <div className="font-bold text-xs tracking-widest mb-5" style={{ color: "#E1342B" }}>{k.num}</div>
                <h3 style={{ color: "#1a1a1a" }} className="font-bold text-lg mb-3">{k.tittel}</h3>
                <p style={{ color: "#6b6b6b" }} className="text-sm leading-relaxed">{k.tekst}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#skjema"
              onClick={(e) => { e.preventDefault(); document.querySelector("form")?.scrollIntoView({ behavior: "smooth" }) }}
              className="inline-flex items-center gap-2 bg-[#E1342B] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#c42d24] transition-colors text-lg cursor-pointer"
            >
              Book gratis befaring nå
              <ArrowRight />
            </a>
            <p style={{ color: "#6b6b6b" }} className="text-sm mt-3">Gratis · Uforpliktende · Du velger tid i neste steg</p>
          </div>
        </div>
      </section>

      {/* ── Hva vi befarer ── */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8">Vi befarer alle typer oppdrag</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
            {[
              "Elbillader-installasjon",
              "Sikringsskap og kursoppgradering",
              "Bad- og kjøkkenrenovering",
              "Smarthus og styringssystemer",
              "Nye stikkontakter og punkter",
              "Elkontroll og feilsøking",
              "Næringsbygg og kontor",
              "Nybygg og tilbygg",
              "Varmekabel og energiløsninger",
            ].map((t) => (
              <div key={t} className="flex items-center gap-3 bg-white/[0.04] rounded-lg px-4 py-3">
                <Bolt className="w-[7px] h-3.5 text-[#E1342B] flex-shrink-0" />
                <span style={{ color: "rgba(255,255,255,0.7)" }} className="text-sm">{t}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <a
              href={KALENDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E1342B] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#c42d24] transition-colors"
            >
              Book befaring
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ── Slik fungerer det ── */}
      <section className="py-20 bg-[#EEEDE8]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 style={{ color: "#1a1a1a" }} className="text-3xl font-bold tracking-tight mb-12 text-center">
            Slik fungerer det
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {[
              { n: "1", t: "Fyll ut skjema", b: "Navn, telefon og hva du trenger hjelp med — tar 30 sekunder" },
              { n: "2", t: "Velg tidspunkt", b: "Du sendes videre til kalenderen og velger tid som passer deg" },
              { n: "3", t: "Vi bekrefter", b: "SMS-bekreftelse med dato, tid og hvem som kommer" },
              { n: "4", t: "Fast pristilbud", b: "Elektriker på befaring. Skriftlig tilbud samme dag" },
            ].map((s, i) => (
              <div key={s.n} className="relative flex flex-col items-center text-center">
                {i < 3 && (
                  <div className="hidden md:block absolute top-6 left-[calc(50%+28px)] right-[-50%] h-px bg-[#1A1A1A]/10" />
                )}
                <div className="w-12 h-12 rounded-full bg-[#E1342B] flex items-center justify-center text-white font-bold mb-4 relative z-10">
                  {s.n}
                </div>
                <p style={{ color: "#1a1a1a" }} className="font-bold text-sm mb-2">{s.t}</p>
                <p style={{ color: "#6b6b6b" }} className="text-xs leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={KALENDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#333] transition-colors text-lg"
            >
              Velg tidspunkt nå
              <ArrowDown />
            </a>
          </div>
        </div>
      </section>

      {/* ── Anmeldelser ── */}
      <section className="bg-[#F7F6F3] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex">{[1,2,3,4,5].map(i => <Star key={i} />)}</div>
            <span style={{ color: "#6b6b6b" }} className="text-sm">5,0 · Google anmeldelser</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { n: "Thomas H.", s: "Bærum", t: "Kom på befaring dagen etter jeg ringte. Ryddig, presis og fast pris. Nøyaktig slik det skal gjøres." },
              { n: "Karin S.", s: "Oslo vest", t: "Endelig en elektriker som svarer! Ringte tilbake innen 30 min og kom på befaring samme uke." },
              { n: "Lars O.", s: "Sandvika", t: "Befaring tok 20 minutter og tilbudet var klart dagen etter. Veldig profesjonelt." },
            ].map((r) => (
              <div key={r.n} className="bg-[#EEEDE8] rounded-xl p-6">
                <div className="flex mb-3">{[1,2,3,4,5].map(i => <Star key={i} />)}</div>
                <p style={{ color: "#1a1a1a" }} className="text-sm leading-relaxed mb-4">"{r.t}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white text-xs font-bold">{r.n[0]}</div>
                  <div>
                    <p style={{ color: "#1a1a1a" }} className="font-semibold text-xs">{r.n}</p>
                    <p style={{ color: "#6b6b6b" }} className="text-xs">{r.s}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={KALENDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E1342B] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#c42d24] transition-colors text-lg"
            >
              Book gratis befaring
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ── Ring oss ── */}
      <section className="bg-[#E1342B] py-14">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-2xl md:text-3xl tracking-tight">Foretrekker du å ringe?</p>
            <p style={{ color: "rgba(255,255,255,0.7)" }} className="mt-1">Vi tar telefonen — hverdager 07:00–16:00</p>
          </div>
          <a
            href={`tel:${BEDRIFT.telefon.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-3 bg-white font-bold text-xl px-8 py-4 rounded-lg hover:bg-[#f5f4f2] transition-colors"
            style={{ color: "#E1342B" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.9 10.9a19.79 19.79 0 01-3.07-8.68A2 2 0 012.83 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l.98-.98a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            {BEDRIFT.telefon}
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#1A1A1A] py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span style={{ color: "rgba(255,255,255,0.25)" }}>© {new Date().getFullYear()} {BEDRIFT.navn} · Org.nr {BEDRIFT.orgnr}</span>
          <div className="flex gap-5">
            <Link href="/personvern" style={{ color: "rgba(255,255,255,0.25)" }} className="hover:text-white/60 transition-colors">Personvern</Link>
            <Link href="/" style={{ color: "rgba(255,255,255,0.25)" }} className="hover:text-white/60 transition-colors">Tilbake til forsiden</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
