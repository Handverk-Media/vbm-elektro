import { Nav } from "@/components/Nav"
import { Hero } from "@/components/Hero"
import { TrustBar } from "@/components/TrustBar"
import { Services } from "@/components/Services"
import { WhyVBM } from "@/components/WhyVBM"
import { Reviews } from "@/components/Reviews"
import { CTAStrip } from "@/components/CTAStrip"
import { ContactForm } from "@/components/ContactForm"
import { Footer } from "@/components/Footer"

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyVBM />
        <Reviews />
        <CTAStrip />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
