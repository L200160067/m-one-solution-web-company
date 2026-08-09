import { describe, it, expect, vi, beforeEach } from 'vitest';
import { apiFetch } from '@/lib/api';

describe('apiFetch integration fallbacks', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.stubEnv('NEXT_PUBLIC_WORDPRESS_URL', '');
  });

  it('returns empty list for list endpoints when WP is not configured', async () => {
    const res = await apiFetch<{ success: boolean; data: unknown[] }>('/posts');
    expect(res.success).toBe(false);
    expect(Array.isArray(res.data)).toBe(true);
    expect(res.data).toHaveLength(0);
  });

  it('returns empty object for settings when WP is not configured', async () => {
    const res = await apiFetch<{ success: boolean; data: Record<string, unknown> }>('/settings');
    expect(res.success).toBe(false);
    expect(res.data).toEqual({});
  });

  it('returns empty list for single-item slug endpoints when WP is not configured', async () => {
    const res = await apiFetch<{ success: boolean; data: unknown[] }>('/services/some-slug');
    expect(res.success).toBe(false);
    expect(Array.isArray(res.data)).toBe(true);
    expect(res.data).toHaveLength(0);
  });
});
