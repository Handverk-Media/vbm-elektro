export function LpTrustStats({ label, heading, items }: { label: string; heading: string; items: Array<{ icon: React.ReactNode; label: string; sub: string }> }) {
  return (
    <section className="lp3-section">
      <div className="lp3-wrap">
        <div className="lp3-section-intro">
          <h2 className="lp3-h2">{heading}</h2>
        </div>
        <div className="lp3-trust-row">
          {items.map(({ icon, label, sub }) => (
            <div className="lp3-trust-item" key={label}>
              <span className="ico">{icon}</span>
              <p className="label">{label}</p>
              <p className="sub">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
