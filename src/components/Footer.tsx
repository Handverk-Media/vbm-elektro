import Link from "next/link"
import { Logo } from "./Logo"
import { VBM } from "@/lib/vbm"

const serviceLinks = [
  { href: "/elbillader-installasjon", label: "Elbillader installasjon" },
  { href: "/sikringsskap", label: "Sikringsskap" },
  { href: "/oppussing-elektro", label: "Oppussing og renovering" },
  { href: "/elektriker-asker", label: "Elektriker Asker" },
  { href: "/elektriker-baerum", label: "Elektriker Bærum" },
]

export function Footer() {
  return (
    <footer className="bg-coal">
      <div className="container-vbm py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-14">

          <div>
            <Logo dark size="sm" />
            <p className="text-body-sm text-white/65 leading-relaxed mt-5 max-w-xs">{VBM.tagline}</p>
            <p className="text-body-sm text-white/40 mt-4">{VBM.areaFull}</p>
          </div>

          <div>
            <p className="type-label text-white/50 mb-5">Tjenester</p>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-body-sm text-white/70 hover:text-brand transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="type-label text-white/50 mb-5">Kontakt</p>
            <div className="flex flex-col gap-2.5">
              <a href={VBM.phoneHref} className="text-body-sm text-white/70 hover:text-brand transition-colors">{VBM.phone}</a>
              <a href={`mailto:${VBM.email}`} className="text-body-sm text-white/70 hover:text-brand transition-colors">{VBM.email}</a>
              <p className="text-body-sm text-white/70">{VBM.address}</p>
              <p className="text-body-sm text-white/50">{VBM.hours}</p>
            </div>
            <a href={VBM.phoneHref} className="inline-flex mt-6 bg-brand text-white font-semibold px-5 py-3 rounded-md text-caption hover:bg-brand/90 transition-colors">
              Ring oss nå
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-2">
          <p className="text-caption text-white/50">{VBM.org} · Org.nr: {VBM.orgNr} · {VBM.address}</p>
          <p className="text-caption text-white/40">Nettside av {VBM.builtBy}</p>
        </div>
      </div>
    </footer>
  )
}
