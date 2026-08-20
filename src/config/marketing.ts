/**
 * ============================================================
 * config/marketing.ts — Site marketing/business content config
 * ============================================================
 *
 * This file centralizes copy, CTAs, pricing, dates, limits, and
 * program details that were previously hard-coded across components.
 */

export interface PackageInfo {
  slug: 'umkm' | 'sekolah';
  title: string;
  description: string;
  priceLabel: string;
  href: string;
  accentColor: 'blue' | 'emerald';
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
  desc?: string;
}

export interface Step {
  num: string;
  title: string;
  description: string;
  desc?: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  label: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  ctaMessage?: string;
  features: string[];
  highlighted?: boolean;
}

export interface Stat {
  value: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  q?: string;
  a?: string;
}

export interface TrustSignal {
  text: string;
}

export interface CountdownConfig {
  label: string;
  targetDate: string;
}

export interface StudentAgencyConfig {
  batchLabel: string;
  eventDateLabel: string;
  countdown: CountdownConfig;
  benefits: Benefit[];
  steps: Step[];
  pricing: {
    normal: PricingPlan;
    earlyBird: PricingPlan;
  };
  quota: {
    max: number;
    label: string;
  };
  stats: Stat[];
  faqs: FaqItem[];
  trustSignals: TrustSignal[];
  waNumber: string;
  waTexts: {
    register: string;
    inquiry: string;
    earlyBird: string;
  };
}

export interface HomepageBlockConfig {
  contactCtaLabel?: string;
  contactCtaHref?: string;
  emailCtaLabel?: string;
}

export const packages: PackageInfo[] = [
  {
    slug: 'umkm',
    title: 'Paket Web UMKM',
    description:
      'Mulai dari Website Profil, Ecommerce dengan Payment Gateway, hingga Sistem Kasir (POS) dan Gudang tanpa biaya langganan bulanan.',
    priceLabel: 'Mulai dari Rp 1 JT',
    href: '/layanan/jasa-erp-umkm',
    accentColor: 'blue',
  },
  {
    slug: 'sekolah',
    title: 'Paket Web Sekolah',
    description:
      'Digitalisasi sarana pendidikan mulai dari Profil Resmi (.sch.id), Portal Berita, hingga Sistem PPDB Online & CBT E-Learning lengkap.',
    priceLabel: 'Mulai dari Rp 1.5 JT',
    href: '/layanan/jasa-pembuatan-website-sekolah',
    accentColor: 'emerald',
  },
];

export const studentAgency: StudentAgencyConfig = {
  batchLabel: 'Batch 1 — Pendaftaran Dibuka!',
  eventDateLabel: 'Kelas mulai 20 April 2026',
  countdown: {
    label: 'Batch 1 — Pendaftaran Dibuka!',
    targetDate: '2026-04-20T23:59:59+07:00',
  },
  benefits: [
    {
      icon: '💰',
      title: 'Penghasilan Nyata',
      description:
        'Komisi menarik untuk setiap website yang berhasil kamu jual ke klien — bisa dikerjain sambil kuliah!',
    },
    {
      icon: '🌐',
      title: 'Bikin Website Tanpa Coding',
      description:
        'Kami ajarkan cara membuat website profesional pakai WordPress — drag & drop, tanpa nulis satu baris kode pun.',
    },
    {
      icon: '🖥️',
      title: 'Hosting Ditanggung M-One',
      description:
        'Website klienmu di-hosting langsung oleh M-One Solution. Kamu tidak perlu urus server atau teknis sama sekali.',
    },
    {
      icon: '🎓',
      title: 'Portfolio Profesional',
      description:
        'Dapatkan portfolio website nyata yang bisa kamu tunjukkan saat melamar kerja, magang, atau beasiswa.',
    },
    {
      icon: '🤝',
      title: 'Mentor & Komunitas',
      description:
        'Bergabung dengan komunitas agent aktif dan dapatkan bimbingan langsung dari tim M-One Solution.',
    },
    {
      icon: '🚀',
      title: 'Kerja Fleksibel',
      description:
        'Bisa dikerjakan dari mana saja, kapan saja. Fleksibel dan 100% cocok sambil kuliah full-time.',
    },
  ],
  steps: [
    {
      num: '01',
      title: 'Daftar Gratis',
      description:
        'Isi form pendaftaran dan langsung masuk grup eksklusif Student Agency Incubator M-One Solution.',
    },
    {
      num: '02',
      title: 'Pelatihan WordPress',
      description:
        'Kami bimbing kamu belajar bikin website profesional pakai WordPress — tanpa coding, dari nol sampai bisa!',
    },
    {
      num: '03',
      title: 'Terima Materi & Tools',
      description:
        'Dapat kit penjualan lengkap: script promosi, template proposal, dan panduan cari klien pertamamu.',
    },
    {
      num: '04',
      title: 'Cari Klien & Bikin Website',
      description:
        'Tawarkan jasa website ke UMKM, sekolah, atau toko di sekitarmu — lalu bangun websitenya sendiri pakai WordPress!',
    },
    {
      num: '05',
      title: 'Submit & Terima Komisi',
      description:
        'Website klien langsung di-hosting M-One Solution. Kamu serahkan hasilnya, klien puas, komisi masuk!',
    },
  ],
  pricing: {
    normal: {
      name: 'Harga Normal',
      price: 'Rp 249.000',
      label: 'Berlaku setelah slot early bird habis',
      description: '',
      ctaLabel: '',
      ctaHref: '#',
      features: [
        'Pelatihan WordPress intensif',
        'Materi & Tools Kit penjualan',
        'Akses komunitas agent eksklusif',
        'Sertifikat keikutsertaan',
        'Support teknis dari M-One',
      ],
    },
    earlyBird: {
      name: 'Early Bird 🎉',
      price: 'Rp 149.000',
      label: 'Hanya untuk 5 pendaftar pertama!',
      description: 'Hemat Rp 100.000! 🎊',
      ctaLabel: 'Ambil Slot Early Bird!',
      ctaHref: '#',
      ctaMessage:
        'Halo kak! Saya mau ambil slot Early Bird Student Agency Incubator M-One Solution (Rp 149.000 — Batch 1, 20 April 2026). Bagaimana cara daftarnya?',
      features: [
        'Pelatihan WordPress intensif',
        'Materi & Tools Kit penjualan',
        'Akses komunitas agent eksklusif',
        'Sertifikat keikutsertaan',
        'Support teknis dari M-One',
      ],
      highlighted: true,
    },
  },
  quota: {
  max: 20,
  label: 'Pendaftaran dibuka',
  },
  stats: [
    { value: '20+', label: 'Proyek M-One Selesai' },
    { value: '5 Slot', label: 'Harga Early Bird' },
    { value: '2 Kota', label: 'Area Terlayani' },
    { value: '20 Org', label: 'Kuota Per Kelas' },
  ],
  faqs: [
    {
      question: 'Apakah M-One Solution punya portofolio nyata?',
      answer:
        'Ya. M-One Solution adalah software house di Sukoharjo dengan rekam jejak proyek nyata untuk UMKM dan sekolah. Kamu bisa melihat portofolio kami di halaman Portofolio.',
    },
    {
      question: 'Berapa komisinya?',
      answer:
        'Komisi kompetitif untuk setiap proyek website yang berhasil kamu jual. Detail lengkapnya disampaikan setelah kamu bergabung di grup eksklusif kami.',
    },
    {
      question: 'Perlu keahlian coding?',
      answer:
        'Tidak perlu sama sekali! Kamu akan belajar membuat website menggunakan WordPress — platform berbasis visual yang tidak butuh coding. Kami bimbing dari nol sampai kamu siap jualan.',
    },
    {
      question: 'Apakah ada target penjualan?',
      answer:
        'Ada target, tapi bersifat fleksibel dan bisa kamu sesuaikan dengan jadwal kuliah. Yang penting konsisten dan mau belajar!',
    },
    {
      question: 'Siapa yang urus hosting website klien?',
      answer:
        'M-One Solution! Setelah kamu selesai bikin website klien, hosting dan maintenance server sepenuhnya ditanggung oleh kami. Kamu fokus jual, kami yang urus teknisnya.',
    },
  ],
  trustSignals: [
    { text: 'Biaya mulai Rp 149rb' },
    { text: 'Kelas mulai 20 April 2026' },
    { text: 'Bisa sambil kuliah' },
    { text: 'Hosting klien dikelola M-One' },
  ],
  waNumber: '6285168850712',
  waTexts: {
    register:
      'Halo kak, saya mahasiswa dan tertarik untuk bergabung dengan Student Agency Incubator M-One Solution. Bisa ceritain lebih lanjut?',
    inquiry:
      'Halo M-One Solution! Saya ingin tahu lebih lanjut tentang Student Agency Incubator.',
    earlyBird:
      'Halo kak! Saya mau ambil slot Early Bird Student Agency Incubator M-One Solution (Rp 149.000 — Batch 1, 20 April 2026). Bagaimana cara daftarnya?',
  },
};

export const homepageBlocks: HomepageBlockConfig = {
  contactCtaLabel: 'Hubungi Kami',
  contactCtaHref: '/contact',
  emailCtaLabel: 'Email Kami',
};

export const studentAgencyRegisterHref = `https://wa.me/${studentAgency.waNumber}?text=${encodeURIComponent(studentAgency.waTexts.register)}`;

export const studentAgencyEarlyBirdHref = `https://wa.me/${studentAgency.waNumber}?text=${encodeURIComponent(studentAgency.waTexts.earlyBird)}`;

export const branding = {
  brandName: 'M-One Solution',
  brandLabel: 'Software House',
  primaryGradient: 'from-blue-400 to-cyan-400',
  pinkAccent: '#E0007A',
  yellowAccent: '#F5C400',
  yellowAccentSoft: '#FFF3A3',
  studentAgencyHeadingFont:
    'var(--font-lilita), "Lilita One", "Impact", sans-serif',
};
