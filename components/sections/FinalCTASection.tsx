import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

interface FinalCTASectionProps {
  heading: string
  subtext: string
  ctaLabel: string
  microText?: string
}

export function FinalCTASection({
  heading,
  subtext,
  ctaLabel,
  microText,
}: FinalCTASectionProps) {
  return (
    <section className="relative bg-void py-[120px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-1/60 via-void to-navy-2/40" />
      <div className="absolute inset-0 dot-matrix opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] md:w-[900px] h-[420px] md:h-[560px] rounded-full opacity-40 blur-[100px] bg-[radial-gradient(circle_at_center,#5A3AD8_0%,rgba(76,140,255,0.3)_45%,transparent_72%)]" />
      <div className="glow-orb w-[460px] h-[460px] bg-accent/12 -top-40 left-1/2 -translate-x-1/2" />

      <div className="relative max-w-[640px] mx-auto px-[24px] md:px-[40px] lg:px-[80px] text-center">
        <div className="rounded-card border border-accent-border-soft bg-panel/70 backdrop-blur px-8 py-14 shadow-card">
          <SectionHeading
            heading={heading}
            subtitle={subtext}
            align="center"
          />

          <div className="mt-9">
            <Button variant="hero-cta" href="/contact">
              {ctaLabel}
            </Button>
          </div>

          {microText && (
            <p className="font-body font-normal text-[13px] text-ghost mt-5">
              {microText}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}