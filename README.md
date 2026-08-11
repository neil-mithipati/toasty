# toasty

## Problem

Glasses are in the air and every eye just landed on you. "Cheers" is all
you've got. You don't want to freestyle a speech, and you don't want to sound
like a wedding toast generator crashed the party. You need one good line
before your beer goes flat.

## Solution

Open toasty and there's one thing to do: tap **Generate**.

<p align="center">
  <img src="docs/images/app-screenshot.png" alt="toasty app showing a generated toast on a cartoon flashcard" width="360">
</p>

A cartoon flashcard slides in with a short, punchy toast, ready to read out
loud. Not feeling it? Tap Generate again. The card holds its ground, only the
words change, and it never repeats a line you've already seen. **Person** and
**tone** are already live: tune who the toast is for and how it should land.

Nobody hand-typed this app line by line. toasty was built by a small fleet of
AI agents working in sequence: an orchestrator that breaks work into tasks,
builders of three sizes that pick them up, reviewers that check the work, and
a publisher that writes it all down.

<p align="center">
  <img src="docs/images/agent-pipeline.png" alt="diagram of the AI agent fleet: orchestrator, builders, reviewers, and publisher" width="480">
</p>

## How to use

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). toasty is mobile-first,
so shrink your window or grab your phone for the real feel. Tap **Generate**,
read the card out loud, tap again if it's not the one. Prost!
