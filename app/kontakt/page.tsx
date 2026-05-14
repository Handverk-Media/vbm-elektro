"use client"

import { useState } from "react"
import Link from "next/link"
import { BEDRIFT } from "@/data/bedrift"
import { SiteHeader } from "@/components/SiteHeader"

export default function KontaktPage() {
  const [sendt, setSendt] = useState(false)
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
    setLaster(false)
    setSendt(true)
  }

  return (
    <div className="min-h-screen bg-[#F7F6F3]">
      <SiteHeader />

      <div className="pt-20">
        {/* Hero */}
        <section className="bg-[#1A1A1A] py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 177 352" fill="currentColor" className="w-[8px] h-4 text-[#E1342B]">
                <polygon points="148.63,0.48 103.24,139.95 177.14,139.95 27.66,351.9 72.66,194.79 0,194.79 36.62,0.48" />
              </svg>
              <span className="text-xs font-semibold text-white/40 tracking-widest uppercase">Kontakt oss</span>
            </div>
            <h1 className="text-4xl font-bold text-white tracking-tight mb-3">Ta kontakt</h1>
            <p className="text-white/50 max-w-md">Vi svarer på telefon og e-post hverdager 07:00–16:00. Akutte henvendelser håndteres raskt.</p>
          </div>
          <div className="h-[3px] bg-[#E1342B] mt-14" />
        </section>

        {/* Innhold */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Kontaktinfo */}
              <div>
                <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8">Direkte kontakt</h2>

                <div className="space-y-4 mb-10">
                  <a
                    href={`tel:${BEDRIFT.telefon.replace(/\s/g, "")}`}
                    className="flex items-center gap-4 p-5 bg-[#EEEDE8] rounded-xl hover:bg-[#E8E7E2] transition-colors group"
                  >
                    <div className="w-12 h-12 bg-[#E1342B] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-5 h-5">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.9 10.9a19.79 19.79 0 01-3.07-8.68A2 2 0 012.83 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l.98-.98a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-[#1A1A1A] group-hover:text-[#E1342B] transition-colors">{BEDRIFT.telefon}</p>
                      <p className="text-sm text-[#6B6B6B]">Ring oss direkte</p>
                    </div>
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#6B6B6B] ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
                    </svg>
                  </a>

                  <a
                    href={`mailto:${BEDRIFT.epost}`}
                    className="flex items-center gap-4 p-5 bg-[#EEEDE8] rounded-xl hover:bg-[#E8E7E2] transition-colors group"
                  >
                    <div className="w-12 h-12 bg-[#1A1A1A] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-5 h-5">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-[#1A1A1A] group-hover:text-[#E1342B] transition-colors">{BEDRIFT.epost}</p>
                      <p className="text-sm text-[#6B6B6B]">Send e-post</p>
                    </div>
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#6B6B6B] ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
                    </svg>
                  </a>
                </div>

                <div className="bg-[#1A1A1A] rounded-2xl p-7">
                  <p className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-4">Praktisk info</p>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/40">Åpningstider</span>
                      <span className="text-white/70">{BEDRIFT.apningstider}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">Adresse</span>
                      <span className="text-white/70 text-right">{BEDRIFT.adresse}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">Org.nr</span>
                      <span className="text-white/70">{BEDRIFT.orgnr}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">Svar innen</span>
                      <span className="text-white/70">1 time (hverdager)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kontaktskjema */}
              <div>
                <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8">Send oss en melding</h2>
                <div className="bg-[#EEEDE8] rounded-2xl p-7">
                  {sendt ? (
                    <div className="text-center py-10">
                      <div className="w-14 h-14 bg-[#E1342B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7 text-[#E1342B]">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Melding sendt!</h3>
                      <p className="text-[#6B6B6B] text-sm">Vi tar kontakt innen 1 time på hverdager.</p>
                      <button
                        onClick={() => setSendt(false)}
                        className="mt-6 text-sm text-[#E1342B] font-semibold hover:underline"
                      >
                        Send en ny melding
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                        <label className="text-xs font-semibold text-[#6B6B6B] mb-1.5 block">E-post</label>
                        <input
                          name="epost"
                          type="email"
                          placeholder="din@epost.no"
                          className="w-full bg-[#F7F6F3] rounded-lg px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B6B6B]/50 focus:outline-none focus:ring-2 focus:ring-[#E1342B]/20"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-[#6B6B6B] mb-1.5 block">Hva gjelder det?</label>
                        <select
                          name="tjeneste"
                          defaultValue=""
                          className="w-full bg-[#F7F6F3] rounded-lg px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#E1342B]/20 appearance-none cursor-pointer"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236B6B6B' stroke-width='2'%3E%3Cpath d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 14px center",
                            backgroundSize: "16px",
                          }}
                        >
                          <option value="">Velg type oppdrag…</option>
                          <option value="Elbillader">Elbillader-installasjon</option>
                          <option value="El-anlegg">El-anlegg og sikringsskap</option>
                          <option value="Renovering">Bad- og kjøkkenrenovering</option>
                          <option value="Smarthus">Smarthus</option>
                          <option value="Elkontroll">Elkontroll og feilsøking</option>
                          <option value="Annet">Annet</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-[#6B6B6B] mb-1.5 block">Melding</label>
                        <textarea
                          name="melding"
                          rows={4}
                          placeholder="Beskriv jobben kort…"
                          className="w-full bg-[#F7F6F3] rounded-lg px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B6B6B]/50 focus:outline-none focus:ring-2 focus:ring-[#E1342B]/20 resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={laster}
                        className="w-full bg-[#E1342B] text-white font-bold py-4 rounded-lg hover:bg-[#c42d24] transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                      >
                        {laster ? "Sender…" : "Send melding"}
                        {!laster && (
                          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
                          </svg>
                        )}
                      </button>
                      <p className="text-xs text-[#6B6B6B] text-center">Vi tar kontakt innen 1 time på hverdager</p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1A1A1A] py-8 mt-8">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
            <span>© {new Date().getFullYear()} {BEDRIFT.navn}</span>
            <div className="flex gap-5">
              <Link href="/" className="hover:text-white/60 transition-colors">Forsiden</Link>
              <Link href="/personvern" className="hover:text-white/60 transition-colors">Personvern</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
