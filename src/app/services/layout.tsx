import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
    title: 'Layanan Jasa IT Sukoharjo | Web, Aplikasi & ERP — M-One Solution',
    description: 'Jasa pembuatan website, aplikasi mobile, dan sistem ERP di Sukoharjo & Solo. Tim profesional M-One Solution siap bantu bisnis Anda. Konsultasi GRATIS!',
    keywords: 'jasa pembuatan website sukoharjo, web development solo, sistem informasi sekolah, company profile sukoharjo, custom web application, software house sukoharjo, jasa IT solo, pembuatan aplikasi sukoharjo',
    openGraph: {
        title: 'Layanan Jasa IT Sukoharjo | M-One Solution',
        description: 'Jasa pembuatan website, aplikasi mobile, dan sistem ERP di Sukoharjo & Solo. Konsultasi GRATIS — hubungi M-One Solution sekarang!',
        images: ['/og-image.jpg'],
        url: `${siteConfig.baseUrl}/services`,
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Layanan Jasa IT Sukoharjo | M-One Solution',
        description: 'Jasa pembuatan website, aplikasi mobile, dan sistem ERP di Sukoharjo & Solo. Konsultasi GRATIS — hubungi M-One Solution sekarang!',
        images: ['/og-image.jpg'],
    }
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return children;
}
