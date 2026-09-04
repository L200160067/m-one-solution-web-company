import type { Metadata } from 'next';
import './butik2.css';

export const metadata: Metadata = {
  title: 'The Retro Knit Club — Sazmoon Studio | Demo Toko Online Butik 2',
  description: 'Slow-fashion knitwear and vintage modest pieces inspired by 70s-90s Tokyo tea rooms and Seoul quiet mornings.',
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
