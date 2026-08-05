export function LpTrustStats({ items }: { items: Array<{ icon: React.ReactNode; label: string; sub: string }> }) {
  return (
    <div className="lp3-trust-stats">
      <div className="lp3-wrap lp3-trust-stats-row">
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
    </div>
  )
}
