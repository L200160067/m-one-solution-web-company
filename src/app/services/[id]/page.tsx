import { apiFetch } from '@/lib/api';
import type { ApiResponse, Service } from '@/types/api';
import { notFound } from 'next/navigation';
import ServiceDetailClient from './client';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

async function getService(slug: string): Promise<Service | null> {
    try {
        const res = await apiFetch<ApiResponse<Service>>(`/services/${slug}`);
        return res.data;
    } catch {
        return null;
    }
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id: slug } = await params;
    const service = await getService(slug);
    if (!service) return { title: 'Service Not Found' };

    const title = `${service.title} | Layanan M-One Solution`;
    const description = service.short_description;
    const url = `${siteConfig.baseUrl}/services/${slug}`;
    const image = service.image_url || `${siteConfig.baseUrl}/og-image.png`;

    return {
        title,
        description,
        keywords: service.keywords.join(', '),
        alternates: { canonical: url },
        openGraph: {
            type: 'website',
            title: `${service.title} | M-One Solution`,
            description,
            url,
            images: [{ url: image, width: 1200, height: 630, alt: service.title }],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${service.title} | M-One Solution`,
            description,
            images: [image],
        },
    };
}

export async function generateStaticParams() {
    try {
        const res = await apiFetch<ApiResponse<Service[]>>('/services');
        return res.data.map((service) => ({ id: service.slug }));
    } catch {
        return [];
    }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id: slug } = await params;
    const service = await getService(slug);

    if (!service) {
        notFound();
    }

    const pageUrl = `${siteConfig.baseUrl}/services/${slug}`;

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.short_description,
        provider: {
            '@type': 'Organization',
            name: 'M-One Solution',
            url: siteConfig.baseUrl,
        },
        url: pageUrl,
        image: service.image_url || `${siteConfig.baseUrl}/og-image.png`,
        breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Beranda',
                    item: `${siteConfig.baseUrl}/`,
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Layanan',
                    item: `${siteConfig.baseUrl}/services`,
                },
                {
                    '@type': 'ListItem',
                    position: 3,
                    name: service.title,
                    item: pageUrl,
                },
            ],
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <ServiceDetailClient service={service} />
        </>
    );
}
