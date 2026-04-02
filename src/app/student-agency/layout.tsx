import type { Metadata } from 'next';
import { Lilita_One } from 'next/font/google';

const lilitaOne = Lilita_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lilita',
});

export const metadata: Metadata = {
  title: 'Student Agency Incubator — Freelance Website Sebelum Lulus | M-One Solution',
  description: 'Bergabunglah dengan Student Agency Incubator M-One Solution! Program kemitraan eksklusif untuk mahasiswa yang ingin hasilkan uang dari menjual website tanpa harus bisa coding. Daftar gratis sekarang!',
  keywords: 'Student Agency Incubator sukoharjo, freelance mahasiswa, jualan website mahasiswa, program magang IT solo, penghasilan mahasiswa dari website, agen website mahasiswa, M-One Solution',
  alternates: {
    canonical: 'https://mone.mutudev.com/student-agency',
  },
  openGraph: {
    title: 'Student Agency Incubator — Freelance Website Sebelum Lulus | M-One Solution',
    description: 'Hasilkan uang dari jualan website tanpa harus bisa coding! Join Student Agency Incubator M-One Solution — gratis, fleksibel, cocok untuk mahasiswa aktif.',
    url: 'https://mone.mutudev.com/student-agency',
    type: 'website',
    locale: 'id_ID',
    siteName: 'M-One Solution',
    images: [
      {
        url: 'https://mone.mutudev.com/og-student-agency.png',
        width: 1200,
        height: 630,
        alt: 'BERANI BUKTIIN — Student Agency Incubator M-One Solution, Program Freelance Website untuk Mahasiswa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Agency Incubator — Freelance Website Sebelum Lulus | M-One Solution',
    description: 'Hasilkan uang dari jualan website! Join Student Agency Incubator M-One Solution — gratis & fleksibel untuk mahasiswa aktif.',
    images: ['https://mone.mutudev.com/og-student-agency.png'],
  },
};

export default function StudentAgencyLayout({ children }: { children: React.ReactNode }) {
  return <div className={lilitaOne.variable}>{children}</div>;
}
