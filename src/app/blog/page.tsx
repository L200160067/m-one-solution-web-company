import { blogPosts } from '@/data/blog';
import BlogListClient from './BlogListClient';

const categories = ['Semua', ...new Set(blogPosts.map(post => post.category))];

// Server Component — HTML artikel di-render di server agar bisa diindeks Google
export default function BlogPage() {
    return (
        <main className="pt-24 pb-16 min-h-screen bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <BlogListClient posts={blogPosts} categories={categories} />
            </div>
        </main>
    );
}
