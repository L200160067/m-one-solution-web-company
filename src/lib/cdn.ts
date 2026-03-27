/**
 * lib/cdn.ts
 * Helper enkripsi URL gambar untuk Next.js — M-One Solution
 *
 * Cara pakai:
 *   import { getCdnUrl, getCdnUrlSync } from "@/lib/cdn";
 *
 *   // Di Server Component / getServerSideProps / generateStaticParams:
 *   const url = await getCdnUrl("/images/branding/about.webp", "pages");
 *
 *   // Di Client Component (butuh useEffect):
 *   const [url, setUrl] = useState("");
 *   useEffect(() => { getCdnUrl("/images/branding/about.webp").then(setUrl); }, []);
 *
 *   // Helper otomatis deteksi source dari URL asli GitHub:
 *   const url = await convertGithubUrl("https://l200160067.github.io/mone-assets/images/branding/about.webp");
 */

// ─── KONFIGURASI ─────────────────────────────────────────────────────────────
// Harus SAMA persis dengan SECRET_KEY di Cloudflare Worker!

const SECRET_KEY = "mOneCDNProxyS3cr3tKey2026M0n3!@#";

const CDN_WORKER_URL =
  process.env.NEXT_PUBLIC_CDN_URL || "https://falling-brook-2a16.kurialfarez.workers.dev";

// Mapping source URL GitHub → key source Worker
const GITHUB_SOURCE_MAP: Record<string, "pages" | "raw"> = {
  "l200160067.github.io/mone-assets": "pages",
  "raw.githubusercontent.com/L200160067/mone-assets": "raw",
};

// ─── ENKRIPSI ────────────────────────────────────────────────────────────────

async function getKey(): Promise<CryptoKey> {
  const encoder = new TextEncoder();
  const keyData = encoder.encode(SECRET_KEY.slice(0, 16));
  return await crypto.subtle.importKey(
    "raw",
    keyData,
    { name: "AES-CBC" },
    false,
    ["encrypt"]
  );
}

async function encryptToken(path: string, source: "pages" | "raw"): Promise<string> {
  const payload = JSON.stringify({ p: path, s: source });
  const encoder = new TextEncoder();
  const iv = crypto.getRandomValues(new Uint8Array(16));
  const key = await getKey();

  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-CBC", iv },
    key,
    encoder.encode(payload)
  );

  const combined = new Uint8Array(16 + encrypted.byteLength);
  combined.set(iv);
  combined.set(new Uint8Array(encrypted), 16);

  return btoa(String.fromCharCode(...combined))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}

// ─── PUBLIC API ───────────────────────────────────────────────────────────────

/**
 * Buat URL gambar terenkripsi dari path relatif.
 *
 * @param path    - Path relatif di repo, contoh: "/images/branding/about.webp"
 * @param source  - "pages" (github.io) | "raw" (raw.githubusercontent.com)
 * @returns URL terenkripsi, contoh: "https://cdn.mutudev.com/img/aB3xKm..."
 */
export async function getCdnUrl(
  path: string,
  source: "pages" | "raw" = "pages"
): Promise<string> {
  const token = await encryptToken(path, source);
  return `${CDN_WORKER_URL}/img/${token}`;
}

/**
 * Konversi URL GitHub asli → URL CDN terenkripsi secara otomatis.
 *
 * @param githubUrl - URL gambar asli dari GitHub
 * @returns URL terenkripsi via Cloudflare Worker
 *
 * @example
 * // GitHub Pages
 * convertGithubUrl("https://l200160067.github.io/mone-assets/images/branding/about.webp")
 * // → "https://cdn.mutudev.com/img/aB3xKm..."
 *
 * // Raw GitHub
 * convertGithubUrl("https://raw.githubusercontent.com/L200160067/mone-assets/main/images/partners/xxx.webp")
 * // → "https://cdn.mutudev.com/img/cD9zLp..."
 */
export async function convertGithubUrl(githubUrl: string): Promise<string> {
  for (const [pattern, source] of Object.entries(GITHUB_SOURCE_MAP)) {
    if (githubUrl.includes(pattern)) {
      // Ambil path setelah base URL
      const baseUrl =
        source === "pages"
          ? `https://${pattern}`
          : `https://${pattern}/main`;

      const path = githubUrl.replace(baseUrl, "");
      return getCdnUrl(path, source);
    }
  }

  // Jika bukan URL GitHub yang dikenal, kembalikan apa adanya
  console.warn("[cdn] URL tidak dikenali, dikembalikan tanpa enkripsi:", githubUrl);
  return githubUrl;
}

/**
 * Konversi banyak URL sekaligus (batch).
 *
 * @param urls - Array URL GitHub asli
 * @returns Array URL terenkripsi dalam urutan yang sama
 */
export async function convertGithubUrls(urls: string[]): Promise<string[]> {
  return Promise.all(urls.map(convertGithubUrl));
}

// ─── NEXT.JS IMAGE LOADER ─────────────────────────────────────────────────────
/**
 * Custom Image Loader untuk next/image.
 * Daftarkan di next.config.js:
 *
 *   module.exports = {
 *     images: {
 *       loader: "custom",
 *       loaderFile: "./lib/cdn.ts",
 *     },
 *   };
 *
 * CATATAN: Loader ini sinkron, jadi token di-generate dari path tanpa enkripsi
 * (pakai encoding base64url sederhana). Untuk enkripsi penuh, gunakan
 * getCdnUrl() di Server Component dan pass hasilnya sebagai prop.
 */
export default function cdnImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  // Jika sudah URL CDN, kembalikan langsung
  if (src.startsWith(CDN_WORKER_URL)) return src;

  // Untuk next/image loader (sinkron), encode path sederhana
  // Enkripsi penuh hanya bisa dilakukan via getCdnUrl() di server
  const encoded = btoa(src).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  return `${CDN_WORKER_URL}/img/${encoded}?w=${width}&q=${quality || 75}`;
}

// ─── REACT HOOK (Client Component) ───────────────────────────────────────────
/**
 * Hook untuk pakai di Client Component Next.js.
 *
 * @example
 * "use client";
 * import { useCdnUrl } from "@/lib/cdn";
 *
 * export function MyImage() {
 *   const url = useCdnUrl("https://l200160067.github.io/mone-assets/images/branding/about.webp");
 *   return url ? <img src={url} alt="about" /> : <div>Loading...</div>;
 * }
 */
export function useCdnUrl(githubUrl: string): string | null {
  // Implementasi di file terpisah karena butuh "use client"
  // Lihat: lib/useCdnUrl.ts
  throw new Error(
    'useCdnUrl harus diimport dari "@/lib/useCdnUrl". ' +
    'Buat file lib/useCdnUrl.ts dan tambahkan "use client" di bagian atas.'
  );
}
