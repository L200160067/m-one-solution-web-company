import { Projects } from '@/components/Projects';

export const metadata = {
    title: 'Portofolio | M-One Solution Software House',
    description: 'Inilah jejak perjalanan kami dalam dunia digital. Dari website sekolah hingga aplikasi organisasi, setiap proyek yang kami kerjakan punya cerita dan tantangannya sendiri.',
    openGraph: {
        title: 'Portofolio | M-One Solution',
        description: 'Inilah jejak perjalanan kami dalam dunia digital. Dari website sekolah hingga aplikasi organisasi, setiap proyek yang kami kerjakan punya cerita dan tantangannya sendiri.',
        url: 'https://www.monesolution.com/portfolio',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Portofolio | M-One Solution',
        description: 'Lihat jejak perjalanan kami dalam dunia digital — website sekolah, aplikasi organisasi, dan lebih banyak lagi.',
    },
};

export default function PortfolioPage() {
    return (
        <main className="pt-20 min-h-screen bg-slate-50">
            <Projects />
        </main>
    );
}
