import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs, { breadcrumbJsonLd } from '@/components/Breadcrumbs'
import CTASection from '@/components/CTASection'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Do Low-Toxicity Cleaning Products Actually Work?',
  description: "The short answer: yes, when used correctly. Here's what low-toxicity actually means, why Spottly uses these products, and where the real limits are.",
  alternates: { canonical: 'https://spottly.com/blog/low-toxicity-cleaning-products' },
  openGraph: { title: 'Do Low-Toxicity Cleaning Products Actually Work?', description: "Yes, when used correctly. Here's what low-toxicity means and why it matters.", url: 'https://spottly.com/blog/low-toxicity-cleaning-products', type: 'article', images: [{ url: 'https://spottly.com/og', width: 1200, height: 630, alt: 'Do Low-Toxicity Cleaning Products Actually Work?' }] },
  twitter: { card: 'summary_large_image', title: 'Do Low-Toxicity Cleaning Products Actually Work?', description: "Yes, when used correctly. Here's what low-toxicity means.", images: ['https://spottly.com/og'] },
}

const crumbs = [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Do Low-Toxicity Cleaning Products Actually Work?' }]
const schema = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: 'Do Low-Toxicity Cleaning Products Actually Work?', author: { '@type': 'Organization', name: 'Spottly', url: 'https://spottly.com' }, publisher: { '@type': 'Organization', name: 'Spottly', url: 'https://spottly.com' }, datePublished: '2025-11-05', dateModified: '2025-11-05', url: 'https://spottly.com/blog/low-toxicity-cleaning-products', image: 'https://spottly.com/og' }

export default function LowToxPage() {
  return (
    <>
      <Script id="schema-post-lowtox" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="schema-breadcrumb-lowtox" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />
      <div className="bg-slate-50 py-4 px-4"><div className="max-w-3xl mx-auto"><Breadcrumbs crumbs={crumbs} /></div></div>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 prose-content">
        <div className="mb-6"><span className="bg-brand-blue/10 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full">Service Guide</span></div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Do Low-Toxicity Cleaning Products Actually Work?</h1>
        <p className="text-slate-500 text-sm mb-8">By Spottly · November 5, 2025 · 6 min read</p>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed">The skepticism is understandable. &ldquo;Safe&rdquo; and &ldquo;gentle&rdquo; can sound like code for &ldquo;doesn&apos;t clean as well.&rdquo; The short answer is no — low-toxicity products, used correctly, clean just as effectively as harsh chemical alternatives. Here&apos;s why.</p>
        <h2>What &ldquo;low-toxicity&rdquo; actually means</h2>
        <p>Low-toxicity cleaning products are formulated to minimize harmful chemical exposure — to people in the home, pets walking on cleaned floors, children touching cleaned surfaces, and the environment. They avoid or minimize ingredients like chlorine bleach (in non-appropriate contexts), ammonia, formaldehyde, and synthetic fragrances known to cause respiratory irritation. What they don&apos;t sacrifice is cleaning effectiveness, because the active cleaning agents — surfactants, acids, enzymes — that actually lift grease and remove buildup remain.</p>
        <h2>The common misconception: harsh smell = effective clean</h2>
        <p>The smell of bleach or ammonia doesn&apos;t mean something is working better. It means volatile compounds are off-gassing into your air. The actual work of cleaning — physically removing grime, cutting grease, lifting soap scum — is done by surfactants and mechanical scrubbing, not by chemical potency. A product that cleans well and leaves no harsh residue isn&apos;t a compromise; it&apos;s a better product.</p>
        <h2>What they&apos;re effective for</h2>
        <p>Low-toxicity products handle everything in a standard residential clean and a <Link href="/services/deep-cleaning">deep clean</Link>: degreasing range hoods and stovetops, cutting soap scum in showers, scrubbing tile and grout, cleaning bathroom fixtures and toilets, and wiping down surfaces. The key is using the right product for the right surface — an enzyme-based product on organic buildup (grease, soap residue), a mild acid (like diluted citric acid or vinegar-based formulas) for mineral deposits and scale, and a surfactant-based cleaner for general surface dirt.</p>
        <h2>Where they have limits</h2>
        <p>For heavily contaminated surfaces — severe mold on grout, extreme grease buildup from years of cooking, or situations requiring hospital-grade disinfection — stronger products may be appropriate. For most residential cleaning, they&apos;re not needed. If you&apos;re dealing with a health-specific concern (immunocompromised household members, active illness recovery), that&apos;s worth discussing when you book — there&apos;s a difference between low-toxicity cleaning and no disinfecting at all.</p>
        <h2>Why it matters with pets and kids</h2>
        <p>Pets walk on cleaned floors and lick their paws. Kids crawl on surfaces and put their hands in their mouths. Residual harsh chemicals on those surfaces get absorbed. Low-toxicity products reduce this exposure meaningfully — and for households that care about what&apos;s actually on the surfaces their family contacts, it&apos;s a straightforward reason to choose them over alternatives.</p>
        <h2>Spottly&apos;s approach</h2>
        <p>Spottly uses low-toxicity products as the standard for every <Link href="/services/recurring-cleaning">recurring clean</Link> and <Link href="/services/custom-cleaning">custom service</Link> — not as an option. If you have specific product preferences or sensitivities, mention them when you book and we&apos;ll work with them.</p>
      </article>
      <CTASection heading="Safe products, no compromise on results." subheading="Spottly uses low-toxicity cleaning that works. Get a free quote." />
    </>
  )
}
