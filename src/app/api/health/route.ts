import { NextResponse } from 'next/server';

/**
 * Health Check – Static Mode
 * Data aplikasi kini bersumber dari data statis lokal (mockData.ts),
 * sehingga tidak ada backend API yang perlu di-ping.
 */
export async function GET() {
  return NextResponse.json(
    {
      status: 'ok',
      mode: 'static',
      uptime: process.uptime(),
      timestamp: Date.now(),
      environment: process.env.NODE_ENV,
      services: {
        dataSource: {
          type: 'local_static',
          status: 'ok',
        },
      },
    },
    { status: 200 }
  );
}
