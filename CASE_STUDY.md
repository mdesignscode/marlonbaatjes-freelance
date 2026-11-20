# Case study: a portfolio for clients

**The problem.** Marlon's existing portfolio is written for employers. People
who might hire him for a job need different answers: what he builds, whether
he can be trusted with it, and how to start.

**What was built.** A one page site and three case study pages. A strip of
his real project screens, a brief that writes itself into an email, his
projects labelled honestly as his own, how a job runs, questions and answers,
and a contact card. Client work has its own section that appears once the
first client project is added to one data file.

**Stack.** SvelteKit 3, Svelte 5, TypeScript, Tailwind CSS 4, bun. Images are
resized at build time with `@sveltejs/enhanced-img`. Every page is prerendered
and served by Vercel. No database, no server code, no cookies.

**Measured, 2026-11-16, on a local production build.**

- 4 unit tests and 9 browser tests pass.
- The taste skill's inspector reports 0 failures at 1440, 768 and 390 pixels.
- No sideways scroll at 375 pixels on any page (browser test).

**Lighthouse mobile, 2026-11-16, on https://marlonbaatjes-freelance.vercel.app.**
Three runs from a laptop that was busy with other work:

| Run | Performance | Accessibility | Best practices | SEO |
| --- | ----------- | ------------- | -------------- | --- |
| 1   | 46          | 96            | 100            | 100 |
| 2   | 82          | 100           | 100            | 100 |
| 3   | 96          | 100           | 100            | 100 |

Run 1 was before a contrast fix, which took accessibility to 100. Layout
shift was 0 in every run. The performance score moved with how busy the
laptop was (blocking time ranged from 210 ms to 7.5 s on the same page), so it
is not settled. Measure it again on a quiet machine before quoting a number.

**Time taken.** One working session on 2026-11-16, built by Claude Code with
Marlon directing.

## Graphic redesign, 2026-11-20

The homepage now presents the offer and brief link next to two overlapping
screenshots of Marlon’s own apps. The work gallery uses uncropped cover
screens and identifies each project’s authorship. The project brief sits in
its own cobalt section, with a preview beside the questions on wide screens
and after the questions on phones. The case studies share the new typography,
color palette, and screenshot treatment. The favicon and share image use the
same identity.

Verified in one working session. The production build, type check, lint,
4 unit tests, and 9 browser tests passed. The homepage was also inspected in
Chromium at 375 and 1280 pixels, with all images loaded and no horizontal
overflow, page errors, or failed responses. The new layout was prototyped in
code and reviewed in Chromium.

Mobile Lighthouse on the local production build scored 92 performance,
100 accessibility, 100 best practices, and 100 SEO using DevTools throttling.
Two earlier simulated-throttling runs scored 84 and 68 for performance.
These are local measurements. Recheck performance on the public deployment
before quoting it as a production score.
