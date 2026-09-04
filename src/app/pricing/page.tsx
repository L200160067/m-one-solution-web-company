import type { Metadata } from 'next';
import PricingClient from './PricingClient';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Price List Jasa Pembuatan Website UMKM | M-One Solution',
  description: 'Daftar harga resmi pembuatan website UMKM profesional di Sukoharjo & Solo. Paket Starter mulai Rp 99rb/bln (999rb/thn), Business Rp 149rb/bln, dan Pro Rp 249rb/bln.',
  keywords: [
    'price list website umkm',
    'harga jasa pembuatan website',
    'biaya buat website sukoharjo solo',
    'paket website murah berkualitas',
    'website landing page umkm',
    'jasa web profesional solo sukoharjo',
    'm-one solution harga'
  ],
  alternates: {
    canonical: `${siteConfig.baseUrl}/pricing`,
  },
  openGraph: {
    title: 'Price List Website UMKM | M-One Solution Software House',
    description: 'Website profesional untuk membantu UMKM tampil lebih terpercaya, mudah ditemukan, dan siap menerima pelanggan dari internet.',
    url: `${siteConfig.baseUrl}/pricing`,
    type: 'website',
    images: [
      {
        url: '/og-pricing.png',
        width: 1200,
        height: 630,
        alt: 'Bawa Usaha Anda Naik Kelas - Price List Website UMKM M-One Solution',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Price List Website UMKM — M-One Solution',
    description: 'Pilihan paket pembuatan website UMKM profesional mulai Rp 99.000 / bulan.',
    images: ['/og-pricing.png'],
  },
};

export default function PricingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PriceSpecification',
    'name': 'Price List Website UMKM M-One Solution',
    'description': 'Layanan pembuatan website profesional untuk UMKM: Paket Starter, Business, dan Pro.',
    'provider': {
      '@type': 'Organization',
      'name': siteConfig.name,
      'url': siteConfig.baseUrl,
      'telephone': '+62 812-2666-2812',
      'email': 'monesolutionsoftwarehouse@gmail.com',
    },
    'priceCurrency': 'IDR',
    'minPrice': '99000',
    'offers': [
      {
        '@type': 'Offer',
        'name': 'STARTER',
        'price': '99000',
        'priceCurrency': 'IDR',
        'description': '1 landing page profesional, responsive HP & desktop, domain & hosting, SSL, integrasi WA & Maps.'
      },
      {
        '@type': 'Offer',
        'name': 'BUSINESS',
        'price': '149000',
        'priceCurrency': 'IDR',
        'description': 'Hingga 5 halaman, katalog produk/jasa, form kontak, Google Analytics, update konten & prioritas support.'
      },
      {
        '@type': 'Offer',
        'name': 'PRO',
        'price': '249000',
        'priceCurrency': 'IDR',
        'description': 'Hingga 10 halaman, SEO lokal, tracking konversi, Meta Pixel & GTM, optimasi kecepatan & priority maintenance.'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PricingClient />
    </>
  );
}
