import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { EmptyState } from '@/components/ui/EmptyState';

describe('EmptyState', () => {
  it('renders title and description', () => {
    render(<EmptyState title="Belum ada data" description="Coba lagi nanti." />);
    expect(screen.getByText('Belum ada data')).toBeTruthy();
    expect(screen.getByText('Coba lagi nanti.')).toBeTruthy();
  });

  it('renders action button when provided', () => {
    const onAction = () => {};
    render(<EmptyState title="Error" actionLabel="Retry" onAction={onAction} icon="error" />);
    expect(screen.getByText('Retry')).toBeTruthy();
  });

  it('does not render action when missing', () => {
    render(<EmptyState title="Kosong" />);
    expect(screen.queryByRole('button')).toBeNull();
  });
});
