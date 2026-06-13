'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

const services = [
  { label: 'Recurring Cleaning', href: '/services/recurring-cleaning' },
  { label: 'Deep Clean (Spottly Clean)', href: '/services/deep-cleaning' },
  { label: 'Move-In / Move-Out', href: '/services/move-in-move-out-cleaning' },
  { label: 'Custom Cleaning', href: '/services/custom-cleaning' },
]

const westside = [
  { label: 'Culver City', href: '/locations/culver-city' },
  { label: 'Mar Vista', href: '/locations/mar-vista' },
  { label: 'Palms', href: '/locations/palms' },
  { label: 'Playa del Rey', href: '/locations/playa-del-rey' },
  { label: 'Playa Vista', href: '/locations/playa-vista' },
  { label: 'Marina del Rey', href: '/locations/marina-del-rey' },
  { label: 'Westchester', href: '/locations/westchester' },
  { label: 'Santa Monica', href: '/locations/santa-monica' },
  { label: 'Venice', href: '/locations/venice-beach' },
]

const southBay = [
  { label: 'El Segundo', href: '/locations/el-segundo' },
  { label: 'Manhattan Beach', href: '/locations/manhattan-beach' },
  { label: 'Redondo Beach', href: '/locations/redondo-beach' },
  { label: 'Torrance', href: '/locations/torrance' },
  { label: 'Hawthorne', href: '/locations/hawthorne' },
  { label: 'Gardena', href: '/locations/gardena' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const areasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
      if (areasRef.current && !areasRef.current.contains(e.target as Node)) {
        setAreasOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-200 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl font-extrabold text-brand-blue tracking-tight">Spottly</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className="px-3 py-2 text-slate-700 hover:text-brand-blue font-medium transition-colors rounded-md hover:bg-slate-50">
              Home
            </Link>

            {/* Services dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => { setServicesOpen(!servicesOpen); setAreasOpen(false) }}
                className="flex items-center gap-1 px-3 py-2 text-slate-700 hover:text-brand-blue font-medium transition-colors rounded-md hover:bg-slate-50"
                aria-expanded={servicesOpen}
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute left-0 top-full mt-1 w-56 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-50">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-2.5 text-slate-700 hover:text-brand-blue hover:bg-slate-50 transition-colors text-sm font-medium"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Service Areas dropdown */}
            <div ref={areasRef} className="relative">
              <button
                onClick={() => { setAreasOpen(!areasOpen); setServicesOpen(false) }}
                className="flex items-center gap-1 px-3 py-2 text-slate-700 hover:text-brand-blue font-medium transition-colors rounded-md hover:bg-slate-50"
                aria-expanded={areasOpen}
              >
                Service Areas
                <svg className={`w-4 h-4 transition-transform ${areasOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {areasOpen && (
                <div className="absolute left-0 top-full mt-1 w-64 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-50">
                  <p className="px-4 pt-1 pb-1 text-xs font-semibold text-slate-400 uppercase tracking-wide">Westside</p>
                  {westside.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={() => setAreasOpen(false)}
                      className="block px-4 py-2 text-slate-700 hover:text-brand-blue hover:bg-slate-50 transition-colors text-sm font-medium"
                    >
                      {c.label}
                    </Link>
                  ))}
                  <div className="border-t border-slate-100 mt-2 pt-2">
                    <p className="px-4 pt-1 pb-1 text-xs font-semibold text-slate-400 uppercase tracking-wide">South Bay</p>
                    {southBay.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setAreasOpen(false)}
                        className="block px-4 py-2 text-slate-700 hover:text-brand-blue hover:bg-slate-50 transition-colors text-sm font-medium"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="px-3 py-2 text-slate-700 hover:text-brand-blue font-medium transition-colors rounded-md hover:bg-slate-50">
              About
            </Link>
            <Link href="/reviews" className="px-3 py-2 text-slate-700 hover:text-brand-blue font-medium transition-colors rounded-md hover:bg-slate-50">
              Reviews
            </Link>
            <Link href="/blog" className="px-3 py-2 text-slate-700 hover:text-brand-blue font-medium transition-colors rounded-md hover:bg-slate-50">
              Blog
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+13109632302"
              className="flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-blue-dark transition-colors min-h-[48px] px-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (310) 963-2302
            </a>
            <Link
              href="/contact"
              className="bg-brand-blue text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-blue-dark transition-colors min-h-[48px] flex items-center"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-slate-700 hover:text-brand-blue min-h-[48px] min-w-[48px] flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block py-3 text-slate-700 font-medium border-b border-slate-100">
              Home
            </Link>

            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between py-3 text-slate-700 font-medium border-b border-slate-100"
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="pl-4 py-2 space-y-1">
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="block py-2 text-slate-600 hover:text-brand-blue text-sm font-medium">
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setAreasOpen(!areasOpen)}
                className="w-full flex items-center justify-between py-3 text-slate-700 font-medium border-b border-slate-100"
              >
                Service Areas
                <svg className={`w-4 h-4 transition-transform ${areasOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {areasOpen && (
                <div className="pl-4 py-2">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Westside</p>
                  <div className="space-y-1 mb-4">
                    {westside.map((c) => (
                      <Link key={c.href} href={c.href} onClick={() => setMobileOpen(false)} className="block py-1.5 text-slate-600 hover:text-brand-blue text-sm font-medium">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">South Bay</p>
                  <div className="space-y-1">
                    {southBay.map((c) => (
                      <Link key={c.href} href={c.href} onClick={() => setMobileOpen(false)} className="block py-1.5 text-slate-600 hover:text-brand-blue text-sm font-medium">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" onClick={() => setMobileOpen(false)} className="block py-3 text-slate-700 font-medium border-b border-slate-100">About</Link>
            <Link href="/reviews" onClick={() => setMobileOpen(false)} className="block py-3 text-slate-700 font-medium border-b border-slate-100">Reviews</Link>
            <Link href="/blog" onClick={() => setMobileOpen(false)} className="block py-3 text-slate-700 font-medium border-b border-slate-100">Blog</Link>

            <div className="pt-4 space-y-3">
              <a href="tel:+13109632302" className="flex items-center justify-center gap-2 w-full py-3 border-2 border-brand-blue text-brand-blue font-semibold rounded-lg min-h-[48px]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (310) 963-2302
              </a>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="flex items-center justify-center w-full py-3 bg-brand-blue text-white font-semibold rounded-lg min-h-[48px]">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
