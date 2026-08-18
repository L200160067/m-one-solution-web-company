"use client";

/**
 * lib/cdn.ts — Client-side CDN URL converter.
 *
 * Convert known GitHub Pages / raw.githubusercontent.com URLs into
 * encrypted CDN worker tokens. Falls back to the original URL if the
 * source is not recognised.
 */

export async function convertGithubUrl(githubUrl: string): Promise<string> {
  const configuredCdn = process.env.NEXT_PUBLIC_CDN_URL || "";

  // CDN worker belum aktif (cdn.mutudev.com tidak resolve, fallback worker
  // mengembalikan 403/CORS). Lewati rewrite dan pakai URL asli GitHub Pages
  // agar gambar tetap bisa diakses. Aktifkan kembali setelah worker CDN siap.
  if (!configuredCdn || configuredCdn.includes("github.io")) {
    return githubUrl;
  }

  const mappings: [string, "pages" | "raw"][] = [
    ["l200160067.github.io/mone-assets", "pages"],
    ["raw.githubusercontent.com/L200160067/mone-assets", "raw"],
  ];

  for (const [pattern, source] of mappings) {
    if (githubUrl.includes(pattern)) {
      const baseUrl = source === "pages" ? `https://${pattern}` : `https://${pattern}/main`;
      const path = githubUrl.replace(baseUrl, "");
      return getCdnUrl(path, source);
    }
  }

  console.warn("[cdn] URL tidak dikenali, dikembalikan tanpa enkripsi:", githubUrl);
  return githubUrl;
}

async function getCdnUrl(path: string, source: "pages" | "raw"): Promise<string> {
  const base = (process.env.NEXT_PUBLIC_CDN_URL || "https://falling-brook-2a16.kurialfarez.workers.dev").replace(
    /\/$/,
    ""
  );

  const secret = process.env.NEXT_PUBLIC_CDN_SECRET;
  if (!secret) {
    const encoded = btoa(`${source}:${path}`)
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=/g, "");
    return `${base}/img/${encoded}`;
  }

  const payload = JSON.stringify({ p: path, s: source });
  const encoder = new TextEncoder();
  const keyData = encoder.encode(secret.slice(0, 16));

  let cryptoKey: CryptoKey;
  try {
    cryptoKey = await crypto.subtle.importKey("raw", keyData, { name: "AES-CBC" }, false, ["encrypt"]);
  } catch {
    const encoded = btoa(`${source}:${path}`)
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=/g, "");
    return `${base}/img/${encoded}`;
  }

  const iv = crypto.getRandomValues(new Uint8Array(16));
  const encrypted = await crypto.subtle.encrypt({ name: "AES-CBC", iv }, cryptoKey, encoder.encode(payload));

  const combined = new Uint8Array(16 + encrypted.byteLength);
  combined.set(iv);
  combined.set(new Uint8Array(encrypted), 16);

  const token = btoa(String.fromCharCode(...combined))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");

  return `${base}/img/${token}`;
}
