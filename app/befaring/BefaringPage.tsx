"use client"

import { useState } from "react"
import "./befaring.css"

// GHL-popup: alle knapper med klassen "js-book-befaring" åpner GHL-bookingwidgeten
// (kalender + skjema) — widgeten kobles til denne klassen. Widgeten samler
// navn/telefon/e-post, fanger gclid/utm-parametre, og fullført booking spores
// som konverteringen «Befaring booket». GHL-skjema kobles her — redirect til
// /takk etter innsending.

const NAAR_PUNKTER = [
  "Nytt sikringsskap – vi må se hele anlegget, ikke bare skapet",
  "Elbillader med lang eller vanskelig kabelvei",
  "Flere jobber samtidig – én befaring, én samlet pris",
  "Eldre bolig med usikker kapasitet i anlegget",
  "Varmekabler, større renovering eller påbygg",
]

const STEG = [
  {
    tittel: "Velg et ledig tidspunkt",
    beskrivelse:
      "Kalenderen viser når vi har ledig. Velg det som passer deg – dag eller kveld – og du får bekreftelsen med én gang.",
  },
  {
    tittel: "Vi kommer hjem til deg",
    beskrivelse:
      "Vi ser på sikringsskapet, anlegget og der jobben skal gjøres. Still alle spørsmålene du har – det er derfor vi kommer.",
  },
  {
    tittel: "Du får prisen skriftlig",
    beskrivelse:
      "Som regel innen en dag. Prisen du får, er prisen du betaler – og du bestemmer i ro og fred om du vil gå videre.",
  },
]

const FAQ = [
  {
    sporsmal: "Koster befaringen noe?",
    svar: "Befaringen er uforpliktende – du binder deg ikke til noe ved å booke. Dukker det opp noe, kan du enkelt flytte eller avbestille tidspunktet.",
  },
  {
    sporsmal: "Hvor lang tid tar den?",
    svar: "Vanligvis under en time, avhengig av jobben. Du trenger ikke forberede annet enn tilgang til sikringsskapet.",
  },
  {
    sporsmal: "Forplikter befaringen meg til noe?",
    svar: "Nei. Du får en skriftlig pris, og så bestemmer du deg i ditt eget tempo. Ingen oppfølgingsmas.",
  },
  {
    sporsmal: "Kan jeg få pris uten befaring?",
    svar: "Ofte, ja. Mindre jobber priser vi fra et bilde av sikringsskapet og en kort beskrivelse. Er du usikker, send bildet først – så sier vi fra om vi trenger å komme.",
  },
  {
    sporsmal: "Hvor kjører dere?",
    svar: "Vi holder til på Billingstad og tar befaringer i Drammen, Asker, Bærum, Lier og Øvre Eiker.",
  },
]

const TILLIT = [
  "Registrert elektrovirksomhet",
  "Skriftlig pris etter befaring",
  "Billingstad · hele Asker og Bærum · Drammen",
]

const MIKROTILLIT_HERO = [
  "Registrert elektrovirksomhet",
  "Uforpliktende befaring",
  "Drammen, Asker, Bærum, Lier og Øvre Eiker",
]

function SectionHead({ kicker, meta, tittel }: { kicker: string; meta: string; tittel: string }) {
  return (
    <>
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[.16em] font-semibold text-[#E31E25]">
          {kicker}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[.16em] text-[#6B6B6B] text-right">
          {meta}
        </span>
      </div>
      <div className="h-[2px] bg-[#111111] mt-3" />
      <h2 className="font-sans font-semibold text-[24px] md:text-[30px] tracking-[-.02em] text-[#111111] mt-5">
        {tittel}
      </h2>
    </>
  )
}

function BtnPrimary({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="js-book-befaring inline-flex items-center justify-center bg-[#E31E25] hover:bg-[#C0161C] text-white px-[22px] py-[13px] font-sans font-semibold text-[14px] tracking-[-.01em] transition-colors"
    >
      {children}
    </a>
  )
}

function BtnGhost({ children, dark = true }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <a
      href="tel:+4790633118"
      className={
        dark
          ? "inline-flex items-center justify-center border border-white/85 text-white px-[22px] py-[13px] font-sans font-semibold text-[14px] tracking-[-.01em]"
          : "inline-flex items-center justify-center border border-[#111111] text-[#111111] px-[22px] py-[13px] font-sans font-semibold text-[14px] tracking-[-.01em]"
      }
    >
      {children}
    </a>
  )
}

export default function BefaringPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="font-sans bg-white text-[#111111] antialiased">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&display=swap"
      />

      {/* ===== A · HERO ===== */}
      <section className="relative overflow-hidden bg-[#111111]">
        <div
          role="img"
          aria-label=""
          className="absolute inset-0 md:inset-y-0 md:right-0 md:left-auto w-full md:w-[62%] h-full opacity-[.34] md:opacity-100"
          style={{
            backgroundImage: "url(/befaring-hero.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "72% center",
          }}
        />
        <div
          className="hidden md:block absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(90deg,#111111 34%,rgba(17,17,17,.78) 52%,rgba(17,17,17,.26) 72%,transparent 100%)",
          }}
        />

        <div className="relative z-10 max-w-[900px] mx-auto px-6">
          <div className="hidden md:flex items-center justify-between py-4 border-b border-white/[.18]">
            <span className="font-mono text-[10.5px] uppercase tracking-[.16em] text-[#BBBBBB]">
              VBM ELEKTRO AS
            </span>
            <span className="font-mono text-[10.5px] uppercase tracking-[.16em] text-[#BBBBBB]">
              BEFARING · DRAMMEN · ASKER · BÆRUM
            </span>
          </div>

          <div className="pt-16 pb-20 md:pt-14 md:pb-24">
            <img src="/vbm-logo-invertert.png" alt="VBM Elektro AS" className="w-[138px] mix-blend-screen" />
            <div className="w-14 h-[3px] bg-[#E31E25] mt-6 mb-6" />

            <h1
              className="font-sans font-semibold tracking-[-.02em] leading-[1.08] text-white"
              style={{ fontSize: "clamp(32px,5vw,48px)" }}
            >
              Usikker på hva jobben krever?
              <br />
              <span className="text-[#E31E25]">Vi kommer og ser på det.</span>
            </h1>

            <p className="text-[15px] text-[#E6E6E6] max-w-[44ch] mt-5 leading-relaxed">
              Noen jobber kan ikke prises fra et bilde. Da kommer vi hjem til deg, ser på anlegget, og gir deg
              skriftlig pris etterpå. Befaringen forplikter deg ikke til noe.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <BtnPrimary>Book befaring</BtnPrimary>
              <BtnGhost>Ring 90 63 31 18</BtnGhost>
            </div>

            <div className="flex flex-wrap mt-10">
              {MIKROTILLIT_HERO.map((t, i) => (
                <span
                  key={t}
                  className={`font-mono text-[11.5px] text-[#BBBBBB] px-4 first:pl-0 ${
                    i > 0 ? "border-l border-white/[.28]" : ""
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== B · NÅR ===== */}
      <section className="max-w-[900px] mx-auto px-6 mt-16">
        <SectionHead kicker="01 · NÅR" meta="Bilde holder ofte – befaring når det trengs" tittel="Når trenger du befaring?" />

        <p className="text-[15px] text-[#6B6B6B] leading-relaxed mt-6 max-w-[62ch]">
          Mindre jobber priser vi som regel fra et bilde av sikringsskapet. Men noen jobber må ses med egne øyne før
          prisen kan settes:
        </p>

        <ul className="mt-6 border-t border-[#111111]">
          {NAAR_PUNKTER.map((punkt) => (
            <li
              key={punkt}
              className="relative flex items-center min-h-[56px] pl-6 py-[11px] border-b border-[#E5E5E5]"
            >
              <span className="absolute left-0 font-mono text-[13px] font-semibold text-[#E31E25]">+</span>
              <span className="text-[13.5px] text-[#6B6B6B]">{punkt}</span>
            </li>
          ))}
        </ul>

        <p className="text-[13.5px] text-[#6B6B6B] leading-relaxed mt-6">
          Er du usikker på om jobben din trenger befaring? Book den uansett – det koster deg ingenting å spørre.
        </p>
      </section>

      {/* ===== C · PROSESS ===== */}
      <section className="max-w-[900px] mx-auto px-6 mt-[72px]">
        <SectionHead kicker="02 · PROSESS" meta="Fra booking til skriftlig pris" tittel="Slik foregår befaringen" />

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#111111] mt-8">
          {STEG.map((steg, i) => (
            <div
              key={steg.tittel}
              className={`p-6 md:p-8 ${
                i > 0 ? "border-t md:border-t-0 md:border-l border-[#E5E5E5]" : ""
              }`}
            >
              <div className="font-mono text-[34px] text-[#D9D9D9] leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[.16em] font-semibold text-[#E31E25] mt-4">
                STEG {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-sans font-semibold text-[15.5px] tracking-[-.02em] text-[#111111] mt-2">
                {steg.tittel}
              </div>
              <p className="text-[13.5px] text-[#6B6B6B] leading-relaxed mt-2">{steg.beskrivelse}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== D · SPØRSMÅL ===== */}
      <section className="max-w-[900px] mx-auto px-6 mt-16">
        <SectionHead kicker="03 · SPØRSMÅL" meta="Svar på det folk lurer på" tittel="Spørsmål og svar" />

        <div className="border-t border-[#111111] mt-8">
          {FAQ.map((item, i) => {
            const isOpen = openFaq === i
            return (
              <div key={item.sporsmal} className="border-b border-[#E5E5E5]">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full flex items-start gap-4 py-5 text-left"
                >
                  <span className="font-mono text-[12px] text-[#6B6B6B] pt-[3px] w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-sans font-semibold text-[15px] tracking-[-.02em] text-[#111111]">
                    {item.sporsmal}
                  </span>
                  <span
                    className={`font-mono text-[16px] text-[#111111] transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="text-[14.5px] text-[#6B6B6B] leading-relaxed pl-10 pr-8 pb-5">{item.svar}</p>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* ===== F · TILLITSRAD ===== */}
      <section className="max-w-[900px] mx-auto px-6 mt-[72px]">
        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#E5E5E5]">
          {TILLIT.map((t, i) => (
            <div
              key={t}
              className={`p-5 font-mono text-[12px] text-[#111111] ${
                i > 0 ? "border-t md:border-t-0 md:border-l border-[#E5E5E5]" : ""
              }`}
            >
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* ===== G · SORT SLUTT-CTA ===== */}
      <section className="max-w-[900px] mx-auto px-6 mt-[72px]">
        <div className="bg-[#111111] text-white p-[38px_34px] flex flex-col md:flex-row md:items-center justify-between gap-7">
          <div>
            <div className="font-sans font-semibold text-[22px] tracking-[-.02em]">
              Lettere å vise enn å forklare?
            </div>
            <p className="text-[14px] text-[#E6E6E6] max-w-[46ch] mt-2 leading-relaxed">
              Book en befaring, så ser vi på det sammen – og du får prisen skriftlig etterpå.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <BtnPrimary>Book befaring</BtnPrimary>
            <BtnGhost>Ring 90 63 31 18</BtnGhost>
          </div>
        </div>
      </section>

      {/* ===== H · FOOTER-STRIPE ===== */}
      <footer className="border-t-2 border-[#111111] mt-16">
        <div className="max-w-[900px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <span className="font-mono text-[11px] text-[#6B6B6B]">VBM Elektro AS · Billingstadsletta 22</span>
          <span className="font-mono text-[11px] text-[#6B6B6B]">90 63 31 18 · vbmelektro.no</span>
        </div>
      </footer>
    </div>
  )
}
