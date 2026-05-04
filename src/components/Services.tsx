import Link from "next/link"

const services = [
  {
    num: "01",
    title: "Boliginstallasjon",
    desc: "Stikkontakter, belysning, kurser, bad og kjøkken. Oppgradering av elektrisk anlegg. Fra enkle serviceoppdrag til komplette installasjoner.",
    href: "#kontakt",
  },
  {
    num: "02",
    title: "Oppussing og rehabilitering",
    desc: "El-arbeid ved oppussing planlegges riktig fra start. Vi utfører alt elektrisk ved renovering av kjøkken, bad, og totalrehab.",
    href: "/oppussing-elektro",
  },
  {
    num: "03",
    title: "Elektriker for entreprenører",
    desc: "Fleksibel elektropartner for boligprosjekter, rehabilitering og næring. Vi møter opp, følger fremdrift og leverer ryddig dokumentasjon.",
    href: "#kontakt",
  },
  {
    num: "04",
    title: "Industri og næring",
    desc: "Service, installasjoner og feilsøking i lokaler, verksteder og næringsbygg. Tilpasninger og oppgraderinger etter behov.",
    href: "#kontakt",
  },
  {
    num: "05",
    title: "Elbillader installasjon",
    desc: "Installert og tilkoblet av sertifisert elektriker. Alle ledende merker. Tilbud innen 24 timer.",
    href: "/elbillader-installasjon",
  },
  {
    num: "06",
    title: "Sikringsskap og tavle",
    desc: "Bytte, oppgradering og feilsøking av sikringsskap. Forutsigbar pris og tydelig rapport.",
    href: "/sikringsskap",
  },
]

export function Services() {
  return (
    <section id="tjenester" className="bg-mist section-pad">
      <div className="container-vbm">

        <div className="mb-16">
          <p className="type-eyebrow text-brand mb-4">Tjenester</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="type-section text-coal">
              Alle typer<br />el-arbeid.
            </h2>
            <p className="text-body text-steel max-w-sm leading-relaxed">
              Vi utfører primært boliginstallasjon, men bistår også med entreprenørprosjekter og næring.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          {services.map((s, i) => (
            <Link
              key={s.num}
              href={s.href}
              className={`group flex items-center gap-6 md:gap-10 py-7 border-b border-border transition-all duration-150 hover:bg-coal ${
                i === 0 ? "border-t" : ""
              }`}
            >
              <span
                className="type-service-num w-14 md:w-20 flex-shrink-0 text-surface group-hover:text-white/20 transition-colors duration-150"
                aria-hidden
              >
                {s.num}
              </span>

              <div className="flex-1 min-w-0">
                <h3 className="type-service-title text-coal group-hover:text-white transition-colors duration-150">
                  {s.title}
                </h3>
                <p className="text-body-sm text-steel leading-relaxed mt-1.5 group-hover:text-white/60 transition-colors duration-150">
                  {s.desc}
                </p>
              </div>

              <span
                className="text-xl font-light flex-shrink-0 text-ghost group-hover:text-white group-hover:translate-x-1 transition-all duration-150"
                aria-hidden
              >
                →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
