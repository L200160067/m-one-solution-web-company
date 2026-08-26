import { ArrowRight, Layout, Globe, Briefcase, Code, Database, ShoppingCart, GraduationCap, Smartphone, Monitor, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import type { Service } from '@/types/api';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { EmptyState } from '@/components/ui/EmptyState';

interface ServicesProps {
  services: Service[];
}

const ICON_MAP: Record<string, LucideIcon> = {
    Globe,
    Layout,
    Briefcase,
    Code,
    Database,
    'ShoppingCart': ShoppingCart,
    'GraduationCap': GraduationCap,
    Smartphone,
    Monitor,
};

const getCategoryIcon = (category: string, iconName?: string) => {
    if (iconName && ICON_MAP[iconName]) {
        const Icon = ICON_MAP[iconName];
        return <Icon className="w-6 h-6" />;
    }

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

export function Services({ services }: ServicesProps) {
  const featuredServices = services.slice(0, 4);

  return (
    <Section className="bg-white relative overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6">
            Layanan Digital Kami
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-4xl font-bold text-slate-900 mb-6">
            Solusi Digital untuk Bisnis Anda
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Hemat waktu operasional, percepat layanan pelanggan, dan rapikan data bisnis Anda dalam satu sistem yang bisa diakses kapan saja.
          </p>
        </div>

        {featuredServices.length === 0 ? (
          <EmptyState
            title="Belum ada data layanan saat ini"
            description="Kami sedang menambahkan layanan baru. Cek kembali nanti."
            icon="inbox"
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
            {featuredServices.map((service) => (
              <div
                key={service.slug}
                className="bg-slate-50 rounded-3xl p-6 border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white text-blue-600 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {getCategoryIcon(service.category, service.icon_name)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 md:mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                  <Link href={`/services/${service.slug}`}>
                    {service.title}
                  </Link>
                </h3>
                <p className="text-slate-600 mb-6 md:mb-8 leading-relaxed flex-grow text-sm md:text-base line-clamp-3 md:line-clamp-4">
                  {service.short_description}
                </p>
                <div className="mt-auto pt-5 md:pt-6 border-t border-slate-200/60">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group/link text-sm md:text-base"
                  >
                    Detail Layanan
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white text-base font-bold rounded-full hover:bg-blue-600 transition-colors shadow-lg"
          >
            Lihat Semua Layanan
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
