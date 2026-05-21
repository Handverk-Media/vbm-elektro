"use client"

import { useState } from "react"
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
    <div className="subpage">
      <SiteHeader />
      <div className="subpage-pt">

        <section className="subpage-hero">
          <div className="wrap">
            <div className="eyebrow">Kontakt oss</div>
            <h1>Ta kontakt</h1>
            <p>Vi svarer på telefon og e-post hverdager 07:00–16:00. Akutte henvendelser håndteres raskt.</p>
          </div>
        </section>

        <section style={{ padding: "80px 0" }}>
          <div className="wrap">
            <div className="two-col-grid">

              <div>
                <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 28 }}>Direkte kontakt</h2>
                <div className="contact-cards">
                  <a href={`tel:${BEDRIFT.telefon.replace(/\s/g, "")}`} className="contact-card-link">
                    <div className="ccard-icon" style={{ background: "var(--red)" }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.9 10.9a19.79 19.79 0 01-3.07-8.68A2 2 0 012.83 0h3a2 2 0 012 1.72c.128.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l.98-.98a2 2 0 012.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="ccard-title">{BEDRIFT.telefon}</p>
                      <p className="ccard-sub">Ring oss direkte</p>
                    </div>
                  </a>
                  <a href={`mailto:${BEDRIFT.epost}`} className="contact-card-link">
                    <div className="ccard-icon" style={{ background: "var(--bg-dark)" }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <p className="ccard-title">{BEDRIFT.epost}</p>
                      <p className="ccard-sub">Send e-post</p>
                    </div>
                  </a>
                </div>

                <div className="contact-info-box">
                  <p className="info-label">Praktisk info</p>
                  {[
                    { k: "Åpningstider", v: BEDRIFT.apningstider },
                    { k: "Adresse", v: BEDRIFT.adresse },
                    { k: "Org.nr", v: BEDRIFT.orgnr },
                    { k: "Svar innen", v: "1 time (hverdager)" },
                  ].map(({ k, v }) => (
                    <div key={k} className="cib-row">
                      <span className="cib-key">{k}</span>
                      <span className="cib-val">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 28 }}>Send oss en melding</h2>
                <div className="page-form-card">
                  {sendt ? (
                    <div className="form-success">
                      <div className="form-success-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      </div>
                      <h3>Melding sendt!</h3>
                      <p>Vi tar kontakt innen 1 time på hverdager.</p>
                      <button className="form-success-btn" onClick={() => setSendt(false)}>Send en ny melding</button>
                    </div>
                  ) : (
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
                        <label>E-post</label>
                        <input name="epost" type="email" placeholder="din@epost.no" />
                      </div>
                      <div className="form-field">
                        <label>Adresse *</label>
                        <input name="adresse" type="text" required placeholder="Gateadresse, postnummer" />
                      </div>
                      <div className="form-field">
                        <label>Hva gjelder det?</label>
                        <select name="tjeneste" defaultValue="" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236B6B6B' stroke-width='2'%3E%3Cpath d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center", backgroundSize: "16px", appearance: "none" }}>
                          <option value="">Velg type oppdrag…</option>
                          <option value="Elbillader">Elbillader-installasjon</option>
                          <option value="El-anlegg">El-anlegg og sikringsskap</option>
                          <option value="Renovering">Bad- og kjøkkenrenovering</option>
                          <option value="Smarthus">Smarthus</option>
                          <option value="Feilsøking">Feilsøking</option>
                          <option value="Annet">Annet</option>
                        </select>
                      </div>
                      <div className="form-field">
                        <label>Melding</label>
                        <textarea name="melding" rows={4} placeholder="Beskriv jobben kort…" />
                      </div>
                      <button type="submit" disabled={laster} className="form-submit">
                        {laster ? "Sender…" : "Send melding"}
                        {!laster && (
                          <svg viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
                          </svg>
                        )}
                      </button>
                      <p className="form-note">Vi tar kontakt innen 1 time på hverdager</p>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
