import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Projects } from '../components/Projects';
import { Partners } from '../components/Partners';
import { Testimonials } from '../components/Testimonials';
import { LatestBlogs } from '../components/LatestBlogs';
import { CTA } from '../components/CTA';

export function Home() {
  return (
    <main style={{ position: 'relative' }}>
      <Helmet>
        <title>M-One Solution Software House | Your True Solution</title>
        <meta name="description" content="Tingkatkan visibilitas dan konversi bisnis Anda dengan website profesional dan aplikasi dari M-One Solution. Kami membantu Anda tumbuh secara signifikan di era digital." />
      </Helmet>
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
