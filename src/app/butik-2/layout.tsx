import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import './butik2.css';

export const metadata: Metadata = {
  title: 'The Retro Knit Club — Sazmoon Studio | Demo Toko Online Butik 2',
  description: 'Slow-fashion knitwear and vintage modest pieces inspired by 70s-90s Tokyo tea rooms and Seoul quiet mornings.',
  keywords: 'retro knit club, slow fashion, vintage knitwear, modest fashion, sazmoon, toko online butik, heirloom knits, 70s 90s inspired',
  alternates: {
    canonical: `${siteConfig.baseUrl}/butik-2`,
  },
  openGraph: {
    title: 'The Retro Knit Club — Sazmoon Studio',
    description: 'Slow-fashion knitwear and vintage modest pieces inspired by 70s-90s Tokyo tea rooms and Seoul quiet mornings.',
    url: `${siteConfig.baseUrl}/butik-2`,
    type: 'website',
    locale: 'id_ID',
    siteName: 'Sazmoon by M-One Solution',
    images: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7Wb_EZYNRSWRb6Ob3zIDvc4NyYvoUc2tPWIVdspIeH16RbCI_wl48_xifVASCjvLovBnB4j_bKQwB8GDz4LA9YnbSkn6nzUDsoSZ20J39kK5fPzZlOqLEw-nRDaUevasyk5z_ZkHsWTkDxYJIfgC2mtQbzPNye0k6F4TuihyLHJ7kX4J7RghkQyoQvjj3MZi6JYuYsuGjpTcYdBBUHWwgLPkXKAJs1f4SzubAZCWwmSc1DAfw_GnaMw',
        width: 1200,
        height: 630,
        alt: 'The Retro Knit Club — Heirloom Knits Spun With Timeless Warmth, Autumn/Winter 2025',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Retro Knit Club — Sazmoon Studio',
    description: 'Slow-fashion knitwear and vintage modest pieces inspired by 70s-90s Tokyo tea rooms.',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuD7Wb_EZYNRSWRb6Ob3zIDvc4NyYvoUc2tPWIVdspIeH16RbCI_wl48_xifVASCjvLovBnB4j_bKQwB8GDz4LA9YnbSkn6nzUDsoSZ20J39kK5fPzZlOqLEw-nRDaUevasyk5z_ZkHsWTkDxYJIfgC2mtQbzPNye0k6F4TuihyLHJ7kX4J7RghkQyoQvjj3MZi6JYuYsuGjpTcYdBBUHWwgLPkXKAJs1f4SzubAZCWwmSc1DAfw_GnaMw'],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function Butik2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="butik2-root min-h-screen bg-[#fbf6ee] text-[#1e1713]">
      {/* CDN Google Fonts for Retro Aesthetic */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400..700;1,6..72,400..700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
      {children}
    </div>
  );
}
