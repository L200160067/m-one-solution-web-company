export const siteConfig = {
    name: "M-One Solution",
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://mone.mutudev.com',
    cdnUrl: process.env.NEXT_PUBLIC_CDN_URL || 'https://l200160067.github.io/mone-assets',
    logo: `${process.env.NEXT_PUBLIC_CDN_URL || 'https://l200160067.github.io/mone-assets'}/images/branding/mone.webp`,
    whatsapp: {
        number: "6285168850712", // Ganti dengan nomor WhatsApp asli
        defaultMessage: "Halo M-One Solution, saya ingin berkonsultasi mengenai layanan Anda."
    },
    social: {
        linkedin: "",
        instagram: "https://www.instagram.com/m.one_solution/",
        twitter: "",
        facebook: ""
    },
    contact: {
        email: "monesolutionsoftwarehouse@gmail.com",
        address: "Sukoharjo, Jawa Tengah, Indonesia",
        city: "Sukoharjo",
        region: "Jawa Tengah",
        country: "ID"
    }
};
