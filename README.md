This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Feature: toast generator

**Problem.** You're out with friends, about to cheers, and "cheers" is the best
you've got. You don't want to write something better on the spot, and you don't
want a wedding-speech generator either — just a short line for the two seconds
before glasses touch.

**Solution.** Open the app: a "toasty" header, a large green "Generate" button,
and two inert grey buttons ("person", "tone") underneath it. Tap Generate and a
cartoon flashcard slides into the center of the screen with a 1-3 sentence toast,
while the three buttons relocate to the bottom of the screen. Tap Generate again
and the card's text swaps to a new toast (no immediate repeat) — the card itself
stays put, only the words change. "person" and "tone" are present and styled but
not wired to anything yet.

**Tradeoffs.**

| Decision | Considered | Chosen & why |
|---|---|---|
| Toast selection | A model call per tap | A fixed, handwritten 10-entry corpus with deterministic random pick. The content is structured and finite — paying for a model to pick randomly from ten fixed strings is arithmetic, not intelligence. |
| Card sizing | Fixed height (`h-60`) | `max-h-[min(20rem,100%)]`. Review on TOAST-001 found the fixed height overflowed its flex slot on short/landscape viewports (~600px tall) even though 375x667 and 390x844 looked fine; fixed pre-merge in commit `03b2e74`. |
| Card tilt | A slight rotation for cartoon flair, per the original aesthetic spec | Removed (TOAST-004). Leveled reads cleaner than tilted once seen next to the rest of the polish pass. |
| Card and text size | Original spec (`15rem` cap, `text-xl`) | Bumped to `20rem` / `text-2xl` (TOAST-003) — the original read too small for the app's one hero moment. |
| Card shadow | A fixed-hue purple shadow | A neutral, dark, low-chroma shadow (TOAST-005). The purple shadow only read as depth against the purple top of the background gradient; against the coral/pink bottom it read as a mismatched colored halo. A neutral shadow reads as elevation regardless of what's behind it. |

**Learnings.**
- A fixed cross-axis height (`h-60`) inside a centered flex slot does not shrink
  with its container — only a `min(<value>, 100%)`-capped max-height does.
  Default to that pattern for anything sitting in a flex slot without a
  guaranteed minimum height.
- A drop shadow tuned against one color reads correctly only against that color.
  Against a multi-hue background (a gradient spanning purple to coral here), use
  a neutral, low-chroma, well-blurred shadow instead of a fixed saturated hue.
