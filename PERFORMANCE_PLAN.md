# Rencana Peningkatan Performa & Kualitas — M-One Solution Website

Rencana ini disusun berdasarkan hasil audit **Google PageSpeed Insights** untuk URL
`https://mone.mutudev.com/` (desktop, laporan 25 Agu 2026) dan hasil audit
**Lighthouse 13.4.1** lokal untuk perangkat mobile.

---

## 1. Ringkasan Hasil Audit

| Metrik | Desktop (PageSpeed) | Mobile (Lighthouse lokal) | Target |
|---|---|---|---|
| Performance | **99** | **82** | ≥ 90 mobile |
| Accessibility | **94** | **94** | 100 |
| Best Practices | **96** | **100** | 100 |
| SEO | **100** | **100** | 100 |
| Agentic Browsing | **2/2** | — | 2/2 |

### Core Web Vitals

| Metrik | Desktop | Mobile | Target |
|---|---|---|---|
| First Contentful Paint (FCP) | 0.4 s | 1.9 s | < 1.8 s |
| Largest Contentful Paint (LCP) | 0.8 s | **4.5 s** | < 2.5 s |
| Total Blocking Time (TBT) | 0 ms | 80 ms | < 200 ms |
| Cumulative Layout Shift (CLS) | 0 | 0.001 | < 0.1 |
| Speed Index | 0.8 s | 3.2 s | < 3.4 s |
| Time to Interactive | — | 4.9 s | < 3.8 s |

> **Kesimpulan:** Desktop sudah sangat baik. Fokus utama harus ke **mobile**, khususnya
> **LCP, FCP, TTI, dan TTFB**.

---

## 2. Prioritas Tindakan

### P0 — Percepat Muat Halaman Mobile (dampak besar)

#### 2.1 Kurangi waktu respons server (TTFB ~920–990 ms)

**Masalah:** Dokumen HTML root membutuhkan waktu respons server yang lama.
Halaman beranda melakukan 5 panggilan API WordPress secara serial/paralel di
`page.tsx` sebelum mengembalikan HTML.

**Tindakan:**

- Gunakan **Suspense + streaming** di `src/app/page.tsx`.
- Pisahkan data yang benar-benar diperlukan di atas fold (hero, paket cepat,
  about, services) dengan data yang ada di bawah fold (projects, testimonials,
  partners, posts).
- Pindahkan fetch untuk data below-fold ke dalam komponen async terpisah yang
  dibungkus `<Suspense fallback={<Skeleton />}>`.
- Pertimbangkan **React Server Component caching** (`unstable_cache` atau
  `fetch` dengan `next.revalidate`) untuk endpoint statis seperti `partners` dan
  `testimonials`.

**File target:**

- `src/app/page.tsx`
- `src/components/HomepageBelowFold.tsx` (jadikan async fetcher + Suspense)

#### 2.2 Perbaiki penemuan dan pengiriman gambar LCP

**Masalah:** Di desktop, audit "Improve image delivery" menunjukkan potensi
penghematan ~33 KiB pada gambar hero. Di mobile, LCP mencapai 4.5 s.

**Tindakan:**

- Pastikan `sizes` pada `<WpImage>` di `Hero.tsx` tidak memaksa browser mengunduh
  gambar besar pada layar kecil. Komponen kanan hero sudah `hidden lg:block`,
  sehingga `sizes="(max-width: 1024px) 0vw, 50vw"` sudah benar, tetapi
  `<link rel="preload" as="image">` di `layout.tsx` memuat gambar tanpa media
  query.
- Tambahkan atribut `media="(min-width: 1024px)"` pada preload hero agar mobile
  tidak memuat gambar hero.
- Kompres ulang `public/images/branding/hero.webp` atau aktifkan format AVIF
  melalui konfigurasi `next.config.ts` (tambahkan `formats: ['image/avif', 'image/webp']`).
- Pastikan `priority` dan `fetchpriority="high"` hanya diterapkan pada gambar hero
  desktop.

**File target:**

- `src/app/layout.tsx`
- `src/components/Hero.tsx`
- `public/images/branding/hero.webp`
- `next.config.ts`

#### 2.3 Bersihkan `<link rel="preconnect">` yang berlebihan

**Masalah:** PageSpeed memberi peringatan "More than 4 `preconnect` connections
were found".

**Tindakan:**

- Pertahankan hanya 2 origin yang paling kritis: `https://berita-mone.mutudev.com`
  dan `https://cdn.mutudev.com`.
- Ubah origin Jetpack/i.wp.com (`i0.wp.com` … `i3.wp.com`) menjadi
  `<link rel="dns-prefetch">` saja, karena tidak semua gambar berasal dari sana.

**File target:**

- `src/app/layout.tsx`

#### 2.4 Hilangkan render-blocking request yang tidak perlu

**Masalah:** Lighthouse mobile menandai CSS chunk Next.js dan
`email-decode.min.js` dari Cloudflare sebagai render-blocking.

**Tindakan:**

- Untuk CSS Next.js: tidak banyak yang bisa diubah karena sudah dioptimalkan
  secara otomatis. Pastikan tidak ada stylesheet manual yang besar ditambahkan
  di `layout.tsx`.
- Untuk `email-decode.min.js`: evaluasi apakah masih dibutuhkan. Jika email
  footer tidak di-obfuscate oleh Cloudflare, hapus penggunaan fitur tersebut atau
  gantikan dengan email yang ditulis melalui SVG/entitas sehingga tidak memicu
  skrip decoding.

**File target:**

- `src/app/layout.tsx`
- Konfigurasi Cloudflare (Scrape Shield → Email Address Obfuscation)

---

### P1 — Ringankan Bundle JavaScript

#### 1.1 Kurangi JavaScript yang tidak terpakai (~41–42 KiB)

**Masalah:** Lighthouse mendeteksi dua chunk besar dengan banyak kode yang tidak
terpakai, terutama saat mobile.

**Tindakan:**

- Aktifkan tree-shaking ikon dari `lucide-react` dengan `modularizeImports` di
  `next.config.ts`:

  ```ts
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{ kebabCase member }}',
    },
  },
  ```

- Lazy-load section below-fold (`Testimonials`, `Partners`, `BlogSlider`,
  `CTA`) menggunakan `next/dynamic` dengan `ssr: true` dan `loading` skeleton.
- Hindari memuat seluruh `motion` hanya untuk efek hover/scroll sederhana.
  Ganti animasi dekoratif di `Hero.tsx` (floating cards, parallax blob) dengan
  CSS `@keyframes` dan `transform` bila memungkinkan.
- Audit komponen client: `Hero`, `FastPackages`, `About`, `Services`, dll.
  Pindahkan state/effect yang tidak perlu ke Server Component.

**File target:**

- `next.config.ts`
- `src/components/Hero.tsx`
- `src/components/FastPackages.tsx`
- `src/components/HomepageBelowFold.tsx`
- `src/components/Services.tsx`

#### 1.2 Kurangi polyfill legacy JavaScript (~13 KiB)

**Masalah:** Audit "Legacy JavaScript" menunjukkan potensi penghematan 13 KiB.

**Tindakan:**

- Tambahkan `browserslist` di `package.json` yang menargetkan browser modern:

  ```json
  "browserslist": [
    "defaults and supports es6-module",
    "maintained node versions"
  ]
  ```

- Pertimbangkan opsi Next.js `experimental.serverActions` atau
  `experimental.optimizePackageImports` untuk library besar.

**File target:**

- `package.json`
- `next.config.ts`

#### 1.3 Perbaiki forced reflow / main-thread work

**Masalah:** Main-thread work mobile mencapai 3.9 s, dengan `styleLayout` 523 ms
  dan `scriptEvaluation` 1.37 s.

**Tindakan:**

- Hindari membaca properti layout (offsetHeight, clientWidth) diikuti write
  style dalam satu frame.
- Gunakan `will-change: transform` hanya pada elemen animasi, lalu hapus setelah
  animasi selesai.
- Kurangi jumlah elemen DOM animasi di atas fold.

**File target:**

- `src/components/Hero.tsx`
- `src/components/Navbar.tsx`

---

### P2 — Perbaiki Aksesibilitas (dari 94 ke 100)

#### 2.1 Perbaiki rasio kontras warna

**Masalah:** Lighthouse menemukan 4 elemen dengan kontras tidak memenuhi WCAG AA.

| Elemen | Lokasi | Solusi |
|---|---|---|
| Badge "M-One Lite" | `FastPackages.tsx` baris 16 | Ganti `text-emerald-600` menjadi `text-emerald-700` atau gunakan `bg-emerald-100` yang lebih pekat. |
| Link "Lihat Paket" sekolah | `FastPackages.tsx` baris 73 | Gunakan `text-emerald-700` atau tambahkan background. |
| Teks copyright footer | `Footer.tsx` baris 146 | Ganti `text-slate-500` menjadi `text-slate-400`. |
| Tagline footer | `Footer.tsx` baris 149 | Ganti `text-slate-500` menjadi `text-slate-400`. |

**File target:**

- `src/components/FastPackages.tsx`
- `src/components/Footer.tsx`

#### 2.2 Perbaiki urutan heading

**Masalah:** Heading tidak berurutan (`h1` → `h3` tanpa `h2`, `h4` di footer
  tanpa `h3`).

**Tindakan:**

- Di `Hero.tsx`, ubah heading floating card `Web Development`, `Mobile Apps`,
  `Solusi Digital` dari `<h3>` menjadi `<p className="text-lg font-semibold">`
  atau tambahkan `<h2 className="sr-only">Layanan Kami</h2>` sebelumnya.
- Di card portofolio, pastikan tidak ada loncatan heading (mis. `h2` ke `h3`
  kemudian ke `h4`).
- Di footer, ubah judul kolom (`Tautan Cepat`, `Ketentuan`, `Kontak`) dari
  `<h4>` menjadi `<h3>` dengan ukuran tipografi yang sama, atau tambahkan
  `<h2 className="sr-only">Footer</h2>`.

**File target:**

- `src/components/Hero.tsx`
- `src/components/PortfolioCard.tsx` atau komponen card terkait
- `src/components/Footer.tsx`

#### 2.3 Perbedaan tautan dengan tujuan sama

**Masalah:** Lighthouse accessibility menyebutkan "Identical links have the
same purpose". Kemungkinan karena beberapa card berisi tautan "Lihat Paket",
"Kunjungi Website", atau "Baca Selengkapnya" yang berulang tanpa konteks
berbeda.

**Tindakan:**

- Tambahkan `aria-label` yang deskriptif pada tautan berulang, misalnya
  `aria-label="Lihat paket web sekolah M-One Lite"`.

**File target:**

- `src/components/FastPackages.tsx`
- `src/components/PortfolioCard.tsx`
- `src/components/BlogCard.tsx`

---

### P3 — Perbaiki Best Practices

#### 3.1 Gambar dengan rasio aspek tidak sesuai

**Masalah:** Lighthouse desktop menandai beberapa gambar ditampilkan dengan
rasio aspek berbeda dari sumbernya.

**Tindakan:**

- Periksa logo mitra di section "Mitra Kami". Jika logo persegi panjang tetapi
  ditampilkan persegi, gunakan `object-fit: contain` dan tetapkan `aspect-ratio`
  eksplisit.
- Pastikan `width` dan `height` (atau `fill` + parent dengan `aspect-ratio`)
  konsisten dengan dimensi asli gambar.

**File target:**

- `src/components/Partners.tsx`
- `src/components/WpImage.tsx` (pastikan prop `aspectRatio` jika ada)

#### 3.2 Keamanan header

**Masalah:** Best Practices menyarankan CSP, HSTS, COOP, dan Trusted Types.

**Tindakan:**

- Tambahkan header keamanan di `next.config.ts`:

  ```ts
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://berita-mone.mutudev.com https://cdn.mutudev.com; frame-ancestors 'none';" },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
        ],
      },
    ];
  }
  ```

> **Catatan:** CSP di atas adalah contoh awal. Sesuaikan dengan origin pihak
> ketiga yang benar-benar digunakan (Cloudflare, WhatsApp widget, dsb.) dan
> pertimbangkan penggunaan nonce untuk `script-src`/`style-src`.

**File target:**

- `next.config.ts`

#### 3.3 Source map untuk JavaScript

**Masalah:** Lighthouse melaporkan source map hilang untuk chunk JS besar.

**Tindakan:**

- Jika debugging di produksi penting, aktifkan:

  ```ts
  productionBrowserSourceMaps: true,
  ```

  di `next.config.ts`.
- Jika tidak diperlukan, abaikan temuan ini karena source map memang sengaja
  tidak diaktifkan demi keamanan/ukuran.

**File target:**

- `next.config.ts`

---

### P4 — Fine-tuning Desktop

#### 4.1 Cache lifetime pihak ketiga

**Masalah:** Cloudflare Insights beacon dan email-decode JS memiliki cache
lifetime pendek.

**Tindakan:**

- Tidak banyak yang dapat diubah karena aset pihak ketiga.
- Jika analytics tidak dibutuhkan, hapus Cloudflare Insights.
- Jika email decode tidak dibutuhkan, nonaktifkan di dashboard Cloudflare.

#### 4.2 Optimasi gambar desktop

**Tindakan:**

- Kompres ulang `hero.webp` (target < 25 KiB tanpa kehilangan kualitas visual).
- Aktifkan AVIF melalui `next.config.ts` untuk mendukung browser modern.

---

## 3. Urutan Eksekusi yang Disarankan

1. **Streaming/Suspense di homepage** — dampak langsung ke mobile LCP & TTFB.
2. **Preconnect cleanup + preload hero dengan media query** — mengurangi
   network contention di mobile.
3. **Kontras & heading order** — cepat, langsung naikkan skor accessibility.
4. **Tree-shake lucide-react + dynamic import below-fold** — mengurangi bundle
   JS.
5. **Konfigurasi browserslist + legacy JS** — mengurangi polyfill.
6. **Header keamanan + CSP** — menaikkan Best Practices.
7. **Optimasi gambar & cache pihak ketiga** — polish akhir.

---

## 4. Verifikasi

Setelah perubahan diterapkan, verifikasi dengan:

```bash
# Build dan test lokal
npm run build
npm run test

# Audit desktop
CHROME_PATH=/usr/bin/brave-browser lighthouse https://mone.mutudev.com/ \
  --preset=desktop --output=json --output-path=/tmp/lh-desktop.json

# Audit mobile
CHROME_PATH=/usr/bin/brave-browser lighthouse https://mone.mutudev.com/ \
  --form-factor=mobile --output=json --output-path=/tmp/lh-mobile.json
```

Target akhir:

- Performance mobile ≥ 90
- Accessibility = 100
- Best Practices = 100
- SEO = 100
- LCP mobile < 2.5 s
- TTFB root document < 600 ms

---

## 5. Catatan

- Jangan mengubah hard-coded domain production (`mone.mutudev.com`,
  `berita-mone.mutudev.com`, `cdn.mutudev.com`) tanpa mengikuti pola migrasi
  `siteConfig.baseUrl` + `.env.example` yang sudah diterapkan sebelumnya.
- Setiap perubahan styling/accessibility sebaiknya diikuti dengan pembaruan
  snapshot/tes terkait agar regresi tidak terulang.
