import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import './butik.css';

export const metadata: Metadata = {
  title: 'Sazmoon — Modest Knitwear & Pastel Catalog | Demo Toko Online Butik',
  description: 'Koleksi rajut modest, kardigan pastel floral, polo knit vintage terinspirasi gaya Jepang & Korea dari Sazmoon Studio.',
  keywords: 'modest knitwear, kardigan pastel, polo knit vintage, sazmoon, toko online butik, rajut modest, knitwear Indonesia',
  alternates: {
    canonical: `${siteConfig.baseUrl}/butik-1`,
  },
  openGraph: {
    title: 'Sazmoon — Modest Knitwear & Pastel Catalog',
    description: 'Koleksi rajut modest, kardigan pastel floral, polo knit vintage terinspirasi gaya Jepang & Korea dari Sazmoon Studio.',
    url: `${siteConfig.baseUrl}/butik-1`,
    type: 'website',
    locale: 'id_ID',
    siteName: 'Sazmoon by M-One Solution',
    images: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7Wb_EZYNRSWRb6Ob3zIDvc4NyYvoUc2tPWIVdspIeH16RbCI_wl48_xifVASCjvLovBnB4j_bKQwB8GDz4LA9YnbSkn6nzUDsoSZ20J39kK5fPzZlOqLEw-nRDaUevasyk5z_ZkHsWTkDxYJIfgC2mtQbzPNye0k6F4TuihyLHJ7kX4J7RghkQyoQvjj3MZi6JYuYsuGjpTcYdBBUHWwgLPkXKAJs1f4SzubAZCWwmSc1DAfw_GnaMw',
        width: 1200,
        height: 630,
        alt: 'Sazmoon — Buttercream Cable Cardigan, Autumn/Winter 2025 Capsule',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sazmoon — Modest Knitwear & Pastel Catalog',
    description: 'Koleksi rajut modest, kardigan pastel floral, polo knit vintage terinspirasi gaya Jepang & Korea.',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuD7Wb_EZYNRSWRb6Ob3zIDvc4NyYvoUc2tPWIVdspIeH16RbCI_wl48_xifVASCjvLovBnB4j_bKQwB8GDz4LA9YnbSkn6nzUDsoSZ20J39kK5fPzZlOqLEw-nRDaUevasyk5z_ZkHsWTkDxYJIfgC2mtQbzPNye0k6F4TuihyLHJ7kX4J7RghkQyoQvjj3MZi6JYuYsuGjpTcYdBBUHWwgLPkXKAJs1f4SzubAZCWwmSc1DAfw_GnaMw'],
  },
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
