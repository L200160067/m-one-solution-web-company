# M-One Solution Web — Improvement Plan

This plan is based on the current codebase state at the time of review.
It is organized by priority and grouped into phases so improvements can be shipped incrementally.

---

## Completed

### ✅ Phase 1 — Foundation (merged)
- Centralized marketing/site config in `src/config/site.ts`.
- Hardened API layer (`src/lib/api.ts`) with typed mappers and consistent `ApiResponse<T>` shape.
- Added Zod validation for WordPress payloads (`src/lib/validation/api.ts`).
- Added shared UI primitives: `EmptyState`, `ErrorState`, `WpImage`.
- Standardized image strategy with `next/image` and CDN server/client split.
- Moved secrets/config values out of source; env-driven via `NEXT_PUBLIC_*`.
- Added CI workflow (`lint`/`build`/`test`).

### ✅ Phase 2 — UX, SEO, and Quality (merged)
- Added analytics helper (`src/lib/analytics`) with conversion event tracking.
- Added SEO structured data: `WebSite`, `Service`, breadcrumbs, OpenGraph, sitemap, robots.
- Rolled out dynamic imports on homepage for below-fold sections.
- Rolled out `WpImage` across listings and detail pages.
- Standardized metadata/baseURL via `siteConfig.baseUrl` + `NEXT_PUBLIC_BASE_URL`.
- Normalized visible UI copy to Bahasa Indonesia.
- Added homepage integration test, contact form tests, service/blog empty-state tests, API fallback tests, and hardcoded-URL regression test.
- Build/test green: **44 tests across 10 files**.

### ✅ WordPress backend connectivity check
- Script `npm run check:wp` exists at `src/lib/__tests__/check-wp-endpoints.ts`.
- Manual curl confirmed `https://berita-mone.mutudev.com/index.php?rest_route=/wp/v2/posts` returns **HTTP 200** with 5 published posts.
- Endpoint `/wp-json/wp/v2` on the same host returns **404** because permalinks/pretty-URL REST is disabled; the app must use the `index.php?rest_route=` path style.

---

## 1. High Priority — Backend Alignment

### 1.1 Register all Custom Post Types and taxonomies in WordPress
**Why:** The frontend already maps `project`, `service`, `team-member`, `testimonial`, `partner`, `alumni`, and taxonomy `project_category`, but none of them are exposed through the WordPress REST API yet.

**What to change in WordPress:**
- Register CPT `project` with REST support and slug `project`.
- Register CPT `service` with REST support and slug `service`.
- Register CPT `team-member` with REST support and slug `team-member`.
- Register CPT `testimonial` with REST support and slug `testimonial`.
- Register CPT `partner` with REST support and slug `partner`.
- Register CPT `alumni` with REST support and slug `alumni`.
- Register taxonomy `project_category` with REST support and associate it with CPT `project`.
- For each CPT, ensure `show_in_rest => true` and `rest_base` matches the slug expected by the frontend.

### 1.2 Create the company settings page in WordPress
**Why:** The frontend fetches site-wide contact/social info from a page with slug `company-setting` (`/pages?slug=company-setting`). Without this page, every footer/contact block falls back to defaults.

**What to change in WordPress:**
- Create a published page with slug `company-setting`.
- Attach ACF fields (or equivalent) matching the mapper expectations:
  - `company_name`, `company_address`
  - `contact_email`, `contact_phone`, `whatsapp_number`
  - `facebook_url`, `instagram_url`, `tiktok_url`, `youtube_url`, `linkedin_url`

### 1.3 Confirm REST API path style
**Why:** The production host currently serves REST API only under `index.php?rest_route=/wp/v2/...`; `/wp-json/wp/v2/...` returns 404. The frontend must point to the working URL style.

**What to change:**
- Set `NEXT_PUBLIC_WORDPRESS_URL=https://berita-mone.mutudev.com/index.php?rest_route=/wp/v2` in production env.
- Verify `WP_BASE` handling in `src/lib/api.ts` and `check-wp-endpoints.ts` supports a base URL containing `?`.
- Optionally fix WordPress pretty-permalinks so `/wp-json/` also works (preferred long-term).

---

## 2. Medium Priority — Frontend Polish

### 2.1 Expand tests to critical paths
**Why:** Tests cover mappers, shared UI, and some page smoke tests, but several user flows still lack coverage.

**What to add:**
- Service detail page with valid mocked service data.
- Blog detail page with mocked post data.
- Portfolio page integration (projects + categories).
- `apiFetch` single-item endpoint success path.

### 2.2 Bundle and runtime hygiene
**Why:** Many client components pull in `motion`, `lucide-react`, and large page modules even when not needed on every route.

**What to change:**
- Audit remaining client components and prefer dynamic imports for below-fold sections.
- Reduce `motion` usage on static decorative elements where CSS animation is sufficient.

### 2.3 Design token documentation
**Why:** Tokens exist in CSS but are not documented for future contributors/marketers.

**What to change:**
- Add a short `docs/ui-tokens.md` describing brand colors, spacing, radii, shadows, and typography usage.

---

## 3. Lower Priority / Strategic

### 3.1 Internationalization readiness
**Why:** Content is now locked to Bahasa Indonesia. If multilingual is ever planned, routing placeholders should be introduced early.

**What to change:**
- If monolingual remains the plan: no action needed; keep enforcing Bahasa Indonesia in UI copy.
- If multilingual is planned later: introduce Next.js i18n routing placeholders and extract hard-coded strings to a message catalog.

### 3.2 Analytics and conversion measurement
**Why:** Analytics helper exists, but conversion events are only logged locally unless a real `gtag` is loaded.

**What to add:**
- Load Google Analytics / Plausible / privacy-respecting alternative in `layout.tsx` based on env.
- Add event triggers for: CTA clicks, WhatsApp click, contact form submit, service page views.

### 3.3 Deployment hardening
**Why:** CI workflow exists, but branch protection and preview deploys are outside the repo.

**What to add:**
- Configure branch protection on `main` to require CI pass before merge.
- Add preview deploys for non-production review (Vercel/Netlify/etc.).

### 3.4 SEO expansion
**Why:** SEO basics are in place, but detail pages and local search can be strengthened.

**What to add:**
- Per-project SEO module in `/portfolio/[id]` if/when dynamic project detail pages exist.
- `FAQPage` structured data if an FAQ section is added.
- LocalBusiness structured data using settings fields.

---

## Suggested Execution Order

1. **Backend CPT/taxonomy registration**  
   Unblock content ingestion from WordPress.

2. **Create `company-setting` page + ACF fields**  
   Unblock dynamic contact info and footer/social links.

3. **Set production `NEXT_PUBLIC_WORDPRESS_URL` correctly**  
   Use the working `index.php?rest_route=` style until pretty-permalinks are fixed.

4. **Run `npm run check:wp` against production backend**  
   Confirm all endpoints return OK before declaring sync complete.

5. **Frontend: expand critical-path tests and bundle hygiene**  
   Lock in behavior and performance.

6. **SEO, analytics, deployment hardening**  
   Growth and reliability improvements once content flows end-to-end.

---

## Verification Checklist

- [ ] `NEXT_PUBLIC_WORDPRESS_URL=https://berita-mone.mutudev.com/index.php?rest_route=/wp/v2 npm run check:wp` → 0 FAIL.
- [ ] `npm run test` → 44 passing (or more after new tests).
- [ ] `npm run build` → success, no TypeScript errors.
- [ ] Production env contains `NEXT_PUBLIC_BASE_URL`, `NEXT_PUBLIC_WORDPRESS_URL`, `NEXT_PUBLIC_CDN_URL`, `NEXT_PUBLIC_WHATSAPP_NUMBER`.

---

## Notes
- This plan assumes the project remains a Next.js marketing site backed by WordPress.
- If you want, I can turn this into a GitHub issue backlog with acceptance criteria next.
