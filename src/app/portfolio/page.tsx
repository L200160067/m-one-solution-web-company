import { Projects } from '@/components/Projects';
import { apiFetch } from '@/lib/api';
import type { ApiResponse, Project } from '@/types/api';

export const metadata = {
    title: 'Portofolio | M-One Solution Software House',
    description: 'Inilah jejak perjalanan kami dalam dunia digital. Dari website sekolah hingga aplikasi organisasi, setiap proyek yang kami kerjakan punya cerita dan tantangannya sendiri.',
    openGraph: {
        title: 'Portofolio | M-One Solution',
        description: 'Inilah jejak perjalanan kami dalam dunia digital. Dari website sekolah hingga aplikasi organisasi, setiap proyek yang kami kerjakan punya cerita dan tantangannya sendiri.',
        url: 'https://www.monesolution.com/portfolio',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Portofolio | M-One Solution',
        description: 'Lihat jejak perjalanan kami dalam dunia digital — website sekolah, aplikasi organisasi, dan lebih banyak lagi.',
    },
};

export default async function PortfolioPage() {
    let projects: Project[] = [];
    try {
        const res = await apiFetch<ApiResponse<Project[]>>('/projects', { tags: ['projects'] });
        projects = res.data;
    } catch {
        // API unavailable — render empty state
    }

    return (
        <main className="pt-20 min-h-screen bg-slate-50">
            <Projects projects={projects} />
        </main>
    );
}

