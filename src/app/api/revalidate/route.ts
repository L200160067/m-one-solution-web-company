import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

/**
 * POST /api/revalidate?secret=<REVALIDATE_SECRET>
 *
 * Call this endpoint from Laravel (Filament observer / event) after saving
 * any content, so Next.js ISR pages are refreshed immediately.
 */
export async function POST(req: NextRequest) {
    const secret = req.nextUrl.searchParams.get('secret');

    if (secret !== process.env.REVALIDATE_SECRET) {
        return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    revalidatePath('/');
    revalidatePath('/blog');
    revalidatePath('/services');
    revalidatePath('/portfolio');

    return Response.json({ revalidated: true, timestamp: new Date().toISOString() });
}
