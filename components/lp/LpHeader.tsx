import Image from 'next/image'
import { PhoneLink } from '@/components/PhoneLink'
import { IcPin } from './LpIcons'

export function LpHeader({ location }: { location: string }) {
  return (
    <header className="lp3-header">
      <div className="lp3-header-inner">
        <a href="/" className="lp3-logo" aria-label="VBM Elektro AS">
          <Image src="/logo.svg" alt="VBM Elektro AS" width={140} height={56} className="lp3-logo-img" priority />
        </a>
        <span className="lp3-header-locations"><IcPin size={13} />Drammen · Asker · Bærum</span>
        <PhoneLink location={location} className="lp3-header-phone">
          <svg width="17" height="17" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-1C7.82 18 2 12.18 2 5V4z" /></svg>
          <span>
            <strong>90 63 31 18</strong>
            <small>Ring oss gjerne direkte</small>
          </span>
        </PhoneLink>
      </div>
    </header>
  )
}
