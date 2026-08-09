import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import BlogListClient from '@/app/blog/BlogListClient';

const posts = [
  {
    id: 1,
    title: 'Artikel A',
    slug: 'artikel-a',
    excerpt: 'Ringkasan artikel A',
    content: 'Konten A',
    published_at: '2026-01-01T00:00:00+07:00',
    author: 'Author',
    category: { name: 'Teknologi' },
    cover_url: '',
    cover_thumb: '',
  },
];

describe('BlogListClient shared empty states', () => {
  it('shows empty state when posts are empty', () => {
    render(<BlogListClient posts={[]} categories={['Teknologi']} />);
    expect(screen.getByText('Belum ada artikel')).toBeTruthy();
  });

  it('shows search empty state with reset action', () => {
    render(<BlogListClient posts={posts} categories={['Teknologi']} />);
    fireEvent.change(screen.getByPlaceholderText('Cari artikel berdasarkan judul atau konten...'), {
      target: { value: 'tidak ada' },
    });
    expect(screen.getByText('Tidak ada artikel ditemukan')).toBeTruthy();
    fireEvent.click(screen.getByText('Hapus Filter'));
    expect(screen.getByText('Artikel A')).toBeTruthy();
  });
});
