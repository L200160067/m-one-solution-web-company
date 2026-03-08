import { servicesData } from '@/data/services';
import { notFound } from 'next/navigation';
import ServiceDetailClient from './client';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const service = servicesData.find((s) => s.id === id);
    if (!service) return { title: 'Service Not Found' };

    return {
        title: `${service.title} | Layanan M-One Solution`,
        description: service.shortDescription,
        keywords: service.keywords.join(', '),
        openGraph: {
            type: 'article',
            title: `${service.title} | M-One Solution`,
            description: service.shortDescription,
            images: [service.imageUrl],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${service.title} | M-One Solution`,
            description: service.shortDescription,
            images: [service.imageUrl],
        },
    };
}

export async function generateStaticParams() {
    return servicesData.map((service) => ({
        id: service.id,
    }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const service = servicesData.find((s) => s.id === id);

    if (!service) {
        notFound();
    }

    return <ServiceDetailClient service={service} />;
}
