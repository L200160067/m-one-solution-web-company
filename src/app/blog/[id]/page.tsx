import { apiFetch } from '@/lib/api';
import type { ApiResponse, Post } from '@/types/api';
import { notFound } from 'next/navigation';
import BlogPostClient from './client';

async function getPost(slug: string): Promise<Post | null> {
    try {
        const res = await apiFetch<ApiResponse<Post>>(`/posts/${slug}`);
        return res.data;
    } catch {
        return null;
    }
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id: slug } = await params;
    const post = await getPost(slug);
    if (!post) return { title: 'Post Not Found' };

    return {
        title: `${post.title} | M-One Solution Blog`,
        description: post.excerpt,
        keywords: `${post.category.name.toLowerCase()}, m-one solution, blog teknologi, artikel IT`,
        openGraph: {
            type: 'article',
            title: post.title,
            description: post.excerpt,
            images: [post.cover_url],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [post.cover_url],
        },
    };
}

export async function generateStaticParams() {
    try {
        const res = await apiFetch<ApiResponse<Post[]>>('/posts');
        return res.data.map((post) => ({ id: post.slug }));
    } catch {
        return [];
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id: slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    return <BlogPostClient post={post} />;
}

