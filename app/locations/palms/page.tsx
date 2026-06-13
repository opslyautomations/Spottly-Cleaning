import type { Metadata } from 'next'
import Link from 'next/link'
import LocationPage from '@/components/LocationPage'

export const metadata: Metadata = {
  title: 'House Cleaning in Palms, CA | Spottly',
  description: 'House cleaning in Palms, LA\'s apartment-dense Westside neighborhood—fast move-in/move-out turnovers and recurring upkeep for renters. Book with Spottly today.',
  alternates: { canonical: 'https://spottly.com/locations/palms' },
  openGraph: {
    title: 'House Cleaning in Palms, CA | Spottly',
    description: "House cleaning in Palms, LA's apartment-dense Westside neighborhood—fast move-in/move-out turnovers and recurring upkeep for renters.",
    url: 'https://spottly.com/locations/palms',
    images: [{ url: 'https://spottly.com/og/palms.png', width: 1200, height: 630, alt: 'House Cleaning in Palms' }],
  },
  twitter: { card: 'summary_large_image', title: 'House Cleaning in Palms, CA | Spottly', description: "House cleaning in Palms, LA's apartment-dense Westside neighborhood.", images: ['https://spottly.com/og/palms.png'] },
}

export default function PalmsPage() {
  return (
    <LocationPage
      city="Palms"
      citySlug="palms"
      geo={{ lat: 34.0141, lng: -118.4159 }}
      localLead="Palms is one of the most apartment-dense neighborhoods in Los Angeles — a compact, renter-heavy pocket wedged between Culver City and the rest of the Westside. That density shapes the cleaning work here: lots of units, lots of moves, lots of people who want their place handled fast."
      whySection={
        <p>
          Where most Westside neighborhoods are a mix of houses and apartments, Palms is overwhelmingly apartments — blocks of multi-unit buildings along National, Motor, and the streets feeding the Expo Line. That means two things dominate: <strong>move-in/move-out turnovers</strong>, because renters cycle through frequently and want their deposit back, and <strong>recurring cleaning for tenants</strong> who&apos;d rather pay for upkeep than spend a day off scrubbing a one-bedroom. It&apos;s a younger, more transient neighborhood than its single-family neighbors, and the cleaning rhythm reflects that.
        </p>
      }
      neighborhoods={
        <p>
          The apartment corridors along National Boulevard, Motor Avenue, and toward the Expo Line and Culver City border — plus bordering{' '}
          <Link href="/locations/culver-city" className="text-brand-blue hover:underline">Culver City</Link> and{' '}
          <Link href="/locations/mar-vista" className="text-brand-blue hover:underline">Mar Vista</Link>.
        </p>
      }
      services={[
        { label: 'Move-in/move-out', href: '/services/move-in-move-out-cleaning', description: 'The core Palms job: getting a one- or two-bedroom rental inspection-ready on a deadline.' },
        { label: 'Recurring cleaning', href: '/services/recurring-cleaning', description: 'Light, regular upkeep sized for an apartment.' },
        { label: 'Deep clean (Spottly Clean)', href: '/services/deep-cleaning', description: 'A reset before recurring, or before you hand back the keys.' },
        { label: 'Custom cleaning', href: '/services/custom-cleaning', description: 'Add-ons for your Palms unit.' },
      ]}
      faqItems={[
        { question: 'Do you do move-out cleaning for apartments in Palms?', answer: "Yes — it's our most common Palms job. We clean inside cabinets and appliances, scrub the bathroom and kitchen, and get the unit to the standard landlords inspect against, which is where deposit deductions usually come from." },
        { question: 'My place is just a one-bedroom — is that too small to book?', answer: "Not at all. Apartments are quoted by size and scope, so a one-bedroom is a smaller, quicker job. Most Palms cleaning is exactly this size." },
        { question: 'How quickly can you reach Palms?', answer: "Palms sits right against Culver City in the middle of our Westside coverage, so it's one of our faster areas. For end-of-month move-outs, book early — that's the busy window." },
        { question: 'Can I set up recurring cleaning as a renter?', answer: "Yes — weekly, biweekly, or monthly at a discounted per-visit rate. Popular with Palms tenants who want the place consistently clean without giving up a day off." },
      ]}
      ctaHeading="Moving in or out of Palms? Make the clean the easy part."
      ctaSubheading="Deadline-ready turnovers and renter-friendly recurring plans."
      nearbyAreas={[
        { label: 'Culver City', href: '/locations/culver-city' },
        { label: 'Mar Vista', href: '/locations/mar-vista' },
      ]}
    />
  )
}
