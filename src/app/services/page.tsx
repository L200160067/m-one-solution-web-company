import { apiFetch } from '@/lib/api';
import type { ApiResponse, Service } from '@/types/api';
import ServicesListClient from './ServicesListClient';

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

