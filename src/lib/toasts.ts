/**
 * Placeholder toast corpus. Short, out-loud, glasses-are-already-up toasts.
 * Deterministic content selection — no model call.
 */
export const TOASTS = [
  "To the group chat that actually got us here tonight. Miracles do happen.",
  "May every story we tell get a little better with age, and a lot less accurate.",
  "Here's to the second drink. Smarter than the first, funnier than the third.",
  "To bad ideas with good people. That's the whole trick.",
  "To whoever grabs the check first. We see you, we love you, we owe you.",
  "To the friends who actually showed up. The rest can read about it tomorrow.",
  "May your ex be thinking about tonight, and not invited to it.",
  "To tonight: no plans, no photos, no witnesses.",
  "To 'just one drink' — the most beautiful lie we tell each other.",
  "To us: too loud, too much, and somehow still invited back.",
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
