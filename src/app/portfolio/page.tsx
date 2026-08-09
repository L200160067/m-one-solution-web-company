import { Projects } from '@/components/Projects';
import { apiFetch } from '@/lib/api';
import type { ApiResponse, Project } from '@/types/api';
import { siteConfig } from '@/config/site';

export const metadata = {
    title: 'Portofolio Proyek | Software House Sukoharjo — M-One Solution',
    description: 'Lihat proyek-proyek yang telah kami kerjakan — website sekolah, aplikasi organisasi, sistem informasi, dan lebih banyak. Software house Sukoharjo & Solo.',
    openGraph: {
        title: 'Portofolio | M-One Solution Software House Sukoharjo',
        description: 'Proyek website, aplikasi, dan sistem digital yang telah dikerjakan M-One Solution untuk klien di Sukoharjo, Solo, dan sekitarnya.',
        url: `${siteConfig.baseUrl}/portfolio`,
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

    const pageUrl = `${siteConfig.baseUrl}/portfolio`;

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Portofolio Proyek',
        description: metadata.description,
        url: pageUrl,
        provider: {
            '@type': 'Organization',
            name: 'M-One Solution',
            url: siteConfig.baseUrl,
        },
        breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${siteConfig.baseUrl}/` },
                { '@type': 'ListItem', position: 2, name: 'Portofolio', item: pageUrl },
            ],
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <main className="pt-20 min-h-screen bg-slate-50">
                <Projects projects={projects} />
            </main>
        </>
    );
}
