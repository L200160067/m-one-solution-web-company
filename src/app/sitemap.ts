import { MetadataRoute } from 'next';
import { apiFetch } from '@/lib/api';
import type { ApiResponse, Post, Service } from '@/types/api';

const BASE_URL = 'https://www.m-one.mutudev.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        { url: BASE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
        { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
        { url: `${BASE_URL}/portfolio`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
        { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
        { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
        { url: `${BASE_URL}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
        { url: `${BASE_URL}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    ];

    // Fetch posts and services from API
    const [posts, services] = await Promise.all([
        apiFetch<ApiResponse<Post[]>>('/posts').then(r => r.data).catch(() => [] as Post[]),
        apiFetch<ApiResponse<Service[]>>('/services').then(r => r.data).catch(() => [] as Service[]),
    ]);

    // Blog posts
    const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.published_at),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    // Service pages
    const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
        url: `${BASE_URL}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    return [...staticPages, ...blogPages, ...servicePages];
}
