'use client'

import { useLanguage } from '@/lib/i18n/context'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'

interface ServiceHeroSectionProps {
  eyebrow?: string
  headline: string
  subtitle: string
}

export function ServiceHeroSection({
  eyebrow: _eyebrow,
  headline,
  subtitle,
}: ServiceHeroSectionProps) {
  const { t } = useLanguage()
  const eyebrow = _eyebrow ?? t.sections.serviceHero.eyebrow
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-0 via-navy-1 to-navy-2 pt-[150px] pb-[100px]">
      <div className="absolute inset-0 grid-pattern" />
      <div className="glow-orb w-[380px] h-[380px] bg-accent/12 -top-24 right-0" />

      <div className="relative max-w-[960px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-accent text-[13px] font-medium mb-6 hover:text-accent-strong transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {t.sections.serviceHero.allServices}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <Badge variant="green" className="mb-4">
            {eyebrow}
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-medium text-[34px] sm:text-[44px] md:text-[52px] leading-[1.1] tracking-[-0.02em] text-bright mb-6"
        >
          {headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-body font-normal text-[19px] leading-[1.75] text-muted max-w-[600px]"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  )
}