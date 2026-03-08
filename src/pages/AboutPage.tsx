import { Helmet } from 'react-helmet-async';
import { About } from '../components/About';

export function AboutPage() {
  return (
    <main className="pt-20 min-h-screen bg-white">
      <Helmet>
        <title>About Us | M-One Solution Software House</title>
        <meta name="description" content="M-One Solution hadir untuk mengubah ide menjadi kenyataan. Kami adalah tim pengembang yang fokus menciptakan aplikasi dan website yang praktis, intuitif, dan efektif." />
      </Helmet>
      <About />
    </main>
  );
}
