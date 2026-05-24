"use client"

import { useState } from "react"
import { BEDRIFT } from "@/data/bedrift"
import { SiteHeader } from "@/components/SiteHeader"

const KALENDER_URL = "https://api.leadconnectorhq.com/widget/bookings/vbmelektro"

export default function BookPage() {
  const [laster, setLaster] = useState(false)

  const [steg, setSteg] = useState<"form" | "kalender">("form")

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
    setSteg("kalender")
  }

  return (
    <div className="subpage">
      <SiteHeader />
      <div className="subpage-pt">
        <div className="book-wrap">
          <div className="book-box">
            <div className="book-header">
              <div className="book-eyebrow">
                <svg viewBox="0 0 177 352" fill="currentColor">
                  <polygon points="148.63,0.48 103.24,139.95 177.14,139.95 27.66,351.9 72.66,194.79 0,194.79 36.62,0.48" />
                </svg>
                <span>Gratis · Uforpliktende</span>
              </div>
              <h1>Book befaring</h1>
              <p>{steg === "form" ? "Fyll inn info — velg tid i neste steg" : "Velg tidspunkt som passer deg"}</p>
            </div>

            {steg === "form" ? (
              <div className="page-form-card">
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div className="form-row">
                    <div className="form-field">
                      <label>Navn *</label>
                      <input name="navn" type="text" required placeholder="Ola Nordmann" />
                    </div>
                    <div className="form-field">
                      <label>Telefon *</label>
                      <input name="telefon" type="tel" required placeholder="900 00 000" />
                    </div>
                  </div>
                  <div className="form-field">
                    <label>Hva gjelder det? *</label>
                    <select name="tjeneste" required defaultValue="" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236B6B6B' stroke-width='2'%3E%3Cpath d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center", backgroundSize: "16px", appearance: "none" }}>
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
                  <div className="form-field">
                    <label>Adresse / område</label>
                    <input name="adresse" type="text" placeholder="F.eks. Sandvika, Bærum" />
                  </div>
                  <button type="submit" disabled={laster} className="form-submit">
                    {laster ? "Sender…" : "Velg tidspunkt"}
                    {!laster && (
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
                      </svg>
                    )}
                  </button>
                  <p className="form-note">Gratis og uforpliktende · Du velger tid i neste steg</p>
                </form>
              </div>
            ) : (
              <div className="page-form-card" style={{ padding: 0, overflow: "hidden" }}>
                <iframe
                  src={KALENDER_URL}
                  title="Book tidspunkt"
                  style={{ width: "100%", height: 600, border: "none", display: "block" }}
                  loading="lazy"
                />
              </div>
            )}

            {steg === "form" && (
              <p className="book-phone">
                Foretrekker å ringe?{" "}
                <a href={`tel:${BEDRIFT.telefon.replace(/\s/g, "")}`}>{BEDRIFT.telefon}</a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
