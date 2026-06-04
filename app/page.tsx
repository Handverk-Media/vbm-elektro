import { HeroRotator } from '@/components/HeroRotator'
import { RevealObserver } from '@/components/RevealObserver'
import { ContactForm } from '@/components/ContactForm'
import { FooterNewsletter } from '@/components/FooterNewsletter'
import { MobileNav } from '@/components/MobileNav'
import { PricingSection } from '@/components/PricingSection'
import { BefaringCTA } from '@/components/BefaringCTA'
import { HomeNavLinks, ScrollLink } from '@/components/HomeNavLinks'

export default function Home() {
  return (
    <>
      <RevealObserver />

      {/* ── Nav ─────────────────────────────────── */}
      <nav className="top">
        <div className="nav-inner">
          <a href="/" className="logo">
            <svg width="26" height="36" viewBox="0 0 175 340" aria-hidden="true">
              <path d="M 60 0 L 130 0 L 100 130 L 165 130 L 40 340 L 95 195 L 10 195 Z" fill="#1A1A1A" />
            </svg>
            <div className="marks">
              <span className="name">VBM</span>
              <div className="div" />
              <span className="sub">Elektro AS</span>
            </div>
          </a>
          <HomeNavLinks />
          <div className="nav-right">
            <a href="tel:90633118" className="nav-phone">
              <span className="pulse" />
              90 63 31 18
            </a>
            <ScrollLink id="kontakt" className="btn btn-red">Få tilbud <span className="arr">→</span></ScrollLink>
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────── */}
      <section className="hero">
        <video autoPlay muted loop playsInline className="hero-bg-video" src="/hero-video.mp4" />
        <svg className="hero-bolt" viewBox="0 0 175 340" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <path d="M 60 0 L 130 0 L 100 130 L 165 130 L 40 340 L 95 195 L 10 195 Z" />
        </svg>
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="hero-live">
                <span className="live-dot" />
                <span><strong>Tilgjengelig nå</strong> · svartid &lt; 1 time</span>
              </div>
              <div className="hero-eyebrow eyebrow">Bærum · Asker · Oslo · Drammen</div>
              <h1>
                <span className="static">Endelig en elektriker</span>
                <span className="swap">
                  <HeroRotator />
                </span>
              </h1>
              <p className="hero-lede">
                <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Tydelig pris. Rask oppfølging. Dokumentasjon levert som standard.</strong>
              </p>
              <p className="hero-sub">
                VBM Elektro er bygget for folk som vil ha en ryddig prosess fra første kontakt til ferdig jobb. Fastpris før vi starter. God kommunikasjon underveis. Ingen overraskelser på slutten.
              </p>
              <div className="hero-cta">
                <ScrollLink id="kontakt" className="btn btn-red">Be om tilbud <span className="arr">→</span></ScrollLink>
                <BefaringCTA />
              </div>
              <div className="hero-meta">
                <div className="hero-meta-item"><span className="check">✓</span> Fastpris før vi starter</div>
                <div className="hero-meta-item"><span className="check">✓</span> Svar innen 1 time</div>
                <div className="hero-meta-item"><span className="check">✓</span> NELFO-godkjent</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Marquee ─────────────────────────────── */}
      <div className="marquee">
        <div className="marquee-track">
          {[
            ['Pris som holder', true], ['Ingen tillegg uten varsel', false],
            ['Dokumentasjon levert som standard', true], ['Svarer innen 1 time', false],
            ['Fastpris før oppstart', true], ['NELFO-godkjent', false],
            ['Lokalt forankret', true], ['Vi ringer tilbake', false],
            ['Tillegg avklares før vi starter', true], ['Autorisert elektriker', false],
            ['Ryddig fra start til slutt', true], ['Samsvarserklæring inkludert', false],
            ['Kommer som avtalt', true], ['Tydelig kommunikasjon hele veien', false],
            ['Ingen overraskelser på faktura', true],
            ['Pris som holder', true], ['Ingen tillegg uten varsel', false],
            ['Dokumentasjon levert som standard', true], ['Svarer innen 1 time', false],
            ['Fastpris før oppstart', true], ['NELFO-godkjent', false],
            ['Lokalt forankret', true], ['Vi ringer tilbake', false],
            ['Tillegg avklares før vi starter', true], ['Autorisert elektriker', false],
            ['Ryddig fra start til slutt', true], ['Samsvarserklæring inkludert', false],
            ['Kommer som avtalt', true], ['Tydelig kommunikasjon hele veien', false],
            ['Ingen overraskelser på faktura', true],
          ].map(([text, red], i) => (
            <span key={i} className="marquee-item">
              {text} <span className={`dot ${red ? 'red-dot' : ''}`}>●</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Truth ───────────────────────────────── */}
      <section className="truth">
        <div className="wrap">
          <div className="truth-grid">
            <div data-reveal>
              <div className="eyebrow" style={{ marginBottom: 24 }}>Den ærlige delen</div>
              <h2>
                Det er en grunn til at &ldquo;<span className="hl">sjokkregning fra elektriker</span>&rdquo; har egne Google-treff.
              </h2>
            </div>
            <div className="body-col" data-reveal>
              <p>
                Vi vet at mange forventer dårlig oppfølging, uklare priser og tillegg som dukker opp underveis. <strong>Derfor har vi bygget VBM Elektro rundt det motsatte.</strong>
              </p>
              <p>
                Tydelig pris før oppstart. God kommunikasjon underveis. Dokumentasjon levert som standard. Ingen overraskelser. Ingen &ldquo;vi får se.&rdquo;
              </p>
              <div className="quote-stack">
                <div className="qq">&ldquo;Holdt seg til avtalt pris.&rdquo;<span className="src">Kunde — Bærum</span></div>
                <div className="qq">&ldquo;Kom når de sa de skulle.&rdquo;<span className="src">Kunde — Asker</span></div>
                <div className="qq">&ldquo;Ingen overraskelser på fakturaen.&rdquo;<span className="src">Kunde — Oslo</span></div>
                <div className="qq">&ldquo;Dokumentasjon levert uten purring.&rdquo;<span className="src">Kunde — Drammen</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Manifesto ───────────────────────────── */}
      <section className="manifesto">
        <div className="wrap">
          <div className="lbl">Våre fire løfter</div>
          <h2 data-reveal>
            Du skal <span className="y">aldri</span> lure på prisen.<br />
            Du skal <span className="y">aldri</span> vente forgjeves.<br />
            Du skal <span className="y">aldri</span> mangle papirer.<br />
            Og <span className="r">når noe går skeis</span>, skal du nå oss.
          </h2>
          <div className="promise-grid">
            <div className="promise" data-reveal>
              <div className="n">01</div>
              <h3>Pris før vi starter</h3>
              <p>Du får skriftlig fastpris etter befaring eller videovurdering. Tillegg avklares <em>før</em> vi gjør jobben — aldri etter. Slik håndverkertjenesteloven § 32 krever.</p>
            </div>
            <div className="promise" data-reveal>
              <div className="n">02</div>
              <h3>Avtalt dag = avtalt dag</h3>
              <p>Vi booker den dagen som passer deg, og kommer den dagen. Hvis noe blir forsinket, ringer vi — ikke omvendt.</p>
            </div>
            <div className="promise" data-reveal>
              <div className="n">03</div>
              <h3>Dokumentasjon levert som standard</h3>
              <p>Samsvarserklæring, kursfortegnelse og sluttkontroll leveres digitalt rett etter jobb. Klart for boligsalg eller tilsyn.</p>
            </div>
            <div className="promise" data-reveal>
              <div className="n">04</div>
              <h3>Du får tak i oss</h3>
              <p>Mandag til fredag, 07–16. Etter det: vakttelefon for haster. Hvis vi ikke tar — ringer vi tilbake innen 1 time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ────────────────────────────── */}
      <section className="services" id="tjenester">
        <div className="wrap">
          <div className="services-head">
            <h2 data-reveal>
              Hva trenger du<br />
              <span className="scrib">hjelp med?</span>
            </h2>
            <div className="right" data-reveal>
              Elbillader. Feilsøking. Oppussing. Næringsbygg. Vi gjør både småjobber og større prosjekter — ryddig, dokumentert og som avtalt.
            </div>
          </div>

          <div className="bento">
            <div className="b-card feature" data-reveal>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M13 2L4.09 13.09a.5.5 0 00.39.81H11l-1.27 7.27a.5.5 0 00.86.4L20 10.81a.5.5 0 00-.39-.81H13l1.27-7.27a.5.5 0 00-.86-.4z" />
                </svg>
              </div>
              <h3>Ferdig montert elbillader med dokumentasjon inkludert.</h3>
              <p>Vi monterer Zaptec, Easee og andre kjente merker — klart til bruk samme dag i de fleste tilfeller.</p>
              <ScrollLink id="kontakt" className="arrow-link">Få tilbud på elbillader <span className="a">→</span></ScrollLink>
            </div>

            <div className="b-card tr1 red" data-reveal>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14.7 6.3a4.5 4.5 0 015.7 5.7l-1.9 1.9-3.8-3.8 1.9-1.9z" />
                  <path d="M14.6 10.2L4 20.8l-1.4-1.4L13.2 8.8" />
                  <path d="M16 4.5l3.5 3.5" />
                </svg>
              </div>
              <h3>Serviceoppdrag</h3>
              <p>Sikringer som ryker, stikkontakter som ikke virker eller ting som bare må fikses. Vi kommer, finner feilen og ordner det.</p>
              <ScrollLink id="kontakt" className="arrow-link">Bestill hjelp <span className="a">→</span></ScrollLink>
            </div>

            <div className="b-card tr2 warm" data-reveal>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="7" y="2" width="10" height="20" rx="2" />
                  <line x1="12" y1="18" x2="12" y2="18.01" />
                  <path d="M9.5 6h5" />
                </svg>
              </div>
              <h3>Smarthus</h3>
              <p>Lys, dimmere og styring som faktisk er enkelt å bruke. Vi hjelper deg med smarte løsninger uten å gjøre det mer komplisert enn det trenger å være.</p>
              <ScrollLink id="kontakt" className="arrow-link">Få tilbud <span className="a">→</span></ScrollLink>
            </div>

            <div className="b-card br1" data-reveal>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 11.5L12 4l9 7.5" />
                  <path d="M5 10v10h14V10" />
                  <path d="M10 20v-6h4v6" />
                </svg>
              </div>
              <h3>Oppussing</h3>
              <p>Nytt kjøkken, bad, tilbygg eller totalrenovering. Vi samarbeider med de andre fagene og holder ting ryddig underveis.</p>
              <ScrollLink id="kontakt" className="arrow-link">Få tilbud <span className="a">→</span></ScrollLink>
            </div>

            <div className="b-card br2 warmer" data-reveal>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.5" y2="16.5" />
                </svg>
              </div>
              <h3>Feilsøking</h3>
              <p>Noe som lukter brent? Strøm som forsvinner? Kurser som går hele tiden? Vi finner problemet og forklarer hva som må gjøres før vi starter.</p>
              <ScrollLink id="kontakt" className="arrow-link">Få hjelp <span className="a">→</span></ScrollLink>
            </div>

            <div className="b-card br3" data-reveal>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="7" width="18" height="14" rx="1" />
                  <path d="M8 7V5a1 1 0 011-1h6a1 1 0 011 1v2" />
                  <line x1="3" y1="13" x2="21" y2="13" />
                </svg>
              </div>
              <h3>Næringsbygg</h3>
              <p>For sameier, butikker, kontorer og entreprenører som trenger en elektriker som følger opp. Fast kontaktperson, tydelig kommunikasjon.</p>
              <ScrollLink id="kontakt" className="arrow-link">Snakk med oss <span className="a">→</span></ScrollLink>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }} data-reveal>
            <BefaringCTA label="Gratis Befaring" className="btn btn-red" />
          </div>
        </div>
      </section>

      {/* ── Pricing ─────────────────────────────── */}
      <PricingSection />

      {/* ── Process ─────────────────────────────── */}
      <section className="process" id="prosess">
        <div className="wrap">
          <div className="process-head">
            <h2 data-reveal>Enkelt og forutsigbart.<br /><em>Fordi det burde være det.</em></h2>
            <div className="right" data-reveal>Fem steg fra første melding til ferdig jobb. Tydelig pris, raske svar og dokumentasjon på plass.</div>
          </div>
          <div className="steps" data-reveal>
            <div className="step">
              <span className="bubble red">Start her</span>
              <div className="num">1</div>
              <h4>Send oss jobben</h4>
              <p>Send bilde, melding eller ring oss. Du trenger ikke vite hva ting heter — det finner vi ut av sammen.</p>
            </div>
            <div className="step">
              <span className="bubble">Typisk 30 min</span>
              <div className="num">2</div>
              <h4>Du hører fra oss</h4>
              <p>Vi svarer raskt med vurdering, spørsmål eller forslag til løsning. Mange jobber kan vurderes direkte fra bilder.</p>
            </div>
            <div className="step">
              <div className="num">3</div>
              <h4>Pris og avtale</h4>
              <p>Du får tydelig pris og forslag til tidspunkt før vi starter. Hvis noe må endres underveis, avklarer vi det først.</p>
            </div>
            <div className="step">
              <div className="num">4</div>
              <h4>Vi gjør jobben</h4>
              <p>Vi møter opp, gjør jobben ryddig og holder deg oppdatert underveis. Ingen overraskelser. Ingen jakt på elektrikeren etterpå.</p>
            </div>
            <div className="step">
              <span className="bubble">Garantert</span>
              <div className="num">5</div>
              <h4>Ferdig dokumentert</h4>
              <p>Samsvarserklæring og dokumentasjon sendes rett etter jobben er gjort. Klart for Boligmappa, forsikring og boligsalg.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VS ──────────────────────────────────── */}
      <section className="vs">
        <div className="wrap">
          <div className="vs-head">
            <div className="eyebrow">Litt for mange har opplevd dette</div>
            <h2 data-reveal>Det skal ikke være vanskelig å <span className="y">bruke elektriker.</span></h2>
          </div>
          <div className="vs-grid">
            <div className="vs-col them" data-reveal>
              <h3>
                <span className="emoji">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                    <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
                  </svg>
                </span>
                Vanlig opplevelse
              </h3>
              <ul>
                <li>Vanskelig å få tak i noen etter første kontakt</li>
                <li>Uklare priser og tillegg som dukker opp underveis</li>
                <li>Befaring uten tydelig tilbud i etterkant</li>
                <li>Lite informasjon om hva som faktisk gjøres</li>
                <li>Dokumentasjon som må purres på</li>
                <li>Ingen oppfølging etter at jobben er ferdig</li>
              </ul>
            </div>

            <div className="vs-mid-tag">vs.</div>

            <div className="vs-col us" data-reveal>
              <h3>
                <span className="emoji">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M13 2L4.09 13.09a.5.5 0 00.39.81H11l-1.27 7.27a.5.5 0 00.86.4L20 10.81a.5.5 0 00-.39-.81H13l1.27-7.27a.5.5 0 00-.86-.4z" />
                  </svg>
                </span>
                Slik jobber vi i VBM
              </h3>
              <ul>
                <li>Du får raskt svar — eller beskjed om når du får det</li>
                <li>Tydelig pris før vi starter</li>
                <li>Befaring eller videovurdering, avhengig av jobben</li>
                <li>Vi forklarer hva som skal gjøres og hvorfor</li>
                <li>Dokumentasjon leveres som standard</li>
                <li>Vi følger opp hvis noe ikke fungerer som det skal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────── */}
      <section className="testimonials">
        <div className="wrap">
          <div className="testi-head" data-reveal>
            <div className="eyebrow">Google · 4.9 av 5 <span className="stars">★★★★★</span></div>
            <h2 style={{ marginTop: 18 }}>Det kundene faktisk sier.</h2>
          </div>
          <div className="testi-grid">
            <div className="testi" data-reveal>
              <div className="stars">★★★★★</div>
              <q>Rask, ryddig og presis. Elbillader installert på 2 timer og alt ble dokumentert. Nøyaktig slik det skal gjøres.</q>
              <div className="who">
                <div className="avatar">T</div>
                <div className="meta"><span className="name">Thomas H.</span><span className="loc">Bærum</span></div>
              </div>
            </div>
            <div className="testi" data-reveal>
              <div className="stars">★★★★★</div>
              <q>Endelig en elektriker som svarer på telefon og faktisk holder avtaler. Ringte tilbake innen 30 minutter. Skal være sjeldent dette.</q>
              <div className="who">
                <div className="avatar">K</div>
                <div className="meta"><span className="name">Karin S.</span><span className="loc">Oslo vest</span></div>
              </div>
            </div>
            <div className="testi" data-reveal>
              <div className="stars">★★★★★</div>
              <q>Profesjonell installasjon ved bad-renovering. Fast pris, ingen overraskelser, papirene var på plass før jeg rakk å spørre. Anbefales på det varmeste.</q>
              <div className="who">
                <div className="avatar">L</div>
                <div className="meta"><span className="name">Lars O.</span><span className="loc">Sandvika</span></div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }} data-reveal>
            <BefaringCTA label="Book gratis befaring" className="btn btn-red" />
            <p style={{ marginTop: 12, fontSize: 13, color: 'var(--text-soft)' }}>Gratis og uforpliktende · Du velger tid i neste steg</p>
          </div>
        </div>
      </section>

      {/* ── Stats ───────────────────────────────── */}
      <section className="stats">
        <div className="wrap">
          <div className="stats-head" data-reveal>
            <div className="eyebrow">VBM i tall</div>
            <h2>Det skal være enkelt å vite hva du kan forvente.</h2>
          </div>
          <div className="stats-grid">
            <div className="stat" data-reveal>
              <span className="nr">01 / 04</span>
              <div className="num"><span>{'< 1'}</span><span className="unit">time</span></div>
              <div className="lbl">Gjennomsnittlig responstid på nye henvendelser i normal arbeidstid.</div>
            </div>
            <div className="stat" data-reveal>
              <span className="nr">02 / 04</span>
              <div className="num"><span>100</span><span className="unit">%</span></div>
              <div className="lbl">Alle jobber leveres med dokumentasjon og samsvarserklæring når det kreves.</div>
            </div>
            <div className="stat" data-reveal>
              <span className="nr">03 / 04</span>
              <div className="num"><span>0</span><span className="unit">kr</span></div>
              <div className="lbl">Ingen tillegg uten at det er avklart med deg først.</div>
            </div>
            <div className="stat" data-reveal>
              <span className="nr">04 / 04</span>
              <div className="num"><span>4,9</span><span className="star">★</span></div>
              <div className="lbl">Snittscore fra kunder på Google og Mittanbud.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────── */}
      <section className="faq" id="faq">
        <div className="wrap-tight">
          <div className="faq-head">
            <h2 data-reveal>Spørsmål folk faktisk stiller.</h2>
          </div>
          <div className="faq-list">
            <details className="faq-item" open>
              <summary>Hva koster en elbillader-installasjon hos dere?<span className="ico">+</span></summary>
              <div className="answer">
                <p>Standard installasjon starter på <strong>kr 9 990</strong>. Det inkluderer kabling fra sikringsskap, nødvendig vern, dokumentasjon og idriftsettelse. Hvis det trengs kursoppgradering, ekstra kabling i parkeringskjeller eller graving, ligger vi typisk på kr 14 900 og oppover.</p>
                <p>Selve laderen kommer i tillegg. Vi monterer alle godkjente merker — Zaptec, Easee, Defa, Schneider — og kan også skaffe utstyret hvis du ønsker.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Hvor raskt kan dere komme?<span className="ico">+</span></summary>
              <div className="answer">
                <p>Vanlige serviceoppdrag og elbillader: <strong>1–5 dager</strong> avhengig av sesong. Akutte feil (strømmen er borte, lukter svidd, jordfeilbryter slår ut): vi vurderer hver henvendelse — ring 90 63 31 18 så hjelper vi deg å prioritere.</p>
                <p>Større prosjekter som rehab og rammeavtaler avtaler vi separat — kontakt oss for en uforpliktende prat.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Hva hvis jobben blir større enn dere trodde — kommer det tillegg?<span className="ico">+</span></summary>
              <div className="answer">
                <p>Kort svar: <strong>du hører fra oss <em>før</em> det skjer.</strong> Hvis vi oppdager noe uventet — gammel kabling som må byttes, en kurs som ikke holder mål — stopper vi opp, ringer deg, og forklarer hva som må til og hva det koster. Du tar avgjørelsen før vi går videre.</p>
                <p><strong>Håndverkertjenesteloven § 32</strong> slår fast at hvis vi har gitt et prisoverslag, kan endelig pris ikke overstige det vesentlig. Vi går aldri dit. Hvis vi ikke kan holde prisen, hører du det først.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Jobber dere på hytte og fritidsbolig?<span className="ico">+</span></summary>
              <div className="answer">
                <p>Ja, men vi tar primært hytter i Oslo, Bærum, Asker, Drammen og nedslagsfelt. For lengre reise legger vi til kjørekostnad — som vi sier ifra om på forhånd, ikke etterpå.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Er dere godkjent og autorisert?<span className="ico">+</span></summary>
              <div className="answer">
                <p>Ja. Vi er registrert i Elvirksomhetsregisteret hos DSB, medlem av NHO Elektro og Elektro Union, og alle elektrikere har relevant fagbrev. Det er minimumskravet for å få jobbe lovlig som elektroinstallatør i Norge.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Kan dere brukes som underentreprenør på rehab-prosjekter?<span className="ico">+</span></summary>
              <div className="answer">
                <p>Ja — det er en stor del av det vi gjør. Vi leverer elektrofaget på rehab-prosjekter for entreprenører og byggherre i Oslo og Viken. Vi følger byggemøter, leverer dokumentasjon i tide, og jobber etter NS 8415/8416-rammer.</p>
                <p>Vi tar også rammeavtaler for eiendomsforvaltere, borettslag og næringseiendom. Kontakt oss for en samtale.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ── Video Befaring ───────────────────────── */}
      <section className="video-befaring" id="videoavklaring">
        <div className="wrap">
          <div className="vb-grid">
            <div data-reveal>
              <div className="eyebrow" style={{ color: 'var(--red)', marginBottom: 24 }}>Gratis · ingen forpliktelser</div>
              <h2>Få rask avklaring uten å vente på befaring.</h2>
              <p className="lede">Send oss bilder eller video av jobben, så vurderer vi løsning, omfang og hva som bør gjøres videre.</p>
              <ul className="vb-list">
                <li>Raskere avklaring</li>
                <li>Mange jobber kan vurderes direkte fra bilder</li>
                <li>Tydelig vurdering før vi avtaler noe</li>
              </ul>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="/videoavklaring" className="btn btn-red">Start videoavklaring <span className="arr">→</span></a>
                <BefaringCTA label="Gratis Befaring" />
              </div>
            </div>
            <div className="vb-steps" data-reveal>
              <div className="vb-step">
                <div className="n">01</div>
                <div><h4>Send bilder eller video</h4><p>Vis oss sikringsskap, området eller jobben som skal gjøres. Du trenger ikke forklare alt perfekt.</p></div>
              </div>
              <div className="vb-step">
                <div className="n">02</div>
                <div><h4>Vi vurderer jobben</h4><p>En autorisert elektriker ser gjennom det og vurderer løsning, omfang og neste steg.</p></div>
              </div>
              <div className="vb-step">
                <div className="n">03</div>
                <div><h4>Du får svar</h4><p>Vi kommer tilbake med vurdering, anbefaling og eventuelt prisestimat så raskt vi kan.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────── */}
      <section className="contact" id="kontakt">
        <div className="wrap">
          <div className="contact-grid">
            <div data-reveal>
              <div className="eyebrow" style={{ marginBottom: 24 }}>Kom i gang</div>
              <h2>Trenger du elektriker?</h2>
              <p className="lede">Send oss en melding, ring oss eller last opp bilder av jobben. Vi svarer raskt og sier fra hva som er lurt å gjøre videre.</p>
              <div className="contact-meta">
                <div className="cm-row">
                  <div className="cm-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div><div className="cm-lbl">Telefon</div><a href="tel:90633118" className="cm-val">90 63 31 18</a></div>
                </div>
                <div className="cm-row">
                  <div className="cm-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div><div className="cm-lbl">E-post</div><a href="mailto:benjamin@vbmelektro.no" className="cm-val">benjamin@vbmelektro.no</a></div>
                </div>
                <div className="cm-row">
                  <div className="cm-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" />
                    </svg>
                  </div>
                  <div><div className="cm-lbl">Åpningstider</div><div className="cm-val">Man–Fre: 07:00–16:00</div></div>
                </div>
                <div className="cm-row">
                  <div className="cm-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div><div className="cm-lbl">Adresse</div><div className="cm-val">Billingstadsletta 22, 1396 Billingstad</div></div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────── */}
      <footer className="foot">
        <div className="wrap">
          <div className="foot-social">
            <div className="foot-social-text">
              <h4>Følg oss</h4>
              <p>Nyeste prosjekter, tips og nyheter</p>
            </div>
            <div className="foot-social-icons">
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
              </a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" /></svg>
              </a>
            </div>
          </div>

          <div className="foot-top">
            <div className="foot-logo">
              <a href="/" className="logo">
                <svg width="26" height="36" viewBox="0 0 175 340" aria-hidden="true">
                  <path d="M 60 0 L 130 0 L 100 130 L 165 130 L 40 340 L 95 195 L 10 195 Z" fill="white" />
                </svg>
                <div className="marks">
                  <span className="name">VBM</span>
                  <div className="div" />
                  <span className="sub">Elektro AS</span>
                </div>
              </a>
              <p>Autorisert elektroinstallasjonsbedrift. NHO Elektro-godkjent. Bærum og Oslo.</p>
              <div className="foot-contact">
                <a href="tel:90633118">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  90 63 31 18
                </a>
                <a href="mailto:benjamin@vbmelektro.no">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  benjamin@vbmelektro.no
                </a>
              </div>
            </div>

            <div className="foot-col">
              <h5>Tjenester</h5>
              <ScrollLink id="tjenester">Elbillader</ScrollLink>
              <ScrollLink id="tjenester">Serviceoppdrag</ScrollLink>
              <ScrollLink id="tjenester">Renovering</ScrollLink>
              <ScrollLink id="tjenester">Smarthus</ScrollLink>
              <ScrollLink id="tjenester">Feilsøking</ScrollLink>
              <ScrollLink id="tjenester">Næringsbygg</ScrollLink>
            </div>

            <div className="foot-col">
              <h5>Info</h5>
              <a href="/om-oss">Om oss</a>
              <a href="/blogg">Blogg</a>
              <ScrollLink id="kontakt">Kontakt oss</ScrollLink>
              <a href="/personvern">Personvern</a>
              <a href="/nyhetsbrev">Nyhetsbrev</a>
              <a href="https://www.mittanbud.no" target="_blank" rel="noopener noreferrer">Mittanbud-profil ↗</a>
              <div className="foot-meta">
                Man–Fre: 07:00–16:00<br />
                Billingstadsletta 22, 1396 Billingstad
              </div>
            </div>

            <div className="foot-col foot-newsletter">
              <h5>Nyhetsbrev</h5>
              <p>Få tips om smarthus, elbillading og el-nyheter rett i innboksen.</p>
              <FooterNewsletter />
            </div>
          </div>

          <div className="foot-memberships">
            <span className="foot-mem-label">Medlem av</span>
            <div className="foot-mem-badges">
              <span className="foot-mem-badge">NHO Elektro</span>
              <span className="foot-mem-badge">Elektro Union</span>
            </div>
            <span className="foot-mem-divider" />
            <span className="foot-boligmappa">All dokumentasjon lastes opp i <strong>Boligmappa</strong></span>
          </div>

          <div className="foot-bottom">
            <div className="left">
              <span>© 2026 VBM Elektro AS</span>
              <span>Org.nr: 935 452 856</span>
            </div>
            <span>Bygget av <a href="https://handverkmedia.no" style={{ color: 'inherit', textDecoration: 'none' }}>Håndverk Media</a></span>
          </div>
        </div>
      </footer>
    </>
  )
}
