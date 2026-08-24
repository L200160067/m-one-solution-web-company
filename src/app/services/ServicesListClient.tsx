"use client";

import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Search, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';
import type { Service } from '@/types/api';
import { EmptyState } from '@/components/ui/EmptyState';
import { WpImage } from '@/components/image/WpImage';

interface ServicesListClientProps {
    services: Service[];
    categories: string[];
}

export default function ServicesListClient({ services, categories }: ServicesListClientProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('Semua');

    const filteredServices = useMemo(() => {
        return services.filter((service) => {
            const matchesSearch =
                service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                service.short_description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = activeCategory === 'Semua' || service.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [services, searchQuery, activeCategory]);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12 pt-12"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                    Layanan Kami
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                    Solusi Digital untuk Bisnis Anda
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
                    Kami menyediakan berbagai layanan pengembangan perangkat lunak yang dirancang khusus untuk memenuhi kebutuhan dan tujuan bisnis Anda.
                </p>

                {/* Search Bar */}
                <div className="max-w-xl mx-auto relative mb-8">
                    <div className="relative flex items-center">
                        <Search className="absolute left-4 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Cari layanan atau produk..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-full border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-700 placeholder:text-slate-400"
                        />
                    </div>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-blue-600'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </motion.div>

            {services.length === 0 ? (
                <EmptyState
                    title="Belum ada data layanan"
                    description="Saat ini belum ada layanan yang ditambahkan. Silakan cek kembali nanti."
                    icon="inbox"
                />
            ) : filteredServices.length === 0 ? (
                <EmptyState
                    title="Layanan tidak ditemukan"
                    description={`Maaf, kami tidak dapat menemukan layanan yang cocok dengan pencarian "${searchQuery}".`}
                    actionLabel="Hapus Pencarian"
                    onAction={() => {
                        setSearchQuery('');
                        setActiveCategory('Semua');
                    }}
                    icon="search"
                />
            ) : (
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {filteredServices.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                                <WpImage
                                    src={service.image_url}
                                    alt={service.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    loading="lazy"
                                    className="object-cover"
                                    fallback={
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400">
                                            <ImageIcon className="w-12 h-12 opacity-50" />
                                        </div>
                                    }
                                />
                            </div>
                            <div className="p-6 sm:p-8 flex flex-col flex-grow">
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 md:mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                                    <Link href={`/services/${service.slug}`}>
                                        {service.title}
                                    </Link>
                                </h2>
                                <p className="text-slate-600 mb-6 md:mb-8 leading-relaxed flex-grow text-sm md:text-base line-clamp-3 md:line-clamp-4">
                                    {service.short_description}
                                </p>
                                <div className="mt-auto pt-5 md:pt-6 border-t border-slate-200/60">
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm md:text-base"
                                    >
                                        Detail Layanan
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Persistent CTA Button */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="fixed bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-white via-white to-transparent z-40 flex justify-center pointer-events-none"
            >
                <Link
                    href="/contact"
                    className="pointer-events-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white text-base md:text-lg font-bold rounded-full hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-blue-600/30"
                >
                    Minta Penawaran
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </motion.div>
        </>
    );
}
