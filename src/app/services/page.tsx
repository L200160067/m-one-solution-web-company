import { apiFetch } from '@/lib/api';
import type { ApiResponse, Service } from '@/types/api';
import ServicesListClient from './ServicesListClient';
import { FastPackages } from '@/components/FastPackages';
import { Container } from '@/components/ui/Container';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
    title: 'Jasa Pembuatan Website & Aplikasi Sukoharjo Solo | M-One Solution',
    description: 'Jasa pembuatan website, aplikasi mobile, dan sistem ERP di Sukoharjo & Solo. Tim profesional siap bantu bisnis Anda. Konsultasi GRATIS!',
    keywords: [
        'jasa pembuatan website sukoharjo',
        'software house solo',
        'jasa aplikasi mobile sukoharjo',
        'sistem erp solo',
        'm-one solution layanan',
        'jasa it sukoharjo'
    ],
    openGraph: {
        title: 'Jasa Pembuatan Website & Aplikasi Sukoharjo Solo | M-One Solution',
        description: 'Jasa pembuatan website, aplikasi mobile, dan sistem ERP di Sukoharjo & Solo. Konsultasi GRATIS — hubungi sekarang!',
        url: `${siteConfig.baseUrl}/services`,
        type: 'website',
        images: ['/og-image.jpg'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Jasa Pembuatan Website & Aplikasi Sukoharjo Solo | M-One Solution',
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
        <main className="pt-20 pb-16 min-h-screen bg-slate-50">
            {/* Paket M-One Lite */}
            <FastPackages />

            {/* Separator / M-One Pro */}
            <Container className="mt-20 pt-10 border-t border-slate-200">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 font-semibold mb-4 text-sm">
                        🏢 M-One Pro (Enterprise)
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Butuh Solusi IT Berskala Besar?</div>
                    <p className="text-lg text-slate-600">
                        Selain paket instan di atas, tim Software House kami siap membangun arsitektur sistem kustom tingkat lanjut — mulai dari aplikasi mobile hingga ERP yang disesuaikan dengan proses bisnis Anda.
                    </p>
                </div>
                <ServicesListClient services={services} categories={categories} />
            </Container>
        </main>
    );
}

