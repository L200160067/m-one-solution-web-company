import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ServiceDetailClient from '@/app/services/[id]/client';

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
}));

describe('ServiceDetailClient', () => {
  it('renders not-found message when service is missing', () => {
    render(<ServiceDetailClient service={null} />);
    expect(screen.getByText('Layanan tidak ditemukan')).toBeTruthy();
  });
});
