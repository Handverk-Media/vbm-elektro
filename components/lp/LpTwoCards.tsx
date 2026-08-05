import { LpImagePlaceholder } from './LpImagePlaceholder'
import { IcCheck } from './LpIcons'

interface Card { title: string; items: string[]; tone: 'accent' | 'neutral'; imageLabel: string }

export function LpTwoCards({ id, label, heading, cards }: { id?: string; label: string; heading: string; cards: [Card, Card] }) {
  return (
    <section id={id} className="lp3-section lp3-section-tint">
      <div className="lp3-wrap">
        <div className="lp3-section-intro">
          <span className="lp3-section-label lp3-section-label-center">{label}</span>
          <h2 className="lp3-h2">{heading}</h2>
        </div>
        <div className="lp3-twocards">
          {cards.map(c => (
            <div className={`lp3-card lp3-card-${c.tone}`} key={c.title}>
              <p className="lp3-card-title">{c.title}</p>
              <ul className="lp3-check-list lp3-check-list-card">
                {c.items.map(t => (
                  <li key={t}><span className="ico"><IcCheck size={13} /></span>{t}</li>
                ))}
              </ul>
              <LpImagePlaceholder label={c.imageLabel} aspect="16/9" className="lp3-card-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
