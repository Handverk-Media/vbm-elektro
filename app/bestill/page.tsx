"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/context/CartContext"
import { BEDRIFT } from "@/data/bedrift"

type PayMethod = "vipps" | "faktura" | "kort"

function Bolt({ className = "w-5 h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 177 352" fill="currentColor" aria-hidden className={className}>
      <polygon points="148.63,0.48 103.24,139.95 177.14,139.95 27.66,351.9 72.66,194.79 0,194.79 36.62,0.48" />
    </svg>
  )
}

export default function BestillPage() {
  const { items, total, tøm } = useCart()
  const [betaling, setBetaling] = useState<PayMethod>("vipps")
  const [laster, setLaster] = useState(false)
  const [feil, setFeil] = useState("")

  async function handleBetaling(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFeil("")
    setLaster(true)

    const form = new FormData(e.currentTarget)
    const kontakt = {
      navn: form.get("navn"),
      telefon: form.get("telefon"),
      epost: form.get("epost"),
      adresse: form.get("adresse"),
      notat: form.get("notat"),
    }

    try {
      const res = await fetch("/api/vipps-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, kontakt, betaling }),
      })

      const data = await res.json()

      if (data.redirectUrl) {
        tøm()
        window.location.href = data.redirectUrl
      } else if (data.success) {
        tøm()
        window.location.href = "/takk"
      } else {
        setFeil(data.error ?? "Noe gikk galt. Prøv igjen eller ring oss.")
      }
    } catch {
      setFeil("Kunne ikke koble til betalingsløsningen. Ring oss på " + BEDRIFT.telefon)
    } finally {
      setLaster(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#F7F6F3] flex items-center justify-center px-6">
        <div className="text-center">
          <Bolt className="w-8 h-16 text-[#EEEDE8] mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-[#1A1A1A] mb-2">Handlekurven er tom</h1>
          <p className="text-[#6B6B6B] mb-6">Gå tilbake og legg til tjenester</p>
          <Link href="/#priser" className="bg-[#E1342B] text-white font-semibold px-6 py-3 rounded hover:bg-[#c42d24] transition-colors">
            Se tjenester og priser
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F7F6F3]">
      {/* Nav */}
      <header className="bg-[#F7F6F3]/95 backdrop-blur-sm border-b border-[#EEEDE8] sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.svg" alt="VBM Elektro" width={120} height={48} />
          </Link>
          <Link href="/" className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors flex items-center gap-1">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" />
            </svg>
            Tilbake
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-[#1A1A1A] mb-8">Bestill og betal</h1>

        <form onSubmit={handleBetaling}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left — form */}
            <div className="lg:col-span-3 space-y-6">
              {/* Contact */}
              <div className="bg-white rounded-xl p-6">
                <h2 className="font-bold text-[#1A1A1A] mb-5">Kontaktdetaljer</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#6B6B6B] font-medium mb-1.5 block">Fornavn *</label>
                    <input name="navn" type="text" required placeholder="Ola"
                      className="w-full bg-[#EEEDE8] rounded-lg px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B6B6B]/60 focus:outline-none focus:ring-2 focus:ring-[#E1342B]/25" />
                  </div>
                  <div>
                    <label className="text-xs text-[#6B6B6B] font-medium mb-1.5 block">Etternavn *</label>
                    <input name="etternavn" type="text" required placeholder="Nordmann"
                      className="w-full bg-[#EEEDE8] rounded-lg px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B6B6B]/60 focus:outline-none focus:ring-2 focus:ring-[#E1342B]/25" />
                  </div>
                  <div>
                    <label className="text-xs text-[#6B6B6B] font-medium mb-1.5 block">Telefon *</label>
                    <input name="telefon" type="tel" required placeholder="900 00 000"
                      className="w-full bg-[#EEEDE8] rounded-lg px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B6B6B]/60 focus:outline-none focus:ring-2 focus:ring-[#E1342B]/25" />
                  </div>
                  <div>
                    <label className="text-xs text-[#6B6B6B] font-medium mb-1.5 block">E-post</label>
                    <input name="epost" type="email" placeholder="ola@example.com"
                      className="w-full bg-[#EEEDE8] rounded-lg px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B6B6B]/60 focus:outline-none focus:ring-2 focus:ring-[#E1342B]/25" />
                  </div>
                  <div className="col-span-2">
                    <label className="text-xs text-[#6B6B6B] font-medium mb-1.5 block">Adresse for arbeidet *</label>
                    <input name="adresse" type="text" required placeholder="Gateveien 1, 1300 Sandvika"
                      className="w-full bg-[#EEEDE8] rounded-lg px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B6B6B]/60 focus:outline-none focus:ring-2 focus:ring-[#E1342B]/25" />
                  </div>
                  <div className="col-span-2">
                    <label className="text-xs text-[#6B6B6B] font-medium mb-1.5 block">Tilleggsinfo (valgfritt)</label>
                    <textarea name="notat" rows={3} placeholder="Ønsket tidspunkt, adkomst, spesielle forhold…"
                      className="w-full bg-[#EEEDE8] rounded-lg px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B6B6B]/60 focus:outline-none focus:ring-2 focus:ring-[#E1342B]/25 resize-none" />
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="bg-white rounded-xl p-6">
                <h2 className="font-bold text-[#1A1A1A] mb-5">Betalingsmetode</h2>
                <div className="space-y-3">
                  {([
                    { id: "vipps", label: "Vipps", desc: "Betal raskt og trygt med Vipps" },
                    { id: "kort", label: "Betalingskort", desc: "Visa, Mastercard via sikker betaling" },
                    { id: "faktura", label: "Faktura", desc: "14 dagers betalingsfrist" },
                  ] as { id: PayMethod; label: string; desc: string }[]).map((m) => (
                    <label
                      key={m.id}
                      className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                        betaling === m.id ? "border-[#E1342B] bg-[#E1342B]/[0.03]" : "border-[#EEEDE8] hover:border-[#1A1A1A]/20"
                      }`}
                    >
                      <input
                        type="radio"
                        name="betaling"
                        value={m.id}
                        checked={betaling === m.id}
                        onChange={() => setBetaling(m.id)}
                        className="accent-[#E1342B]"
                      />
                      <div>
                        <p className="font-semibold text-[#1A1A1A] text-sm">{m.label}</p>
                        <p className="text-xs text-[#6B6B6B]">{m.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {feil && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-5 py-4 text-sm">
                  {feil}
                </div>
              )}
            </div>

            {/* Right — order summary */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-6 sticky top-24">
                <h2 className="font-bold text-[#1A1A1A] mb-5">Din bestilling</h2>
                <ul className="space-y-4 mb-5">
                  {items.map(({ tjeneste, antall }) => (
                    <li key={tjeneste.id} className="flex justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-[#1A1A1A] leading-tight">{tjeneste.navn}</p>
                        <p className="text-xs text-[#6B6B6B]">{tjeneste.enhet}{antall > 1 ? ` · ${antall} stk` : ""}</p>
                      </div>
                      <span className="text-sm font-bold text-[#1A1A1A] whitespace-nowrap">
                        kr {(tjeneste.pris * antall).toLocaleString("nb-NO")}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-[#EEEDE8] pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[#1A1A1A]">Totalt</span>
                    <span className="text-xl font-bold text-[#1A1A1A]">kr {total.toLocaleString("nb-NO")}</span>
                  </div>
                  <p className="text-xs text-[#6B6B6B] mt-1">Inkl. mva. Endelig pris avklares etter befaring.</p>
                </div>

                <div className="bg-[#EEEDE8] rounded-lg p-4 mb-5">
                  <div className="flex items-start gap-2">
                    <Bolt className="w-[9px] h-[18px] text-[#E1342B] mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-[#6B6B6B] leading-relaxed">
                      Dette er en forespørsel med estimert pris. Vi bekrefter og sender endelig tilbud innen 1 time.
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={laster}
                  className="w-full bg-[#E1342B] text-white font-semibold py-4 rounded-lg hover:bg-[#c42d24] transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {laster ? "Behandler…" : betaling === "vipps" ? "Fortsett til Vipps" : "Send bestilling"}
                  {!laster && (
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
                    </svg>
                  )}
                </button>

                <p className="text-xs text-[#6B6B6B] text-center mt-3">
                  Ved å bestille aksepterer du{" "}
                  <Link href="/vilkar" className="underline hover:text-[#1A1A1A]">avtalevilkårene</Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
