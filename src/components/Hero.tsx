import { Phone } from "lucide-react"
import { VBM } from "@/lib/vbm"

export function Hero() {
  return (
    <section className="relative bg-coal min-h-screen flex flex-col pt-16 overflow-hidden">

      {/* Vertical grid texture */}
      <div
        className="pointer-events-none select-none absolute inset-0 opacity-[0.018]"
        aria-hidden
        style={{ backgroundImage: "repeating-linear-gradient(90deg,transparent,transparent 79px,white 79px,white 80px)" }}
      />

      <div className="relative z-10 flex-1 flex flex-col container-vbm">

        {/* Main */}
        <div className="flex-1 flex flex-col justify-center py-20 md:py-28">
          <p className="type-eyebrow text-brand mb-10">Billingstad · {VBM.teamSize} ansatte · Lokal</p>

          <h1 className="type-hero text-white mb-10 max-w-4xl">
            Elektriker for<br />
            bolig og næring<br />
            <span className="text-brand">i Asker og Bærum.</span>
          </h1>

          <p className="text-body text-white/70 leading-relaxed max-w-lg mb-12">
            VBM Elektro hjelper privatpersoner, entreprenører og bedrifter med trygge elektriske
            installasjoner, oppgraderinger og servicearbeid — fra Billingstad.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-16">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center bg-brand text-white font-semibold px-8 py-4 rounded-md text-body-sm hover:bg-brand/90 transition-colors"
            >
              Be om tilbud
            </a>
            <a
              href={VBM.phoneHref}
              className="inline-flex items-center justify-center gap-2.5 border border-white/30 text-white font-medium px-8 py-4 rounded-md text-body-sm hover:border-white/60 transition-colors"
            >
              <Phone className="w-4 h-4" aria-hidden />
              Ring {VBM.phone}
            </a>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-8">
            {[
              "✓ Sertifiserte fagfolk",
              "✓ Forutsigbar pris",
              "✓ Ryddig kommunikasjon",
              "✓ Dokumentasjon etter utført arbeid",
            ].map((t) => (
              <span key={t} className="text-caption text-white/60 font-medium">{t}</span>
            ))}
          </div>
        </div>

        {/* Bottom stats strip */}
        <div className="border-t border-white/10 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {[
            { num: `${VBM.teamSize}`, label: "Ansatte" },
            { num: "10+", label: "Års erfaring" },
            { num: "100%", label: "Sertifisert" },
            { num: "3", label: "Kommuner" },
          ].map((s) => (
            <div key={s.label} className="py-6 px-6 md:px-8">
              <p className="type-h3 text-white leading-none">{s.num}</p>
              <p className="text-caption text-white/55 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
