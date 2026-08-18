const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL || 'https://l200160067.github.io/mone-assets';

export const siteConfig = {
    name: "M-One Solution",
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
    cdnUrl,
    logo: '/images/branding/mone.webp',
    whatsapp: {
        number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6285879535070",
        defaultMessage: "Halo M-One Solution, saya ingin berkonsultasi mengenai layanan Anda."
    },
    social: {
        linkedin: "https://www.linkedin.com/company/m-one-solution/",
        instagram: "https://www.instagram.com/m.one_solution/",
        twitter: "",
        facebook: ""
    },
    contact: {
        email: "monesolutionsoftwarehouse@gmail.com",
        address: "Jl. Wandyo Pranoto No.Rt. 03, RT.03/RW.02, Denokan, Jetis, Kec. Sukoharjo, Kabupaten Sukoharjo, Jawa Tengah 57511",
        city: "Sukoharjo",
        region: "Jawa Tengah",
        country: "ID"
    }
};
