'use client'

import { useLanguage } from '@/lib/i18n/context'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { motion } from 'framer-motion'
import { getServiceIcon } from '@/lib/utils/icons'

interface Service {
  _id: string
  name: string
  slug: { current: string }
  tagline: string
  description: string
  icon: string
  outcomes: string[]
  timeline?: string
}

interface ServicesOverviewSectionProps {
  services: Service[]
}

function renderIcon(iconName: string) {
  const Icon = getServiceIcon(iconName)
  return <Icon className="w-4 h-4" />
}

export function ServicesOverviewSection({ services }: ServicesOverviewSectionProps) {
  const { t } = useLanguage()
  return (
    <section className="bg-black-2 py-[100px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <SectionHeading
          eyebrow={t.sections.servicesOverview.eyebrow}
          heading={t.sections.servicesOverview.heading}
          subtitle={t.sections.servicesOverview.subtitle}
          align="center"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {services.map((service) => (
            <motion.div
              key={service._id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ServiceCard
                icon={renderIcon(service.icon)}
                title={service.name}
                description={service.tagline}
                outcomes={service.outcomes}
                href={`/services/${service.slug.current}`}
                timeline={service.timeline}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
