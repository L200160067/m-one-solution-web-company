import { Helmet } from 'react-helmet-async';
import { CTA } from '../components/CTA';

export function ContactPage() {
  return (
    <main className="pt-20 min-h-screen bg-white">
      <Helmet>
        <title>Contact Us | M-One Solution</title>
        <meta name="description" content="Hubungi M-One Solution untuk mendiskusikan ide Anda dan wujudkan bersama tim ahli kami. Solusi digital terpercaya untuk bisnis anda." />
      </Helmet>
      <CTA />
    </main>
  );
}
