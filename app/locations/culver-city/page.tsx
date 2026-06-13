import type { Metadata } from 'next'
import Link from 'next/link'
import LocationPage from '@/components/LocationPage'

export const metadata: Metadata = {
  title: 'House Cleaning in Culver City, CA | Spottly',
  description: 'House cleaning in Culver City for busy studio and tech professionals—recurring, deep, and move-out cleaning across Downtown, Fox Hills & beyond. Book today.',
  alternates: { canonical: 'https://spottly.com/locations/culver-city' },
  openGraph: {
    title: 'House Cleaning in Culver City, CA | Spottly',
    description: 'House cleaning in Culver City for busy studio and tech professionals—recurring, deep, and move-out cleaning across Downtown, Fox Hills & beyond.',
    url: 'https://spottly.com/locations/culver-city',
    images: [{ url: 'https://spottly.com/og/culver-city.png', width: 1200, height: 630, alt: 'House Cleaning in Culver City' }],
  },
  twitter: { card: 'summary_large_image', title: 'House Cleaning in Culver City, CA | Spottly', description: 'House cleaning in Culver City for busy studio and tech professionals.', images: ['https://spottly.com/og/culver-city.png'] },
}

export default function CulverCityPage() {
  return (
    <LocationPage
      city="Culver City"
      citySlug="culver-city"
      geo={{ lat: 34.0211, lng: -118.3965 }}
      localLead="Culver City packs a lot into a few square miles — historic studio lots, a rebuilt downtown, and tech offices that pulled in a wave of professionals who don't have a free Saturday to scrub a bathroom. Spottly cleans homes across the city, from the bungalows around Carlson Park to the new apartments near the Arts District."
      whySection={
        <p>
          Culver City&apos;s housing splits two ways, and Spottly handles both. The older single-family pockets — Carlson Park, Sunkist Park, McManus — are mid-century homes where built-up grime in original kitchens and baths calls for a periodic deep reset. The newer high-density buildings near downtown and the Ivy Station/Arts District corridor are rental-heavy and turn over fast, which means a steady stream of move-in/move-out cleans. The common thread is time: between the studios (Sony, the old MGM lot) and the tech offices (Amazon, Apple, HBO), this is a work-long-hours city, and recurring cleaning is what keeps homes from sliding.
        </p>
      }
      neighborhoods={
        <p>
          Downtown Culver City, the Arts District, Fox Hills, Blair Hills, Carlson Park, Sunkist Park, and McManus — plus bordering{' '}
          <Link href="/locations/palms" className="text-brand-blue hover:underline">Palms</Link>,{' '}
          <Link href="/locations/mar-vista" className="text-brand-blue hover:underline">Mar Vista</Link>, and{' '}
          <Link href="/locations/marina-del-rey" className="text-brand-blue hover:underline">Marina del Rey</Link>.
        </p>
      }
      services={[
        { label: 'Recurring cleaning', href: '/services/recurring-cleaning', description: 'Weekly or biweekly upkeep for Culver City\'s long-hours studio and tech households.' },
        { label: 'Deep clean (Spottly Clean)', href: '/services/deep-cleaning', description: 'The reset for an original Carlson Park kitchen or a long-overdue baseboard-and-grout scrub.' },
        { label: 'Move-in/move-out', href: '/services/move-in-move-out-cleaning', description: 'Turning over an Arts District apartment or Fox Hills condo.' },
        { label: 'Custom cleaning', href: '/services/custom-cleaning', description: 'Add-ons and one-offs for your Culver City place.' },
      ]}
      faqItems={[
        { question: 'Which Culver City neighborhoods do you serve?', answer: "All of them — Downtown, the Arts District, Fox Hills, Blair Hills, Carlson Park, Sunkist Park, and McManus, plus the apartment corridors near Ivy Station. If you're inside Culver City limits, we clean there." },
        { question: 'Do you clean apartments and condos, not just houses?', answer: "Yes. A large share of Culver City cleaning is apartments and condos near downtown — recurring upkeep for renters and full move-in/move-out turnovers. Smaller units are quoted the same way: by size and scope." },
        { question: 'How quickly can a cleaner reach Culver City?', answer: "Culver City sits in the middle of our Westside coverage, so it's one of our faster areas to reach. Book ahead for month-end move-outs, which fill quickly." },
        { question: 'Do you offer recurring plans for Culver City rentals?', answer: "Yes — weekly, biweekly, or monthly, billed at a lower per-visit rate than one-time cleans. Popular with tenants who want the unit consistently ready and with owners maintaining a leased property." },
      ]}
      ctaHeading="Reclaim your weekend in Culver City."
      ctaSubheading="Tell us your home and your schedule and we'll handle the cleaning."
      nearbyAreas={[
        { label: 'Palms', href: '/locations/palms' },
        { label: 'Mar Vista', href: '/locations/mar-vista' },
        { label: 'Marina del Rey', href: '/locations/marina-del-rey' },
      ]}
      authorityLink={{ label: 'Culver City Chamber of Commerce', href: 'https://www.culvercitychamber.com/' }}
    />
  )
}
