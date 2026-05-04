import { Phone } from "lucide-react"
import { VBM } from "@/lib/vbm"

export function CTAStrip() {
  return (
    <section className="bg-brand overflow-hidden relative">
      <div className="pointer-events-none select-none absolute right-[-40px] top-1/2 -translate-y-1/2 opacity-[0.08]" aria-hidden>
        <svg width="400" height="580" viewBox="0 0 30 54" fill="none">
          <polygon points="20,0 3,28 13,28 10,54 27,26 17,26 26,0" fill="white" />
        </svg>
      </div>

      <div className="relative z-10 container-vbm py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="type-eyebrow text-white/70 mb-4">La oss hjelpe deg</p>
            <h2 className="type-section text-white leading-none">
              Trenger du<br />elektriker?
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4 flex-shrink-0">
            <a
              href={VBM.phoneHref}
              className="inline-flex items-center gap-3 bg-white text-brand font-bold px-8 py-5 rounded-md text-body hover:bg-white/90 transition-colors"
              aria-label={`Ring VBM Elektro på ${VBM.phone}`}
            >
              <Phone className="w-5 h-5" aria-hidden />
              {VBM.phone}
            </a>
            <a href="#kontakt" className="text-body-sm font-medium text-white/80 hover:text-white transition-colors underline underline-offset-4">
              Send forespørsel i stedet
            </a>
          </div>
        </div>
        <p className="text-caption text-white/70 mt-8 border-t border-white/20 pt-6">
          {VBM.hours} · {VBM.areaString}
        </p>
      </div>
    </section>
  )
}
