export function LpSection({ id, label, heading, tint, children }: { id?: string; label: string; heading: string; tint?: boolean; children: React.ReactNode }) {
  return (
    <section id={id} className={`lp3-section${tint ? ' lp3-section-tint' : ''}`}>
      <div className="lp3-wrap">
        <div className="lp3-section-grid">
          <div className="lp3-section-head">
            <span className="lp3-section-label">{label}</span>
            <h2 className="lp3-h2">{heading}</h2>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  )
}
