import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Search, Layout, Globe, Briefcase, Code, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { servicesData, serviceCategories } from '../data/services';

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

const getFilterIcon = (category: string) => {
  switch (category) {
    case 'Semua':
      return <Layers className="w-4 h-4" />;
    case 'Development':
      return <Globe className="w-4 h-4" />;
    case 'Sistem Informasi':
      return <Layout className="w-4 h-4" />;
    case 'Profil Perusahaan':
      return <Briefcase className="w-4 h-4" />;
    case 'Aplikasi Khusus':
      return <Code className="w-4 h-4" />;
    default:
      return null;
  }
};

export function ServicesList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Semua');

  // Filter services based on search query and category
  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      const matchesSearch = 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = activeCategory === 'Semua' || service.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <main className="pt-24 pb-16 min-h-screen bg-slate-50">
      <Helmet>
        <title>Layanan & Produk | M-One Solution</title>
        <meta name="description" content="Temukan berbagai layanan dan produk unggulan dari M-One Solution, mulai dari Web Development, Sistem Informasi Sekolah, hingga Aplikasi Web Kustom." />
        <meta name="keywords" content="jasa pembuatan website, web development, sistem informasi sekolah, company profile, custom web application, software house, jasa IT, pembuatan aplikasi" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Layanan & Produk | M-One Solution" />
        <meta property="og:description" content="Temukan berbagai layanan dan produk unggulan dari M-One Solution, mulai dari Web Development, Sistem Informasi Sekolah, hingga Aplikasi Web Kustom." />
        <meta property="og:image" content="https://storage.googleapis.com/a1aa/image/Vqg83s2E822lH6O9zR2n7T60b_q39R2R2n7T60b_q39R2R2n.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Layanan & Produk | M-One Solution" />
        <meta name="twitter:description" content="Temukan berbagai layanan dan produk unggulan dari M-One Solution, mulai dari Web Development, Sistem Informasi Sekolah, hingga Aplikasi Web Kustom." />
        <meta name="twitter:image" content="https://storage.googleapis.com/a1aa/image/Vqg83s2E822lH6O9zR2n7T60b_q39R2R2n7T60b_q39R2R2n.jpg" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {serviceCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-blue-600'
                }`}
              >
                {getFilterIcon(category)}
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {filteredServices.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-slate-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Layanan tidak ditemukan</h3>
            <p className="text-slate-600">
              Maaf, kami tidak dapat menemukan layanan yang cocok dengan pencarian "{searchQuery}".
            </p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('Semua');
              }}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              Hapus Pencarian
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full mb-3">
                      {service.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      <Link to={`/services/${service.id}`}>
                        {service.title}
                      </Link>
                    </h3>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed flex-grow text-sm sm:text-base">
                  {service.shortDescription}
                </p>
                
                <div className="mt-auto pt-5 sm:pt-6 border-t border-slate-100">
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group/link text-sm sm:text-base"
                  >
                    Pelajari Lebih Lanjut
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Persistent CTA Button */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-white via-white to-transparent z-40 flex justify-center pointer-events-none"
      >
        <Link
          to="/contact"
          className="pointer-events-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white text-base md:text-lg font-bold rounded-full hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-blue-600/30"
        >
          Minta Penawaran
          <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.div>
    </main>
  );
}
