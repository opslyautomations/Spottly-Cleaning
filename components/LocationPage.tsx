import Link from 'next/link'
import Breadcrumbs, { breadcrumbJsonLd, type Crumb } from '@/components/Breadcrumbs'
import FAQ, { type FAQItem } from '@/components/FAQ'
import { faqJsonLd } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import ServicesGrid from '@/components/ServicesGrid'
import Script from 'next/script'
import { locationReviews } from '@/data/reviews'

export interface ServiceLink {
  label: string
  href: string
  description: string
}

export interface LocationPageProps {
  city: string
  citySlug: string
  localLead: string
  whySection: React.ReactNode
  neighborhoods: React.ReactNode
  services: ServiceLink[]
  faqItems: FAQItem[]
  ctaHeading: string
  ctaSubheading: string
  nearbyAreas: { label: string; href: string }[]
  authorityLink?: { label: string; href: string }
  geo?: { lat: number; lng: number }
}

export default function LocationPage({
  city,
  citySlug,
  localLead,
  whySection,
  neighborhoods,
  services,
  faqItems,
  ctaHeading,
  ctaSubheading,
  nearbyAreas,
  authorityLink,
  geo,
}: LocationPageProps) {
  const crumbs: Crumb[] = [
    { label: 'Home', href: '/' },
    { label: 'Service Areas', href: '/#service-areas' },
    { label: city },
  ]

  const review = locationReviews[citySlug]

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Spottly',
    description: `Residential house cleaning in ${city}, CA — recurring, deep, and move-out cleaning with safe, low-toxicity products.`,
    url: `https://spottly.com/locations/${citySlug}`,
    telephone: '+13109632302',
    email: 'spottlyservices@gmail.com',
    areaServed: {
      '@type': 'City',
      name: city,
      ...(geo ? { geo: { '@type': 'GeoCoordinates', latitude: geo.lat, longitude: geo.lng } } : {}),
    },
  }

  return (
    <>
      <Script id={`schema-local-${citySlug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id={`schema-faq-${citySlug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqItems)) }} />
      <Script id={`schema-breadcrumb-${citySlug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />

      <div className="bg-slate-50 py-4 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5">House Cleaning in {city}</h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">{localLead}</p>
        </div>
      </section>

      {/* Why section */}
      <section className="bg-slate-50 py-12 px-4">
        <div className="max-w-5xl mx-auto prose-content">
          <h2>Why cleaning in {city} looks the way it does</h2>
          {whySection}
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Neighborhoods &amp; nearby areas we clean</h2>
          <div className="text-slate-600 leading-relaxed">{neighborhoods}</div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Cleaning services in {city}</h2>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.href} className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 bg-brand-blue rounded-full shrink-0" />
                <span>
                  <Link href={s.href} className="text-brand-blue font-semibold hover:underline">{s.label}</Link>
                  {' — '}{s.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Review — only renders when a real review exists for this city */}
      {review && (
        <section className="bg-white py-10 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">What {city} clients say</h2>
            <div className="card max-w-2xl">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-3">&ldquo;{review.text}&rdquo;</p>
              <p className="text-slate-500 text-sm font-semibold">— {review.name}, {review.city}</p>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-slate-50 py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <FAQ items={faqItems} heading={`${city} Cleaning FAQ`} />
        </div>
      </section>

      {/* Nearby & local */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Nearby areas</h2>
          <div className="flex flex-wrap gap-3">
            {nearbyAreas.map((a) => (
              <Link key={a.href} href={a.href} className="bg-slate-100 hover:bg-brand-blue hover:text-white text-slate-700 font-medium px-4 py-2 rounded-lg text-sm transition-colors">
                House cleaning in {a.label}
              </Link>
            ))}
          </div>
          {authorityLink && (
            <p className="mt-5 text-sm text-slate-600">
              Local business resource:{' '}
              <a href={authorityLink.href} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline font-medium">
                {authorityLink.label}
              </a>
            </p>
          )}
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-slate-50 py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">All Spottly services</h2>
          <ServicesGrid />
        </div>
      </section>

      <CTASection heading={ctaHeading} subheading={ctaSubheading} />
    </>
  )
}
