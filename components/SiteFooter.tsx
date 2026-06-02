import { FooterNewsletter } from './FooterNewsletter'
import { PhoneLink } from './PhoneLink'

export function SiteFooter() {
  return (
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
              <PhoneLink location="footer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                90 63 31 18
              </PhoneLink>
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
            <a href="/tjenester#elbillader">Elbillader</a>
            <a href="/tjenester#service">Serviceoppdrag</a>
            <a href="/tjenester#renovering">Renovering</a>
            <a href="/tjenester#smarthus">Smarthus</a>
            <a href="/tjenester#feilsoking">Feilsøking</a>
            <a href="/tjenester#naering">Næringsbygg</a>
          </div>

          <div className="foot-col">
            <h5>Info</h5>
            <a href="/om-oss">Om oss</a>
            <a href="/blogg">Blogg</a>
            <a href="/kontakt">Kontakt oss</a>
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
  )
}
