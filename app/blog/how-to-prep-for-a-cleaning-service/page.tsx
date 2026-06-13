import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs, { breadcrumbJsonLd } from '@/components/Breadcrumbs'
import CTASection from '@/components/CTASection'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'How to Prep Your Home Before the Cleaners Arrive',
  description: "A little prep means the team spends their time cleaning, not tidying. Here's what actually helps before the cleaners arrive — and what you can safely skip.",
  alternates: { canonical: 'https://spottly.com/blog/how-to-prep-for-a-cleaning-service' },
  openGraph: { title: 'How to Prep Your Home Before the Cleaners Arrive', description: "Here's what to do before the cleaning team arrives — and what you can ignore.", url: 'https://spottly.com/blog/how-to-prep-for-a-cleaning-service', type: 'article', images: [{ url: 'https://spottly.com/og', width: 1200, height: 630, alt: 'How to Prep Before the Cleaners Arrive' }] },
  twitter: { card: 'summary_large_image', title: 'How to Prep Your Home Before the Cleaners Arrive', description: "Here's what to do before the cleaning team arrives.", images: ['https://spottly.com/og'] },
}

const crumbs = [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'How to Prep Before the Cleaners Arrive' }]
const schema = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: 'How to Prep Your Home Before the Cleaners Arrive', author: { '@type': 'Organization', name: 'Spottly', url: 'https://spottly.com' }, publisher: { '@type': 'Organization', name: 'Spottly', url: 'https://spottly.com' }, datePublished: '2025-10-29', dateModified: '2025-10-29', url: 'https://spottly.com/blog/how-to-prep-for-a-cleaning-service', image: 'https://spottly.com/og' }

export default function PrepPage() {
  return (
    <>
      <Script id="schema-post-prep" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="schema-breadcrumb-prep" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />
      <div className="bg-slate-50 py-4 px-4"><div className="max-w-3xl mx-auto"><Breadcrumbs crumbs={crumbs} /></div></div>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 prose-content">
        <div className="mb-6"><span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">Tips</span></div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">How to Prep Your Home Before the Cleaners Arrive</h1>
        <p className="text-slate-500 text-sm mb-8">By Spottly · October 29, 2025 · 5 min read</p>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed">A little prep goes a long way — not because the team can&apos;t handle a messy home, but because time spent tidying is time not spent cleaning. Here&apos;s what actually helps.</p>
        <h2>Declutter surfaces, but don&apos;t over-clean</h2>
        <p>Clear counters, tables, and floors of items that don&apos;t belong there — dishes, mail, clothes, kids&apos; toys. The team can clean around a candle or a fruit bowl; what slows them down is clutter that has to be moved to get to the surface underneath. You don&apos;t need to organize every drawer or tidy every shelf — just clear the working surfaces.</p>
        <h2>Put away valuables and fragile items</h2>
        <p>Put away anything irreplaceable, expensive, or fragile: jewelry, important documents, sentimental items, anything breakable sitting out. This isn&apos;t a comment on trust — it&apos;s just practical. Cleaning involves moving things, and it&apos;s easier for everyone if the items you care most about are safely stowed.</p>
        <h2>Secure pets or let the team know about them</h2>
        <p>Let the cleaning team know if you have pets, and ideally secure anxious or protective animals in a room or crate during the visit. Most pets are fine — but a dog that barks every time someone enters a room, or a cat that darts out open doors, makes the work harder for everyone. Pet-owning households often benefit from a tighter <Link href="/services/recurring-cleaning">recurring schedule</Link> because shedding and dander accumulate faster.</p>
        <h2>Sort out access before the day</h2>
        <p>If you won&apos;t be home, work out access ahead of time: a key, a lockbox code, building access instructions, where to park. If there&apos;s an alarm, give the code and confirm the timing. Don&apos;t leave this for the day of — it delays the start and adds stress.</p>
        <h2>Flag anything you want handled a specific way</h2>
        <p>Tell the team in advance about any sensitivities: products you want used or avoided (relevant for households with allergies or specific concerns), rooms that are off-limits, surfaces that need special care (unfinished wood, delicate tile, a freshly painted wall). Before a <Link href="/services/deep-cleaning">deep clean</Link>, mention anything you&apos;re particularly concerned about so the team allocates time there.</p>
        <h2>What you don&apos;t need to do</h2>
        <p>You don&apos;t need to pre-clean before the cleaners arrive. You don&apos;t need to do the dishes (though clearing the sink helps). You don&apos;t need to scrub the bathroom or wipe down counters. That&apos;s the job. The whole point of a professional cleaning service is that you don&apos;t have to do those things — so prep for access and declutter, then let the team handle everything else.</p>
      </article>
      <CTASection heading="Ready to let us handle it?" subheading="Book a Spottly clean — just declutter, sort out access, and come home to a properly clean house." />
    </>
  )
}
