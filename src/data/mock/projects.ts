import type { Project } from '@/types/api';
import { PH } from './utils';

export const mockProjects: Project[] = [
  {
    id: 1,
    title: 'Sistem POS Toko Kelontong Modern',
    slug: 'sistem-pos-toko-kelontong',
    category: 'Enterprise Software',
    description:
      'Membangun sistem Point of Sale (POS) berbasis web untuk jaringan toko kelontong modern dengan fitur manajemen stok real-time, laporan penjualan harian, dan integrasi printer kasir.',
    client_name: 'TokoBersama Group',
    project_url: '#',
    is_featured: true,
    image_url: PH(800, 500, 'POS+System'),
    image_thumb: PH(400, 250, 'POS+System'),
  },
  {
    id: 2,
    title: 'Platform E-Learning SMK Swasta',
    slug: 'platform-elearning-smk',
    category: 'Web Development',
    description:
      'Mengembangkan platform e-learning lengkap dengan fitur video streaming, kuis interaktif, sertifikat digital, dan dashboard guru-siswa untuk SMK swasta terkemuka di Bandung.',
    client_name: 'SMK Teknologi Mandiri',
    project_url: '#',
    is_featured: true,
    image_url: PH(800, 500, 'E-Learning'),
    image_thumb: PH(400, 250, 'E-Learning'),
  },
  {
    id: 3,
    title: 'Aplikasi Pemesanan Katering Online',
    slug: 'aplikasi-pemesanan-katering',
    category: 'Mobile Development',
    description:
      'Membangun aplikasi mobile Android & iOS untuk pemesanan katering acara dengan fitur tracking pesanan real-time, pembayaran digital, dan manajemen menu dinamis.',
    client_name: 'BestCatering Indonesia',
    project_url: '#',
    is_featured: true,
    image_url: PH(800, 500, 'Catering+App'),
    image_thumb: PH(400, 250, 'Catering+App'),
  },
  {
    id: 4,
    title: 'Website Korporat Perusahaan Properti',
    slug: 'website-korporat-properti',
    category: 'Web Development',
    description:
      'Desain dan pengembangan website properti modern dengan fitur pencarian listings, virtual tour 3D, kalkulator KPR, dan integrasi CRM untuk tim penjualan.',
    client_name: 'Griya Nusantara Property',
    project_url: '#',
    is_featured: false,
    image_url: PH(800, 500, 'Property+Website'),
    image_thumb: PH(400, 250, 'Property+Website'),
  },
  {
    id: 5,
    title: 'Dashboard Analytics Manufaktur',
    slug: 'dashboard-analytics-manufaktur',
    category: 'Enterprise Software',
    description:
      'Sistem Business Intelligence untuk monitoring produksi real-time, prediksi kebutuhan bahan baku, dan laporan efisiensi mesin untuk pabrik manufaktur.',
    client_name: 'PT Industri Maju Bersama',
    project_url: '#',
    is_featured: false,
    image_url: PH(800, 500, 'Analytics+Dashboard'),
    image_thumb: PH(400, 250, 'Analytics+Dashboard'),
  },
  {
    id: 6,
    title: 'Sistem Manajemen Klinik & Apotek',
    slug: 'sistem-manajemen-klinik',
    category: 'Enterprise Software',
    description:
      'Aplikasi manajemen klinik terpadu mencakup rekam medis elektronik, antrian pasien digital, manajemen stok obat, dan billing otomatis.',
    client_name: 'Klinik Sehat Bersama',
    project_url: '#',
    is_featured: false,
    image_url: PH(800, 500, 'Clinic+Management'),
    image_thumb: PH(400, 250, 'Clinic+Management'),
  },
];
