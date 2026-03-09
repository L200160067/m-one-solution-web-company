import logoImage from '../assets/logo/mone.webp';

export const siteConfig = {
    name: "M-One Solution",
    // @ts-ignore
    logo: logoImage.src || logoImage,
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
        address: "Sukoharjo, Indonesia"
    }
};
