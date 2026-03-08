import { Helmet } from 'react-helmet-async';
import { Projects } from '../components/Projects';

export function PortfolioPage() {
  return (
    <main className="pt-20 min-h-screen bg-slate-50">
      <Helmet>
        <title>Portofolio | M-One Solution Software House</title>
        <meta name="description" content="Inilah jejak perjalanan kami dalam dunia digital. Dari website sekolah hingga aplikasi organisasi, setiap proyek yang kami kerjakan punya cerita dan tantangannya sendiri." />
      </Helmet>
      <Projects />
    </main>
  );
}
