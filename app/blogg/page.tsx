import type { Metadata } from "next"
import Link from "next/link"
import { BEDRIFT } from "@/data/bedrift"
import { SiteHeader } from "@/components/SiteHeader"
import posts from "@/data/posts.json"

export const metadata: Metadata = {
  title: "Fagblogg – Tips og råd om elektro",
  description: "Praktiske artikler om elbillading, elkontroll, smarthus og regelverk. Skrevet av autoriserte elektrikere i Bærum og Oslo.",
}

function formatDato(dato: string) {
  return new Date(dato).toLocaleDateString("nb-NO", { day: "numeric", month: "long", year: "numeric" })
}

export default function BloggPage() {
  const featured = posts.find((p) => p.featured) ?? posts[0]
  const resten = posts.filter((p) => p.slug !== featured.slug)

  return (
    <div className="subpage">
      <SiteHeader />
      <div className="subpage-pt">

        <section className="subpage-hero">
          <div className="wrap">
            <div className="eyebrow">Fagblogg</div>
            <h1>Tips og råd om elektro</h1>
            <p>Praktiske artikler skrevet av autoriserte elektrikere. Elbillading, smarthus, sikkerhet og regelverk.</p>
          </div>
        </section>

        <section style={{ padding: "60px 0" }}>
          <div className="wrap">
            <Link href={`/blogg/${featured.slug}`} className="blog-featured">
              <div>
                <span className="blog-featured-eyebrow">{featured.kategori}</span>
                <h2>{featured.tittel}</h2>
                <p>{featured.beskrivelse}</p>
                <div className="blog-featured-meta">
                  <span>{formatDato(featured.dato)}</span>
                  <span>·</span>
                  <span>{featured.lesetid} min lesetid</span>
                </div>
                <span className="blog-read-link">Les artikkel →</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 120, height: 120, background: "var(--bg-dark)", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 177 352" fill="#E1342B" style={{ width: 36, height: 72 }}>
                    <polygon points="148.63,0.48 103.24,139.95 177.14,139.95 27.66,351.9 72.66,194.79 0,194.79 36.62,0.48" />
                  </svg>
                </div>
              </div>
            </Link>

            <div className="blog-grid">
              {resten.map((innlegg) => (
                <Link key={innlegg.slug} href={`/blogg/${innlegg.slug}`} className="blog-card">
                  <div style={{ height: 3, background: "var(--red)" }} />
                  <div className="blog-card-body">
                    <span className="blog-card-cat">{innlegg.kategori}</span>
                    <div className="blog-card-title">{innlegg.tittel}</div>
                    <p className="blog-card-desc">{innlegg.beskrivelse}</p>
                    <div className="blog-card-meta">
                      <span>{formatDato(innlegg.dato)}</span>
                      <span>·</span>
                      <span>{innlegg.lesetid} min</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "var(--bg-warm)", padding: "60px 0", textAlign: "center" }}>
          <div className="wrap">
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", marginBottom: 12 }}>Trenger du hjelp av en elektriker?</h2>
            <p style={{ color: "var(--text-soft)", marginBottom: 32 }}>Vi dekker Bærum, Oslo, Asker og Drammen. Gratis befaring og fast pris.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/book" className="btn btn-red">Book gratis befaring <span className="arr">→</span></Link>
              <a href={`tel:${BEDRIFT.telefon.replace(/\s/g, "")}`} className="btn btn-ghost">{BEDRIFT.telefon}</a>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
