import { apiFetch } from '@/lib/api';
import type { ApiResponse, Post } from '@/types/api';
import { notFound } from 'next/navigation';
import BlogPostClient from './client';
import type { Metadata } from 'next';

const BASE_URL = 'https://mone.mutudev.com';

async function getPost(slug: string): Promise<Post | null> {
    try {
        const res = await apiFetch<ApiResponse<Post>>(`/posts/${slug}`);
        return res.data;
    } catch {
        return null;
    }
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id: slug } = await params;
    const post = await getPost(slug);
    if (!post) return { title: 'Artikel Tidak Ditemukan' };

    const title = post.meta_title || `${post.title} | M-One Solution Blog`;
    const description = post.meta_description || post.excerpt;
    const url = `${BASE_URL}/blog/${slug}`;
    const image = post.cover_url || `${BASE_URL}/og-image.jpg`;

    return {
        title,
        description,
        keywords: `${post.category.name.toLowerCase()}, m-one solution, blog teknologi, artikel IT`,
        alternates: { canonical: url },
        openGraph: {
            type: 'article',
            title: post.title,
            description,
            url,
            images: [{ url: image, width: 1200, height: 630, alt: post.title }],
            publishedTime: post.published_at,
            authors: post.author ? [post.author] : ['Tim M-One Solution'],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description,
            images: [image],
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

    const pageUrl = `${BASE_URL}/blog/${slug}`;

    // NewsArticle Schema JSON-LD — injected server-side so Google reads it immediately
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: post.title,
        description: post.meta_description || post.excerpt,
        image: post.cover_url ? [post.cover_url] : undefined,
        datePublished: post.published_at,
        dateModified: post.published_at,
        author: [
            {
                '@type': 'Person',
                name: post.author || 'Tim M-One Solution',
            },
        ],
        publisher: {
            '@type': 'Organization',
            name: 'M-One Solution',
            url: BASE_URL,
            logo: {
                '@type': 'ImageObject',
                url: `${BASE_URL}/logo.png`,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': pageUrl,
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <BlogPostClient post={post} />
        </>
    );
}

