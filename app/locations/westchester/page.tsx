import type { Metadata } from 'next'
import Link from 'next/link'
import LocationPage from '@/components/LocationPage'

export const metadata: Metadata = {
  title: 'House Cleaning in Westchester, CA | Spottly',
  description: 'House cleaning in Westchester near LAX—single-family homes, LMU student rentals, and airline-crew schedules. Recurring and move-out cleaning by Spottly. Book now.',
  alternates: { canonical: 'https://spottly.com/locations/westchester' },
  openGraph: {
    title: 'House Cleaning in Westchester, CA | Spottly',
    description: 'House cleaning in Westchester near LAX—single-family homes, LMU student rentals, and airline-crew schedules.',
    url: 'https://spottly.com/locations/westchester',
    images: [{ url: 'https://spottly.com/og', width: 1200, height: 630, alt: 'House Cleaning in Westchester' }],
  },
  twitter: { card: 'summary_large_image', title: 'House Cleaning in Westchester, CA | Spottly', description: 'House cleaning in Westchester near LAX—airline-crew schedules, LMU rentals, single-family homes.', images: ['https://spottly.com/og'] },
}

export default function WestchesterPage() {
  return (
    <LocationPage
      city="Westchester"
      citySlug="westchester"
      geo={{ lat: 33.9608, lng: -118.4003 }}
      localLead="Westchester sits right up against LAX, and that proximity defines the neighborhood — it's home to airline and airport workers, Loyola Marymount University, and rows of solid single-family homes on quiet streets just far enough from the runways. Spottly cleans across all of it."
      whySection={
        <p>
          Two patterns drive cleaning in Westchester. First, the <strong>airport workforce</strong>: pilots, flight crews, and airport staff on rotating, irregular schedules who need cleaning that happens whether they&apos;re home or not — a fit for recurring service with arranged access. Second, <strong>Loyola Marymount</strong>: the university brings student and faculty rentals near campus, which means move-in/move-out turnovers around the academic calendar. Underneath both is a stable base of single-family homes — Kentwood and the streets around Westchester Town Center — where families keep up regular cleaning. It&apos;s a more grounded, residential counterpart to the brand-new density of neighboring Playa Vista.
        </p>
      }
      neighborhoods={
        <p>
          Kentwood, the streets around Loyola Marymount and Westchester Town Center, and toward Otis College — plus bordering{' '}
          <Link href="/locations/playa-del-rey" className="text-brand-blue hover:underline">Playa del Rey</Link>,{' '}
          <Link href="/locations/playa-vista" className="text-brand-blue hover:underline">Playa Vista</Link>, and{' '}
          <Link href="/locations/el-segundo" className="text-brand-blue hover:underline">El Segundo</Link>.
        </p>
      }
      services={[
        { label: 'Recurring cleaning', href: '/services/recurring-cleaning', description: 'Upkeep that runs around an airline or airport schedule, home or not.' },
        { label: 'Move-in/move-out', href: '/services/move-in-move-out-cleaning', description: 'For LMU-area rental turnovers and family moves.' },
        { label: 'Deep clean (Spottly Clean)', href: '/services/deep-cleaning', description: 'A reset for an established Kentwood home.' },
        { label: 'Custom cleaning', href: '/services/custom-cleaning', description: 'Add-ons for your Westchester home.' },
      ]}
      faqItems={[
        { question: "I work an irregular airline schedule — can you clean while I'm away?", answer: "Yes. Many Westchester clients are airport and airline staff who arrange access and come home to a finished house. Sort out entry and how to lock up when you book, and recurring visits run on schedule regardless of your shifts." },
        { question: 'Do you serve rentals near Loyola Marymount?', answer: "Yes — the streets around LMU see regular move-in/move-out turnover with the academic calendar, and we handle those alongside the single-family homes in Kentwood and around Westchester Town Center." },
        { question: 'How quickly can you reach Westchester?', answer: "It's part of our coastal LAX-area coverage and quick for us to reach. Book ahead near the start and end of LMU terms, the busy move window." },
        { question: 'Do you offer recurring cleaning for families here?', answer: "Yes — weekly, biweekly, or monthly for the single-family homes that make up much of the neighborhood." },
      ]}
      ctaHeading="Cleaning that works around your flight schedule."
      ctaSubheading="Recurring upkeep, home or away — plus LMU-area turnovers."
      nearbyAreas={[
        { label: 'Playa del Rey', href: '/locations/playa-del-rey' },
        { label: 'Playa Vista', href: '/locations/playa-vista' },
        { label: 'El Segundo', href: '/locations/el-segundo' },
      ]}
      authorityLink={{ label: 'LAX Coastal Chamber of Commerce', href: 'https://laxcoastal.com/' }}
    />
  )
}
