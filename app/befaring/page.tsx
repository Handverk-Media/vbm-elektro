import type { Metadata } from "next"
import BefaringPage from "./BefaringPage"

export const metadata: Metadata = {
  title: {
    absolute: "Befaring av elektriker – skriftlig pris etterpå | VBM Elektro",
  },
  description:
    "Book befaring i Drammen, Asker, Bærum, Lier og Øvre Eiker. Vi ser på anlegget hjemme hos deg og gir skriftlig pris. Uforpliktende.",
}

export default function Page() {
  return <BefaringPage />
}
