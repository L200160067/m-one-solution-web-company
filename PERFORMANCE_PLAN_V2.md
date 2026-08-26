# Rancangan Update Performa v2 — M-One Solution Website

Berdasarkan audit PageSpeed Insights terbaru (25 Agu 2026) setelah perubahan v1
ter-deploy. Fokus sekarang adalah **akar masalah produksi mobile**.

---

## 1. Skor Saat Ini (Produksi)

| Metrik | Mobile | Desktop | Target |
|---|---|---|---|
| Performance | **81** | **98** | ≥ 90 mobile |
| Accessibility | **100** | **100** | 100 ✅ |
| Best Practices | **100** | **100** | 100 ✅ |
| SEO | **100** | **100** | 100 ✅ |
| Agentic Browsing | **100** | **100** | 100 ✅ |

### Core Web Vitals

| Metrik | Mobile | Desktop | Target |
|---|---|---|---|
| FCP | 1.2 s | 0.5 s | < 1.8 s |
| LCP | **3.5 s** | 1.0 s | < 2.5 s |
| TBT | 60 ms | 0 ms | < 200 ms |
| CLS | 0.001 | 0 | < 0.1 |
| Speed Index | **10.0 s** | 1.2 s | < 3.4 s |
| TTI | 3.7 s | 1.0 s | < 3.8 s |

> Accessibility, Best Practices, SEO sudah sempurna. Sisa masalah murni
> **performance mobile**.

---

## 2. Analisis Akar Masalah

### 2.1 TTFB / Server Response Time — PENYEBAB UTAMA

**Mobile:** Root document took **6,020 ms** (TTFB). LCP breakdown menunjukkan
TTFB = 6,095 ms dari total 7,187 ms LCP. Speed Index 10.0 s juga disebabkan ini.

**Desktop:** Root document took **950 ms** (masih di atas target 600 ms).

**Akar masalah:** Homepage masih melakukan `fetchServices()` di server sebelum
merender HTML. Meskipun below-fold sudah di-Suspense, Services tetap blocking.
Selain itu, `RootLayout` melakukan `apiFetch('/settings')` sebelum render.
Jadi server menunggu **2 fetch berurutan** (settings + services) sebelum HTML
pertama dikirim.

**Preconnect warning:** Lighthouse menandai `berita-mone.mutudev.com` dan
`cdn.mutudev.com` sebagai "Unused preconnect" — artinya homepage produksi
tidak benar-benar memuat resource dari origin tersebut saat load awal
(karena data di-fetch di server, bukan di klien).

### 2.2 JavaScript Bundle — 43 KiB unused + 13 KiB legacy

Chunk `e9db456e6febb5bf.js` (67 KB, 23 KB unused) dan
`ae33fc60850805f0.js` (38 KB, 20 KB unused) adalah penyumbang terbesar.

**Mobile:** JS execution time **3.0 s**, main-thread work **5.6 s**
(Script Evaluation 2.9 s). Ini disebabkan oleh `motion/react` dan
`lucide-react` yang masih dimuat di above-fold.

Legacy JS 13 KiB dari polyfill `Array.prototype.at/flat/flatMap`,
`Object.fromEntries/hasOwn`, `String.prototype.trimStart/trimEnd`.

### 2.3 Render-blocking CSS + email-decode

CSS chunk Next.js (14.9 KB) dan Cloudflare `email-decode.min.js` (1 KB)
masih render-blocking di kedua form factor.

### 2.4 bfcache disabled

`Cache-Control: no-store` pada root document mencegah back/forward cache.
Ini berasal dari middleware/Next.js dynamic rendering.

### 2.5 Image delivery (desktop)

Hero image masih bisa dioptimasi (19 KiB potensi penghematan).

---

## 3. Rancangan Update

### P0 — Eliminasi TTFB Mobile (dampak terbesar)

#### 3.1 Hapus fetch blocking di RootLayout dan Home

**Strategi:** Pindahkan **semua** data fetch ke Suspense boundary, termasuk
Settings dan Services. RootLayout tidak boleh menunggu API sebelum
mengirim HTML shell.

**Tindakan:**

1. **RootLayout:** Hapus `apiFetch('/settings')`. Buat komponen async
   `FooterData` dan `WhatsAppData` yang masing-masing fetch sendiri dan
   dibungkus `<Suspense>`. Footer dan WhatsAppButton menerima `settings`
   opsional dan menampilkan fallback statis saat data belum load.

2. **Home (`page.tsx`):** Hapus `fetchServices()`. Bungkus `<Services>` dalam
   `<Suspense>` dengan skeleton fallback. Services menjadi async component
   yang fetch sendiri.

3. **Settings via streaming:** Buat `src/components/FooterData.tsx` (async)
   yang fetch `/settings` dan render `<Footer settings={...} />`.
   RootLayout cukup render `<Suspense fallback={<FooterFallback />}>`
   `<FooterData />` `</Suspense>`.

**Dampak:** TTFB turun dari 6s ke ~200-500ms (hanya HTML shell + static
assets). LCP mobile turun drastis karena TTFB adalah komponen terbesar.

**File target:**
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/components/Footer.tsx` (tambah fallback state)
- `src/components/FooterData.tsx` (baru)
- `src/components/Services.tsx` atau `src/components/ServicesSection.tsx`
  (async wrapper)

#### 3.2 Hapus preconnect yang tidak terpakai

Karena data di-fetch di server (RSC), klien tidak melakukan request ke
`berita-mone.mutudev.com` saat load awal. Hapus kedua preconnect dan
ganti dengan `dns-prefetch` saja (lebih ringan, tidak membuka koneksi
prematur).

**File target:** `src/app/layout.tsx`

---

### P1 — Kurangi JavaScript Bundle

#### 3.3 Identifikasi dan pecah chunk e9db456e6febb5bf.js

Chunk ini berisi `motion/react` + polyfill. Setelah TTFB diperbaiki,
ini menjadi prioritas berikutnya.

**Tindakan:**

1. **Ganti `motion/react` dengan CSS animation** untuk elemen dekoratif
   di above-fold (Hero floating cards, blob parallax). Motion library
   tetap untuk below-fold yang sudah di-dynamic import.

2. **Hero.tsx:** Ubah floating card animation dari
   `animate={{ y: [-8, 8, -8] }}` ke CSS keyframes `float` class.
   Ubah scroll parallax (`useScroll`/`useTransform`) ke CSS
   `@keyframes` atau hapus sama sekali (parallax tidak terlihat di mobile).

3. **FastPackages.tsx:** Ganti `whileHover={{ y: -8 }}` dengan
   Tailwind `hover:-translate-y-2 transition-transform`.

**File target:**
- `src/components/Hero.tsx`
- `src/components/FastPackages.tsx`
- `src/index.css` (tambah keyframes `float`)

#### 3.4 Pastikan browserslist efektif

Verifikasi bahwa `browserslist` di `package.json` sudah memicu Next.js
untuk tidak menyertakan polyfill. Jika legacy JS masih muncul setelah
rebuild, pertimbangkan `swc-loader` target atau
`experimental.optimizePackageImports`.

**File target:** `package.json`, `next.config.ts`

---

### P2 — Render-blocking & bfcache

#### 3.5 Nonaktifkan Cloudflare email obfuscation

`email-decode.min.js` (1 KB) render-blocking dan tidak diperlukan
karena email footer ditulis plain text via `<a href="mailto:...">`.

**Tindakan:** Nonaktifkan di dashboard Cloudflare:
Scrape Shield → Email Address Obfuscation → Off.

Atau, jika ingin tetap obfuscate, ganti dengan CSS `direction: rtl`
trick atau SVG text.

#### 3.6 bfcache — Cache-Control: no-store

Lighthouse menandai `MainResourceHasCacheControlNoStore`. Next.js
middleware dynamic rendering menyebabkan `Cache-Control: no-store`
pada root document.

**Tindakan:**
- Pertimbangkan Static Site Generation (SSG) untuk homepage jika
  data tidak berubah sering. Gunakan `generateStaticParams` + ISR
  (`revalidate: 3600`) alih-alih fully dynamic.
- Atau set header `Cache-Control: public, max-age=0, s-maxage=0,
  must-revalidate` di middleware untuk mengizinkan bfcache.

**File target:** `middleware.ts`, `src/app/page.tsx`

---

### P3 — Image delivery (desktop)

#### 3.7 Optimasi hero image lebih lanjut

**Tindakan:**
- Kompres `hero.webp` ke target < 20 KiB (saat ini ~30 KB).
- Atau aktifkan AVIF: tambahkan `formats: ['image/avif', 'image/webp']`
  di `next.config.ts` images config.
- Pertimbangkan `quality: 70` untuk hero image (saat ini default 75).

**File target:** `next.config.ts`, `public/images/branding/hero.webp`

---

## 4. Urutan Eksekusi

1. **Streaming Settings + Services** (P0) — eliminasi TTFB 6s → < 1s
2. **Hapus preconnect** (P0) — bersihkan network tree
3. **CSS animation untuk Hero** (P1) — kurangi motion bundle di above-fold
4. **Nonaktifkan email obfuscation** (P2) — hilangkan render-blocking JS
5. **bfcache / Cache-Control** (P2) — izinkan back/forward cache
6. **AVIF + kompres hero** (P3) — polish desktop

---

## 5. Verifikasi

```bash
npm run build && npm run test

# Audit produksi setelah deploy
CHROME_PATH=/usr/bin/brave-browser lighthouse https://mone.mutudev.com/ \
  --form-factor=mobile --output=json --output-path=/tmp/lh-after.json

CHROME_PATH=/usr/bin/brave-browser lighthouse https://mone.mutudev.com/ \
  --preset=desktop --output=json --output-path=/tmp/lh-after-d.json
```

**Target mobile:**
- Performance ≥ 90
- LCP < 2.5 s (saat ini 3.5 s)
- Speed Index < 3.4 s (saat ini 10.0 s)
- TTFB < 800 ms (saat ini 6,020 ms)
- JS execution < 1.5 s (saat ini 3.0 s)

---

## 6. Catatan

- TTFB 6,020 ms mobile adalah anomali — kemungkinan server WordPress
  lambat saat audit. Namun pola fetch di RootLayout + Home tetap
  harus diperbaiki karena akan konsisten melambatkan TTFB.
- Preconnect "unused" terjadi karena data di-fetch di server (RSC),
  bukan klien. Setelah streaming, preconnect memang tidak diperlukan
  lagi di homepage.
- bfcache disabled oleh `Cache-Control: no-store` dari middleware
  dynamic rendering. Jika homepage bisa SSG/ISR, bfcache akan aktif
  otomatis.
