// Placeholder for future service configurator pages.
// Each /tjenester/[slug] will eventually hold:
//  - Service description and details
//  - Configurator (e.g. cable length, charger model)
//  - Price estimate
//  - Booking / add-to-cart flow
//
// For now: redirects to the price section on the main page.

import { redirect } from "next/navigation"

export default function TjenestePage() {
  redirect("/#priser")
}
