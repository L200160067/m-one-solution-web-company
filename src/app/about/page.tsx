import { About } from '@/components/About';
import { Team } from '@/components/Team';
import { Alumni } from '@/components/Alumni';
import { apiFetch } from '@/lib/api';
import type { ApiResponse, TeamMember, AlumniGroup } from '@/types/api';

export const metadata = {
    title: 'About Us | M-One Solution Software House',
    description: 'M-One Solution hadir untuk mengubah ide menjadi kenyataan. Kami adalah tim pengembang yang fokus menciptakan aplikasi dan website yang praktis, intuitif, dan efektif.',
    openGraph: {
        title: 'About Us | M-One Solution Software House',
        description: 'M-One Solution hadir untuk mengubah ide menjadi kenyataan. Kami adalah tim pengembang yang fokus menciptakan aplikasi dan website yang praktis, intuitif, dan efektif.',
        url: 'https://www.monesolution.com/about',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Us | M-One Solution',
        description: 'Tim pengembang yang fokus menciptakan aplikasi dan website yang praktis, intuitif, dan efektif.',
    },
};

export default async function AboutPage() {
    let team: TeamMember[] = [];
    let groups: AlumniGroup[] = [];

    try {
        const [teamRes, alumniRes] = await Promise.all([
            apiFetch<ApiResponse<TeamMember[]>>('/team'),
            apiFetch<ApiResponse<AlumniGroup[]>>('/alumni')
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

