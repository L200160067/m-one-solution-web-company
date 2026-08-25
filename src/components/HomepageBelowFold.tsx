import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { apiFetch } from '@/lib/api';
import type { ApiResponse, Post, Project, Testimonial, Partner } from '@/types/api';
import { HomepageBelowFoldSkeleton } from './ui/HomepageBelowFoldSkeleton';

const DynamicProjects = dynamic(
    () => import('@/components/Projects').then((mod) => mod.Projects),
    { ssr: true, loading: () => <div className="bg-slate-100 h-96 animate-pulse rounded-2xl" aria-hidden="true" /> }
);
const DynamicPartners = dynamic(
    () => import('@/components/Partners').then((mod) => mod.Partners),
    { ssr: true, loading: () => <div className="bg-slate-900 h-40 animate-pulse rounded-2xl" aria-hidden="true" /> }
);
const DynamicTestimonials = dynamic(
    () => import('@/components/Testimonials').then((mod) => mod.Testimonials),
    { ssr: true, loading: () => <div className="bg-slate-800 h-80 animate-pulse rounded-2xl" aria-hidden="true" /> }
);
const DynamicLatestBlogs = dynamic(
    () => import('@/components/LatestBlogs').then((mod) => mod.LatestBlogs),
    { ssr: true, loading: () => <div className="bg-slate-100 h-96 animate-pulse rounded-2xl" aria-hidden="true" /> }
);

async function fetchSafe<T>(endpoint: string, fallback: T, tags?: string[]): Promise<T> {
    try {
        const res = await apiFetch<ApiResponse<T>>(endpoint, { tags });
        return res.data;
    } catch (err) {
        console.warn(`[HomepageBelowFold] API fetch failed for ${endpoint}:`, err instanceof Error ? err.message : err);
        return fallback;
    }
}

async function BelowFoldData() {
    const [projects, partners, testimonials, posts] = await Promise.all([
        fetchSafe<Project[]>('/projects?featured=true', [], ['projects']),
        fetchSafe<Partner[]>('/partners', [], ['partners']),
        fetchSafe<Testimonial[]>('/testimonials', [], ['testimonials']),
        fetchSafe<Post[]>('/posts?limit=10', [], ['posts']),
    ]);

    return (
        <>
            <DynamicProjects projects={projects} />
            <DynamicPartners partners={partners} />
            <DynamicTestimonials testimonials={testimonials} />
            <DynamicLatestBlogs posts={posts} />
        </>
    );
}

export default function HomepageBelowFold() {
    return (
        <Suspense fallback={<HomepageBelowFoldSkeleton />}>
            <BelowFoldData />
        </Suspense>
    );
}
