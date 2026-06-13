import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs, { breadcrumbJsonLd } from '@/components/Breadcrumbs'
import FAQ, { type FAQItem } from '@/components/FAQ'
import { faqJsonLd } from '@/lib/schema'
import CTASection from '@/components/CTASection'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Recurring & Standard House Cleaning | Spottly',
  description: 'Keep your home clean with Spottly\'s weekly, biweekly, or monthly recurring service across LA\'s Westside and South Bay. Book your standard clean today.',
  alternates: { canonical: 'https://spottly.com/services/recurring-cleaning' },
  openGraph: {
    title: 'Recurring & Standard House Cleaning | Spottly',
    description: 'Keep your home clean with Spottly\'s weekly, biweekly, or monthly recurring service across LA\'s Westside and South Bay.',
    url: 'https://spottly.com/services/recurring-cleaning',
    images: [{ url: 'https://spottly.com/og', width: 1200, height: 630, alt: 'Spottly Recurring House Cleaning' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recurring & Standard House Cleaning | Spottly',
    description: 'Keep your home clean with Spottly\'s weekly, biweekly, or monthly recurring service across LA\'s Westside and South Bay.',
    images: ['https://spottly.com/og'],
  },
}

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Recurring Cleaning' },
]

const faqItems: FAQItem[] = [
  {
    question: 'How often should I have my house cleaned?',
    answer: "It depends on how quickly your home feels messy after a clean. If that's within a few days — common with kids, pets, or working from home — go weekly. If it stays comfortable for about two weeks, biweekly is plenty. Quieter, lightly-used homes often do fine monthly. Start with your best guess and adjust; the right answer is the one that keeps your stress low.",
  },
  {
    question: 'What\'s the difference between weekly and biweekly cleaning?',
    answer: "Frequency and buildup. Weekly keeps dust and dirt from ever settling in, so the home stays consistently 'just cleaned' and you do almost nothing between visits — at a modestly higher per-visit cost. Biweekly is the most popular balance: grease and soap scum don't get a foothold, while you handle light tidying in between for a better cost-to-upkeep ratio.",
  },
  {
    question: 'Do I need a deep clean before starting recurring service?',
    answer: "Usually yes, and it matters. Recurring cleaning maintains a baseline — it doesn't remove months of built-up grime. If we start weekly or biweekly on top of old buildup, that dirt stays trapped under the new clean and the home never gets truly clean. One initial deep clean resets everything; recurring visits keep it there. If you were professionally cleaned in the last month, you can often skip it.",
  },
  {
    question: "What's included in a standard recurring clean?",
    answer: "Dusting reachable surfaces; vacuuming and mopping all floors; wiping kitchen counters and appliance exteriors; sanitizing the sink; scrubbing and disinfecting toilets, showers, tubs, and bathroom counters; emptying trash; and a general tidy of visible clutter. It covers the surfaces that get dirty fastest, every visit.",
  },
  {
    question: "What's NOT included in a standard clean?",
    answer: "Inside the oven, inside the fridge, interior windows, wall washing, inside cabinets, and laundry or dishes are add-ons rather than standard scope. This keeps the core clean consistent and your price predictable. You can add any of these when you book, or request a custom visit.",
  },
  {
    question: 'Will I get the same cleaner every time?',
    answer: 'Consistency is the goal — a familiar team learns your home, your preferences, and the spots you care about most, which makes each visit faster and better.',
  },
  {
    question: 'Do I need to be home during the cleaning?',
    answer: "No. Many clients arrange access and come home to a finished house. If you'd rather be there, that's fine too. Just sort out entry, any alarm codes, and how to lock up when you book, and flag anything you want handled a specific way.",
  },
  {
    question: 'Who provides the cleaning supplies?',
    answer: "Spottly brings professional-grade products and equipment, so you don't have to stock or stage anything. If you have allergies, sensitivities, or a product you'd prefer we use (or avoid), tell us up front and we'll work with it.",
  },
  {
    question: 'Is there a discount for booking recurring service?',
    answer: 'Yes — recurring plans are billed at a lower per-visit rate than one-time cleans, and the discount typically increases with frequency. Reach out for current pricing details.',
  },
  {
    question: 'Can I skip or pause a visit?',
    answer: "Yes — travel, guests, or a tight month happen. Give us reasonable notice and we'll skip or reschedule. Note that long gaps let buildup creep back, so an occasional standard visit may run a little heavier after a pause.",
  },
  {
    question: 'Do you clean homes with pets?',
    answer: "Yes. Pets mean more shedding, dander, and tracked-in dirt, so pet homes often suit a tighter frequency. Secure anxious animals during the visit and let us know about them when you book so the team comes prepared.",
  },
  {
    question: 'Can I change my frequency later?',
    answer: "Anytime. Start weekly and drop to biweekly once the baseline holds, scale up before a season of entertaining, or shift to monthly when life slows down. The plan should fit your home, not the other way around.",
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Recurring House Cleaning',
  description: 'Weekly, biweekly, or monthly maintenance cleaning that holds your home at a clean baseline. Safe, low-toxicity products.',
  provider: { '@type': 'LocalBusiness', name: 'Spottly', url: 'https://spottly.com' },
  areaServed: [
    'Culver City, CA', 'Mar Vista, CA', 'Palms, CA', 'Playa del Rey, CA',
    'Playa Vista, CA', 'Marina del Rey, CA', 'Westchester, CA', 'Santa Monica, CA',
    'Venice, CA', 'El Segundo, CA', 'Manhattan Beach, CA', 'Redondo Beach, CA',
    'Torrance, CA', 'Hawthorne, CA', 'Gardena, CA',
  ],
  serviceType: 'Recurring house cleaning',
}

export default function RecurringCleaningPage() {
  return (
    <>
      <Script id="schema-service-recurring" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="schema-faq-recurring" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqItems)) }} />
      <Script id="schema-breadcrumb-recurring" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />

      <div className="bg-slate-50 py-4 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Recurring House Cleaning for LA&apos;s Westside &amp; South Bay
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            Most people don&apos;t hire a cleaner because their house is filthy — they hire one because the upkeep never ends. Recurring cleaning from Spottly is the standing visit that keeps your home at a steady baseline, so you walk in to clean floors, wiped counters, and a fresh bathroom without spending your weekend on it.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 py-14 px-4">
        <div className="max-w-5xl mx-auto prose-content">
          <h2>How recurring cleaning actually works</h2>
          <p>
            A recurring clean is <strong>maintenance</strong>, not a reset. Each visit holds the line on the surfaces that get dirty fastest: dusting reachable surfaces, vacuuming and mopping floors, wiping kitchen counters and appliance exteriors, sanitizing the sink, and scrubbing and disinfecting toilets, showers, tubs, and bathroom counters, plus emptying trash and a general tidy of visible clutter. Because the house never gets a chance to build up grime between visits, each clean goes faster and reaches further than a one-off ever could.
          </p>
          <p>
            That&apos;s also why the <strong>first</strong> visit is usually a <Link href="/services/deep-cleaning">Deep Clean (Spottly Clean)</Link>, not a standard one. Starting a weekly or biweekly plan on top of months of accumulated buildup means the old dirt stays trapped under the new clean. A single deep clean sets the baseline; recurring visits keep it there.
          </p>

          <h2>Choosing your frequency</h2>
          <p>There&apos;s no universal right answer — the honest test is <em>how fast your home feels messy after a clean.</em></p>
          <ul>
            <li><strong>Weekly</strong> — best for full households: kids, pets, people working from home, frequent cooking or entertaining. Tightest control over dust and dirt; lowest effort between visits.</li>
            <li><strong>Biweekly (every two weeks)</strong> — the most popular balance. Grease and soap scum never get a foothold, and you handle light tidying in between. Best cost-to-upkeep ratio for most homes.</li>
            <li><strong>Monthly</strong> — fits quieter, lightly-used homes (single occupant, travels often, low foot traffic). Expect to do more maintenance yourself between visits.</li>
          </ul>
          <p>You&apos;re not locked in. Start with one cadence and adjust — many clients move from weekly to biweekly once the baseline holds.</p>

          <h2>What&apos;s not included in a standard clean</h2>
          <p>
            Tasks like inside the oven, inside the refrigerator, interior windows, wall washing, inside cabinets, and laundry or dishes are <strong>add-ons</strong>, not part of the standard scope — request them when you book, or see <Link href="/services/custom-cleaning">Custom Cleaning</Link>. This keeps your recurring price predictable and the core clean consistent.
          </p>
        </div>
      </section>

      {/* Also consider */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Also consider</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/services/deep-cleaning" className="card hover:border-brand-baby hover:shadow-md transition-all group">
              <p className="font-semibold text-slate-900 group-hover:text-brand-blue">Deep Clean →</p>
              <p className="text-sm text-slate-600 mt-1">First time or it&apos;s been a while? Start with a reset.</p>
            </Link>
            <Link href="/services/move-in-move-out-cleaning" className="card hover:border-brand-baby hover:shadow-md transition-all group">
              <p className="font-semibold text-slate-900 group-hover:text-brand-blue">Move-In / Move-Out →</p>
              <p className="text-sm text-slate-600 mt-1">Moving? That&apos;s a different, specialized job.</p>
            </Link>
            <Link href="/services/custom-cleaning" className="card hover:border-brand-baby hover:shadow-md transition-all group">
              <p className="font-semibold text-slate-900 group-hover:text-brand-blue">Custom Cleaning →</p>
              <p className="text-sm text-slate-600 mt-1">Need something outside the standard scope?</p>
            </Link>
          </div>
          <p className="mt-6 text-slate-600 text-sm">
            Serving <Link href="/locations/culver-city" className="text-brand-blue hover:underline">Culver City</Link>,{' '}
            <Link href="/locations/santa-monica" className="text-brand-blue hover:underline">Santa Monica</Link>,{' '}
            <Link href="/locations/marina-del-rey" className="text-brand-blue hover:underline">Marina del Rey</Link>, and{' '}
            <Link href="/locations/manhattan-beach" className="text-brand-blue hover:underline">12 more Westside &amp; South Bay cities</Link>.
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
        heading="Lock in a clean home you never have to think about."
        subheading="Pick your rhythm — weekly, biweekly, or monthly — and we'll handle the rest."
      />
    </>
  )
}
