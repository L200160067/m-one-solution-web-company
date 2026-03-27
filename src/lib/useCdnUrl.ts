"use client";

/**
 * lib/useCdnUrl.ts
 * React hook untuk konversi URL GitHub → CDN terenkripsi di Client Component.
 *
 * @example
 * import { useCdnUrl } from "@/lib/useCdnUrl";
 *
 * export function AboutImage() {
 *   const url = useCdnUrl(
 *     "https://l200160067.github.io/mone-assets/images/branding/about.webp"
 *   );
 *   if (!url) return <div className="animate-pulse bg-gray-200 h-64 w-full" />;
 *   return <img src={url} alt="About M-One" />;
 * }
 */

import { useState, useEffect } from "react";
import { convertGithubUrl } from "./cdn";

/**
 * Hook untuk satu URL.
 */
export function useCdnUrl(githubUrl: string): string | null {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!githubUrl) return;
    let cancelled = false;

    convertGithubUrl(githubUrl).then((resolved) => {
      if (!cancelled) setUrl(resolved);
    });

    return () => { cancelled = true; };
  }, [githubUrl]);

  return url;
}

/**
 * Hook untuk banyak URL sekaligus.
 *
 * @example
 * const urls = useCdnUrls([
 *   "https://raw.githubusercontent.com/L200160067/mone-assets/main/images/partners/MI%20Muhammadiyah%20Bendungan.webp",
 *   "https://raw.githubusercontent.com/L200160067/mone-assets/main/images/partners/MI%20Muhammadiyah%20Karanglo.webp",
 * ]);
 */
export function useCdnUrls(githubUrls: string[]): (string | null)[] {
  const [urls, setUrls] = useState<(string | null)[]>(
    githubUrls.map(() => null)
  );

  useEffect(() => {
    if (!githubUrls.length) return;
    let cancelled = false;

    Promise.all(githubUrls.map(convertGithubUrl)).then((resolved) => {
      if (!cancelled) setUrls(resolved);
    });

    return () => { cancelled = true; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(githubUrls)]);

  return urls;
}
