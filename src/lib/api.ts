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
 * Shared fetch utility – sekarang menggunakan data statis lokal.
 * Interface identik dengan versi API asli agar tidak perlu
 * mengubah semua komponen yang memanggil apiFetch.
 */
export async function apiFetch<T>(
  endpoint: string,
  // options tetap ada agar type-compatible dengan pemanggil lama
  _options?: RequestInit & { revalidate?: number | false; tags?: string[] }
): Promise<T> {
  // Simulasi micro-delay agar SSR tetap konsisten (opsional, bisa dihapus)
  // await new Promise((r) => setTimeout(r, 0));
  return resolveEndpoint(endpoint) as T;
}
