import type { Metadata } from 'next'
import Link from 'next/link'
import LocationPage from '@/components/LocationPage'

export const metadata: Metadata = {
  title: 'House Cleaning in Redondo Beach, CA | Spottly',
  description: 'House cleaning in Redondo Beach — homes and condos from Riviera Village to King Harbor near the coast. Recurring and deep cleans by Spottly.',
  alternates: { canonical: 'https://spottly.com/locations/redondo-beach' },
  openGraph: {
    title: 'House Cleaning in Redondo Beach, CA | Spottly',
    description: 'House cleaning in Redondo Beach—single-family homes and condos from Riviera Village to King Harbor, all near the coast.',
    url: 'https://spottly.com/locations/redondo-beach',
    images: [{ url: 'https://spottly.com/og', width: 1200, height: 630, alt: 'House Cleaning in Redondo Beach' }],
  },
  twitter: { card: 'summary_large_image', title: 'House Cleaning in Redondo Beach, CA | Spottly', description: 'House cleaning in Redondo Beach—from Riviera Village to King Harbor.', images: ['https://spottly.com/og'] },
}

export default function RedondoBeachPage() {
  return (
    <LocationPage
      city="Redondo Beach"
      citySlug="redondo-beach"
      geo={{ lat: 33.8492, lng: -118.3884 }}
      localLead="Redondo Beach is the more laid-back, lived-in end of the South Bay's three beach cities — split between the houses of North Redondo and the harbor-and-pier energy of South Redondo, with Riviera Village tying it together. Spottly cleans homes across both halves of the city."
      whySection={
        <p>
          Redondo is a <strong>mixed-housing coastal city</strong>, and that mix shapes the work. North Redondo leans single-family and townhome — steady residential cleaning, families on recurring schedules. South Redondo, around King Harbor, the pier, and Riviera Village, brings more condos and a livelier rental scene near the water. Across both, the coast is a constant: salt air and humidity off King Harbor mean coastal homes here pick up grit and dampness faster than inland ones. It&apos;s less about premium polish than neighboring Manhattan Beach and more about practical, consistent upkeep for a broad range of homes near the ocean.
        </p>
      }
      neighborhoods={
        <p>
          North Redondo, South Redondo, Riviera Village, and the blocks near King Harbor and the Redondo Pier — plus bordering{' '}
          <Link href="/locations/manhattan-beach" className="text-brand-blue hover:underline">Manhattan Beach</Link>,{' '}
          <Link href="/locations/torrance" className="text-brand-blue hover:underline">Torrance</Link>, and{' '}
          <Link href="/locations/hawthorne" className="text-brand-blue hover:underline">Hawthorne</Link>.
        </p>
      }
      services={[
        { label: 'Recurring cleaning', href: '/services/recurring-cleaning', description: 'Practical upkeep for North Redondo homes and South Redondo condos alike.' },
        { label: 'Deep clean (Spottly Clean)', href: '/services/deep-cleaning', description: 'A reset that cuts coastal grit and harbor-area dampness.' },
        { label: 'Move-in/move-out', href: '/services/move-in-move-out-cleaning', description: 'For the rentals near the harbor and pier.' },
        { label: 'Custom cleaning', href: '/services/custom-cleaning', description: 'One-offs for your Redondo Beach home.' },
      ]}
      faqItems={[
        { question: 'Do you serve both North and South Redondo?', answer: "Yes — the single-family and townhome streets of North Redondo and the condo-and-harbor area of South Redondo, including Riviera Village and the blocks near the pier." },
        { question: 'Does being near King Harbor affect cleaning?', answer: "It can. Salt air and humidity off the harbor mean coastal homes pick up grit and dampness faster, so many Redondo clients keep a regular recurring schedule to stay ahead of it." },
        { question: 'How quickly can you reach Redondo Beach?', answer: "It's part of our South Bay coverage and easy to reach. Book ahead for weekends and end-of-month turnovers." },
        { question: 'Do you offer recurring cleaning for families in North Redondo?', answer: "Yes — weekly, biweekly, or monthly. Family homes with kids or pets usually do best on a tighter cadence." },
      ]}
      ctaHeading="Coast-close living, kept easy in Redondo."
      ctaSubheading="Practical recurring upkeep and deep cleans for homes and condos."
      nearbyAreas={[
        { label: 'Manhattan Beach', href: '/locations/manhattan-beach' },
        { label: 'Torrance', href: '/locations/torrance' },
        { label: 'Hawthorne', href: '/locations/hawthorne' },
      ]}
      authorityLink={{ label: 'Redondo Beach Chamber of Commerce', href: 'https://www.redondochamber.org/' }}
    />
  )
}
