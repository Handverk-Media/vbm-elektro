"use client"

import { useState } from "react"
import { BEDRIFT } from "@/data/bedrift"
import { SiteHeader } from "@/components/SiteHeader"

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
    <div className="subpage">
      <SiteHeader />
      <div className="subpage-pt">

        <section className="subpage-hero">
          <div className="wrap">
            <div className="eyebrow">Gratis · Ingen forpliktelser</div>
            <h1>Gratis videoavklaring</h1>
            <p>Send bilder eller video av jobben — vi vurderer løsning, omfang og neste steg. Ingen oppmøte nødvendig. Svar innen 2 timer.</p>
          </div>
        </section>

        <section style={{ padding: "80px 0" }}>
          <div className="wrap">
            <div className="two-col-grid">

              <div>
                <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 28 }}>Slik fungerer det</h2>
                <div className="video-steps-list">
                  {[
                    { num: "01", tittel: "Send bilder eller video", tekst: "Ta bilde av sikringsskap, kabeltrekk eller jobben som skal gjøres. Bilder og video støttes." },
                    { num: "02", tittel: "Vi vurderer", tekst: "En autorisert elektriker ser på materialet og vurderer løsning og omfang." },
                    { num: "03", tittel: "Du får svar", tekst: "Tilbakemelding innen 2 timer i arbeidstid — med anbefaling og eventuelt tilbud." },
                  ].map((s) => (
                    <div key={s.num} className="video-step">
                      <div className="video-step-num">{s.num}</div>
                      <h3>{s.tittel}</h3>
                      <p>{s.tekst}</p>
                    </div>
                  ))}
                </div>

                <div className="video-fit-box">
                  <p className="video-fit-label">Passer til</p>
                  {[
                    "Elbillader — sikringsskap og kabelføring",
                    "Elkontroll og feilsøking",
                    "Ny stikkontakt eller punkt",
                    "Generelle spørsmål om el-anlegget",
                  ].map((t) => (
                    <div key={t} className="video-fit-item">
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 28 }}>Send inn for vurdering</h2>
                <div className="page-form-card">
                  {sendt ? (
                    <div className="form-success">
                      <div className="form-success-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      </div>
                      <h3>Mottatt!</h3>
                      <p>Vi ser på bildene og tar kontakt innen 2 timer.</p>
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
                        <label>Adresse / område</label>
                        <input name="adresse" type="text" placeholder="F.eks. Sandvika, Bærum" />
                      </div>
                      <div className="form-field">
                        <label>Beskriv jobben *</label>
                        <textarea name="beskrivelse" required rows={3} placeholder="F.eks. vil montere elbillader i garasje, ca. 10m fra sikringsskap…" />
                      </div>
                      <div className="form-field">
                        <label>Last opp bilder eller video</label>
                        <label className={`file-upload-label${filer && filer.length > 0 ? " has-files" : ""}`}>
                          {filer && filer.length > 0 ? (
                            <>
                              <svg viewBox="0 0 20 20" fill="currentColor" style={{ color: "var(--red)" }}>
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                              </svg>
                              <p style={{ fontWeight: 600, color: "var(--text)" }}>{filer.length} fil{filer.length > 1 ? "er" : ""} valgt</p>
                              <small>Klikk for å endre</small>
                            </>
                          ) : (
                            <>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                              </svg>
                              <p>Klikk for å laste opp</p>
                              <small>Bilder og video støttes</small>
                            </>
                          )}
                          <input type="file" accept="image/*,video/*" multiple className="file-upload-input" onChange={(e) => setFiler(e.target.files)} />
                        </label>
                      </div>
                      <button type="submit" disabled={laster} className="form-submit">
                        {laster ? "Sender…" : "Send inn for vurdering"}
                        {!laster && (
                          <svg viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
                          </svg>
                        )}
                      </button>
                      <p className="form-note">Gratis og uforpliktende · Svar innen 2 timer</p>
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
