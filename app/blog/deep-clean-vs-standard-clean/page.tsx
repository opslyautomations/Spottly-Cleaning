import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs, { breadcrumbJsonLd } from '@/components/Breadcrumbs'
import CTASection from '@/components/CTASection'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Deep Clean vs. Standard Clean: What\'s the Difference?',
  description: "They're not interchangeable. A standard clean maintains; a deep clean removes history. Here's what each covers and when to choose which.",
  alternates: { canonical: 'https://spottly.com/blog/deep-clean-vs-standard-clean' },
  openGraph: { title: "Deep Clean vs. Standard Clean: What's the Difference?", description: "A standard clean maintains; a deep clean removes history. Here's what each covers.", url: 'https://spottly.com/blog/deep-clean-vs-standard-clean', type: 'article', images: [{ url: 'https://spottly.com/og/blog-deep-vs-standard.png', width: 1200, height: 630, alt: 'Deep Clean vs Standard Clean' }] },
  twitter: { card: 'summary_large_image', title: "Deep Clean vs. Standard Clean: What's the Difference?", description: "A standard clean maintains; a deep clean removes history.", images: ['https://spottly.com/og/blog-deep-vs-standard.png'] },
}

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: "Deep Clean vs. Standard Clean: What's the Difference?" },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: "Deep Clean vs. Standard Clean: What's the Difference?",
  author: { '@type': 'Organization', name: 'Spottly', url: 'https://spottly.com' },
  publisher: { '@type': 'Organization', name: 'Spottly', url: 'https://spottly.com' },
  datePublished: '2025-10-08',
  dateModified: '2025-10-08',
  url: 'https://spottly.com/blog/deep-clean-vs-standard-clean',
  image: 'https://spottly.com/og/blog-deep-vs-standard.png',
}

export default function DeepVsStandardPage() {
  return (
    <>
      <Script id="schema-post-dvs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="schema-breadcrumb-dvs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />

      <div className="bg-slate-50 py-4 px-4">
        <div className="max-w-3xl mx-auto"><Breadcrumbs crumbs={crumbs} /></div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 prose-content">
        <div className="mb-6"><span className="bg-brand-blue/10 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full">Service Guide</span></div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Deep Clean vs. Standard Clean: What&apos;s the Difference?</h1>
        <p className="text-slate-500 text-sm mb-8">By Spottly · October 8, 2025 · 7 min read</p>

        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
          People use &ldquo;deep clean&rdquo; and &ldquo;standard clean&rdquo; interchangeably, but they&apos;re genuinely different jobs with different scopes, time requirements, and purposes. Getting this distinction right is the difference between a home that&apos;s properly clean and one that just looks like it is.
        </p>

        <h2>What a standard clean covers</h2>
        <p>
          A standard clean — also called a recurring or maintenance clean — is designed to keep a home that&apos;s already in decent shape from drifting. Each visit covers the surfaces that get dirty fastest: dusting reachable surfaces, vacuuming and mopping all floors, wiping kitchen counters and appliance exteriors, sanitizing the sink, scrubbing and disinfecting bathrooms (toilet, shower, tub, counters), emptying trash, and a general tidy of visible clutter.
        </p>
        <p>
          The key phrase is <em>already in decent shape</em>. A standard clean is maintenance, not removal. It can&apos;t strip grease that&apos;s been building on a range hood for six months, dissolve soap scum that&apos;s calcified on shower glass, or lift the dust packed into baseboards that haven&apos;t been touched in a year. It maintains a good baseline; it doesn&apos;t create one.
        </p>

        <h2>What a deep clean covers that a standard one doesn&apos;t</h2>
        <p>
          A <Link href="/services/deep-cleaning">deep clean</Link> — Spottly calls it the Spottly Clean — removes the history a standard visit can&apos;t touch. The scope expands considerably in every room:
        </p>
        <ul>
          <li><strong>Kitchen:</strong> degreasing the range hood, backsplash, and cabinet faces; scrubbing the stovetop and drip areas; cleaning inside the oven and refrigerator; detailing the sink and faucet.</li>
          <li><strong>Bathrooms:</strong> descaling fixtures and showerheads, scrubbing tile and grout, dissolving soap scum on glass and tubs.</li>
          <li><strong>Whole home:</strong> hand-wiping baseboards, door frames, and window sills; cleaning light switches, outlet covers, and door handles; dusting blinds and vents; removing cobwebs from ceiling corners.</li>
          <li><strong>Floors:</strong> moving accessible furniture to vacuum and mop underneath.</li>
        </ul>
        <p>
          The difference in time is significant. A standard recurring visit might run 2–4 hours. A deep clean on the same home commonly takes 4–8 hours — with the kitchen alone often 60–90 minutes.
        </p>

        <h2>When to choose a standard clean</h2>
        <p>
          Standard cleaning is the right choice when your home is already at a clean baseline and you want to maintain it. If you&apos;ve been professionally cleaned recently, if your home is lightly used, or if you&apos;re already on a recurring schedule that&apos;s working, a standard visit is all you need.
        </p>

        <h2>When to choose a deep clean</h2>
        <p>
          A deep clean is the right call when a baseline doesn&apos;t exist yet — or when it&apos;s been lost. Specifically:
        </p>
        <ul>
          <li>It&apos;s been 6 months or more since a professional clean (or the home has never been professionally cleaned)</li>
          <li>You&apos;re starting a recurring schedule and need to set the baseline first</li>
          <li>Before or after hosting guests, the holidays, or a big event</li>
          <li>Seasonal resets — after summer, before fall, or whenever you feel the house is overdue</li>
          <li>After illness in the home</li>
          <li>When allergens (dust, dander) are a concern</li>
        </ul>

        <h2>The common mistake: starting recurring cleaning without a deep clean first</h2>
        <p>
          This is the most common misuse of the two service types. Starting a weekly or biweekly plan without a deep clean first means the recurring visits are maintaining a layer of grime, not a clean home. The buildup under the surface stays put; the new clean goes on top of it. The home never gets truly clean, and clients wonder why the service isn&apos;t working.
        </p>
        <p>
          One deep clean to set the baseline, then <Link href="/services/recurring-cleaning">recurring visits</Link> to keep it there — that&apos;s the right sequence.
        </p>

        <h2>Quick comparison</h2>
        <ul>
          <li><strong>Standard/recurring:</strong> maintains existing cleanliness, covers highest-traffic surfaces, runs 2–4 hours, best for homes already in good shape</li>
          <li><strong>Deep clean:</strong> removes accumulated grime, covers everything including inside appliances and behind furniture, runs 4–8+ hours, best for resets and first-time professional cleans</li>
        </ul>

        <p>
          If you&apos;re not sure which one your home needs right now, a good starting question is: when was the last time someone thoroughly cleaned the baseboards, the range hood, and the inside of the oven? If you can&apos;t remember — or if the answer is &ldquo;never&rdquo; — start with a <Link href="/services/deep-cleaning">deep clean</Link>. Then let <Link href="/services/recurring-cleaning">recurring service</Link> keep it there.
        </p>
      </article>

      <CTASection heading="Not sure what your home needs?" subheading="Get a free quote and we'll help you figure out the right starting point." />
    </>
  )
}
