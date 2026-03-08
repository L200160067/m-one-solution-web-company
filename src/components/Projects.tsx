import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Projects() {
  const projects = [
    {
      title: "Website Sekolah",
      category: "Web Development",
      image: "https://picsum.photos/seed/school/800/600",
      description: "Platform digital interaktif untuk institusi pendidikan."
    },
    {
      title: "Aplikasi Organisasi",
      category: "Mobile App",
      image: "https://picsum.photos/seed/organization/800/600",
      description: "Sistem manajemen terpadu untuk efisiensi organisasi."
    },
    {
      title: "E-Commerce Platform",
      category: "Web App",
      image: "https://picsum.photos/seed/ecommerce/800/600",
      description: "Solusi toko online modern dengan fitur lengkap."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            to="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 border border-slate-200 text-base font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors whitespace-nowrap"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-slate-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold uppercase tracking-wider rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
