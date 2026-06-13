import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs, { breadcrumbJsonLd } from '@/components/Breadcrumbs'
import CTASection from '@/components/CTASection'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'House Cleaning Specials & Offers | Spottly',
  description: 'Save on house cleaning with a Spottly recurring plan. Weekly, biweekly, and monthly options for the LA Westside and South Bay. Get a quote today.',
  alternates: { canonical: 'https://spottly.com/specials' },
  openGraph: {
    title: 'House Cleaning Specials & Offers | Spottly',
    description: 'Save on Spottly\'s house cleaning with a recurring service plan. Reach out for current discount details.',
    url: 'https://spottly.com/specials',
    images: [{ url: 'https://spottly.com/og', width: 1200, height: 630, alt: 'Spottly Specials & Offers' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'House Cleaning Specials & Offers | Spottly',
    description: 'Save on Spottly\'s house cleaning with a recurring service plan. Reach out for current discount details.',
    images: ['https://spottly.com/og'],
  },
  robots: { index: true, follow: true },
}

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Specials' },
]

export default function SpecialsPage() {
  return (
    <>
      <Script id="schema-breadcrumb-specials" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />

      <div className="bg-slate-50 py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Spottly Specials &amp; Offers</h1>
        <p className="text-lg text-slate-600 mb-12 leading-relaxed">
          Current pricing offers and ways to save on your Spottly cleaning service.
        </p>

        <div className="card border-2 border-brand-baby mb-8">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 bg-brand-blue text-white rounded-xl flex items-center justify-center shrink-0">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-5 5a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 10V5a2 2 0 012-2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Recurring Service Discount</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Save on every visit when you book a recurring cleaning plan — weekly, biweekly, or monthly. Ongoing plans are billed at a lower per-visit rate than one-time cleans, and the discount grows with frequency.
              </p>
              <p className="text-slate-600 text-sm">
                Reach out for current discount details — rates are confirmed when we quote your home.
              </p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-primary inline-flex">
                  Get Recurring Quote
                </Link>
                <Link href="/services/recurring-cleaning" className="btn-secondary inline-flex">
                  About Recurring Cleaning
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-100 rounded-2xl p-6">
          <h3 className="font-bold text-slate-900 mb-2">More ways to get value</h3>
          <ul className="space-y-2 text-slate-700 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-brand-blue font-bold mt-0.5">→</span>
              Start with a <Link href="/services/deep-cleaning" className="text-brand-blue font-medium hover:underline">deep clean</Link> to set the baseline, then roll into recurring at the lower rate.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-blue font-bold mt-0.5">→</span>
              Moving out? A professional <Link href="/services/move-in-move-out-cleaning" className="text-brand-blue font-medium hover:underline">move-out clean</Link> can protect a deposit worth far more than the cleaning cost.
            </li>
          </ul>
        </div>
      </div>

      <CTASection heading="Ready to lock in a recurring rate?" subheading="Get a free quote and we'll confirm current pricing for your home." />
    </>
  )
}
