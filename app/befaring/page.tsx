import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { BEDRIFT } from "@/data/bedrift"

export const metadata: Metadata = {
  title: "Book gratis befaring – VBM Elektro",
  description: "Få en gratis og uforpliktende befaring av autorisert elektriker. Velg tid som passer deg – vi er i Bærum og Oslo.",
}

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

export default function BefaringPage() {
  return (
    <div className="min-h-screen bg-[#F7F6F3]">

      {/* ── Header — logo only ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F6F3]/95 backdrop-blur-sm border-b border-[#EEEDE8]">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.svg" alt="VBM Elektro" width={110} height={44} priority />
          </Link>
          <a
            href={`tel:${BEDRIFT.telefon.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A1A] hover:text-[#E1342B] transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.9 10.9a19.79 19.79 0 01-3.07-8.68A2 2 0 012.83 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l.98-.98a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            {BEDRIFT.telefon}
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="pt-16 bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 177 352" fill="white" className="h-full w-auto">
            <polygon points="148.63,0.48 103.24,139.95 177.14,139.95 27.66,351.9 72.66,194.79 0,194.79 36.62,0.48" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Bolt className="w-[10px] h-5 text-[#E1342B]" />
            <span className="text-xs font-semibold text-white/40 tracking-widest uppercase">
              Gratis · Uforpliktende · Bærum og Oslo
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.02] tracking-tight text-white mb-6 max-w-2xl">
            Få en elektriker<br />
            <span className="text-[#E1342B]">hjem til deg.</span><br />
            Gratis.
          </h1>

          <p className="text-white/50 text-lg md:text-xl leading-relaxed max-w-lg mb-10">
            Vi kommer på befaring, vurderer jobben og gir deg fast pris —
            helt uten forpliktelser. Velg tid i kalenderen nedenfor.
          </p>

          <div className="flex flex-wrap gap-4 items-center mb-12">
            <a
              href="#kalender"
              className="bg-[#E1342B] text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-[#c42d24] transition-colors inline-flex items-center gap-2"
            >
              Book gratis befaring
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
              </svg>
            </a>
            <span className="text-white/30 text-sm">Ledig tid allerede i dag</span>
          </div>

          <div className="flex flex-wrap gap-6">
            {[
              "Autorisert elektriker",
              "Fast pris — ingen overraskelser",
              "NELFO-godkjent",
              "Tilbakering innen 1 time",
            ].map((t) => (
              <span key={t} className="flex items-center gap-2 text-white/50 text-sm">
                <Check />
                <span style={{ color: "rgba(255,255,255,0.5)" }}>{t}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Red stripe */}
        <div className="h-[3px] w-full bg-[#E1342B]" />
      </section>

      {/* ── Social proof strip ── */}
      <section className="bg-[#EEEDE8] py-6 border-b border-[#1A1A1A]/5">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex">
              {[1,2,3,4,5].map(i => <Star key={i} />)}
            </div>
            <span style={{ color: "#1a1a1a" }} className="font-semibold text-sm">5,0 på Google</span>
          </div>
          <div className="flex flex-wrap gap-8 text-sm">
            {[
              { num: "200+", label: "befaringer gjennomført" },
              { num: "< 1t", label: "tilbakering" },
              { num: "100%", label: "autorisert utførelse" },
            ].map((s) => (
              <div key={s.label} className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-[#E1342B]">{s.num}</span>
                <span style={{ color: "#6b6b6b" }} className="text-xs">{s.label}</span>
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
              {
                num: "01",
                tittel: "Fast pris på stedet",
                tekst: "Vi ser jobben med egne øyne og gir deg en skriftlig pris samme dag. Ingen skjulte kostnader.",
              },
              {
                num: "02",
                tittel: "Riktig løsning",
                tekst: "Hvert hus er forskjellig. Vi finner den beste og mest kostnadseffektive løsningen for akkurat ditt anlegg.",
              },
              {
                num: "03",
                tittel: "Gratis og uforpliktende",
                tekst: "Du takker ja eller nei — ingen press. Befaringen er alltid gratis uansett hva du bestemmer deg for.",
              },
            ].map((k) => (
              <div key={k.num} className="bg-[#EEEDE8] rounded-xl p-8">
                <div className="text-[#E1342B] font-bold text-xs tracking-widest mb-5">{k.num}</div>
                <h3 style={{ color: "#1a1a1a" }} className="font-bold text-lg mb-3">{k.tittel}</h3>
                <p style={{ color: "#6b6b6b" }} className="text-sm leading-relaxed">{k.tekst}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#kalender"
              className="inline-flex items-center gap-2 bg-[#E1342B] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#c42d24] transition-colors text-lg"
            >
              Book gratis befaring nå
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
              </svg>
            </a>
            <p style={{ color: "#6b6b6b" }} className="text-sm mt-3">Gratis · Uforpliktende · Tilbakering innen 1 time</p>
          </div>
        </div>
      </section>

      {/* ── Hva kan vi hjelpe med ── */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8">Vi befarer alle typer oppdrag</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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

          <div className="mt-10 text-center">
            <a
              href="#kalender"
              className="inline-flex items-center gap-2 bg-[#E1342B] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#c42d24] transition-colors"
            >
              Book befaring
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
              </svg>
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
              { n: "1", t: "Book tid", b: "Velg ledig tidspunkt i kalenderen nedenfor — tar 30 sekunder" },
              { n: "2", t: "Vi bekrefter", b: "Du får SMS-bekreftelse med tid, dato og hvem som kommer" },
              { n: "3", t: "Befaring hjemme", b: "Autorisert elektriker møter opp og vurderer jobben grundig" },
              { n: "4", t: "Fast pristilbud", b: "Skriftlig tilbud samme dag. Du bestemmer om du vil gå videre" },
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
              href="#kalender"
              className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#333] transition-colors text-lg"
            >
              Velg tid i kalenderen
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Booking kalender ── */}
      <section id="kalender" className="py-20 bg-[#F7F6F3]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#E1342B]/10 rounded-full px-4 py-2 mb-5">
              <Bolt className="w-[8px] h-4 text-[#E1342B]" />
              <span style={{ color: "#E1342B" }} className="text-xs font-bold tracking-widest uppercase">Gratis befaring</span>
            </div>
            <h2 style={{ color: "#1a1a1a" }} className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Velg tid som passer deg
            </h2>
            <p style={{ color: "#6b6b6b" }} className="text-lg">
              Ledige tider oppdateres løpende. Book direkte — vi bekrefter umiddelbart.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-[#EEEDE8] overflow-hidden">
            <iframe
              src="https://api.leadconnectorhq.com/widget/bookings/vbmelektro"
              style={{ width: "100%", height: "700px", border: "none" }}
              scrolling="yes"
              title="Book befaring med VBM Elektro"
            />
          </div>
        </div>
      </section>

      {/* ── Anmeldelser ── */}
      <section className="bg-[#EEEDE8] py-16">
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
              <div key={r.n} className="bg-[#F7F6F3] rounded-xl p-6">
                <div className="flex mb-3">{[1,2,3,4,5].map(i => <Star key={i} />)}</div>
                <p style={{ color: "#1a1a1a" }} className="text-sm leading-relaxed mb-4">"{r.t}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white text-xs font-bold">
                    {r.n[0]}
                  </div>
                  <div>
                    <p style={{ color: "#1a1a1a" }} className="font-semibold text-xs">{r.n}</p>
                    <p style={{ color: "#6b6b6b" }} className="text-xs">{r.s}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-[#E1342B] py-14">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-2xl md:text-3xl tracking-tight">Foretrekker du å ringe?</p>
            <p className="text-white/70 mt-1">Vi tar telefonen — hverdager 07:00–16:00</p>
          </div>
          <a
            href={`tel:${BEDRIFT.telefon.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-3 bg-white text-[#E1342B] font-bold text-xl px-8 py-4 rounded-lg hover:bg-[#f5f4f2] transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.9 10.9a19.79 19.79 0 01-3.07-8.68A2 2 0 012.83 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l.98-.98a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            {BEDRIFT.telefon}
          </a>
        </div>
      </section>

      {/* ── Minimal footer ── */}
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
