import { CTA } from '@/components/CTA';

export const metadata = {
    title: 'Contact Us | M-One Solution Software House',
    description: 'Hubungi M-One Solution untuk mendiskusikan ide Anda dan wujudkan bersama tim ahli kami. Solusi digital terpercaya untuk bisnis anda.',
    openGraph: {
        title: 'Contact Us | M-One Solution',
        description: 'Hubungi M-One Solution untuk mendiskusikan ide Anda dan wujudkan bersama tim ahli kami. Solusi digital terpercaya untuk bisnis anda.',
        url: 'https://www.monesolution.com/contact',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Contact Us | M-One Solution',
        description: 'Hubungi kami untuk mendiskusikan kebutuhan digital bisnis Anda.',
    },
};

export default function ContactPage() {
    return (
        <main className="pt-20 min-h-screen bg-white">
            <CTA />
        </main>
    );
}
