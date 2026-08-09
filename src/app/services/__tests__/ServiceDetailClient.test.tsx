import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ServiceDetailClient from '@/app/services/[id]/client';

describe('ServiceDetailClient', () => {
  it('renders not-found message when service is missing', () => {
    render(<ServiceDetailClient service={null as any} />);
    expect(screen.getByText('Layanan tidak ditemukan')).toBeTruthy();
  });
});
