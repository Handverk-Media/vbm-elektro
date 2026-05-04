import { VBM } from "@/lib/vbm"

const reasons = [
  {
    num: "01",
    title: "Lokal tilstedeværelse",
    desc: "Vi holder til sentralt på Billingstad og dekker Asker, Bærum, Oslo, Drammen og omegn. Ikke en nasjonal kjede — en lokal aktør du kan ringe direkte.",
  },
  {
    num: "02",
    title: "Ryddig kommunikasjon",
    desc: "Du får tydelig beskjed om hva som skal gjøres, hva det koster og hvordan jobben gjennomføres. Ingen overraskelser.",
  },
  {
    num: "03",
    title: "Bolig og næring",
    desc: "Vi jobber primært med boliginstallasjon, men har erfaring fra industri, entreprenørprosjekter og næringsoppdrag.",
  },
  {
    num: "04",
    title: "Tett oppfølging",
    desc: `Med ${VBM.teamSize} ansatte blir du ikke et nummer i systemet. Du har direkte kontakt med fagfolkene som faktisk utfører jobben.`,
  },
  {
    num: "05",
    title: "Trygt og dokumentert",
    desc: "Elektrisk arbeid skal utføres riktig. Vi leverer fagmessig arbeid og nødvendig dokumentasjon etter utført oppdrag.",
  },
]

export function WhyVBM() {
  return (
    <section id="om-oss" className="bg-coal">

      {/* Positioning */}
      <div className="container-vbm section-pad border-b border-white/10">
        <p className="type-eyebrow text-brand mb-12">Om oss</p>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-end">
          <div>
            <h2 className="type-section text-white">
              Lokalt elektrofirma<br />
              <span className="text-brand">med tett oppfølging.</span>
            </h2>
          </div>
          <div>
            <p className="text-body text-white/70 leading-relaxed mb-6">
              Hos VBM Elektro får du direkte kontakt med fagfolkene som faktisk utfører jobben. Vi er et lite
              elektrofirma med {VBM.teamSize} ansatte, korte beslutningsveier og høy fokus på ryddig arbeid,
              god kommunikasjon og trygg dokumentasjon.
            </p>
            <p className="text-body text-white/70 leading-relaxed">
              Vi utfører primært arbeid innen boliginstallasjon, men bistår også med oppdrag innen
              industri og næring.
            </p>
          </div>
        </div>
      </div>

      {/* 5 reasons */}
      <div className="container-vbm section-pad">
        <p className="type-label text-white/50 mb-12">Hvorfor velge VBM Elektro</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 divide-y md:divide-y-0 divide-white/10">
          {reasons.slice(0, 3).map((r) => (
            <div key={r.num} className="py-10 md:py-0 md:pr-10 md:border-r border-white/10 last:border-r-0">
              <span className="type-pillar-num text-brand block mb-4" aria-hidden>{r.num}</span>
              <h3 className="type-pillar text-white mb-3">{r.title}</h3>
              <p className="text-body-sm text-white/65 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10 mt-0 md:mt-10 pt-10 border-t border-white/10">
          {reasons.slice(3).map((r) => (
            <div key={r.num} className="py-10 md:py-0 md:px-10 first:pl-0 last:pr-0">
              <span className="type-pillar-num text-brand block mb-4" aria-hidden>{r.num}</span>
              <h3 className="type-pillar text-white mb-3">{r.title}</h3>
              <p className="text-body-sm text-white/65 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Areas */}
      <div className="border-t border-white/10">
        <div className="container-vbm py-12 md:py-14 flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
          <p className="type-eyebrow text-white/50 flex-shrink-0">Områder vi dekker</p>
          <p className="text-body text-white/70 leading-relaxed">
            {VBM.areaFull}
          </p>
        </div>
      </div>

    </section>
  )
}
