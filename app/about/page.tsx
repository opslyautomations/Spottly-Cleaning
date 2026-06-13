import type { Metadata } from 'next'
import Breadcrumbs, { breadcrumbJsonLd } from '@/components/Breadcrumbs'
import CTASection from '@/components/CTASection'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'About Spottly | LA House Cleaning Done Right',
  description: 'Spottly brings four years of detail-obsessed house cleaning from San Diego to LA\'s Westside and South Bay—safe products, consistent results, no missed spots.',
  alternates: { canonical: 'https://spottly.com/about' },
  openGraph: {
    title: 'About Spottly | LA House Cleaning Done Right',
    description: 'Spottly brings four years of detail-obsessed house cleaning from San Diego to LA\'s Westside and South Bay—safe products, consistent results, no missed spots.',
    url: 'https://spottly.com/about',
    images: [{ url: 'https://spottly.com/og', width: 1200, height: 630, alt: 'About Spottly — LA House Cleaning' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Spottly | LA House Cleaning Done Right',
    description: 'Spottly brings four years of detail-obsessed house cleaning from San Diego to LA\'s Westside and South Bay—safe products, consistent results, no missed spots.',
    images: ['https://spottly.com/og'],
  },
}

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'About' },
]

export default function AboutPage() {
  return (
    <>
      <Script id="schema-breadcrumb-about" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />

      <div className="bg-slate-50 py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 prose-content">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">About Spottly</h1>

        <p className="text-xl text-slate-600 leading-relaxed mb-10">
          A clean home shouldn&apos;t come with an asterisk — as in, &ldquo;it&apos;s clean, except for the grout, the baseboards, and under the sink.&rdquo; Those parts matter. They&apos;re the parts that make a home feel genuinely clean versus technically cleaned.
        </p>

        <h2>From San Diego to LA</h2>
        <p>
          Spottly started with four years of hands-on residential cleaning in San Diego, where the standard for the work was set: every corner, every surface, done properly. Baseboards. Shower corners. Under the sink. The spots that are easy to skip when you&apos;re trying to move fast — and the ones you notice when they&apos;re missed. That detail obsession made the move to LA&apos;s Westside and South Bay with the business.
        </p>

        <h2>The name says it plainly</h2>
        <p>
          Spottly cleans the spots other services rush past. That&apos;s it. Not a slogan — a description of how the work is done. The standard is simple: the home is perfect when we leave, or we make it right. No vague promises, no &ldquo;we did our best.&rdquo;
        </p>

        <h2>Safe products, no compromise</h2>
        <p>
          Low-toxicity, family- and pet-friendly cleaning products are the standard at Spottly — not a premium add-on. They work. You don&apos;t need harsh chemicals to remove grease from a range hood or soap scum from tile; you need the right product and the willingness to do the scrubbing. There&apos;s no harsh chemical smell when we leave, and no residue on the surfaces your kids and pets are touching.
        </p>

        <h2>Consistent, every visit</h2>
        <p>
          Cleaning a personal space — a home — requires trust. You&apos;re letting someone in when you&apos;re not there. That means showing up on time, being respectful of your belongings, and doing the same thorough job on the fifteenth visit as on the first. Whether it&apos;s a weekly recurring plan, a one-time deep clean, or a move-in/move-out job, the approach is the same: careful, thorough, and consistent.
        </p>

        <h2>No uncertainty</h2>
        <p>
          No-shows, rushed jobs, and rotating strangers who don&apos;t know your home are the things people hate most about cleaning services. Spottly doesn&apos;t operate that way. You know who&apos;s coming, you know the standard, and if something isn&apos;t right, it gets fixed.
        </p>

        <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-2xl p-6 my-10">
          <p className="text-brand-blue font-semibold text-lg">
            4 years of hands-on experience. Safe products. The spots others miss. That&apos;s Spottly.
          </p>
        </div>
      </article>

      <CTASection
        heading="Ready for a home that's actually, properly clean?"
        subheading="Reach out to Spottly today — no commitment, no pressure."
      />
    </>
  )
}
