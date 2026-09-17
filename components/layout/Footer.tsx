'use client'

import { useLanguage } from '@/lib/i18n/context'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, MapPin, Mail } from 'lucide-react'

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  const { t } = useLanguage()

  const FOOTER_LINKS = [
    { name: t.footer.services, href: '/services' },
    { name: t.footer.about, href: '/about' },
    { name: t.footer.contact, href: '/contact' },
    { name: 'Our Customers', href: '/who-we-work-with' },
  ]

  const SOCIAL_LINKS = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/agentack', icon: <Linkedin className="w-4 h-4" /> },
    { name: 'Facebook', href: 'https://www.facebook.com/share/1Cjm6YoyuR/', icon: <Facebook className="w-4 h-4" /> },
    { name: 'Instagram', href: 'https://linkedin.com/company/agentack', icon: <Instagram className="w-4 h-4" /> },
  ]

  return (
    <footer className="bg-abyss border-t border-accent-border-soft" role="contentinfo">
      {/* Top area */}
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px] pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 w-fit"
              aria-label={t.nav.agentackHome}
            >
              <Image src="/logo.png" alt="Agentack" width={32} height={32} className="h-8 w-auto" />
              <span className="text-accent-strong font-display font-medium text-xl tracking-[-0.02em] transition-opacity group-hover:opacity-80">
                {t.footer.agentack}
              </span>
            </Link>

            <p className="text-muted text-[14px] leading-relaxed max-w-[360px]">
              {t.footer.tagline}
            </p>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <span className="text-muted text-[14px]">{t.footer.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a
                  className="text-muted text-[14px] hover:text-accent-strong transition-colors"
                  href={`mailto:${t.footer.email}`}
                >
                  {t.footer.email}
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h3 className="text-[11px] uppercase tracking-[0.12em] text-ghost font-medium mb-4">
              {t.footer.services}
            </h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted text-[13px] hover:text-bright transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-4">
            <h3 className="text-[11px] uppercase tracking-[0.12em] text-ghost font-medium mb-4">
              Connect
            </h3>
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-muted text-[13px] hover:text-bright transition-colors w-fit"
                  aria-label={social.name}
                >
                  <span className="w-7 h-7 rounded-[8px] border border-accent-border-soft bg-lifted flex items-center justify-center text-accent-strong">
                    {social.icon}
                  </span>
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-accent-border-soft">
        <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px] py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ghost text-[12px]">
            {t.footer.copyright.replace('{year}', String(CURRENT_YEAR))}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-ghost text-[12px] hover:text-muted transition-colors"
            >
              {t.footer.privacyPolicy}
            </Link>
            <Link
              href="#"
              className="text-ghost text-[12px] hover:text-muted transition-colors"
            >
              {t.footer.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}