/**
 * ============================================================
 * api.ts – Static Mock Mode
 * ============================================================
 * Semua panggilan API sekarang dialihkan ke data statis lokal
 * di src/data/mockData.ts. Tidak ada request ke backend.
 * ============================================================
 */

import {
  mockSettings,
  mockPosts,
  mockServices,
  mockProjects,
  mockTeamMembers,
  mockAlumni,
  mockTestimonials,
  mockPartners,
} from '@/data/mockData';
import type { ApiResponse } from '@/types/api';

type MockDb = {
  settings: typeof mockSettings;
  posts: typeof mockPosts;
  services: typeof mockServices;
  projects: typeof mockProjects;
  team: typeof mockTeamMembers;
  alumni: typeof mockAlumni;
  testimonials: typeof mockTestimonials;
  partners: typeof mockPartners;
};

const MOCK_DB: MockDb = {
  settings: mockSettings,
  posts: mockPosts,
  services: mockServices,
  projects: mockProjects,
  team: mockTeamMembers,
  alumni: mockAlumni,
  testimonials: mockTestimonials,
  partners: mockPartners,
};

/**
 * Resolve data lokal berdasarkan endpoint.
 * Mendukung:
 *   /settings
 *   /posts  /posts?limit=N  /posts/:slug
 *   /services  /services/:slug
 *   /projects  /projects?featured=true
 *   /team
 *   /alumni
 *   /testimonials
 *   /partners
 */
function resolveEndpoint(endpoint: string): unknown {
  // Hapus leading slash & query string untuk parsing awal
  const [path, query] = endpoint.replace(/^\//, '').split('?');
  const params = new URLSearchParams(query ?? '');
  const segments = path.split('/');
  const resource = segments[0];
  const slug = segments[1]; // e.g. /posts/:slug → slug

  switch (resource) {
    case 'settings':
      return { success: true, data: MOCK_DB.settings } as ApiResponse<typeof mockSettings>;

    case 'posts': {
      if (slug) {
        const post = MOCK_DB.posts.find((p) => p.slug === slug || String(p.id) === slug);
        if (!post) throw new Error(`Post not found: ${slug}`);
        return { success: true, data: post } as ApiResponse<typeof mockPosts[0]>;
      }
      let posts = [...MOCK_DB.posts];
      const limit = params.get('limit');
      if (limit) posts = posts.slice(0, parseInt(limit, 10));
      return { success: true, data: posts } as ApiResponse<typeof mockPosts>;
    }

    case 'services': {
      if (slug) {
        const service = MOCK_DB.services.find((s) => s.slug === slug || String(s.id) === slug);
        if (!service) throw new Error(`Service not found: ${slug}`);
        return { success: true, data: service } as ApiResponse<typeof mockServices[0]>;
      }
      return { success: true, data: MOCK_DB.services } as ApiResponse<typeof mockServices>;
    }

    case 'projects': {
      let projects = [...MOCK_DB.projects];
      if (params.get('featured') === 'true') {
        projects = projects.filter((p) => p.is_featured);
      }
      return { success: true, data: projects } as ApiResponse<typeof mockProjects>;
    }

    case 'team':
      return { success: true, data: MOCK_DB.team } as ApiResponse<typeof mockTeamMembers>;

    case 'alumni':
      return { success: true, data: MOCK_DB.alumni } as ApiResponse<typeof mockAlumni>;

    case 'testimonials':
      return { success: true, data: MOCK_DB.testimonials } as ApiResponse<typeof mockTestimonials>;

    case 'partners':
      return { success: true, data: MOCK_DB.partners } as ApiResponse<typeof mockPartners>;

    default:
      console.warn(`[api] Endpoint tidak dikenal: ${endpoint} → mengembalikan null`);
      return { success: true, data: null };
  }
}

/**
 * Shared fetch utility – mengutamakan API live untuk endpoint tertentu,
 * dengan fallback ke data statis lokal jika API gagal.
 */
export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit & { revalidate?: number | false; tags?: string[] }
): Promise<T> {
  const [path] = endpoint.replace(/^\//, '').split('?');
  const resource = path.split('/')[0];

  // Khusus untuk resource 'posts', coba panggil API asli
  if (resource === 'posts') {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_NEWS_API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://berita-mone.test/api';
      const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
      
      const fetchOptions: RequestInit = {
        ...options,
      };

      const res = await fetch(`${baseUrl}${cleanEndpoint}`, fetchOptions);

      if (!res.ok) {
        throw new Error(`API returned ${res.status} ${res.statusText}`);
      }

      const rawData = await res.json();
      
      // Response backend sudah dalam bentuk ApiResponse { success: true, data: ... }
      if (rawData && rawData.success !== undefined && rawData.data !== undefined) {
        return rawData as T;
      }

      return { success: true, data: rawData } as unknown as T;
    } catch (error) {
      console.warn(`[apiFetch] Gagal fetch dari API untuk endpoint ${endpoint}, fallback ke mock data lokal. Error:`, error instanceof Error ? error.message : error);
      // Biarkan lanjut ke bawah untuk memanggil resolveEndpoint(endpoint)
    }
  }

  // Fallback / Data statis lainnya
  return resolveEndpoint(endpoint) as T;
}
