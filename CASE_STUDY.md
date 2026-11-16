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
