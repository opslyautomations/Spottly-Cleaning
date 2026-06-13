import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs, { breadcrumbJsonLd } from '@/components/Breadcrumbs'
import { blogPosts } from '@/data/blog'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Spottly Blog | House Cleaning Tips for LA',
  description: 'House cleaning guides, tips, and service breakdowns for the LA Westside and South Bay. Deep clean vs. standard, move-out prep, recurring advice, and more.',
  alternates: { canonical: 'https://spottly.com/blog' },
  openGraph: {
    title: 'Spottly Blog | House Cleaning Tips for LA',
    description: 'House cleaning guides for LA\'s Westside & South Bay.',
    url: 'https://spottly.com/blog',
    images: [{ url: 'https://spottly.com/og', width: 1200, height: 630, alt: 'Spottly Blog' }],
  },
  twitter: { card: 'summary_large_image', title: 'Spottly Blog | House Cleaning Tips for LA', description: "House cleaning guides for LA's Westside & South Bay.", images: ['https://spottly.com/og'] },
}

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Blog' },
]

const categoryColors: Record<string, string> = {
  'Service Guide': 'bg-brand-blue/10 text-brand-blue',
  'Location Guide': 'bg-green-100 text-green-700',
  'Moving': 'bg-amber-100 text-amber-700',
  'Tips': 'bg-purple-100 text-purple-700',
}

export default function BlogIndexPage() {
  return (
    <>
      <Script id="schema-breadcrumb-blog" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />

      <div className="bg-slate-50 py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Spottly Blog</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            House cleaning guides for LA&apos;s Westside &amp; South Bay — frequency advice, deep vs standard cleaning, move-out and deposit guides, coastal home care, and city-specific tips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group card hover:shadow-md hover:border-brand-baby transition-all flex flex-col"
            >
              <div className="aspect-video bg-slate-200 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category]}`}>
                  {post.category}
                </span>
                <span className="text-xs text-slate-400">{post.readTime} read</span>
              </div>
              <h2 className="font-bold text-slate-900 text-lg leading-snug mb-2 group-hover:text-brand-blue transition-colors flex-1">
                {post.title}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>
              <p className="text-brand-blue text-sm font-semibold group-hover:underline">Read more →</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
