import { Metadata } from 'next'
import { ContactHeroSection } from '@/components/sections/ContactHeroSection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { TrustSignalsSection } from '@/components/sections/TrustSignalsSection'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Let's Talk — Agentack",
    description: "Book a free 30-minute strategy call. We'll identify your top 3 automation opportunities — no pitch, no commitment.",
  }
}

export default function ContactPage() {
  return (
    <>
      {/* Section 1: Navbar (in layout) */}

      {/* Section 2: Contact Hero */}
      <ContactHeroSection
        heading="Let's talk about what's slowing you down."
        subtitle="Book a free 30-min strategy call. We'll identify your top 3 automation opportunities — no pitch, no commitment."
      />

      {/* Section 3: Contact Form */}
      <ContactFormSection />

      {/* Section 4: Trust Signals */}
      <TrustSignalsSection />

      {/* Section 5: Footer (in layout) */}
    </>
  )
}
