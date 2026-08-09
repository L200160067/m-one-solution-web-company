import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';

const FILES_TO_CHECK = [
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/app/about/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/services/page.tsx',
  'src/app/services/layout.tsx',
  'src/app/blog/page.tsx',
  'src/app/portfolio/page.tsx',
  'src/app/student-agency/layout.tsx',
  'src/app/layanan/jasa-erp-umkm/page.tsx',
  'src/app/layanan/jasa-pembuatan-website-sekolah/page.tsx',
  'src/app/layanan/software-house-solo/page.tsx',
  'src/components/Breadcrumb.tsx',
  'src/config/site.ts',
].filter((file) => file !== 'src/__tests__/no-hardcoded-urls.test.ts');

const ABSOLUTE_URL = 'https://mone.mutudev.com';

describe('no hard-coded production absolute base URLs in page metadata', () => {
  it('uses env-backed base URLs instead of hard-coded production domain', () => {
    const bad: string[] = [];

    for (const rel of FILES_TO_CHECK) {
      const content = readFileSync(rel, 'utf8');
      if (content.includes(ABSOLUTE_URL)) {
        bad.push(rel);
      }
    }

    expect(bad).toEqual([]);
  });
});
