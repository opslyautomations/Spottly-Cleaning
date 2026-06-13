import type { Metadata } from 'next'
import Link from 'next/link'
import LocationPage from '@/components/LocationPage'

export const metadata: Metadata = {
  title: 'House Cleaning in Playa Vista, CA | Spottly',
  description: "House cleaning in Playa Vista—LA's modern Silicon Beach community of new condos and apartments. Move-in cleans and recurring upkeep for busy tech households.",
  alternates: { canonical: 'https://spottly.com/locations/playa-vista' },
  openGraph: {
    title: 'House Cleaning in Playa Vista, CA | Spottly',
    description: "House cleaning in Playa Vista—LA's modern Silicon Beach community of new condos and apartments.",
    url: 'https://spottly.com/locations/playa-vista',
    images: [{ url: 'https://spottly.com/og', width: 1200, height: 630, alt: 'House Cleaning in Playa Vista' }],
  },
  twitter: { card: 'summary_large_image', title: 'House Cleaning in Playa Vista, CA | Spottly', description: "House cleaning in Playa Vista—LA's modern Silicon Beach community.", images: ['https://spottly.com/og'] },
}

export default function PlayaVistaPage() {
  return (
    <LocationPage
      city="Playa Vista"
      citySlug="playa-vista"
      geo={{ lat: 33.9769, lng: -118.4267 }}
      localLead="Playa Vista is the newest neighborhood on this side of LA — a master-planned 'Silicon Beach' community built almost from scratch over the last two decades, full of modern condos, apartments, and the tech offices that gave it the nickname. Cleaning here is a different job than in the older neighborhoods around it."
      whySection={
        <p>
          Because the housing stock is new and high-density, Playa Vista&apos;s cleaning needs skew toward <strong>turnover and maintenance, not deep grime removal</strong> — these aren&apos;t homes with decades of buildup. New residents moving into condos near Runway want a move-in clean before they unpack; tech professionals on long hours want recurring upkeep that fits a busy week. The buildings are dense and modern (in-unit laundry, contemporary finishes), so the work is more about consistency and convenience than scrubbing history out of an old kitchen. It&apos;s the opposite end of the spectrum from neighboring Westchester&apos;s older single-family homes.
        </p>
      }
      neighborhoods={
        <p>
          The Bluffs, the residential blocks around Runway Playa Vista, and the campus-adjacent buildings — plus bordering{' '}
          <Link href="/locations/westchester" className="text-brand-blue hover:underline">Westchester</Link>,{' '}
          <Link href="/locations/marina-del-rey" className="text-brand-blue hover:underline">Marina del Rey</Link>, and{' '}
          <Link href="/locations/culver-city" className="text-brand-blue hover:underline">Culver City</Link>.
        </p>
      }
      services={[
        { label: 'Move-in/move-out', href: '/services/move-in-move-out-cleaning', description: 'A fresh clean before you unpack in a new Playa Vista condo, or a turnover when you go.' },
        { label: 'Recurring cleaning', href: '/services/recurring-cleaning', description: 'Weekly or biweekly upkeep sized for a busy tech household.' },
        { label: 'Deep clean (Spottly Clean)', href: '/services/deep-cleaning', description: 'A thorough reset when a unit needs it.' },
        { label: 'Custom cleaning', href: '/services/custom-cleaning', description: 'Add-ons for your Playa Vista place.' },
      ]}
      faqItems={[
        { question: "I'm moving into a new Playa Vista condo — what should I book?", answer: "A move-in clean before your furniture arrives. Even new units benefit from a clean of cabinets you're about to fill, appliances you're about to use, and floors before you settle in. After that, many residents switch to recurring upkeep." },
        { question: 'Do you serve the apartments and condos near Runway?', answer: "Yes — the residential blocks around Runway Playa Vista and the Bluffs are all within our coverage. High-density buildings are routine for us." },
        { question: 'How fast can you reach Playa Vista?', answer: "It's part of our coastal LAX-area coverage and easy to reach. Book ahead around month-end leasing turnover." },
        { question: 'Can I get recurring cleaning that works around a packed schedule?', answer: "Yes — that's most of our Playa Vista work. Weekly, biweekly, or monthly, done while you're at the office if you arrange access." },
      ]}
      ctaHeading="New place, busy week — we'll keep Playa Vista handled."
      ctaSubheading="Move-in cleans and recurring upkeep for modern condos."
      nearbyAreas={[
        { label: 'Westchester', href: '/locations/westchester' },
        { label: 'Marina del Rey', href: '/locations/marina-del-rey' },
        { label: 'Culver City', href: '/locations/culver-city' },
      ]}
      authorityLink={{ label: 'LAX Coastal Chamber of Commerce', href: 'https://laxcoastal.com/' }}
    />
  )
}
