"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/context/CartContext"
import { BEDRIFT } from "@/data/bedrift"

type PayMethod = "vipps" | "faktura" | "kort"

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
      if (data.redirectUrl) { tøm(); window.location.href = data.redirectUrl }
      else if (data.success) { tøm(); window.location.href = "/takk" }
      else setFeil(data.error ?? "Noe gikk galt. Prøv igjen eller ring oss.")
    } catch {
      setFeil("Kunne ikke koble til betalingsløsningen. Ring oss på " + BEDRIFT.telefon)
    } finally {
      setLaster(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="bestill-empty">
        <div>
          <svg viewBox="0 0 177 352" fill="currentColor">
            <polygon points="148.63,0.48 103.24,139.95 177.14,139.95 27.66,351.9 72.66,194.79 0,194.79 36.62,0.48" />
          </svg>
          <h1>Handlekurven er tom</h1>
          <p>Gå tilbake og legg til tjenester</p>
          <Link href="/#priser" className="btn btn-red">Se tjenester og priser</Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <nav className="bestill-nav">
        <div className="bestill-nav-inner">
          <Link href="/">
            <Image src="/logo.svg" alt="VBM Elektro" width={120} height={48} />
          </Link>
          <Link href="/" className="bestill-nav-back">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" />
            </svg>
            Tilbake
          </Link>
        </div>
      </nav>

      <div className="bestill-body">
        <h1>Bestill og betal</h1>

        <form onSubmit={handleBetaling}>
          <div className="bestill-grid">
            <div>
              <div className="bestill-section">
                <h2>Kontaktdetaljer</h2>
                <div className="form-row" style={{ marginBottom: 16 }}>
                  <div className="form-field">
                    <label>Fornavn *</label>
                    <input name="navn" type="text" required placeholder="Ola" />
                  </div>
                  <div className="form-field">
                    <label>Etternavn *</label>
                    <input name="etternavn" type="text" required placeholder="Nordmann" />
                  </div>
                </div>
                <div className="form-row" style={{ marginBottom: 16 }}>
                  <div className="form-field">
                    <label>Telefon *</label>
                    <input name="telefon" type="tel" required placeholder="900 00 000" />
                  </div>
                  <div className="form-field">
                    <label>E-post</label>
                    <input name="epost" type="email" placeholder="ola@example.com" />
                  </div>
                </div>
                <div className="form-field" style={{ marginBottom: 16 }}>
                  <label>Adresse for arbeidet *</label>
                  <input name="adresse" type="text" required placeholder="Gateveien 1, 1300 Sandvika" />
                </div>
                <div className="form-field">
                  <label>Tilleggsinfo (valgfritt)</label>
                  <textarea name="notat" rows={3} placeholder="Ønsket tidspunkt, adkomst, spesielle forhold…" />
                </div>
              </div>

              <div className="bestill-section">
                <h2>Betalingsmetode</h2>
                <div className="pay-options">
                  {([
                    { id: "vipps", label: "Vipps", desc: "Betal raskt og trygt med Vipps" },
                    { id: "kort", label: "Betalingskort", desc: "Visa, Mastercard via sikker betaling" },
                    { id: "faktura", label: "Faktura", desc: "14 dagers betalingsfrist" },
                  ] as { id: PayMethod; label: string; desc: string }[]).map((m) => (
                    <label key={m.id} className={`pay-option${betaling === m.id ? " active" : ""}`}>
                      <input type="radio" name="betaling" value={m.id} checked={betaling === m.id} onChange={() => setBetaling(m.id)} />
                      <div className="pay-option-text">
                        <p>{m.label}</p>
                        <p>{m.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {feil && <div className="order-error">{feil}</div>}
            </div>

            <div>
              <div className="order-box">
                <h2>Din bestilling</h2>
                <ul className="order-items">
                  {items.map(({ tjeneste, antall }) => (
                    <li key={tjeneste.id} className="order-item">
                      <div>
                        <p className="order-item-name">{tjeneste.navn}</p>
                        <p className="order-item-unit">{tjeneste.enhet}{antall > 1 ? ` · ${antall} stk` : ""}</p>
                      </div>
                      <span className="order-item-price">kr {(tjeneste.pris * antall).toLocaleString("nb-NO")}</span>
                    </li>
                  ))}
                </ul>
                <div className="order-total-row">
                  <span>Totalt</span>
                  <span>kr {total.toLocaleString("nb-NO")}</span>
                </div>
                <p className="order-fine">Inkl. mva. Endelig pris avklares etter befaring.</p>
                <div className="order-hint">
                  <svg viewBox="0 0 177 352" fill="currentColor">
                    <polygon points="148.63,0.48 103.24,139.95 177.14,139.95 27.66,351.9 72.66,194.79 0,194.79 36.62,0.48" />
                  </svg>
                  <p>Dette er en forespørsel med estimert pris. Vi bekrefter og sender endelig tilbud innen 1 time.</p>
                </div>
                <button type="submit" disabled={laster} className="form-submit">
                  {laster ? "Behandler…" : betaling === "vipps" ? "Fortsett til Vipps" : "Send bestilling"}
                  {!laster && (
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
                    </svg>
                  )}
                </button>
                <p className="form-note" style={{ marginTop: 12 }}>
                  Ved å bestille aksepterer du{" "}
                  <Link href="/vilkar">avtalevilkårene</Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
