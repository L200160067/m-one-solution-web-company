import type { Post } from '@/types/api';
import { PH } from './utils';

export const mockPosts: Post[] = [
  {
    id: 1,
    title: 'Cara Memilih Sistem ERP yang Tepat untuk Bisnis Anda',
    slug: 'cara-memilih-sistem-erp',
    excerpt:
      'ERP yang tepat dapat mengubah bisnis Anda. Pelajari panduan lengkap memilih sistem ERP sesuai skala dan kebutuhan perusahaan.',
    content: `<p>Enterprise Resource Planning (ERP) adalah sistem terintegrasi yang mengelola semua proses bisnis utama dalam satu platform. Memilih ERP yang tepat untuk bisnis Anda adalah keputusan strategis yang akan berdampak besar pada efisiensi operasional jangka panjang.</p>
<h2>Faktor Utama Pemilihan ERP</h2>
<p>Pertama, pertimbangkan skala bisnis Anda. Perusahaan kecil mungkin tidak memerlukan semua modul yang ditawarkan sistem ERP enterprise. Kedua, pastikan vendor memiliki dukungan teknis lokal yang baik.</p>
<h2>Kesimpulan</h2>
<p>Konsultasikan kebutuhan Anda dengan tim ahli M-One Solution untuk mendapatkan rekomendasi ERP terbaik.</p>`,
    category: { id: 1, name: 'Teknologi Bisnis', slug: 'teknologi-bisnis' },
    author: 'Tim M-One Solution',
    cover_url: PH(800, 450, 'ERP+System'),
    cover_thumb: PH(400, 225, 'ERP+System'),
    published_at: '2026-03-10T08:00:00Z',
  },
  {
    id: 2,
    title: 'Transformasi Digital UMKM: Mulai dari Mana?',
    slug: 'transformasi-digital-umkm',
    excerpt:
      'Transformasi digital bukan hanya untuk perusahaan besar. UMKM pun bisa memanfaatkan teknologi untuk bersaing di era modern.',
    content: `<p>Banyak pelaku UMKM yang masih ragu untuk memulai transformasi digital. Padahal, digitalisasi justru bisa menjadi kunci keberhasilan usaha kecil untuk bersaing dengan pemain yang lebih besar.</p>
<h2>Langkah Pertama</h2>
<p>Mulai dari yang sederhana: digitalisasi pencatatan keuangan, lalu tingkatkan ke manajemen stok, dan akhirnya ke sistem penjualan terintegrasi.</p>`,
    category: { id: 2, name: 'UMKM & Digital', slug: 'umkm-digital' },
    author: 'Tim M-One Solution',
    cover_url: PH(800, 450, 'Digital+UMKM'),
    cover_thumb: PH(400, 225, 'Digital+UMKM'),
    published_at: '2026-03-05T08:00:00Z',
  },
  {
    id: 3,
    title: 'Keamanan Siber untuk Startup: Tips dan Praktik Terbaik',
    slug: 'keamanan-siber-startup',
    excerpt:
      'Startup sering menjadi target serangan siber karena dianggap kurang siap. Berikut langkah-langkah penting untuk melindungi bisnis Anda.',
    content: `<p>Keamanan siber sering dianggap sebagai urusan perusahaan besar. Namun kenyataannya, startup justru menjadi target yang lebih mudah karena keterbatasan sumber daya keamanan.</p>`,
    category: { id: 3, name: 'Keamanan Siber', slug: 'keamanan-siber' },
    author: 'Tim M-One Solution',
    cover_url: PH(800, 450, 'Cybersecurity'),
    cover_thumb: PH(400, 225, 'Cybersecurity'),
    published_at: '2026-02-28T08:00:00Z',
  },
  {
    id: 4,
    title: 'Laravel vs Next.js: Mana yang Lebih Baik untuk Proyek Anda?',
    slug: 'laravel-vs-nextjs',
    excerpt:
      'Dua teknologi populer ini memiliki kelebihan masing-masing. Pelajari kapan harus menggunakan Laravel dan kapan Next.js lebih cocok.',
    content: `<p>Laravel dan Next.js adalah dua framework yang sering dibandingkan dalam pengembangan web modern. Keduanya memiliki ekosistem yang matang dan komunitas yang besar.</p>`,
    category: { id: 1, name: 'Teknologi Bisnis', slug: 'teknologi-bisnis' },
    author: 'Tim M-One Solution',
    cover_url: PH(800, 450, 'Laravel+vs+Next.js'),
    cover_thumb: PH(400, 225, 'Laravel+vs+Next.js'),
    published_at: '2026-02-20T08:00:00Z',
  },
  {
    id: 5,
    title: 'Mengapa Aplikasi Mobile Penting untuk Bisnis Retail?',
    slug: 'aplikasi-mobile-bisnis-retail',
    excerpt:
      'Di era smartphone, aplikasi mobile bukan lagi kemewahan — ini kebutuhan. Bagaimana bisnis retail bisa memanfaatkannya?',
    content: `<p>Penetrasi smartphone di Indonesia telah mencapai lebih dari 70% populasi. Ini adalah peluang besar bagi bisnis retail untuk menjangkau lebih banyak pelanggan.</p>`,
    category: { id: 4, name: 'Aplikasi Mobile', slug: 'aplikasi-mobile' },
    author: 'Tim M-One Solution',
    cover_url: PH(800, 450, 'Mobile+App+Retail'),
    cover_thumb: PH(400, 225, 'Mobile+App+Retail'),
    published_at: '2026-02-15T08:00:00Z',
  },
];
