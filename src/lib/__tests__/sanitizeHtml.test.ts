import { describe, expect, it } from "vitest";
import { sanitizeCmsHtml } from "@/lib/sanitizeHtml";

describe("sanitizeCmsHtml", () => {
  it("removes scripts and unsafe URL schemes while preserving safe content", () => {
    const result = sanitizeCmsHtml(
      '<p>Aman</p><script>alert(1)</script><a href="javascript:alert(1)">Klik</a><strong>tebal</strong>',
    );

    expect(result).toContain("<p>Aman</p>");
    expect(result).toContain("<strong>tebal</strong>");
    expect(result).not.toContain("<script>");
    expect(result).not.toContain("javascript:");
  });
});
