import type { Metadata } from 'next'
import Breadcrumbs, { breadcrumbJsonLd } from '@/components/Breadcrumbs'
import CTASection from '@/components/CTASection'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Cleaning Gallery | Before & After Photos | Spottly',
  description: 'See Spottly\'s house cleaning work across LA\'s Westside and South Bay — before and after photos of deep cleans, recurring service, and move-out cleans.',
  alternates: { canonical: 'https://spottly.com/gallery' },
  openGraph: {
    title: 'Cleaning Gallery | Before & After Photos | Spottly',
    description: 'See Spottly\'s house cleaning work across LA\'s Westside and South Bay.',
    url: 'https://spottly.com/gallery',
    images: [{ url: 'https://spottly.com/og', width: 1200, height: 630, alt: 'Spottly Cleaning Gallery' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cleaning Gallery | Before & After Photos | Spottly',
    description: 'See Spottly\'s house cleaning work across LA\'s Westside and South Bay.',
    images: ['https://spottly.com/og'],
  },
}

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Gallery' },
]

// Placeholder gallery items — replace with real job photos before launch
const galleryItems = [
  { alt: 'Spottly deep clean — kitchen in Santa Monica', caption: 'Kitchen deep clean · Santa Monica' },
  { alt: 'Spottly bathroom reset — Culver City move-out', caption: 'Bathroom · Culver City move-out' },
  { alt: 'Spottly recurring clean — living room in Manhattan Beach', caption: 'Living room · Manhattan Beach' },
  { alt: 'Spottly deep clean — range hood and stovetop in Venice', caption: 'Range hood deep clean · Venice' },
  { alt: 'Spottly move-out clean — cabinets in Palms apartment', caption: 'Cabinet interiors · Palms' },
  { alt: 'Spottly bathroom tile and grout — Redondo Beach', caption: 'Tile & grout · Redondo Beach' },
  { alt: 'Spottly deep clean — shower in Torrance family home', caption: 'Shower reset · Torrance' },
  { alt: 'Spottly recurring clean — kitchen in Playa Vista condo', caption: 'Kitchen · Playa Vista' },
  { alt: 'Spottly move-in clean — El Segundo apartment', caption: 'Move-in clean · El Segundo' },
  { alt: 'Spottly deep clean — baseboards in Mar Vista home', caption: 'Baseboards · Mar Vista' },
  { alt: 'Spottly deep clean — refrigerator interior in Marina del Rey', caption: 'Fridge interior · Marina del Rey' },
  { alt: 'Spottly cleaning — bathroom in Hawthorne', caption: 'Bathroom · Hawthorne' },
]

export default function GalleryPage() {
  return (
    <>
      <Script id="schema-breadcrumb-gallery" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />

      <div className="bg-slate-50 py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Spottly Cleaning Gallery</h1>
          <p className="mt-4 text-lg text-slate-600">Real cleaning work across LA&apos;s Westside and South Bay. Before &amp; after photos updated as jobs come in.</p>
        </div>

        {/* PLACEHOLDER gallery grid — replace with real job photos before launch */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, i) => (
            <div key={i} className="group relative aspect-square bg-slate-200 rounded-xl overflow-hidden">
              {/* Replace div with next/image when real photos are available */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-12 h-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                <p className="text-white text-xs font-medium" aria-label={item.alt}>{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-xs mt-8">
          {/* PLACEHOLDER — replace with real job photos before launch */}
          Photo placeholders shown above. Real before/after photos to be added.
        </p>
      </div>

      <CTASection heading="Want results like these in your home?" subheading="Get a free quote and we'll get started." />
    </>
  )
}
