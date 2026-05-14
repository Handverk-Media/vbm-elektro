import type { Metadata } from "next"
import Link from "next/link"
import { BEDRIFT } from "@/data/bedrift"
import { SiteHeader } from "@/components/SiteHeader"

export const metadata: Metadata = {
  title: "Om oss – VBM Elektro AS",
  description:
    "VBM Elektro AS er en autorisert elektroinstallasjonsbedrift i Bærum. Vi leverer elektriker-tjenester i Bærum, Oslo og Asker med fokus på kvalitet, ryddighet og dokumentasjon.",
}

const VERDIER = [
  {
    tittel: "Autorisert og ansvarlig",
    tekst:
      "Vi er NELFO-godkjent og autorisert elektroinstallasjonsbedrift. Alt arbeid dokumenteres med samsvarserklæring.",
  },
  {
    tittel: "Fast pris — ingen overraskelser",
    tekst:
      "Vi gir skriftlig pris før oppstart. Du vet hva jobben koster — uansett om det dukker opp uforutsette ting.",
  },
  {
    tittel: "Ryddig utførelse",
    tekst:
      "Vi rydder etter oss, sikrer at kabling er ordentlig lagt og leverer ferdig rapport med dokumentasjon.",
  },
  {
    tittel: "Rask respons",
    tekst:
      "Vi tilbakering innen 1 time på hverdager. Akutte situasjoner håndteres alltid med høy prioritet.",
  },
]

const OMRADER = [
  "Bærum", "Sandvika", "Billingstad", "Asker",
  "Oslo vest", "Lysaker", "Fornebu", "Høvik", "Nesbru",
]

export default function OmOssPage() {
  return (
    <div className="min-h-screen bg-[#F7F6F3]">
      <SiteHeader />

      <div className="pt-20">
        {/* Hero */}
        <section className="bg-[#1A1A1A] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-2 mb-5">
              <svg viewBox="0 0 177 352" fill="currentColor" className="w-[8px] h-4 text-[#E1342B]">
                <polygon points="148.63,0.48 103.24,139.95 177.14,139.95 27.66,351.9 72.66,194.79 0,194.79 36.62,0.48" />
              </svg>
              <span className="text-xs font-semibold text-white/40 tracking-widest uppercase">Om oss</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 max-w-2xl">
              Autorisert elektriker i Bærum, Oslo og Asker
            </h1>
            <div className="w-12 h-[3px] bg-[#E1342B] mb-6" />
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
              VBM Elektro AS er en lokal elektroinstallasjonsbedrift med base i Billingstad. Vi leverer kvalitetssikrede
              elektriker-tjenester til private og næringskunder i Bærum-regionen.
            </p>
          </div>
          <div className="h-[3px] bg-[#E1342B] mt-16" />
        </section>

        {/* Om bedriften */}
        <section className="py-20 bg-[#F7F6F3]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl font-bold text-[#1A1A1A] tracking-tight mb-6">
                  Hvem er vi?
                </h2>
                <div className="space-y-4 text-[#6B6B6B] leading-relaxed">
                  <p>
                    VBM Elektro AS ble grunnlagt med ett mål: å levere autorisert elektroarbeid med høy faglig standard,
                    ryddig kommunikasjon og forutsigbare priser. Vi er et lite og dedikert team som setter kundens behov
                    fremst i alt vi gjør.
                  </p>
                  <p>
                    Daglig leder og faglig ansvarlig er <strong className="text-[#1A1A1A]">Benjamin</strong>, en erfaren
                    elektriker med bred kompetanse innen boligelektro, elbillading og smarthusinstallasjon.
                    Han er personlig involvert i alle prosjekter og sørger for at arbeidet holder den standarden han setter
                    sitt navn på.
                  </p>
                  <p>
                    Vi er NELFO-godkjent og registrert som autorisert elektroinstallasjonsbedrift hos
                    Direktoratet for samfunnssikkerhet og beredskap (DSB). Det betyr at vi har lov til å utføre
                    og dokumentere elektrisk arbeid i tråd med norsk lov og NEK 400.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-4">
                  {[
                    { num: "200+", label: "prosjekter levert" },
                    { num: "5,0", label: "Google-rating" },
                    { num: "< 1t", label: "tilbakering" },
                    { num: "100%", label: "dokumentert arbeid" },
                  ].map((s) => (
                    <div key={s.label} className="bg-[#EEEDE8] rounded-xl p-5">
                      <div className="text-2xl font-bold text-[#E1342B] mb-1">{s.num}</div>
                      <div className="text-xs text-[#6B6B6B]">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="bg-[#1A1A1A] rounded-2xl p-8 mb-6">
                  <p className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-4">Kontaktinfo</p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <span className="text-white/30 w-16 flex-shrink-0">Adresse</span>
                      <span className="text-white/70">{BEDRIFT.adresse}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-white/30 w-16 flex-shrink-0">Telefon</span>
                      <a href={`tel:${BEDRIFT.telefon.replace(/\s/g, "")}`} className="text-white/70 hover:text-white transition-colors">
                        {BEDRIFT.telefon}
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-white/30 w-16 flex-shrink-0">E-post</span>
                      <a href={`mailto:${BEDRIFT.epost}`} className="text-white/70 hover:text-white transition-colors">
                        {BEDRIFT.epost}
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-white/30 w-16 flex-shrink-0">Åpent</span>
                      <span className="text-white/70">{BEDRIFT.apningstider}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-white/30 w-16 flex-shrink-0">Org.nr</span>
                      <span className="text-white/70">{BEDRIFT.orgnr}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#EEEDE8] rounded-2xl p-8">
                  <p className="text-[#6B6B6B] text-xs font-semibold tracking-widest uppercase mb-4">Dekningsområde</p>
                  <div className="flex flex-wrap gap-2">
                    {OMRADER.map((o) => (
                      <span key={o} className="bg-white text-[#1A1A1A] text-xs font-medium px-3 py-1.5 rounded-full border border-[#EEEDE8]">
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Verdier */}
        <section className="bg-[#EEEDE8] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#1A1A1A] tracking-tight mb-12">Slik jobber vi</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {VERDIER.map((v, i) => (
                <div key={v.tittel} className="bg-[#F7F6F3] rounded-xl p-7">
                  <div className="text-xs font-bold tracking-widest text-[#E1342B] mb-4">
                    0{i + 1}
                  </div>
                  <h3 className="font-bold text-[#1A1A1A] text-lg mb-3">{v.tittel}</h3>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed">{v.tekst}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sertifisering */}
        <section className="py-16 bg-[#F7F6F3] border-t border-[#EEEDE8]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <p className="text-xs font-semibold text-[#6B6B6B] tracking-widest uppercase mb-3">Godkjenninger</p>
                <div className="flex flex-wrap gap-3">
                  {["NELFO-godkjent", "Autorisert installatør", "NEK 400", "DSB-registrert"].map((g) => (
                    <span key={g} className="flex items-center gap-1.5 bg-[#EEEDE8] text-[#1A1A1A] text-xs font-semibold px-4 py-2 rounded-full">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-[#E1342B]">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      {g}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/book"
                  className="bg-[#E1342B] text-white font-bold px-7 py-3.5 rounded-lg hover:bg-[#c42d24] transition-colors inline-flex items-center justify-center gap-2"
                >
                  Book gratis befaring
                </Link>
                <Link
                  href="/kontakt"
                  className="border border-[#1A1A1A]/20 text-[#1A1A1A] font-semibold px-7 py-3.5 rounded-lg hover:border-[#1A1A1A]/40 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Send melding
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1A1A1A] py-8">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
            <span>© {new Date().getFullYear()} {BEDRIFT.navn} · Org.nr {BEDRIFT.orgnr}</span>
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
