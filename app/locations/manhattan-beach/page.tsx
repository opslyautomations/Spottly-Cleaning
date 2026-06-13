import type { Metadata } from 'next'
import Link from 'next/link'
import LocationPage from '@/components/LocationPage'

export const metadata: Metadata = {
  title: 'House Cleaning in Manhattan Beach, CA | Spottly',
  description: 'House cleaning in Manhattan Beach — Sand, Tree, and Hill sections where salt air meets high standards. Deep and recurring cleans by Spottly.',
  alternates: { canonical: 'https://spottly.com/locations/manhattan-beach' },
  openGraph: {
    title: 'House Cleaning in Manhattan Beach, CA | Spottly',
    description: 'House cleaning in Manhattan Beach—premium single-family homes in the Sand, Tree, and Hill sections where salt air meets high standards.',
    url: 'https://spottly.com/locations/manhattan-beach',
    images: [{ url: 'https://spottly.com/og', width: 1200, height: 630, alt: 'House Cleaning in Manhattan Beach' }],
  },
  twitter: { card: 'summary_large_image', title: 'House Cleaning in Manhattan Beach, CA | Spottly', description: 'House cleaning in Manhattan Beach—premium Sand, Tree, and Hill section homes.', images: ['https://spottly.com/og'] },
}

export default function ManhattanBeachPage() {
  return (
    <LocationPage
      city="Manhattan Beach"
      citySlug="manhattan-beach"
      geo={{ lat: 33.8847, lng: -118.4109 }}
      localLead="Manhattan Beach is the South Bay at its most polished — high-value single-family homes climbing back from the sand, organized into the Sand, Tree, and Hill sections that locals know by name. These are homes people invest heavily in, and the cleaning standard matches."
      whySection={
        <p>
          Two forces shape cleaning in Manhattan Beach: <strong>premium homes and the ocean</strong>. This is an affluent beach city of mostly single-family houses — many large, many recently built or remodeled to a high finish — where owners expect detailed, careful work and often want it on a recurring basis to protect the investment. The coast adds the salt-air factor: homes in the Sand Section especially deal with ocean exposure that works on windows, fixtures, and surfaces. The result leans toward thorough deep cleans and consistent recurring service for high-value homes, rather than the rental-turnover churn of denser neighborhoods.
        </p>
      }
      neighborhoods={
        <p>
          The Sand Section, Tree Section, Hill Section, East Manhattan, and Manhattan Village — plus bordering{' '}
          <Link href="/locations/el-segundo" className="text-brand-blue hover:underline">El Segundo</Link>,{' '}
          <Link href="/locations/redondo-beach" className="text-brand-blue hover:underline">Redondo Beach</Link>, and{' '}
          <Link href="/locations/hawthorne" className="text-brand-blue hover:underline">Hawthorne</Link>.
        </p>
      }
      services={[
        { label: 'Recurring cleaning', href: '/services/recurring-cleaning', description: 'Consistent, detailed upkeep for high-value Manhattan Beach homes.' },
        { label: 'Deep clean (Spottly Clean)', href: '/services/deep-cleaning', description: 'A thorough reset, salt-air buildup included, for Sand and Tree Section homes.' },
        { label: 'Move-in/move-out', href: '/services/move-in-move-out-cleaning', description: 'For home sales and moves.' },
        { label: 'Custom cleaning', href: '/services/custom-cleaning', description: 'Add-ons for your Manhattan Beach home.' },
      ]}
      faqItems={[
        { question: 'Do you serve the Sand, Tree, and Hill sections?', answer: "Yes — all of Manhattan Beach, including the Sand Section near the water, the Tree and Hill sections, East Manhattan, and Manhattan Village." },
        { question: 'My home is large and recently remodeled — can you clean to that standard?', answer: "Yes. Detailed, careful work on high-finish homes is what much of our Manhattan Beach service is, and recurring visits keep that standard consistent rather than resetting it each time." },
        { question: 'Does ocean exposure in the Sand Section need special attention?', answer: "It helps. Salt air works on windows, fixtures, and surfaces in beachfront homes, so a deep clean cuts the buildup and recurring visits keep it from returning." },
        { question: 'How quickly can you reach Manhattan Beach?', answer: "It's part of our South Bay coverage and routine for us to reach. Book ahead for weekend slots, which are popular here." },
      ]}
      ctaHeading="The detailed clean your Manhattan Beach home deserves."
      ctaSubheading="Consistent recurring service and thorough deep cleans."
      nearbyAreas={[
        { label: 'El Segundo', href: '/locations/el-segundo' },
        { label: 'Redondo Beach', href: '/locations/redondo-beach' },
        { label: 'Hawthorne', href: '/locations/hawthorne' },
      ]}
      authorityLink={{ label: 'Manhattan Beach Chamber of Commerce', href: 'https://www.manhattanbeachchamber.com/' }}
    />
  )
}
