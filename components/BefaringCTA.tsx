'use client'
import { useState } from 'react'
import { BefaringModal } from './BefaringModal'

interface Props {
  label?: string
  className?: string
  style?: React.CSSProperties
}

export function BefaringCTA({ label = 'Gratis Befaring', className = 'btn btn-ghost', style }: Props) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button className={className} style={style} onClick={() => setOpen(true)}>
        {label} <span className="arr">→</span>
      </button>
      <BefaringModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
