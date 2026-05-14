import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { INNLEGG } from "@/data/innlegg"
import { BEDRIFT } from "@/data/bedrift"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return INNLEGG.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const innlegg = INNLEGG.find((i) => i.slug === slug)
  if (!innlegg) return {}
  return {
    title: innlegg.tittel,
    description: innlegg.ingress,
  }
}

function formatDato(dato: string) {
  return new Date(dato).toLocaleDateString("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

function renderInnhold(innhold: string) {
  const lines = innhold.split("\n")
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i].trim()
    if (!line) { i++; continue }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4">
          {line.replace("## ", "")}
        </h2>
      )
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="font-bold text-[#1A1A1A] mb-2">
          {line.replace(/\*\*/g, "")}
        </p>
      )
    } else if (line.startsWith("- ")) {
      const listItems: string[] = []
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        listItems.push(lines[i].trim().replace("- ", ""))
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} className="space-y-2 my-4 ml-4">
          {listItems.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-[#1A1A1A]">
              <span className="text-[#E1342B] font-bold mt-0.5 flex-shrink-0">–</span>
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
            </li>
          ))}
        </ul>
      )
      continue
    } else if (/^\d+\. /.test(line)) {
      const listItems: string[] = []
      while (i < lines.length && /^\d+\. /.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^\d+\. /, ""))
        i++
      }
      elements.push(
        <ol key={`ol-${i}`} className="space-y-2 my-4 ml-4 list-decimal list-inside">
          {listItems.map((item, j) => (
            <li key={j} className="text-[#1A1A1A]"
              dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
          ))}
        </ol>
      )
      continue
    } else if (line.startsWith("| ")) {
      const tableLines: string[] = []
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        if (!lines[i].includes("---")) tableLines.push(lines[i].trim())
        i++
      }
      elements.push(
        <div key={`table-${i}`} className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            {tableLines.map((row, ri) => {
              const cells = row.split("|").filter(c => c.trim())
              return (
                <tr key={ri} className={ri === 0 ? "bg-[#1A1A1A] text-white" : ri % 2 === 0 ? "bg-[#F7F6F3]" : "bg-white"}>
                  {cells.map((cell, ci) => (
                    ri === 0
                      ? <th key={ci} className="px-4 py-3 text-left font-semibold">{cell.trim()}</th>
                      : <td key={ci} className="px-4 py-3 border-b border-[#EEEDE8]">{cell.trim()}</td>
                  ))}
                </tr>
              )
            })}
          </table>
        </div>
      )
      continue
    } else {
      const html = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      elements.push(
        <p key={i} className="text-[#1A1A1A] leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: html }} />
      )
    }
    i++
  }
  return elements
}

export default async function BloggArtikkelPage({ params }: Props) {
  const { slug } = await params
  const innlegg = INNLEGG.find((i) => i.slug === slug)
  if (!innlegg) notFound()

  const andreInnlegg = INNLEGG.filter((i) => i.slug !== slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-[#F7F6F3]">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#F7F6F3]/95 backdrop-blur-sm border-b border-[#EEEDE8]">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.svg" alt="VBM Elektro" width={120} height={48} priority />
          </Link>
          <Link href="/blogg" className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors flex items-center gap-1.5">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" />
            </svg>
            Blogg
          </Link>
        </div>
      </header>

      <div className="pt-20">
        {/* Artikkel-hero */}
        <div className="bg-[#1A1A1A]">
          <div className="h-[3px] bg-[#E1342B]" />
          <div className="max-w-3xl mx-auto px-6 py-14">
            <div className="flex items-center gap-3 mb-6 text-xs text-white/40">
              <Link href="/blogg" className="hover:text-white/70 transition-colors">Blogg</Link>
              <span>/</span>
              <span className="text-[#E1342B] font-semibold">{innlegg.kategori}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              {innlegg.tittel}
            </h1>
            <p className="text-white/50 text-lg leading-relaxed mb-8">{innlegg.ingress}</p>
            <div className="flex items-center gap-4 text-xs text-white/30 border-t border-white/10 pt-6">
              <span>{formatDato(innlegg.dato)}</span>
              <span>·</span>
              <span>{innlegg.lesetid} min lesetid</span>
              <span>·</span>
              <span>{BEDRIFT.navn}</span>
            </div>
          </div>
        </div>

        {/* Artikkel-innhold */}
        <div className="max-w-3xl mx-auto px-6 py-12">
          <article className="prose-custom">
            {renderInnhold(innlegg.innhold)}
          </article>

          {/* CTA midt i artikkel */}
          <div className="my-12 bg-[#EEEDE8] rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-3">
              <svg viewBox="0 0 177 352" fill="currentColor" className="w-[8px] h-4 text-[#E1342B]">
                <polygon points="148.63,0.48 103.24,139.95 177.14,139.95 27.66,351.9 72.66,194.79 0,194.79 36.62,0.48" />
              </svg>
              <span className="text-xs font-semibold text-[#6B6B6B] tracking-widest uppercase">VBM Elektro</span>
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Trenger du hjelp med dette?</h3>
            <p className="text-[#6B6B6B] text-sm mb-5">
              Vi er autorisert elektriker i Bærum, Oslo og Asker. Gratis befaring og fast pris.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/book"
                className="bg-[#E1342B] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#c42d24] transition-colors inline-flex items-center justify-center gap-2 text-sm"
              >
                Book gratis befaring
              </Link>
              <a
                href={`tel:${BEDRIFT.telefon.replace(/\s/g, "")}`}
                className="border border-[#1A1A1A]/15 text-[#1A1A1A] font-semibold px-6 py-3 rounded-lg hover:border-[#1A1A1A]/30 transition-colors inline-flex items-center justify-center gap-2 text-sm"
              >
                {BEDRIFT.telefon}
              </a>
            </div>
          </div>
        </div>

        {/* Andre artikler */}
        {andreInnlegg.length > 0 && (
          <div className="bg-[#EEEDE8] py-14">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8">Flere artikler</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {andreInnlegg.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/blogg/${a.slug}`}
                    className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow group"
                  >
                    <span className="text-xs font-semibold text-[#E1342B] tracking-wide uppercase block mb-3">{a.kategori}</span>
                    <h3 className="font-bold text-[#1A1A1A] mb-2 group-hover:text-[#E1342B] transition-colors leading-snug">{a.tittel}</h3>
                    <p className="text-sm text-[#6B6B6B] line-clamp-2">{a.ingress}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
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
