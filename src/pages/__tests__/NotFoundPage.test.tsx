import React from 'react';
import { render, screen } from '@testing-library/react';
import { NotFoundPage } from '../NotFoundPage';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

describe('NotFoundPage', () => {
    it('renders correctly', () => {
        render(
            <HelmetProvider>
                <BrowserRouter>
                    <NotFoundPage />
                </BrowserRouter>
            </HelmetProvider>
        );
        expect(screen.getByText('Halaman Tidak Ditemukan')).toBeInTheDocument();
        expect(screen.getByText('404')).toBeInTheDocument();
    });
});
