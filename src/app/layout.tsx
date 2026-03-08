import "../index.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Inter } from "next/font/google";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const BASE_URL = "https://www.m-one.mutudev.com";

export const metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        default: "M-One Solution Software House | Your True Solution",
        template: "%s | M-One Solution",
    },
    description: "Tingkatkan visibilitas dan konversi bisnis Anda dengan website profesional dan aplikasi dari M-One Solution. Software house terpercaya di Sukoharjo, Indonesia.",
    keywords: "software house, jasa pembuatan website, web development, aplikasi web, sistem informasi, company profile website, sukoharjo",
    authors: [{ name: "M-One Solution" }],
    creator: "M-One Solution",
    openGraph: {
        type: "website",
        locale: "id_ID",
        url: BASE_URL,
        siteName: "M-One Solution",
        title: "M-One Solution Software House | Your True Solution",
        description: "Tingkatkan visibilitas dan konversi bisnis Anda dengan website profesional dan aplikasi dari M-One Solution.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "M-One Solution Software House",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "M-One Solution Software House | Your True Solution",
        description: "Tingkatkan visibilitas dan konversi bisnis Anda dengan website profesional dan aplikasi dari M-One Solution.",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="id" className={inter.variable}>
            <body className="font-sans antialiased">
                <Navbar />
                <ErrorBoundary>
                    <main>{children}</main>
                </ErrorBoundary>
                <Footer />
            </body>
        </html>
    );
}
