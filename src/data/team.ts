import { siteConfig } from '@/config/site';

export interface TeamMember {
    name: string;
    role: string;
    image: string;
    social: {
        linkedin?: string;
        github?: string;
        twitter?: string;
        instagram?: string;
    };
}

export const teamData: TeamMember[] = [
    {
        name: "Alfarez Syahputra Kuri, S.Kom",
        role: "Manajer & Founder",
        image: `${siteConfig.cdnUrl}/images/team/Alfarez.webp`,
        social: {
            linkedin: "https://www.linkedin.com/in/alfarez-syahputra-kuri-b53bab231?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bu1y89E61QRCWarNrAyFxww%3D%3D",
            github: "https://github.com/L200160067",
            instagram: "https://www.instagram.com/alfarezkuri/",
        },
    },
    {
        name: "Siti Rahmawati",
        role: "Lead Developer",
        image: `${siteConfig.cdnUrl}/images/team/leaddev.webp`,
        social: {
            linkedin: "",
            github: "",
        },
    },
    {
        name: "Agus Pratama",
        role: "UI/UX Designer",
        image: `${siteConfig.cdnUrl}/images/team/designer.webp`,
        social: {
            linkedin: "",
        },
    },
    {
        name: "Dewi Lestari",
        role: "Project Manager",
        image: `${siteConfig.cdnUrl}/images/team/pm.webp`,
        social: {
            linkedin: "",
        },
    },
];
