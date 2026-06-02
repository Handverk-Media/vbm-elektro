import { HomeNavLinks } from './HomeNavLinks'
import { MobileNav } from './MobileNav'
import { PhoneLink } from './PhoneLink'

export function SiteHeader() {
  return (
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
          <PhoneLink className="nav-phone" location="header">
            <span className="pulse" />
            90 63 31 18
          </PhoneLink>
          <a href="/befaring" className="btn btn-red">Book befaring <span className="arr">→</span></a>
          <MobileNav />
        </div>
      </div>
    </nav>
  )
}
