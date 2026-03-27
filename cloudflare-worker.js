/**
 * Cloudflare Worker — M-One CDN Proxy
 * 
 * Deploy ke: Cloudflare Workers (workers.cloudflare.com)
 * Bind domain: cdn.mutudev.com  →  Worker ini
 * 
 * Cara deploy:
 *   1. Buka dash.cloudflare.com → Workers & Pages → Create Worker
 *   2. Paste seluruh kode ini
 *   3. Ganti SECRET_KEY dengan string acak 32 karakter milikmu
 *   4. Save & Deploy
 *   5. Tambah Custom Domain: cdn.mutudev.com
 */

// ─── KONFIGURASI ────────────────────────────────────────────────────────────

const SECRET_KEY = "mOneCDNProxyS3cr3tKey2026M0n3!@#"; // ← wajib sama dengan cdn.ts

// Source CDN yang diizinkan untuk di-proxy
const CDN_SOURCES = {
  // GitHub Pages (branding, hero, about, dll)
  pages: "https://l200160067.github.io/mone-assets",
  // Raw GitHub (partners, dll)
  raw: "https://raw.githubusercontent.com/L200160067/mone-assets/main",
};

// Domain frontend yang boleh request gambar (hotlink protection)
const ALLOWED_ORIGINS = [
  "https://mone.mutudev.com",
  "https://www.mone.mutudev.com",
  "http://localhost:3000",
  "http://localhost",
];

// Durasi token valid (menit). Set 0 untuk tidak expired.
const TOKEN_EXPIRY_MINUTES = 0;

// ─── ENKRIPSI / DEKRIPSI ─────────────────────────────────────────────────────

async function getKey() {
  const encoder = new TextEncoder();
  const keyData = encoder.encode(SECRET_KEY.slice(0, 16));
  return await crypto.subtle.importKey(
    "raw",
    keyData,
    { name: "AES-CBC" },
    false,
    ["encrypt", "decrypt"]
  );
}

/**
 * Enkripsi path gambar menjadi token base64url
 * @param {string} path  - path relatif, contoh: "/images/branding/about.webp"
 * @param {string} source - "pages" | "raw"
 */
export async function encryptImageToken(path, source = "pages") {
  const payload = TOKEN_EXPIRY_MINUTES > 0
    ? JSON.stringify({ p: path, s: source, exp: Date.now() + TOKEN_EXPIRY_MINUTES * 60000 })
    : JSON.stringify({ p: path, s: source });

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

/**
 * Dekripsi token → { p: path, s: source, exp? }
 */
async function decryptImageToken(token) {
  try {
    const base64 = token.replace(/-/g, "+").replace(/_/g, "/");
    const bytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
    const iv = bytes.slice(0, 16);
    const encrypted = bytes.slice(16);
    const key = await getKey();

    const decrypted = await crypto.subtle.decrypt(
      { name: "AES-CBC", iv },
      key,
      encrypted
    );

    return JSON.parse(new TextDecoder().decode(decrypted));
  } catch {
    return null;
  }
}

// ─── HOTLINK PROTECTION ───────────────────────────────────────────────────────

function isAllowedOrigin(request) {
  const origin = request.headers.get("Origin") || "";
  const referer = request.headers.get("Referer") || "";

  return ALLOWED_ORIGINS.some(
    (allowed) => origin.startsWith(allowed) || referer.startsWith(allowed)
  );
}

// ─── CORS HEADERS ─────────────────────────────────────────────────────────────

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.find((o) => origin?.startsWith(o));
  return {
    "Access-Control-Allow-Origin": allowed || ALLOWED_ORIGINS[0],
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

// ─── MAIN HANDLER ─────────────────────────────────────────────────────────────

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";

    // Handle preflight CORS
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    // ── Route: GET /img/{token} ──────────────────────────────────────────────
    const match = url.pathname.match(/^\/img\/([A-Za-z0-9\-_]+)$/);
    if (!match) {
      return new Response(JSON.stringify({ error: "Not Found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Hotlink protection
    if (!isAllowedOrigin(request)) {
      return new Response(JSON.stringify({ error: "Forbidden" }), {
        status: 403,
        headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
      });
    }

    // Dekripsi token
    const payload = await decryptImageToken(match[1]);
    if (!payload || !payload.p || !payload.s) {
      return new Response(JSON.stringify({ error: "Invalid token" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
      });
    }

    // Cek expiry (jika aktif)
    if (payload.exp && Date.now() > payload.exp) {
      return new Response(JSON.stringify({ error: "Token expired" }), {
        status: 410,
        headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
      });
    }

    // Tentukan base URL berdasarkan source
    const baseUrl = CDN_SOURCES[payload.s] || CDN_SOURCES.pages;
    const imageUrl = `${baseUrl}${payload.p}`;

    // Fetch gambar dari GitHub
    let imageResponse;
    try {
      imageResponse = await fetch(imageUrl, {
        headers: {
          // Sembunyikan bahwa request datang dari Worker
          "User-Agent": "Mozilla/5.0 (compatible; CDN-Proxy/1.0)",
        },
        cf: {
          // Cache di Cloudflare edge selama 1 hari
          cacheTtl: 86400,
          cacheEverything: true,
        },
      });
    } catch {
      return new Response(JSON.stringify({ error: "Failed to fetch image" }), {
        status: 502,
        headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
      });
    }

    if (!imageResponse.ok) {
      return new Response(JSON.stringify({ error: "Image not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
      });
    }

    const contentType = imageResponse.headers.get("Content-Type") || "image/webp";

    return new Response(imageResponse.body, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
        "X-Content-Type-Options": "nosniff",
        ...corsHeaders(origin),
      },
    });
  },
};
