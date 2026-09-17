import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity/client'
import { icpBySlugQuery, icpSlugsQuery } from '@/lib/sanity/queries'
import { IcpHeroSection } from '@/components/sections/IcpHeroSection'
import { IcpPainPointsSection } from '@/components/sections/IcpPainPointsSection'
import { IcpOutcomesSection } from '@/components/sections/IcpOutcomesSection'
import { ServiceCTASection } from '@/components/sections/ServiceCTASection'

interface IcpPageProps {
  params: Promise<{ slug: string }>
}

export const revalidate = 3600
export const dynamicParams = false

export async function generateStaticParams() {
  const icps = await client.fetch(icpSlugsQuery)
  return (icps ?? []).map((i: { slug: string }) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: IcpPageProps): Promise<Metadata> {
  const { slug } = await params
  const icp = await client.fetch(icpBySlugQuery, { slug })

  if (!icp) return { title: 'Not Found' }

  return {
    title: `${icp.name} — Agentack`,
    description: icp.description,
  }
}

export default async function IcpPage({ params }: IcpPageProps) {
  const { slug } = await params
  const icp = await client.fetch(icpBySlugQuery, { slug })

  if (!icp) notFound()

  return (
    <>
      <IcpHeroSection
        name={icp.name}
        headline={icp.heroHeadline || `AI Automation for ${icp.name}`}
        subtitle={icp.heroSubtitle}
      />

      {icp.painPoints && icp.painPoints.length > 0 && (
        <IcpPainPointsSection
          painPoints={icp.painPoints}
          whatWeSolve={icp.whatWeSolve || ''}
        />
      )}

      {icp.outcomes && icp.outcomes.length > 0 && (
        <IcpOutcomesSection outcomes={icp.outcomes} />
      )}

      <ServiceCTASection serviceName={icp.name} />
    </>
  )
}
