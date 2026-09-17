'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useMediaQuery } from '@/lib/hooks/useMediaQuery'
import { useLanguage } from '@/lib/i18n/context'
import { locales } from '@/lib/i18n/config'
import { client } from '@/sanity/lib/client'
import { servicesQuery, icpsQuery } from '@/lib/sanity/queries'

interface NavService {
  _id: string
  name: string
  tagline: string
  slug: { current: string }
}

interface NavIcp {
  _id: string
  name: string
  tagline: string
  slug: { current: string }
}

let cachedServices: NavService[] | null = null
let cachedIcps: NavIcp[] | null = null
let cacheFetchedAt = 0
const CACHE_TTL = 15 * 60 * 1000

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [services, setServices] = useState<NavService[]>([])
  const [icps, setIcps] = useState<NavIcp[]>([])
  const isMobile = useMediaQuery('(max-width: 767px)')
  const { t, locale, setLocale } = useLanguage()

  const cycleLocale = () => {
    const idx = locales.indexOf(locale)
    setLocale(locales[(idx + 1) % locales.length])
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const now = Date.now()
    if (now - cacheFetchedAt < CACHE_TTL && cachedServices && cachedIcps) {
      setServices(cachedServices)
      setIcps(cachedIcps)
      return
    }
    client.fetch<NavService[]>(servicesQuery).then((data) => {
      cachedServices = data ?? []
      setServices(cachedServices)
    })
    client.fetch<NavIcp[]>(icpsQuery).then((data) => {
      cachedIcps = data ?? []
      setIcps(cachedIcps)
    })
    cacheFetchedAt = now
  }, [])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
        setIsServicesDropdownOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <nav
      className={`
        fixed inset-x-0 top-0 z-50 h-16
        transition-all duration-200
        ${isScrolled || isMobileMenuOpen
          ? 'bg-void/80 backdrop-blur-xl border-b border-accent-border-soft'
          : 'bg-transparent border-b border-transparent'}
      `}
      role="navigation"
      aria-label={t.nav.mainNavigation}
    >
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px] h-full flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="group inline-flex items-center gap-0.5"
          aria-label={t.nav.agentackHome}
        >
          <Image src="/logo.png" alt="Agentack" width={42} height={42} className="h-14 w-auto" priority />
          <span className="text-accent-strong font-display font-medium text-xl tracking-[-0.02em] transition-opacity group-hover:opacity-80">
            {t.nav.agentack}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => !isMobile && setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <button
              className="text-muted text-[15px] font-medium tracking-[-0.01em] hover:text-bright flex items-center gap-1.5 transition-colors"
              aria-expanded={isServicesDropdownOpen}
              aria-haspopup="true"
            >
              {t.nav.services}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isServicesDropdownOpen ? 'rotate-180 text-accent' : ''
                }`}
              />
            </button>

            {isServicesDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 bg-panel/95 backdrop-blur-xl border border-accent-border-soft rounded-[14px] py-4 min-w-[480px] shadow-card"
                role="menu"
              >
                <div className="grid grid-cols-2 gap-3 px-4">
                  {/* Services Column */}
                  <div>
                    <p className="text-[12px] uppercase tracking-[0.12em] text-ghost font-medium mb-2 px-3">
                      {t.nav.services}
                    </p>
                    {services.map((service) => (
                      <Link
                        key={service._id}
                        href={`/services/${service.slug.current}`}
                        className="block px-3 py-2.5 rounded-lg hover:bg-accent-tint hover:text-accent-strong transition-colors"
                        role="menuitem"
                      >
                        <div className="text-[15px] text-bright font-medium">
                          {service.name}
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Who We Work With Column */}
                  <div>
                    <p className="text-[12px] uppercase tracking-[0.12em] text-ghost font-medium mb-2 px-3">
                      {t.nav.whoWeWorkWith}
                    </p>
                    {icps.map((icp) => (
                      <Link
                        key={icp._id}
                        href={`/who-we-work-with/${icp.slug.current}`}
                        className="block px-3 py-2.5 rounded-lg hover:bg-accent-tint hover:text-accent-strong transition-colors"
                        role="menuitem"
                      >
                        <div className="text-[15px] text-bright font-medium">
                          {icp.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="text-muted text-[15px] font-medium tracking-[-0.01em] hover:text-bright transition-colors"
          >
            {t.nav.about}
          </Link>
          <Link
            href="/contact"
            className="text-muted text-[15px] font-medium tracking-[-0.01em] hover:text-bright transition-colors"
          >
            {t.nav.contact}
          </Link>

          {/* Language Toggle */}
          <button
            onClick={cycleLocale}
            className="text-[14px] font-medium text-muted hover:text-accent-strong transition-colors border border-accent-border-soft rounded-pill px-3 py-1.5"
            aria-label={`Switch language to ${locale === 'en' ? 'Arabic' : 'English'}`}
          >
            {locale === 'en' ? 'AR' : 'EN'}
          </button>

          {/* Navbar CTA */}
          <Button variant="navbar-cta" href="/contact">
            {t.nav.bookCall}
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-bright p-2 hover:bg-lifted rounded-btn-nav transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-16 left-0 w-full bg-void/95 backdrop-blur-xl border-b border-accent-border-soft py-8 px-6 flex flex-col gap-5"
          role="menu"
        >
          <Link
            href="/services"
            className="text-bright text-[17px] font-medium hover:text-accent-strong transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t.nav.services}
          </Link>
          <Link
            href="/about"
            className="text-bright text-[17px] font-medium hover:text-accent-strong transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t.nav.about}
          </Link>
          <Link
            href="/contact"
            className="text-bright text-[17px] font-medium hover:text-accent-strong transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t.nav.contact}
          </Link>
          <div className="flex items-center gap-4">
            <button
              onClick={() => { cycleLocale(); setIsMobileMenuOpen(false) }}
              className="text-[14px] font-medium text-muted hover:text-accent-strong transition-colors border border-accent-border-soft rounded-pill px-3 py-1.5"
            >
              {locale === 'en' ? 'AR' : 'EN'}
            </button>
            <Button
              variant="navbar-cta"
              href="/contact"
              className="flex-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.bookCall}
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}