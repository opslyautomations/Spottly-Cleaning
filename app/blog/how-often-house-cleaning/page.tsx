import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs, { breadcrumbJsonLd } from '@/components/Breadcrumbs'
import CTASection from '@/components/CTASection'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'How Often Should You Get Your House Cleaned?',
  description: 'The right cleaning frequency depends on your household size, pets, and schedule. A practical guide to weekly, biweekly, and monthly cleaning for LA homes.',
  alternates: { canonical: 'https://spottly.com/blog/how-often-house-cleaning' },
  openGraph: {
    title: 'How Often Should You Get Your House Cleaned?',
    description: 'The right cleaning frequency depends on your household. A practical guide to weekly, biweekly, and monthly cleaning.',
    url: 'https://spottly.com/blog/how-often-house-cleaning',
    type: 'article',
    images: [{ url: 'https://spottly.com/og', width: 1200, height: 630, alt: 'How Often Should You Get Your House Cleaned?' }],
  },
  twitter: { card: 'summary_large_image', title: 'How Often Should You Get Your House Cleaned?', description: 'A practical guide to weekly, biweekly, and monthly cleaning.', images: ['https://spottly.com/og'] },
}

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'How Often Should You Get Your House Cleaned?' },
]

const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'How Often Should You Get Your House Cleaned?',
  description: 'The right cleaning frequency depends on your household — kids, pets, work schedule, and how fast your home feels messy.',
  author: { '@type': 'Organization', name: 'Spottly', url: 'https://spottly.com' },
  publisher: { '@type': 'Organization', name: 'Spottly', url: 'https://spottly.com' },
  datePublished: '2025-10-01',
  dateModified: '2025-10-01',
  url: 'https://spottly.com/blog/how-often-house-cleaning',
  image: 'https://spottly.com/og',
}

export default function HowOftenPage() {
  return (
    <>
      <Script id="schema-post-how-often" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <Script id="schema-breadcrumb-how-often" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />

      <div className="bg-slate-50 py-4 px-4">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 prose-content">
        <div className="mb-6">
          <span className="bg-brand-blue/10 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full">Service Guide</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">How Often Should You Get Your House Cleaned?</h1>
        <p className="text-slate-500 text-sm mb-8">By Spottly · October 1, 2025 · 6 min read</p>

        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
          There&apos;s no single right answer — the honest test is how fast your home feels messy after a clean. That depends on who lives there, how it&apos;s used, and what &ldquo;messy&rdquo; means to you. Here&apos;s how to find the right frequency for your household.
        </p>

        <h2>The three main frequencies</h2>
        <p>
          Most residential cleaning runs on one of three schedules: weekly, biweekly (every two weeks), or monthly. Each fits a different kind of household, and getting the match right makes a real difference in how consistently clean your home stays.
        </p>

        <h2>Weekly cleaning: who it&apos;s for</h2>
        <p>
          Weekly cleaning makes sense when your home gets messy fast — within a few days of being cleaned. That&apos;s common in homes with kids, multiple pets, people working from home all day, or households that cook frequently and entertain often. At weekly frequency, dust and dirt never get a chance to settle in. Floors stay clear, counters stay wiped, and bathrooms don&apos;t have time to build up.
        </p>
        <p>
          The tradeoff is cost: weekly visits run more per month than less frequent schedules. But many households find the consistency worth it — especially when the alternative is spending part of every weekend cleaning, or letting the house get away from you between visits.
        </p>
        <p>
          <Link href="/services/recurring-cleaning">Recurring cleaning</Link> on a weekly schedule is a good fit for busy Westside families, households with multiple pets, and anyone who spends a lot of time at home and notices the difference quickly.
        </p>

        <h2>Biweekly cleaning: why it&apos;s the most popular</h2>
        <p>
          Biweekly — every two weeks — is the most common frequency for a reason: it&apos;s the best balance of cost and cleanliness for most homes. Grease and soap scum don&apos;t have enough time to really take hold, dust stays manageable, and a quick tidy between visits is usually all it takes to stay comfortable. The per-visit cost is typically lower than weekly, making it easier to sustain long-term.
        </p>
        <p>
          Biweekly works well for single professionals, couples without kids or pets, and smaller households where one or two people aren&apos;t generating much mess. It&apos;s also the default starting point for many clients who aren&apos;t sure where to begin — easier to scale up to weekly if the two-week gap feels too long, or scale down to monthly if life slows down.
        </p>

        <h2>Monthly cleaning: when it works</h2>
        <p>
          Monthly cleaning is best for lightly-used homes: a single occupant who travels often, a small apartment with very low foot traffic, a second property. At monthly frequency, you should expect to do meaningful upkeep yourself between visits — the cleaner handles the heavy scrubbing once a month, and you maintain in between.
        </p>
        <p>
          If you find yourself doing almost as much cleaning between monthly visits as you would on your own, biweekly is probably worth the step up.
        </p>

        <h2>The first-visit factor: why you may need a deep clean first</h2>
        <p>
          Before starting any recurring schedule, it&apos;s worth asking: is the home already at a clean baseline? If it&apos;s been a few months since a thorough clean — or if it&apos;s never been professionally cleaned — starting weekly or biweekly visits on top of accumulated buildup means the old grime stays trapped. The surface gets maintained, but it&apos;s never really clean underneath.
        </p>
        <p>
          That&apos;s why most recurring plans start with a <Link href="/services/deep-cleaning">deep clean</Link> first: one thorough reset that gets baseboards, grout, the range hood, behind appliances, and every corner, and then recurring maintenance keeps it there. If your home was professionally cleaned in the last month or two, you can often skip straight to recurring.
        </p>

        <h2>Adjusting over time</h2>
        <p>
          The best frequency isn&apos;t fixed. Households change — a new pet, a baby, a new job that has you working from home, seasonal entertaining. Starting somewhere and adjusting based on how the home actually feels is the right approach. Most clients find their rhythm within the first few visits and stick with it; others shift seasonally, scaling up before the holidays and back down in quieter stretches.
        </p>

        <h2>Quick reference guide</h2>
        <ul>
          <li><strong>Weekly:</strong> kids, multiple pets, working from home, frequent cooking and entertaining, noticeably messy within 2–3 days</li>
          <li><strong>Biweekly:</strong> couples or small households, occasional pets, comfortable for ~2 weeks before it feels off, best cost-to-clean ratio</li>
          <li><strong>Monthly:</strong> solo, low foot traffic, travels often, willing to do significant upkeep between visits</li>
        </ul>

        <p>
          Spottly offers <Link href="/services/recurring-cleaning">recurring cleaning</Link> across LA&apos;s Westside and South Bay — weekly, biweekly, or monthly, billed at a lower per-visit rate than one-time cleans. If you&apos;re not sure where to start, <Link href="/contact">reach out for a quote</Link> and we can help figure out the right fit.
        </p>
      </article>

      <CTASection heading="Find your cleaning rhythm." subheading="Weekly, biweekly, or monthly — we'll help you pick the right fit." />
    </>
  )
}
