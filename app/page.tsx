"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { TJENESTER } from "@/data/priser"
import { BEDRIFT } from "@/data/bedrift"
import { useCart } from "@/context/CartContext"

// ── Brand icons ──────────────────────────────────────────────────────────────

function Bolt({ className = "w-5 h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 177 352" fill="currentColor" aria-hidden className={className}>
      <polygon points="148.63,0.48 103.24,139.95 177.14,139.95 27.66,351.9 72.66,194.79 0,194.79 36.62,0.48" />
    </svg>
  )
}

function RedStripe() {
  return <div className="h-[3px] w-full bg-[#E1342B]" aria-hidden />
}

// ── Nav ──────────────────────────────────────────────────────────────────────

function Nav() {
  const { antall, setÅpen } = useCart()

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#F7F6F3]/95 backdrop-blur-sm border-b border-[#EEEDE8]">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image src="/logo.svg" alt="VBM Elektro" width={130} height={52} priority />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#1A1A1A]">
          {[
            { label: "Tjenester", id: "tjenester" },
            { label: "Elbillader", id: "elbillader" },
            { label: "Slik fungerer det", id: "prosess" },
            { label: "Kontakt", id: "kontakt" },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-[#E1342B] transition-colors cursor-pointer"
            >
              {label}
            </button>
          ))}
        </nav>

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
            href="/book"
            className="hidden md:inline-flex items-center bg-[#1A1A1A] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#333] transition-colors"
          >
            Book befaring
          </a>

          <a
            href="#kontakt"
            className="bg-[#E1342B] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#c42d24] transition-colors"
          >
            Få tilbud
          </a>
        </div>
      </div>
    </header>
  )
}

// ── Sticky mobile bar ────────────────────────────────────────────────────────

function StickyMobileBar() {
  const { antall, setÅpen } = useCart()
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1A1A1A] border-t border-white/10 flex">
      <a
        href={`tel:${BEDRIFT.telefon.replace(/\s/g, "")}`}
        className="flex-1 flex flex-col items-center justify-center py-3 text-white/70 hover:text-white transition-colors text-xs gap-1"
      >
        <PhoneIcon className="w-5 h-5" />
        Ring
      </a>
      <button
        onClick={() => setÅpen(true)}
        className="flex-1 flex flex-col items-center justify-center py-3 text-white/70 hover:text-white transition-colors text-xs gap-1 border-x border-white/10 relative"
      >
        <CartIcon className="w-5 h-5" />
        {antall > 0 && (
          <span className="absolute top-2 right-[calc(50%-14px)] w-4 h-4 bg-[#E1342B] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
            {antall}
          </span>
        )}
        Bestill
      </button>
      <a
        href="#kontakt"
        className="flex-1 flex flex-col items-center justify-center py-3 bg-[#E1342B] text-white text-xs gap-1 font-semibold"
      >
        <Bolt className="w-3 h-6" />
        Få tilbud
      </a>
    </div>
  )
}

// ── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#F7F6F3]">
      <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 text-[#1A1A1A]/[0.04] pointer-events-none select-none">
        <svg viewBox="0 0 177 352" fill="currentColor" className="w-[480px] h-[960px]">
          <polygon points="148.63,0.48 103.24,139.95 177.14,139.95 27.66,351.9 72.66,194.79 0,194.79 36.62,0.48" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-10 pb-24 relative z-10 w-full">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-8">
            <Bolt className="w-[10px] h-5 text-[#E1342B]" />
            <span className="text-xs font-semibold text-[#6B6B6B] tracking-widest uppercase">
              Autorisert elektriker · Bærum, Oslo og Asker
            </span>
          </div>

          <h1 className="text-[36px] sm:text-5xl md:text-[68px] font-bold leading-[1.04] tracking-tight text-[#1A1A1A] mb-6">
            Elektrikerarbeid gjort ryddig.
          </h1>

          <div className="w-14 h-[3px] bg-[#E1342B] mb-8" />

          <p className="text-lg text-[#6B6B6B] leading-relaxed mb-10 max-w-[480px]">
            VBM Elektro leverer autorisert elektroarbeid for bolig og næring — med
            tydelig kommunikasjon, dokumentasjon og løsninger som faktisk blir fulgt opp.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <a
              href="#kontakt"
              className="bg-[#E1342B] text-white font-semibold px-7 py-3.5 rounded hover:bg-[#c42d24] transition-colors inline-flex items-center justify-center gap-2"
            >
              Få tilbud
              <ArrowIcon className="w-4 h-4" />
            </a>
            <a
              href="/book"
              className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] text-white font-semibold px-7 py-3.5 rounded hover:bg-[#333] transition-colors"
            >
              Book befaring
            </a>
            <a
              href={`tel:${BEDRIFT.telefon.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 text-[#1A1A1A] font-semibold px-7 py-3.5 border border-[#EEEDE8] rounded hover:border-[#1A1A1A]/30 transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              Ring oss
            </a>
          </div>

          <div className="flex flex-wrap gap-6 mt-12 text-sm text-[#6B6B6B]">
            {["NELFO-godkjent", "Autorisert elektriker", "Fast pris – ingen overraskelser"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckIcon className="w-3.5 h-3.5 text-[#E1342B]" />
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-start sm:items-center gap-3 bg-[#EEEDE8] rounded-lg px-5 py-3 text-sm">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-[#E1342B] flex-shrink-0 mt-0.5 sm:mt-0">
              <path d="M15 10l4.553-2.277A1 1 0 0121 8.67v6.66a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
            </svg>
            <div className="flex-1 min-w-0">
              <span className="font-semibold text-[#1A1A1A]">Gratis videobefaring</span>
              <span className="text-[#6B6B6B] ml-1">– vurdering uten oppmøte</span>
            </div>
            <a href="#kontakt" className="text-[#E1342B] font-semibold text-xs whitespace-nowrap hover:underline flex-shrink-0">
              Book nå →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Service category cards ────────────────────────────────────────────────────
// Each card links to /tjenester/[id] — future home of configurator + booking flow

const KATEGORIER = [
  { id: "elbillader", navn: "Elbillader", beskrivelse: "Zaptec, Easee og mer. Installert av autorisert elektriker med dokumentasjon.", icon: <BoltServiceIcon /> },
  { id: "service", navn: "Serviceoppdrag", beskrivelse: "Rask utrykning ved feil, bytting av sikringer og generell service.", icon: <WrenchIcon /> },
  { id: "renovering", navn: "Renovering", beskrivelse: "Nytt el-anlegg ved bad, kjøkken, tilbygg og totalrenovering.", icon: <HouseIcon /> },
  { id: "smarthus", navn: "Smarthus", beskrivelse: "Plejd, dimmer og smartstyring. Boligen din blir enklere å bruke.", icon: <SmartIcon /> },
  { id: "feilsok", navn: "Feilsøking", beskrivelse: "Vi finner og utbedrer elektriske feil raskt og effektivt.", icon: <SearchIcon /> },
  { id: "naring", navn: "Næringsbygg", beskrivelse: "Tekniske installasjoner, HMS-dokumentasjon og driftsavtaler.", icon: <BuildingIcon /> },
]

function Services() {
  return (
    <section id="tjenester" className="bg-[#EEEDE8] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A]">
            Hva trenger du hjelp med?
          </h2>
          <p className="mt-4 text-[#6B6B6B] text-lg max-w-xl">
            VBM Elektro leverer autorisert elektroarbeid for bolig, næring og prosjekt — fra serviceoppdrag og feilsøking til rehabilitering, elbilladere, smarthus og komplette elektriske installasjoner.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {KATEGORIER.map((k) => (
            <a
              key={k.id}
              href="#kontakt"
              className="group bg-[#F7F6F3] rounded-lg p-5 sm:p-8 flex flex-col gap-5 hover:shadow-sm transition-all border border-transparent hover:border-[#E1342B]/15"
            >
              <div className="text-[#6B6B6B] group-hover:text-[#E1342B] transition-colors">
                {k.icon}
              </div>
              <div>
                <h3 className="font-bold text-[#1A1A1A] text-lg mb-1.5">{k.navn}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{k.beskrivelse}</p>
              </div>
              <div className="mt-auto flex items-center gap-1 text-sm font-semibold text-[#1A1A1A] group-hover:text-[#E1342B] transition-colors">
                Få tilbud
                <ArrowIcon className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Price list with quick-add ────────────────────────────────────────────────

function Prisliste() {
  const { leggTil } = useCart()
  const kategorier = [...new Set(TJENESTER.map((t) => t.kategori))]

  return (
    <section className="bg-[#F7F6F3] py-24" id="priser">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <Bolt className="w-[10px] h-5 text-[#E1342B]" />
            <span className="text-xs font-semibold text-[#6B6B6B] tracking-widest uppercase">Fast pris</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A]">
            Tjenester og priser
          </h2>
          <p className="mt-4 text-[#6B6B6B] max-w-md">
            Legg tjenester i forespørselen – vi bekrefter og avtaler tidspunkt.
          </p>
        </div>

        <div className="space-y-12">
          {kategorier.map((kat) => (
            <div key={kat}>
              <h3 className="text-xs font-semibold text-[#6B6B6B] tracking-widest uppercase mb-4">{kat}</h3>
              <div className="space-y-2">
                {TJENESTER.filter((t) => t.kategori === kat).map((t) => (
                  <div key={t.id} className="bg-[#EEEDE8] rounded-lg px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-[#1A1A1A]">{t.navn}</p>
                      <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{t.beskrivelse}</p>
                      {t.varighet && (
                        <p className="text-xs text-[#6B6B6B]/60 mt-1.5 flex items-center gap-1">
                          <ClockIcon className="w-3 h-3" />
                          {t.varighet}
                        </p>
                      )}
                    </div>
                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-3 flex-shrink-0">
                      <div className="text-left sm:text-right">
                        <span className="text-xs text-[#6B6B6B] block">{t.enhet}</span>
                        <span className="font-bold text-[#1A1A1A]">
                          kr {t.pris.toLocaleString("nb-NO")}
                        </span>
                      </div>
                      <button
                        onClick={() => leggTil(t)}
                        className="text-xs font-semibold text-[#E1342B] border border-[#E1342B]/30 hover:bg-[#E1342B] hover:text-white px-3 py-1.5 rounded transition-colors whitespace-nowrap"
                      >
                        + Legg til
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Process ──────────────────────────────────────────────────────────────────

const STEG = [
  { num: "01", tittel: "Send forespørsel", tekst: "Via skjema, chat eller telefon" },
  { num: "02", tittel: "Svar innen få minutter", tekst: "AI-assistenten registrerer saken og sender den videre" },
  { num: "03", tittel: "Pris og avklaring", tekst: "Vi bekrefter løsning, pris og tidspunkt" },
  { num: "04", tittel: "Installasjon", tekst: "Ryddig og dokumentert utførelse" },
  { num: "05", tittel: "Dokumentasjon", tekst: "Samsvarserklæring og ferdig rapport levert" },
]

function Process() {
  return (
    <section id="prosess" className="bg-[#EEEDE8] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A]">
            Slik fungerer det
          </h2>
          <p className="mt-4 text-[#6B6B6B]">Enkelt og forutsigbart – fra start til ferdig.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-3">
          {STEG.map((s, i) => (
            <div key={s.num} className="relative flex flex-col items-start md:items-center md:text-center">
              {i < STEG.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] right-[-50%] h-px bg-[#1A1A1A]/10" />
              )}
              <div className="relative z-10 w-14 h-14 rounded-full bg-[#F7F6F3] flex items-center justify-center mb-4 font-bold text-sm text-[#1A1A1A]">
                {i === 0 ? <span className="text-[#E1342B]">{s.num}</span> : s.num}
              </div>
              <p className="font-bold text-[#1A1A1A] text-sm mb-1">{s.tittel}</p>
              <p className="text-xs text-[#6B6B6B]">{s.tekst}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-[#E1342B] text-white font-semibold px-7 py-3.5 rounded hover:bg-[#c42d24] transition-colors"
          >
            Start prosessen nå
            <ArrowIcon className="w-4 h-4" />
          </a>
          <span className="text-[#6B6B6B] text-sm">Tilbakering innen 1 time · Ingen bindingstid</span>
        </div>
      </div>
    </section>
  )
}

// ── EV Charger ───────────────────────────────────────────────────────────────

const LADER_MERKER = [
  { navn: "Zaptec", beskrivelse: "Norskutviklet, markedsledende" },
  { navn: "Easee", beskrivelse: "Smart og elegant design" },
  { navn: "Futurehome", beskrivelse: "Integrert smarthus-lading" },
  { navn: "Schneider Electric", beskrivelse: "Robust og pålitelig" },
]

function EVCharger() {
  return (
    <section id="elbillader" className="bg-[#F7F6F3] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Bolt className="w-[10px] h-5 text-[#E1342B]" />
              <span className="text-xs font-semibold text-[#6B6B6B] tracking-widest uppercase">Elbillader</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] mb-4">
              Installasjon av elbillader for bolig og næring
            </h2>
            <div className="w-12 h-[3px] bg-[#E1342B] mb-6" />
            <p className="text-[#6B6B6B] text-lg leading-relaxed mb-8">
              Vi hjelper deg med trygg og korrekt installasjon av hjemmelader — inkludert
              dokumentasjon, oppsett og ferdigstillelse utført av autorisert elektriker.
            </p>
            <div className="space-y-3 mb-10">
              {[
                "Montering og idriftsettelse",
                "Tilkobling til sikringsskap",
                "Oppsett og konfigurering",
                "Dokumentasjon og samsvarserklæring",
              ].map((p) => (
                <div key={p} className="flex items-center gap-3 text-[#1A1A1A]">
                  <CheckIcon className="w-4 h-4 text-[#E1342B] flex-shrink-0" />
                  <span className="text-sm font-medium">{p}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/book"
                className="inline-flex items-center justify-center gap-2 bg-[#E1342B] text-white font-semibold px-7 py-3.5 rounded hover:bg-[#c42d24] transition-colors"
              >
                Book installasjon
                <ArrowIcon className="w-4 h-4" />
              </a>
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 text-[#1A1A1A] font-semibold px-7 py-3.5 border border-[#1A1A1A]/20 rounded hover:border-[#1A1A1A]/50 transition-colors"
              >
                Få tilbud på installasjon
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-[#6B6B6B] tracking-widest uppercase mb-6">
              Merker vi installerer
            </p>
            <div className="grid grid-cols-2 gap-3">
              {LADER_MERKER.map((m) => (
                <div key={m.navn} className="bg-[#EEEDE8] rounded-lg p-5">
                  <p className="font-bold text-[#1A1A1A] mb-1">{m.navn}</p>
                  <p className="text-xs text-[#6B6B6B]">{m.beskrivelse}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#6B6B6B] mt-4">
              Har du allerede kjøpt lader? Vi installerer de fleste godkjente modeller.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Trust — THE ONE DARK SECTION ─────────────────────────────────────────────

const TILLIT = [
  { stat: "100%", label: "Autoriserte elektrikere", tekst: "Alt arbeid utføres etter gjeldende forskrifter og NEK-standarder.", icon: <ShieldIcon /> },
  { stat: "NELFO", label: "Registrert bedrift", tekst: "Godkjent elektrobedrift med dokumentert fagkompetanse.", icon: <BadgeIcon /> },
  { stat: "Alt", label: "Dokumentert", tekst: "Samsvarserklæring og nødvendig dokumentasjon leveres på utført arbeid.", icon: <DocIcon /> },
  { stat: "< 1t", label: "Rask tilbakemelding", tekst: "Vi svarer raskt på forespørsler i normal arbeidstid.", icon: <ClockLargeIcon /> },
]

function Trust() {
  return (
    <section className="bg-[#1A1A1A] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Bolt className="w-[10px] h-5 text-[#E1342B]" />
              <span className="text-xs font-semibold text-white/40 tracking-widest uppercase">Sertifisert og trygg</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Du er i trygge hender
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs md:text-right leading-relaxed">
            Autorisert elektriker med fokus på kvalitet, dokumentasjon og rask oppfølging — fra første kontakt til ferdig arbeid.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]">
          {TILLIT.map((item) => (
            <div key={item.label} className="bg-[#1A1A1A] p-6 sm:p-8">
              <div className="text-[#E1342B] mb-5">{item.icon}</div>
              <div className="text-3xl font-bold text-white mb-1">{item.stat}</div>
              <div className="font-semibold text-white mb-3 text-sm">{item.label}</div>
              <div className="text-sm text-white/35 leading-relaxed">{item.tekst}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-white/[0.07] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/60 text-lg max-w-sm">
            Klar for å komme i gang? Beskriv jobben kort — vi tar kontakt for videre avklaring og tilbud.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/book"
              className="bg-[#E1342B] text-white font-semibold px-7 py-3.5 rounded hover:bg-[#c42d24] transition-colors inline-flex items-center justify-center gap-2"
            >
              Book befaring
              <ArrowIcon className="w-4 h-4" />
            </a>
            <a
              href={`tel:${BEDRIFT.telefon.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 text-white/70 font-semibold px-7 py-3.5 border border-white/20 rounded hover:text-white hover:border-white/40 transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              Ring oss
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Reviews ──────────────────────────────────────────────────────────────────

const ANMELDELSER = [
  { navn: "Thomas H.", sted: "Bærum", tekst: "Rask, ryddig og presis. Elbillader installert på 2 timer og alt ble dokumentert. Nøyaktig slik det skal gjøres.", stjerner: 5 },
  { navn: "Karin S.", sted: "Oslo vest", tekst: "Endelig en elektriker som svarer på telefon og faktisk holder avtaler. Ringte tilbake innen 30 minutter.", stjerner: 5 },
  { navn: "Lars O.", sted: "Sandvika", tekst: "Profesjonell installasjon ved bad-renovering. Fast pris, ingen overraskelser. Anbefales på det varmeste.", stjerner: 5 },
]

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-[#E1342B]">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function Reviews() {
  return (
    <section className="bg-[#EEEDE8] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <Stars n={5} />
            <span className="text-[#6B6B6B] text-sm">5,0 · Google</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A]">
            Hva kundene sier
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ANMELDELSER.map((r) => (
            <div key={r.navn} className="bg-[#F7F6F3] rounded-lg p-5 sm:p-8">
              <Stars n={r.stjerner} />
              <p className="mt-4 text-[#1A1A1A] leading-relaxed mb-6 text-[15px]">"{r.tekst}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white text-xs font-bold">
                  {r.navn[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm text-[#1A1A1A]">{r.navn}</p>
                  <p className="text-xs text-[#6B6B6B]">{r.sted}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Mid-page CTA banner ───────────────────────────────────────────────────────

function MidCTA() {
  return (
    <section className="bg-[#E1342B] py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="text-white font-bold text-xl md:text-3xl tracking-tight">
            Klar for et pristilbud?
          </p>
          <p className="text-white/70 mt-2">Vi ringer tilbake innen 1 time – helt uforpliktende.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
          <a
            href="#kontakt"
            className="bg-white text-[#E1342B] font-semibold px-7 py-3.5 rounded hover:bg-[#f5f4f2] transition-colors inline-flex items-center gap-2"
          >
            Send forespørsel
            <ArrowIcon className="w-4 h-4" />
          </a>
          <a
            href={`tel:${BEDRIFT.telefon.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 border border-white/40 rounded hover:border-white transition-colors"
          >
            <PhoneIcon className="w-4 h-4" />
            {BEDRIFT.telefon}
          </a>
        </div>
      </div>
    </section>
  )
}

// ── FAQ ──────────────────────────────────────────────────────────────────────

const SPORSMAL = [
  { q: "Hva koster en elbillader-installasjon?", a: "Standard installasjon i garasje koster fra kr 6 500 inkl. mva. Pris avhenger av kabelføring, avstand til sikringsskap og behov for kursoppgradering. Vi gir fast pris etter befaring." },
  { q: "Hvor raskt kan dere komme?", a: "Vi ringer tilbake innen 1 time og kan ofte komme ut samme dag eller neste arbeidsdag. Akutte feil prioriteres." },
  { q: "Hva er inkludert i en elkontroll?", a: "Elkontroll inkluderer gjennomgang av sikringsskap, kurser, jordfeilbrytere og synlig installasjon. Skriftlig rapport med eventuelle avvik leveres." },
  { q: "Jobber dere på hytte og fritidsbolig?", a: "Ja. Vi tar oppdrag i Bærum, Oslo og omegn – inkludert fritidseiendommer i nærliggende områder." },
  { q: "Er dere NELFO-godkjent og autorisert?", a: "Ja. VBM Elektro er autorisert elektroinstallasjonsbedrift og NELFO-medlem. Alt arbeid dokumenteres med samsvarserklæring." },
  { q: "Kan jeg betale med Vipps?", a: "Ja, vi aksepterer Vipps, faktura og kortbetaling. For bestillinger via nettsiden kan du velge Vipps i kassen." },
]

function FAQ() {
  const [åpen, setÅpen] = useState<number | null>(null)
  return (
    <section className="bg-[#F7F6F3] py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] mb-14">
          Vanlige spørsmål
        </h2>
        <div className="space-y-1.5">
          {SPORSMAL.map((s, i) => (
            <div key={i} className="bg-[#EEEDE8] rounded-lg overflow-hidden">
              <div
                role="button"
                tabIndex={0}
                className="w-full flex items-center justify-between px-6 py-5 cursor-pointer select-none"
                style={{ color: "#1a1a1a" }}
                onClick={() => setÅpen(åpen === i ? null : i)}
                onKeyDown={(e) => e.key === "Enter" && setÅpen(åpen === i ? null : i)}
              >
                <span style={{ color: "#1a1a1a", fontWeight: 700 }} className="pr-4 text-sm md:text-base">{s.q}</span>
                <svg
                  viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth={2.5}
                  className={`w-4 h-4 flex-shrink-0 transition-transform ${åpen === i ? "rotate-180" : ""}`}
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {åpen === i && (
                <div style={{ color: "rgba(26,26,26,0.7)" }} className="px-6 pb-6 leading-relaxed text-sm border-t border-[#1A1A1A]/10 pt-4">{s.a}</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 pt-10 border-t border-[#EEEDE8] flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-[#6B6B6B]">Har du andre spørsmål? Vi hjelper deg gjerne.</p>
          <div className="flex gap-3">
            <a
              href={`tel:${BEDRIFT.telefon.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 text-[#1A1A1A] font-semibold text-sm hover:text-[#E1342B] transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              {BEDRIFT.telefon}
            </a>
            <a
              href="#kontakt"
              className="bg-[#1A1A1A] text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-[#333] transition-colors"
            >
              Send melding
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Contact CTA ──────────────────────────────────────────────────────────────

function Contact() {
  const [sendt, setSendt] = useState(false)
  const [laster, setLaster] = useState(false)
  const [gdpr, setGdpr] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLaster(true)
    await new Promise((r) => setTimeout(r, 800))
    setLaster(false)
    setSendt(true)
  }

  return (
    <section id="kontakt" className="bg-[#EEEDE8] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Bolt className="w-[10px] h-5 text-[#E1342B]" />
              <span className="text-xs font-semibold text-[#6B6B6B] tracking-widest uppercase">Kom i gang</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] mb-4">
              Trenger du elektriker?
            </h2>
            <div className="w-12 h-[3px] bg-[#E1342B] mb-6" />
            <p className="text-[#6B6B6B] text-lg mb-10 leading-relaxed">
              Send en melding eller ring oss. Vi svarer raskt og kommer med fast pris.
            </p>
            <div className="space-y-5">
              <a href={`tel:${BEDRIFT.telefon.replace(/\s/g, "")}`} className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-[#F7F6F3] rounded-lg flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="w-5 h-5 text-[#6B6B6B]" />
                </div>
                <div>
                  <p className="text-xs text-[#6B6B6B] mb-0.5">Telefon</p>
                  <p className="font-semibold text-[#1A1A1A] group-hover:text-[#E1342B] transition-colors">{BEDRIFT.telefon}</p>
                </div>
              </a>
              <a href={`mailto:${BEDRIFT.epost}`} className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-[#F7F6F3] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MailIcon className="w-5 h-5 text-[#6B6B6B]" />
                </div>
                <div>
                  <p className="text-xs text-[#6B6B6B] mb-0.5">E-post</p>
                  <p className="font-semibold text-[#1A1A1A] group-hover:text-[#E1342B] transition-colors">{BEDRIFT.epost}</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#F7F6F3] rounded-lg flex items-center justify-center flex-shrink-0">
                  <ClockIcon className="w-5 h-5 text-[#6B6B6B]" />
                </div>
                <div>
                  <p className="text-xs text-[#6B6B6B] mb-0.5">Åpningstider</p>
                  <p className="font-semibold text-[#1A1A1A]">{BEDRIFT.apningstider}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F6F3] rounded-xl p-5 sm:p-8">
            {sendt ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <Bolt className="w-8 h-16 mx-auto text-[#E1342B] mb-4" />
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Takk for henvendelsen!</h3>
                <p className="text-[#6B6B6B] text-sm">Vi ringer deg tilbake innen 1 time.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-[#6B6B6B] font-medium mb-1.5 block">Navn</label>
                    <input type="text" required placeholder="Ola Nordmann"
                      className="w-full bg-[#EEEDE8] rounded-lg px-4 py-3 text-[#1A1A1A] placeholder:text-[#6B6B6B]/60 focus:outline-none focus:ring-2 focus:ring-[#E1342B]/25 text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-[#6B6B6B] font-medium mb-1.5 block">Telefon</label>
                    <input type="tel" required placeholder="900 00 000"
                      className="w-full bg-[#EEEDE8] rounded-lg px-4 py-3 text-[#1A1A1A] placeholder:text-[#6B6B6B]/60 focus:outline-none focus:ring-2 focus:ring-[#E1342B]/25 text-sm" />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-[#6B6B6B] font-medium mb-1.5 block">E-post</label>
                  <input type="email" placeholder="ola@example.com"
                    className="w-full bg-[#EEEDE8] rounded-lg px-4 py-3 text-[#1A1A1A] placeholder:text-[#6B6B6B]/60 focus:outline-none focus:ring-2 focus:ring-[#E1342B]/25 text-sm" />
                </div>
                <div>
                  <label className="text-xs text-[#6B6B6B] font-medium mb-1.5 block">Hva gjelder oppdraget?</label>
                  <select required defaultValue=""
                    className="w-full bg-[#EEEDE8] rounded-lg px-4 py-3 text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#E1342B]/25 text-sm appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236B6B6B' stroke-width='2'%3E%3Cpath d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center", backgroundSize: "16px" }}
                  >
                    <option value="" disabled className="text-[#6B6B6B]/60">Velg kategori…</option>
                    <option value="Videobefaring">Gratis videobefaring – rask vurdering uten oppmøte</option>
                    <option value="El-anlegg">El-anlegg – sikringsskap, kurser, inntak, jordfeilbryter</option>
                    <option value="Elbillader">Elbillader – installasjon og idriftsettelse</option>
                    <option value="Montering og demontering">Montering/demontering – stikkontakter, lamper, downlights</option>
                    <option value="Sikkerhet">Sikkerhet – komfyrvakt, dørtelefon, brannforebygging</option>
                    <option value="Styringssystemer">Styringssystemer – smarthus, varme, lysstyring</option>
                    <option value="Varme og energi">Varme og energi – varmekabel, varmepumpe, solcellepanel</option>
                    <option value="Vedlikehold og reparasjon">Vedlikehold og reparasjon – feilsøking, el-kontroll</option>
                    <option value="Nybygg og rehabilitering">Nybygg og rehabilitering av bolig</option>
                    <option value="Annet">Annet</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-[#6B6B6B] font-medium mb-1.5 block">Mer informasjon (valgfritt)</label>
                  <textarea rows={3} placeholder="Beskriv kort hva du trenger…"
                    className="w-full bg-[#EEEDE8] rounded-lg px-4 py-3 text-[#1A1A1A] placeholder:text-[#6B6B6B]/60 focus:outline-none focus:ring-2 focus:ring-[#E1342B]/25 text-sm resize-none" />
                </div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={gdpr}
                    onChange={(e) => setGdpr(e.target.checked)}
                    className="mt-0.5 w-4 h-4 accent-[#E1342B] flex-shrink-0"
                  />
                  <span className="text-xs text-[#6B6B6B] leading-relaxed">
                    Jeg godtar{" "}
                    <a href="/personvern" className="text-[#E1342B] hover:underline" target="_blank">personvernerklæringen</a>
                    {" "}og at VBM Elektro kan kontakte meg angående denne henvendelsen.
                  </span>
                </label>

                <button type="submit" disabled={laster || !gdpr}
                  className="w-full bg-[#E1342B] text-white font-semibold py-3.5 rounded-lg hover:bg-[#c42d24] transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                  {laster ? "Sender…" : "Send forespørsel"}
                  {!laster && <ArrowIcon className="w-4 h-4" />}
                </button>
                <p className="text-xs text-[#6B6B6B] text-center">Vi ringer deg tilbake innen 1 time</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Footer newsletter widget ─────────────────────────────────────────────────

function FooterNewsletter() {
  const [epost, setEpost] = useState("")
  const [sendt, setSendt] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    await fetch("/api/nyhetsbrev", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ epost }),
    }).catch(() => {})
    setSendt(true)
  }

  return (
    <div>
      <h4 className="text-white/80 font-semibold text-sm mb-5 tracking-wide">Nyhetsbrev</h4>
      <p className="text-white/35 text-sm mb-4 leading-relaxed">
        Få tips om smarthus, elbillading og el-nyheter rett i innboksen.
      </p>
      {sendt ? (
        <p className="text-[#E1342B] text-sm font-semibold">Påmeldt!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="email"
            required
            value={epost}
            onChange={(e) => setEpost(e.target.value)}
            placeholder="din@epost.no"
            className="bg-white/[0.07] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#E1342B]/50 transition-colors"
          />
          <button
            type="submit"
            className="bg-[#E1342B] text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-[#c42d24] transition-colors flex items-center justify-center gap-2"
          >
            Meld deg på
            <ArrowIcon className="w-3.5 h-3.5" />
          </button>
        </form>
      )}
    </div>
  )
}

// ── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white/50 pt-16 pb-24 md:pb-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top bar — CTA + social */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-white/[0.08] mb-12">
          <div>
            <p className="text-white font-bold text-lg mb-1">Følg oss</p>
            <p className="text-white/35 text-sm">Nyeste prosjekter, tips og nyheter</p>
          </div>
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-lg bg-white/[0.06] hover:bg-[#E1342B] flex items-center justify-center text-white/50 hover:text-white transition-all">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-lg bg-white/[0.06] hover:bg-[#E1342B] flex items-center justify-center text-white/50 hover:text-white transition-all">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-lg bg-white/[0.06] hover:bg-[#E1342B] flex items-center justify-center text-white/50 hover:text-white transition-all">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <Image src="/logo.svg" alt="VBM Elektro" width={120} height={48} className="brightness-0 invert mb-5 opacity-80" />
            <p className="text-sm leading-relaxed text-white/35 mb-5">
              Autorisert elektroinstallasjonsbedrift. NELFO-godkjent. Bærum og Oslo.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href={`tel:${BEDRIFT.telefon.replace(/\s/g, "")}`} className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                <PhoneIcon className="w-3.5 h-3.5" />
                {BEDRIFT.telefon}
              </a>
              <a href={`mailto:${BEDRIFT.epost}`} className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                <MailIcon className="w-3.5 h-3.5" />
                {BEDRIFT.epost}
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-5 tracking-wide">Tjenester</h4>
            <ul className="space-y-2.5 text-sm">
              {KATEGORIER.map((k) => (
                <li key={k.id}>
                  <a
                    href={k.id === "elbillader" ? "#elbillader" : "#tjenester"}
                    className="text-white/40 hover:text-white transition-colors"
                  >
                    {k.navn}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-5 tracking-wide">Info</h4>
            <ul className="space-y-2.5 text-sm text-white/40">
              <li><a href="#prosess" className="hover:text-white transition-colors">Om oss</a></li>
              <li><Link href="/personvern" className="hover:text-white transition-colors">Personvern</Link></li>
              <li><Link href="/nyhetsbrev" className="hover:text-white transition-colors">Nyhetsbrev</Link></li>
              <li>
                <a href="https://mittanbud.no/bedrift/9256482" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  Mittanbud-profil
                  <svg viewBox="0 0 12 12" fill="currentColor" className="w-2.5 h-2.5 opacity-60"><path d="M3.5 1a.5.5 0 000 1H8.29L1.15 9.15a.5.5 0 00.7.7L9 2.71V7.5a.5.5 0 001 0V1a.5.5 0 00-.5-.5H3.5z"/></svg>
                </a>
              </li>
              <li className="pt-2">{BEDRIFT.apningstider}</li>
              <li className="text-white/25">{BEDRIFT.adresse}</li>
            </ul>
          </div>

          <FooterNewsletter />
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.07] pt-8 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/20">
          <span>© {new Date().getFullYear()} {BEDRIFT.navn}. Alle rettigheter forbeholdt.</span>
          <span>Org.nr: {BEDRIFT.orgnr}</span>
        </div>
      </div>
    </footer>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <>
      <Nav />
      <StickyMobileBar />
      <Hero />
      <RedStripe />
      <Services />
      <Prisliste />
      <Process />
      <RedStripe />
      <EVCharger />
      <Trust />
      <Reviews />
      <MidCTA />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}

// ── Icon components ───────────────────────────────────────────────────────────

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
    </svg>
  )
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
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" />
    </svg>
  )
}
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
    </svg>
  )
}
function BoltServiceIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
}
function WrenchIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>
}
function HouseIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
}
function SmartIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" strokeWidth={2} /></svg>
}
function SearchIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
}
function BuildingIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8"><rect x="2" y="7" width="20" height="14" rx="1" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></svg>
}
function ShieldIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>
}
function BadgeIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" /></svg>
}
function DocIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
}
function ClockIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
}
function ClockLargeIcon() {
  return <ClockIcon className="w-7 h-7" />
}
function MailIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
}
