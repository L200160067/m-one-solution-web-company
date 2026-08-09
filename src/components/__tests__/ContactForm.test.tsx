import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ContactForm } from '@/components/ContactForm';

describe('ContactForm', () => {
  it('shows validation errors on empty submit', () => {
    render(<ContactForm />);
    fireEvent.click(screen.getByText('Kirim via WhatsApp'));
    expect(screen.getByText('Nama wajib diisi.')).toBeTruthy();
    expect(screen.getByText('Email wajib diisi.')).toBeTruthy();
    expect(screen.getByText('Nomor HP wajib diisi.')).toBeTruthy();
    expect(screen.getByText('Pesan wajib diisi.')).toBeTruthy();
  });

  it('shows success state after valid submission', () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText('Nama Lengkap *'), { target: { value: 'Aidan' } });
    fireEvent.change(screen.getByLabelText('Email *'), { target: { value: 'aidan@example.com' } });
    fireEvent.change(screen.getByLabelText('Nomor HP / WA *'), { target: { value: '081234567890' } });
    fireEvent.change(screen.getByLabelText('Pesan / Kebutuhan *'), { target: { value: 'Hello' } });
    fireEvent.click(screen.getByText('Kirim via WhatsApp'));
    expect(screen.getByText('WhatsApp Terbuka!')).toBeTruthy();
  });
});
