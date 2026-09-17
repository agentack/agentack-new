'use client'

import { motion } from 'framer-motion'

interface LogoStripProps {
  logos: Array<{ name: string; logo?: string }>
  label?: string
  speed?: number
}

export function LogoStrip({ logos, label, speed = 30 }: LogoStripProps) {
  return (
    <div className="w-full">
      {label && (
        <div className="text-center font-body font-medium text-[11px] uppercase tracking-[0.12em] text-ghost mb-6">
          {label}
        </div>
      )}

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-[80px] bg-gradient-to-r from-abyss to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-[80px] bg-gradient-to-l from-abyss to-transparent z-10" />

        <motion.div
          className="flex gap-3"
          animate={{ x: [0, -50] }}
          transition={{
            repeat: Infinity,
            duration: speed,
            ease: 'linear',
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex-shrink-0 font-mono font-medium text-[12px] text-soft bg-lifted border border-border-soft rounded-pill px-4 py-2 opacity-[0.75] transition-opacity duration-200 hover:opacity-100"
            >
              {logo.logo || logo.name}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}