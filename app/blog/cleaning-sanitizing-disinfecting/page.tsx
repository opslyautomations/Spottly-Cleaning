import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs, { breadcrumbJsonLd } from '@/components/Breadcrumbs'
import CTASection from '@/components/CTASection'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Cleaning vs. Sanitizing vs. Disinfecting, Explained',
  description: "Three different things, and mixing them up means you're either doing too little or wasting effort. Here's what each actually means and when you need each one.",
  alternates: { canonical: 'https://spottly.com/blog/cleaning-sanitizing-disinfecting' },
  openGraph: { title: 'Cleaning vs. Sanitizing vs. Disinfecting, Explained', description: "Three different things. Here's what each means and when you need each one.", url: 'https://spottly.com/blog/cleaning-sanitizing-disinfecting', type: 'article', images: [{ url: 'https://spottly.com/og', width: 1200, height: 630, alt: 'Cleaning vs Sanitizing vs Disinfecting' }] },
  twitter: { card: 'summary_large_image', title: 'Cleaning vs. Sanitizing vs. Disinfecting, Explained', description: "Three different things. Here's what each means and when you need each one.", images: ['https://spottly.com/og'] },
}

const crumbs = [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Cleaning vs. Sanitizing vs. Disinfecting' }]
const schema = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: 'Cleaning vs. Sanitizing vs. Disinfecting, Explained', author: { '@type': 'Organization', name: 'Spottly', url: 'https://spottly.com' }, publisher: { '@type': 'Organization', name: 'Spottly', url: 'https://spottly.com' }, datePublished: '2025-10-22', dateModified: '2025-10-22', url: 'https://spottly.com/blog/cleaning-sanitizing-disinfecting', image: 'https://spottly.com/og' }

export default function CSDPage() {
  return (
    <>
      <Script id="schema-post-csd" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="schema-breadcrumb-csd" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />
      <div className="bg-slate-50 py-4 px-4"><div className="max-w-3xl mx-auto"><Breadcrumbs crumbs={crumbs} /></div></div>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 prose-content">
        <div className="mb-6"><span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">Tips</span></div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Cleaning vs. Sanitizing vs. Disinfecting, Explained</h1>
        <p className="text-slate-500 text-sm mb-8">By Spottly · October 22, 2025 · 5 min read</p>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed">These three words get used interchangeably, but they mean different things. Getting them confused means either over-treating surfaces that don&apos;t need it or under-treating the ones that do.</p>
        <h2>Cleaning: the foundation</h2>
        <p>Cleaning uses soap or detergent and water to physically remove dirt, grime, and microorganisms from a surface. It doesn&apos;t necessarily kill germs — it removes them. That reduction in germ count is meaningful, and for most household surfaces, it&apos;s all that&apos;s actually needed. A <Link href="/services/deep-cleaning">deep clean</Link> is almost entirely about cleaning in this sense — scrubbing, degreasing, and physically lifting buildup. As the <a href="https://www.cdc.gov/hygiene/about/when-and-how-to-clean-and-disinfect-your-home.html" target="_blank" rel="noopener noreferrer">CDC explains in its guide to cleaning and disinfecting your home</a>, cleaning is the first and most important step.</p>
        <h2>Sanitizing: reducing to a safe level</h2>
        <p>Sanitizing uses chemicals to reduce the number of bacteria on a surface to what is considered a safe level. It&apos;s less intensive than disinfecting — it lowers the germ count significantly but doesn&apos;t necessarily eliminate all of them. Sanitizing is often used on surfaces that contact food, like kitchen counters and cutting boards, where a dramatic reduction (rather than total elimination) is the goal.</p>
        <h2>Disinfecting: killing pathogens</h2>
        <p>Disinfecting uses stronger chemicals to kill a higher percentage of microorganisms, including bacteria and viruses, on a surface. It&apos;s the right choice when someone in the home has been sick, when immunocompromised people are present, or when specific pathogens are a concern. The important caveat: disinfectants work best on a surface that has already been cleaned. Disinfecting a dirty surface is much less effective — you clean first, then disinfect.</p>
        <h2>When each matters for a typical household</h2>
        <ul>
          <li><strong>Most of the time:</strong> cleaning is enough. Regular scrubbing and soap remove the vast majority of what you&apos;re worried about on floors, counters, and bathrooms.</li>
          <li><strong>Kitchen food-contact surfaces:</strong> sanitizing after cleaning makes sense, especially cutting boards and counters used for raw meat.</li>
          <li><strong>After illness:</strong> disinfecting high-touch surfaces (door handles, light switches, toilet flush) is worth adding when someone has been sick with something contagious.</li>
          <li><strong>Immunocompromised household members:</strong> more regular disinfecting of high-touch surfaces is appropriate.</li>
        </ul>
        <h2>What this means for Spottly&apos;s cleaning</h2>
        <p>The core of a <Link href="/services/recurring-cleaning">recurring clean</Link> or <Link href="/services/deep-cleaning">deep clean</Link> is cleaning in the technical sense — physically removing grime, buildup, and microorganisms through scrubbing, degreasing, and wiping. Bathrooms get sanitizing attention on toilets and sinks. When clients want additional disinfecting of high-touch surfaces (especially relevant after illness or with at-risk household members), that can be added. Spottly uses low-toxicity products that clean effectively without the harsh chemical residue of heavy disinfectants — appropriate for homes with kids, pets, and people who want clean surfaces without chemical exposure.</p>
      </article>
      <CTASection heading="A proper clean, with the right products." subheading="Spottly uses safe, low-toxicity cleaning that actually works. Get a quote." />
    </>
  )
}
