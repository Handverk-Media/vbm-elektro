import { VBM } from "@/lib/vbm"

const signals = [
  `${VBM.teamSize} ansatte`,
  "10+ års erfaring",
  "Sertifiserte elektrikere",
  "Forutsigbar pris",
  VBM.areaString,
]

export function TrustBar() {
  return (
    <div className="bg-surface border-b border-border">
      <div className="container-vbm py-3 flex flex-wrap gap-x-8 gap-y-2 items-center">
        {signals.map((item, i) => (
          <span key={item} className="flex items-center gap-2 text-caption font-medium text-steel whitespace-nowrap">
            {i > 0 && <span className="text-ghost hidden sm:inline" aria-hidden>·</span>}
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
