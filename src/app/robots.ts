import { siteConfig } from '@/config/site';
import { MetadataRoute } from 'next';

const BASE_URL = siteConfig.baseUrl;

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}
