import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from '../ErrorBoundary';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

const ProblemChild = () => {
    throw new Error('Test error');
};

describe('ErrorBoundary', () => {
    it('renders children when there is no error', () => {
        render(
            <ErrorBoundary>
                <div>All good</div>
            </ErrorBoundary>
        );
        expect(screen.getByText('All good')).toBeInTheDocument();
    });

    it('renders fallback UI when an error occurs', () => {
        // Suppress console.error for this expected error
        vi.spyOn(console, 'error').mockImplementation(() => { });

        render(
            <BrowserRouter>
                <ErrorBoundary>
                    <ProblemChild />
                </ErrorBoundary>
            </BrowserRouter>
        );

        expect(screen.getByText('Oops! Terjadi Kesalahan.')).toBeInTheDocument();
    });
});
