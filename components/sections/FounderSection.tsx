'use client'

import { useLanguage } from '@/lib/i18n/context'
import Image from 'next/image'
import Link from 'next/link'

interface Founder {
  name: string
  role: string
  bio: string
  photo?: {
    asset?: {
      url: string
    }
  }
  linkedinUrl?: string
}

interface FounderSectionProps {
  founder: Founder
}

export function FounderSection({ founder }: FounderSectionProps) {
  const { t } = useLanguage()
  return (
    <section className="bg-black-base py-[100px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
          {/* Left: Photo */}
          <div className="relative aspect-[4/5] rounded-card overflow-hidden bg-surface-dark">
            {founder.photo?.asset?.url ? (
              <Image
                src={founder.photo.asset.url}
                alt={founder.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-surface-dark text-sage-mid">
                <span className="text-[15px]">{t.sections.founder.photoComingSoon}</span>
              </div>
            )}
          </div>

          {/* Right: Bio */}
          <div>
            <h2 className="font-display font-medium text-[42px] leading-[1.2] tracking-[-0.01em] text-frost-white mb-4">
              {founder.name}
            </h2>
            <p className="font-body font-medium text-[17px] text-teal-primary mb-6">
              {founder.role}
            </p>
            <p className="font-body font-normal text-[17px] leading-[1.7] text-sage-mid mb-6">
              {founder.bio}
            </p>
            {founder.linkedinUrl && (
              <Link
                href={founder.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent text-[15px] font-medium underline underline-offset-[3px] hover:text-accent-strong transition-colors"
              >
                {t.sections.founder.connectOnLinkedin}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
