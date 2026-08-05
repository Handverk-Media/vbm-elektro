export function LpImagePlaceholder({ label, aspect = '4/3', className = '' }: { label: string; aspect?: string; className?: string }) {
  return (
    <div className={`lp3-img-ph ${className}`} style={aspect === 'auto' ? undefined : { aspectRatio: aspect }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8.5" cy="9.5" r="1.5" />
        <path d="M21 15l-5-5-9 9" />
      </svg>
      <span>{label}</span>
    </div>
  )
}
