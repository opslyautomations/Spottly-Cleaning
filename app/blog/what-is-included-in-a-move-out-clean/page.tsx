import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs, { breadcrumbJsonLd } from '@/components/Breadcrumbs'
import CTASection from '@/components/CTASection'
import Script from 'next/script'

export const metadata: Metadata = {
  title: "What's Actually Included in a Move-Out Clean?",
  description: "Move-out cleans go further than any standard visit — inside cabinets, appliances, every surface. Here's the full scope and why it matters for your deposit.",
  alternates: { canonical: 'https://spottly.com/blog/what-is-included-in-a-move-out-clean' },
  openGraph: { title: "What's Actually Included in a Move-Out Clean?", description: "Move-out cleans go further than any standard visit — inside cabinets, appliances, every surface.", url: 'https://spottly.com/blog/what-is-included-in-a-move-out-clean', type: 'article', images: [{ url: 'https://spottly.com/og/blog-move-out.png', width: 1200, height: 630, alt: "What's Included in a Move-Out Clean?" }] },
  twitter: { card: 'summary_large_image', title: "What's Actually Included in a Move-Out Clean?", description: "The full scope of a move-out clean — and why it matters for your deposit.", images: ['https://spottly.com/og/blog-move-out.png'] },
}

const crumbs = [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: "What's Actually Included in a Move-Out Clean?" }]

const schema = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: "What's Actually Included in a Move-Out Clean?", author: { '@type': 'Organization', name: 'Spottly', url: 'https://spottly.com' }, publisher: { '@type': 'Organization', name: 'Spottly', url: 'https://spottly.com' }, datePublished: '2025-10-15', dateModified: '2025-10-15', url: 'https://spottly.com/blog/what-is-included-in-a-move-out-clean', image: 'https://spottly.com/og/blog-move-out.png' }

export default function MoveOutIncludedPage() {
  return (
    <>
      <Script id="schema-post-moi" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="schema-breadcrumb-moi" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />
      <div className="bg-slate-50 py-4 px-4"><div className="max-w-3xl mx-auto"><Breadcrumbs crumbs={crumbs} /></div></div>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 prose-content">
        <div className="mb-6"><span className="bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">Moving</span></div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">What&apos;s Actually Included in a Move-Out Clean?</h1>
        <p className="text-slate-500 text-sm mb-8">By Spottly · October 15, 2025 · 6 min read</p>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
          A move-out clean is not a standard recurring visit. It goes further in scope, takes longer, and is specifically designed for an empty home being prepared for inspection. Here&apos;s what it actually covers, and why that matters.
        </p>
        <h2>Why the empty home changes everything</h2>
        <p>With furniture and belongings gone, the cleaning team can reach places a lived-in visit never touches: inside every cabinet and drawer, behind and inside every appliance, the floor under where the couch sat, closet shelves from back to front, and every baseboard and corner that furniture normally blocks. This is what makes a move-out clean genuinely different from a deep clean of a furnished home.</p>
        <h2>Room-by-room breakdown</h2>
        <h3>Kitchen</h3>
        <ul>
          <li>Inside and outside all cabinets and drawers</li>
          <li>Inside the oven, including racks</li>
          <li>Stovetop and all drip areas</li>
          <li>Range hood interior and filters</li>
          <li>Inside the refrigerator, including shelves and drawers</li>
          <li>Sink and faucet detail</li>
          <li>Backsplash and counters</li>
        </ul>
        <h3>Bathrooms</h3>
        <ul>
          <li>Tub, shower, tile, and grout — scrubbed, not wiped</li>
          <li>Toilet inside and out</li>
          <li>Sink, faucet, and counter</li>
          <li>Mirror</li>
          <li>Cabinet interiors if present</li>
          <li>All fixtures descaled</li>
        </ul>
        <h3>Throughout the home</h3>
        <ul>
          <li>Baseboards hand-wiped in every room</li>
          <li>Door frames, window sills, and switch plates</li>
          <li>Vents dusted</li>
          <li>Cobweb removal from corners and ceilings</li>
          <li>Closet shelves and rods wiped</li>
          <li>All floors vacuumed and mopped last (so nothing recontaminates)</li>
        </ul>
        <h2>What&apos;s usually not included</h2>
        <p>Carpet shampooing or steam cleaning is typically a separate, specialized service — not part of a standard move-out scope. If your lease specifically requires professional carpet cleaning, request it when you book so the team brings the right equipment. Window washing beyond standard wiping may also be an add-on depending on the scope.</p>
        <h2>Why timing matters</h2>
        <p>Schedule the move-out clean <em>after all furniture and belongings are out</em> and <em>before your final walk-through or key handoff</em>. The clean should be the last thing that happens in the unit. If you clean and then go back to retrieve one more box, you may need a touch-up — the sequence matters.</p>
        <h2>Move-in vs move-out: same scope, different goal</h2>
        <p>A move-in clean uses the same scope — same rooms, same inside-everything approach — but the goal is different. You&apos;re cleaning before your furniture arrives so you move into a truly clean home, not one a rushed turnover crew handed off. Learn more about <Link href="/services/move-in-move-out-cleaning">move-in/move-out cleaning</Link>.</p>
        <p>For LA renters, it&apos;s also worth understanding how California&apos;s security deposit rules interact with cleaning standards. California law limits what landlords can deduct — and a professional clean with documentation is the cleanest path to protecting your deposit. The <Link href="/blog/california-security-deposit-cleaning-guide">California security deposit cleaning guide</Link> covers this in detail.</p>
      </article>
      <CTASection heading="Make the move-out clean the last thing you worry about." subheading="Spottly handles the inspection-ready clean so you can focus on the move." />
    </>
  )
}
