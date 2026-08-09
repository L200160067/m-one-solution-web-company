import { describe, it, expect } from 'vitest';
import {
  mapWordPressPostToAppPost,
  mapWordPressProjectToAppProject,
  mapWordPressServiceToAppService,
  mapWordPressSettingsToAppSettings,
  type WordPressPost,
  type WordPressProject,
  type WordPressService,
  type WordPressSettings,
} from '@/lib/wordpress';
import { PostSchema, ProjectSchema, ServiceSchema, SettingsSchema } from '@/lib/validation/api';

describe('wordpress zod validation', () => {
  it('validates a valid post payload', () => {
    const wp: WordPressPost = {
      id: 1,
      slug: 'halo',
      date: '2026-01-01T00:00:00+07:00',
      title: { rendered: 'Halo' },
      content: { rendered: 'Konten' },
      excerpt: { rendered: 'Ringkasan' },
      _embedded: {
        author: [{ name: 'Author' }],
        'wp:featuredmedia': [{ source_url: 'https://example.com/cover.jpg' }],
        'wp:term': [[{ id: 1, name: 'Teknologi', slug: 'teknologi', taxonomy: 'category' }]],
      },
    };

    const result = mapWordPressPostToAppPost(wp);
    expect(result.title).toBe('Halo');
    expect(PostSchema.safeParse(result).success).toBe(true);
  });

  it('validates a valid service payload', () => {
    const wp: WordPressService = {
      id: 2,
      slug: 'layanan-a',
      title: { rendered: 'Layanan A' },
      content: { rendered: 'Deskripsi' },
      excerpt: { rendered: 'Ringkasan layanan' },
      acf: {
        features: 'F1\nF2',
        benefits: 'B1\nB2',
        keywords: 'web, aplikasi',
        icon_name: 'Globe',
      },
      _embedded: {
        'wp:featuredmedia': [{ source_url: 'https://example.com/img.jpg' }],
      },
    };

    const result = mapWordPressServiceToAppService(wp);
    expect(result.features).toEqual(['F1', 'F2']);
    expect(ServiceSchema.safeParse(result).success).toBe(true);
  });

  it('validates settings payload', () => {
    const wp: WordPressSettings = {
      acf: {
        company_name: 'M-One',
        contact_email: 'test@example.com',
        whatsapp_number: '6281',
      },
    };

    const result = mapWordPressSettingsToAppSettings(wp);
    expect(result.company_name).toBe('M-One');
    expect(SettingsSchema.safeParse(result).success).toBe(true);
  });
});
