import { Metadata } from 'next'
import { client } from '@/lib/sanity/client'
import { servicesQuery, siteSettingsQuery } from '@/lib/sanity/queries'
import { ServicesPageHeroSection } from '@/components/sections/ServicesPageHeroSection'
import { ServiceCardsSection } from '@/components/sections/ServiceCardsSection'
import { ProcessTeaserSection } from '@/components/sections/ProcessTeaserSection'
import { ServicesCTAStrip } from '@/components/sections/ServicesCTAStrip'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Our Services | Agentack',
    description:
      'Deployed AI systems for ecommerce, healthcare, agencies, SaaS, and real estate — AI support, sales, operations, agentic AI engineering, and custom software, live in 4–8 weeks.',
  }
}

export default async function ServicesPage() {
  const [services, settings] = await Promise.all([
    client.fetch(servicesQuery),
    client.fetch(siteSettingsQuery),
  ])

  return (
    <>
      {/* Section 1: Navbar (in layout) */}

      {/* Section 2: Hero */}
      <ServicesPageHeroSection />

      {/* Section 3: Service Cards Grid */}
      <ServiceCardsSection services={services || []} />

      {/* Section 4: Process Teaser */}
      <ProcessTeaserSection steps={settings?.processSteps || []} />

      {/* Section 5: CTA Strip */}
      <ServicesCTAStrip />

      {/* Section 6: Footer (in layout) */}
    </>
  )
}
