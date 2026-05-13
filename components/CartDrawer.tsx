"use client"

import Link from "next/link"
import { useCart } from "@/context/CartContext"

export function CartDrawer() {
  const { items, fjern, total, åpen, setÅpen } = useCart()

  if (!åpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
        onClick={() => setÅpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-[#F7F6F3] shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#EEEDE8]">
          <h2 className="font-bold text-lg text-[#1A1A1A]">Handlekurv</h2>
          <button
            onClick={() => setÅpen(false)}
            className="text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <svg viewBox="0 0 177 352" fill="currentColor" className="w-8 h-16 text-[#EEEDE8] mx-auto mb-4">
                <polygon points="148.63,0.48 103.24,139.95 177.14,139.95 27.66,351.9 72.66,194.79 0,194.79 36.62,0.48" />
              </svg>
              <p className="text-[#6B6B6B] text-sm">Handlekurven er tom</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map(({ tjeneste, antall }) => (
                <li key={tjeneste.id} className="bg-white rounded-lg p-4 flex gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-[#1A1A1A] leading-tight">{tjeneste.navn}</p>
                    <p className="text-xs text-[#6B6B6B] mt-0.5">{tjeneste.enhet}</p>
                    {antall > 1 && (
                      <p className="text-xs text-[#6B6B6B] mt-1">{antall} stk</p>
                    )}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="font-bold text-[#1A1A1A] text-sm whitespace-nowrap">
                      kr {(tjeneste.pris * antall).toLocaleString("nb-NO")}
                    </span>
                    <button
                      onClick={() => fjern(tjeneste.id)}
                      className="text-[#6B6B6B] hover:text-[#E1342B] transition-colors"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                        <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-[#EEEDE8]">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[#6B6B6B] text-sm">Delsum</span>
              <span className="font-bold text-[#1A1A1A]">kr {total.toLocaleString("nb-NO")}</span>
            </div>
            <p className="text-xs text-[#6B6B6B] mb-5">Inkl. mva. Endelig pris avklares etter befaring.</p>
            <Link
              href="/bestill"
              onClick={() => setÅpen(false)}
              className="w-full bg-[#1A1A1A] text-white font-semibold py-4 rounded flex items-center justify-center gap-2 hover:bg-[#333] transition-colors"
            >
              Gå til betaling
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
