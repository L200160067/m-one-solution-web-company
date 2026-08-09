"use client";

import { useState, useEffect } from "react";

/**
 * Hook untuk satu URL GitHub → CDN.
 * Gunakan hanya di Client Component.
 */
export function useCdnUrl(githubUrl: string): string | null {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!githubUrl) return;
    let cancelled = false;

    convertGithubUrl(githubUrl).then((resolved) => {
      if (!cancelled) setUrl(resolved);
    });

    return () => {
      cancelled = true;
    };
  }, [githubUrl]);

  return url;
}

/**
 * Hook untuk banyak URL sekaligus.
 */
export function useCdnUrls(githubUrls: string[]): (string | null)[] {
  const [urls, setUrls] = useState<(string | null)[]>(githubUrls.map(() => null));

  useEffect(() => {
    if (!githubUrls.length) return;
    let cancelled = false;

    Promise.all(githubUrls.map(convertGithubUrl)).then((resolved) => {
      if (!cancelled) setUrls(resolved);
    });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(githubUrls)]);

  return urls;
}

export async function convertGithubUrl(githubUrl: string): Promise<string> {
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
