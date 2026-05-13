"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function CookieConsent() {
  const [synlig, setSynlig] = useState(false)

  useEffect(() => {
    const valg = localStorage.getItem("cookie-consent")
    if (!valg) setSynlig(true)
  }, [])

  function godta() {
    localStorage.setItem("cookie-consent", "all")
    setSynlig(false)
  }

  function avvis() {
    localStorage.setItem("cookie-consent", "necessary")
    setSynlig(false)
  }

  if (!synlig) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:bottom-6 md:left-6 md:right-auto md:max-w-md">
      <div className="bg-[#1A1A1A] text-white shadow-2xl md:rounded-xl border border-white/10">
        <div className="px-5 py-5">
          <div className="flex items-center gap-2 mb-3">
            <svg viewBox="0 0 177 352" fill="currentColor" className="w-[8px] h-4 text-[#E1342B] flex-shrink-0">
              <polygon points="148.63,0.48 103.24,139.95 177.14,139.95 27.66,351.9 72.66,194.79 0,194.79 36.62,0.48" />
            </svg>
            <p className="font-bold text-sm text-white">Vi bruker informasjonskapsler</p>
          </div>
          <p className="text-white/50 text-xs leading-relaxed mb-4">
            Vi bruker cookies for å forbedre brukeropplevelsen og analysere trafikk.
            Les mer i vår{" "}
            <Link href="/personvern" className="text-white/70 underline hover:text-white transition-colors">
              personvernerklæring
            </Link>
            .
          </p>
          <div className="flex gap-2">
            <button
              onClick={godta}
              className="flex-1 bg-[#E1342B] text-white text-xs font-bold py-2.5 rounded-lg hover:bg-[#c42d24] transition-colors"
            >
              Godta alle
            </button>
            <button
              onClick={avvis}
              className="flex-1 bg-white/[0.08] text-white/70 text-xs font-semibold py-2.5 rounded-lg hover:bg-white/[0.14] hover:text-white transition-colors"
            >
              Kun nødvendige
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
