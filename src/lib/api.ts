const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (typeof API_URL !== 'string' || !API_URL.trim()) {
  // NEXT_PUBLIC_* is inlined at BUILD time. On Netlify: set env vars BEFORE build, then redeploy.
  const msg = 'NEXT_PUBLIC_API_URL is not set. Set it in your deployment env (e.g. Netlify) and trigger a new build.';
  if (process.env.NODE_ENV === 'development') {
    console.error(`[api] ${msg}`);
  }
  throw new Error(msg);
}

/**
 * Shared fetch utility for all Laravel API calls.
 * Uses ISR with 1-hour revalidation by default.
 * Throw an error on non-2xx responses.
 */
export async function apiFetch<T>(
    endpoint: string,
    options?: RequestInit & { revalidate?: number | false, tags?: string[] }
): Promise<T> {
    const { revalidate = 3600, tags = [], ...fetchOptions } = options ?? {};

    const url = `${API_URL!.trim().replace(/\/$/, '')}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
    const res = await fetch(url, {
        next: { 
           revalidate, 
           tags: [...tags] // Ensure it's a new array reference
        },
        ...fetchOptions,
    });
    
    console.log(`[Fetch] ${endpoint} | Cache Status: ${res.headers.get('x-nextjs-cache') || 'MISS'} | Tags: ${tags.join(',')}`);

    if (!res.ok) {
        throw new Error(`API Error ${res.status}: ${url}`);
    }

    const data = await res.json();

    // API may return 200 but { success: false, message: "..." } on errors (e.g. DB errors)
    if (data && typeof data === 'object' && 'success' in data && data.success === false) {
        throw new Error((data as { message?: string }).message || 'API returned success: false');
    }

    return data;
}
