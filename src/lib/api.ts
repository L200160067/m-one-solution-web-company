/**
 * ============================================================
 * api.ts – Direct WordPress Backend Mode
 * ============================================================
 * Semua panggilan API diarahkan langsung ke WordPress REST API.
 *
 * WordPress Custom Post Type (CPT) slug mapping:
 *   'team'         → /team-member
 *   'projects'     → /project
 *   'services'     → /layanan
 *   'alumni'       → /alumni
 *   'posts'        → /posts
 *   'testimonials' → /testimonial
 *   'partners'     → /partner
 *   'settings'     → /pages?slug=settings
 * ============================================================
 */

import type {
  Post,
  Project,
  Service,
  TeamMember,
  AlumniGroup,
  AlumniMember,
  Testimonial,
  Partner,
  Settings,
  ApiResponse,
} from '@/types/api';

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
} from './wordpress';

// ─── Constants ────────────────────────────────────────────────────────────────

const WP_BASE = (process.env.NEXT_PUBLIC_WORDPRESS_URL ?? '').replace(/\/$/, '');

/**
 * Mapping dari nama resource kita → slug WP REST API endpoint
 */
const WP_ENDPOINT_MAP: Record<string, string> = {
  posts:        '/posts',
  projects:     '/project',
  services:     '/service',
  team:         '/team-member',
  testimonials: '/testimonial',
  partners:     '/partner',
  alumni:       '/alumni',
  settings:     '/pages',
};

// List resources yang single-item-nya ditemukan by slug (bukan by ID)
const SLUG_BASED_RESOURCES = new Set([
  'posts', 'projects', 'services',
]);

// ─── Fetch helper ─────────────────────────────────────────────────────────────

interface FetchOptions extends RequestInit {
  revalidate?: number | false;
  tags?: string[];
}

async function wpFetch<T>(url: string, options: FetchOptions = {}): Promise<T> {
  const { tags, revalidate, ...restOptions } = options;
  const res = await fetch(url, {
    ...restOptions,
    next: {
      tags: tags ?? [],
      revalidate: revalidate !== undefined ? revalidate : 3600,
    },
  });

  if (!res.ok) {
    throw new Error(`WordPress API returned ${res.status} for: ${url}`);
  }
  return res.json() as Promise<T>;
}

// ─── Item mapper ──────────────────────────────────────────────────────────────

function mapItem(resource: string, item: unknown): unknown {
  switch (resource) {
    case 'posts':
      return mapWordPressPostToAppPost(item as WordPressPost);
    case 'projects':
      return mapWordPressProjectToAppProject(item as WordPressProject);
    case 'services':
      return mapWordPressServiceToAppService(item as WordPressService);
    case 'team':
      return mapWordPressTeamMemberToAppTeamMember(item as WordPressTeamMember);
    case 'testimonials':
      return mapWordPressTestimonialToAppTestimonial(item as WordPressTestimonial);
    case 'partners':
      return mapWordPressPartnerToAppPartner(item as WordPressPartner);
    default:
      return item;
  }
}

// ─── Public apiFetch ──────────────────────────────────────────────────────────

/**
 * Fetch data dari WordPress REST API.
 *
 * Supported endpoint formats:
 *   '/posts'                    → semua posts
 *   '/projects?featured=true'   → semua projects (filter featured client-side)
 *   '/posts/some-slug'          → single post by slug
 *   '/services/some-slug'       → single service by slug
 *   '/team'                     → semua team members
 *   '/alumni'                   → semua alumni (dikelompokkan per batch)
 *   '/settings'                 → settings dari ACF options page
 */
export async function apiFetch<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {

  // Pisahkan path dan query string
  const [rawPath, search] = endpoint.split('?');
  const params = new URLSearchParams(search ?? '');

  // Contoh: '/posts/some-slug' → parts = ['', 'posts', 'some-slug']
  const parts = rawPath.split('/').filter(Boolean);
  const resource = parts[0]; // 'posts', 'team', 'alumni', dll.
  const pathSlug = parts[1]; // slug path-param, jika ada

  if (!resource) {
    console.warn('[apiFetch] Empty endpoint. Returning empty response.');
    return { success: false, data: [] } as unknown as T;
  }

  const wpSlug = WP_ENDPOINT_MAP[resource];
  if (!wpSlug) {
    console.warn(`[apiFetch] Unknown resource: "${resource}". Cek WP_ENDPOINT_MAP.`);
    return { success: false, data: [] } as unknown as T;
  }

  const LIST_RESOURCES = [
    'posts', 'projects', 'services', 'team',
    'testimonials', 'partners', 'alumni',
  ];

  try {

    // ── SETTINGS ────────────────────────────────────────────────────────────
    if (resource === 'settings') {
      const url = `${WP_BASE}/pages?slug=company-setting&_embed`;
      const pages = await wpFetch<WordPressSettings[]>(url, options);
      const raw = Array.isArray(pages) && pages.length > 0 ? pages[0] : {};
      const mapped = mapWordPressSettingsToAppSettings(raw as WordPressSettings);
      return { success: true, data: mapped } as unknown as T;
    }

    // ── ALUMNI (selalu list, lalu dikelompokkan) ─────────────────────────────
    if (resource === 'alumni') {
      const url = `${WP_BASE}${wpSlug}?_embed&per_page=100`;
      const raw = await wpFetch<WordPressAlumni[]>(url, options);
      const members: AlumniMember[] = Array.isArray(raw)
        ? raw.map(mapWordPressAlumniToAppAlumni)
        : [];
      const groups: AlumniGroup[] = groupAlumni(members);
      return { success: true, data: groups } as unknown as T;
    }

    // ── SINGLE ITEM (path slug: /posts/some-slug) ───────────────────────────
    if (pathSlug && SLUG_BASED_RESOURCES.has(resource)) {
      const url = `${WP_BASE}${wpSlug}?slug=${pathSlug}&_embed`;
      const raw = await wpFetch<unknown[]>(url, options);
      const item = Array.isArray(raw) ? raw[0] : raw;
      if (!item) throw new Error(`${resource} not found: slug="${pathSlug}"`);
      const mapped = mapItem(resource, item);
      return { success: true, data: mapped } as unknown as T;
    }

    // ── LIST ────────────────────────────────────────────────────────────────
    const listParams = new URLSearchParams();
    listParams.set('_embed', '1');
    listParams.set('per_page', params.get('per_page') ?? '100');

    // Forward kategori jika ada
    if (params.get('category')) {
      listParams.set('categories', params.get('category')!);
    }

    const url = `${WP_BASE}${wpSlug}?${listParams.toString()}`;
    const raw = await wpFetch<unknown[]>(url, options);
    let list = Array.isArray(raw) ? raw.map((item) => mapItem(resource, item)) : [];

    // Filter featured client-side (WP tidak mendukung filter ACF boolean via REST)
    if (params.get('featured') === 'true') {
      list = list.filter((p: unknown) => (p as Project).is_featured);
    }

    // Batasi jumlah jika ada ?limit=N
    const limit = params.get('limit');
    if (limit) {
      list = list.slice(0, parseInt(limit, 10));
    }

    return { success: true, data: list } as unknown as T;

  } catch (error) {
    console.error(`[apiFetch] Gagal fetch "${endpoint}":`, error);

    return {
      success: false,
      data: LIST_RESOURCES.includes(resource)
        ? []
        : resource === 'settings'
        ? ({} as Settings)
        : null,
    } as unknown as T;
  }
}
