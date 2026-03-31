import type { 
    Post, 
    PostCategory, 
    Project, 
    Service, 
    Testimonial, 
    Partner, 
    TeamMember, 
    AlumniMember,
    AlumniGroup,
    Settings 
} from '@/types/api';

/**
 * Interface untuk struktur data dari WordPress REST API (parsial)
 */
export interface WordPressPost {
    id: number;
    slug: string;
    date: string;
    title: { rendered: string };
    content: { rendered: string };
    excerpt: { rendered: string };
    _embedded?: {
        author?: Array<{ name: string }>;
        'wp:featuredmedia'?: Array<{
            source_url: string;
            media_details?: {
                sizes?: {
                    medium?: { source_url: string };
                    thumbnail?: { source_url: string };
                }
            }
        }>;
        'wp:term'?: Array<Array<{
            id: number;
            name: string;
            slug: string;
            taxonomy: string;
        }>>;
    };
}

/**
 * Map WordPress REST API Post ke format Post aplikasi kita
 */
export function mapWordPressPostToAppPost(wpPost: WordPressPost): Post {
    if (!wpPost) return {} as Post; // Defensive check
    // Cari kategori pertama
    const categories = wpPost._embedded?.['wp:term']?.find(terms =>
        terms.some(term => term.taxonomy === 'category')
    );

    const category: PostCategory = categories && categories[0] ? {
        id: categories[0].id,
        name: categories[0].name,
        slug: categories[0].slug
    } : {
        id: 0,
        name: 'Uncategorized',
        slug: 'uncategorized'
    };

    // Ambil Gambar Unggulan (Featured Media)
    const featuredMedia = wpPost._embedded?.['wp:featuredmedia']?.[0];
    const cover_url = featuredMedia?.source_url || '';
    const cover_thumb = featuredMedia?.media_details?.sizes?.medium?.source_url
        || featuredMedia?.media_details?.sizes?.thumbnail?.source_url
        || cover_url;

    // Bersihkan HTML dari excerpt
    const cleanExcerpt = wpPost.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160) + '...';

    return {
        id: wpPost.id,
        title: wpPost.title.rendered,
        slug: wpPost.slug,
        excerpt: cleanExcerpt,
        content: wpPost.content.rendered,
        category: category,
        author: wpPost._embedded?.author?.[0]?.name || 'Admin',
        cover_url: cover_url,
        cover_thumb: cover_thumb,
        published_at: wpPost.date,
        meta_title: wpPost.title.rendered,
    };
}

/**
 * Interface untuk struktur data Proyek dari WordPress
 */
export interface WordPressProject {
    id: number;
    slug: string;
    title: { rendered: string };
    content: { rendered: string };
    excerpt: { rendered: string };
    acf?: {
        client_name?: string;
        project_url?: string;
        is_featured?: boolean;
    };
    _embedded?: {
        'wp:featuredmedia'?: Array<{ 
            source_url: string;
            media_details?: {
                sizes?: {
                    medium?: { source_url: string };
                    thumbnail?: { source_url: string };
                }
            }
        }>;
        'wp:term'?: Array<Array<{
            id: number;
            name: string;
            slug: string;
            taxonomy: string;
        }>>;
    };
}

/**
 * Map WordPress REST API Project ke format Project aplikasi kita
 */
export function mapWordPressProjectToAppProject(wpProject: WordPressProject): Project {
    if (!wpProject) return {} as Project;
    const categories = wpProject._embedded?.['wp:term']?.find(terms => 
        terms.some(term => term.taxonomy === 'project_category')
    );
    
    const categoryName = categories && categories[0] ? categories[0].name : 'Project';

    const featuredMedia = wpProject._embedded?.['wp:featuredmedia']?.[0];
    const image_url = featuredMedia?.source_url || '';
    const image_thumb = featuredMedia?.media_details?.sizes?.medium?.source_url 
                        || featuredMedia?.media_details?.sizes?.thumbnail?.source_url 
                        || image_url;

    const cleanDescription = wpProject.excerpt.rendered.replace(/<[^>]*>/g, '').trim();

    return {
        id: wpProject.id,
        title: wpProject.title.rendered,
        slug: wpProject.slug,
        category: categoryName,
        description: cleanDescription,
        client_name: wpProject.acf?.client_name || 'Personal Client',
        project_url: wpProject.acf?.project_url || '#',
        is_featured: wpProject.acf?.is_featured || false,
        image_url: image_url,
        image_thumb: image_thumb
    };
}

/**
 * Interface untuk struktur data Layanan dari WordPress
 */
export interface WordPressService {
    id: number;
    slug: string;
    title: { rendered: string };
    content: { rendered: string };
    excerpt: { rendered: string };
    acf?: {
        icon_name?: string;
        features?: string;
        benefits?: string;
        keywords?: string;
    };
    _embedded?: {
        'wp:featuredmedia'?: Array<{ 
            source_url: string;
            media_details?: {
                sizes?: {
                    medium?: { source_url: string };
                    thumbnail?: { source_url: string };
                }
            }
        }>;
    };
}

/**
 * Map WordPress REST API Service ke format Service aplikasi kita
 */
export function mapWordPressServiceToAppService(wpService: WordPressService): Service {
    if (!wpService) return {} as Service;
    const featuredMedia = wpService._embedded?.['wp:featuredmedia']?.[0];
    const image_url = featuredMedia?.source_url || '';
    const image_thumb = featuredMedia?.media_details?.sizes?.medium?.source_url 
                        || featuredMedia?.media_details?.sizes?.thumbnail?.source_url 
                        || image_url;

    const cleanShortDesc = wpService.excerpt.rendered.replace(/<[^>]*>/g, '').trim();

    const stringToArray = (str: any) => {
        if (!str) return [];
        if (Array.isArray(str)) return str.map(s => String(s).trim()).filter(s => s.length > 0);
        if (typeof str !== 'string') return [];
        return str.split(/\r?\n/).map(line => line.trim()).filter(line => line.length > 0);
    };

    return {
        id: wpService.id,
        title: wpService.title.rendered,
        slug: wpService.slug,
        category: 'Development',
        short_description: cleanShortDesc,
        full_description: wpService.content.rendered,
        features: stringToArray(wpService.acf?.features),
        benefits: stringToArray(wpService.acf?.benefits),
        keywords: wpService.acf?.keywords ? wpService.acf.keywords.split(',').map(s => s.trim()) : [],
        image_url: image_url,
        image_thumb: image_thumb,
        icon_name: wpService.acf?.icon_name
    };
}

/**
 * WordPress Team Member Interface
 */
export interface WordPressTeamMember {
    id: number;
    title: { rendered: string };
    acf?: {
        role?: string;
        social_linkedin?: string;
        social_github?: string;
        social_instagram?: string;
    };
    _embedded?: {
        'wp:featuredmedia'?: Array<{ source_url: string }>;
    };
}

export function mapWordPressTeamMemberToAppTeamMember(wpTeam: WordPressTeamMember): TeamMember {
    if (!wpTeam) return {} as TeamMember;
    const avatar_url = wpTeam._embedded?.['wp:featuredmedia']?.[0]?.source_url || '';
    return {
        id: wpTeam.id,
        name: wpTeam.title.rendered,
        role: wpTeam.acf?.role || 'Team Member',
        social_linkedin: wpTeam.acf?.social_linkedin || '#',
        social_github: wpTeam.acf?.social_github || '#',
        social_instagram: wpTeam.acf?.social_instagram || '#',
        avatar_url: avatar_url
    };
}

/**
 * WordPress Testimonial Interface
 */
export interface WordPressTestimonial {
    id: number;
    title: { rendered: string };
    content: { rendered: string };
    acf?: {
        role?: string;
        company?: string;
        rating?: number;
    };
    _embedded?: {
        'wp:featuredmedia'?: Array<{ source_url: string }>;
    };
}

export function mapWordPressTestimonialToAppTestimonial(wpTestimonial: WordPressTestimonial): Testimonial {
    if (!wpTestimonial) return {} as Testimonial;
    const avatar_url = wpTestimonial._embedded?.['wp:featuredmedia']?.[0]?.source_url || '';
    return {
        id: wpTestimonial.id,
        name: wpTestimonial.title.rendered,
        role: wpTestimonial.acf?.role || 'Client',
        company: wpTestimonial.acf?.company || '',
        content: wpTestimonial.content.rendered.replace(/<[^>]*>/g, '').trim(),
        rating: Number(wpTestimonial.acf?.rating) || 5,
        avatar_url: avatar_url
    };
}

/**
 * WordPress Partner Interface
 */
export interface WordPressPartner {
    id: number;
    title: { rendered: string };
    _embedded?: {
        'wp:featuredmedia'?: Array<{ source_url: string }>;
    };
}

export function mapWordPressPartnerToAppPartner(wpPartner: WordPressPartner): Partner {
    if (!wpPartner) return {} as Partner;
    return {
        id: wpPartner.id,
        name: wpPartner.title.rendered,
        logo_url: wpPartner._embedded?.['wp:featuredmedia']?.[0]?.source_url || ''
    };
}

/**
 * WordPress Alumni Interface
 */
export interface WordPressAlumni {
    id: number;
    title: { rendered: string };
    acf?: {
        school?: string;
        batch_period?: string;
    };
    _embedded?: {
        'wp:featuredmedia'?: Array<{ source_url: string }>;
    };
}

export function mapWordPressAlumniToAppAlumni(wpAlumni: WordPressAlumni): AlumniMember {
    if (!wpAlumni) return {} as AlumniMember;
    return {
        id: wpAlumni.id,
        name: wpAlumni.title.rendered,
        school: wpAlumni.acf?.school || '',
        batch_period: wpAlumni.acf?.batch_period || '2024',
        photo_url: wpAlumni._embedded?.['wp:featuredmedia']?.[0]?.source_url || ''
    };
}

/**
 * Group alumni by batch period
 */
export function groupAlumni(alumni: AlumniMember[]): AlumniGroup[] {
    const groups: { [key: string]: AlumniMember[] } = {};
    
    alumni.forEach(member => {
        if (!groups[member.batch_period]) {
            groups[member.batch_period] = [];
        }
        groups[member.batch_period].push(member);
    });

    return Object.entries(groups).map(([batch, members]) => ({
        batch_period: batch,
        members: members
    })).sort((a, b) => b.batch_period.localeCompare(a.batch_period));
}

/**
 * WordPress Settings Interface (assuming ACF Options page or regular page)
 */
export interface WordPressSettings {
    acf?: {
        company_name?: string;
        company_address?: string;
        contact_email?: string;
        contact_phone?: string;
        whatsapp_number?: string;
        facebook_url?: string;
        instagram_url?: string;
        tiktok_url?: string;
        youtube_url?: string;
        linkedin_url?: string;
    };
}

export function mapWordPressSettingsToAppSettings(wpSettings: WordPressSettings): Settings {
    const acf = wpSettings?.acf;
    return {
        company_name: acf?.company_name || 'M-One Solution',
        company_address: acf?.company_address || '',
        contact_email: acf?.contact_email || '',
        contact_phone: acf?.contact_phone || '',
        whatsapp_number: acf?.whatsapp_number || '',
        facebook_url: acf?.facebook_url || '#',
        instagram_url: acf?.instagram_url || '#',
        tiktok_url: acf?.tiktok_url || '#',
        youtube_url: acf?.youtube_url || '#',
        linkedin_url: acf?.linkedin_url || '#'
    };
}
