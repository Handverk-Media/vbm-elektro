import { PhoneLink } from '@/components/PhoneLink'
import { LpImagePlaceholder } from './LpImagePlaceholder'
import { IcCheck, IcPin } from './LpIcons'

interface Props {
  id?: string
  page: string
  h1Start: string
  h1Accent: string
  lede: string
  checklist: string[]
  imageLabel: string
  children: React.ReactNode
}

export function LpHero({ id, page, h1Start, h1Accent, lede, checklist, imageLabel, children }: Props) {
  return (
    <section id={id} className="lp3-hero">
      <div className="lp3-wrap">
        <div className="lp3-hero-grid">
          <div className="lp3-hero-copy">
            <span className="lp3-eyebrow"><IcPin size={14} />Drammen · Asker · Bærum</span>
            <h1>{h1Start} <span className="accent">{h1Accent}</span></h1>
            <p className="lp3-hero-lede">{lede}</p>
            <ul className="lp3-check-list">
              {checklist.map(t => (
                <li key={t}><span className="ico"><IcCheck size={13} /></span>{t}</li>
              ))}
            </ul>
            <LpImagePlaceholder label={imageLabel} aspect="auto" className="lp3-hero-image" />
          </div>
          <div className="lp3-hero-card">
            {children}
            <p className="lp3-form-call">
              Eller ring oss nå <PhoneLink location={`${page}-hero`} className="lp3-form-call-link">90 63 31 18</PhoneLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
