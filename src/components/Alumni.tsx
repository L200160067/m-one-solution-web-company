"use client";

import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Alumni() {
    const alumni = [
        { name: "Bastian", school: "SMK Muhammadiyah 1 Sukoharjo", period: "Batch 2025", image: `${siteConfig.cdnUrl}/images/team/Bastian.webp` },
        { name: "Boneta P", school: "SMK Muhammadiyah 1 Sukoharjo", period: "Batch 2025", image: `${siteConfig.cdnUrl}/images/team/Boneta-P.webp` },
        { name: "Daffa F", school: "SMK Muhammadiyah 1 Sukoharjo", period: "Batch 2025", image: `${siteConfig.cdnUrl}/images/team/Daffa-F.webp` },
        { name: "Denisa R", school: "SMK Muhammadiyah 1 Sukoharjo", period: "Batch 2025", image: `${siteConfig.cdnUrl}/images/team/Denisa-R.webp` },
        { name: "Faza", school: "SMK Muhammadiyah 1 Sukoharjo", period: "Batch 2025", image: `${siteConfig.cdnUrl}/images/team/Faza.webp` },
        { name: "Haikal", school: "SMK Muhammadiyah 1 Sukoharjo", period: "Batch 2025", image: `${siteConfig.cdnUrl}/images/team/Haikal.webp` },
        { name: "Iyan", school: "SMK Muhammadiyah 1 Sukoharjo", period: "Batch 2025", image: `${siteConfig.cdnUrl}/images/team/Iyan.webp` },
        { name: "Zaydan", school: "SMK Muhammadiyah 1 Sukoharjo", period: "Batch 2025", image: `${siteConfig.cdnUrl}/images/team/Zaydan.webp` },
        { name: "Abby", school: "SMK Muhammadiyah 1 Sukoharjo", period: "Batch 2024", image: `${siteConfig.cdnUrl}/images/team/Abby.webp` },
        { name: "Afif", school: "SMK Muhammadiyah 1 Sukoharjo", period: "Batch 2024", image: `${siteConfig.cdnUrl}/images/team/Afif.webp` },
        { name: "Arkan", school: "SMK Muhammadiyah 1 Sukoharjo", period: "Batch 2024", image: `${siteConfig.cdnUrl}/images/team/Arkan.webp` },
        { name: "Daffa D", school: "SMK Muhammadiyah 1 Sukoharjo", period: "Batch 2024", image: `${siteConfig.cdnUrl}/images/team/Daffa-D.webp` },
        { name: "Dzakwan", school: "SMK Muhammadiyah 1 Sukoharjo", period: "Batch 2024", image: `${siteConfig.cdnUrl}/images/team/Dzakwan.webp` },
        { name: "Habib", school: "SMK Muhammadiyah 1 Sukoharjo", period: "Batch 2024", image: `${siteConfig.cdnUrl}/images/team/Habib.webp` },
        { name: "Hanif", school: "SMK Muhammadiyah 1 Sukoharjo", period: "Batch 2024", image: `${siteConfig.cdnUrl}/images/team/Hanif.webp` },
        { name: "Shabri", school: "SMK Muhammadiyah 1 Sukoharjo", period: "Batch 2024", image: `${siteConfig.cdnUrl}/images/team/Shabri.webp` },
        { name: "Yudha", school: "SMK Muhammadiyah 1 Sukoharjo", period: "Batch 2024", image: `${siteConfig.cdnUrl}/images/team/Yudha.webp` }
    ];

    return (
        <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[100px]" />
                <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[100px]" />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 mb-6 shadow-xl shadow-blue-500/20 text-white">
                        <GraduationCap className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Alumni PKL M-One Solution
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Kami bangga telah menjadi bagian dari perjalanan belajar siswa-siswi vokasi berbakat melalui program Praktik Kerja Lapangan (PKL) berkualitas.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {alumni.map((person, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors flex flex-col items-center text-center group"
                        >
                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-slate-800 group-hover:border-blue-500 transition-colors mb-4">
                                <img
                                    src={(person.image as any)?.src || person.image}
                                    alt={person.name}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{person.name}</h3>
                            <p className="text-blue-400 font-medium text-sm mb-1">{person.school}</p>
                            <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-slate-300 mt-2">
                                {person.period}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
