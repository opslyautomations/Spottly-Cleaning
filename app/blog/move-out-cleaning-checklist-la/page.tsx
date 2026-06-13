import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs, { breadcrumbJsonLd } from '@/components/Breadcrumbs'
import CTASection from '@/components/CTASection'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'A Move-Out Cleaning Checklist for LA Renters',
  description: "Room-by-room move-out cleaning checklist for LA renters. Covers what California landlords inspect and what you need done before the final walk-through.",
  alternates: { canonical: 'https://spottly.com/blog/move-out-cleaning-checklist-la' },
  openGraph: { title: 'A Move-Out Cleaning Checklist for LA Renters', description: "Room-by-room checklist for a move-out clean that meets California inspection standards.", url: 'https://spottly.com/blog/move-out-cleaning-checklist-la', type: 'article', images: [{ url: 'https://spottly.com/og', width: 1200, height: 630, alt: 'Move-Out Cleaning Checklist LA' }] },
  twitter: { card: 'summary_large_image', title: 'A Move-Out Cleaning Checklist for LA Renters', description: "Room-by-room checklist for a move-out clean that meets California inspection standards.", images: ['https://spottly.com/og'] },
}

const crumbs = [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'A Move-Out Cleaning Checklist for LA Renters' }]
const schema = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: 'A Move-Out Cleaning Checklist for LA Renters', author: { '@type': 'Organization', name: 'Spottly', url: 'https://spottly.com' }, publisher: { '@type': 'Organization', name: 'Spottly', url: 'https://spottly.com' }, datePublished: '2025-12-17', dateModified: '2025-12-17', url: 'https://spottly.com/blog/move-out-cleaning-checklist-la', image: 'https://spottly.com/og' }

export default function ChecklistPage() {
  return (
    <>
      <Script id="schema-post-chk" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="schema-breadcrumb-chk" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />
      <div className="bg-slate-50 py-4 px-4"><div className="max-w-3xl mx-auto"><Breadcrumbs crumbs={crumbs} /></div></div>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 prose-content">
        <div className="mb-6"><span className="bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">Moving</span></div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">A Move-Out Cleaning Checklist for LA Renters</h1>
        <p className="text-slate-500 text-sm mb-8">By Spottly · December 17, 2025 · 6 min read</p>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed">A move-out clean isn&apos;t a standard clean. Landlords check areas that regular cleaning visits skip — inside appliances, inside cabinets, behind doors, along baseboards. This checklist covers the full scope so nothing gets flagged on your inspection.</p>

        <div className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 mb-8 text-sm text-slate-600">
          <strong>Before you start:</strong> All furniture and belongings should be out of the unit before cleaning begins. Cleaning around boxes and furniture means areas get missed. Clear the space, then clean.
        </div>

        <h2>Kitchen</h2>
        <ul>
          <li>Inside oven — racks removed, oven interior scrubbed (this is the most commonly flagged item on inspections)</li>
          <li>Stovetop — burners, grates, and drip pans cleaned; area under the stovetop if it lifts</li>
          <li>Range hood — inside and filter if accessible</li>
          <li>Inside microwave</li>
          <li>Inside refrigerator — all shelves and drawers, door seals, and the top</li>
          <li>Refrigerator exterior including top and coil area behind</li>
          <li>Dishwasher interior — wipe filter and door seal</li>
          <li>Inside all cabinets and drawers — wiped out, no crumbs or residue</li>
          <li>Countertops and backsplash</li>
          <li>Sink — scrubbed and faucet descaled</li>
          <li>Under the sink interior</li>
          <li>Baseboards</li>
          <li>Floor mopped last</li>
        </ul>

        <h2>Bathrooms (all)</h2>
        <ul>
          <li>Shower — tile, grout, and door/curtain track scrubbed</li>
          <li>Tub — full scrub including faucet and drain area</li>
          <li>Toilet — bowl, seat, exterior, and base</li>
          <li>Sink and faucet — descaled and scrubbed</li>
          <li>Mirror</li>
          <li>Vanity inside and out</li>
          <li>Medicine cabinet inside and out</li>
          <li>Exhaust fan cover wiped</li>
          <li>Baseboards</li>
          <li>Floor mopped last</li>
        </ul>

        <h2>Bedrooms</h2>
        <ul>
          <li>Closets — inside, including shelves and rods; floor swept/vacuumed</li>
          <li>Window sills wiped</li>
          <li>Blinds dusted (slat-by-slat if vinyl; professional cleaning may be needed for heavy buildup)</li>
          <li>Ceiling fan blades if present</li>
          <li>Door frames and door faces wiped</li>
          <li>Light switch plates wiped</li>
          <li>Baseboards</li>
          <li>Floors vacuumed and mopped or vacuumed (based on flooring type)</li>
        </ul>

        <h2>Living areas</h2>
        <ul>
          <li>All shelves and built-ins wiped inside and out</li>
          <li>Window sills</li>
          <li>Blinds and window treatments</li>
          <li>Door frames and doors</li>
          <li>Light switch plates and outlet covers</li>
          <li>Baseboards throughout</li>
          <li>Floors swept, vacuumed, and mopped last</li>
        </ul>

        <h2>Whole unit</h2>
        <ul>
          <li>All light fixtures wiped (covers removed if possible)</li>
          <li>Walls spot-cleaned for any marks or scuffs (do not repaint without checking lease)</li>
          <li>All doors wiped — faces, edges, and tops</li>
          <li>All vents dusted</li>
          <li>Remove all garbage; all bins emptied and wiped</li>
        </ul>

        <h2>What landlords actually check</h2>
        <p>From experience across the Westside and South Bay, the three most common move-out inspection failures are: oven interior, inside kitchen cabinets, and bathroom grout/tile. Prioritize those if you&apos;re cleaning yourself. If you&apos;re booking professional service, confirm those are included in scope — a <Link href="/services/move-in-move-out-cleaning">Spottly move-out clean</Link> covers all of them.</p>

        <p>For context on California law around move-out cleaning and deposits, see <Link href="/blog/california-security-deposit-cleaning-guide">California Security Deposit Rules: A Renter&apos;s Cleaning Guide</Link>.</p>
      </article>
      <CTASection heading="Skip the checklist. Let Spottly handle it." subheading="Book a move-out clean and come home to your deposit." />
    </>
  )
}
