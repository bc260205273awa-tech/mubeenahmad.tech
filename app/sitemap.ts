import { MetadataRoute } from 'next'
import { profile } from '@/content/profile'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mubeenahmad.tech'
  const currentDate = new Date().toISOString().split('T')[0]

  const projectRoutes: MetadataRoute.Sitemap = profile.projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: project.featured ? 0.9 : 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...projectRoutes,
  ]
}
