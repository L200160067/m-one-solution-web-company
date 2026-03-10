"use client";

import { motion } from 'motion/react';
import { GraduationCap, User as UserIcon } from 'lucide-react';
import type { AlumniGroup } from '@/types/api';

interface AlumniProps {
    groups: AlumniGroup[];
}

export function Alumni({ groups }: AlumniProps) {
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

                {groups.map((group) => (
                    <div key={group.batch_period} className="mb-12 last:mb-0">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-3"
                        >
                            <span className="w-8 h-px bg-blue-400/50" />
                            {group.batch_period}
                        </motion.h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {group.members.map((person, index) => (
                                <motion.div
                                    key={person.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors flex flex-col items-center text-center group"
                                >
                                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-slate-800 group-hover:border-blue-500 transition-colors mb-4 bg-slate-800">
                                        {person.photo_url ? (
                                            <img
                                                src={person.photo_url}
                                                alt={person.name}
                                                loading="lazy"
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                referrerPolicy="no-referrer"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-slate-700 text-slate-500">
                                                <UserIcon className="w-10 h-10 opacity-50" />
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{person.name}</h3>
                                    <p className="text-blue-400 font-medium text-sm mb-1">{person.school}</p>
                                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-slate-300 mt-2">
                                        {person.batch_period}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
