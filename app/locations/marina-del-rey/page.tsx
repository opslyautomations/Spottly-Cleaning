import type { Metadata } from 'next'
import Link from 'next/link'
import LocationPage from '@/components/LocationPage'

export const metadata: Metadata = {
  title: 'House Cleaning in Marina del Rey, CA | Spottly',
  description: 'House cleaning in Marina del Rey—waterfront condos and apartments where harbor humidity and rentals drive the work. Recurring, deep & turnover cleans by Spottly.',
  alternates: { canonical: 'https://spottly.com/locations/marina-del-rey' },
  openGraph: {
    title: 'House Cleaning in Marina del Rey, CA | Spottly',
    description: 'House cleaning in Marina del Rey—waterfront condos and apartments where harbor humidity and rentals drive the work.',
    url: 'https://spottly.com/locations/marina-del-rey',
    images: [{ url: 'https://spottly.com/og/marina-del-rey.png', width: 1200, height: 630, alt: 'House Cleaning in Marina del Rey' }],
  },
  twitter: { card: 'summary_large_image', title: 'House Cleaning in Marina del Rey, CA | Spottly', description: 'House cleaning in Marina del Rey—waterfront condos where harbor humidity drives the work.', images: ['https://spottly.com/og/marina-del-rey.png'] },
}

export default function MarinadelReyPage() {
  return (
    <LocationPage
      city="Marina del Rey"
      citySlug="marina-del-rey"
      geo={{ lat: 33.9802, lng: -118.4517 }}
      localLead="Marina del Rey is built around the largest man-made small-craft harbor in the country, and almost everything about living here is shaped by the water — the condos overlooking the basins, the apartments on the Peninsula, the boats in the slips. Spottly cleans homes throughout this unincorporated pocket of LA County."
      whySection={
        <p>
          Waterfront living means <strong>humidity and turnover</strong>. The harbor air keeps moisture high, so bathrooms, windows, and any low-ventilation corner need more consistent attention to stay ahead of the damp. And Marina del Rey is dense with condos and apartments — many of them rentals, including short-term and vacation stays for visitors drawn to Mother&apos;s Beach and Fisherman&apos;s Village — which keeps a steady flow of move-in/move-out and turnover cleaning. The mix of full-time condo residents and rotating renters means both recurring upkeep and deadline turnovers are common here.
        </p>
      }
      neighborhoods={
        <p>
          The harbor-front condos, the Marina Peninsula, the blocks around Mother&apos;s Beach and Fisherman&apos;s Village — plus bordering{' '}
          <Link href="/locations/venice-beach" className="text-brand-blue hover:underline">Venice</Link>,{' '}
          <Link href="/locations/playa-del-rey" className="text-brand-blue hover:underline">Playa del Rey</Link>, and{' '}
          <Link href="/locations/playa-vista" className="text-brand-blue hover:underline">Playa Vista</Link>.
        </p>
      }
      services={[
        { label: 'Recurring cleaning', href: '/services/recurring-cleaning', description: 'Upkeep that stays ahead of harbor humidity in condos and apartments.' },
        { label: 'Move-in/move-out', href: '/services/move-in-move-out-cleaning', description: "Turnovers for the Marina's many rentals." },
        { label: 'Deep clean (Spottly Clean)', href: '/services/deep-cleaning', description: 'A reset for moisture-prone bathrooms and long-overdue corners.' },
        { label: 'Custom cleaning', href: '/services/custom-cleaning', description: 'One-offs for your Marina del Rey home.' },
      ]}
      faqItems={[
        { question: 'Does harbor humidity really affect how I should clean?', answer: "It can. Higher moisture near the water means bathrooms and low-ventilation spots need more consistent attention to stay fresh, so many Marina del Rey clients keep a regular recurring schedule rather than waiting for problems to show." },
        { question: 'Do you clean waterfront condos and the Peninsula?', answer: "Yes — the harbor-front condos, the Marina Peninsula, and the area around Mother's Beach are all within our coverage. Dense buildings are routine for us." },
        { question: 'Can you handle a vacation-rental turnover here?', answer: "Yes — move-in/move-out cleaning fully resets a unit between guests, inside cabinets and appliances included, which is what short-term rentals near the harbor need." },
        { question: 'How quickly can you reach Marina del Rey?', answer: "It's part of our coastal coverage and easy to reach. Book ahead in summer, the peak for rental turnover." },
      ]}
      ctaHeading="Life on the water, without the upkeep headache."
      ctaSubheading="Humidity-aware recurring cleaning and fast rental turnovers."
      nearbyAreas={[
        { label: 'Venice', href: '/locations/venice-beach' },
        { label: 'Playa del Rey', href: '/locations/playa-del-rey' },
        { label: 'Playa Vista', href: '/locations/playa-vista' },
      ]}
      authorityLink={{ label: 'LAX Coastal Chamber of Commerce', href: 'https://laxcoastal.com/' }}
    />
  )
}
