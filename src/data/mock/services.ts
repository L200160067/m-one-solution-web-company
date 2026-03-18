import type { Service } from '@/types/api';
import { PH } from './utils';

export const mockServices: Service[] = [
  {
    id: 1,
    title: 'Pengembangan Website Profesional',
    slug: 'pengembangan-website-profesional',
    category: 'Web Development',
    short_description: 'Website responsif, modern, dan dioptimalkan SEO untuk bisnis Anda.',
    full_description:
      'Kami membangun website yang tidak hanya indah secara visual tetapi juga berkinerja tinggi. Dengan menggunakan teknologi terkini seperti Next.js dan Laravel, kami memastikan website Anda cepat, aman, dan mudah dikelola.',
    features: [
      'Desain responsif untuk semua perangkat',
      'Optimasi SEO on-page',
      'Panel admin untuk mengelola konten',
      'Integrasi media sosial',
      'Dukungan multi-bahasa',
    ],
    benefits: [
      'Meningkatkan kepercayaan pelanggan',
      'Jangkauan pasar lebih luas 24/7',
      'Meningkatkan konversi penjualan',
    ],
    keywords: ['website profesional', 'web development', 'next.js', 'laravel'],
    image_url: PH(800, 500, 'Web+Development'),
    image_thumb: PH(400, 250, 'Web+Development'),
  },
  {
    id: 2,
    title: 'Sistem ERP & Manajemen Bisnis',
    slug: 'sistem-erp-manajemen-bisnis',
    category: 'Enterprise Software',
    short_description: 'Sistem terintegrasi untuk mengelola seluruh proses bisnis Anda dalam satu platform.',
    full_description:
      'Solusi ERP kami dirancang khusus untuk bisnis Indonesia. Mulai dari manajemen inventori, keuangan, SDM, hingga laporan bisnis — semua dalam satu sistem yang mudah digunakan.',
    features: [
      'Manajemen inventori real-time',
      'Laporan keuangan otomatis',
      'Manajemen SDM & payroll',
      'Integrasi e-commerce',
      'Dashboard analitik bisnis',
    ],
    benefits: [
      'Efisiensi operasional meningkat hingga 40%',
      'Pengambilan keputusan berbasis data',
      'Mengurangi human error',
    ],
    keywords: ['erp', 'sistem manajemen', 'software bisnis', 'inventori'],
    image_url: PH(800, 500, 'ERP+System'),
    image_thumb: PH(400, 250, 'ERP+System'),
  },
  {
    id: 3,
    title: 'Aplikasi Mobile (Android & iOS)',
    slug: 'aplikasi-mobile-android-ios',
    category: 'Mobile Development',
    short_description: 'Aplikasi mobile native dan cross-platform yang intuitif dan berperforma tinggi.',
    full_description:
      'Tim developer kami berpengalaman membangun aplikasi mobile untuk berbagai platform. Kami menggunakan React Native dan Flutter untuk menghasilkan aplikasi yang terasa native di Android maupun iOS.',
    features: [
      'UI/UX modern dan intuitif',
      'Performa tinggi seperti aplikasi native',
      'Push notification',
      'Offline mode support',
      'Integrasi payment gateway lokal',
    ],
    benefits: [
      'Jangkau pelanggan di mana saja',
      'Meningkatkan loyalitas pengguna',
      'Pengalaman pengguna yang mulus',
    ],
    keywords: ['aplikasi android', 'aplikasi ios', 'flutter', 'react native'],
    image_url: PH(800, 500, 'Mobile+App'),
    image_thumb: PH(400, 250, 'Mobile+App'),
  },
  {
    id: 4,
    title: 'Konsultasi & Transformasi Digital',
    slug: 'konsultasi-transformasi-digital',
    category: 'Consulting',
    short_description: 'Panduan strategi digital dari konsultan berpengalaman untuk akselerasi bisnis Anda.',
    full_description:
      'Kami membantu perusahaan merancang dan mengeksekusi strategi transformasi digital yang tepat. Dari audit digital, perencanaan roadmap, hingga implementasi dan evaluasi hasil.',
    features: [
      'Audit proses bisnis digital',
      'Peta jalan transformasi digital',
      'Pemilihan teknologi yang tepat',
      'Pelatihan tim internal',
      'Evaluasi dan optimasi berkelanjutan',
    ],
    benefits: [
      'Visi digital yang jelas dan terstruktur',
      'Investasi teknologi yang tepat sasaran',
      'Percepatan adopsi digital',
    ],
    keywords: ['konsultasi digital', 'transformasi digital', 'strategi IT', 'digital roadmap'],
    image_url: PH(800, 500, 'Digital+Consulting'),
    image_thumb: PH(400, 250, 'Digital+Consulting'),
  },
  {
    id: 5,
    title: 'UI/UX Design & Branding',
    slug: 'uiux-design-branding',
    category: 'Design',
    short_description: 'Desain antarmuka yang elegan dan identitas merek yang kuat untuk bisnis Anda.',
    full_description:
      'Tim desainer kami menciptakan pengalaman pengguna yang tidak hanya cantik tetapi juga fungsional. Dari wireframe, prototyping, hingga brand identity yang konsisten di semua media.',
    features: [
      'Riset pengguna (User Research)',
      'Wireframing & prototyping',
      'Desain UI yang responsif',
      'Brand identity & style guide',
      'Uji usabilitas',
    ],
    benefits: [
      'Meningkatkan kepuasan pengguna',
      'Brand yang dikenal dan dipercaya',
      'Mengurangi bounce rate website',
    ],
    keywords: ['ui ux design', 'branding', 'desain aplikasi', 'user experience'],
    image_url: PH(800, 500, 'UI+UX+Design'),
    image_thumb: PH(400, 250, 'UI+UX+Design'),
  },
  {
    id: 6,
    title: 'Keamanan Siber & Audit IT',
    slug: 'keamanan-siber-audit-it',
    category: 'Cybersecurity',
    short_description: 'Lindungi aset digital bisnis Anda dengan solusi keamanan siber komprehensif.',
    full_description:
      'Kami menyediakan layanan audit keamanan IT, penetration testing, dan implementasi solusi keamanan untuk melindungi data dan sistem bisnis Anda dari ancaman siber.',
    features: [
      'Penetration testing',
      'Audit keamanan infrastruktur',
      'Implementasi firewall & VPN',
      'Pelatihan keamanan siber karyawan',
      'Monitoring ancaman 24/7',
    ],
    benefits: [
      'Bisnis terlindungi dari serangan siber',
      'Kepatuhan regulasi data (PDPA)',
      'Reputasi bisnis terjaga',
    ],
    keywords: ['keamanan siber', 'cybersecurity', 'penetration testing', 'audit IT'],
    image_url: PH(800, 500, 'Cybersecurity'),
    image_thumb: PH(400, 250, 'Cybersecurity'),
  },
];
