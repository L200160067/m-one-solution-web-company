import { apiFetch } from '@/lib/api';
import type { ApiResponse, Service } from '@/types/api';
import ServicesListClient from './ServicesListClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Layanan Jasa IT Sukoharjo | Web, Aplikasi & ERP — M-One Solution',
    description: 'Jasa pembuatan website, aplikasi mobile, dan sistem ERP profesional di Sukoharjo & Solo. Tim berpengalaman M-One Solution. Konsultasi GRATIS sekarang!',
    openGraph: {
        title: 'Layanan Jasa IT Sukoharjo | M-One Solution',
        description: 'Jasa pembuatan website, aplikasi mobile, dan sistem ERP di Sukoharjo & Solo. Konsultasi GRATIS — hubungi sekarang!',
        url: 'https://mone.mutudev.com/services',
        type: 'website',
        images: ['/og-image.jpg'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Layanan Software House Sukoharjo | M-One Solution',
        description: 'Website, aplikasi mobile, dan sistem ERP dari software house terpercaya di Sukoharjo & Solo.',
        images: ['/og-image.jpg'],
    },
};

// Server Component — HTML layanan di-render di server agar bisa diindeks Google
export default async function ServicesPage() {
    let services: Service[] = [];
    let categories: string[] = ['Semua'];

    try {
        const res = await apiFetch<ApiResponse<Service[]>>('/services', { tags: ['services'] });
        services = res.data;
        categories = ['Semua', ...new Set(services.map(s => s.category))];
    } catch {
        // API unavailable — render empty state gracefully
    }

    return (
        <main className="pt-24 pb-16 min-h-screen bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ServicesListClient services={services} categories={categories} />
            </div>
        </main>
    );
}

