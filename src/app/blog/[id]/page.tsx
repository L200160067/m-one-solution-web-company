import { blogPosts } from '@/data/blog';
import { notFound } from 'next/navigation';
import BlogPostClient from './client';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = blogPosts.find((p) => p.id === id);
    if (!post) return { title: 'Post Not Found' };

    return {
        title: `${post.title} | M-One Solution Blog`,
        description: post.excerpt,
        keywords: `${post.category.toLowerCase()}, m-one solution, blog teknologi, artikel IT`,
        openGraph: {
            type: 'article',
            title: post.title,
            description: post.excerpt,
            images: [post.imageUrl],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [post.imageUrl],
        },
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        id: post.id,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = blogPosts.find(p => p.id === id);

    if (!post) {
        notFound();
    }

    return <BlogPostClient post={post} />;
}
