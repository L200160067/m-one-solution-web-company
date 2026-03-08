import { motion } from 'motion/react';
import { ArrowRight, Layout, Globe, Briefcase, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Development':
      return <Globe className="w-6 h-6" />;
    case 'Sistem Informasi':
      return <Layout className="w-6 h-6" />;
    case 'Profil Perusahaan':
      return <Briefcase className="w-6 h-6" />;
    case 'Aplikasi Khusus':
      return <Code className="w-6 h-6" />;
    default:
      return <Layout className="w-6 h-6" />;
  }
};

export function Services() {
  // Only show the first 4 services on the home page
  const featuredServices = servicesData.slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6"
          >
            Layanan Kami
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Solusi Digital untuk Bisnis Anda
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Kami menyediakan berbagai layanan pengembangan perangkat lunak yang dirancang khusus untuk memenuhi kebutuhan dan tujuan bisnis Anda.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white text-blue-600 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                {getCategoryIcon(service.category)}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                <Link to={`/services/${service.id}`}>
                  {service.title}
                </Link>
              </h3>
              <p className="text-slate-600 mb-6 md:mb-8 leading-relaxed flex-grow text-sm md:text-base line-clamp-3 md:line-clamp-4">
                {service.shortDescription}
              </p>
              <div className="mt-auto pt-5 md:pt-6 border-t border-slate-200/60">
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group/link text-sm md:text-base"
                >
                  Detail Layanan
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white text-base font-bold rounded-full hover:bg-blue-600 transition-colors shadow-lg"
          >
            Lihat Semua Layanan
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
