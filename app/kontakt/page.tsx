"use client"

import { BEDRIFT } from "@/data/bedrift"
import { SiteHeader } from "@/components/SiteHeader"
import { ContactForm } from "@/components/ContactForm"

export default function KontaktPage() {
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
                  <ContactForm />
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
