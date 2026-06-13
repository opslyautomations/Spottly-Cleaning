import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import QuoteForm from '@/components/QuoteForm'
import ServicesGrid from '@/components/ServicesGrid'
import CTASection from '@/components/CTASection'
import { placeholderReviews } from '@/data/reviews'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'House Cleaning in LA\'s Westside & South Bay | Spottly',
  description: 'Spottly is a residential house cleaning service across LA\'s Westside and South Bay. Recurring, deep, and move-out cleaning with safe, family-friendly products. Get a quote.',
  alternates: { canonical: 'https://spottly.com' },
  openGraph: {
    title: 'House Cleaning in LA\'s Westside & South Bay | Spottly',
    description: 'Spottly is a residential house cleaning service across LA\'s Westside and South Bay. Recurring, deep, and move-out cleaning with safe, family-friendly products. Get a quote.',
    url: 'https://spottly.com',
    type: 'website',
    images: [{ url: 'https://spottly.com/og/home.png', width: 1200, height: 630, alt: 'Spottly — House Cleaning for LA\'s Westside & South Bay' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'House Cleaning in LA\'s Westside & South Bay | Spottly',
    description: 'Spottly is a residential house cleaning service across LA\'s Westside and South Bay. Recurring, deep, and move-out cleaning with safe, family-friendly products.',
    images: ['https://spottly.com/og/home.png'],
  },
}

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

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HousePainter',
  '@id': 'https://spottly.com/#business',
  name: 'Spottly',
  description: 'Residential house cleaning service for LA\'s Westside and South Bay. Recurring, deep, and move-out cleaning with safe, low-toxicity products.',
  url: 'https://spottly.com',
  telephone: '+13109632302',
  email: 'spottlyservices@gmail.com',
  areaServed: [
    { '@type': 'City', name: 'Culver City', sameAs: 'https://en.wikipedia.org/wiki/Culver_City,_California' },
    { '@type': 'City', name: 'Mar Vista' },
    { '@type': 'City', name: 'Palms' },
    { '@type': 'City', name: 'Playa del Rey' },
    { '@type': 'City', name: 'Playa Vista' },
    { '@type': 'City', name: 'Marina del Rey' },
    { '@type': 'City', name: 'Westchester' },
    { '@type': 'City', name: 'Santa Monica', sameAs: 'https://en.wikipedia.org/wiki/Santa_Monica,_California' },
    { '@type': 'City', name: 'Venice' },
    { '@type': 'City', name: 'El Segundo', sameAs: 'https://en.wikipedia.org/wiki/El_Segundo,_California' },
    { '@type': 'City', name: 'Manhattan Beach', sameAs: 'https://en.wikipedia.org/wiki/Manhattan_Beach,_California' },
    { '@type': 'City', name: 'Redondo Beach', sameAs: 'https://en.wikipedia.org/wiki/Redondo_Beach,_California' },
    { '@type': 'City', name: 'Torrance', sameAs: 'https://en.wikipedia.org/wiki/Torrance,_California' },
    { '@type': 'City', name: 'Hawthorne', sameAs: 'https://en.wikipedia.org/wiki/Hawthorne,_California' },
    { '@type': 'City', name: 'Gardena', sameAs: 'https://en.wikipedia.org/wiki/Gardena,_California' },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    description: 'By appointment',
  },
}

export default function HomePage() {
  const previewReviews = placeholderReviews.slice(0, 3)

  return (
    <>
      <Script id="schema-local-business" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue via-brand-blue-light to-[#2d5bb5] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                House Cleaning for LA&apos;s Westside &amp; South Bay
              </h1>
              <p className="mt-5 text-lg text-brand-baby leading-relaxed">
                No skipped corners, no &ldquo;good enough.&rdquo; Spottly cleans the spots other services rush past — with safe, low-toxicity products that are gentle on your family and pets.
              </p>
              <p className="mt-4 text-white/80 text-sm font-medium">
                4 years of hands-on experience · Safe, low-toxicity products · Satisfaction-first standard
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#quote" className="btn-white text-center">
                  Get a Free Quote
                </a>
                <a href="tel:+13109632302" className="flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors min-h-[48px]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (310) 963-2302
                </a>
              </div>
            </div>
            <div id="quote">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: '✓', label: '4 Years\' Experience' },
              { icon: '🌿', label: 'Pet- & Family-Safe Products' },
              { icon: '🔄', label: 'Recurring · Deep · Move-In/Out' },
              { icon: '📍', label: 'Westside & South Bay' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1 py-2">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-semibold text-slate-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-heading">Cleaning Services</h2>
            <p className="section-subheading">Four types of residential cleaning — find the one that fits your situation.</p>
          </div>
          <ServicesGrid />
        </div>
      </section>

      {/* Why Spottly */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why Spottly</h2>
            <p className="section-subheading">The difference between a clean that looks done and a home that actually is.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'We clean the spots others miss',
                body: 'Baseboards, shower corners, behind the toilet, under the sink — the places other services skip to stay on schedule. That\'s what Spottly is built around.',
              },
              {
                title: 'Safe products, no compromise',
                body: 'Low-toxicity, family- and pet-friendly cleaning products that actually work. No harsh chemical smell, no residue you\'re worried about on surfaces your kids touch.',
              },
              {
                title: 'Consistent, every visit',
                body: 'Whether it\'s your first visit or your fiftieth, the standard is the same. A familiar team learns your home and delivers the same thorough result each time.',
              },
              {
                title: 'Perfect when we leave — or we make it right',
                body: 'That\'s the standard. If something isn\'t right, we fix it. No uncertainty, no chasing anyone down.',
              },
            ].map((pillar) => (
              <div key={pillar.title} className="card">
                <div className="w-10 h-10 bg-brand-baby/30 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-3 h-3 bg-brand-blue rounded-full" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{pillar.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Clean */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-heading">Where We Clean</h2>
            <p className="section-subheading">Serving 15 cities across LA&apos;s Westside and South Bay.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div>
              <h3 className="font-bold text-brand-blue uppercase text-xs tracking-widest mb-4">Westside</h3>
              <ul className="space-y-2">
                {westside.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href} className="flex items-center gap-2 text-slate-700 hover:text-brand-blue font-medium transition-colors group">
                      <span className="w-1.5 h-1.5 bg-brand-baby rounded-full group-hover:bg-brand-blue transition-colors" />
                      House cleaning in {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-blue uppercase text-xs tracking-widest mb-4">South Bay</h3>
              <ul className="space-y-2">
                {southBay.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href} className="flex items-center gap-2 text-slate-700 hover:text-brand-blue font-medium transition-colors group">
                      <span className="w-1.5 h-1.5 bg-brand-baby rounded-full group-hover:bg-brand-blue transition-colors" />
                      House cleaning in {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Get a quote', body: 'Tell us your home size, preferred frequency, and what you need. We\'ll send a straightforward quote — no guessing.' },
              { step: '2', title: 'Pick your plan', body: 'Choose recurring, a one-time deep clean, a move clean, or something custom. We schedule around you.' },
              { step: '3', title: 'Come home to a spotless home', body: 'We do the work, you come home to a properly clean house. That\'s it.' },
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-14 h-14 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-extrabold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Recent Work</h2>
            <Link href="/gallery" className="text-brand-blue font-semibold hover:underline text-sm">
              View all photos →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Kitchen deep clean — Culver City',
              'Bathroom reset — Santa Monica',
              'Move-out clean — Palms',
              'Living room — Manhattan Beach',
              'Kitchen after deep clean — Venice',
              'Bathroom — Redondo Beach',
            ].map((caption, i) => (
              <div key={i} className="aspect-square bg-slate-200 rounded-xl overflow-hidden relative group">
                {/* Placeholder — replace with real job photos before launch */}
                <div className="w-full h-full flex items-end p-3 bg-gradient-to-t from-slate-700/60 to-transparent">
                  <p className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {caption}
                  </p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-10 h-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews preview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What Clients Say</h2>
            <Link href="/reviews" className="text-brand-blue font-semibold hover:underline text-sm">
              All reviews →
            </Link>
          </div>
          {/* PLACEHOLDER REVIEWS — replace with real customer reviews before launch */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewReviews.map((review, i) => (
              <div key={i} className="card">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                <p className="text-slate-500 text-xs font-semibold">— {review.name}, {review.city}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-4 text-center">
            {/* PLACEHOLDER REVIEWS — replace with real customer reviews before launch */}
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        heading="Ready for a home that's actually, properly clean?"
        subheading="Pick your service, tell us your schedule, and we'll handle the rest."
      />
    </>
  )
}
