const API_URL = process.env.NEXT_PUBLIC_API_URL!;

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

    const res = await fetch(`${API_URL}${endpoint}`, {
        next: { 
           revalidate, 
           tags: [...tags] // Ensure it's a new array reference
        },
        ...fetchOptions,
    });
    
    console.log(`[Fetch] ${endpoint} | Cache Status: ${res.headers.get('x-nextjs-cache') || 'MISS'} | Tags: ${tags.join(',')}`);

    if (!res.ok) {
        throw new Error(`API Error ${res.status}: ${API_URL}${endpoint}`);
    }

    return res.json();
}
