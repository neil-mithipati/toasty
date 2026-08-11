---
id: TOAST-001
app: toasty
title: Mobile-first toast generator (Candy Crush aesthetic)
state: done
tier: builder-deep
attempts: 0
branch: feature/toast-generator
files:
  - src/app/page.tsx
  - src/app/layout.tsx
  - src/app/globals.css
  - src/components/ToastCard.tsx
  - src/components/ActionBar.tsx
  - src/lib/toasts.ts
  - src/lib/__tests__/toasts.test.ts
blocked_reason: null
---

## Branch note (override)

This repo's default isolation is a worktree per task. The owner explicitly asked
for **branches, not worktrees** on this task. You are already on
`feature/toast-generator` in the main working directory — there is no worktree.
Work directly here, commit to this branch, never touch `main`. Ignore any
"worktree" phrasing in your own agent card; treat "the worktree" as "the current
directory on this branch."

## What this is

A single-page mobile-first web app. One friction point: you're out with friends,
about to cheers, and you want something better than "cheers" but you don't want to
write it. One button generates a short toast. That's the whole app.

Not a wedding-toast generator. Not a speech generator. Every generated toast is
1-3 sentences, meant to be said out loud in the two seconds before glasses touch.
Think: ordering a round, doing a shot, a quick "to us" moment. Funny, warm, a
little irreverent is fine. Never long, never formal, never saccharine.

## Layout (exact spec, do not deviate)

Single screen, **no vertical scroll, everything fits in the viewport** at mobile
sizes (test at 375x667 and 390x844 at minimum).

Initial state:
- Header at top reading "toasty".
- Below it, a primary button, full-width-ish, larger than the two secondary
  buttons, green, label "Generate".
- Directly below the primary button, two secondary buttons side by side,
  horizontally aligned, equal width, and together they span the same total width
  as the primary button above them (i.e. the pair lines up under the single
  button, like a 1-row-then-2-column stack).
  - Left secondary button: person-silhouette icon, label "person" underneath the
    icon, inside the button.
  - Right secondary button: an "add emoji" / emoji-with-plus icon (lucide has
    `SmilePlus` — use that or equivalent), label "tone" underneath the icon,
    inside the button.
  - Both secondary buttons are light grey.
  - Both are inert for now — no handler, no visual affordance that they'll ever
    do something yet (don't disable them or grey them out further; they're just
    not wired up).

On clicking "Generate":
- A flashcard appears centered on screen, showing one generated toast (1-3
  sentences), styled like a cartoon card — rounded corners, thick border or
  outline, drop shadow, not a plain rectangle.
- All three buttons animate/slide down to the bottom of the screen (they don't
  disappear, they relocate below the card).
- Every subsequent click of "Generate" swaps the text on the card for a new toast
  (the card stays in place at this point; only its content changes). Avoid
  showing the same toast twice in a row if the corpus has more than one entry.
- Use framer-motion for the slide/transition. Keep it snappy (think 250-400ms),
  not sluggish.

Nothing about "person" or "tone" needs to function beyond being present and
correctly styled inert buttons.

## Aesthetic (exact spec — mimic Candy Crush Saga's mobile UI)

Research confirms Candy Crush's identity: bright, saturated, candy-colored
palette (purples, pinks, teals, oranges, yellows) with a lot of contrast between
elements; chunky, glossy, rounded "3D" buttons — thick colored borders, an inner
highlight/gradient suggesting a glossy candy surface, and a drop shadow that
reads as a raised, tappable button rather than a flat one; bold, rounded,
slightly playful display typography (a rounded sans, heavier weight, not a
generic system font) for the "toasty" header; generous corner radii everywhere
(cards, buttons — nothing sharp-cornered); a playful, slightly bouncy motion feel
rather than linear/mechanical easing.

Concretely:
- Background: a bright, cheerful gradient (not flat white/grey) — e.g. a
  purple-to-pink or sky-to-teal gradient. Establish this in `globals.css` or via
  Tailwind utility classes on the root container.
- Header "toasty": bold, rounded display font (system rounded stack is fine if no
  webfont is pulled in — e.g. ui-rounded / a Google Font like Baloo 2 or Fredoka
  loaded via `next/font` — heavier weight, maybe a subtle drop shadow or colored
  outline treatment on the text itself for a candy-logo feel).
- Primary "Generate" button: saturated green, glossy/gradient fill, thick darker
  green border or bottom-heavy shadow to read as a chunky 3D button, rounded
  corners (pill or large radius), scale/press feedback on tap.
  press feedback on tap.
- Secondary buttons: light grey, same chunky rounded 3D treatment (just muted
  colors instead of green), icon + label stacked vertically inside.
- Flashcard: rounded rectangle, thick white or candy-colored border, drop shadow,
  centered, reads as a cartoon card/sign rather than a plain modal.
- Use framer-motion easing that overshoots slightly (spring or backOut-style) for
  button presses and the slide-to-bottom transition — avoid linear/ease-in-out,
  it should feel bouncy.
- lucide-react for icons (already a dependency).

Use your own taste for exact hex values and font choice within this brief — the
brief constrains the direction, not the pixels. Do not reach for a generic flat
Tailwind-default look (indigo-600 on white, thin borders, no shadow); that is
explicitly the aesthetic to avoid here.

## Toast corpus (placeholder — owner will replace)

Create `src/lib/toasts.ts` exporting a typed array of exactly 10 short toasts
(1-3 sentences each, casual cheers/shot-glass tone, not wedding-speech tone) plus
a `getRandomToast(exclude?: string)` helper that returns one toast, optionally
avoiding immediate repeats. Write all 10 yourself — be genuinely funny and
memorable, not generic ("Cheers to good times" is the floor, go well above it).
Example tone/length to calibrate against (write your own, don't reuse this one
verbatim): "To the people who talk you out of bad decisions... and the ones who
talk you into the fun ones." This is deterministic content selection (random pick
from a fixed array) — no model call, no API route needed for this task.

Add a small test at `src/lib/__tests__/toasts.test.ts` covering: corpus has
exactly 10 entries, each is non-empty and reasonably short (e.g. under ~220
chars, roughly 1-3 sentences), and `getRandomToast` returns an entry from the
corpus.

## Acceptance criteria

1. `/` renders the "toasty" header, primary green "Generate" button, and the two
   light-grey secondary buttons ("person" with person-silhouette icon, "tone"
   with add-emoji icon) in the layout described above, on first load, with no
   flashcard visible.
2. At mobile viewport sizes (375x667 and 390x844), the whole initial layout fits
   without vertical scrolling.
3. Clicking "Generate" shows the flashcard with a toast from the corpus, centered,
   styled as a cartoon card, and slides all three buttons to the bottom, animated
   via framer-motion. No vertical scroll appears in this state either.
4. Clicking "Generate" again while the card is showing swaps the card's text to a
   different toast (no immediate repeat if corpus size > 1); the card does not
   re-mount/reposition, only its content changes.
5. Clicking "person" or "tone" does nothing (no console error, no navigation, no
   visible state change) — confirmed by inspection, not required to have a test.
6. The visual style reads as bright/saturated/glossy/rounded/cartoon, not as
   default Tailwind flat-neutral — reviewed by inspection of the rendered page
   against the aesthetic spec above.
7. `src/lib/toasts.ts` has exactly 10 handwritten, on-tone, non-generic toasts,
   each 1-3 sentences.
8. All three required gates (`lint`, `test`, `typecheck`) pass.

## Scope

Touch only the files listed in frontmatter. If you find you need a new file not
listed there (e.g. a font loader helper), that's fine as long as it's clearly
part of this feature (e.g. a new component file for the flashcard/action bar) —
but do not touch Supabase setup, routing outside `/`, or anything unrelated.
