'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

interface HeroSectionProps {
  eyebrow: string
  headline: string
  subtitle: string
  primaryCtaLabel: string
  secondaryCtaLabel: string
}

export function HeroSection({
  eyebrow,
  headline,
  subtitle,
  primaryCtaLabel,
  secondaryCtaLabel,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-gradient-to-br from-navy-0 via-navy-1 to-navy-2">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-70 pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/herobg.mp4" type="video/mp4" />
      </video>

      {/* Grid texture */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Dot matrix texture */}
      <div className="absolute inset-0 dot-matrix opacity-50" />

      {/* Large glowing gradient blob (sample-style luminous halo) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] md:w-[980px] h-[420px] md:h-[640px] rounded-full opacity-50 blur-[90px] md:blur-[110px] bg-[radial-gradient(circle_at_center,#5A3AD8_0%,rgba(76,140,255,0.35)_45%,transparent_72%)]" />

      {/* Glow orbs */}
      <div className="glow-orb w-[300px] md:w-[420px] h-[300px] md:h-[420px] bg-accent/20 -top-32 -right-24" />
      <div className="glow-orb w-[280px] md:w-[380px] h-[280px] md:h-[380px] bg-azure/25 bottom-0 -left-40" />
      <div className="absolute inset-x-0 bottom-0 h-32 md:h-40 bg-gradient-to-t from-void to-transparent" />

      <div className="relative z-10 max-w-[820px] mx-auto px-[20px] sm:px-[24px] md:px-[40px] lg:px-[80px] text-center pt-[88px] sm:pt-[96px] lg:pt-[104px] pb-[88px] sm:pb-[112px] min-h-[calc(100svh-64px)] flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <Badge variant="green" className="mb-6">
            {eyebrow}
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-medium text-[34px] sm:text-[46px] md:text-[60px] lg:text-[72px] leading-[1.08] tracking-[-0.025em] text-bright mb-6 md:mb-7"
        >
          {headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-body font-normal text-[17px] sm:text-[19px] leading-[1.7] sm:leading-[1.75] text-muted max-w-[560px] sm:max-w-[600px] mx-auto mb-8 sm:mb-10"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch sm:items-center gap-3 w-full sm:w-auto"
        >
          <Button variant="hero-cta" href="/contact" className="w-full sm:w-auto justify-center">
            {primaryCtaLabel}
          </Button>
          <Button variant="ghost-paired" href="/services" className="w-full sm:w-auto justify-center">
            {secondaryCtaLabel}
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="w-6 h-6 text-ghost animate-bounce" />
      </motion.div>
    </section>
  )
}