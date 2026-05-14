import type { Metadata } from "next"
import Link from "next/link"
import { BEDRIFT } from "@/data/bedrift"
import { SiteHeader } from "@/components/SiteHeader"
import posts from "@/data/posts.json"

export const metadata: Metadata = {
  title: "Fagblogg – Tips og råd om elektro",
  description:
    "Praktiske artikler om elbillading, elkontroll, smarthus og regelverk. Skrevet av autoriserte elektrikere i Bærum og Oslo.",
}

const KATEGORIER = ["Alle", "Elbillading", "Elkontroll", "Smarthus", "Regelverk", "Renovering", "Sikkerhet"]

function formatDato(dato: string) {
  return new Date(dato).toLocaleDateString("nb-NO", { day: "numeric", month: "long", year: "numeric" })
}

export default function BloggPage() {
  const featured = posts.find((p) => p.featured) ?? posts[0]
  const resten = posts.filter((p) => p.slug !== featured.slug)

  return (
    <div className="min-h-screen bg-[#F7F6F3]">
      <SiteHeader />

      <div className="pt-20">
        {/* Hero */}
        <section className="bg-[#1A1A1A]">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <div className="flex items-center gap-2 mb-5">
              <svg viewBox="0 0 177 352" fill="currentColor" className="w-[8px] h-4 text-[#E1342B]">
                <polygon points="148.63,0.48 103.24,139.95 177.14,139.95 27.66,351.9 72.66,194.79 0,194.79 36.62,0.48" />
              </svg>
              <span className="text-xs font-semibold text-white/40 tracking-widest uppercase">Fagblogg</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Tips og råd om elektro
            </h1>
            <p className="text-white/50 text-lg max-w-xl">
              Praktiske artikler skrevet av autoriserte elektrikere. Elbillading, smarthus, sikkerhet og regelverk.
            </p>
          </div>
          <div className="h-[3px] bg-[#E1342B]" />
        </section>

        {/* Featured */}
        <section className="py-12 border-b border-[#EEEDE8]">
          <div className="max-w-6xl mx-auto px-6">
            <Link href={`/blogg/${featured.slug}`} className="group grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#EEEDE8] rounded-2xl p-8 hover:bg-[#E8E7E2] transition-colors">
              <div>
                <span className="text-xs font-semibold text-[#E1342B] tracking-widest uppercase block mb-3">{featured.kategori}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] leading-snug mb-4 group-hover:text-[#E1342B] transition-colors">
                  {featured.tittel}
                </h2>
                <p className="text-[#6B6B6B] leading-relaxed mb-6">{featured.beskrivelse}</p>
                <div className="flex items-center gap-4 text-xs text-[#6B6B6B]">
                  <span>{formatDato(featured.dato)}</span>
                  <span>·</span>
                  <span>{featured.lesetid} min lesetid</span>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <div className="w-32 h-32 bg-[#1A1A1A] rounded-2xl flex items-center justify-center">
                  <svg viewBox="0 0 177 352" fill="currentColor" className="w-10 h-20 text-[#E1342B]">
                    <polygon points="148.63,0.48 103.24,139.95 177.14,139.95 27.66,351.9 72.66,194.79 0,194.79 36.62,0.48" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Kategori-filter (visuelt) */}
        <section className="bg-[#EEEDE8] border-b border-[#1A1A1A]/5">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex gap-2 py-4 overflow-x-auto">
              {KATEGORIER.map((k, i) => (
                <span key={k} className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-semibold ${i === 0 ? "bg-[#1A1A1A] text-white" : "bg-white text-[#6B6B6B]"}`}>
                  {k}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-14">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resten.map((innlegg) => (
                <Link key={innlegg.slug} href={`/blogg/${innlegg.slug}`}
                  className="group bg-white rounded-xl overflow-hidden border border-[#EEEDE8] hover:border-[#1A1A1A]/20 hover:shadow-lg transition-all">
                  <div className="h-1 bg-[#E1342B]" />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold text-[#E1342B] tracking-wide uppercase">{innlegg.kategori}</span>
                      <span className="text-xs text-[#6B6B6B]">{innlegg.lesetid} min</span>
                    </div>
                    <h2 className="font-bold text-[#1A1A1A] text-lg leading-snug mb-3 group-hover:text-[#E1342B] transition-colors">
                      {innlegg.tittel}
                    </h2>
                    <p className="text-sm text-[#6B6B6B] leading-relaxed mb-5 line-clamp-3">{innlegg.beskrivelse}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#EEEDE8]">
                      <span className="text-xs text-[#6B6B6B]">{formatDato(innlegg.dato)}</span>
                      <span className="text-xs font-semibold text-[#1A1A1A] group-hover:text-[#E1342B] transition-colors flex items-center gap-1">
                        Les mer
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                          <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#EEEDE8] py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">Trenger du hjelp av en elektriker?</h2>
            <p className="text-[#6B6B6B] mb-8 max-w-md mx-auto">Vi dekker Bærum, Oslo, Asker og Drammen. Gratis befaring og fast pris.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/book" className="bg-[#E1342B] text-white font-bold px-8 py-3.5 rounded-lg hover:bg-[#c42d24] transition-colors inline-flex items-center justify-center">
                Book gratis befaring
              </Link>
              <a href={`tel:${BEDRIFT.telefon.replace(/\s/g, "")}`}
                className="border border-[#1A1A1A]/20 text-[#1A1A1A] font-semibold px-8 py-3.5 rounded-lg hover:border-[#1A1A1A]/40 transition-colors inline-flex items-center justify-center">
                {BEDRIFT.telefon}
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-[#1A1A1A] py-8">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
            <span>© {new Date().getFullYear()} {BEDRIFT.navn}</span>
            <div className="flex gap-5">
              <Link href="/" className="hover:text-white/60 transition-colors">Forsiden</Link>
              <Link href="/personvern" className="hover:text-white/60 transition-colors">Personvern</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
