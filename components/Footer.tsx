import Link from 'next/link'

const services = [
  { label: 'Recurring Cleaning', href: '/services/recurring-cleaning' },
  { label: 'Deep Clean', href: '/services/deep-cleaning' },
  { label: 'Move-In / Move-Out', href: '/services/move-in-move-out-cleaning' },
  { label: 'Custom Cleaning', href: '/services/custom-cleaning' },
]

const locations = [
  { label: 'Culver City', href: '/locations/culver-city' },
  { label: 'Mar Vista', href: '/locations/mar-vista' },
  { label: 'Palms', href: '/locations/palms' },
  { label: 'Playa del Rey', href: '/locations/playa-del-rey' },
  { label: 'Playa Vista', href: '/locations/playa-vista' },
  { label: 'Marina del Rey', href: '/locations/marina-del-rey' },
  { label: 'Westchester', href: '/locations/westchester' },
  { label: 'Santa Monica', href: '/locations/santa-monica' },
  { label: 'Venice', href: '/locations/venice-beach' },
  { label: 'El Segundo', href: '/locations/el-segundo' },
  { label: 'Manhattan Beach', href: '/locations/manhattan-beach' },
  { label: 'Redondo Beach', href: '/locations/redondo-beach' },
  { label: 'Torrance', href: '/locations/torrance' },
  { label: 'Hawthorne', href: '/locations/hawthorne' },
  { label: 'Gardena', href: '/locations/gardena' },
]

const company = [
  { label: 'About', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Specials', href: '/specials' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div>
            <Link href="/" className="text-2xl font-extrabold tracking-tight text-white">Spottly</Link>
            <p className="mt-2 text-brand-baby text-sm font-medium italic">Cleaning for the spots others miss.</p>
            <div className="mt-5 space-y-2 text-sm text-slate-200">
              <a href="tel:+13109632302" className="flex items-center gap-2 hover:text-white transition-colors min-h-[44px]">
                <svg className="w-4 h-4 text-brand-baby shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (310) 963-2302
              </a>
              <a href="mailto:spottlyservices@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors break-all">
                <svg className="w-4 h-4 text-brand-baby shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                spottlyservices@gmail.com
              </a>
              <p className="flex items-start gap-2 pt-1">
                <svg className="w-4 h-4 text-brand-baby shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Serving LA&apos;s Westside &amp; South Bay
              </p>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-slate-300 hover:text-white transition-colors text-sm">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Service Areas</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {locations.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-300 hover:text-white transition-colors text-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Company */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-slate-300 hover:text-white transition-colors text-sm">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-400">
          <p>&copy; {year} Spottly. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
