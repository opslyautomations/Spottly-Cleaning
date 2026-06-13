import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs, { breadcrumbJsonLd } from '@/components/Breadcrumbs'
import CTASection from '@/components/CTASection'
import Script from 'next/script'

export const metadata: Metadata = {
  title: "California Security Deposit Rules: A Renter's Cleaning Guide",
  description: "California law gives your landlord 21 days and one specific cleaning standard after you move out. Understanding it is the fastest way to protect your deposit.",
  alternates: { canonical: 'https://spottly.com/blog/california-security-deposit-cleaning-guide' },
  openGraph: { title: "California Security Deposit Rules: A Renter's Cleaning Guide", description: "California law gives your landlord 21 days and one specific standard. Here's what that means for your deposit.", url: 'https://spottly.com/blog/california-security-deposit-cleaning-guide', type: 'article', images: [{ url: 'https://spottly.com/og', width: 1200, height: 630, alt: "California Security Deposit Cleaning Guide" }] },
  twitter: { card: 'summary_large_image', title: "California Security Deposit Rules: A Renter's Cleaning Guide", description: "California law gives your landlord 21 days and one specific standard.", images: ['https://spottly.com/og'] },
}

const crumbs = [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: "California Security Deposit Rules: A Renter's Cleaning Guide" }]
const schema = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: "California Security Deposit Rules: A Renter's Cleaning Guide", author: { '@type': 'Organization', name: 'Spottly', url: 'https://spottly.com' }, publisher: { '@type': 'Organization', name: 'Spottly', url: 'https://spottly.com' }, datePublished: '2025-12-03', dateModified: '2025-12-03', url: 'https://spottly.com/blog/california-security-deposit-cleaning-guide', image: 'https://spottly.com/og' }

export default function DepositGuidePage() {
  return (
    <>
      <Script id="schema-post-dep" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="schema-breadcrumb-dep" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />
      <div className="bg-slate-50 py-4 px-4"><div className="max-w-3xl mx-auto"><Breadcrumbs crumbs={crumbs} /></div></div>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 prose-content">
        <div className="mb-6"><span className="bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">Moving</span></div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">California Security Deposit Rules: A Renter&apos;s Cleaning Guide</h1>
        <p className="text-slate-500 text-sm mb-8">By Spottly · December 3, 2025 · 7 min read</p>
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-8 text-sm text-amber-800">This post is general information, not legal advice. Your specific lease and local regulations govern. When in doubt, consult a tenant rights attorney or your local housing authority.</div>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed">Security deposits are one of the most common sources of landlord-tenant disputes in California — and cleaning is one of the most common deductions. Understanding the law gives you a clear target to hit on move-out day.</p>
        <h2>The 21-day rule</h2>
        <p>Under California Civil Code §1950.5, your landlord has <strong>21 calendar days</strong> after you hand back the keys to either return your full security deposit or send you an itemized statement of deductions along with any remaining balance. This deadline is a legal requirement, not a courtesy — failing to meet it can limit the landlord&apos;s ability to make deductions at all. The <a href="https://selfhelp.courts.ca.gov/guide-security-deposits-california" target="_blank" rel="noopener noreferrer">California Courts self-help guide to security deposits</a> has the full breakdown.</p>
        <h2>What landlords can and can&apos;t deduct for cleaning</h2>
        <p>This is the critical part. California law allows landlords to deduct for cleaning costs needed to restore the unit to its <strong>original level of cleanliness</strong> — not to a higher standard than what it was when you moved in. They cannot charge you for:</p>
        <ul>
          <li>Normal wear and tear (expected deterioration from ordinary use)</li>
          <li>Routine turnover cleaning that would happen regardless of how clean you left it</li>
          <li>Cleaning costs that go beyond returning the unit to its move-in condition</li>
        </ul>
        <p>In practice, this means: if the unit was professionally cleaned before you moved in and you leave it in that same condition, there&apos;s no valid cleaning deduction. If you leave it dirtier than you found it, the landlord can charge to fix the difference.</p>
        <h2>What &ldquo;original level of cleanliness&rdquo; means in practice</h2>
        <p>Most California leases specify &ldquo;broom clean&rdquo; condition as the minimum move-out standard. Some require more — professional cleaning, or professionally cleaned carpets. Read your lease. If it says &ldquo;broom clean&rdquo; and you leave it professionally cleaned, you&apos;ve exceeded the requirement. If it says &ldquo;professionally cleaned&rdquo; and you leave it broom clean, you&apos;re short.</p>
        <h2>Documentation matters</h2>
        <p>A professional move-out clean isn&apos;t just about the physical result — it&apos;s about documentation. A cleaning service can serve as evidence that you returned the unit in a properly cleaned state. Paired with a move-out walkthrough (if your landlord offers one), photos of the cleaned unit, and your receipt, you have a paper trail that supports your claim if a deduction is disputed.</p>
        <h2>What a move-out clean covers</h2>
        <p>A professional <Link href="/services/move-in-move-out-cleaning">move-in/move-out clean</Link> covers everything landlords check: inside cabinets and drawers, inside the oven and refrigerator, stovetop and range hood, full bathroom detail (tub, shower, tile, grout, toilet, sink, fixtures), baseboards, door frames, window sills, and all floors vacuumed and mopped last. This is the scope that satisfies the most demanding inspection standard.</p>
        <h2>Timing the clean</h2>
        <p>Schedule the clean <em>after all furniture and belongings are out</em> and <em>before the final walk-through or key handoff</em>. The clean should be the last thing that happens in the unit. Don&apos;t clean and then do another pass through the apartment — you&apos;ll undo work and potentially need to re-clean.</p>
        <p>For more on what a move-out clean actually covers room by room, see <Link href="/blog/what-is-included-in-a-move-out-clean">What&apos;s Actually Included in a Move-Out Clean</Link>. For a checklist to work from, see <Link href="/blog/move-out-cleaning-checklist-la">A Move-Out Cleaning Checklist for LA Renters</Link>.</p>
      </article>
      <CTASection heading="Protect your deposit with a professional move-out clean." subheading="Spottly gets the place inspection-ready. Schedule your move-out clean now." />
    </>
  )
}
