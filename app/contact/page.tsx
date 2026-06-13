import type { Metadata } from 'next'
import Breadcrumbs, { breadcrumbJsonLd } from '@/components/Breadcrumbs'
import QuoteForm from '@/components/QuoteForm'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Contact Spottly | Get a Free House Cleaning Quote',
  description: 'Contact Spottly for a free house cleaning quote in LA\'s Westside and South Bay. Recurring, deep, and move-out cleaning — by appointment, 7 days a week.',
  alternates: { canonical: 'https://spottly.com/contact' },
  openGraph: {
    title: 'Contact Spottly | Get a Free House Cleaning Quote',
    description: 'Contact Spottly for a free house cleaning quote in LA\'s Westside and South Bay.',
    url: 'https://spottly.com/contact',
    images: [{ url: 'https://spottly.com/og', width: 1200, height: 630, alt: 'Contact Spottly' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Spottly | Get a Free House Cleaning Quote',
    description: 'Contact Spottly for a free house cleaning quote in LA\'s Westside and South Bay.',
    images: ['https://spottly.com/og'],
  },
}

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Contact' },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Spottly',
  telephone: '+13109632302',
  email: 'spottlyservices@gmail.com',
  url: 'https://spottly.com',
  areaServed: [
    'Culver City, CA', 'Mar Vista, CA', 'Palms, CA', 'Playa del Rey, CA',
    'Playa Vista, CA', 'Marina del Rey, CA', 'Westchester, CA', 'Santa Monica, CA',
    'Venice, CA', 'El Segundo, CA', 'Manhattan Beach, CA', 'Redondo Beach, CA',
    'Torrance, CA', 'Hawthorne, CA', 'Gardena, CA',
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    description: 'By appointment',
  },
}

const serviceAreas = [
  'Culver City', 'Mar Vista', 'Palms', 'Playa del Rey', 'Playa Vista',
  'Marina del Rey', 'Westchester', 'Santa Monica', 'Venice',
  'El Segundo', 'Manhattan Beach', 'Redondo Beach', 'Torrance', 'Hawthorne', 'Gardena',
]

export default function ContactPage() {
  return (
    <>
      <Script id="schema-local-business-contact" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="schema-breadcrumb-contact" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />

      <div className="bg-slate-50 py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Contact Spottly</h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Ready to book, or just want to ask a question? Reach out — we&apos;ll get back to you quickly.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center text-brand-blue shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Phone</p>
                  <a href="tel:+13109632302" className="text-brand-blue hover:underline font-medium">(310) 963-2302</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center text-brand-blue shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Email</p>
                  <a href="mailto:spottlyservices@gmail.com" className="text-brand-blue hover:underline font-medium break-all">spottlyservices@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center text-brand-blue shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Hours</p>
                  <p className="text-slate-600">By appointment — 7 days a week</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center text-brand-blue shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Service Area</p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    LA&apos;s Westside &amp; South Bay — mobile service, no storefront.<br />
                    {serviceAreas.join(' · ')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <QuoteForm />
          </div>
        </div>
      </div>
    </>
  )
}
