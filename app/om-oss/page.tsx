import type { Metadata } from "next"
import Link from "next/link"
import { BEDRIFT } from "@/data/bedrift"
import { SiteHeader } from "@/components/SiteHeader"

export const metadata: Metadata = {
  title: "Om oss – VBM Elektro AS",
  description: "VBM Elektro AS er en autorisert elektroinstallasjonsbedrift i Bærum. Vi leverer elektriker-tjenester i Bærum, Oslo og Asker.",
}

const VERDIER = [
  { tittel: "Autorisert og ansvarlig", tekst: "Vi er NELFO-godkjent og autorisert elektroinstallasjonsbedrift. Alt arbeid dokumenteres med samsvarserklæring." },
  { tittel: "Fast pris — ingen overraskelser", tekst: "Vi gir skriftlig pris før oppstart. Du vet hva jobben koster — uansett om det dukker opp uforutsette ting." },
  { tittel: "Ryddig utførelse", tekst: "Vi rydder etter oss, sikrer at kabling er ordentlig lagt og leverer ferdig rapport med dokumentasjon." },
  { tittel: "Rask respons", tekst: "Vi ringer tilbake innen 1 time på hverdager. Akutte situasjoner håndteres alltid med høy prioritet." },
]

const OMRADER = ["Bærum", "Sandvika", "Billingstad", "Asker", "Oslo vest", "Lysaker", "Fornebu", "Høvik", "Nesbru"]

export default function OmOssPage() {
  return (
    <div className="subpage">
      <SiteHeader />
      <div className="subpage-pt">

        <section className="subpage-hero">
          <div className="wrap">
            <div className="eyebrow">Om oss</div>
            <h1>Autorisert elektriker i Bærum, Oslo og Asker</h1>
            <p>VBM Elektro AS er en lokal elektroinstallasjonsbedrift med base i Billingstad. Vi leverer kvalitetssikrede elektriker-tjenester til private og næringskunder i Bærum-regionen.</p>
          </div>
        </section>

        <section style={{ padding: "80px 0" }}>
          <div className="wrap">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
              <div>
                <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 700, marginBottom: 24 }}>Hvem er vi?</h2>
                <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-soft)", marginBottom: 16 }}>
                  VBM Elektro AS ble grunnlagt med ett mål: å levere autorisert elektroarbeid med høy faglig standard, ryddig kommunikasjon og forutsigbare priser.
                </p>
                <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-soft)", marginBottom: 16 }}>
                  Daglig leder og faglig ansvarlig er <strong style={{ color: "var(--text)" }}>Benjamin</strong>, en erfaren elektriker med bred kompetanse innen boligelektro, elbillading og smarthusinstallasjon.
                </p>
                <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-soft)", marginBottom: 32 }}>
                  Vi er NELFO-godkjent og registrert som autorisert elektroinstallasjonsbedrift hos DSB. Vi har lov til å utføre og dokumentere elektrisk arbeid i tråd med norsk lov og NEK 400.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {[{ num: "200+", label: "prosjekter levert" }, { num: "5,0", label: "Google-rating" }, { num: "< 1t", label: "tilbakering" }, { num: "100%", label: "dokumentert arbeid" }].map((s) => (
                    <div key={s.label} style={{ background: "var(--bg-warm)", borderRadius: 12, padding: "20px 24px" }}>
                      <div style={{ fontSize: 28, fontWeight: 700, color: "var(--red)", marginBottom: 4, fontFamily: "var(--display)" }}>{s.num}</div>
                      <div style={{ fontSize: 13, color: "var(--text-soft)" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ background: "var(--bg-dark)", borderRadius: 18, padding: 32, marginBottom: 20 }}>
                  <p style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 20 }}>Kontaktinfo</p>
                  {[
                    { lbl: "Adresse", val: BEDRIFT.adresse },
                    { lbl: "Telefon", val: BEDRIFT.telefon, href: `tel:${BEDRIFT.telefon.replace(/\s/g, "")}` },
                    { lbl: "E-post", val: BEDRIFT.epost, href: `mailto:${BEDRIFT.epost}` },
                    { lbl: "Åpent", val: BEDRIFT.apningstider },
                    { lbl: "Org.nr", val: BEDRIFT.orgnr },
                  ].map(({ lbl, val, href }) => (
                    <div key={lbl} style={{ display: "flex", gap: 16, paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.06)", marginBottom: 12, fontSize: 14 }}>
                      <span style={{ color: "rgba(255,255,255,0.3)", width: 64, flexShrink: 0 }}>{lbl}</span>
                      {href ? <a href={href} style={{ color: "rgba(255,255,255,0.7)" }}>{val}</a> : <span style={{ color: "rgba(255,255,255,0.7)" }}>{val}</span>}
                    </div>
                  ))}
                </div>

                <div style={{ background: "var(--bg-warm)", borderRadius: 18, padding: 32 }}>
                  <p style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-soft)", marginBottom: 16 }}>Dekningsområde</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {OMRADER.map((o) => (
                      <span key={o} style={{ background: "white", fontSize: 13, fontWeight: 500, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)" }}>{o}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: "var(--bg-warm)", padding: "80px 0" }}>
          <div className="wrap">
            <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 700, marginBottom: 48 }}>Slik jobber vi</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {VERDIER.map((v, i) => (
                <div key={v.tittel} style={{ background: "var(--bg)", borderRadius: 14, padding: 28 }}>
                  <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--red)", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 12 }}>0{i + 1}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{v.tittel}</h3>
                  <p style={{ fontSize: 14, color: "var(--text-soft)", lineHeight: 1.6 }}>{v.tekst}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "60px 0", borderTop: "1px solid var(--line)" }}>
          <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 32 }}>
            <div>
              <p style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-soft)", marginBottom: 12 }}>Godkjenninger</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["NELFO-godkjent", "Autorisert installatør", "NEK 400", "DSB-registrert"].map((g) => (
                  <span key={g} style={{ background: "var(--bg-warm)", fontSize: 12, fontWeight: 600, padding: "8px 16px", borderRadius: 100 }}>{g}</span>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <Link href="/book" className="btn btn-red">Book gratis befaring <span className="arr">→</span></Link>
              <Link href="/kontakt" className="btn btn-ghost">Send melding</Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
