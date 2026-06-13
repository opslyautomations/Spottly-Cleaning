import type { Metadata } from 'next'
import Link from 'next/link'
import LocationPage from '@/components/LocationPage'

export const metadata: Metadata = {
  title: 'House Cleaning in Santa Monica, CA | Spottly',
  description: 'House cleaning in Santa Monica—dense beach-city rentals, condos, and marine-layer humidity from Ocean Park to Sunset Park. Recurring & move-out cleans by Spottly.',
  alternates: { canonical: 'https://spottly.com/locations/santa-monica' },
  openGraph: {
    title: 'House Cleaning in Santa Monica, CA | Spottly',
    description: 'House cleaning in Santa Monica—dense beach-city rentals, condos, and marine-layer humidity from Ocean Park to Sunset Park.',
    url: 'https://spottly.com/locations/santa-monica',
    images: [{ url: 'https://spottly.com/og', width: 1200, height: 630, alt: 'House Cleaning in Santa Monica' }],
  },
  twitter: { card: 'summary_large_image', title: 'House Cleaning in Santa Monica, CA | Spottly', description: 'House cleaning in Santa Monica—dense beach-city rentals and marine-layer humidity.', images: ['https://spottly.com/og'] },
}

export default function SantaMonicaPage() {
  return (
    <LocationPage
      city="Santa Monica"
      citySlug="santa-monica"
      geo={{ lat: 34.0195, lng: -118.4912 }}
      localLead="Santa Monica is the Westside's beach city proper — dense, walkable, and expensive, with everything from rent-controlled apartments to homes north of Montana. Between the tourism, the tech, and the ocean, it's a demanding place to keep a home clean, and Spottly works across all of it."
      whySection={
        <p>
          Santa Monica is <strong>dense and high-turnover</strong>, with a coastal twist. A large share of housing is apartments and condos — much of it rented — so move-in/move-out and recurring tenant cleaning run year-round, sharpened by the tourism and short-term-rental demand near Downtown and the Promenade. The marine layer adds the coastal factor: ocean humidity keeps bathrooms and windows working harder than inland homes. From the bungalows of Ocean Park and Sunset Park to the condos near Wilshire-Montana, the rhythm is steady upkeep plus frequent turnovers — a busier, denser version of what&apos;s happening in neighboring Venice.
        </p>
      }
      neighborhoods={
        <p>
          Downtown and the Third Street Promenade area, Ocean Park, Sunset Park, Pico, Wilshire-Montana, and north of Montana — plus bordering{' '}
          <Link href="/locations/venice-beach" className="text-brand-blue hover:underline">Venice</Link> and{' '}
          <Link href="/locations/mar-vista" className="text-brand-blue hover:underline">Mar Vista</Link>.
        </p>
      }
      services={[
        { label: 'Recurring cleaning', href: '/services/recurring-cleaning', description: "Upkeep for Santa Monica's dense rentals and condos, marine-layer included." },
        { label: 'Move-in/move-out', href: '/services/move-in-move-out-cleaning', description: "Frequent turnovers across the city's apartments." },
        { label: 'Deep clean (Spottly Clean)', href: '/services/deep-cleaning', description: 'A reset for an Ocean Park bungalow or a humidity-worn bathroom.' },
        { label: 'Custom cleaning', href: '/services/custom-cleaning', description: 'One-offs for your Santa Monica home.' },
      ]}
      faqItems={[
        { question: 'Which Santa Monica neighborhoods do you cover?', answer: "All of them — Downtown and the Promenade area, Ocean Park, Sunset Park, Pico, Wilshire-Montana, and north of Montana. Apartments, condos, and houses alike." },
        { question: 'Do you handle the marine-layer dampness here?', answer: "Yes — coastal humidity makes bathrooms and windows need more consistent care, so many Santa Monica clients keep a regular recurring schedule to stay ahead of it rather than letting moisture-related grime set in." },
        { question: 'Can you do a short-term-rental turnover near Downtown?', answer: "Yes — move-in/move-out cleaning resets a unit fully between guests or tenants, inside cabinets and appliances included." },
        { question: 'How quickly can you reach Santa Monica?', answer: "It's central to our Westside coverage and easy to reach. Book early for month-end move-outs, the busiest window." },
      ]}
      ctaHeading="A clean home in the middle of Santa Monica's busy pace."
      ctaSubheading="Recurring upkeep and fast turnovers, coast and all."
      nearbyAreas={[
        { label: 'Venice', href: '/locations/venice-beach' },
        { label: 'Mar Vista', href: '/locations/mar-vista' },
      ]}
      authorityLink={{ label: 'Santa Monica Chamber of Commerce', href: 'https://smchamber.com/' }}
    />
  )
}
