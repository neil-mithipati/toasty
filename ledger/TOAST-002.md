---
id: TOAST-002
app: toasty
title: Add spacing between primary and secondary buttons
state: done
tier: builder-light
attempts: 0
branch: feature/toast-generator
files:
  - src/components/ActionBar.tsx
blocked_reason: null
---

## Branch note (override)

Plain git branch `feature/toast-generator`, not a worktree — already checked out
in the working directory. Commit here, never touch `main`.

## What

In `src/components/ActionBar.tsx`, the primary "Generate" button sits directly
against the row of two secondary buttons below it with no visible gap. Add
breathing room between them (a `gap`/margin in the 12-16px range is a reasonable
target — use your judgment to match the existing spacing scale already used
elsewhere in the component, e.g. the `gap-3`/`gap-4` used between the two
secondary buttons themselves).

## Acceptance criteria

1. There is a visible gap between the bottom of the "Generate" button and the top
   of the "person"/"tone" button row — comparable in scale to the gap already
   between "person" and "tone".
2. No other spacing, sizing, or layout in `ActionBar.tsx` changes.
3. `lint`, `test`, `typecheck` all pass.
