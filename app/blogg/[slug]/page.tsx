import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { BEDRIFT } from "@/data/bedrift"
import { SiteHeader } from "@/components/SiteHeader"
import posts from "@/data/posts.json"

interface ContentBlock {
  type: "p" | "h2" | "h3" | "ul" | "ol" | "table" | "cta"
  tekst?: string
  punkter?: string[]
  headers?: string[]
  rows?: string[][]
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  const url = `https://vbmelektro.no/blogg/${post.slug}`
  return {
    title: post.tittel,
    description: post.beskrivelse,
    alternates: { canonical: url },
    openGraph: {
      title: post.tittel,
      description: post.beskrivelse,
      url,
      type: "article",
      publishedTime: post.dato,
    },
  }
}

function formatDato(dato: string) {
  return new Date(dato).toLocaleDateString("nb-NO", { day: "numeric", month: "long", year: "numeric" })
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "h2": return <h2>{block.tekst}</h2>
    case "h3": return <h3>{block.tekst}</h3>
    case "p": return <p>{block.tekst}</p>
    case "ul":
      return (
        <ul>
          {block.punkter?.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      )
    case "ol":
      return (
        <ol style={{ paddingLeft: 20, margin: "20px 0" }}>
          {block.punkter?.map((p, i) => (
            <li key={i} style={{ fontSize: 16, color: "var(--text-soft)", lineHeight: 1.6, marginBottom: 8 }}>{p}</li>
          ))}
        </ol>
      )
    case "table":
      return (
        <div style={{ overflowX: "auto", margin: "24px 0" }}>
          <table>
            <thead>
              <tr>{block.headers?.map((h, i) => <th key={i}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {block.rows?.map((row, ri) => (
                <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case "cta":
      return (
        <div className="post-cta">
          <p>{block.tekst}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/book" className="btn btn-red">Book gratis befaring <span className="arr">→</span></Link>
            <a href={`tel:${BEDRIFT.telefon.replace(/\s/g, "")}`} className="btn btn-ghost">{BEDRIFT.telefon}</a>
          </div>
        </div>
      )
    default: return null
  }
}

export default async function BloggArtikkelPage({ params }: Props) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const andrePoster = posts.filter((p) => p.slug !== slug).slice(0, 3)

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.tittel,
    description: post.beskrivelse,
    datePublished: post.dato,
    dateModified: post.dato,
    author: { "@type": "Organization", name: BEDRIFT.navn },
    publisher: { "@type": "Organization", name: BEDRIFT.navn },
    mainEntityOfPage: `https://vbmelektro.no/blogg/${post.slug}`,
  }

  return (
    <div className="subpage">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <SiteHeader />
      <div className="subpage-pt">

        <section className="subpage-hero">
          <div className="wrap">
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 20, fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
              <Link href="/blogg" style={{ color: "rgba(255,255,255,0.4)", transition: "color 0.2s" }}>Blogg</Link>
              <span>/</span>
              <span style={{ color: "var(--red)", fontWeight: 600 }}>{post.kategori}</span>
            </div>
            <h1>{post.tittel}</h1>
            <p>{post.beskrivelse}</p>
            <div style={{ marginTop: 20, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.1)", fontSize: 13, color: "rgba(255,255,255,0.35)", display: "flex", gap: 16 }}>
              <span>{formatDato(post.dato)}</span>
              <span>·</span>
              <span>{post.lesetid} min lesetid</span>
              <span>·</span>
              <span>{BEDRIFT.navn}</span>
            </div>
          </div>
        </section>

        <div className="post-wrap">
          <Link href="/blogg" className="post-back">← Tilbake til blogg</Link>
          <article className="post-body">
            {(post.content as ContentBlock[]).map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </article>
        </div>

        {andrePoster.length > 0 && (
          <section style={{ background: "var(--bg-warm)", padding: "60px 0" }}>
            <div className="wrap">
              <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 32 }}>Flere artikler</h2>
              <div className="blog-grid">
                {andrePoster.map((a) => (
                  <Link key={a.slug} href={`/blogg/${a.slug}`} className="blog-card">
                    <div style={{ height: 3, background: "var(--red)" }} />
                    <div className="blog-card-body">
                      <span className="blog-card-cat">{a.kategori}</span>
                      <div className="blog-card-title">{a.tittel}</div>
                      <p className="blog-card-desc">{a.beskrivelse}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

      </div>
    </div>
  )
}
