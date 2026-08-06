import { LpImagePlaceholder } from './LpImagePlaceholder'

export function LpGallery({ label, heading, labels }: { label: string; heading: string; labels: string[] }) {
  return (
    <section className="lp3-section lp3-section-tint">
      <div className="lp3-wrap">
        <div className="lp3-section-intro">
          <h2 className="lp3-h2">{heading}</h2>
        </div>
        <div className="lp3-gallery">
          {labels.map((l, i) => <LpImagePlaceholder key={i} label={l} aspect="4/3" className="lp3-gallery-item" />)}
        </div>
      </div>
    </section>
  )
}
