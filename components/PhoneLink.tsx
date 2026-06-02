'use client'
import { trackPhoneClick } from '@/lib/analytics'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  location: string
  children: React.ReactNode
}

export function PhoneLink({ location, children, onClick, ...rest }: Props) {
  return (
    <a
      href="tel:90633118"
      {...rest}
      onClick={(e) => { trackPhoneClick(location); onClick?.(e) }}
    >
      {children}
    </a>
  )
}
