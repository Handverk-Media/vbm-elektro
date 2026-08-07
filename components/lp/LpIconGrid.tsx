export function LpIconGrid({ label, heading, items }: { label: string; heading: string; items: Array<{ icon: React.ReactNode; title: string }> }) {
  return (
    <section className="lp3-section">
      <div className="lp3-wrap">
        <div className="lp3-section-intro">
          <h2 className="lp3-h2">{heading}</h2>
        </div>
        <div className="lp3-icongrid">
          {items.map(({ icon, title }) => (
            <div className="lp3-icongrid-item" key={title}>
              <span className="ico">{icon}</span>
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
