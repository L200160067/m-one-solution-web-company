# M-One Solution Web — Improvement Plan

This plan is based on the current codebase state at the time of review.
It is organized by priority and grouped into phases so improvements can be shipped incrementally.

---

## 1. High Priority

### 1.1 Stabilize content/config as first-class inputs
**Why:** `siteConfig`, pricing, dates, slots, CTAs, and business logic are hard-coded in components. This creates ownership risk, marketing bottlenecks, and production surprises.

**What to change:**
- Move all marketing copy blocks, CTAs, pricing, dates, and limits into a config layer.
- Preferred: expose these via WordPress ACF options or a lightweight JSON config loaded at runtime.
- If CMS-only is too heavy for now, at minimum extract to a typed config file, e.g. `src/config/marketing.ts`, and load it in pages/components.

### 1.2 Tighten WordPress data typing + validation
**Why:** The current mappers accept loosely typed objects and use `any`/defensive casts. That makes backend schema changes silent and risky.

**What to change:**
- Replace hand-rolled “partial” types with explicit WP REST response interfaces per CPT.
- Add runtime validation on API boundaries using `zod`:
  - validate `ApiResponse<T>` shape
  - validate mapped app types before passing them to components
- Fail fast in dev, fall back gracefully in prod.

### 1.3 Centralize API behavior and error UX
**Why:** Fetching, caching, error fallback, and logging are currently scattered across pages and components. Behavior is inconsistent.

**What to change:**
- Introduce a single data-access layer for WordPress endpoints with:
  - consistent error shape
  - typed client
  - request deduplication where appropriate
- Add a shared `EmptyState` and `ErrorState` component set.
- Replace ad-hoc `try/catch` fallbacks with uniform UI behavior.

### 1.4 Move sensitive/config values out of source
**Why:** `src/lib/cdn.ts` contains a secret key pattern in source. Secrets should never live in repo code.

**What to change:**
- Replace embedded secret handling with runtime-only env-based configuration.
- Audit `next.config.ts`, `cdn.ts`, and `site.ts` for any credentials, worker URLs, or internal domains that should become env vars.

---

## 2. Medium Priority

### 2.1 Design system + token layer
**Why:** Colors, spacing, radii, shadows, typography scales, and animation curves are repeated across components. Visual drift is easy.

**What to change:**
- Add CSS custom properties for theme tokens in `globals.css`:
  - brand colors
  - neutrals
  - radii
  - shadows
  - motion curves
- Reuse tokens in components instead of hard-coded values.
- Document core components in a small internal UI guide.

### 2.2 Consistent image strategy
**Why:** Some images use raw WP URLs, some use CDN hooks, some are static, and there is custom CDN encryption logic mixed with image loading concerns.

**What to change:**
- Standardize on `next/image` with explicit `width`/`height`/`fill` and a single image-config strategy.
- Define a small image helper module that decides source:
  - WP media
  - CDN
  - local `/public`
- Remove duplicated image fallback logic in favor of shared primitives.

### 2.3 Bundle and runtime hygiene
**Why:** Many client components pull in `motion`, `lucide-react`, and large page modules even when not needed on every route.

**What to change:**
- Audit component imports and prefer:
  - dynamic imports for below-fold or non-critical sections
  - route-specific client bundles
- Reduce `motion` usage on static decorative elements where CSS animation is sufficient.

### 2.4 Expand tests to critical paths
**Why:** Tests currently cover mappers only. The main user flows and API integration have no regression coverage.

**What to add:**
- Component smoke tests for:
  - home page sections rendering with fallback data
  - contact form validation and submission flow
  - service detail page missing state
- API route tests or request-mocked integration tests for `apiFetch`:
  - list endpoints
  - single-item endpoint
  - settings fallback

---

## 3. Lower Priority / Strategic

### 3.1 SEO and content strategy
**Why:** SEO metadata and structured data are present but minimal for a business site that depends on local search.

**What to change:**
- Add per-service and per-project SEO modules.
- Expand structured data to include `Service`, `FAQPage`, and `WebSite` where appropriate.
- Add breadcrumb structured data to service/project/blog detail pages.

### 3.2 Internationalization / content reuse
**Why:** Some pages are entirely Indonesian, others mix English headings. This is fine now, but scaling content will become messy.

**What to change:**
- If multilingual is planned later, introduce routing placeholders and message extraction early.
- If monolingual is the plan, lock content language and remove mixed-language copy.

### 3.3 Analytics and conversion measurement
**Why:** There is no visible analytics, conversion events, or funnel measurement.

**What to add:**
- Privacy-respecting analytics setup.
- Track key conversion events:
  - CTA clicks
  - contact form opens
  - WhatsApp click
  - service page views

### 3.4 Deployment hardening
**Why:** There is no visible CI workflow in the repo snapshot.

**What to add:**
- GitHub Actions or equivalent running:
  - `npm run lint`
  - `npm run build`
  - `npm run test`
- Branch protection and preview deploys for non-production review.

---

## Suggested Execution Order

1. **Config/content ownership**  
   Move hard-coded marketing values out of components. This unlocks faster marketing changes and reduces developer-to-marketer friction.

2. **API typing + validation**  
   Make WordPress integration safer before adding more pages or features.

3. **Shared UI primitives + design tokens**  
   Reduce duplication and make future redesigns cheaper.

4. **Image/media standardization**  
   Fix the largest source of visual regressions and caching inconsistencies.

5. **Expanded tests**  
   Lock in behavior for homepage, contact, and service flows.

6. **SEO, analytics, CI**  
   Growth and reliability improvements once the foundation is stable.

---

## Notes
- This plan assumes the project remains a Next.js marketing site backed by WordPress.
- If you want, I can turn this into a task backlog with issue-style acceptance criteria next.
