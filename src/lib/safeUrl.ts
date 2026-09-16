export function sanitizeExternalUrl(
  value: string | undefined,
  fallback = "#",
): string {
  if (!value) return fallback;

  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:"
      ? value
      : fallback;
  } catch {
    return fallback;
  }
}
