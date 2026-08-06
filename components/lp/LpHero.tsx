import Image from 'next/image'
import { IcCheckCircle } from './LpIcons'

interface Props {
  id?: string
  page: string
  h1: string
  lede: string
  checklist: string[]
  bgImage: string
  bgAlt: string
  bgPosition?: string
  /** Ekstra høyde over/under hero (i %) — gir horisontalt spillerom til å panorere bildet
   *  bort fra produktet som ellers ville havnet under skjemakortet. */
  bgZoomY?: number
  children: React.ReactNode
}

export function LpHero({ id, h1, lede, checklist, bgImage, bgAlt, bgPosition, bgZoomY = 0, children }: Props) {
  return (
    <section id={id} className="lp3-hero">
      <div className="lp3-hero-bg" aria-hidden="true" style={bgZoomY ? { top: `${-bgZoomY}%`, bottom: `${-bgZoomY}%` } : undefined}>
        <Image src={bgImage} alt={bgAlt} fill priority sizes="100vw" className="lp3-hero-bg-img" style={bgPosition ? { objectPosition: bgPosition } : undefined} />
        <div className="lp3-hero-bg-scrim" />
      </div>
      <div className="lp3-wrap lp3-hero-grid">
        <div className="lp3-hero-copy">
          <h1 className="lp3-hero-h1-dark">{h1}</h1>
          <p className="lp3-hero-lede lp3-hero-lede-dark">{lede}</p>
          <ul className="lp3-check-list lp3-check-list-dark">
            {checklist.map(item => (
              <li key={item}><IcCheckCircle size={26} />{item}</li>
            ))}
          </ul>
        </div>
        <div className="lp3-hero-card">
          {children}
        </div>
      </div>
    </section>
  )
}
