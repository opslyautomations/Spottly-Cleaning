import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs, { breadcrumbJsonLd } from '@/components/Breadcrumbs'
import CTASection from '@/components/CTASection'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Why Beach-Area Homes Need More Cleaning',
  description: "Salt air, sand, and the marine layer do real damage to surfaces over time. Here's what coastal homeowners in Playa del Rey, Marina del Rey, and Manhattan Beach actually deal with.",
  alternates: { canonical: 'https://spottly.com/blog/coastal-home-cleaning-salt-air' },
  openGraph: { title: 'Why Beach-Area Homes Need More Cleaning', description: "Salt air, sand, and marine-layer humidity do real work on coastal homes. Here's what that means for cleaning.", url: 'https://spottly.com/blog/coastal-home-cleaning-salt-air', type: 'article', images: [{ url: 'https://spottly.com/og', width: 1200, height: 630, alt: 'Why Beach-Area Homes Need More Cleaning' }] },
  twitter: { card: 'summary_large_image', title: 'Why Beach-Area Homes Need More Cleaning', description: "Salt air, sand, and marine-layer humidity do real work on coastal homes.", images: ['https://spottly.com/og'] },
}

const crumbs = [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Why Beach-Area Homes Need More Cleaning' }]
const schema = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: 'Why Beach-Area Homes Need More Cleaning', author: { '@type': 'Organization', name: 'Spottly', url: 'https://spottly.com' }, publisher: { '@type': 'Organization', name: 'Spottly', url: 'https://spottly.com' }, datePublished: '2025-11-19', dateModified: '2025-11-19', url: 'https://spottly.com/blog/coastal-home-cleaning-salt-air', image: 'https://spottly.com/og' }

export default function CoastalCleaningPage() {
  return (
    <>
      <Script id="schema-post-coast" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="schema-breadcrumb-coast" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />
      <div className="bg-slate-50 py-4 px-4"><div className="max-w-3xl mx-auto"><Breadcrumbs crumbs={crumbs} /></div></div>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 prose-content">
        <div className="mb-6"><span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">Location Guide</span></div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Why Beach-Area Homes Need More Cleaning</h1>
        <p className="text-slate-500 text-sm mb-8">By Spottly · November 19, 2025 · 6 min read</p>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed">Living near the coast in LA is one of those things that sounds uniformly good — until you notice what the ocean air does to your windows, your fixtures, and every surface that&apos;s exposed to it. Salt air, sand, and marine-layer humidity aren&apos;t just inconveniences; they change how a home needs to be maintained.</p>
        <h2>What salt air actually does to surfaces</h2>
        <p>Salt is hygroscopic — it attracts and holds moisture. In coastal areas like <Link href="/locations/playa-del-rey">Playa del Rey</Link>, <Link href="/locations/marina-del-rey">Marina del Rey</Link>, and <Link href="/locations/manhattan-beach">Manhattan Beach</Link>, salt particles carried in off the ocean settle on surfaces: windows, screens, metal fixtures, exterior doors, and anything left near an open window. Over time, this creates a film that regular wiping doesn&apos;t fully remove. It also accelerates oxidation on metal fixtures and hardware.</p>
        <h2>The marine layer and humidity</h2>
        <p>The marine layer — the low coastal fog that burns off mid-morning — keeps humidity elevated in West LA and South Bay beach communities. Higher moisture means bathrooms develop mineral buildup and soap scum faster, and any area with limited ventilation (like a bathroom without a strong exhaust fan) is more prone to mold and mildew formation. Homes close to harbors (like Marina del Rey) deal with this year-round; others see it most in spring and early summer.</p>
        <h2>Sand in the floors and entryways</h2>
        <p>Anyone who walks in from the beach tracks sand — and sand gets into flooring joints, rugs, and corners in ways that a quick vacuum doesn&apos;t fully address. In beach-adjacent neighborhoods, floors need more attention than in inland homes, and the buildup happens faster. This is one of the reasons coastal households often run a tighter <Link href="/services/recurring-cleaning">recurring schedule</Link> than their inland counterparts.</p>
        <h2>What this means for cleaning frequency and scope</h2>
        <p>For most coastal homes, the practical impact is:</p>
        <ul>
          <li><strong>Tighter recurring schedule:</strong> biweekly is usually more appropriate than monthly for homes with ocean exposure, because grit and film accumulate faster.</li>
          <li><strong>More bathroom attention:</strong> descaling fixtures, cleaning grout, and addressing soap scum are higher priority in high-humidity homes.</li>
          <li><strong>Window and surface care:</strong> a <Link href="/services/deep-cleaning">deep clean</Link> that includes windows and fixtures clears the salt film that builds over months.</li>
        </ul>
        <h2>Cities where this matters most</h2>
        <p>Across Spottly&apos;s service area, the coastal factor is most pronounced in Playa del Rey (bluffs and direct ocean exposure), Marina del Rey (harbor humidity), Venice Beach (salt air plus heavy rental turnover), Santa Monica (marine layer plus density), and Manhattan Beach (Sand Section premium homes with direct beach exposure). Inland South Bay cities like Torrance and Gardena have less coastal exposure, though they&apos;re not entirely immune.</p>
        <p>If you&apos;re in a coastal neighborhood and your home feels like it gets grimy faster than it should — it probably does. A deep clean to remove the built-up film, followed by a tighter recurring plan, is usually the right response.</p>
      </article>
      <CTASection heading="Coastal home getting away from you?" subheading="Spottly cleans the salt film and sand buildup that regular service misses. Get a quote." />
    </>
  )
}
