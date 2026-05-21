'use client'
import { TJENESTER } from '@/data/priser'
import { useCart } from '@/context/CartContext'

function CartBtn({ id, tag }: { id: string; tag?: string }) {
  const { leggTil } = useCart()
  const t = TJENESTER.find(x => x.id === id)
  if (!t) return null
  return (
    <button className="cart-btn" onClick={() => leggTil(t)} aria-label={`Legg til ${t.navn}`}>
      {tag && <span className="pop-tag">{tag}</span>}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
      </svg>
      <span>Legg til</span>
    </button>
  )
}

export function PricingSection() {
  return (
    <section className="pricing" id="priser">
      <div className="wrap">
        <div className="pricing-head" data-reveal>
          <div className="eyebrow yellow">Faste priser</div>
          <h2 style={{ marginTop: 18 }}>Det skal være enkelt å <em>forstå hva ting koster.</em></h2>
          <p className="sub">Her ser du priseksempler på vanlige jobber vi gjør hver uke — fra elbilladere til sikringsskap og serviceoppdrag. Tydelig pris før oppstart. Tillegg avklares før vi gjør jobben.</p>
          <div className="pricing-snark">
            <span>NB:</span> Endelig pris avhenger av bolig, anlegg og omfang. Vi går alltid gjennom dette før vi starter.
          </div>
        </div>

        <div className="price-doc" data-reveal>
          <div className="price-doc-head">
            <div className="pdh-left">
              <span className="pdh-logo">
                <svg width="11" height="22" viewBox="0 0 175 340" aria-hidden="true">
                  <path d="M 60 0 L 130 0 L 100 130 L 165 130 L 40 340 L 95 195 L 10 195 Z" fill="white" />
                </svg>
              </span>
              <span className="pdh-title">
                VBM Elektro · Prisliste
                <small>Org.nr 935 452 856</small>
              </span>
            </div>
            <div className="pdh-meta">
              <strong>Gyldig fra Mai 2026</strong>
              Alle priser inkl. mva.
            </div>
          </div>

          <div className="price-doc-cols">
            <span>Tjeneste / omfang</span>
            <span className="col-time">Tidsbruk</span>
            <span className="col-price">Fra-pris</span>
            <span className="col-cart" />
          </div>

          <div className="price-section-label">Elbillader</div>
          <div className="price-row has-tag">
            <div className="info">
              <h4>Elbillader — standard installasjon</h4>
              <p>Hjemmelader i garasje/carport. Inkluderer kabling fra sikringsskap, vern, dokumentasjon og idriftsettelse. <strong>Lader/ladeboks er ikke inkludert i prisen.</strong></p>
            </div>
            <span className="time">2–4 timer</span>
            <div className="pr"><div className="fra">FRA</div><div className="amt">kr 12 490</div></div>
            <CartBtn id="elbil-standard" tag="Mest bestilt" />
          </div>
          <div className="price-row">
            <div className="info">
              <h4>Elbillader — kompleks installasjon</h4>
              <p>Krevende kabelføring, kursoppgradering, eller montering i borettslag/parkeringskjeller. <strong>Lader/ladeboks er ikke inkludert i prisen.</strong></p>
            </div>
            <span className="time">4–8 timer</span>
            <div className="pr"><div className="fra">FRA</div><div className="amt">kr 18 490</div></div>
            <CartBtn id="elbil-komplex" />
          </div>

          <div className="price-section-label">Sikringsskap</div>
          <div className="price-row">
            <div className="info">
              <h4>Rehabilitering av sikringsskap</h4>
              <p>Nytt skap med jordfeilautomater og overspenningsvern. Inkluderer 5 stk. sikringer, demontering, dokumentasjon og sluttkontroll.</p>
            </div>
            <span className="time">4–8 timer</span>
            <div className="pr"><div className="fra">FRA</div><div className="amt">kr 14 990</div></div>
            <CartBtn id="skap-leilighet" />
          </div>

          <div className="price-section-label">Service</div>
          <div className="price-row">
            <div className="info">
              <h4>Feilsøking &amp; retting</h4>
              <p>Diagnose og utbedring av elektrisk feil. Pris inkluderer oppmøte, kjøring og dokumentasjon.</p>
            </div>
            <span className="time">Avhenger av feil</span>
            <div className="pr"><div className="fra">PER TIME</div><div className="amt">kr 1 200</div><div style={{ fontSize: 11, color: 'var(--text-faint)', marginTop: 2 }}>950 eks. mva</div></div>
            <CartBtn id="feilsok-time" />
          </div>

          <div className="price-section-label">Belysning</div>
          <div className="price-row">
            <div className="info">
              <h4>Downlights — 5 stk montert</h4>
              <p>Montering inkludert hulltakfresing og kabling. Spotlights ikke inkludert.</p>
            </div>
            <span className="time">2–4 timer</span>
            <div className="pr"><div className="fra">FRA</div><div className="amt">kr 6 490</div></div>
            <CartBtn id="downlight-5" />
          </div>
          <div className="price-row">
            <div className="info">
              <h4>Downlights — 10 stk montert</h4>
              <p>Montering inkludert hulltakfresing og kabling. Spotlights ikke inkludert.</p>
            </div>
            <span className="time">4–6 timer</span>
            <div className="pr"><div className="fra">FRA</div><div className="amt">kr 9 990</div></div>
            <CartBtn id="downlight-10" />
          </div>
          <div className="price-row">
            <div className="info">
              <h4>Varmekabler — bad opp til 6 m²</h4>
              <p>Inkluderer kabel, termostat, kontroll og dokumentasjon. Avrettingsmasse gjøres av flislegger.</p>
            </div>
            <span className="time">3–5 timer</span>
            <div className="pr"><div className="fra">FRA</div><div className="amt">kr 8 990</div></div>
            <CartBtn id="varmekabler-bad" />
          </div>

          <div className="price-doc-foot">
            <div className="pdf-note">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>Alle priser inkl. mva. Materiell etter avtale. Befaring eller videovurdering før endelig pris.</span>
            </div>
            <span className="pdf-stamp">Ingen skjulte tillegg</span>
          </div>
        </div>

        <p style={{ marginTop: 32, fontSize: 14.5, color: 'var(--text-soft)', maxWidth: 720 }}>
          Trenger du noe annet? Send oss en kort beskrivelse av jobben — gjerne med bilde — så svarer vi med pris innen 1 time i normal arbeidstid.
        </p>
      </div>
    </section>
  )
}
