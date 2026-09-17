'use client'

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

interface ServiceCardsSectionProps {
  services: Service[]
}

function renderIcon(iconName: string) {
  const Icon = getServiceIcon(iconName)
  return <Icon className="w-4 h-4" />
}

export function ServiceCardsSection({ services }: ServiceCardsSectionProps) {
  return (
    <section className="bg-black-2 py-[80px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
