"use client";

import { useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, User, ArrowUpRight, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import type { Post } from '@/types/api';
import { Container } from './ui/Container';
import { Section } from './ui/Section';

interface LatestBlogsProps {
    posts: Post[];
}

export function LatestBlogs({ posts }: LatestBlogsProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -400 : 400; // menyesuaikan panjang kartu
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <Section className="bg-slate-50 border-t border-slate-100">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                            Berita & Artikel
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-slate-900 mb-6">
                            Wawasan Terbaru
                        </h2>
                        <p className="text-base text-slate-600 leading-relaxed md:pr-4">
                            Tetap udpate dengan berita terbaru, tren teknologi, dan wawasan seputar dunia digital langsung dari tim ahli kami.
                        </p>
                    </motion.div>

                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 border border-slate-200 text-base font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors whitespace-nowrap shadow-sm"
                    >
                        Lihat Semua Artikel
                        <ArrowUpRight className="w-5 h-5" />
                    </Link>
                </div>

                {posts.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <p className="text-slate-600 text-lg">Belum ada artikel terbaru saat ini.</p>
                    </div>
                ) : (
                    <div className="relative group">
                        {/* Tombol Kiri */}
                        <button 
                            onClick={() => scroll('left')}
                            className="hidden md:flex items-center justify-center absolute -left-5 top-[40%] -translate-y-1/2 z-10 p-3 rounded-full bg-white/95 backdrop-blur border border-slate-200 text-slate-600 shadow-xl hover:text-blue-600 hover:border-blue-600 hover:scale-110 transition-all duration-300 focus:outline-none opacity-0 group-hover:opacity-100"
                            aria-label="Geser ke kiri"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        
                        {/* Tombol Kanan */}
                        <button 
                            onClick={() => scroll('right')}
                            className="hidden md:flex items-center justify-center absolute -right-5 top-[40%] -translate-y-1/2 z-10 p-3 rounded-full bg-white/95 backdrop-blur border border-slate-200 text-slate-600 shadow-xl hover:text-blue-600 hover:border-blue-600 hover:scale-110 transition-all duration-300 focus:outline-none opacity-0 group-hover:opacity-100"
                            aria-label="Geser ke kanan"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        <div 
                            ref={scrollContainerRef}
                            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
                        >
                            {posts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col flex-shrink-0 w-[85vw] sm:w-[350px] snap-center"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                                    {post.cover_url ? (
                                        <img
                                            src={post.cover_url}
                                            alt={post.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            referrerPolicy="no-referrer"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400">
                                            <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
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
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors mt-auto"
                                    >
                                        Baca Selengkapnya
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                        </div>
                    </div>
                )}
            </Container>
        </Section>
    );
}
