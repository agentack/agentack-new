import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { StatCard } from '@/components/ui/StatCard'
import { Divider } from '@/components/ui/Divider'

interface Stat {
  value: number
  suffix?: string
  prefix?: string
  label: string
}

interface StatsSectionProps {
  stats: Stat[]
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <Section bg="#0B0E20" paddingY="sm">
      <Container>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center">
              <StatCard
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                label={stat.label}
                duration={2000}
              />
              {index < stats.length - 1 && (
                <Divider
                  color="#2A3060"
                  className="hidden md:block w-px h-12 mx-12"
                />
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
