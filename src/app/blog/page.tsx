import { apiFetch } from '@/lib/api';
import type { ApiResponse, Post } from '@/types/api';
import BlogListClient from './BlogListClient';

// Server Component — HTML artikel di-render di server agar bisa diindeks Google
export default async function BlogPage() {
    let posts: Post[] = [];
    let categories: string[] = ['Semua'];

    try {
        const res = await apiFetch<ApiResponse<Post[]>>('/posts');
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
