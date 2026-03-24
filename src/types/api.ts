// ─── API Response wrapper ─────────────────────────────────────────────────────
export interface ApiResponse<T> {
    success: boolean;
    data: T;
}

// ─── Blog Posts ───────────────────────────────────────────────────────────────
export interface PostCategory {
    id: number;
    name: string;
    slug: string;
}

export interface Post {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content?: string; // only present on detail endpoint
    meta_title?: string;       // explicit SEO title — falls back to title
    meta_description?: string; // explicit SEO description — falls back to excerpt
    category: PostCategory;
    author?: string;
    cover_url: string;
    cover_thumb: string;
    published_at: string; // ISO date string
}

// ─── Services ─────────────────────────────────────────────────────────────────
export interface Service {
    id: number;
    title: string;
    slug: string;
    category: string;
    short_description: string;
    full_description: string;
    features: string[];
    benefits: string[];
    keywords: string[];
    image_url: string;
    image_thumb: string;
}

// ─── Projects / Portfolio ─────────────────────────────────────────────────────
export interface Project {
    id: number;
    title: string;
    slug: string;
    category: string;
    description: string;
    client_name: string;
    project_url?: string;
    is_featured: boolean;
    image_url: string;
    image_thumb: string;
}

// ─── Team ─────────────────────────────────────────────────────────────────────
export interface TeamMember {
    id: number;
    name: string;
    role: string;
    social_linkedin?: string;
    social_github?: string;
    social_instagram?: string;
    avatar_url: string;
}

// ─── Alumni ───────────────────────────────────────────────────────────────────
export interface AlumniMember {
    id: number;
    name: string;
    school: string;
    batch_period: string;
    photo_url: string;
}

export interface AlumniGroup {
    batch_period: string;
    members: AlumniMember[];
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
export interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    avatar_url: string;
}

// ─── Partners ─────────────────────────────────────────────────────────────────
export interface Partner {
    id: number;
    name: string;
    logo_url: string;
}

// ─── Settings ─────────────────────────────────────────────────────────────────
export interface Settings {
    company_name: string;
    company_address: string;
    contact_email: string;
    contact_phone: string;
    whatsapp_number: string;
    facebook_url: string;
    instagram_url: string;
    tiktok_url: string;
    youtube_url: string;
    linkedin_url: string;
}
