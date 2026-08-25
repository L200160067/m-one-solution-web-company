import { Hero } from '@/components/Hero';
import { FastPackages } from '@/components/FastPackages';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import HomepageBelowFold from '@/components/HomepageBelowFold';
import { CTA } from '@/components/CTA';
import { apiFetch } from '@/lib/api';
import type { ApiResponse, Service } from '@/types/api';

export const metadata = {
    title: 'Software House Sukoharjo | Jasa Website & Aplikasi — M-One Solution',
    description: 'Jasa pembuatan website & aplikasi profesional di Sukoharjo, Solo, dan Jawa Tengah. Konsultasi GRATIS — wujudkan transformasi digital bisnis Anda bersama M-One Solution!',
};

async function fetchServices(): Promise<Service[]> {
    try {
        const res = await apiFetch<ApiResponse<Service[]>>('/services', { tags: ['services'] });
        return res.data;
    } catch (err) {
        console.warn('[Home] API fetch failed for /services:', err instanceof Error ? err.message : err);
        return [];
    }
}

export default async function Home() {
    const services = await fetchServices();

    return (
        <main style={{ position: 'relative' }}>
            <Hero />
            <FastPackages />
            <About />
            <Services services={services} />
            <HomepageBelowFold />
            <CTA />
        </main>
    );
}
