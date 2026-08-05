import { PhoneLink } from '@/components/PhoneLink'

export function LpHeader({ location }: { location: string }) {
  return (
    <header className="lp3-header">
      <div className="lp3-header-inner">
        <a href="/" className="lp3-logo" aria-label="VBM Elektro AS">
          <svg width="18" height="24" viewBox="0 0 175 340" aria-hidden="true">
            <path d="M 60 0 L 130 0 L 100 130 L 165 130 L 40 340 L 95 195 L 10 195 Z" fill="#111111" />
          </svg>
          <span className="lp3-logo-name">VBM Elektro</span>
        </a>
        <PhoneLink location={location} className="lp3-header-phone">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-1C7.82 18 2 12.18 2 5V4z" /></svg>
          90 63 31 18
        </PhoneLink>
      </div>
    </header>
  )
}
