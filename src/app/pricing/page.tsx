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
    '@type': 'Product',
    'name': 'Layanan Pembuatan Website Profesional untuk UMKM',
    'description': 'Paket website profesional untuk UMKM: Starter, Business, dan Pro. Mulai Rp 99.000/bulan. Domain, hosting, SSL, dan support included.',
    'brand': {
      '@type': 'Brand',
      'name': 'M-One Solution'
    },
    'provider': {
      '@type': 'Organization',
      'name': siteConfig.name,
      'url': siteConfig.baseUrl,
      'telephone': '+62 812-2666-2812',
      'email': 'monesolutionsoftwarehouse@gmail.com',
    },
    'offers': [
      {
        '@type': 'Offer',
        'name': 'Paket STARTER',
        'price': '99000',
        'priceCurrency': 'IDR',
        'priceSpecification': {
          '@type': 'PriceSpecification',
          'price': '99000',
          'priceCurrency': 'IDR',
          'valueAddedTaxIncluded': true
        },
        'description': '1 landing page profesional, responsive HP & desktop, domain & hosting, SSL, integrasi WA & Maps. Cocok untuk usaha baru yang ingin punya identitas digital profesional.',
        'availability': 'https://schema.org/InStock',
        'url': `${siteConfig.baseUrl}/pricing#starter`
      },
      {
        '@type': 'Offer',
        'name': 'Paket BUSINESS',
        'price': '149000',
        'priceCurrency': 'IDR',
        'priceSpecification': {
          '@type': 'PriceSpecification',
          'price': '149000',
          'priceCurrency': 'IDR',
          'valueAddedTaxIncluded': true
        },
        'description': 'Hingga 5 halaman, katalog produk/jasa, form kontak, Google Analytics, update konten & prioritas support. Sistem lengkap untuk meningkatkan kredibilitas & penjualan.',
        'availability': 'https://schema.org/InStock',
        'url': `${siteConfig.baseUrl}/pricing#business`
      },
      {
        '@type': 'Offer',
        'name': 'Paket PRO',
        'price': '249000',
        'priceCurrency': 'IDR',
        'priceSpecification': {
          '@type': 'PriceSpecification',
          'price': '249000',
          'priceCurrency': 'IDR',
          'valueAddedTaxIncluded': true
        },
        'description': 'Hingga 10 halaman, SEO lokal, tracking konversi, Meta Pixel & GTM, optimasi kecepatan & priority maintenance. Performa maksimal untuk bisnis yang serius di dunia digital.',
        'availability': 'https://schema.org/InStock',
        'url': `${siteConfig.baseUrl}/pricing#pro`
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
