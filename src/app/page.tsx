import { Suspense } from 'react';
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

async function ServicesSection() {
    const services = await fetchServices();
    return <Services services={services} />;
}

function ServicesSkeleton() {
    return (
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block h-7 w-36 bg-slate-100 rounded-full animate-pulse mb-6" />
                    <div className="h-10 w-64 bg-slate-100 rounded-lg animate-pulse mx-auto mb-6" />
                    <div className="h-5 w-80 bg-slate-100 rounded animate-pulse mx-auto" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="bg-slate-50 rounded-3xl p-6 border border-slate-100 h-64 animate-pulse" />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <>
            <Hero />
            <FastPackages />
            <About />
            <Suspense fallback={<ServicesSkeleton />}>
                <ServicesSection />
            </Suspense>
            <HomepageBelowFold />
            <CTA />
        </>
    );
}
