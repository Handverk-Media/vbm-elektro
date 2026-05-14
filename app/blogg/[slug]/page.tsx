import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
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
  return {
    title: post.tittel,
    description: post.beskrivelse,
  }
}

function formatDato(dato: string) {
  return new Date(dato).toLocaleDateString("nb-NO", { day: "numeric", month: "long", year: "numeric" })
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4">{block.tekst}</h2>
    case "h3":
      return <h3 className="text-xl font-bold text-[#1A1A1A] mt-8 mb-3">{block.tekst}</h3>
    case "p":
      return <p className="text-[#1A1A1A] leading-relaxed mb-4">{block.tekst}</p>
    case "ul":
      return (
        <ul className="space-y-2 my-5 ml-1">
          {block.punkter?.map((p, i) => (
            <li key={i} className="flex items-start gap-3 text-[#1A1A1A]">
              <span className="text-[#E1342B] font-bold mt-0.5 flex-shrink-0">–</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      )
    case "ol":
      return (
        <ol className="space-y-2 my-5 ml-1 counter-reset-[item]">
          {block.punkter?.map((p, i) => (
            <li key={i} className="flex items-start gap-3 text-[#1A1A1A]">
              <span className="text-[#E1342B] font-bold mt-0.5 flex-shrink-0 w-5">{i + 1}.</span>
              <span>{p}</span>
            </li>
          ))}
        </ol>
      )
    case "table":
      return (
        <div className="overflow-x-auto my-6 rounded-xl border border-[#EEEDE8]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#1A1A1A]">
                {block.headers?.map((h, i) => (
                  <th key={i} className="px-5 py-3 text-left text-white font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows?.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-[#F7F6F3]"}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-5 py-3 text-[#1A1A1A] border-t border-[#EEEDE8]">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case "cta":
      return (
        <div className="my-8 bg-[#EEEDE8] rounded-2xl p-7">
          <div className="flex items-center gap-2 mb-3">
            <svg viewBox="0 0 177 352" fill="currentColor" className="w-[8px] h-4 text-[#E1342B]">
              <polygon points="148.63,0.48 103.24,139.95 177.14,139.95 27.66,351.9 72.66,194.79 0,194.79 36.62,0.48" />
            </svg>
            <span className="text-xs font-semibold text-[#6B6B6B] tracking-widest uppercase">VBM Elektro</span>
          </div>
          <p className="text-[#1A1A1A] font-semibold mb-4">{block.tekst}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/book" className="bg-[#E1342B] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#c42d24] transition-colors inline-flex items-center justify-center text-sm">
              Book gratis befaring
            </Link>
            <a href={`tel:${BEDRIFT.telefon.replace(/\s/g, "")}`}
              className="border border-[#1A1A1A]/15 text-[#1A1A1A] font-semibold px-6 py-3 rounded-lg hover:border-[#1A1A1A]/30 transition-colors inline-flex items-center justify-center text-sm">
              {BEDRIFT.telefon}
            </a>
          </div>
        </div>
      )
    default:
      return null
  }
}

export default async function BloggArtikkelPage({ params }: Props) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const andrePoster = posts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-[#F7F6F3]">
      <SiteHeader />

      <div className="pt-20">
        {/* Artikkel-hero */}
        <div className="bg-[#1A1A1A]">
          <div className="h-[3px] bg-[#E1342B]" />
          <div className="max-w-3xl mx-auto px-6 py-14">
            <div className="flex items-center gap-3 mb-6 text-xs text-white/40">
              <Link href="/blogg" className="hover:text-white/70 transition-colors">Blogg</Link>
              <span>/</span>
              <span className="text-[#E1342B] font-semibold">{post.kategori}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">{post.tittel}</h1>
            <p className="text-white/50 text-lg leading-relaxed mb-8">{post.beskrivelse}</p>
            <div className="flex items-center gap-4 text-xs text-white/30 border-t border-white/10 pt-6">
              <span>{formatDato(post.dato)}</span>
              <span>·</span>
              <span>{post.lesetid} min lesetid</span>
              <span>·</span>
              <span>{BEDRIFT.navn}</span>
            </div>
          </div>
        </div>

        {/* Innhold */}
        <div className="max-w-3xl mx-auto px-6 py-12">
          <article>
            {(post.content as ContentBlock[]).map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </article>
        </div>

        {/* Andre artikler */}
        {andrePoster.length > 0 && (
          <div className="bg-[#EEEDE8] py-14">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8">Flere artikler</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {andrePoster.map((a) => (
                  <Link key={a.slug} href={`/blogg/${a.slug}`}
                    className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow group">
                    <span className="text-xs font-semibold text-[#E1342B] tracking-wide uppercase block mb-3">{a.kategori}</span>
                    <h3 className="font-bold text-[#1A1A1A] mb-2 group-hover:text-[#E1342B] transition-colors leading-snug">{a.tittel}</h3>
                    <p className="text-sm text-[#6B6B6B] line-clamp-2">{a.beskrivelse}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        <footer className="bg-[#1A1A1A] py-8">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
            <span>© {new Date().getFullYear()} {BEDRIFT.navn}</span>
            <div className="flex gap-5">
              <Link href="/" className="hover:text-white/60 transition-colors">Forsiden</Link>
              <Link href="/blogg" className="hover:text-white/60 transition-colors">Blogg</Link>
              <Link href="/personvern" className="hover:text-white/60 transition-colors">Personvern</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
