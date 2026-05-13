"use client"

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react"
import { Tjeneste } from "@/data/priser"

export type CartItem = {
  tjeneste: Tjeneste
  antall: number
}

type CartContextType = {
  items: CartItem[]
  leggTil: (t: Tjeneste) => void
  fjern: (id: string) => void
  tøm: () => void
  total: number
  antall: number
  åpen: boolean
  setÅpen: (v: boolean) => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [åpen, setÅpen] = useState(false)

  useEffect(() => {
    try {
      const lagret = localStorage.getItem("vbm-cart")
      if (lagret) setItems(JSON.parse(lagret))
    } catch {}
  }, [])

  useEffect(() => {
    localStorage.setItem("vbm-cart", JSON.stringify(items))
  }, [items])

  const leggTil = (t: Tjeneste) => {
    setItems((prev) => {
      const eksisterende = prev.find((i) => i.tjeneste.id === t.id)
      if (eksisterende)
        return prev.map((i) =>
          i.tjeneste.id === t.id ? { ...i, antall: i.antall + 1 } : i
        )
      return [...prev, { tjeneste: t, antall: 1 }]
    })
    setÅpen(true)
  }

  const fjern = (id: string) =>
    setItems((prev) => prev.filter((i) => i.tjeneste.id !== id))

  const tøm = () => setItems([])

  const total = items.reduce(
    (sum, i) => sum + i.tjeneste.pris * i.antall,
    0
  )
  const antall = items.reduce((sum, i) => sum + i.antall, 0)

  return (
    <CartContext.Provider
      value={{ items, leggTil, fjern, tøm, total, antall, åpen, setÅpen }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be inside CartProvider")
  return ctx
}
