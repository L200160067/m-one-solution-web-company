"use client";

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, User, ChevronLeft, ChevronRight, Search, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Post } from '@/types/api';

interface BlogListClientProps {
    posts: Post[];
    categories: string[];
}

export default function BlogListClient({ posts, categories }: BlogListClientProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('Semua');
    const postsPerPage = 6;

    const filteredPosts = useMemo(() => {
        const query = searchQuery.toLowerCase();
        return posts.filter(post => {
            const matchesSearch =
                post.title.toLowerCase().includes(query) ||
                (post.content ?? '').toLowerCase().includes(query) ||
                post.excerpt.toLowerCase().includes(query);
            const matchesCategory = activeCategory === 'Semua' || post.category.name === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [posts, searchQuery, activeCategory]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12 pt-12"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                    Our Blog
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                    Berita &amp; Artikel Terbaru
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
                    Dapatkan wawasan, tips, dan berita terbaru seputar dunia teknologi, pengembangan web, dan aplikasi mobile dari tim ahli kami.
                </p>

                {/* Search Bar */}
                <div className="max-w-xl mx-auto relative mb-8">
                    <div className="relative flex items-center">
                        <Search className="absolute left-4 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Cari artikel berdasarkan judul atau konten..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="w-full pl-12 pr-4 py-4 rounded-full border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-700 placeholder:text-slate-400"
                        />
                    </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setActiveCategory(category);
                                setCurrentPage(1);
                            }}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-blue-600'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </motion.div>

            {posts.length === 0 ? (
                <div className="text-center py-20 max-w-2xl mx-auto bg-white rounded-3xl border border-slate-100 shadow-sm">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Calendar className="w-10 h-10 text-slate-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Belum ada artikel</h3>
                    <p className="text-slate-600 mb-6">
                        Saat ini belum ada artikel yang dipublikasikan. Silakan cek kembali nanti.
                    </p>
                </div>
            ) : filteredPosts.length === 0 ? (
                <div className="text-center py-20">
                    <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Search className="w-10 h-10 text-slate-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Tidak ada artikel ditemukan</h3>
                    <p className="text-slate-600">
                        Maaf, kami tidak dapat menemukan artikel yang cocok dengan pencarian &quot;{searchQuery}&quot;.
                    </p>
                    <button
                        onClick={() => {
                            setSearchQuery('');
                            setActiveCategory('Semua');
                            setCurrentPage(1);
                        }}
                        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
                    >
                        Hapus Filter
                    </button>
                </div>
            ) : (
                <>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {currentPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                                    {post.cover_url ? (
                                        <Image
                                            src={post.cover_url}
                                            alt={post.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400 p-8 text-center">
                                            <ImageIcon className="w-12 h-12 mb-4 opacity-50" />
                                        </div>
                                    )}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                                            {post.category.name}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-4 h-4" />
                                            {new Date(post.published_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                                        </div>
                                        {post.author && (
                                            <div className="flex items-center gap-1.5">
                                                <User className="w-4 h-4" />
                                                {post.author}
                                            </div>
                                        )}
                                    </div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors mt-auto"
                                    >
                                        Read More
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-2">
                            <button
                                onClick={() => paginate(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                aria-label="Previous page"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                                <button
                                    key={number}
                                    onClick={() => paginate(number)}
                                    className={`w-10 h-10 rounded-lg font-medium transition-colors ${currentPage === number
                                        ? 'bg-blue-600 text-white border border-blue-600'
                                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                                        }`}
                                >
                                    {number}
                                </button>
                            ))}

                            <button
                                onClick={() => paginate(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                aria-label="Next page"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    )}
                </>
            )}
        </>
    );
}
