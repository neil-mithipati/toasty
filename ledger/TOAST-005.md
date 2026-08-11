---
id: TOAST-005
app: toasty
title: Fix flashcard drop shadow so it blends with the background
state: done
tier: builder-light
attempts: 0
branch: feature/toast-generator
files:
  - src/components/ToastCard.tsx
blocked_reason: null
---

## Branch note (override)

Plain git branch `feature/toast-generator`, not a worktree — already checked out
in the working directory. Commit here, never touch `main`.

## What

The page background (`src/app/globals.css`, on `body`) is a gradient that runs
from purple (`#7c3aed`) at the top through magenta/berry to coral/salmon
(`#fb7185`) at the bottom, plus soft yellow and cyan radial highlights. The
card's current shadow in `ToastCard.tsx` is fixed-hue purple —
`shadow-[0_10px_0_rgba(76,29,149,0.35),0_24px_44px_rgba(41,8,74,0.45)]`. Against
the purple top of the gradient that reads fine, but against the coral/pink lower
half it reads as a mismatched colored halo instead of a shadow — the owner's
complaint is that it doesn't "blend with the background."

A shadow generally reads as believable depth when it's a neutral, dark,
sufficiently-blurred value rather than one fixed saturated hue — that keeps it
looking like shadow regardless of what's behind it. Replace the current shadow
with something closer to that: a dark, low-chroma color (near-black or a very
dark desaturated grape, e.g. in the `rgba(20, 8, 35, 0.4-0.5)` range) with a
softer/larger blur so the edge feathers into the background rather than reading
as a hard-edged tinted bar. You can keep a two-layer shadow (a tight contact
shadow plus a larger ambient one) if that reads better than one layer — use your
judgment, the goal is "looks like the card is floating above this specific
gradient," verified by eye at a few scroll positions of the gradient (top,
middle, bottom of viewport).

## Acceptance criteria

1. The card's drop shadow reads as depth/elevation against both the purple top
   and coral/pink bottom regions of the background gradient — not as a
   mismatched colored halo.
2. The card still has a visible, cartoon-appropriate shadow (don't remove it
   entirely).
3. No other visual properties of the card (border, radius, background, size)
   change.
4. `lint`, `test`, `typecheck` all pass.
