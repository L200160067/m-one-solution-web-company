import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest } from 'next/server';

/**
 * POST /api/revalidate?secret=<REVALIDATE_SECRET>
 * Or with JSON body: { "secret": "...", "tags": ["posts"] }
 *
 * Call this endpoint from Laravel (Filament observer / event) after saving
 * any content, so Next.js ISR pages are refreshed immediately.
 */
export async function POST(req: NextRequest) {
    try {
        let secret = req.nextUrl.searchParams.get('secret');
        let tags: string[] = [];

        // Try parsing JSON body if it exists
        try {
            const body = await req.json();
            if (body.secret) secret = body.secret;
            if (body.tags && Array.isArray(body.tags)) tags = body.tags;
        } catch (e) {
            // Ignore error if body is not JSON or empty
        }

        if (secret !== process.env.REVALIDATE_SECRET) {
            return Response.json({ error: 'Unauthorized' }, { status: 401 });
        }

        if (tags.length > 0) {
            // New approach: Revalidate by tags (Cache Versioning Payload)
            tags.forEach((tag) => revalidateTag(tag));
            return Response.json({ revalidated: true, method: 'tags', tags, timestamp: new Date().toISOString() });
        } else {
            // Legacy approach: Revalidate critical paths
            revalidatePath('/');
            revalidatePath('/blog');
            revalidatePath('/services');
            revalidatePath('/portfolio');
            return Response.json({ revalidated: true, method: 'paths', timestamp: new Date().toISOString() });
        }
    } catch (e: any) {
        return Response.json({ error: 'Server error', message: e.message }, { status: 500 });
    }
}
