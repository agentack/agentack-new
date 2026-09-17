'use client'

import { IcpCard } from '@/components/ui/IcpCard'
import { motion } from 'framer-motion'
import { getServiceIcon } from '@/lib/utils/icons'

interface Icp {
  _id: string
  name: string
  slug: { current: string }
  tagline: string
  description: string
  icon: string
  outcomes: string[]
}

interface IcpCardsSectionProps {
  icps: Icp[]
}

function renderIcon(iconName: string) {
  const Icon = getServiceIcon(iconName)
  return <Icon className="w-4 h-4" />
}

export function IcpCardsSection({ icps }: IcpCardsSectionProps) {
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
          {icps.map((icp) => (
            <motion.div
              key={icp._id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <IcpCard
                icon={renderIcon(icp.icon)}
                name={icp.name}
                tagline={icp.tagline}
                description={icp.description}
                outcomes={icp.outcomes}
                href={`/who-we-work-with/${icp.slug.current}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}