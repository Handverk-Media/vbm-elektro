import { LpImagePlaceholder } from './LpImagePlaceholder'

export function LpTrustStats({ items, teamImageLabel }: { items: Array<{ icon: React.ReactNode; label: string; sub: string }>; teamImageLabel?: string }) {
  return (
    <section className="lp3-section lp3-trust-stats">
      <div className="lp3-wrap lp3-trust-stats-grid">
        <div className="lp3-trust-stats-row">
          {items.map(({ icon, label, sub }) => (
            <div className="lp3-trust-stat" key={label}>
              <span className="ico">{icon}</span>
              <div>
                <p className="label">{label}</p>
                <p className="sub">{sub}</p>
              </div>
            </div>
          ))}
        </div>
        {teamImageLabel && <LpImagePlaceholder label={teamImageLabel} aspect="16/9" className="lp3-trust-stats-image" />}
      </div>
    </section>
  )
}
