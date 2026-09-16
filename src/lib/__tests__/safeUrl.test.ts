import { describe, expect, it } from "vitest";
import { sanitizeExternalUrl } from "@/lib/safeUrl";

describe("sanitizeExternalUrl", () => {
  it("accepts http and https URLs", () => {
    expect(sanitizeExternalUrl("https://example.com/path")).toBe(
      "https://example.com/path",
    );
    expect(sanitizeExternalUrl("http://example.com")).toBe(
      "http://example.com",
    );
  });

  it("rejects unsafe or malformed URLs", () => {
    expect(sanitizeExternalUrl("javascript:alert(1)")).toBe("#");
    expect(sanitizeExternalUrl("not-a-url")).toBe("#");
    expect(sanitizeExternalUrl(undefined)).toBe("#");
  });
});
