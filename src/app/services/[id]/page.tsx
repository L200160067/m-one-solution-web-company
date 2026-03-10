import { apiFetch } from '@/lib/api';
import type { ApiResponse, Service } from '@/types/api';
import { notFound } from 'next/navigation';
import ServiceDetailClient from './client';

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

    return {
        title: `${service.title} | Layanan M-One Solution`,
        description: service.short_description,
        keywords: service.keywords.join(', '),
        openGraph: {
            type: 'article',
            title: `${service.title} | M-One Solution`,
            description: service.short_description,
            images: [service.image_url],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${service.title} | M-One Solution`,
            description: service.short_description,
            images: [service.image_url],
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

    return <ServiceDetailClient service={service} />;
}

