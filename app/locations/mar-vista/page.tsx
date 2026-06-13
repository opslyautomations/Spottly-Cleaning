import type { Metadata } from 'next'
import Link from 'next/link'
import LocationPage from '@/components/LocationPage'

export const metadata: Metadata = {
  title: 'House Cleaning in Mar Vista, CA | Spottly',
  description: 'House cleaning in Mar Vista for mid-century homes and Westside families—recurring upkeep and deep cleans north and south of Venice Blvd. Book with Spottly.',
  alternates: { canonical: 'https://spottly.com/locations/mar-vista' },
  openGraph: {
    title: 'House Cleaning in Mar Vista, CA | Spottly',
    description: 'House cleaning in Mar Vista for mid-century homes and Westside families—recurring upkeep and deep cleans north and south of Venice Blvd.',
    url: 'https://spottly.com/locations/mar-vista',
    images: [{ url: 'https://spottly.com/og', width: 1200, height: 630, alt: 'House Cleaning in Mar Vista' }],
  },
  twitter: { card: 'summary_large_image', title: 'House Cleaning in Mar Vista, CA | Spottly', description: 'House cleaning in Mar Vista for mid-century homes and Westside families.', images: ['https://spottly.com/og'] },
}

export default function MarVistaPage() {
  return (
    <LocationPage
      city="Mar Vista"
      citySlug="mar-vista"
      geo={{ lat: 34.0025, lng: -118.4306 }}
      localLead="Mar Vista is one of the Westside's quieter residential pockets — low-rise, leafy, and full of mid-century homes that have been lived in for decades. Spottly cleans throughout the neighborhood, on both sides of the Venice Boulevard divide that defines how Mar Vista is built."
      whySection={
        <p>
          North of Venice Boulevard, Mar Vista is mostly 1950s–70s single-family homes — many of them well-kept mid-century houses on streets like Beethoven, Meier, and Moore. Residents fought up-zoning here for decades, so the area stays low-density and family-oriented, and these older homes accumulate the kind of grime in original kitchens, bathrooms, and baseboards that a periodic deep clean is built for. South of Venice Boulevard is zoned for apartments, so that side brings the renter turnover Mar Vista shares with neighboring Palms. With property values climbing, owners increasingly invest in recurring upkeep to protect the house.
        </p>
      }
      neighborhoods={
        <p>
          The single-family streets north of Venice Boulevard, the apartment blocks to the south, and the stretch toward the 405 — plus bordering{' '}
          <Link href="/locations/palms" className="text-brand-blue hover:underline">Palms</Link>,{' '}
          <Link href="/locations/culver-city" className="text-brand-blue hover:underline">Culver City</Link>,{' '}
          <Link href="/locations/venice-beach" className="text-brand-blue hover:underline">Venice</Link>, and{' '}
          <Link href="/locations/santa-monica" className="text-brand-blue hover:underline">Santa Monica</Link>.
        </p>
      }
      services={[
        { label: 'Recurring cleaning', href: '/services/recurring-cleaning', description: 'Ongoing upkeep for established Mar Vista households.' },
        { label: 'Deep clean (Spottly Clean)', href: '/services/deep-cleaning', description: 'The reset for an aging mid-century kitchen or bath that hasn\'t had a thorough clean in a while.' },
        { label: 'Move-in/move-out', href: '/services/move-in-move-out-cleaning', description: 'For the apartment turnover south of Venice Blvd.' },
        { label: 'Custom cleaning', href: '/services/custom-cleaning', description: 'One-offs and add-ons for your Mar Vista home.' },
      ]}
      faqItems={[
        { question: 'Do you serve the homes north of Venice Boulevard?', answer: "Yes — that's the heart of Mar Vista's single-family area, and a lot of our local work is recurring upkeep and deep cleans for those mid-century homes. We also cover the apartment side south of Venice Blvd." },
        { question: 'My Mar Vista home is older — is a deep clean worth it?', answer: "Often, yes. Mid-century homes that have been lived in for years build up grime in original kitchens, bathrooms, grout, and baseboards that standard cleaning won't lift. A one-time deep clean resets the baseline before you switch to recurring upkeep." },
        { question: 'How fast can you get to Mar Vista?', answer: "Mar Vista is central to our Westside coverage and easy to reach. Booking a few days out is wise for weekends." },
        { question: 'Do you do recurring cleaning for families here?', answer: "Yes — weekly, biweekly, or monthly. Family homes with kids or pets usually do best on a tighter cadence to keep buildup down between visits." },
      ]}
      ctaHeading="Keep your Mar Vista home as solid as the day it was built."
      ctaSubheading="Recurring upkeep or a one-time reset — your call."
      nearbyAreas={[
        { label: 'Palms', href: '/locations/palms' },
        { label: 'Culver City', href: '/locations/culver-city' },
        { label: 'Venice', href: '/locations/venice-beach' },
        { label: 'Santa Monica', href: '/locations/santa-monica' },
      ]}
      authorityLink={{ label: 'Mar Vista Community Council', href: 'https://www.marvista.org/' }}
    />
  )
}
