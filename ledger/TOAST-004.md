---
id: TOAST-004
app: toasty
title: Remove flashcard tilt, align it horizontally
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

`ToastCard.tsx` currently rotates the card (`initial={{ rotate: -5 }}`,
`animate={{ rotate: -1.5 }}`) so it sits at a slight tilt. Remove the tilt: the
card should be level/horizontal, both on entrance and at rest. Keep the rest of
the entrance animation (opacity, scale, y) as-is — only the rotation goes.

## Acceptance criteria

1. The flashcard is horizontally level (no rotation) both immediately after
   appearing and at rest.
2. The opacity/scale/y entrance animation still plays.
3. No other changes to `ToastCard.tsx`.
4. `lint`, `test`, `typecheck` all pass.
