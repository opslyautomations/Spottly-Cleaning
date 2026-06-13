import type { Metadata } from 'next'
import Link from 'next/link'
import LocationPage from '@/components/LocationPage'

export const metadata: Metadata = {
  title: 'House Cleaning in Venice, CA | Spottly',
  description: 'House cleaning in Venice—eclectic older homes, the canals, and a heavy short-term-rental market off Abbot Kinney. Turnover and recurring cleans by Spottly. Book now.',
  alternates: { canonical: 'https://spottly.com/locations/venice-beach' },
  openGraph: {
    title: 'House Cleaning in Venice, CA | Spottly',
    description: 'House cleaning in Venice—eclectic older homes, the canals, and a heavy short-term-rental market off Abbot Kinney.',
    url: 'https://spottly.com/locations/venice-beach',
    images: [{ url: 'https://spottly.com/og/venice-beach.png', width: 1200, height: 630, alt: 'House Cleaning in Venice' }],
  },
  twitter: { card: 'summary_large_image', title: 'House Cleaning in Venice, CA | Spottly', description: 'House cleaning in Venice—the canals, Abbot Kinney, and short-term-rental turnovers.', images: ['https://spottly.com/og/venice-beach.png'] },
}

export default function VeniceBeachPage() {
  return (
    <LocationPage
      city="Venice (Venice Beach)"
      citySlug="venice-beach"
      geo={{ lat: 33.9850, lng: -118.4695 }}
      localLead="Venice is unlike anywhere else on the Westside — the canals, the boardwalk, Abbot Kinney, and a housing stock as eclectic as the neighborhood itself, from century-old cottages to modern rebuilds and tech-money remodels. Spottly cleans across all of it, from the canal walk streets to the blocks off Lincoln."
      whySection={
        <p>
          Venice runs on <strong>short-term rentals and turnover</strong>, layered over older, quirky housing. The tourism around Ocean Front Walk and Abbot Kinney feeds a heavy Airbnb and vacation-rental market, which means constant move-in/move-out and between-guest cleaning. The older homes — bungalows, canal houses, converted units in Oakwood — carry the kind of age and character that benefits from periodic deep cleans, while the tech presence on the north end brings professionals who want recurring upkeep. Add the coastal salt air, and Venice asks for cleaning that handles both frequent turnovers and homes with history.
        </p>
      }
      neighborhoods={
        <p>
          The Venice Canals, Abbot Kinney, Oakwood, the Marina Peninsula side, and the walk streets near Ocean Front Walk — plus bordering{' '}
          <Link href="/locations/santa-monica" className="text-brand-blue hover:underline">Santa Monica</Link>,{' '}
          <Link href="/locations/marina-del-rey" className="text-brand-blue hover:underline">Marina del Rey</Link>, and{' '}
          <Link href="/locations/mar-vista" className="text-brand-blue hover:underline">Mar Vista</Link>.
        </p>
      }
      services={[
        { label: 'Move-in/move-out', href: '/services/move-in-move-out-cleaning', description: 'The core Venice job: resetting short-term and vacation rentals between guests.' },
        { label: 'Recurring cleaning', href: '/services/recurring-cleaning', description: 'Upkeep for residents and the north-end tech crowd.' },
        { label: 'Deep clean (Spottly Clean)', href: '/services/deep-cleaning', description: 'A reset for an older canal-area cottage or bungalow.' },
        { label: 'Custom cleaning', href: '/services/custom-cleaning', description: 'One-offs for your Venice place.' },
      ]}
      faqItems={[
        { question: 'Do you clean short-term and vacation rentals in Venice?', answer: "Yes — between-guest and move-out cleaning is a big part of our Venice work given the rental market off Abbot Kinney and the boardwalk. We reset the unit fully, inside cabinets and appliances included." },
        { question: 'Do you serve the canal-area homes?', answer: "Yes — the Venice Canals, Oakwood, Abbot Kinney, and the walk streets near Ocean Front Walk are all within our coverage, older homes included." },
        { question: 'My Venice place is an older home — can you handle that?', answer: "Yes. Older bungalows and converted units benefit from a periodic deep clean to lift age- and coast-related buildup, after which recurring upkeep keeps it maintained." },
        { question: 'How quickly can you reach Venice?', answer: "It's part of our coastal Westside coverage and routine for us to reach. Book ahead in summer, the peak for rental turnover." },
      ]}
      ctaHeading="From canal cottages to boardwalk rentals — Venice, handled."
      ctaSubheading="Fast turnovers and recurring upkeep."
      nearbyAreas={[
        { label: 'Santa Monica', href: '/locations/santa-monica' },
        { label: 'Marina del Rey', href: '/locations/marina-del-rey' },
        { label: 'Mar Vista', href: '/locations/mar-vista' },
      ]}
      authorityLink={{ label: 'Venice Chamber of Commerce', href: 'https://venicechamber.net/' }}
    />
  )
}
