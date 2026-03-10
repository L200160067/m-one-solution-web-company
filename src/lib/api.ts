const API_URL = process.env.NEXT_PUBLIC_API_URL!;

/**
 * Shared fetch utility for all Laravel API calls.
 * Uses ISR with 1-hour revalidation by default.
 * Throw an error on non-2xx responses.
 */
export async function apiFetch<T>(
    endpoint: string,
    options?: RequestInit & { revalidate?: number | false }
): Promise<T> {
    const { revalidate = 3600, ...fetchOptions } = options ?? {};

    const res = await fetch(`${API_URL}${endpoint}`, {
        next: { revalidate },
        ...fetchOptions,
    });

    if (!res.ok) {
        throw new Error(`API Error ${res.status}: ${API_URL}${endpoint}`);
    }

    return res.json();
}
