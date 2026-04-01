/**
 * Integration Tests: WordPress Backend Endpoint Checker
 *
 * Script ini mengecek SEMUA endpoint WordPress REST API yang dipakai project.
 * Jalankan dengan: npx tsx src/lib/__tests__/check-wp-endpoints.ts
 *
 * Hasil: setiap endpoint diperiksa ketersediaan, struktur data, dan field ACF-nya.
 */

const WP_BASE = process.env.NEXT_PUBLIC_WORDPRESS_URL ?? 'http://sekolah.test/wp-json/wp/v2';

function buildWpUrl(path: string, queryString: string): string {
  if (!queryString) return `${WP_BASE}${path}`;
  const separator = WP_BASE.includes('?') ? '&' : '?';
  return `${WP_BASE}${path}${separator}${queryString}`;
}

interface CheckResult {
  endpoint: string;
  status: 'OK' | 'FAIL' | 'WARN';
  httpCode?: number;
  count?: number;
  message: string;
  acfFields?: string[];
  missingAcfFields?: string[];
}

const results: CheckResult[] = [];

// ─── Helper ───────────────────────────────────────────────────────────────────

async function fetchEndpoint(url: string): Promise<{ ok: boolean; status: number; data: unknown }> {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(10000) });
    const data = res.ok ? await res.json() : null;
    return { ok: res.ok, status: res.status, data };
  } catch (err) {
    return { ok: false, status: 0, data: null };
  }
}

function log(result: CheckResult) {
  const icon = result.status === 'OK' ? '✅' : result.status === 'WARN' ? '⚠️ ' : '❌';
  const count = result.count !== undefined ? ` [${result.count} item(s)]` : '';
  console.log(`${icon} ${result.endpoint}${count}`);
  console.log(`   ${result.message}`);
  if (result.acfFields && result.acfFields.length > 0) {
    console.log(`   ACF fields tersedia: ${result.acfFields.join(', ')}`);
  }
  if (result.missingAcfFields && result.missingAcfFields.length > 0) {
    console.log(`   ⚠️  ACF fields hilang: ${result.missingAcfFields.join(', ')}`);
  }
}

function checkAcfFields(item: Record<string, unknown>, expected: string[]): { found: string[]; missing: string[] } {
  const acf = item.acf as Record<string, unknown> | null;
  if (!acf) return { found: [], missing: expected };
  const found = expected.filter(f => f in acf && acf[f] !== null && acf[f] !== '');
  const missing = expected.filter(f => !(f in acf) || acf[f] === null || acf[f] === '');
  return { found, missing };
}

// ─── Endpoint Checks ──────────────────────────────────────────────────────────

async function checkPosts() {
  const url = buildWpUrl('/posts', '_embed=1&per_page=3');
  const { ok, status, data } = await fetchEndpoint(url);
  if (!ok || !Array.isArray(data)) {
    results.push({ endpoint: '/posts', status: 'FAIL', httpCode: status, message: `HTTP ${status} – Endpoint tidak dapat diakses.` });
    return;
  }
  results.push({
    endpoint: '/posts',
    status: 'OK',
    httpCode: status,
    count: (data as unknown[]).length,
    message: 'Blog posts berhasil diambil.',
  });
}

async function checkProjects() {
  const url = buildWpUrl('/project', '_embed=1&per_page=3');
  const { ok, status, data } = await fetchEndpoint(url);
  if (!ok || !Array.isArray(data)) {
    results.push({ endpoint: '/project', status: 'FAIL', httpCode: status, message: `HTTP ${status} – CPT 'project' tidak ditemukan. Pastikan sudah register_post_type.` });
    return;
  }
  const expected = ['client_name', 'project_url', 'is_featured'];
  const sample = data[0] as Record<string, unknown> | undefined;
  const { found, missing } = sample ? checkAcfFields(sample, expected) : { found: [], missing: expected };
  results.push({
    endpoint: '/project',
    status: missing.length > 0 ? 'WARN' : 'OK',
    httpCode: status,
    count: (data as unknown[]).length,
    message: missing.length > 0 ? 'CPT project ada, tapi ada ACF field yang kosong/belum diisi.' : 'CPT project OK, semua ACF field tersedia.',
    acfFields: found,
    missingAcfFields: missing,
  });
}

async function checkServices() {
  const url = buildWpUrl('/service', '_embed=1&per_page=3');
  const { ok, status, data } = await fetchEndpoint(url);
  if (!ok || !Array.isArray(data)) {
    results.push({ endpoint: '/service', status: 'FAIL', httpCode: status, message: `HTTP ${status} – CPT 'service' tidak ditemukan.` });
    return;
  }
  const expected = ['icon_name', 'features', 'benefits', 'keywords'];
  const sample = data[0] as Record<string, unknown> | undefined;
  const { found, missing } = sample ? checkAcfFields(sample, expected) : { found: [], missing: expected };
  results.push({
    endpoint: '/service',
    status: missing.length > 0 ? 'WARN' : 'OK',
    httpCode: status,
    count: (data as unknown[]).length,
    message: missing.length > 0 ? 'CPT service ada, tapi ada ACF field kosong/belum diisi.' : 'CPT service OK, semua ACF field tersedia.',
    acfFields: found,
    missingAcfFields: missing,
  });
}

async function checkTeamMembers() {
  const url = buildWpUrl('/team-member', '_embed=1&per_page=3');
  const { ok, status, data } = await fetchEndpoint(url);
  if (!ok || !Array.isArray(data)) {
    results.push({ endpoint: '/team-member', status: 'FAIL', httpCode: status, message: `HTTP ${status} – CPT 'team-member' tidak ditemukan.` });
    return;
  }
  const expected = ['role', 'social_linkedin', 'social_github', 'social_instagram'];
  const sample = data[0] as Record<string, unknown> | undefined;
  const { found, missing } = sample ? checkAcfFields(sample, expected) : { found: [], missing: expected };
  results.push({
    endpoint: '/team-member',
    status: missing.length > 0 ? 'WARN' : 'OK',
    httpCode: status,
    count: (data as unknown[]).length,
    message: missing.length > 0 ? 'CPT team-member ada, tapi ada ACF field kosong/belum diisi.' : 'CPT team-member OK, semua ACF field tersedia.',
    acfFields: found,
    missingAcfFields: missing,
  });
}

async function checkTestimonials() {
  const url = buildWpUrl('/testimonial', '_embed=1&per_page=3');
  const { ok, status, data } = await fetchEndpoint(url);
  if (!ok || !Array.isArray(data)) {
    results.push({ endpoint: '/testimonial', status: 'FAIL', httpCode: status, message: `HTTP ${status} – CPT 'testimonial' tidak ditemukan.` });
    return;
  }
  const expected = ['role', 'company', 'rating'];
  const sample = data[0] as Record<string, unknown> | undefined;
  const { found, missing } = sample ? checkAcfFields(sample, expected) : { found: [], missing: expected };
  results.push({
    endpoint: '/testimonial',
    status: missing.length > 0 ? 'WARN' : 'OK',
    httpCode: status,
    count: (data as unknown[]).length,
    message: missing.length > 0 ? 'CPT testimonial ada, tapi ada ACF field kosong/belum diisi.' : 'CPT testimonial OK, semua ACF field tersedia.',
    acfFields: found,
    missingAcfFields: missing,
  });
}

async function checkPartners() {
  const url = buildWpUrl('/partner', '_embed=1&per_page=3');
  const { ok, status, data } = await fetchEndpoint(url);
  if (!ok || !Array.isArray(data)) {
    results.push({ endpoint: '/partner', status: 'FAIL', httpCode: status, message: `HTTP ${status} – CPT 'partner' tidak ditemukan.` });
    return;
  }
  results.push({
    endpoint: '/partner',
    status: 'OK',
    httpCode: status,
    count: (data as unknown[]).length,
    message: 'CPT partner OK. (Hanya butuh title + featured image)',
  });
}

async function checkAlumni() {
  const url = buildWpUrl('/alumni', '_embed=1&per_page=3');
  const { ok, status, data } = await fetchEndpoint(url);
  if (!ok || !Array.isArray(data)) {
    results.push({ endpoint: '/alumni', status: 'FAIL', httpCode: status, message: `HTTP ${status} – CPT 'alumni' tidak ditemukan.` });
    return;
  }
  const expected = ['school', 'batch_period'];
  const sample = data[0] as Record<string, unknown> | undefined;
  const { found, missing } = sample ? checkAcfFields(sample, expected) : { found: [], missing: expected };
  results.push({
    endpoint: '/alumni',
    status: missing.length > 0 ? 'WARN' : 'OK',
    httpCode: status,
    count: (data as unknown[]).length,
    message: missing.length > 0 ? 'CPT alumni ada, tapi ada ACF field kosong/belum diisi.' : 'CPT alumni OK, semua ACF field tersedia.',
    acfFields: found,
    missingAcfFields: missing,
  });
}

async function checkSettings() {
  const url = buildWpUrl('/pages', 'slug=company-setting&_embed=1');
  const { ok, status, data } = await fetchEndpoint(url);
  if (!ok || !Array.isArray(data) || data.length === 0) {
    results.push({ endpoint: '/pages?slug=company-setting', status: 'FAIL', httpCode: status, message: `HTTP ${status} – Halaman 'company-setting' tidak ditemukan. Pastikan sudah dibuat di WordPress.` });
    return;
  }
  const expected = [
    'company_name', 'company_address', 'contact_email', 'contact_phone',
    'whatsapp_number', 'facebook_url', 'instagram_url', 'tiktok_url',
    'youtube_url', 'linkedin_url',
  ];
  const page = data[0] as Record<string, unknown>;
  const { found, missing } = checkAcfFields(page, expected);
  results.push({
    endpoint: '/pages?slug=company-setting',
    status: missing.length > 0 ? 'WARN' : 'OK',
    httpCode: status,
    message: missing.length > 0 ? 'Halaman company-setting ada, tapi ada ACF field yang belum diisi.' : 'Settings page OK, semua ACF field tersedia.',
    acfFields: found,
    missingAcfFields: missing,
  });
}

async function checkProjectCategory() {
  const url = buildWpUrl('/project_category', '');
  const { ok, status, data } = await fetchEndpoint(url);
  if (!ok) {
    results.push({ endpoint: '/project_category', status: 'FAIL', httpCode: status, message: `HTTP ${status} – Taxonomy 'project_category' tidak ditemukan.` });
    return;
  }
  results.push({
    endpoint: '/project_category',
    status: 'OK',
    httpCode: status,
    count: Array.isArray(data) ? (data as unknown[]).length : undefined,
    message: 'Taxonomy project_category terdaftar dan bisa diakses via REST API.',
  });
}

// ─── Main Runner ──────────────────────────────────────────────────────────────

async function main() {
  console.log('\n══════════════════════════════════════════════════════════');
  console.log('  🔍  WordPress API Endpoint Checker – M-One Solution');
  console.log(`  📡  Base URL: ${WP_BASE}`);
  console.log('══════════════════════════════════════════════════════════\n');

  await Promise.all([
    checkPosts(),
    checkProjects(),
    checkServices(),
    checkTeamMembers(),
    checkTestimonials(),
    checkPartners(),
    checkAlumni(),
    checkSettings(),
    checkProjectCategory(),
  ]);

  console.log('\n── Hasil Pengecekan ──────────────────────────────────────\n');
  results.forEach(log);

  const ok   = results.filter(r => r.status === 'OK').length;
  const warn = results.filter(r => r.status === 'WARN').length;
  const fail = results.filter(r => r.status === 'FAIL').length;

  console.log('\n══════════════════════════════════════════════════════════');
  console.log(`  Ringkasan: ✅ ${ok} OK  |  ⚠️  ${warn} WARN  |  ❌ ${fail} FAIL`);
  console.log('══════════════════════════════════════════════════════════\n');

  if (fail > 0) process.exit(1);
}

main().catch(console.error);
