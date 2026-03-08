import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Projects } from '@/components/Projects';
import { Partners } from '@/components/Partners';
import { Testimonials } from '@/components/Testimonials';
import { LatestBlogs } from '@/components/LatestBlogs';
import { CTA } from '@/components/CTA';

export const metadata = {
    title: 'M-One Solution Software House | Your True Solution',
    description: 'Tingkatkan visibilitas dan konversi bisnis Anda dengan website profesional dan aplikasi dari M-One Solution. Kami membantu Anda tumbuh secara signifikan di era digital.',
};

export default function Home() {
    return (
        <main style={{ position: 'relative' }}>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Partners />
            <Testimonials />
            <LatestBlogs />
            <CTA />
        </main>
    );
}
