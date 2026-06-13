import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

const BASE_URL = 'https://spottly.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Spottly | House Cleaning in LA\'s Westside & South Bay',
    template: '%s | Spottly',
  },
  description: 'Spottly is a residential house cleaning service across LA\'s Westside and South Bay. Recurring, deep, and move-out cleaning with safe, family-friendly products.',
  openGraph: {
    siteName: 'Spottly',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Spottly',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  telephone: '+13109632302',
  email: 'spottlyservices@gmail.com',
  areaServed: [
    'Culver City, CA', 'Mar Vista, CA', 'Palms, CA', 'Playa del Rey, CA',
    'Playa Vista, CA', 'Marina del Rey, CA', 'Westchester, CA', 'Santa Monica, CA',
    'Venice, CA', 'El Segundo, CA', 'Manhattan Beach, CA', 'Redondo Beach, CA',
    'Torrance, CA', 'Hawthorne, CA', 'Gardena, CA',
  ],
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+13109632302',
    contactType: 'Customer Service',
    email: 'spottlyservices@gmail.com',
    availableLanguage: 'English',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Spottly',
  url: BASE_URL,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
