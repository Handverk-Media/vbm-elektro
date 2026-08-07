export function LpSection({ id, label, heading, tint, narrow, children }: { id?: string; label: string; heading: string; tint?: boolean; narrow?: boolean; children: React.ReactNode }) {
  return (
    <section id={id} className={`lp3-section${tint ? ' lp3-section-tint' : ''}`}>
      <div className={`lp3-wrap${narrow ? ' lp3-wrap-narrow' : ''}`}>
        <div className="lp3-section-intro">
          <h2 className="lp3-h2">{heading}</h2>
        </div>
        {children}
      </div>
    </section>
  )
}
