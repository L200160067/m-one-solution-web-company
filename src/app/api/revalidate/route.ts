import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { z } from "zod";

const RevalidateRequestSchema = z.object({
  secret: z.string().min(1).optional(),
  type: z.enum(["tag", "path"]),
  payload: z.string().min(1).max(200),
});

const allowedTags = new Set([
  "posts",
  "projects",
  "services",
  "partners",
  "team",
  "alumni",
]);

function isAllowedPath(payload: string): boolean {
  return (
    payload === "/" ||
    ["/blog", "/services"].includes(payload) ||
    /^\/(blog|services)\/[a-z0-9-]+$/.test(payload)
  );
}

export async function POST(request: NextRequest) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch (e) {
      return NextResponse.json(
        { message: "Invalid JSON payload" },
        { status: 400 },
      );
    }

    const parsed = RevalidateRequestSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { message: "Invalid revalidation payload" },
        { status: 400 },
      );
    }

    const { secret, type, payload } = parsed.data;
    const configuredSecret = process.env.REVALIDATE_SECRET;

    if (!configuredSecret || secret !== configuredSecret) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    // `type` bisa 'tag' (contoh: 'posts') atau 'path' (contoh: '/blog')
    // `payload` adalah nilai tag/path-nya

    if (type === "tag" && allowedTags.has(payload)) {
      // Use standard fallback for older or bugged Next.js 16 Turbopack instances
      revalidateTag(payload, "default");

      // Auto-fallback: If tag is 'posts', also clear the /blog path
      // just in case tag caching is buggy in Dev Mode.
      if (payload === "posts") {
        revalidatePath("/blog");
        revalidatePath("/");
      } else if (
        payload === "projects" ||
        payload === "services" ||
        payload === "partners" ||
        payload === "team" ||
        payload === "alumni"
      ) {
        revalidatePath("/");
      }
    } else if (type === "path" && isAllowedPath(payload)) {
      revalidatePath(payload);
    } else {
      return NextResponse.json(
        { message: "Missing type or payload" },
        { status: 400 },
      );
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json(
      { message: "Error revalidating", error: err },
      { status: 500 },
    );
  }
}
