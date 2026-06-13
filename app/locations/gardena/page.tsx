import type { Metadata } from 'next'
import Link from 'next/link'
import LocationPage from '@/components/LocationPage'

export const metadata: Metadata = {
  title: 'House Cleaning in Gardena, CA | Spottly',
  description: 'House cleaning in Gardena — a diverse South Bay city of homes and apartments from Old Town to Moneta. Recurring cleans by Spottly.',
  alternates: { canonical: 'https://spottly.com/locations/gardena' },
  openGraph: {
    title: 'House Cleaning in Gardena, CA | Spottly',
    description: 'House cleaning in Gardena—a diverse South Bay city of single-family homes and apartments from Old Town to Moneta.',
    url: 'https://spottly.com/locations/gardena',
    images: [{ url: 'https://spottly.com/og', width: 1200, height: 630, alt: 'House Cleaning in Gardena' }],
  },
  twitter: { card: 'summary_large_image', title: 'House Cleaning in Gardena, CA | Spottly', description: 'House cleaning in Gardena—a diverse South Bay city of homes and apartments.', images: ['https://spottly.com/og'] },
}

export default function GardenaPage() {
  return (
    <LocationPage
      city="Gardena"
      citySlug="gardena"
      geo={{ lat: 33.8883, lng: -118.3089 }}
      localLead="Gardena is one of the South Bay's most diverse communities — historically home to a large Japanese-American population, anchored by an old downtown and its well-known card casinos, with a residential mix that ranges from single-family streets to apartment blocks. Spottly cleans homes across the city."
      whySection={
        <p>
          Gardena&apos;s <strong>mixed housing and working-household base</strong> define the work. The city blends single-family neighborhoods with apartments and a working industrial base, so the cleaning splits between recurring upkeep for established family homes and move-in/move-out turnovers for the rental side. It&apos;s a practical, hometown-feel city — not a tourism or premium-beach market — where value and reliability matter more than polish. Pockets like Old Town Gardena, the Moneta area, and Strawberry Park give it a settled residential character, and households here tend toward steady recurring service over churn. It rounds out the inland South Bay alongside neighboring Torrance.
        </p>
      }
      neighborhoods={
        <p>
          Old Town Gardena, Moneta, the Strawberry Park area, and the residential streets off Gardena Boulevard — plus bordering{' '}
          <Link href="/locations/torrance" className="text-brand-blue hover:underline">Torrance</Link> and{' '}
          <Link href="/locations/hawthorne" className="text-brand-blue hover:underline">Hawthorne</Link>.
        </p>
      }
      services={[
        { label: 'Recurring cleaning', href: '/services/recurring-cleaning', description: "Steady upkeep for Gardena's established family homes." },
        { label: 'Move-in/move-out', href: '/services/move-in-move-out-cleaning', description: "Turnovers for the city's apartments and rentals." },
        { label: 'Deep clean (Spottly Clean)', href: '/services/deep-cleaning', description: 'A reset for a home overdue for a thorough clean.' },
        { label: 'Custom cleaning', href: '/services/custom-cleaning', description: 'Add-ons for your Gardena home.' },
      ]}
      faqItems={[
        { question: 'Which Gardena neighborhoods do you serve?', answer: "Old Town Gardena, Moneta, the Strawberry Park area, and the residential streets off Gardena Boulevard — single-family homes and apartments alike, across the whole city." },
        { question: 'Do you handle both houses and apartments here?', answer: "Yes. Gardena's housing is mixed, so we do recurring upkeep for family homes and move-in/move-out turnovers for the rental side, each quoted by size and scope." },
        { question: 'How quickly can you reach Gardena?', answer: "It's part of our South Bay coverage, neighboring Torrance and Hawthorne, and easy to reach. Book ahead for weekends and month-end move-outs." },
        { question: 'Do you offer recurring plans for families in Gardena?', answer: "Yes — weekly, biweekly, or monthly at a discounted per-visit rate, which is the common setup for established Gardena households." },
      ]}
      ctaHeading="Reliable, no-fuss cleaning for Gardena homes."
      ctaSubheading="Recurring upkeep and move cleans, quoted straight."
      nearbyAreas={[
        { label: 'Torrance', href: '/locations/torrance' },
        { label: 'Hawthorne', href: '/locations/hawthorne' },
      ]}
      authorityLink={{ label: 'Gardena Valley Chamber of Commerce', href: 'https://www.gardenachamber.org/' }}
    />
  )
}
