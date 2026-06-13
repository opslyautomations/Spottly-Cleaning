import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs, { breadcrumbJsonLd } from '@/components/Breadcrumbs'
import CTASection from '@/components/CTASection'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Custom Cleaning Projects | Spottly',
  description: 'Need something outside our standard plans? Tell Spottly what your space needs and we\'ll build a custom cleaning quote. Serving LA\'s Westside & South Bay.',
  alternates: { canonical: 'https://spottly.com/services/custom-cleaning' },
  openGraph: {
    title: 'Custom Cleaning Projects | Spottly',
    description: "Need something outside our standard plans? Tell Spottly what your space needs and we'll build a custom cleaning quote.",
    url: 'https://spottly.com/services/custom-cleaning',
    images: [{ url: 'https://spottly.com/og/custom-cleaning.png', width: 1200, height: 630, alt: 'Spottly Custom Cleaning' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Cleaning Projects | Spottly',
    description: "Need something outside our standard plans? Tell Spottly what your space needs and we'll build a custom cleaning quote.",
    images: ['https://spottly.com/og/custom-cleaning.png'],
  },
  robots: { index: true, follow: true },
}

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/custom-cleaning' },
  { label: 'Custom Cleaning' },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom Residential Cleaning',
  description: 'One-off tasks and add-ons outside the standard plans — quoted to your space.',
  provider: { '@type': 'LocalBusiness', name: 'Spottly', url: 'https://spottly.com' },
  serviceType: 'Custom residential cleaning',
}

const commonRequests = [
  'Interior windows',
  'Inside the oven (standalone)',
  'Inside the refrigerator (standalone)',
  'Inside cabinets',
  'Wall and baseboard washing',
  'Post-event or post-party cleanup',
  'Light organizing',
  'Garage or patio cleaning',
  'Add-ons layered onto a recurring plan',
  'Allergy- or sensitivity-specific product requests',
]

export default function CustomCleaningPage() {
  return (
    <>
      <Script id="schema-service-custom" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="schema-breadcrumb-custom" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />

      <div className="bg-slate-50 py-4 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </div>

      <section className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Custom Cleaning — Tell Us What Your Space Needs
          </h1>

          <div className="max-w-3xl">
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Not every job fits a standard plan, a deep clean, or a move. Custom cleaning is for everything in between — the specific tasks, one-off occasions, and add-ons you&apos;d rather not force into another package. Tell us what you need and we&apos;ll scope it and send a quote.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Common custom requests</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {commonRequests.map((item) => (
                <div key={item} className="flex items-center gap-3 bg-slate-50 rounded-lg px-4 py-3">
                  <span className="w-2 h-2 bg-brand-blue rounded-full shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-slate-600 leading-relaxed mb-6">
              If it&apos;s a recurring rhythm you want, see <Link href="/services/recurring-cleaning" className="text-brand-blue font-semibold hover:underline">Recurring Cleaning</Link>; if it&apos;s a full reset, see <Link href="/services/deep-cleaning" className="text-brand-blue font-semibold hover:underline">Deep Clean</Link>; if you&apos;re moving, see <Link href="/services/move-in-move-out-cleaning" className="text-brand-blue font-semibold hover:underline">Move-In/Move-Out</Link>. For anything else — this is the place.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Describe the job — we'll handle the how."
        subheading="Tell us what your space needs and we'll send a custom quote."
      />
    </>
  )
}
