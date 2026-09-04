import type { Metadata } from 'next';
import './butik.css';

export const metadata: Metadata = {
  title: 'Sazmoon — Modest Knitwear & Pastel Catalog | Demo Toko Online Butik',
  description: 'Koleksi rajut modest, kardigan pastel floral, polo knit vintage terinspirasi gaya Jepang & Korea dari Sazmoon Studio.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ButikLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="butik-root min-h-screen bg-[#fcf9f4] text-[#1c1c19]">
      {/* Fonts & Icons via CDN */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..700;1,6..96,400..700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      {children}
    </div>
  );
}
