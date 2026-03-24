import { About } from '@/components/About';
import { Team } from '@/components/Team';
import { Alumni } from '@/components/Alumni';
import { apiFetch } from '@/lib/api';
import type { ApiResponse, TeamMember, AlumniGroup } from '@/types/api';

export const metadata = {
    title: 'Tentang Kami | Software House Sukoharjo — M-One Solution',
    description: 'M-One Solution adalah software house di Sukoharjo, Jawa Tengah. Tim profesional yang fokus membangun website, aplikasi, dan sistem digital yang praktis dan efektif.',
    openGraph: {
        title: 'Tentang Kami | M-One Solution Software House Sukoharjo',
        description: 'Software house di Sukoharjo yang membantu bisnis tumbuh lewat website dan aplikasi digital yang tepat sasaran.',
        url: 'https://mone.mutudev.com/about',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tentang M-One Solution | Software House Sukoharjo',
        description: 'Tim pengembang profesional di Sukoharjo yang fokus membuat website, aplikasi, dan sistem digital yang praktis.',
    },
};

export default async function AboutPage() {
    let team: TeamMember[] = [];
    let groups: AlumniGroup[] = [];

    try {
        const [teamRes, alumniRes] = await Promise.all([
            apiFetch<ApiResponse<TeamMember[]>>('/team', { tags: ['team'] }),
            apiFetch<ApiResponse<AlumniGroup[]>>('/alumni', { tags: ['alumni'] })
        ]);
        team = teamRes.data;
        groups = alumniRes.data;
    } catch {
        // Handle error gracefully
    }

    return (
        <main className="pt-20 min-h-screen bg-white">
            <About />
            <Team team={team} />
            <Alumni groups={groups} />
        </main>
    );
}

