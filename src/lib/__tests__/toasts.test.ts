import { describe, it, expect } from "vitest";
import { TOASTS, getRandomToast } from "@/lib/toasts";

describe("toast corpus", () => {
  it("has exactly 10 entries", () => {
    expect(TOASTS).toHaveLength(10);
  });

  it("has no duplicate entries", () => {
    expect(new Set(TOASTS).size).toBe(TOASTS.length);
  });

  it("is non-empty and short enough to say out loud", () => {
    for (const toast of TOASTS) {
      expect(toast.trim().length).toBeGreaterThan(0);
      expect(toast.length).toBeLessThanOrEqual(220);
    }
  });
});

describe("getRandomToast", () => {
  it("returns an entry from the corpus", () => {
    for (let i = 0; i < 50; i++) {
      expect(TOASTS).toContain(getRandomToast());
    }
  });

  it("never returns the excluded toast", () => {
    for (let i = 0; i < 50; i++) {
      const next = getRandomToast(TOASTS[0]);
      expect(next).not.toBe(TOASTS[0]);
      expect(TOASTS).toContain(next);
    }
  });

  it("still returns a toast when the exclusion is not in the corpus", () => {
    expect(TOASTS).toContain(getRandomToast("not a toast"));
  });
});
