"use client";

import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServiceDetailClient({ service }: { service: any }) {
    return (
        <main className="pt-24 pb-16 min-h-screen bg-slate-50">
            <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Kembali ke Layanan
                    </Link>

                    <div className="flex items-center gap-4 mb-6">
                        <span className="px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider rounded-full">
                            {service.category}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                        {service.title}
                    </h1>

                    <p className="text-xl text-slate-600 leading-relaxed mb-12 max-w-3xl">
                        {service.shortDescription}
                    </p>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Image Side */}
                        <div className="lg:sticky lg:top-32">
                            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src={service.imageUrl}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="prose prose-lg prose-slate max-w-none">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-0">Tentang Layanan Ini</h2>
                            <p className="text-slate-600 leading-relaxed mb-12 text-lg">
                                {service.fullDescription}
                            </p>

                            <div className="space-y-12 mb-16">
                                {/* Fitur Utama */}
                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-6 mt-0">Fitur Utama</h3>
                                    <ul className="space-y-4 m-0 p-0 list-none">
                                        {service.features.map((feature: string, index: number) => (
                                            <li key={index} className="flex items-start gap-3 m-0 p-0">
                                                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-slate-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Manfaat */}
                                <div className="bg-blue-50 p-8 rounded-3xl shadow-sm border border-blue-100">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-6 mt-0">Manfaat untuk Bisnis Anda</h3>
                                    <ul className="space-y-4 m-0 p-0 list-none">
                                        {service.benefits.map((benefit: string, index: number) => (
                                            <li key={index} className="flex items-start gap-3 m-0 p-0">
                                                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-slate-700">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-slate-900 rounded-3xl p-12 text-center mt-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute -top-[50%] -right-[20%] w-[100%] h-[150%] rounded-full bg-blue-500/20 blur-[100px]" />
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Tertarik dengan Layanan Ini?
                            </h2>
                            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                                Mari diskusikan bagaimana {service.title} dapat membantu mengembangkan bisnis Anda ke level selanjutnya.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-full hover:bg-blue-500 transition-all hover:scale-105 shadow-xl shadow-blue-600/20"
                            >
                                Konsultasi Gratis Sekarang
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </article>
        </main>
    );
}
