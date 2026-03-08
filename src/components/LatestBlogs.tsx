"use client";

import { motion } from 'motion/react';
import { ArrowRight, Calendar, User, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '../data/blog';

export function LatestBlogs() {
    // Get only the 3 most recent posts
    const recentPosts = blogPosts.slice(0, 3);

    return (
        <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 border border-slate-200 text-base font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors whitespace-nowrap"
                    >
                        Lihat Semua Artikel
                        <ArrowUpRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recentPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                                <img
                                    src={(post.imageUrl as any)?.src || post.imageUrl}
                                    alt={post.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <User className="w-4 h-4" />
                                        {post.author}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                    <Link href={`/blog/${post.id}`}>
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">
                                    {post.excerpt}
                                </p>
                                <Link
                                    href={`/blog/${post.id}`}
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
        </section>
    );
}
