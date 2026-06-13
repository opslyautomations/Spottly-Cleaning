import type { Metadata } from 'next'
import Breadcrumbs, { breadcrumbJsonLd } from '@/components/Breadcrumbs'
import CTASection from '@/components/CTASection'
import { placeholderReviews } from '@/data/reviews'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Customer Reviews | Spottly House Cleaning LA',
  description: 'See what Spottly clients across LA\'s Westside and South Bay say about our house cleaning service — recurring, deep clean, and move-out. Read reviews.',
  alternates: { canonical: 'https://spottly.com/reviews' },
  openGraph: {
    title: 'Customer Reviews | Spottly House Cleaning LA',
    description: 'See what Spottly clients across LA\'s Westside and South Bay say about our house cleaning service.',
    url: 'https://spottly.com/reviews',
    images: [{ url: 'https://spottly.com/og', width: 1200, height: 630, alt: 'Spottly Client Reviews' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Customer Reviews | Spottly House Cleaning LA',
    description: 'See what Spottly clients across LA\'s Westside and South Bay say about our house cleaning service.',
    images: ['https://spottly.com/og'],
  },
}

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Reviews' },
]

export default function ReviewsPage() {
  return (
    <>
      <Script id="schema-breadcrumb-reviews" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />

      <div className="bg-slate-50 py-4 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">What Spottly Clients Say</h1>
          <p className="mt-4 text-lg text-slate-600">Across LA&apos;s Westside and South Bay — from Culver City to Manhattan Beach.</p>
        </div>

        {/* PLACEHOLDER REVIEWS — replace with real customer reviews before launch */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {placeholderReviews.map((review, i) => (
            <div key={i} className="card">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
              <p className="text-slate-500 text-sm font-semibold">— {review.name}, {review.city}</p>
            </div>
          ))}
        </div>

        {/* TODO: Replace placeholderReviews in data/reviews.ts with real verified customer reviews before launch */}
      </div>

      <CTASection heading="Like what you hear? Experience it yourself." subheading="Get a free quote and see what a proper clean feels like." />
    </>
  )
}
