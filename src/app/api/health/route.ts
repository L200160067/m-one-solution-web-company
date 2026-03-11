import { NextResponse } from 'next/server';

export async function GET() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  let apiStatus = 'unknown';
  let apiLatency = 0;

  if (apiUrl) {
    try {
      const start = Date.now();
      // Melakukan simple ping/fetch ke backend (misal ke endpoint settings atau root)
      // Kita gunakan timeout singkat agar tidak memblokir lama jika backend mati
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      
      const res = await fetch(`${apiUrl}/settings`, { 
        method: 'GET',
        signal: controller.signal,
        // Hindari caching Next.js untuk health check
        cache: 'no-store'
      });
      clearTimeout(timeoutId);

      apiLatency = Date.now() - start;
      apiStatus = res.ok ? 'connected' : `error_${res.status}`;
    } catch (e) {
      apiStatus = 'unreachable';
    }
  } else {
    apiStatus = 'not_configured';
  }

  const isHealthy = apiStatus === 'connected' || apiStatus === 'unknown';

  return NextResponse.json(
    {
      status: isHealthy ? 'ok' : 'degraded',
      uptime: process.uptime(),
      timestamp: Date.now(),
      environment: process.env.NODE_ENV,
      services: {
        backendApi: {
          url: apiUrl,
          status: apiStatus,
          latency_ms: apiLatency
        }
      }
    },
    { status: isHealthy ? 200 : 503 }
  );
}
