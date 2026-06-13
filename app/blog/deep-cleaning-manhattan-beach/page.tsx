import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs, { breadcrumbJsonLd } from '@/components/Breadcrumbs'
import CTASection from '@/components/CTASection'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Deep Cleaning in Manhattan Beach',
  description: "Manhattan Beach homes have high standards. Here's what a deep clean looks like in this South Bay community and why Sand Section homes in particular need more from their cleaning service.",
  alternates: { canonical: 'https://spottly.com/blog/deep-cleaning-manhattan-beach' },
  openGraph: { title: 'Deep Cleaning in Manhattan Beach', description: "Manhattan Beach homes have high standards. Here's what a deep clean looks like in this South Bay community.", url: 'https://spottly.com/blog/deep-cleaning-manhattan-beach', type: 'article', images: [{ url: 'https://spottly.com/og/blog-mb-deep.png', width: 1200, height: 630, alt: 'Deep Cleaning in Manhattan Beach' }] },
  twitter: { card: 'summary_large_image', title: 'Deep Cleaning in Manhattan Beach', description: "Manhattan Beach homes have high standards. Here's what a deep clean looks like in this South Bay community.", images: ['https://spottly.com/og/blog-mb-deep.png'] },
}

const crumbs = [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Deep Cleaning in Manhattan Beach' }]
const schema = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: 'Deep Cleaning in Manhattan Beach', author: { '@type': 'Organization', name: 'Spottly', url: 'https://spottly.com' }, publisher: { '@type': 'Organization', name: 'Spottly', url: 'https://spottly.com' }, datePublished: '2026-01-21', dateModified: '2026-01-21', url: 'https://spottly.com/blog/deep-cleaning-manhattan-beach', image: 'https://spottly.com/og/blog-mb-deep.png' }

export default function DeepCleanManhattanBeachPage() {
  return (
    <>
      <Script id="schema-post-mbdc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="schema-breadcrumb-mbdc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />
      <div className="bg-slate-50 py-4 px-4"><div className="max-w-3xl mx-auto"><Breadcrumbs crumbs={crumbs} /></div></div>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 prose-content">
        <div className="mb-6"><span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">Location Guide</span></div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Deep Cleaning in Manhattan Beach</h1>
        <p className="text-slate-500 text-sm mb-8">By Spottly · January 21, 2026 · 5 min read</p>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed"><Link href="/locations/manhattan-beach">Manhattan Beach</Link> homes tend to be well-maintained — the neighborhood has that expectation built in. But well-maintained and deeply cleaned are different things. Here&apos;s what a deep clean looks like in Manhattan Beach and why the coastal environment adds a dimension that inland deep cleans don&apos;t require.</p>

        <h2>What a deep clean covers</h2>
        <p>A <Link href="/services/deep-cleaning">Spottly Clean</Link> (deep clean) is the thorough reset that recurring visits don&apos;t reach. The scope includes inside the oven and refrigerator, inside all kitchen cabinets and drawers, range hood (interior and filter), shower tile and grout scrubbed, bathroom fixtures descaled, baseboards throughout the entire home, window sills and door frames, ceiling fans, and all floors cleaned last. The result is a home that&apos;s clean at a baseline — not just the surfaces that show.</p>

        <h2>The coastal factor in Manhattan Beach</h2>
        <p>Manhattan Beach, particularly the Sand Section close to the beach, deals with the same salt air and marine humidity as other South Bay coastal neighborhoods — but at an elevated level given the direct beach proximity. Salt particles carried off the ocean settle on windows, exterior fixtures, and surfaces near open windows or doors. Over months, this builds a film that a standard recurring clean doesn&apos;t fully remove.</p>
        <p>For Sand Section homes and those within a few blocks of the ocean, a deep clean twice a year — clearing the salt film from fixtures and glass, addressing mineral buildup in bathrooms, and restoring surfaces — makes a visible difference compared to recurring cleaning alone. Inland Manhattan Beach neighborhoods (closer to Aviation Blvd) have less coastal exposure but still benefit from the same periodic deep clean schedule.</p>

        <h2>Before starting a recurring plan</h2>
        <p>If you&apos;re starting <Link href="/services/recurring-cleaning">recurring cleaning</Link> in a Manhattan Beach home that hasn&apos;t had professional cleaning recently, begin with a deep clean. The deep clean clears whatever has accumulated — grease in the range hood, soap scum in the shower, salt film on fixtures — and sets the baseline that recurring visits then maintain. Recurring cleaning without this first step means the maintenance visits are perpetually catching up.</p>

        <h2>Frequency for Manhattan Beach homes</h2>
        <p>Most Manhattan Beach households on a recurring plan run biweekly — common for 2–4 bedroom homes, with or without kids. Homes with multiple kids or large dogs often shift to weekly. The deep clean typically comes twice a year for a home on a biweekly recurring plan, or quarterly for homes on monthly-only service.</p>

        <p>Spottly services all of Manhattan Beach — Sand Section, Tree Section, and the Hill Section. <Link href="/contact">Get a quote</Link> for your home.</p>
      </article>
      <CTASection heading="Manhattan Beach deep cleaning, done right." subheading="Salt air, high standards, and the full scope. Get a Spottly quote." />
    </>
  )
}
