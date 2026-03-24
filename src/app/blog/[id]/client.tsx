"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Calendar, User, Tag, Twitter, Linkedin, Facebook, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumb } from '@/components/Breadcrumb';

export default function BlogPostClient({ post }: { post: any }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const hasMultipleImages = false; // API currently returns single cover image
    const allImages = [post.cover_url];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    };

    const [currentUrl, setCurrentUrl] = useState('');

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);

    return (
        <main className="pt-24 pb-16 min-h-screen bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <div className="mb-8">
                    <Breadcrumb 
                        items={[
                            { label: 'Blog', href: '/blog' },
                            { label: post.title }
                        ]} 
                    />
                </div>

                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-6 font-medium"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Blog
                </Link>

                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100"
                >
                    <div className="relative aspect-[21/9] bg-slate-200 overflow-hidden group">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentImageIndex}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={allImages[currentImageIndex]}
                                    alt={`${post.title} - Image ${currentImageIndex + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 896px"
                                    className="object-cover"
                                    priority={currentImageIndex === 0}
                                />
                            </motion.div>
                        </AnimatePresence>

                        {hasMultipleImages && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                                    {allImages.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/80'
                                                }`}
                                            aria-label={`Go to image ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    <div className="p-8 md:p-12">
                        <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-full text-slate-700 font-medium w-fit mb-6">
                            <Tag className="w-4 h-4 text-blue-600" />
                            {post.category.name}
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-slate-500 mb-10 pb-8 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                                    {post.author ? post.author.charAt(0) : 'M'}
                                </div>
                                <div>
                                    <p className="font-medium text-slate-900">{post.author ?? 'Tim M-One'}</p>
                                    <p className="text-xs">Author</p>
                                </div>
                            </div>
                            <div className="w-px h-8 bg-slate-200 hidden sm:block"></div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-slate-400" />
                                <div>
                                    <p className="font-medium text-slate-900">
                                        {new Date(post.published_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                                    </p>
                                    <p className="text-xs">Published</p>
                                </div>
                            </div>
                        </div>

                        <div 
                             className="prose prose-lg prose-blue max-w-none mb-12 text-slate-600 leading-relaxed"
                             dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-2 text-slate-700 font-medium">
                                <Share2 className="w-5 h-5" />
                                <span>Share this article:</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <a
                                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(post.title)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#1DA1F2] hover:text-white transition-colors"
                                    aria-label="Share on Twitter"
                                >
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a
                                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(post.title)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#0A66C2] hover:text-white transition-colors"
                                    aria-label="Share on LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#1877F2] hover:text-white transition-colors"
                                    aria-label="Share on Facebook"
                                >
                                    <Facebook className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.article>
            </div>
        </main>
    );
}
