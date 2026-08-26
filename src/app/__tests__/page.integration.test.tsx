import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import Home from '@/app/page';

const mockPosts = [{ id: '1', title: 'Post 1', slug: 'post-1', category: { name: 'News' }, cover_url: '', published_at: '2026-01-01', author: 'Author', excerpt: 'Excerpt' }];
const mockProjects = [{ id: '1', title: 'Project 1', image_url: '', category: 'Web', description: 'Desc', client_name: 'Client', project_url: '#' }];
const mockTestimonials = [{ id: '1', name: 'Person', role: 'Role', content: 'Content', rating: 5, avatar_url: '' }];
const mockPartners = [{ id: '1', name: 'Partner', logo_url: '' }];
const mockServices = [{ id: '1', title: 'Service', category: 'IT', short_description: 'Short', full_description: 'Full', features: [], benefits: [], image_url: '' }];

vi.mock('@/lib/api', () => ({
  apiFetch: vi.fn(),
}));

vi.mock('@/components/Hero', () => ({
  Hero: () => <div data-testid="hero">Hero</div>,
}));

vi.mock('@/components/FastPackages', () => ({
  FastPackages: () => <div data-testid="fast-packages">FastPackages</div>,
}));

vi.mock('@/components/About', () => ({
  About: () => <div data-testid="about">About</div>,
}));

vi.mock('@/components/Services', () => ({
  Services: () => <div data-testid="services">Services</div>,
}));

vi.mock('@/components/CTA', () => ({
  CTA: () => <div data-testid="cta">CTA</div>,
}));

describe('Homepage integration', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
  });

  it('renders core homepage sections and calls API endpoints', async () => {
    const { apiFetch } = await import('@/lib/api');
    vi.mocked(apiFetch).mockImplementation((endpoint: string) => {
      if (endpoint.includes('/posts')) return Promise.resolve({ success: true, data: mockPosts } as any);
      if (endpoint.includes('/projects')) return Promise.resolve({ success: true, data: mockProjects } as any);
      if (endpoint.includes('/testimonials')) return Promise.resolve({ success: true, data: mockTestimonials } as any);
      if (endpoint.includes('/partners')) return Promise.resolve({ success: true, data: mockPartners } as any);
      if (endpoint.includes('/services')) return Promise.resolve({ success: true, data: mockServices } as any);
      return Promise.resolve({ success: true, data: [] } as any);
    });

    // Render and wait for all Suspense boundaries to resolve
    await act(async () => {
      render(await Home());
    });

    // Flush any pending microtasks (Suspense resolution)
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    expect(screen.getByTestId('hero')).toBeTruthy();
    expect(screen.getByTestId('fast-packages')).toBeTruthy();
    expect(screen.getByTestId('about')).toBeTruthy();
    expect(await screen.findByTestId('services')).toBeTruthy();
    expect(screen.getByTestId('cta')).toBeTruthy();

    expect(vi.mocked(apiFetch)).toHaveBeenCalledWith('/posts?limit=10', { tags: ['posts'] });
    expect(vi.mocked(apiFetch)).toHaveBeenCalledWith('/projects?featured=true', { tags: ['projects'] });
    expect(vi.mocked(apiFetch)).toHaveBeenCalledWith('/testimonials', { tags: ['testimonials'] });
    expect(vi.mocked(apiFetch)).toHaveBeenCalledWith('/partners', { tags: ['partners'] });
    expect(vi.mocked(apiFetch)).toHaveBeenCalledWith('/services', { tags: ['services'] });
  });
});
