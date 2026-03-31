"use client";

import { motion } from 'motion/react';
import { ArrowUpRight, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';
import type { Project } from '@/types/api';
import { Container } from './ui/Container';
import { Section } from './ui/Section';

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              Portofolio
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-slate-900 mb-6">
              Proyek Terkini
            </h2>
            <p className="text-base text-slate-600 leading-relaxed md:pr-4">
              "Inilah jejak perjalanan kami dalam dunia digital. Dari website sekolah hingga aplikasi organisasi, setiap proyek yang kami kerjakan punya cerita dan tantangannya sendiri. Dan dari setiap tantangan itulah, kami belajar merancang solusi yang lebih baik dan lebih efektif."
            </p>
          </motion.div>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 border border-slate-200 text-base font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors whitespace-nowrap"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-slate-100 border border-slate-200">
                {project.image_url ? (
                  <img
                    src={project.image_url}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400">
                    <ImageIcon className="w-12 h-12 opacity-50" />
                  </div>
                )}
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                {project.client_name && (
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                    {project.client_name}
                  </span>
                )}
                
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  
                  {project.project_url && project.project_url !== '#' && (
                    <a 
                      href={project.project_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-slate-100 text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all shadow-sm flex-shrink-0"
                      title="Kunjungi Website"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                </div>
                
                <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed mt-1">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
