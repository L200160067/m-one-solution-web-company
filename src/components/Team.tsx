"use client";

import { motion } from 'motion/react';
import { Github, Linkedin } from 'lucide-react';
import { teamData } from '@/data/team';

export function Team() {
    return (
        <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                        Tim Kami
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Orang-orang Hebat di Balik Layar
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Berkenalan dengan para profesional yang berdedikasi tinggi untuk mewujudkan visi digital Anda.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamData.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 bg-slate-200">
                                <img
                                    src={(member.image as any)?.src || member.image}
                                    alt={member.name}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                                    {member.social.linkedin && member.social.linkedin !== '#' && (
                                        <a
                                            href={member.social.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-blue-600 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                                            aria-label={`LinkedIn ${member.name}`}
                                        >
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                    )}
                                    {member.social.github && member.social.github !== '#' && (
                                        <a
                                            href={member.social.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-slate-800 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-100"
                                            aria-label={`GitHub ${member.name}`}
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                                <p className="text-blue-600 font-medium">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
