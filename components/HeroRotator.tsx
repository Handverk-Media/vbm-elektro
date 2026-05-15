'use client'
import { useEffect, useRef } from 'react'

const words = [
  'som svarer.',
  'som holder pris.',
  'som møter opp.',
  'som holder avtaler.',
  'som leverer dokumentasjon.',
]

export function HeroRotator() {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let wordIndex = 0
    let charIndex = 0
    let deleting = false
    let timeout: ReturnType<typeof setTimeout>

    const TYPE_SPEED = 60
    const DELETE_SPEED = 30
    const PAUSE_AFTER_TYPE = 1800
    const PAUSE_AFTER_DELETE = 200

    function tick() {
      if (!el) return
      const word = words[wordIndex]
      const base = word.endsWith('.') ? word.slice(0, -1) : word

      if (!deleting) {
        charIndex++
        const visible = base.slice(0, charIndex)
        el.innerHTML = charIndex < base.length
          ? `${visible}<span class="cursor">|</span>`
          : `${visible}<span class="punct">.</span>`

        if (charIndex === base.length) {
          timeout = setTimeout(() => { deleting = true; tick() }, PAUSE_AFTER_TYPE)
          return
        }
      } else {
        charIndex--
        const visible = base.slice(0, charIndex)
        el.innerHTML = charIndex > 0
          ? `${visible}<span class="cursor">|</span>`
          : `<span class="cursor">|</span>`

        if (charIndex === 0) {
          wordIndex = (wordIndex + 1) % words.length
          deleting = false
          timeout = setTimeout(tick, PAUSE_AFTER_DELETE)
          return
        }
      }

      timeout = setTimeout(tick, deleting ? DELETE_SPEED : TYPE_SPEED)
    }

    timeout = setTimeout(tick, 800)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <span className="swap-word" ref={ref}>
      som svarer<span className="punct">.</span>
    </span>
  )
}
