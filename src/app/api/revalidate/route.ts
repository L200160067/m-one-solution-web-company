import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    let body;
    try {
        body = await request.json();
    } catch (e) {
        return NextResponse.json({ message: 'Invalid JSON payload' }, { status: 400 });
    }

    const { secret, type, payload } = body;

    // Pastikan secret key cocok (Opsional namun disarankan untuk prod)
    if (secret !== process.env.REVALIDATION_SECRET && process.env.NODE_ENV !== 'development') {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    }

    // `type` bisa 'tag' (contoh: 'posts') atau 'path' (contoh: '/blog')
    // `payload` adalah nilai tag/path-nya
    
    if (type === 'tag' && payload) {
      // Use standard fallback for older or bugged Next.js 16 Turbopack instances
      revalidateTag(payload);
      
      // Auto-fallback: If tag is 'posts', also clear the /blog path 
      // just in case tag caching is buggy in Dev Mode.
      if (payload === 'posts') {
        revalidatePath('/blog');
        revalidatePath('/');
      } else if (payload === 'projects' || payload === 'services' || payload === 'partners' || payload === 'team' || payload === 'alumni') {
        revalidatePath('/');
      }
    } else if (type === 'path' && payload) {
      revalidatePath(payload);
    } else {
       return NextResponse.json({ message: 'Missing type or payload' }, { status: 400 });
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating', error: err }, { status: 500 });
  }
}
