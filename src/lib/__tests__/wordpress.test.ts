/**
 * Unit Tests: wordpress.ts mapper functions
 *
 * Memastikan semua mapper WP REST API → App data model
 * berjalan benar tanpa perlu koneksi ke WordPress.
 */

import { describe, it, expect } from 'vitest';
import {
  mapWordPressPostToAppPost,
  mapWordPressProjectToAppProject,
  mapWordPressServiceToAppService,
  mapWordPressTeamMemberToAppTeamMember,
  mapWordPressTestimonialToAppTestimonial,
  mapWordPressPartnerToAppPartner,
  mapWordPressAlumniToAppAlumni,
  mapWordPressSettingsToAppSettings,
  groupAlumni,
  type WordPressPost,
  type WordPressProject,
  type WordPressService,
  type WordPressTeamMember,
  type WordPressTestimonial,
  type WordPressPartner,
  type WordPressAlumni,
  type WordPressSettings,
} from '../wordpress';

// ─── Fixtures ─────────────────────────────────────────────────────────────────

const mockWpPost: WordPressPost = {
  id: 1,
  slug: 'test-post',
  date: '2024-01-15T10:00:00',
  title: { rendered: 'Test Post' },
  content: { rendered: '<p>Isi konten lengkap</p>' },
  excerpt: { rendered: '<p>Ringkasan post ini.</p>' },
  _embedded: {
    author: [{ name: 'Admin M-One' }],
    'wp:featuredmedia': [{
      source_url: 'https://example.com/image.jpg',
      media_details: {
        sizes: {
          medium: { source_url: 'https://example.com/image-medium.jpg' },
          thumbnail: { source_url: 'https://example.com/image-thumb.jpg' },
        },
      },
    }],
    'wp:term': [[
      { id: 5, name: 'Teknologi', slug: 'teknologi', taxonomy: 'category' },
    ]],
  },
};

const mockWpProject: WordPressProject = {
  id: 2,
  slug: 'project-website',
  title: { rendered: 'Website Perusahaan XYZ' },
  content: { rendered: '<p>Deskripsi detail proyek.</p>' },
  excerpt: { rendered: '<p>Ringkasan proyek.</p>' },
  acf: {
    client_name: 'PT XYZ Indonesia',
    project_url: 'https://xyz.co.id',
    is_featured: true,
  },
  _embedded: {
    'wp:featuredmedia': [{
      source_url: 'https://example.com/project.jpg',
      media_details: {
        sizes: {
          medium: { source_url: 'https://example.com/project-medium.jpg' },
        },
      },
    }],
    'wp:term': [[
      { id: 3, name: 'Web Development', slug: 'web-development', taxonomy: 'project_category' },
    ]],
  },
};

const mockWpService: WordPressService = {
  id: 3,
  slug: 'pembuatan-website',
  title: { rendered: 'Pembuatan Website Profesional' },
  content: { rendered: '<p>Deskripsi lengkap layanan.</p>' },
  excerpt: { rendered: '<p>Kami membuat website profesional.</p>' },
  acf: {
    icon_name: 'Globe',
    features: 'Desain responsif\nSEO Friendly\nCepat loading',
    benefits: 'Meningkatkan kepercayaan\nJangkauan lebih luas',
    keywords: 'website, web design, profesional',
  },
  _embedded: {
    'wp:featuredmedia': [{
      source_url: 'https://example.com/service.jpg',
      media_details: { sizes: {} },
    }],
  },
};

const mockWpTeamMember: WordPressTeamMember = {
  id: 4,
  title: { rendered: 'Budi Santoso' },
  acf: {
    role: 'Lead Developer',
    social_linkedin: 'https://linkedin.com/in/budi',
    social_github: 'https://github.com/budi',
    social_instagram: 'https://instagram.com/budi',
  },
  _embedded: {
    'wp:featuredmedia': [{ source_url: 'https://example.com/budi.jpg' }],
  },
};

const mockWpTestimonial: WordPressTestimonial = {
  id: 5,
  title: { rendered: 'Siti Rahayu' },
  content: { rendered: '<p>Layanan yang sangat memuaskan dan profesional.</p>' },
  acf: {
    role: 'CEO',
    company: 'PT Maju Bersama',
    rating: 5,
  },
  _embedded: {
    'wp:featuredmedia': [{ source_url: 'https://example.com/siti.jpg' }],
  },
};

const mockWpPartner: WordPressPartner = {
  id: 6,
  title: { rendered: 'Google Indonesia' },
  _embedded: {
    'wp:featuredmedia': [{ source_url: 'https://example.com/google-logo.png' }],
  },
};

const mockWpAlumni: WordPressAlumni = {
  id: 7,
  title: { rendered: 'Andi Prasetyo' },
  acf: {
    school: 'SMK Negeri 1 Jakarta',
    batch_period: '2023',
  },
  _embedded: {
    'wp:featuredmedia': [{ source_url: 'https://example.com/andi.jpg' }],
  },
};

const mockWpSettings: WordPressSettings = {
  acf: {
    company_name: 'M-One Solution',
    company_address: 'Jl. Raya No. 1, Jakarta',
    contact_email: 'info@mone.id',
    contact_phone: '+62 812 3456 7890',
    whatsapp_number: '6281234567890',
    facebook_url: 'https://facebook.com/mone',
    instagram_url: 'https://instagram.com/mone',
    tiktok_url: 'https://tiktok.com/@mone',
    youtube_url: 'https://youtube.com/mone',
    linkedin_url: 'https://linkedin.com/company/mone',
  },
};

// ─── Tests: Post Mapper ────────────────────────────────────────────────────────

describe('mapWordPressPostToAppPost', () => {
  it('memetakan semua field dengan benar', () => {
    const result = mapWordPressPostToAppPost(mockWpPost);
    expect(result.id).toBe(1);
    expect(result.slug).toBe('test-post');
    expect(result.title).toBe('Test Post');
    expect(result.author).toBe('Admin M-One');
    expect(result.published_at).toBe('2024-01-15T10:00:00');
    expect(result.cover_url).toBe('https://example.com/image.jpg');
    expect(result.cover_thumb).toBe('https://example.com/image-medium.jpg');
  });

  it('mengambil kategori dari wp:term', () => {
    const result = mapWordPressPostToAppPost(mockWpPost);
    expect(result.category.name).toBe('Teknologi');
    expect(result.category.slug).toBe('teknologi');
  });

  it('membersihkan HTML dari excerpt', () => {
    const result = mapWordPressPostToAppPost(mockWpPost);
    expect(result.excerpt).not.toContain('<p>');
  });

  it('fallback ke Uncategorized jika tidak ada term', () => {
    const noTermPost = { ...mockWpPost, _embedded: { ...mockWpPost._embedded, 'wp:term': [] } };
    const result = mapWordPressPostToAppPost(noTermPost as WordPressPost);
    expect(result.category.name).toBe('Uncategorized');
  });

  it('mengembalikan objek kosong jika input null/undefined', () => {
    const result = mapWordPressPostToAppPost(null as unknown as WordPressPost);
    expect(result).toEqual({});
  });
});

// ─── Tests: Project Mapper ─────────────────────────────────────────────────────

describe('mapWordPressProjectToAppProject', () => {
  it('memetakan semua field ACF dengan benar', () => {
    const result = mapWordPressProjectToAppProject(mockWpProject);
    expect(result.id).toBe(2);
    expect(result.title).toBe('Website Perusahaan XYZ');
    expect(result.slug).toBe('project-website');
    expect(result.client_name).toBe('PT XYZ Indonesia');
    expect(result.project_url).toBe('https://xyz.co.id');
    expect(result.is_featured).toBe(true);
    expect(result.image_url).toBe('https://example.com/project.jpg');
    expect(result.image_thumb).toBe('https://example.com/project-medium.jpg');
  });

  it('mengambil kategori dari taxonomy project_category', () => {
    const result = mapWordPressProjectToAppProject(mockWpProject);
    expect(result.category).toBe('Web Development');
  });

  it('fallback client_name jika ACF kosong', () => {
    const noAcf = { ...mockWpProject, acf: undefined };
    const result = mapWordPressProjectToAppProject(noAcf);
    expect(result.client_name).toBe('Personal Client');
    expect(result.is_featured).toBe(false);
  });
});

// ─── Tests: Service Mapper ─────────────────────────────────────────────────────

describe('mapWordPressServiceToAppService', () => {
  it('memetakan semua field dengan benar', () => {
    const result = mapWordPressServiceToAppService(mockWpService);
    expect(result.id).toBe(3);
    expect(result.title).toBe('Pembuatan Website Profesional');
    expect(result.slug).toBe('pembuatan-website');
    expect(result.icon_name).toBe('Globe');
  });

  it('memecah features dari string multiline menjadi array', () => {
    const result = mapWordPressServiceToAppService(mockWpService);
    expect(Array.isArray(result.features)).toBe(true);
    expect(result.features).toHaveLength(3);
    expect(result.features[0]).toBe('Desain responsif');
  });

  it('memecah benefits dari string multiline menjadi array', () => {
    const result = mapWordPressServiceToAppService(mockWpService);
    expect(Array.isArray(result.benefits)).toBe(true);
    expect(result.benefits).toHaveLength(2);
  });

  it('memecah keywords dari string koma menjadi array', () => {
    const result = mapWordPressServiceToAppService(mockWpService);
    expect(Array.isArray(result.keywords)).toBe(true);
    expect(result.keywords).toContain('website');
    expect(result.keywords).toContain('web design');
  });

  it('features/benefits menjadi array kosong jika ACF tidak ada', () => {
    const noAcf = { ...mockWpService, acf: undefined };
    const result = mapWordPressServiceToAppService(noAcf);
    expect(result.features).toEqual([]);
    expect(result.benefits).toEqual([]);
    expect(result.keywords).toEqual([]);
  });
});

// ─── Tests: Team Member Mapper ────────────────────────────────────────────────

describe('mapWordPressTeamMemberToAppTeamMember', () => {
  it('memetakan semua field dengan benar', () => {
    const result = mapWordPressTeamMemberToAppTeamMember(mockWpTeamMember);
    expect(result.id).toBe(4);
    expect(result.name).toBe('Budi Santoso');
    expect(result.role).toBe('Lead Developer');
    expect(result.social_linkedin).toBe('https://linkedin.com/in/budi');
    expect(result.social_github).toBe('https://github.com/budi');
    expect(result.social_instagram).toBe('https://instagram.com/budi');
    expect(result.avatar_url).toBe('https://example.com/budi.jpg');
  });

  it('fallback role jika ACF tidak ada', () => {
    const noAcf = { ...mockWpTeamMember, acf: undefined };
    const result = mapWordPressTeamMemberToAppTeamMember(noAcf);
    expect(result.role).toBe('Team Member');
  });
});

// ─── Tests: Testimonial Mapper ────────────────────────────────────────────────

describe('mapWordPressTestimonialToAppTestimonial', () => {
  it('memetakan semua field dengan benar', () => {
    const result = mapWordPressTestimonialToAppTestimonial(mockWpTestimonial);
    expect(result.id).toBe(5);
    expect(result.name).toBe('Siti Rahayu');
    expect(result.role).toBe('CEO');
    expect(result.company).toBe('PT Maju Bersama');
    expect(result.rating).toBe(5);
    expect(result.avatar_url).toBe('https://example.com/siti.jpg');
  });

  it('membersihkan HTML dari content', () => {
    const result = mapWordPressTestimonialToAppTestimonial(mockWpTestimonial);
    expect(result.content).not.toContain('<p>');
    expect(result.content).toContain('memuaskan');
  });

  it('default rating 5 jika ACF tidak ada', () => {
    const noAcf = { ...mockWpTestimonial, acf: undefined };
    const result = mapWordPressTestimonialToAppTestimonial(noAcf);
    expect(result.rating).toBe(5);
    expect(result.role).toBe('Client');
  });
});

// ─── Tests: Partner Mapper ────────────────────────────────────────────────────

describe('mapWordPressPartnerToAppPartner', () => {
  it('memetakan nama dan logo dengan benar', () => {
    const result = mapWordPressPartnerToAppPartner(mockWpPartner);
    expect(result.id).toBe(6);
    expect(result.name).toBe('Google Indonesia');
    expect(result.logo_url).toBe('https://example.com/google-logo.png');
  });

  it('logo_url kosong string jika tidak ada featured media', () => {
    const noMedia = { ...mockWpPartner, _embedded: undefined };
    const result = mapWordPressPartnerToAppPartner(noMedia);
    expect(result.logo_url).toBe('');
  });
});

// ─── Tests: Alumni Mapper ────────────────────────────────────────────────────

describe('mapWordPressAlumniToAppAlumni', () => {
  it('memetakan semua field dengan benar', () => {
    const result = mapWordPressAlumniToAppAlumni(mockWpAlumni);
    expect(result.id).toBe(7);
    expect(result.name).toBe('Andi Prasetyo');
    expect(result.school).toBe('SMK Negeri 1 Jakarta');
    expect(result.batch_period).toBe('2023');
    expect(result.photo_url).toBe('https://example.com/andi.jpg');
  });

  it('default batch_period 2024 jika ACF kosong', () => {
    const noAcf = { ...mockWpAlumni, acf: undefined };
    const result = mapWordPressAlumniToAppAlumni(noAcf);
    expect(result.batch_period).toBe('2024');
    expect(result.school).toBe('');
  });
});

// ─── Tests: groupAlumni ───────────────────────────────────────────────────────

describe('groupAlumni', () => {
  it('mengelompokkan alumni berdasarkan batch_period', () => {
    const alumni = [
      { id: 1, name: 'A', school: 'SMK', batch_period: '2023', photo_url: '' },
      { id: 2, name: 'B', school: 'SMK', batch_period: '2023', photo_url: '' },
      { id: 3, name: 'C', school: 'SMA', batch_period: '2024', photo_url: '' },
    ];
    const groups = groupAlumni(alumni);
    expect(groups).toHaveLength(2);
    expect(groups[0].batch_period).toBe('2024'); // descending sort
    expect(groups[1].members).toHaveLength(2);
  });

  it('mengembalikan array kosong untuk input kosong', () => {
    expect(groupAlumni([])).toEqual([]);
  });
});

// ─── Tests: Settings Mapper ───────────────────────────────────────────────────

describe('mapWordPressSettingsToAppSettings', () => {
  it('memetakan semua field ACF dengan benar', () => {
    const result = mapWordPressSettingsToAppSettings(mockWpSettings);
    expect(result.company_name).toBe('M-One Solution');
    expect(result.company_address).toBe('Jl. Raya No. 1, Jakarta');
    expect(result.contact_email).toBe('info@mone.id');
    expect(result.contact_phone).toBe('+62 812 3456 7890');
    expect(result.whatsapp_number).toBe('6281234567890');
    expect(result.facebook_url).toBe('https://facebook.com/mone');
    expect(result.instagram_url).toBe('https://instagram.com/mone');
    expect(result.tiktok_url).toBe('https://tiktok.com/@mone');
    expect(result.youtube_url).toBe('https://youtube.com/mone');
    expect(result.linkedin_url).toBe('https://linkedin.com/company/mone');
  });

  it('fallback ke nilai default jika ACF kosong', () => {
    const result = mapWordPressSettingsToAppSettings({} as WordPressSettings);
    expect(result.company_name).toBe('M-One Solution');
    expect(result.facebook_url).toBe('#');
    expect(result.instagram_url).toBe('#');
  });
});
