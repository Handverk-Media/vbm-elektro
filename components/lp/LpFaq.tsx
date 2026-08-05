export function LpFaq({ items }: { items: Array<{ q: string; a: string }> }) {
  return (
    <div className="lp3-faq-list">
      {items.map(({ q, a }) => (
        <details key={q} className="lp3-faq-item">
          <summary>
            {q}
            <svg className="lp3-faq-icon" width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2}><path d="M10 4v12M4 10h12" /></svg>
          </summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  )
}
