import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Partners } from '../components/Partners';
import { Testimonials } from '../components/Testimonials';
import { CTA } from '../components/CTA';

export function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Partners />
      <Testimonials />
      <CTA />
    </main>
  );
}
