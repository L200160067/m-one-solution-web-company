import { apiFetch } from '@/lib/api';
import type { ApiResponse, Post } from '@/types/api';
import BlogListClient from './BlogListClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog & Artikel Teknologi | Tips Digital — M-One Solution',
    description: 'Baca artikel seputar website, aplikasi, ERP, dan transformasi digital untuk bisnis dari tim M-One Solution — software house di Sukoharjo & Solo.',
    keywords: 'blog teknologi, artikel IT, website development, transformasi digital, software house sukoharjo, tips digital marketing',
    openGraph: {
        title: 'Blog & Artikel Teknologi | M-One Solution',
        description: 'Tips dan wawasan seputar website, aplikasi, dan transformasi digital dari software house Sukoharjo — M-One Solution.',
        url: 'https://mone.mutudev.com/blog',
        type: 'website',
        images: ['/og-image.jpg'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Blog Teknologi | M-One Solution Software House',
        description: 'Artikel seputar website, aplikasi, dan transformasi digital untuk bisnis di Sukoharjo, Solo, dan sekitarnya.',
        images: ['/og-image.jpg'],
    },
};

// Server Component — HTML artikel di-render di server agar bisa diindeks Google
export default async function BlogPage() {
    let posts: Post[] = [];
    let categories: string[] = ['Semua'];

    try {
        const res = await apiFetch<ApiResponse<Post[]>>('/posts', { tags: ['posts'] });
        posts = res.data;
        categories = ['Semua', ...new Set(posts.map(post => post.category.name))];
    } catch (error) {
        console.error("Failed to fetch posts in BlogPage:", error);
        // API unavailable — render empty state gracefully
    }

    return (
        <main className="pt-24 pb-16 min-h-screen bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <BlogListClient posts={posts} categories={categories} />
            </div>
        </main>
    );
}
