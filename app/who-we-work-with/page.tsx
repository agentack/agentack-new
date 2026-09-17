import { Metadata } from 'next'
import { client } from '@/lib/sanity/client'
import { icpsIndexQuery } from '@/lib/sanity/queries'
import { IcpIndexHeroSection } from '@/components/sections/IcpIndexHeroSection'
import { IcpCardsSection } from '@/components/sections/IcpCardsSection'
import { ProcessTeaserSection } from '@/components/sections/ProcessTeaserSection'
import { ServicesCTAStrip } from '@/components/sections/ServicesCTAStrip'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Who We Work With | Agentack',
    description:
      'AI automation built for five industries: ecommerce, healthcare, agencies, SaaS companies, and real estate.',
  }
}

export default async function WhoWeWorkWithPage() {
  const [icps, settings] = await Promise.all([
    client.fetch(icpsIndexQuery),
    client.fetch('*[_type == "siteSettings"][0] { processSteps }'),
  ])

  return (
    <>
      {/* Section 1: Navbar (in layout) */}

      {/* Section 2: Hero */}
      <IcpIndexHeroSection />

      {/* Section 3: Industry Cards Grid */}
      <IcpCardsSection icps={icps || []} />

      {/* Section 4: Process Teaser */}
      <ProcessTeaserSection steps={settings?.processSteps || []} />

      {/* Section 5: CTA Strip */}
      <ServicesCTAStrip />

      {/* Section 6: Footer (in layout) */}
    </>
  )
}