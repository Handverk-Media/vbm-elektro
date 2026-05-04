const reviews = [
  { name: "Kari Andersen", location: "Asker", text: "Ringte VBM om morgenen, de kom samme dag. Ryddig jobb, forutsigbar pris og hyggelig elektriker. Vil absolutt bruke dem igjen." },
  { name: "Thomas Berg", location: "Bærum", text: "Trengte hjelp med sikringsskap og ny elbillader. Fikk god forklaring og prisen var akkurat som avtalt. Anbefales!" },
  { name: "Marianne Holm", location: "Asker", text: "Profesjonell og pålitelig. Svarte raskt, kom presis og jobbet effektivt. Akkurat det man ønsker av en lokal elektriker." },
]

export function Reviews() {
  return (
    <section className="bg-coal section-pad overflow-hidden">
      <div className="container-vbm">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p className="type-eyebrow text-brand mb-4">Kundene sier</p>
            <div className="flex items-baseline gap-4 mb-2">
              <span className="type-stat text-white">5.0</span>
              <span className="type-section text-brand leading-none" aria-label="5 av 5 stjerner">★★★★★</span>
            </div>
            <p className="text-caption text-white/50 tracking-widest uppercase">Basert på Google-anmeldelser</p>
          </div>
          <p className="text-body text-white/60 max-w-xs leading-relaxed">
            Hundrevis av fornøyde kunder i Asker og Bærum.
          </p>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-px bg-white/10">
          {reviews.map((r) => (
            <blockquote key={r.name} className="bg-panel p-8 flex flex-col gap-5">
              <span className="text-brand text-xl tracking-widest" aria-hidden>★★★★★</span>
              <p className="text-body text-white/85 leading-relaxed flex-1">
                "{r.text}"
              </p>
              <footer className="flex items-center gap-3 pt-5 border-t border-white/10">
                <div className="w-9 h-9 bg-brand flex items-center justify-center rounded-sm flex-shrink-0">
                  <span className="type-label text-white font-bold">{r.name.charAt(0)}</span>
                </div>
                <div>
                  <cite className="not-italic text-caption font-semibold text-white block">{r.name}</cite>
                  <span className="text-label text-white/50 tracking-wide">{r.location}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

      </div>
    </section>
  )
}
