import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Projects } from '@/components/Projects';
import { Partners } from '@/components/Partners';
import { Testimonials } from '@/components/Testimonials';
import { LatestBlogs } from '@/components/LatestBlogs';
import { CTA } from '@/components/CTA';
import { apiFetch } from '@/lib/api';
import type { ApiResponse, Post, Project, Testimonial, Partner, Service } from '@/types/api';

export const metadata = {
    title: 'M-One Solution Software House | Your True Solution',
    description: 'Tingkatkan visibilitas dan konversi bisnis Anda dengan website profesional dan aplikasi dari M-One Solution. Kami membantu Anda tumbuh secara signifikan di era digital.',
};

async function fetchSafe<T>(endpoint: string, fallback: T): Promise<T> {
    try {
        const res = await apiFetch<ApiResponse<T>>(endpoint);
        return res.data;
    } catch {
        return fallback;
    }
}

export default async function Home() {
    // Fetch all homepage data in parallel
    const [posts, featuredProjects, testimonials, partners, services] = await Promise.all([
        fetchSafe<Post[]>('/posts?limit=10', []),
        fetchSafe<Project[]>('/projects?featured=true', []),
        fetchSafe<Testimonial[]>('/testimonials', []),
        fetchSafe<Partner[]>('/partners', []),
        fetchSafe<Service[]>('/services', []),
    ]);

    return (
        <main style={{ position: 'relative' }}>
            <Hero />
            <About />
            <Services services={services} />
            <Projects projects={featuredProjects} />
            <Partners partners={partners} />
            <Testimonials testimonials={testimonials} />
            <LatestBlogs posts={posts} />
            <CTA />
        </main>
    );
}

