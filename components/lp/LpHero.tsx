import Image from 'next/image'
import { PhoneLink } from '@/components/PhoneLink'
import { IcPin } from './LpIcons'
import { trackLpPrimaryCta } from '@/lib/analytics'

interface Props {
  id?: string
  page: string
  h1Start: string
  h1Accent: string
  lede: string
  primaryLabel: string
  trustItems: Array<{ icon: React.ReactNode; label: string }>
  bgImage: string
  bgAlt: string
  children: React.ReactNode
}

export function LpHero({ id, page, h1Start, h1Accent, lede, primaryLabel, trustItems, bgImage, bgAlt, children }: Props) {
  return (
    <section id={id} className="lp3-hero">
      <div className="lp3-hero-bg" aria-hidden="true">
        <Image src={bgImage} alt={bgAlt} fill priority sizes="100vw" className="lp3-hero-bg-img" />
        <div className="lp3-hero-bg-scrim" />
      </div>
      <div className="lp3-wrap">
        <div className="lp3-hero-grid">
          <div className="lp3-hero-copy">
            <span className="lp3-eyebrow lp3-eyebrow-dark"><IcPin size={14} />Drammen · Asker · Bærum</span>
            <h1 className="lp3-hero-h1-dark">{h1Start} <span className="accent">{h1Accent}</span></h1>
            <p className="lp3-hero-lede lp3-hero-lede-dark">{lede}</p>
            <div className="lp3-cta-row">
              <a href={`#${id ?? 'skjema'}-form`} className="lp3-btn lp3-btn-primary" onClick={() => trackLpPrimaryCta(page)}>{primaryLabel}</a>
              <PhoneLink location={`${page}-hero`} className="lp3-btn lp3-btn-secondary">Ring 90 63 31 18</PhoneLink>
            </div>
          </div>
          <div id={`${id ?? 'skjema'}-form`} className="lp3-hero-card">
            {children}
            <p className="lp3-form-call">
              Eller ring oss nå <PhoneLink location={`${page}-hero-card`} className="lp3-form-call-link">90 63 31 18</PhoneLink>
            </p>
          </div>
        </div>
        <div className="lp3-hero-trust">
          {trustItems.map(({ icon, label }) => (
            <div className="lp3-hero-trust-item" key={label}>
              <span className="ico">{icon}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
