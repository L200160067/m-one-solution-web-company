import "../index.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Inter } from "next/font/google";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { apiFetch } from "@/lib/api";
import type { ApiResponse, Settings } from "@/types/api";
import Script from "next/script";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const BASE_URL = "https://mone.mutudev.com";

export const metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        default: "Software House Sukoharjo | M-One Solution",
        template: "%s | M-One Solution",
    },
    description: "Jasa pembuatan website & aplikasi profesional di Sukoharjo & Solo. Konsultasi GRATIS — hubungi M-One Solution sekarang!",
    keywords: "software house sukoharjo, jasa pembuatan website sukoharjo, web development solo, jasa IT sukoharjo, aplikasi web, sistem informasi, company profile sukoharjo",
    authors: [{ name: "M-One Solution" }],
    creator: "M-One Solution",
    openGraph: {
        type: "website",
        locale: "id_ID",
        url: BASE_URL,
        siteName: "M-One Solution",
        title: "Software House Sukoharjo | M-One Solution",
        description: "Jasa pembuatan website & aplikasi profesional di Sukoharjo & Solo. Konsultasi GRATIS — hubungi M-One Solution sekarang!",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "M-One Solution — Software House di Sukoharjo, Jawa Tengah",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Software House Sukoharjo | M-One Solution",
        description: "Jasa pembuatan website & aplikasi profesional di Sukoharjo & Solo. Konsultasi GRATIS — hubungi M-One Solution sekarang!",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    // Fetch global settings once for Footer and WhatsAppButton
    let settings: Settings | undefined;
    try {
        const res = await apiFetch<ApiResponse<Settings>>('/settings', { tags: ['settings'] });
        settings = res.data;
    } catch {
        // Fall back to siteConfig defaults if API unavailable
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "M-One Solution",
        "alternateName": "M-One Solution Software House",
        "description": "Software house di Sukoharjo, Jawa Tengah yang menyediakan jasa pembuatan website, aplikasi web, dan sistem informasi.",
        "url": BASE_URL,
        "telephone": "+6285168850712",
        "email": "monesolutionsoftwarehouse@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sukoharjo",
            "addressLocality": "Sukoharjo",
            "addressRegion": "Jawa Tengah",
            "postalCode": "57500",
            "addressCountry": "ID"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -7.6862,
            "longitude": 110.8327
        },
        "areaServed": ["Sukoharjo", "Solo", "Surakarta", "Jawa Tengah"],
        "sameAs": [
            "https://www.instagram.com/m.one_solution/"
        ],
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "17:00"
        },
        "priceRange": "$$",
        "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": -7.6862,
                "longitude": 110.8327
            },
            "geoRadius": "50000"
        }
    };

    return (
        <html lang="id" className={inter.variable}>
            <head>
                <Script
                    id="schema-localbusiness"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="font-sans antialiased">
                <Navbar />
                <ErrorBoundary>
                    <main>{children}</main>
                </ErrorBoundary>
                <Footer settings={settings} />
                <WhatsAppButton whatsappNumber={settings?.whatsapp_number} />
                <BackToTop />
            </body>
        </html>
    );
}
