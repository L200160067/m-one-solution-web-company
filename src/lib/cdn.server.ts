/**
 * ============================================================
 * lib/cdn.server.ts — Server-side CDN helpers
 * ============================================================
 *
 * These helpers use crypto.subtle and MUST only be called from
 * server contexts. They are kept server-only to avoid exposing
 * encryption behavior or secrets to the client bundle.
 */

const CDN_WORKER_URL =
  process.env.NEXT_PUBLIC_CDN_URL || "https://falling-brook-2a16.kurialfarez.workers.dev";

const SECRET_KEY = process.env.NEXT_PUBLIC_CDN_SECRET || "";

const GITHUB_SOURCE_MAP: Record<string, "pages" | "raw"> = {
  "l200160067.github.io/mone-assets": "pages",
  "raw.githubusercontent.com/L200160067/mone-assets": "raw",
};

async function getKey(): Promise<CryptoKey | null> {
  if (!SECRET_KEY) return null;
  const encoder = new TextEncoder();
  const keyData = encoder.encode(SECRET_KEY.slice(0, 16));
  return await crypto.subtle.importKey("raw", keyData, { name: "AES-CBC" }, false, ["encrypt"]);
}

async function encryptToken(path: string, source: "pages" | "raw"): Promise<string> {
  const key = await getKey();
  if (!key) throw new Error("CDN secret is not configured");

  const payload = JSON.stringify({ p: path, s: source });
  const encoder = new TextEncoder();
  const iv = crypto.getRandomValues(new Uint8Array(16));
  const encrypted = await crypto.subtle.encrypt({ name: "AES-CBC", iv }, key, encoder.encode(payload));

  const combined = new Uint8Array(16 + encrypted.byteLength);
  combined.set(iv);
  combined.set(new Uint8Array(encrypted), 16);

  return btoa(String.fromCharCode(...combined))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}

export async function getCdnUrl(path: string, source: "pages" | "raw" = "pages"): Promise<string> {
  const token = await encryptToken(path, source);
  return `${CDN_WORKER_URL}/img/${token}`;
}

export async function convertGithubUrl(githubUrl: string): Promise<string> {
  const configuredCdn = process.env.NEXT_PUBLIC_CDN_URL || "";

  // CDN worker belum aktif; pakai URL asli GitHub Pages agar gambar tidak blank.
  // Aktifkan kembali rewrite ke worker setelah CDN benar-benar bisa diakses.
  if (!configuredCdn || configuredCdn.includes("github.io")) {
    return githubUrl;
  }

  for (const [pattern, source] of Object.entries(GITHUB_SOURCE_MAP)) {
    if (githubUrl.includes(pattern)) {
      const baseUrl = source === "pages" ? `https://${pattern}` : `https://${pattern}/main`;
      const path = githubUrl.replace(baseUrl, "");
      return getCdnUrl(path, source as "pages" | "raw");
    }
  }

  console.warn("[cdn] URL tidak dikenali, dikembalikan tanpa enkripsi:", githubUrl);
  return githubUrl;
}

export async function convertGithubUrls(urls: string[]): Promise<string[]> {
  return Promise.all(urls.map(convertGithubUrl));
}
