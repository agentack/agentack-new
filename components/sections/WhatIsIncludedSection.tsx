'use client'

import { useLanguage } from '@/lib/i18n/context'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { motion } from 'framer-motion'

interface Feature {
  title: string
  description: string
  icon?: string
}

interface WhatIsIncludedSectionProps {
  features: Feature[]
}

// Dynamic icon renderer based on icon name from Sanity
function renderIcon(iconName?: string) {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  )
}

export function WhatIsIncludedSection({ features }: WhatIsIncludedSectionProps) {
  const { t } = useLanguage()
  return (
    <section className="bg-black-2 py-[80px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <SectionHeading
          eyebrow={t.sections.whatIsIncluded.eyebrow}
          heading={t.sections.whatIsIncluded.heading}
          align="left"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard
                icon={renderIcon(feature.icon)}
                title={feature.title}
                description={feature.description}
                accent="teal"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
