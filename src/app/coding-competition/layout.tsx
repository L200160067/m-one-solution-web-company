import type { Metadata } from 'next';
import { Baloo_2, Nunito, Bangers } from 'next/font/google';
import { siteConfig } from '@/config/site';

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
  title: 'M-ONE Telkomsel Coding Competition 2026 | Pendaftaran',
  description: 'Lomba Inovasi Website & AI untuk pelajar SMP, SMA/SMK, mahasiswa, dan umum se-Solo Raya. Diselenggarakan oleh M-One Solution dan Telkomsel.',
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
  },
};

export default function CompetitionLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${baloo.variable} ${nunito.variable} ${bangers.variable}`}>
      {children}
    </div>
  );
}
