/**
 * Placeholder toast corpus. Short, out-loud, glasses-are-already-up toasts.
 * Deterministic content selection — no model call.
 */
export const TOASTS = [
  "To everyone who answered the group chat. And to the one who didn't — we're talking about you right now.",
  "May our stories get better every time we tell them, and may nobody at this table fact-check us.",
  "Here's to the second drink. Smarter than the first, funnier than the third.",
  "To bad ideas with good people. That's the whole trick.",
  "To whoever's paying tonight. We love you. We'll get the next one.",
  "To the friends who show up. Not the ones who would have — the ones who did.",
  "May your ex be doing fine. Just fine. Not great.",
  "To tonight: no plans, no photos, no witnesses.",
  "To 'just one drink' — the most beautiful lie we tell each other.",
  "May we always be this loud, this hungry, and this hard to get rid of.",
] as const;

export type Toast = (typeof TOASTS)[number];

/**
 * Returns a random toast. Pass the toast currently on screen as `exclude` to
 * avoid showing the same one twice in a row.
 */
export function getRandomToast(exclude?: string): Toast {
  const pool: readonly Toast[] = TOASTS.filter((toast) => toast !== exclude);
  const candidates = pool.length > 0 ? pool : TOASTS;

  return candidates[Math.floor(Math.random() * candidates.length)];
}
