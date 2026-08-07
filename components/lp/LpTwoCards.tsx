import { IcCheck } from './LpIcons'

interface Item { text: string; icon?: React.ReactNode }
interface Card { title: string; items: Item[]; tone: 'accent' | 'neutral'; watermark?: React.ReactNode }

export function LpTwoCards({ id, label, heading, cards }: { id?: string; label: string; heading: string; cards: [Card, Card] }) {
  return (
    <section id={id} className="lp3-section">
      <div className="lp3-wrap">
        <div className="lp3-section-intro">
          <h2 className="lp3-h2">{heading}</h2>
        </div>
        <div className="lp3-twocards">
          {cards.map(c => (
            <div className={`lp3-card lp3-card-${c.tone}`} key={c.title}>
              <p className="lp3-card-title">{c.title}</p>
              <ul className="lp3-check-list lp3-check-list-card">
                {c.items.map(({ text, icon }) => (
                  <li key={text}><span className="ico">{icon ?? <IcCheck size={13} />}</span>{text}</li>
                ))}
              </ul>
              {c.watermark && <span className="lp3-card-watermark">{c.watermark}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
