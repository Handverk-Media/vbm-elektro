"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function CookieConsent() {
  const [synlig, setSynlig] = useState(false)
  const [detaljer, setDetaljer] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) setSynlig(true)
  }, [])

  function godta() {
    localStorage.setItem("cookie-consent", "all")
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", { analytics_storage: "granted", ad_storage: "granted" })
    }
    if (typeof window.fbq === "function") {
      window.fbq("consent", "grant")
    }
    setSynlig(false)
  }

  function avvis() {
    localStorage.setItem("cookie-consent", "necessary")
    setSynlig(false)
  }

  if (!synlig) return null

  return (
    <div className="cookie-overlay">
      <div className="cookie-box">
        <div className="cookie-title">
          <svg viewBox="0 0 177 352" fill="currentColor">
            <polygon points="148.63,0.48 103.24,139.95 177.14,139.95 27.66,351.9 72.66,194.79 0,194.79 36.62,0.48" />
          </svg>
          <p>Vi bruker informasjonskapsler</p>
        </div>

        <p className="cookie-text">
          Vi bruker cookies for å analysere trafikk og forbedre nettsiden. Du velger selv hva du godtar. Les mer i vår{" "}
          <Link href="/personvern">personvernerklæring</Link>.
        </p>

        {detaljer && (
          <div className="cookie-categories">
            <div className="cookie-cat">
              <div className="cookie-cat-head">
                <span>Nødvendige</span>
                <span className="cookie-cat-always">Alltid på</span>
              </div>
              <p>Kreves for at nettsiden skal fungere. Ingen persondata lagres.</p>
            </div>
            <div className="cookie-cat">
              <div className="cookie-cat-head">
                <span>Analyse (Google Analytics)</span>
                <span className="cookie-cat-optional">Valgfri</span>
              </div>
              <p>Hjelper oss å forstå hvordan besøkende bruker siden — f.eks. hvilke sider som er populære. Data anonymiseres.</p>
            </div>
          </div>
        )}

        <button
          className="cookie-details-toggle"
          onClick={() => setDetaljer(!detaljer)}
        >
          {detaljer ? "Skjul detaljer ↑" : "Vis detaljer ↓"}
        </button>

        <div className="cookie-btns">
          <button className="cookie-accept" onClick={godta}>Godta alle</button>
          <button className="cookie-decline" onClick={avvis}>Kun nødvendige</button>
        </div>
      </div>
    </div>
  )
}
