'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/context'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { motion } from 'framer-motion'
import { getServiceIcon } from '@/lib/utils/icons'

interface Industry {
  _id: string
  name: string
  slug: { current: string }
  tagline: string
  icon: string
}

interface IndustriesSectionProps {
  industries: Industry[]
}

function renderIcon(iconName: string) {
  const Icon = getServiceIcon(iconName)
  return <Icon className="w-4 h-4" />
}

export function IndustriesSection({ industries }: IndustriesSectionProps) {
  const { t } = useLanguage()

  if (!industries || industries.length === 0) {
    return null
  }

  return (
    <section className="bg-black-3 py-[100px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <SectionHeading
          eyebrow={t.sections.industries.eyebrow}
          heading={t.sections.industries.heading}
          subtitle={t.sections.industries.subtitle}
          align="center"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {industries.map((industry) => (
            <motion.div
              key={industry._id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href={`/who-we-work-with/${industry.slug.current}`}
                className="group relative flex items-start gap-4 h-full bg-panel border border-border-soft rounded-card p-6 shadow-card transition-all duration-200 hover:border-accent-border hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-[10px] bg-accent-tint border border-accent-border-soft flex items-center justify-center text-accent-strong shrink-0">
                  {renderIcon(industry.icon)}
                </div>
                <div>
                  <h3 className="font-body font-medium text-[16px] text-bright group-hover:text-accent-strong transition-colors">
                    {industry.name}
                  </h3>
                  <p className="font-body font-normal text-[13px] leading-[1.6] text-muted mt-1">
                    {industry.tagline}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}