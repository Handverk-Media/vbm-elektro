import { PhoneLink } from '@/components/PhoneLink'

const Check = () => (
  <svg width="15" height="15" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
)

interface Props {
  page: string
  eyebrow: string
  h1: string
  lede: string
  primaryLabel: string
  onPrimaryClick: () => void
  trustItems: string[]
  panelLabel: string
  panelSteps: string[]
  panelStat: string
}

export function LpHero({ page, eyebrow, h1, lede, primaryLabel, onPrimaryClick, trustItems, panelLabel, panelSteps, panelStat }: Props) {
  return (
    <section className="lp3-hero">
      <div className="lp3-hero-grid">
        <div className="lp3-hero-copy">
          <span className="lp3-eyebrow">{eyebrow}</span>
          <h1>{h1}</h1>
          <p className="lp3-hero-lede">{lede}</p>
          <div className="lp3-cta-row">
            <a href="#skjema" className="lp3-btn lp3-btn-primary" onClick={onPrimaryClick}>{primaryLabel}</a>
            <PhoneLink location={`${page}-hero`} className="lp3-btn lp3-btn-secondary">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-1C7.82 18 2 12.18 2 5V4z" /></svg>
              90 63 31 18
            </PhoneLink>
          </div>
          <div className="lp3-trust-row">
            {trustItems.map(t => <span key={t} className="lp3-trust-item"><Check />{t}</span>)}
          </div>
        </div>
        <div className="lp3-hero-panel">
          <svg className="lp3-hero-bolt" viewBox="0 0 175 340" fill="var(--red)" aria-hidden="true">
            <path d="M 60 0 L 130 0 L 100 130 L 165 130 L 40 340 L 95 195 L 10 195 Z" />
          </svg>
          <div>
            <span className="lp3-hero-panel-label">{panelLabel}</span>
            <div className="lp3-hero-panel-steps">
              {panelSteps.map((t, i) => (
                <div className="lp3-hero-panel-step" key={t}>
                  <span className="nr">{String(i + 1).padStart(2, '0')}</span>
                  <p>{t}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lp3-hero-panel-stat">
            <span className="dot" />
            {panelStat}
          </div>
        </div>
      </div>
    </section>
  )
}
