"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BEDRIFT } from "@/data/bedrift"

export default function VideoAvklaringPage() {
  const [laster, setLaster] = useState(false)
  const [sendt, setSendt] = useState(false)
  const [filer, setFiler] = useState<FileList | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLaster(true)
    const fd = new FormData(e.currentTarget)
    if (filer) Array.from(filer).forEach((f) => fd.append("filer", f))
    await fetch("/api/videoavklaring", { method: "POST", body: fd }).catch(() => {})
    setLaster(false)
    setSendt(true)
  }

  return (
    <div className="min-h-screen bg-[#F7F6F3]">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#F7F6F3]/95 backdrop-blur-sm border-b border-[#EEEDE8]">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.svg" alt="VBM Elektro" width={120} height={48} priority />
          </Link>
          <Link href="/" className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors flex items-center gap-1.5">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" />
            </svg>
            Tilbake
          </Link>
        </div>
      </header>

      <div className="pt-20">
        {/* Hero */}
        <section className="bg-[#1A1A1A] py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-2 mb-5">
              <svg viewBox="0 0 177 352" fill="currentColor" className="w-[8px] h-4 text-[#E1342B]">
                <polygon points="148.63,0.48 103.24,139.95 177.14,139.95 27.66,351.9 72.66,194.79 0,194.79 36.62,0.48" />
              </svg>
              <span className="text-xs font-semibold text-white/40 tracking-widest uppercase">Gratis · Ingen forpliktelser</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Gratis videoavklaring
            </h1>
            <div className="w-12 h-[3px] bg-[#E1342B] mb-6" />
            <p className="text-white/50 text-lg leading-relaxed max-w-xl">
              Send bilder eller video av jobben — vi vurderer løsning, omfang og neste steg.
              Ingen oppmøte nødvendig. Svar innen 2 timer.
            </p>
          </div>
          <div className="h-[3px] bg-[#E1342B] mt-14" />
        </section>

        {/* Form + info */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Checkpoints */}
              <div>
                <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8">Slik fungerer det</h2>
                <div className="space-y-px bg-[#EEEDE8] rounded-2xl overflow-hidden">
                  {[
                    { num: "01", tittel: "Send bilder eller video", tekst: "Ta bilde av sikringsskap, kabeltrekk eller jobben som skal gjøres. Bilder og video støttes." },
                    { num: "02", tittel: "Vi vurderer", tekst: "En autorisert elektriker ser på materialet og vurderer løsning og omfang." },
                    { num: "03", tittel: "Du får svar", tekst: "Tilbakemelding innen 2 timer i arbeidstid — med anbefaling og eventuelt tilbud." },
                  ].map((s) => (
                    <div key={s.num} className="bg-[#F7F6F3] p-7">
                      <div className="text-xs font-bold tracking-widest text-white/20 mb-3 text-[#1A1A1A]/20">{s.num}</div>
                      <p className="font-bold text-[#1A1A1A] mb-2">{s.tittel}</p>
                      <p className="text-sm text-[#6B6B6B] leading-relaxed">{s.tekst}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-[#EEEDE8] rounded-2xl">
                  <p className="text-xs font-semibold text-[#6B6B6B] tracking-widest uppercase mb-3">Passer til</p>
                  <div className="space-y-2">
                    {[
                      "Elbillader — sikringsskap og kabelføring",
                      "Elkontroll og feilsøking",
                      "Ny stikkontakt eller punkt",
                      "Generelle spørsmål om el-anlegget",
                    ].map((t) => (
                      <div key={t} className="flex items-center gap-2 text-sm text-[#1A1A1A]">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#E1342B] flex-shrink-0">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skjema */}
              <div>
                <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8">Send inn for vurdering</h2>
                <div className="bg-[#EEEDE8] rounded-2xl p-7">
                  {sendt ? (
                    <div className="text-center py-10">
                      <div className="w-14 h-14 bg-[#E1342B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7 text-[#E1342B]">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Mottatt!</h3>
                      <p className="text-[#6B6B6B] text-sm">Vi ser på bildene og tar kontakt innen 2 timer.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-semibold text-[#6B6B6B] mb-1.5 block">Navn *</label>
                          <input name="navn" type="text" required placeholder="Ola Nordmann"
                            className="w-full bg-[#F7F6F3] rounded-lg px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B6B6B]/50 focus:outline-none focus:ring-2 focus:ring-[#E1342B]/20" />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-[#6B6B6B] mb-1.5 block">Telefon *</label>
                          <input name="telefon" type="tel" required placeholder="900 00 000"
                            className="w-full bg-[#F7F6F3] rounded-lg px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B6B6B]/50 focus:outline-none focus:ring-2 focus:ring-[#E1342B]/20" />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-[#6B6B6B] mb-1.5 block">Adresse / område</label>
                        <input name="adresse" type="text" placeholder="F.eks. Sandvika, Bærum"
                          className="w-full bg-[#F7F6F3] rounded-lg px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B6B6B]/50 focus:outline-none focus:ring-2 focus:ring-[#E1342B]/20" />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-[#6B6B6B] mb-1.5 block">Beskriv jobben *</label>
                        <textarea name="beskrivelse" required rows={3} placeholder="F.eks. vil montere elbillader i garasje, ca. 10m fra sikringsskap…"
                          className="w-full bg-[#F7F6F3] rounded-lg px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B6B6B]/50 focus:outline-none focus:ring-2 focus:ring-[#E1342B]/20 resize-none" />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-[#6B6B6B] mb-1.5 block">Last opp bilder eller video</label>
                        <label className="block cursor-pointer">
                          <div className={`border-2 border-dashed rounded-lg px-4 py-6 text-center transition-colors ${filer && filer.length > 0 ? "border-[#E1342B]/40 bg-[#E1342B]/5" : "border-[#1A1A1A]/15 bg-[#F7F6F3] hover:border-[#E1342B]/30"}`}>
                            {filer && filer.length > 0 ? (
                              <div>
                                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#E1342B] mx-auto mb-1">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                </svg>
                                <p className="text-sm font-semibold text-[#1A1A1A]">{filer.length} fil{filer.length > 1 ? "er" : ""} valgt</p>
                                <p className="text-xs text-[#6B6B6B] mt-0.5">Klikk for å endre</p>
                              </div>
                            ) : (
                              <div>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 text-[#6B6B6B] mx-auto mb-2">
                                  <path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                </svg>
                                <p className="text-sm text-[#6B6B6B]">Klikk for å laste opp</p>
                                <p className="text-xs text-[#6B6B6B]/60 mt-0.5">Bilder og video støttes</p>
                              </div>
                            )}
                          </div>
                          <input type="file" accept="image/*,video/*" multiple className="hidden"
                            onChange={(e) => setFiler(e.target.files)} />
                        </label>
                      </div>
                      <button type="submit" disabled={laster}
                        className="w-full bg-[#E1342B] text-white font-bold py-4 rounded-lg hover:bg-[#c42d24] transition-colors flex items-center justify-center gap-2 disabled:opacity-60">
                        {laster ? "Sender…" : "Send inn for vurdering"}
                        {!laster && (
                          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
                          </svg>
                        )}
                      </button>
                      <p className="text-xs text-[#6B6B6B] text-center">Gratis og uforpliktende · Svar innen 2 timer</p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1A1A1A] py-8 border-t border-[#EEEDE8]">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
            <span>© {new Date().getFullYear()} {BEDRIFT.navn}</span>
            <div className="flex gap-5">
              <Link href="/" className="hover:text-white/60 transition-colors">Forsiden</Link>
              <Link href="/book" className="hover:text-white/60 transition-colors">Book befaring</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
