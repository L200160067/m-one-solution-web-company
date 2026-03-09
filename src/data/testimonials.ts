import { siteConfig } from '@/config/site';

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    image: string;
    rating: number;
}

export const testimonialsData: Testimonial[] = [
    {
        id: "1",
        name: "Budi Santoso",
        role: "Kepala Sekolah",
        company: "SMA Negeri 1 Jaya",
        content: "Sistem Informasi Akademik yang dibuat oleh M-One Solution sangat membantu dalam mendigitalisasi proses belajar mengajar di sekolah kami. Antarmukanya intuitif dan mudah digunakan oleh guru maupun siswa.",
        image: `${siteConfig.cdnUrl}/images/testimonials/user1.webp`,
        rating: 5,
    },
    {
        id: "2",
        name: "Andi Wijaya",
        role: "Direktur",
        company: "PT Maju Terus",
        content: "Pembuatan Company Profile berjalan sangat lancar. Desainnya modern dan sesuai dengan yang kami harapkan. Tim M-One juga responsif terhadap revisi.",
        image: `${siteConfig.cdnUrl}/images/testimonials/user2.webp`,
        rating: 5,
    },
    {
        id: "3",
        name: "Siti Aminah",
        role: "Pemilik",
        company: "Batik Berkah",
        content: "Aplikasi e-commerce custom yang dibangun sangat fungsional. Kami bisa mengelola stok dan pesanan dengan lebih efisien sekarang. Terima kasih M-One Solution!",
        image: `${siteConfig.cdnUrl}/images/testimonials/user3.webp`,
        rating: 5,
    },
];
