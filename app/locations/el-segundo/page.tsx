import type { Metadata } from 'next'
import Link from 'next/link'
import LocationPage from '@/components/LocationPage'

export const metadata: Metadata = {
  title: 'House Cleaning in El Segundo, CA | Spottly',
  description: 'House cleaning in El Segundo — aerospace and corporate professionals in a small-town beach city south of LAX. Recurring and move-out cleaning by Spottly.',
  alternates: { canonical: 'https://spottly.com/locations/el-segundo' },
  openGraph: {
    title: 'House Cleaning in El Segundo, CA | Spottly',
    description: 'House cleaning in El Segundo—aerospace and corporate professionals in a small-town beach city south of LAX.',
    url: 'https://spottly.com/locations/el-segundo',
    images: [{ url: 'https://spottly.com/og', width: 1200, height: 630, alt: 'House Cleaning in El Segundo' }],
  },
  twitter: { card: 'summary_large_image', title: 'House Cleaning in El Segundo, CA | Spottly', description: 'House cleaning in El Segundo—aerospace and corporate professionals in a small beach city.', images: ['https://spottly.com/og'] },
}

export default function ElSegundoPage() {
  return (
    <LocationPage
      city="El Segundo"
      citySlug="el-segundo"
      geo={{ lat: 33.9192, lng: -118.4165 }}
      localLead="El Segundo is the first city south of LAX, and it pulls off a rare combination — a walkable, small-town downtown on one side, and a corridor of aerospace and Fortune 500 employers on the other, all within reach of the beach. Spottly cleans homes throughout this tight-knit South Bay city."
      whySection={
        <p>
          El Segundo&apos;s cleaning rhythm is driven by its <strong>employers and its scale</strong>. The aerospace and corporate corridor — the Aerospace Corporation, defense contractors, Mattel, and others along the Rosecrans/Continental side — brings relocating professionals, which means move-in/move-out cleaning tied to job moves, plus recurring service for people putting in long corporate hours. The residential core, around Smoky Hollow and the downtown grid off Main Street, is compact and community-oriented, with single-family homes that keep up steady cleaning. Being a small beach-adjacent city, salt air plays a minor role, but here the work is more about busy professional households than coastal grit.
        </p>
      }
      neighborhoods={
        <p>
          Downtown and the Main Street grid, Smoky Hollow, and the residential streets toward the aerospace corridor — plus bordering{' '}
          <Link href="/locations/manhattan-beach" className="text-brand-blue hover:underline">Manhattan Beach</Link>,{' '}
          <Link href="/locations/hawthorne" className="text-brand-blue hover:underline">Hawthorne</Link>, and{' '}
          <Link href="/locations/westchester" className="text-brand-blue hover:underline">Westchester</Link>.
        </p>
      }
      services={[
        { label: 'Recurring cleaning', href: '/services/recurring-cleaning', description: "Upkeep for El Segundo's long-hours aerospace and corporate households." },
        { label: 'Move-in/move-out', href: '/services/move-in-move-out-cleaning', description: 'For relocations tied to the corporate corridor.' },
        { label: 'Deep clean (Spottly Clean)', href: '/services/deep-cleaning', description: 'A reset for a downtown-grid home.' },
        { label: 'Custom cleaning', href: '/services/custom-cleaning', description: 'Add-ons for your El Segundo home.' },
      ]}
      faqItems={[
        { question: "I'm relocating for an aerospace job — can you clean before I move in?", answer: "Yes — a move-in clean before your furniture arrives, then recurring upkeep once you're settled. Corporate relocations are a common reason El Segundo clients book with us." },
        { question: 'Which parts of El Segundo do you serve?', answer: "The downtown Main Street grid, Smoky Hollow, and the residential streets near the corporate corridor — the whole city is within our coverage." },
        { question: 'How quickly can you reach El Segundo?', answer: "It's part of our South Bay coverage near LAX and easy to reach. Book ahead around relocation and lease-turnover windows." },
        { question: 'Do you offer recurring cleaning around a demanding work schedule?', answer: "Yes — weekly, biweekly, or monthly, done while you're at the office if you arrange access. That's a common setup for El Segundo's corporate professionals." },
      ]}
      ctaHeading="Long hours at the office? Come home to a clean house."
      ctaSubheading="Recurring upkeep and relocation-ready move cleans in El Segundo."
      nearbyAreas={[
        { label: 'Manhattan Beach', href: '/locations/manhattan-beach' },
        { label: 'Hawthorne', href: '/locations/hawthorne' },
        { label: 'Westchester', href: '/locations/westchester' },
      ]}
      authorityLink={{ label: 'El Segundo Chamber of Commerce', href: 'https://www.elsegundochamber.com/' }}
    />
  )
}
