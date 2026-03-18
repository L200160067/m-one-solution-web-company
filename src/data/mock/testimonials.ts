import type { Testimonial } from '@/types/api';
import { PH } from './utils';

export const mockTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Budi Santoso',
    role: 'CEO',
    company: 'TokoBersama Group',
    content:
      'M-One Solution benar-benar memahami kebutuhan bisnis kami. Sistem POS yang mereka bangun sangat user-friendly dan meningkatkan efisiensi kasir kami hingga 60%. Highly recommended!',
    rating: 5,
    avatar_url: PH(100, 100, 'BS'),
  },
  {
    id: 2,
    name: 'Dr. Siti Rahayu',
    role: 'Kepala Sekolah',
    company: 'SMK Teknologi Mandiri',
    content:
      'Platform e-learning yang dikembangkan sangat membantu proses belajar mengajar kami. Para siswa dan guru sangat antusias menggunakannya. Fiturnya lengkap dan tampilan modern.',
    rating: 5,
    avatar_url: PH(100, 100, 'SR'),
  },
  {
    id: 3,
    name: 'Hendra Wijaya',
    role: 'Director',
    company: 'BestCatering Indonesia',
    content:
      'Aplikasi pemesanan yang dibuat M-One Solution memudahkan pelanggan kami memesan katering kapan saja. Pesanan meningkat 45% sejak aplikasi diluncurkan. Tim mereka profesional dan responsif.',
    rating: 5,
    avatar_url: PH(100, 100, 'HW'),
  },
  {
    id: 4,
    name: 'Dewi Kusuma',
    role: 'Marketing Manager',
    company: 'Griya Nusantara Property',
    content:
      'Website properti kami kini tampil profesional dan modern. Traffic organik meningkat 3x lipat berkat optimasi SEO yang mereka lakukan. Tim support juga sangat membantu.',
    rating: 5,
    avatar_url: PH(100, 100, 'DK'),
  },
];
