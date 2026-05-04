import { Nav } from "./Nav"
import { TrustBar } from "./TrustBar"
import { CTAStrip } from "./CTAStrip"
import { ContactForm } from "./ContactForm"
import { Footer } from "./Footer"
import { Services } from "./Services"
import { Reviews } from "./Reviews"
import { CheckCircle, Phone } from "lucide-react"
import { VBM } from "@/lib/vbm"

interface SEOLandingPageProps {
  headline: string
  subheadline: string
  intro: string
  keyword: string
  trustPoints: string[]
  faq: { q: string; a: string }[]
}

export function SEOLandingPage({
  headline,
  subheadline,
  intro,
  keyword,
  trustPoints,
  faq,
}: SEOLandingPageProps) {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="pt-16 bg-[#FAFAFA]">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[4px] uppercase text-[#E8261A] mb-5">
                {keyword}
              </p>
              <h1
                className="text-[52px] md:text-[68px] font-black uppercase leading-[0.95] tracking-tight text-[#1C1C1C] mb-6"
                style={{ fontFamily: "var(--font-barlow, sans-serif)" }}
              >
                {headline}
              </h1>
              <p className="text-[17px] text-[#555] leading-[1.75] mb-8 max-w-xl">
                {subheadline}
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <a
                  href={VBM.phoneHref}
                  className="flex items-center gap-2 bg-[#E8261A] text-white font-semibold px-7 py-4 rounded-md text-[15px] hover:bg-[#c9201f] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Ring {VBM.phone}
                </a>
                <a
                  href="#kontakt"
                  className="border-2 border-[#1C1C1C] text-[#1C1C1C] font-semibold px-7 py-4 rounded-md text-[15px] hover:bg-[#1C1C1C] hover:text-white transition-colors"
                >
                  Send forespørsel
                </a>
              </div>
              <ul className="flex flex-col gap-3">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#E8261A] flex-shrink-0" />
                    <span className="text-[14px] text-[#555] font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* Intro text — SEO content */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl">
              <p className="text-[16px] text-[#555] leading-[1.8]">{intro}</p>
            </div>
          </div>
        </section>

        <Services />
        <Reviews />
        <CTAStrip />

        {/* FAQ — SEO rich content */}
        {faq.length > 0 && (
          <section className="py-16 bg-[#FAFAFA]">
            <div className="max-w-6xl mx-auto px-6">
              <h2
                className="text-[36px] font-black uppercase text-[#1C1C1C] mb-8"
                style={{ fontFamily: "var(--font-barlow, sans-serif)" }}
              >
                Vanlige spørsmål
              </h2>
              <div className="flex flex-col gap-6 max-w-2xl">
                {faq.map((item) => (
                  <div key={item.q} className="border-b border-[#E0E0E0] pb-6">
                    <h3
                      className="text-[18px] font-bold text-[#1C1C1C] mb-2"
                      style={{ fontFamily: "var(--font-barlow, sans-serif)" }}
                    >
                      {item.q}
                    </h3>
                    <p className="text-[14px] text-[#555] leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
