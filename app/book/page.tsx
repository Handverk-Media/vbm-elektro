import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { BEDRIFT } from "@/data/bedrift"

export const metadata: Metadata = {
  title: "Book befaring",
  description: "Book en gratis videobefaring eller fysisk befaring med VBM Elektro. Velg tid som passer deg.",
}

export default function BookPage() {
  return (
    <div className="min-h-screen bg-[#F7F6F3]">
      {/* Mini nav */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#F7F6F3]/95 backdrop-blur-sm border-b border-[#EEEDE8]">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.svg" alt="VBM Elektro" width={120} height={48} priority />
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <a
              href={`tel:${BEDRIFT.telefon.replace(/\s/g, "")}`}
              className="hidden sm:flex items-center gap-2 text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.9 10.9a19.79 19.79 0 01-3.07-8.68A2 2 0 012.83 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l.98-.98a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              {BEDRIFT.telefon}
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" />
              </svg>
              Tilbake
            </Link>
          </div>
        </div>
      </header>

      <div className="pt-20">
        {/* Hero strip */}
        <div className="bg-[#EEEDE8] border-b border-[#1A1A1A]/5">
          <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <svg viewBox="0 0 177 352" fill="currentColor" className="w-[8px] h-4 text-[#E1342B]">
                  <polygon points="148.63,0.48 103.24,139.95 177.14,139.95 27.66,351.9 72.66,194.79 0,194.79 36.62,0.48" />
                </svg>
                <span className="text-xs font-semibold text-[#6B6B6B] tracking-widest uppercase">Uforpliktende</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1A1A1A]">
                Book befaring
              </h1>
              <p className="text-[#6B6B6B] mt-2 max-w-md">
                Velg tid som passer deg – enten en gratis videobefaring eller fysisk befaring hjemme hos deg.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-[#6B6B6B]">
              {[
                "Gratis og uforpliktende",
                "Fysisk eller video",
                "Tilbakering innen 1 time",
              ].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-[#E1342B] flex-shrink-0">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Calendar embed */}
        <div className="max-w-5xl mx-auto px-4 py-10">
          <iframe
            src="https://api.leadconnectorhq.com/widget/bookings/vbmelektro"
            style={{ width: "100%", height: "800px", border: "none" }}
            scrolling="yes"
            title="Book befaring med VBM Elektro"
          />
        </div>

        {/* Footer strip */}
        <div className="border-t border-[#EEEDE8] bg-[#F7F6F3]">
          <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#6B6B6B]">
            <span>Foretrekker du å ringe? <a href={`tel:${BEDRIFT.telefon.replace(/\s/g, "")}`} className="text-[#1A1A1A] font-semibold hover:text-[#E1342B] transition-colors">{BEDRIFT.telefon}</a></span>
            <Link href="/personvern" className="hover:text-[#1A1A1A] transition-colors">Personvern</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
