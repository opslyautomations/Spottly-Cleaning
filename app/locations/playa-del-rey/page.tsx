import type { Metadata } from 'next'
import Link from 'next/link'
import LocationPage from '@/components/LocationPage'

export const metadata: Metadata = {
  title: 'House Cleaning in Playa del Rey, CA | Spottly',
  description: 'House cleaning in Playa del Rey—coastal homes near the bluffs and Del Rey Lagoon where salt air and sand mean more upkeep. Recurring & deep cleans by Spottly.',
  alternates: { canonical: 'https://spottly.com/locations/playa-del-rey' },
  openGraph: {
    title: 'House Cleaning in Playa del Rey, CA | Spottly',
    description: 'House cleaning in Playa del Rey—coastal homes near the bluffs and Del Rey Lagoon where salt air and sand mean more upkeep.',
    url: 'https://spottly.com/locations/playa-del-rey',
    images: [{ url: 'https://spottly.com/og', width: 1200, height: 630, alt: 'House Cleaning in Playa del Rey' }],
  },
  twitter: { card: 'summary_large_image', title: 'House Cleaning in Playa del Rey, CA | Spottly', description: 'House cleaning in Playa del Rey—coastal homes near the bluffs and Del Rey Lagoon.', images: ['https://spottly.com/og'] },
}

export default function PlayaDelReyPage() {
  return (
    <LocationPage
      city="Playa del Rey"
      citySlug="playa-del-rey"
      geo={{ lat: 33.9625, lng: -118.4439 }}
      localLead="Playa del Rey is the small beach town the rest of LA forgets about — tucked below the bluffs between Dockweiler State Beach and the Ballona Wetlands. Living that close to the sand is the whole appeal, and it's also what makes cleaning here its own thing."
      whySection={
        <p>
          The coast does real work on a home in Playa del Rey. Salt air carries inland off Dockweiler, tracked-in sand finds its way into floors and entryways, and the marine layer keeps things damp enough that bathrooms and windows need more attention than they would a few miles inland. Add a steady mix of beach rentals and you get a neighborhood where coastal grit drives the cleaning: deep cleans that actually cut salt film and sand buildup, and recurring visits that keep it from accumulating. The housing runs from bluff-top homes to apartments near the lagoon — all of it exposed to the same ocean.
        </p>
      }
      neighborhoods={
        <p>
          The bluffs, the streets around Del Rey Lagoon, and the flats toward Dockweiler — plus bordering{' '}
          <Link href="/locations/playa-vista" className="text-brand-blue hover:underline">Playa Vista</Link>,{' '}
          <Link href="/locations/westchester" className="text-brand-blue hover:underline">Westchester</Link>, and{' '}
          <Link href="/locations/marina-del-rey" className="text-brand-blue hover:underline">Marina del Rey</Link>.
        </p>
      }
      services={[
        { label: 'Recurring cleaning', href: '/services/recurring-cleaning', description: 'Regular upkeep that keeps salt film and sand from settling in.' },
        { label: 'Deep clean (Spottly Clean)', href: '/services/deep-cleaning', description: 'A reset that cuts coastal buildup in bathrooms, windows, and floors.' },
        { label: 'Move-in/move-out', href: '/services/move-in-move-out-cleaning', description: 'For the beach rentals near the lagoon.' },
        { label: 'Custom cleaning', href: '/services/custom-cleaning', description: 'One-offs for your Playa del Rey home.' },
      ]}
      faqItems={[
        { question: 'Does living near the beach change how often I should clean?', answer: "Usually, yes. Salt air, sand, and the marine layer mean coastal homes here pick up grit and moisture faster than inland ones, so many Playa del Rey clients run a tighter recurring schedule to stay ahead of it." },
        { question: 'Do you serve homes up on the bluffs?', answer: "Yes — the bluff-top streets, the area around Del Rey Lagoon, and the flats toward Dockweiler are all within our coverage." },
        { question: 'How quickly can you reach Playa del Rey?', answer: "It's part of our coastal LAX-area coverage, so it's a routine area for us to reach. Book ahead in summer, when beach rentals turn over most." },
        { question: 'Can you handle a beach rental turnover?', answer: "Yes — move-in/move-out cleaning gets a rental fully reset, inside cabinets and appliances included, which matters for short-term and seasonal rentals near the water." },
      ]}
      ctaHeading="Beach living, minus the sand on every surface."
      ctaSubheading="Recurring upkeep and deep cleans tuned for the coast."
      nearbyAreas={[
        { label: 'Playa Vista', href: '/locations/playa-vista' },
        { label: 'Westchester', href: '/locations/westchester' },
        { label: 'Marina del Rey', href: '/locations/marina-del-rey' },
      ]}
      authorityLink={{ label: 'LAX Coastal Chamber of Commerce', href: 'https://laxcoastal.com/' }}
    />
  )
}
