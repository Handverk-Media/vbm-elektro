'use client'
import { PhoneLink } from '@/components/PhoneLink'
import { trackLpPrimaryCta } from '@/lib/analytics'

export function LpSticky({ page, formLabel = 'Send skjema' }: { page: string; formLabel?: string }) {
  return (
    <div className="lp3-sticky">
      <PhoneLink location={`${page}-sticky`} className="lp3-sticky-call">
        <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-1C7.82 18 2 12.18 2 5V4z" /></svg>
        Ring oss
      </PhoneLink>
      <a href="#skjema" className="lp3-sticky-form" onClick={() => trackLpPrimaryCta(`${page}-sticky`)}>
        {formLabel}
      </a>
    </div>
  )
}
