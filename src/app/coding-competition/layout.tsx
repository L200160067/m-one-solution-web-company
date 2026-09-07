import type { Metadata } from 'next';
import { Baloo_2, Nunito, Bangers } from 'next/font/google';
import { siteConfig } from '@/config/site';
import Script from 'next/script';

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-baloo',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-nunito',
  display: 'swap',
});

const bangers = Bangers({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bangers',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: 'M-ONE Telkomsel Coding Competition 2026 | Pendaftaran',
  description: 'Lomba Inovasi Website & AI untuk pelajar SMP, SMA/SMK, mahasiswa, dan umum se-Solo Raya. Total prize pool Rp 3.200.000! Daftar sekarang, kuota terbatas! Diselenggarakan oleh M-One Solution dan Telkomsel.',
  keywords: 'lomba coding 2026, kompetisi website solo, coding competition sukoharjo, telkomsel coding competition, lomba ai smp sma mahasiswa, m-one solution event',
  alternates: {
    canonical: `${siteConfig.baseUrl}/coding-competition`,
  },
  openGraph: {
    title: 'M-ONE Telkomsel Coding Competition 2026 — Pendaftaran',
    description: 'Bikin Website Inovatif & Keren, Dibantu AI! Terbuka untuk SMP, SMA/SMK, Mahasiswa, & Umum se-Solo Raya.',
    url: `${siteConfig.baseUrl}/coding-competition`,
    type: 'website',
    locale: 'id_ID',
    siteName: 'M-One Solution',
    images: [
      {
        url: `${siteConfig.baseUrl}/og-coding-competition.jpg`,
        secureUrl: `${siteConfig.baseUrl}/og-coding-competition.jpg`,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'M-ONE Telkomsel Coding Competition 2026 — Total Prize Pool Rp 3.200.000,00',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M-ONE Telkomsel Coding Competition 2026 — Pendaftaran',
    description: 'Bikin Website Inovatif & Keren, Dibantu AI! Terbuka untuk SMP, SMA/SMK, Mahasiswa, & Umum se-Solo Raya.',
    images: [`${siteConfig.baseUrl}/og-coding-competition.jpg`],
  },
};

export default function CompetitionLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'M-ONE Telkomsel Coding Competition 2026',
    description: 'Lomba Inovasi Website & AI untuk pelajar SMP, SMA/SMK, mahasiswa, dan umum se-Solo Raya. Total prize pool Rp 3.200.000!',
    startDate: '2026-09-27',
    endDate: '2026-10-10',
    location: {
      '@type': 'VirtualLocation',
      url: 'https://m-one-solution.com/coding-competition',
    },
    organizer: {
      '@type': 'Organization',
      name: 'M-One Solution',
    },
    sponsor: {
      '@type': 'Organization',
      name: 'Telkomsel',
    },
    offers: {
      '@type': 'Offer',
      price: '50000',
      priceCurrency: 'IDR',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-09-10',
    },
    image: 'https://m-one-solution.com/og-coding-competition.jpg',
  };

  return (
    <div className={`${baloo.variable} ${nunito.variable} ${bangers.variable}`}>
      <Script
        id="json-ld-competition"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </div>
  );
}
