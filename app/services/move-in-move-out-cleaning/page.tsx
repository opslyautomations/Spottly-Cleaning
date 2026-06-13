import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs, { breadcrumbJsonLd } from '@/components/Breadcrumbs'
import FAQ, { type FAQItem } from '@/components/FAQ'
import { faqJsonLd } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Move-In/Move-Out Cleaning Service | Spottly',
  description: "Spottly's move-in/move-out cleaning gets empty homes inspection-ready—inside cabinets, appliances, and more—to protect your deposit. Serving LA. Schedule now.",
  alternates: { canonical: 'https://spottly.com/services/move-in-move-out-cleaning' },
  openGraph: {
    title: 'Move-In/Move-Out Cleaning Service | Spottly',
    description: "Spottly's move-in/move-out cleaning gets empty homes inspection-ready—inside cabinets, appliances, and more—to protect your deposit.",
    url: 'https://spottly.com/services/move-in-move-out-cleaning',
    images: [{ url: 'https://spottly.com/og', width: 1200, height: 630, alt: 'Spottly Move-In / Move-Out Cleaning' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Move-In/Move-Out Cleaning Service | Spottly',
    description: "Spottly's move-in/move-out cleaning gets empty homes inspection-ready—inside cabinets, appliances, and more—to protect your deposit.",
    images: ['https://spottly.com/og'],
  },
}

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/move-in-move-out-cleaning' },
  { label: 'Move-In / Move-Out' },
]

const faqItems: FAQItem[] = [
  {
    question: "What's included in a move-out clean?",
    answer: "A top-to-bottom clean of an empty home: inside and outside of all cabinets and drawers, inside the oven and refrigerator, stovetop and range hood, full bathroom detail (tub, shower, tile, grout, toilet, sink, fixtures), baseboards, door frames, window sills, switch plates, vents, cobweb removal, and vacuuming and mopping every floor. The empty home is what lets the team reach all of it.",
  },
  {
    question: 'Will a move-out clean get my deposit back?',
    answer: "It significantly improves your odds, but no honest cleaner can guarantee a landlord's decision. Deposits hinge on the landlord's inspection and your lease. What a professional clean does is meet the 'return it to original cleanliness' standard landlords inspect against and give you documentation that you did — which is exactly where cleaning-related deductions usually come from.",
  },
  {
    question: 'How long does a move-out clean take?',
    answer: "Longer than a standard clean and often similar to a deep clean — roughly a half to a full day depending on size and condition — because every cabinet, drawer, and appliance is cleaned inside and out. An empty home actually speeds things up versus a furnished one, since the team isn't working around belongings.",
  },
  {
    question: 'Does the home need to be empty?',
    answer: "Ideally yes, and the more empty the better. The whole point of a move clean is reaching inside cabinets, behind and inside appliances, and the floor space furniture normally covers. If a few items remain, tell us when you book so we can plan around them — but a fully empty home gets the most thorough result.",
  },
  {
    question: 'Do you clean inside cabinets, drawers, and appliances?',
    answer: "Yes — that's the core of a move clean and the difference from a standard visit. Inside cabinets and drawers, inside the oven and fridge, the stovetop, and the range hood are all part of the scope, because that's exactly what landlords and new occupants check.",
  },
  {
    question: 'Is carpet cleaning included?',
    answer: "Usually not by default — carpet shampooing/steam cleaning is a specialized add-on rather than part of the standard move-out scope. If your lease calls for professional carpet cleaning or there are stains to treat, request it when you book so we bring the right equipment.",
  },
  {
    question: "What does California law actually say about cleaning and my deposit?",
    answer: "Under Civil Code §1950.5, your landlord has 21 calendar days after you return the keys to refund your deposit or send an itemized statement of deductions. They can only charge cleaning needed to restore the unit's original cleanliness — not routine turnover, and not normal wear and tear. (General info, not legal advice — your lease terms still govern.)",
  },
  {
    question: "What's the difference between a move-in and a move-out clean?",
    answer: "Same crew and scope, opposite ends of the move. A move-out clean happens after your things are gone and before the final walk-through, to meet the landlord's standard. A move-in clean happens before your furniture arrives, so you start fresh in a space the prior occupant may not have cleaned to your liking.",
  },
  {
    question: 'Do landlords require professional cleaning?',
    answer: "It depends on your lease. Many leases require the unit 'broom clean,' while others specify professional cleaning or carpet cleaning. Read your lease, and if it's unclear, a documented professional clean is the safe path — it satisfies the strictest common standard and gives you proof for the walk-through.",
  },
  {
    question: 'When should I schedule the cleaning?',
    answer: "For a move-out: after all furniture and belongings are out, and before your final walk-through or key handoff — so the clean is the last thing that happens. For a move-in: before your furniture is delivered. Book a few days ahead during busy moving windows (month-end, end of summer) since those slots fill fast.",
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Move-In / Move-Out Cleaning',
  description: 'Empty-home, inspection-ready clean (inside cabinets and appliances) to protect your deposit. Serving LA\'s Westside and South Bay.',
  provider: { '@type': 'LocalBusiness', name: 'Spottly', url: 'https://spottly.com' },
  areaServed: [
    'Culver City, CA', 'Mar Vista, CA', 'Palms, CA', 'Playa del Rey, CA',
    'Playa Vista, CA', 'Marina del Rey, CA', 'Westchester, CA', 'Santa Monica, CA',
    'Venice, CA', 'El Segundo, CA', 'Manhattan Beach, CA', 'Redondo Beach, CA',
    'Torrance, CA', 'Hawthorne, CA', 'Gardena, CA',
  ],
  serviceType: 'Move-in/move-out cleaning',
}

export default function MoveCleaningPage() {
  return (
    <>
      <Script id="schema-service-move" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="schema-faq-move" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqItems)) }} />
      <Script id="schema-breadcrumb-move" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />

      <div className="bg-slate-50 py-4 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Move-In &amp; Move-Out Cleaning Across LA&apos;s Westside &amp; South Bay
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            A move is the worst time to be on your hands and knees scrubbing an oven — and it&apos;s exactly when a clean home matters most money-wise. A move-out clean is built around two things a standard visit isn&apos;t: an <strong>empty home</strong> (so the team can clean inside and behind everything) and a <strong>deadline</strong> (the final walk-through that decides your deposit).
          </p>
        </div>
      </section>

      {/* What it covers */}
      <section className="bg-slate-50 py-14 px-4">
        <div className="max-w-5xl mx-auto prose-content">
          <h2>Why an empty-home clean is a different job</h2>
          <p>
            With furniture and belongings gone, the team reaches everything a lived-in clean can&apos;t: the insides of all cabinets and drawers, inside and behind appliances, the floor under where the couch used to be, closet shelves, and the baseboards and corners that furniture normally hides. The work runs top-to-bottom by design — ceilings and fixtures first, then cabinets, appliances, counters, and bathrooms, and <strong>floors last</strong> so nothing clean gets re-dirtied. Typical scope includes:
          </p>
          <ul>
            <li>Wiping inside and outside of all cabinets, drawers, and closets</li>
            <li>Cleaning inside the oven, stovetop, range hood, and refrigerator</li>
            <li>Full bathroom detail — tub, shower, tile, grout, toilet, sink, mirror, fixtures</li>
            <li>Baseboards, door frames, window sills, switch plates, and vents</li>
            <li>Cobweb removal, then vacuuming and mopping every floor</li>
          </ul>

          <h2>How this protects your deposit (California specifics)</h2>
          <p>
            In California, your landlord has <strong>21 calendar days</strong> after you hand back the keys to either return your full deposit or send an itemized statement of deductions (Civil Code §1950.5). Crucially, they can only charge cleaning needed to return the unit to its <strong>original level of cleanliness</strong> — routine turnover cleaning isn&apos;t a valid deduction, and ordinary wear and tear can&apos;t be charged at all. A documented, professional move-out clean is your evidence that you met that standard. The state&apos;s own breakdown is in the{' '}
            <a href="https://selfhelp.courts.ca.gov/guide-security-deposits-california" target="_blank" rel="noopener noreferrer">
              California Courts guide to security deposits
            </a>. (General information, not legal advice — your lease terms still govern.)
          </p>

          <h2>Move-in vs move-out — same crew, different goal</h2>
          <ul>
            <li><strong>Move-out:</strong> done after your furniture is out and before the final walk-through. Goal: meet the landlord&apos;s inspection standard and protect the deposit.</li>
            <li><strong>Move-in:</strong> done before your furniture arrives. Goal: start fresh in a space the previous occupant (or a rushed turnover crew) may not have cleaned to your standard.</li>
          </ul>
        </div>
      </section>

      {/* Also consider */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Also consider</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/services/deep-cleaning" className="card hover:border-brand-baby hover:shadow-md transition-all group">
              <p className="font-semibold text-slate-900 group-hover:text-brand-blue">Deep Clean →</p>
              <p className="text-sm text-slate-600 mt-1">Staying put and want it spotless?</p>
            </Link>
            <Link href="/services/recurring-cleaning" className="card hover:border-brand-baby hover:shadow-md transition-all group">
              <p className="font-semibold text-slate-900 group-hover:text-brand-blue">Recurring Cleaning →</p>
              <p className="text-sm text-slate-600 mt-1">Settled in the new place? Set up ongoing upkeep.</p>
            </Link>
            <Link href="/services/custom-cleaning" className="card hover:border-brand-baby hover:shadow-md transition-all group">
              <p className="font-semibold text-slate-900 group-hover:text-brand-blue">Custom Cleaning →</p>
              <p className="text-sm text-slate-600 mt-1">Need carpet shampoo or wall washing?</p>
            </Link>
          </div>
          <p className="mt-6 text-slate-600 text-sm">
            Serving <Link href="/locations/el-segundo" className="text-brand-blue hover:underline">El Segundo</Link>,{' '}
            <Link href="/locations/playa-vista" className="text-brand-blue hover:underline">Playa Vista</Link>,{' '}
            <Link href="/locations/redondo-beach" className="text-brand-blue hover:underline">Redondo Beach</Link>, and 12 more Westside &amp; South Bay cities.
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
        heading="Make the clean the last thing you worry about on moving day."
        subheading="Spottly gets the place inspection-ready so you can focus on the move."
      />
    </>
  )
}
