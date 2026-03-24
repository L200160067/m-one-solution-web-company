import { Projects } from '@/components/Projects';
import { apiFetch } from '@/lib/api';
import type { ApiResponse, Project } from '@/types/api';

export const metadata = {
    title: 'Portofolio Proyek | Software House Sukoharjo — M-One Solution',
    description: 'Lihat proyek-proyek yang telah kami kerjakan — website sekolah, aplikasi organisasi, sistem informasi, dan lebih banyak. Software house Sukoharjo & Solo.',
    openGraph: {
        title: 'Portofolio | M-One Solution Software House Sukoharjo',
        description: 'Proyek website, aplikasi, dan sistem digital yang telah dikerjakan M-One Solution untuk klien di Sukoharjo, Solo, dan sekitarnya.',
        url: 'https://mone.mutudev.com/portfolio',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Portofolio | M-One Solution Software House',
        description: 'Proyek website, aplikasi, dan sistem digital dari M-One Solution — software house di Sukoharjo, Jawa Tengah.',
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

