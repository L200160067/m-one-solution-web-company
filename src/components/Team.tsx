import { Github, Linkedin, Instagram, User as UserIcon } from 'lucide-react';
import type { TeamMember } from '@/types/api';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { WpImage } from '@/components/image/WpImage';

interface TeamProps {
    team: TeamMember[];
}

export function Team({ team }: TeamProps) {
    if (!team || !Array.isArray(team)) return null;
    
    return (
        <Section className="bg-slate-50 border-t border-slate-100 relative overflow-hidden">
            <Container>
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                        Tim Kami
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                      Orang-orang Hebat di Balik Layar
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Berkenalan dengan para profesional yang berdedikasi tinggi untuk mewujudkan visi digital Anda.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member) => (
                        <div key={member.id} className="group">
                            <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 bg-slate-100">
                                <WpImage
                                    src={member.avatar_url}
                                    alt={member.name}
                                    fill
                                    sizes="(max-width: 640px) 50vw, 25vw"
                                    loading="lazy"
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    fallback={
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-300 transition-transform duration-500 group-hover:scale-110">
                                            <UserIcon className="w-16 h-16 opacity-50" />
                                        </div>
                                    }
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                                    {member.social_linkedin && member.social_linkedin !== '#' && (
                                        <a
                                            href={member.social_linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-blue-600 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                                            aria-label={`LinkedIn ${member.name}`}
                                        >
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                    )}
                                    {member.social_github && member.social_github !== '#' && (
                                        <a
                                            href={member.social_github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-slate-800 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-100"
                                            aria-label={`GitHub ${member.name}`}
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                    )}
                                    {member.social_instagram && member.social_instagram !== '#' && (
                                        <a
                                            href={member.social_instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-pink-600 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-150"
                                            aria-label={`Instagram ${member.name}`}
                                        >
                                            <Instagram className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                                <p className="text-blue-600 font-medium">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
