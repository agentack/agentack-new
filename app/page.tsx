import { Metadata } from 'next'
import { client } from '@/lib/sanity/client'
import { siteSettingsQuery, servicesQuery, icpsIndexQuery } from '@/lib/sanity/queries'
import { HeroSection } from '@/components/sections/HeroSection'
import { LogoStripSection } from '@/components/sections/LogoStripSection'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { ServicesOverviewSection } from '@/components/sections/ServicesOverviewSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { WhyUsSection } from '@/components/sections/WhyUsSection'
import { IndustriesSection } from '@/components/sections/IndustriesSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'

export async function generateMetadata(): Promise<Metadata> {
  const settings = await client.fetch(siteSettingsQuery)

  return {
    title: settings?.agencyName
      ? `${settings.agencyName} | AI Workforce for Modern Businesses`
      : 'Agentack | AI Workforce for Modern Businesses',
    description:
      settings?.seoDefaultDescription ||
      'We build custom AI agents and agentic AI systems that automate support, sales, and operations for ecommerce, healthcare, agencies, SaaS, and real estate.',
    openGraph: {
      title: settings?.agencyName || 'Agentack',
      description:
        settings?.seoDefaultDescription ||
        'We build custom AI agents and agentic AI systems for modern businesses.',
      images: ['/og-image.png'],
    },
  }
}

const DEFAULT_STATS = [
  { value: 300, suffix: '+', label: 'AI agents deployed' },
  { value: 1000, suffix: '+', label: 'hours saved monthly' },
  { value: 45, suffix: '+', label: 'businesses automated' },
  { value: 24, suffix: '/7', label: 'automations running' },
]

const DEFAULT_SETTINGS = {
  agencyName: 'Agentack',
  seoDefaultDescription:
    'We build custom AI agents and intelligent automations that become your AI workforce which handles sales, support, operations, and repetitive tasks so your ecommerce business can scale faster.',
  heroHeadline: 'An AI Workforce That Grows Without You Scaling Headcount',
  heroSubtitle:
    'We design and deploy custom AI agents that handle support, sales, and operations for ecommerce, healthcare, agencies, SaaS, and real estate — so your team can focus on growth.',
  heroPrimaryCtaLabel: 'Book a Free Strategy Call',
  heroSecondaryCtaLabel: 'Explore Our Services',
  problemStatement:
    'Most businesses still run on manual processes — support queues pile up, operations devour hours, and growth gets bottlenecked by people doing repetitive work.',
  problemPainPoints: [
    'Support responses take hours, not minutes',
    'Manual operations steal 15+ hours a week',
    'Operational costs grow as fast as revenue',
    'Inconsistent follow-ups quietly lose sales',
  ],
  processSteps: [
    {
      step: 1,
      title: 'Discover',
      description:
        'We map your workflows and find the highest-leverage processes to automate.',
    },
    {
      step: 2,
      title: 'Design',
      description:
        'We architect custom AI agents tailored to your exact business logic.',
    },
    {
      step: 3,
      title: 'Deploy',
      description:
        'We integrate and launch your AI workforce in production, fast.',
    },
    {
      step: 4,
      title: 'Scale',
      description:
        'We monitor, refine, and expand automation as your business grows.',
    },
  ],
  differentiators: [
    {
      title: 'Custom-built, not off-the-shelf',
      description:
        'Every agent is designed around your exact processes and data — not generic chatbots.',
      icon: 'Bot',
    },
    {
      title: 'Live in weeks, not quarters',
      description:
        'Production-ready automations in 2-4 weeks with real measurable results from day one.',
      icon: 'Rocket',
    },
    {
      title: 'Built to keep learning',
      description:
        'Your AI workforce improves with every interaction and adapts to your business over time.',
      icon: 'TrendingUp',
    },
  ],
  finalCtaHeadline: 'Ready to build your AI workforce?',
  finalCtaSubtext:
    'Book a free strategy call and see which processes we can automate for your business.',
  finalCtaMicroText: 'No templates. No hype. Just a clear automation roadmap.',
}

export default async function HomePage() {
  const [fetchedSettings, services, industries] = await Promise.all([
    client.fetch(siteSettingsQuery),
    client.fetch(servicesQuery),
    client.fetch(icpsIndexQuery),
  ])

  const settings = fetchedSettings || DEFAULT_SETTINGS

  return (
    <>
      {/* Section 1: Navbar (in layout) */}

      {/* Section 2: Hero */}
      <HeroSection
        eyebrow="AI Automation Agency"
        headline={settings.heroHeadline}
        subtitle={settings.heroSubtitle}
        primaryCtaLabel={settings.heroPrimaryCtaLabel}
        secondaryCtaLabel={settings.heroSecondaryCtaLabel}
      />

      {/* Section 3: Logo Strip */}
      <LogoStripSection />

      {/* Section 4: Problem */}
      <ProblemSection
        heading="The Problem"
        subtitle={settings.problemStatement}
        painPoints={settings.problemPainPoints || []}
        statement="Most businesses are stuck with manual processes."
        subStatement="We help you fix that."
      />

      {/* Section 5: Services Overview */}
      <ServicesOverviewSection services={services || []} />

      {/* Section 6: Process */}
      <ProcessSection steps={settings.processSteps || []} />

      {/* Section 7: Stats */}
      <StatsSection stats={(settings.stats && settings.stats.length > 0) ? settings.stats : DEFAULT_STATS} />

      {/* Section 8: Why Us */}
      <WhyUsSection features={settings.differentiators || []} />

      {/* Section 9: Industries We Serve */}
      <IndustriesSection industries={industries || []} />

      {/* Section 10: Final CTA */}
      <FinalCTASection
        heading={settings.finalCtaHeadline}
        subtext={settings.finalCtaSubtext}
        ctaLabel="Book a free strategy call"
        microText={settings.finalCtaMicroText}
      />

      {/* Section 11: Footer (in layout) */}
    </>
  )
}
