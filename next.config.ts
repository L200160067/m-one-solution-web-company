import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        unoptimized: process.env.NODE_ENV === 'development',
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'storage.googleapis.com',
            },
            {
                protocol: 'https',
                hostname: 'img.youtube.com',
            },
            // Laravel API — development (Laravel Herd)
            {
                protocol: 'http',
                hostname: 'm-one-solution-api.test',
            },
            // Laravel API — production
            {
                protocol: 'https',
                hostname: 'api.m-one-solution.com',
            },
            // Laravel API — Koyeb
            {
                protocol: 'https',
                hostname: 'miniature-vilhelmina-m-one-solution-7234bbee.koyeb.app',
            },
            // Placeholder images for static/mock data
            {
                protocol: 'https',
                hostname: 'placehold.co',
            },
            // GitHub raw content — for images uploaded via GitHub API
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
            },
            // CDN Proxy Worker (Development/Fallback)
            {
                protocol: 'https',
                hostname: 'falling-brook-2a16.kurialfarez.workers.dev',
            },
            // CDN Proxy Worker (Production)
            {
                protocol: 'https',
                hostname: 'cdn.mutudev.com',
            },
            // Laravel API — local Herd (berita-mone)
            {
                protocol: 'http',
                hostname: 'berita-mone.test',
            },
            // WordPress Headless (Live Server)
            {
                protocol: 'https',
                hostname: 'berita-mone.mutudev.com',
            },
            // WordPress CDN Images (e.g. Jetpack)
            {
                protocol: 'https',
                hostname: 'i0.wp.com',
            },
            {
                protocol: 'https',
                hostname: 'i1.wp.com',
            },
            {
                protocol: 'https',
                hostname: 'i2.wp.com',
            },
            {
                protocol: 'https',
                hostname: 'i3.wp.com',
            },
            {
                protocol: 'https',
                hostname: 'ppdb.smkmuh1-skh.sch.id',
            },
            // Local WordPress Images
            {
                protocol: 'http',
                hostname: 'localhost',
            },
            {
                protocol: 'http',
                hostname: '127.0.0.1',
            },
            {
                protocol: 'http',
                hostname: '*.test',
            },
        ],
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'X-Frame-Options', value: 'DENY' },
                    { key: 'X-XSS-Protection', value: '1; mode=block' },
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=()',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
