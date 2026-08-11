---
id: TOAST-003
app: toasty
title: Increase flashcard size and toast font size
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

In `src/components/ToastCard.tsx` the card currently caps at `max-h-[min(15rem,100%)]`
(15rem = 240px) and the toast text is `text-xl`. Both read too small for the hero
moment of the app. Increase the card's footprint and the toast text size
noticeably — e.g. card cap around `18rem`-`20rem` and text around `text-2xl`, but
use your judgment for what reads well together; the two must scale together so
the text still comfortably fits inside the card's padding at typical toast
lengths (check against a few of the 10 entries in `src/lib/toasts.ts`, including
the longest one).

This card lives inside a flex slot sized by its parent (see `src/app/page.tsx`) —
do not break the "no vertical scroll, everything fits on screen" requirement from
the original spec (ledger/TOAST-001.md) at 375x667 and 390x844. The card's
max-height is already expressed as `min(<value>, 100%)` so it can't force the
page to scroll; keep that pattern, just raise the fixed side of the min().

## Acceptance criteria

1. The flashcard is visibly larger than before (both dimensions, not just
   height).
2. The toast text is visibly larger than the current `text-xl`.
3. At 375x667 and 390x844, after clicking Generate, there is still no vertical
   scroll and nothing clips or overflows the card's rounded border for any of the
   10 toasts in the corpus.
4. No other structural changes to `ToastCard.tsx`.
5. `lint`, `test`, `typecheck` all pass.
