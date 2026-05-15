"use client"

import { useState } from "react"
import Link from "next/link"
import { BEDRIFT } from "@/data/bedrift"

const TEMAER = [
  { tittel: "Smarthus og teknologi", beskrivelse: "Plejd, KNX, integrert styring og fremtidens bolig. Praktiske tips for smart strømstyring." },
  { tittel: "Elbillading og energi", beskrivelse: "Nyheter om ladestandarer, solcellepanel, ENØK og hva du bør vite som boligeier." },
  { tittel: "Elektrisk sikkerhet", beskrivelse: "Hva elkontroll avslører, vanlige feil, og hvordan du beskytter hus og familie." },
  { tittel: "Regelverk og dokumentasjon", beskrivelse: "NEK 400, samsvarserklæringer og hva du må vite ved salg eller refinansiering av bolig." },
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
    <div className="nl-page">
      <div className="nl-wrap">
        <Link href="/" className="nl-back">
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" />
          </svg>
          Tilbake til forsiden
        </Link>

        <div style={{ marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
          <svg viewBox="0 0 177 352" fill="currentColor" style={{ width: 10, height: 20, color: "var(--red)" }}>
            <polygon points="148.63,0.48 103.24,139.95 177.14,139.95 27.66,351.9 72.66,194.79 0,194.79 36.62,0.48" />
          </svg>
          <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-soft)", fontWeight: 600 }}>El-innsikt ukentlig</span>
        </div>

        <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: 8 }}>
          Hold deg oppdatert på elektrisk teknologi
        </h1>
        <div className="nl-line" />
        <p style={{ fontSize: 17, color: "var(--text-soft)", lineHeight: 1.6, maxWidth: 520, marginBottom: 48 }}>
          Én e-post i uken. Praktiske tips om smarthus, elbillading, sikkerhet og regelverk – rett fra oss som jobber med det daglig.
        </p>

        <div className="page-form-card" style={{ maxWidth: 520, marginBottom: 60 }}>
          {sendt ? (
            <div className="form-success">
              <div className="form-success-icon">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
              </div>
              <h3>Velkommen!</h3>
              <p>Du er nå påmeldt. Første utgave kommer på fredag.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div className="form-field">
                <label>Din e-postadresse</label>
                <input type="email" required value={epost} onChange={(e) => setEpost(e.target.value)} placeholder="din@epost.no" />
              </div>
              <button type="submit" disabled={laster} className="form-submit">
                {laster ? "Melder på…" : "Meld meg på – gratis"}
                {!laster && (
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
                  </svg>
                )}
              </button>
              <p className="form-note">
                Ingen spam. Avmelding med ett klikk.{" "}
                <Link href="/personvern">Personvern</Link>.
              </p>
            </form>
          )}
        </div>

        <h2 style={{ fontSize: 22, fontWeight: 700, color: "var(--text)", marginBottom: 24 }}>Hva skriver vi om?</h2>
        <div className="nl-topics">
          {TEMAER.map((t) => (
            <div key={t.tittel} className="nl-topic">
              <div className="nl-topic-line" />
              <h3>{t.tittel}</h3>
              <p>{t.beskrivelse}</p>
            </div>
          ))}
        </div>

        <div className="nl-footer">
          <span>Utgitt av {BEDRIFT.navn} · {BEDRIFT.adresse}</span>
          <Link href="/personvern">Personvernerklæring</Link>
        </div>
      </div>
    </div>
  )
}
