'use client'

import { useLanguage } from '@/lib/i18n/context'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { motion } from 'framer-motion'
import { Search, FileText, Clock } from 'lucide-react'

export function OurApproachSection() {
  const { t } = useLanguage()
  const FEATURES = [
    {
      icon: <Search className="w-4 h-4" />,
      title: t.sections.ourApproach.auditFirst.title,
      description: t.sections.ourApproach.auditFirst.description,
      accent: 'teal' as const,
    },
    {
      icon: <FileText className="w-4 h-4" />,
      title: t.sections.ourApproach.documentationIncluded.title,
      description: t.sections.ourApproach.documentationIncluded.description,
      accent: 'teal' as const,
    },
    {
      icon: <Clock className="w-4 h-4" />,
      title: t.sections.ourApproach.asyncFirst.title,
      description: t.sections.ourApproach.asyncFirst.description,
      accent: 'teal' as const,
    },
  ]
  return (
    <section className="bg-black-2 py-[100px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <SectionHeading
          eyebrow={t.sections.ourApproach.eyebrow}
          heading={t.sections.ourApproach.heading}
          subtitle={t.sections.ourApproach.subtitle}
          align="left"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                accent={feature.accent}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
