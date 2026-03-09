export interface TeamMember {
    name: string;
    role: string;
    image: string;
    social: {
        linkedin?: string;
        github?: string;
        twitter?: string;
    };
}

export const teamData: TeamMember[] = [
    {
        name: "Alfarez Syahputra Kuri, S.Kom",
        role: "Manajer & Founder",
        image: "https://picsum.photos/seed/founder/400/400.webp",
        social: {
            linkedin: "",
            github: "",
        },
    },
    {
        name: "Siti Rahmawati",
        role: "Lead Developer",
        image: "https://picsum.photos/seed/leaddev/400/400.webp",
        social: {
            linkedin: "",
            github: "",
        },
    },
    {
        name: "Agus Pratama",
        role: "UI/UX Designer",
        image: "https://picsum.photos/seed/designer/400/400.webp",
        social: {
            linkedin: "",
        },
    },
    {
        name: "Dewi Lestari",
        role: "Project Manager",
        image: "https://picsum.photos/seed/pm/400/400.webp",
        social: {
            linkedin: "",
        },
    },
];
