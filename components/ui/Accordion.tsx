'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface AccordionProps {
  items: Array<{ question: string; answer: string }>
  allowMultiple?: boolean
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            className={`rounded-card border transition-colors duration-200 ${
              isOpen ? 'border-accent-border bg-lifted' : 'border-border-soft bg-panel'
            }`}
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-body font-medium text-[15px] text-bright">
                {item.question}
              </span>
              <ChevronDown
                className={`w-4 h-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-accent' : 'text-ghost'}`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="font-body font-normal text-[14px] leading-[1.7] text-muted px-5 pb-5">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}