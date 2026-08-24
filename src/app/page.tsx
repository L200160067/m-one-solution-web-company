import { Hero } from '@/components/Hero';
import { FastPackages } from '@/components/FastPackages';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import HomepageBelowFold from '@/components/HomepageBelowFold';
import { CTA } from '@/components/CTA';
import { apiFetch } from '@/lib/api';
import type { ApiResponse, Post, Project, Testimonial, Partner, Service } from '@/types/api';
import { homepageBlocks } from '@/config/marketing';
import { siteConfig } from '@/config/site';

export const metadata = {
    title: 'Software House Sukoharjo | Jasa Website & Aplikasi — M-One Solution',
    description: 'Jasa pembuatan website & aplikasi profesional di Sukoharjo, Solo, dan Jawa Tengah. Konsultasi GRATIS — wujudkan transformasi digital bisnis Anda bersama M-One Solution!',
};

async function fetchSafe<T>(endpoint: string, fallback: T, tags?: string[]): Promise<T> {
    try {
        const res = await apiFetch<ApiResponse<T>>(endpoint, { tags });
        return res.data;
    } catch (err) {
        // Log in server so you can see in Netlify deploy logs which endpoint failed
        console.warn(`[Home] API fetch failed for ${endpoint}:`, err instanceof Error ? err.message : err);
        return fallback;
    }
}

export default async function Home() {
    // Fetch all homepage data in parallel
    const [posts, featuredProjects, testimonials, partners, services] = await Promise.all([
        fetchSafe<Post[]>('/posts?limit=10', [], ['posts']),
        fetchSafe<Project[]>('/projects?featured=true', [], ['projects']),
        fetchSafe<Testimonial[]>('/testimonials', [], ['testimonials']),
        fetchSafe<Partner[]>('/partners', [], ['partners']),
        fetchSafe<Service[]>('/services', [], ['services']),
    ]);

    return (
        <main style={{ position: 'relative' }}>
            <Hero />
            <FastPackages />
            <About />
            <Services services={services} />
            <HomepageBelowFold
              projects={featuredProjects}
              partners={partners}
              testimonials={testimonials}
              posts={posts}
            />
            <CTA />
        </main>
    );
}

