"use client"

interface LogoProps {
  dark?: boolean
  size?: "sm" | "md" | "lg"
}

const bolt: Record<string, { w: number; h: number }> = {
  sm: { w: 16, h: 28 },
  md: { w: 20, h: 36 },
  lg: { w: 28, h: 50 },
}

const vbmSize: Record<string, string> = {
  sm: "text-3xl",
  md: "text-4xl",
  lg: "text-6xl",
}

const elSize: Record<string, string> = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl",
}

export function Logo({ dark = false, size = "md" }: LogoProps) {
  const { w, h } = bolt[size]
  const vbmColor = dark ? "text-white" : "text-coal"
  const boltFill = dark ? "white" : "#1C1C1C"

  return (
    <div className="flex items-center gap-3">
      <svg width={w} height={h} viewBox="0 0 30 54" fill="none" aria-hidden>
        <polygon points="20,0 3,28 13,28 10,54 27,26 17,26 26,0" fill={boltFill} />
      </svg>
      <div>
        <div className="flex items-baseline gap-2">
          <span className={`font-display font-black tracking-wide leading-none ${vbmSize[size]} ${vbmColor}`}>VBM</span>
          <span className={`font-display font-bold text-brand leading-none self-end pb-0.5 ${elSize[size]}`}>Elektro</span>
        </div>
        <div className="h-0.5 bg-brand mt-1" />
        <div className={`type-label mt-1 ${dark ? "text-white/25" : "text-ghost"}`}>
          Asker · Bærum · Oslo
        </div>
      </div>
    </div>
  )
}
