import type { Metadata } from 'next'
import Link from 'next/link'
import LocationPage from '@/components/LocationPage'

export const metadata: Metadata = {
  title: 'House Cleaning in Torrance, CA | Spottly',
  description: 'House cleaning in Torrance — family homes across Hollywood Riviera, Southwood, and Old Torrance. Recurring, deep, and move-out cleans by Spottly.',
  alternates: { canonical: 'https://spottly.com/locations/torrance' },
  openGraph: {
    title: 'House Cleaning in Torrance, CA | Spottly',
    description: 'House cleaning in Torrance—family single-family homes across Hollywood Riviera, Southwood, and Old Torrance.',
    url: 'https://spottly.com/locations/torrance',
    images: [{ url: 'https://spottly.com/og', width: 1200, height: 630, alt: 'House Cleaning in Torrance' }],
  },
  twitter: { card: 'summary_large_image', title: 'House Cleaning in Torrance, CA | Spottly', description: 'House cleaning in Torrance—family homes across Hollywood Riviera and Southwood.', images: ['https://spottly.com/og'] },
}

export default function TorrancePage() {
  return (
    <LocationPage
      city="Torrance"
      citySlug="torrance"
      geo={{ lat: 33.8358, lng: -118.3406 }}
      localLead="Torrance is the South Bay's big residential anchor — a sprawling, suburban city of single-family neighborhoods, good schools, and a major employment base, set back just far enough from the coast to feel like its own world. Spottly cleans homes across its many distinct pockets."
      whySection={
        <p>
          Torrance is <strong>family suburbia at scale</strong>, and the cleaning follows. This is a city of single-family homes — the Hollywood Riviera near the coast, Southwood, West Torrance, Walteria, and historic Old Torrance — owned by families and long-term residents who keep up regular cleaning rather than churning through rentals. A large employment base (Honda&apos;s North American operations, aerospace and manufacturing) means dual-income households short on time, which makes recurring service a natural fit, and periodic deep cleans handle the buildup that comes with busy family homes. It&apos;s the inland, settled counterpart to the denser beach cities to the west — less turnover, more steady upkeep.
        </p>
      }
      neighborhoods={
        <p>
          Old Torrance, Hollywood Riviera, Southwood, West Torrance, and Walteria — plus bordering{' '}
          <Link href="/locations/redondo-beach" className="text-brand-blue hover:underline">Redondo Beach</Link> and{' '}
          <Link href="/locations/gardena" className="text-brand-blue hover:underline">Gardena</Link>.
        </p>
      }
      services={[
        { label: 'Recurring cleaning', href: '/services/recurring-cleaning', description: 'The staple for busy Torrance family households.' },
        { label: 'Deep clean (Spottly Clean)', href: '/services/deep-cleaning', description: 'A reset for a family home that\'s overdue for a thorough clean.' },
        { label: 'Move-in/move-out', href: '/services/move-in-move-out-cleaning', description: 'For home sales and family moves.' },
        { label: 'Custom cleaning', href: '/services/custom-cleaning', description: 'Add-ons for your Torrance home.' },
      ]}
      faqItems={[
        { question: 'Which Torrance neighborhoods do you serve?', answer: "All of them — Old Torrance, the Hollywood Riviera, Southwood, West Torrance, and Walteria. Torrance is large, and our coverage spans the whole city." },
        { question: "We're a busy dual-income family — what works best?", answer: "Recurring cleaning, usually weekly or biweekly. It's the most common setup for Torrance households juggling work and kids, and it keeps buildup down so each visit goes further." },
        { question: 'How quickly can you reach Torrance?', answer: "It's part of our South Bay coverage. Torrance is sizable, so book a few days ahead, especially for weekends." },
        { question: 'Is a deep clean worth it for an established family home?', answer: "Often, yes — busy family homes accumulate grime in kitchens, baths, and baseboards that standard cleaning won't fully lift. A one-time deep clean resets the baseline before recurring upkeep takes over." },
      ]}
      ctaHeading="More time with your family, less time cleaning."
      ctaSubheading="Recurring upkeep and deep cleans for Torrance homes."
      nearbyAreas={[
        { label: 'Redondo Beach', href: '/locations/redondo-beach' },
        { label: 'Gardena', href: '/locations/gardena' },
      ]}
      authorityLink={{ label: 'Torrance Area Chamber of Commerce', href: 'https://www.torrancechamber.com/' }}
    />
  )
}
