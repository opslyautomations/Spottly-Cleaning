import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs, { breadcrumbJsonLd } from '@/components/Breadcrumbs'
import FAQ, { type FAQItem } from '@/components/FAQ'
import { faqJsonLd } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Deep House Cleaning Service | Spottly Clean',
  description: 'The Spottly Clean deep cleaning resets your home top to bottom—grease, soap scum, baseboards, and buildup standard visits miss. Serving LA. Book today.',
  alternates: { canonical: 'https://spottly.com/services/deep-cleaning' },
  openGraph: {
    title: 'Deep House Cleaning Service | Spottly Clean',
    description: 'The Spottly Clean deep cleaning resets your home top to bottom—grease, soap scum, baseboards, and buildup standard visits miss.',
    url: 'https://spottly.com/services/deep-cleaning',
    images: [{ url: 'https://spottly.com/og', width: 1200, height: 630, alt: 'Spottly Deep House Cleaning' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deep House Cleaning Service | Spottly Clean',
    description: 'The Spottly Clean deep cleaning resets your home top to bottom—grease, soap scum, baseboards, and buildup standard visits miss.',
    images: ['https://spottly.com/og'],
  },
}

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/deep-cleaning' },
  { label: 'Deep Clean' },
]

const faqItems: FAQItem[] = [
  {
    question: "What's the difference between a deep clean and a standard clean?",
    answer: "A standard clean maintains a home that's already in good shape — dust, vacuum, mop, wipe, sanitize. A deep clean removes accumulated grime a standard visit doesn't touch: degreasing, descaling fixtures, scrubbing grout, hand-wiping baseboards, and cleaning behind and under appliances. Deep cleaning takes much longer and is the right starting point if it's been a while.",
  },
  {
    question: 'How long does a deep clean take?',
    answer: "Generally 4–8 hours depending on size and condition. A 2,000-sq-ft home is commonly around 6 hours for a two-person team, with the kitchen alone often 60–90 minutes. The biggest factor is how long it's been since the last thorough clean — more time since means more to remove.",
  },
  {
    question: "What's included in a deep clean?",
    answer: "Everything in a standard clean plus the heavy work: degreasing the kitchen (hood, backsplash, stovetop, cabinet faces), descaling and scrubbing bathroom tile, grout, and glass, hand-wiping baseboards and door frames, cleaning high-touch points, dusting blinds and vents, removing cobwebs, and moving accessible furniture to clean underneath.",
  },
  {
    question: 'Do I need a deep clean before recurring service?',
    answer: "In most cases, yes. Recurring visits maintain a baseline but won't strip months of buildup. Starting a weekly or biweekly plan over old grime leaves that dirt trapped under the new clean. One deep clean resets the home; recurring keeps it there. If you were professionally cleaned within the last month, you can usually skip it.",
  },
  {
    question: 'How often should I get a deep clean?',
    answer: "For most homes, one to three times a year, plus situational resets — before or after guests, seasonally, or after illness. Homes on a consistent recurring plan need deep cleans less often, because the buildup that makes deep cleaning necessary never gets the chance to form.",
  },
  {
    question: 'How should I prepare for the cleaning team?',
    answer: "Clear surfaces of clutter, put away valuables and anything fragile or personal, secure pets, and make sure the team can reach every area. The crew handles furniture moving and the cleaning itself — light decluttering beforehand just lets them spend their time on cleaning rather than tidying.",
  },
  {
    question: 'Do you move furniture to clean underneath?',
    answer: "Yes, accessible furniture is moved so floors underneath get vacuumed and mopped, then set back. Very heavy pieces (large dressers, beds, full bookcases) generally stay put for safety, but the team cleans around and under them as far as is safe to reach.",
  },
  {
    question: 'Do you clean inside the oven and refrigerator?',
    answer: "Yes — oven and refrigerator interiors are included in the Spottly Clean. They take dedicated time and specific products, so confirm them when you book so the team allots time.",
  },
  {
    question: 'Does a deep clean help with allergies and dust?',
    answer: "It helps more than surface cleaning. Deep cleaning targets the reservoirs surface cleaning skips — baseboards, vents, blinds, behind furniture, and high-touch points — which is where dust and dander collect. Removing those buildups meaningfully cuts the allergen load in the home, which matters for anyone with allergies or asthma.",
  },
  {
    question: 'Do you handle pet hair and odor?',
    answer: "Yes. Pet homes get extra attention on floors, baseboards, and upholstered edges where hair and dander gather, often with a second vacuum pass. Let us know about pets when you book so the team comes prepared and budgets the time.",
  },
  {
    question: "Is there a difference between cleaning, sanitizing, and disinfecting?",
    answer: "Yes, and it's worth knowing. Cleaning uses soap, water, and scrubbing to physically remove germs and dirt — that's the core of a deep clean. Sanitizing and disinfecting reduce or kill remaining germs and are mainly needed when someone's sick or immunocompromised. The CDC explains the distinction and when each matters.",
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Deep House Cleaning — the Spottly Clean',
  description: 'Top-to-bottom reset — degreasing, descaling, baseboards, behind appliances, and oven & fridge interiors included.',
  provider: { '@type': 'LocalBusiness', name: 'Spottly', url: 'https://spottly.com' },
  areaServed: [
    'Culver City, CA', 'Mar Vista, CA', 'Palms, CA', 'Playa del Rey, CA',
    'Playa Vista, CA', 'Marina del Rey, CA', 'Westchester, CA', 'Santa Monica, CA',
    'Venice, CA', 'El Segundo, CA', 'Manhattan Beach, CA', 'Redondo Beach, CA',
    'Torrance, CA', 'Hawthorne, CA', 'Gardena, CA',
  ],
  serviceType: 'Deep cleaning',
}

export default function DeepCleaningPage() {
  return (
    <>
      <Script id="schema-service-deep" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="schema-faq-deep" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqItems)) }} />
      <Script id="schema-breadcrumb-deep" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />

      <div className="bg-slate-50 py-4 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Deep Cleaning — the Spottly Clean Reset
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            A deep clean is the hard reset. Where a standard visit maintains surfaces that are already in decent shape, the Spottly Clean goes after the grime that&apos;s been quietly accumulating for months — the grease film on the range hood, soap scum welded to the shower glass, the dust packed into baseboards and vents, the gunk behind and under appliances.
          </p>
        </div>
      </section>

      {/* What it covers */}
      <section className="bg-slate-50 py-14 px-4">
        <div className="max-w-5xl mx-auto prose-content">
          <h2>What a deep clean covers that a standard one doesn&apos;t</h2>
          <p>A standard clean maintains; a deep clean <em>removes history</em>. On top of everything in a regular visit, the Spottly Clean adds the slow, hands-on work that buildup demands:</p>
          <ul>
            <li><strong>Kitchen</strong> — the most labor-intensive room in a deep clean. Degreasing the range hood, backsplash, and cabinet faces; scrubbing the stovetop and drip areas; wiping cabinet exteriors; detailing the sink and faucet. (Inside the oven and inside the refrigerator are <strong>included</strong> in the Spottly Clean — confirm at booking so the team allots time.)</li>
            <li><strong>Bathrooms</strong> — descaling fixtures and showerheads, scrubbing tile and grout, dissolving soap scum on glass and tubs, disinfecting top to bottom.</li>
            <li><strong>Whole-home detail</strong> — hand-wiping baseboards, door frames, and window sills; cleaning light switches, door handles, and other high-touch points; dusting blinds and vents; removing cobwebs from ceiling corners.</li>
            <li><strong>Floors and furniture</strong> — moving accessible furniture to vacuum and mop underneath, then a full floor treatment last so nothing recontaminates clean surfaces.</li>
          </ul>

          <h2>How long it takes and why</h2>
          <p>
            A deep clean is measured in hours, not the quick window of a standard visit. A typical home runs <strong>roughly 4–8 hours</strong> depending on size and condition — a 2,000-sq-ft home is commonly around 6 hours for a two-person team, with the kitchen alone often taking 60–90 minutes. The variable that moves the number most isn&apos;t square footage, it&apos;s <em>time since the last thorough clean</em>.
          </p>

          <h2>When to choose a deep clean</h2>
          <ul>
            <li>It&apos;s been <strong>more than ~6 months</strong> since a professional clean.</li>
            <li>You&apos;re <strong>starting recurring service</strong> and need the baseline reset first.</li>
            <li><strong>Before or after</strong> hosting guests, the holidays, or a big event.</li>
            <li><strong>Seasonal</strong> refreshes, or after a stretch of illness in the home.</li>
            <li>You&apos;re tackling <strong>allergens</strong> — a thorough deep clean strips far more dust and dander than surface cleaning.</li>
          </ul>

          <p>
            Is there a difference between cleaning, sanitizing, and disinfecting? Yes — the{' '}
            <a href="https://www.cdc.gov/hygiene/about/when-and-how-to-clean-and-disinfect-your-home.html" target="_blank" rel="noopener noreferrer">
              CDC guide to cleaning and disinfecting your home
            </a>{' '}
            explains when each matters.
          </p>
        </div>
      </section>

      {/* Also consider */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Also consider</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/services/recurring-cleaning" className="card hover:border-brand-baby hover:shadow-md transition-all group">
              <p className="font-semibold text-slate-900 group-hover:text-brand-blue">Recurring Cleaning →</p>
              <p className="text-sm text-slate-600 mt-1">Want to keep this result? Roll into a recurring plan.</p>
            </Link>
            <Link href="/services/move-in-move-out-cleaning" className="card hover:border-brand-baby hover:shadow-md transition-all group">
              <p className="font-semibold text-slate-900 group-hover:text-brand-blue">Move-In / Move-Out →</p>
              <p className="text-sm text-slate-600 mt-1">Moving? That&apos;s its own specialized scope.</p>
            </Link>
            <Link href="/services/custom-cleaning" className="card hover:border-brand-baby hover:shadow-md transition-all group">
              <p className="font-semibold text-slate-900 group-hover:text-brand-blue">Custom Cleaning →</p>
              <p className="text-sm text-slate-600 mt-1">Need a specific one-off task?</p>
            </Link>
          </div>
          <p className="mt-6 text-slate-600 text-sm">
            Serving <Link href="/locations/venice-beach" className="text-brand-blue hover:underline">Venice Beach</Link>,{' '}
            <Link href="/locations/manhattan-beach" className="text-brand-blue hover:underline">Manhattan Beach</Link>,{' '}
            <Link href="/locations/torrance" className="text-brand-blue hover:underline">Torrance</Link>, and 12 more Westside &amp; South Bay cities.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <FAQ items={faqItems} />
        </div>
      </section>

      <CTASection
        heading="Give your home the reset, not another quick once-over."
        subheading="Book the Spottly Clean and start from a genuinely clean baseline."
      />
    </>
  )
}
