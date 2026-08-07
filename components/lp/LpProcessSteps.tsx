export function LpProcessSteps({ id, label, heading, steps }: { id?: string; label: string; heading: string; steps: Array<{ icon: React.ReactNode; title: string; text: string }> }) {
  return (
    <section id={id} className="lp3-section">
      <div className="lp3-wrap">
        <div className="lp3-section-intro">
          <h2 className="lp3-h2">{heading}</h2>
        </div>
        <div className="lp3-process-row">
          {steps.map(({ icon, title, text }, i) => (
            <div className="lp3-process-step" key={title}>
              <div className="lp3-process-icon">{icon}</div>
              <span className="lp3-process-nr mono">{String(i + 1).padStart(2, '0')}</span>
              <p className="lp3-process-title">{title}</p>
              <p className="lp3-process-text">{text}</p>
              {i < steps.length - 1 && <span className="lp3-process-arrow" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
