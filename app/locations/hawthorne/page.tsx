import type { Metadata } from 'next'
import Link from 'next/link'
import LocationPage from '@/components/LocationPage'

export const metadata: Metadata = {
  title: 'House Cleaning in Hawthorne, CA | Spottly',
  description: 'House cleaning in Hawthorne — South Bay apartments and working households near SpaceX. Move-out and recurring cleaning by Spottly.',
  alternates: { canonical: 'https://spottly.com/locations/hawthorne' },
  openGraph: {
    title: 'House Cleaning in Hawthorne, CA | Spottly',
    description: 'House cleaning in Hawthorne—the SpaceX-anchored South Bay city of apartments and working households.',
    url: 'https://spottly.com/locations/hawthorne',
    images: [{ url: 'https://spottly.com/og', width: 1200, height: 630, alt: 'House Cleaning in Hawthorne' }],
  },
  twitter: { card: 'summary_large_image', title: 'House Cleaning in Hawthorne, CA | Spottly', description: 'House cleaning in Hawthorne—the SpaceX-anchored South Bay city.', images: ['https://spottly.com/og'] },
}

export default function HawthornePage() {
  return (
    <LocationPage
      city="Hawthorne"
      citySlug="hawthorne"
      geo={{ lat: 33.9164, lng: -118.3526 }}
      localLead="Hawthorne has changed fast — once a quiet South Bay manufacturing town, now best known as the home of SpaceX, with new development reshaping a city of working households and denser, more affordable housing than its beach-city neighbors. Spottly cleans homes throughout it."
      whySection={
        <p>
          Hawthorne is <strong>denser and more rental-heavy</strong> than the South Bay cities around it, and that drives the cleaning mix. There&apos;s more apartment and multi-unit housing here, which means a steady flow of move-in/move-out turnovers, alongside recurring upkeep for working households who want help staying on top of it. The aerospace anchor — SpaceX on Rocket Road, plus the longer manufacturing history — brings shift workers and engineers on demanding schedules who benefit from cleaning that happens whether they&apos;re home or not. Pockets like Holly Glen and the newer Three Sixty development add single-family and modern-build variety. It&apos;s a practical, value-minded counterpart to the premium homes of neighboring Manhattan Beach.
        </p>
      }
      neighborhoods={
        <p>
          Holly Glen, the Hawthorne Boulevard corridor, the area near the SpaceX campus on Rocket Road, and newer developments like Three Sixty — plus bordering{' '}
          <Link href="/locations/el-segundo" className="text-brand-blue hover:underline">El Segundo</Link>,{' '}
          <Link href="/locations/gardena" className="text-brand-blue hover:underline">Gardena</Link>, and{' '}
          <Link href="/locations/manhattan-beach" className="text-brand-blue hover:underline">Manhattan Beach</Link>.
        </p>
      }
      services={[
        { label: 'Move-in/move-out', href: '/services/move-in-move-out-cleaning', description: "Turnovers for Hawthorne's apartments and rentals." },
        { label: 'Recurring cleaning', href: '/services/recurring-cleaning', description: 'Upkeep that runs around demanding aerospace and shift schedules.' },
        { label: 'Deep clean (Spottly Clean)', href: '/services/deep-cleaning', description: 'A reset before recurring, or before a move.' },
        { label: 'Custom cleaning', href: '/services/custom-cleaning', description: 'Add-ons for your Hawthorne home.' },
      ]}
      faqItems={[
        { question: 'Do you do move-out cleaning for apartments in Hawthorne?', answer: "Yes — with more multi-unit housing here, turnovers are a big part of our Hawthorne work. We clean inside cabinets and appliances and get the unit to the standard landlords inspect against." },
        { question: "I work shifts at an aerospace job — can you clean while I'm out?", answer: "Yes. Arrange access and recurring visits run on schedule regardless of your shifts. Many Hawthorne clients work demanding or rotating hours." },
        { question: 'Which parts of Hawthorne do you serve?', answer: "Holly Glen, the Hawthorne Boulevard corridor, the area near the SpaceX campus, and newer developments like Three Sixty — the whole city is covered." },
        { question: 'How quickly can you reach Hawthorne?', answer: "It's part of our South Bay coverage and central enough to reach easily. Book early for month-end move-outs." },
      ]}
      ctaHeading="Long shifts, new place, no time — Hawthorne, covered."
      ctaSubheading="Move-out turnovers and recurring upkeep that fits your hours."
      nearbyAreas={[
        { label: 'El Segundo', href: '/locations/el-segundo' },
        { label: 'Gardena', href: '/locations/gardena' },
        { label: 'Manhattan Beach', href: '/locations/manhattan-beach' },
      ]}
      authorityLink={{ label: 'Hawthorne Chamber of Commerce', href: 'https://hawthornechamberofcommerce.com/' }}
    />
  )
}
