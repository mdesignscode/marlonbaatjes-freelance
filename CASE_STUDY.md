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

Lighthouse scores are recorded here after the first deploy.

**Time taken.** One working session on 2026-11-16, built by Claude Code with
Marlon directing.
