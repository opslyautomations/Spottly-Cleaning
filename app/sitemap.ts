import type { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blog'

const BASE_URL = 'https://spottly.com'

const servicePages = [
  '/services/recurring-cleaning',
  '/services/deep-cleaning',
  '/services/move-in-move-out-cleaning',
  '/services/custom-cleaning',
]

const locationPages = [
  '/locations/culver-city',
  '/locations/mar-vista',
  '/locations/palms',
  '/locations/playa-del-rey',
  '/locations/playa-vista',
  '/locations/marina-del-rey',
  '/locations/westchester',
  '/locations/santa-monica',
  '/locations/venice-beach',
  '/locations/el-segundo',
  '/locations/manhattan-beach',
  '/locations/redondo-beach',
  '/locations/torrance',
  '/locations/hawthorne',
  '/locations/gardena',
]

const staticPages = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/reviews', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/gallery', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/specials', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    ...staticPages.map(({ path, priority, changeFrequency }) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...servicePages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...locationPages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
    ...blogPosts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.modifiedDate),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
