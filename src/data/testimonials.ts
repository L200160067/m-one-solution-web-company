export interface Testimonial {
    quote: string;
    author: string;
    role: string;
    company: string;
    image: string;
    rating: number;
}

export const testimonialsData: Testimonial[] = [
    {
        quote: "M-One Solution memberikan pelayanan yang luar biasa. Website sekolah kami kini jauh lebih modern dan mudah digunakan oleh siswa maupun guru.",
        author: "Budi Santoso, S.Pd.",
        role: "Kepala Sekolah",
        company: "Institusi Pendidikan",
        image: "https://picsum.photos/seed/user1/100/100.webp",
        rating: 5,
    },
    {
        quote: "Aplikasi organisasi yang dibuat sangat membantu efisiensi kerja tim kami. Fiturnya lengkap dan sesuai dengan kebutuhan nyata di lapangan.",
        author: "Dewi Rahayu",
        role: "Direktur Operasional",
        company: "Organisasi Nirlaba",
        image: "https://picsum.photos/seed/user2/100/100.webp",
        rating: 5,
    },
    {
        quote: "Tim yang profesional dan responsif. Mereka benar-benar memahami apa yang kami butuhkan dan memberikan solusi yang tepat sasaran.",
        author: "Ahmad Fauzi",
        role: "CEO & Founder",
        company: "Startup Tech",
        image: "https://picsum.photos/seed/user3/100/100.webp",
        rating: 5,
    },
];
