# marlonbaatjes-freelance

Marlon Baatjes's portfolio for clients: what he builds, his projects as proof,
and a brief that turns into an email. It is a real site for a real person, not
a concept demo. The job-application portfolio is a separate site at
https://marlonbaatjes.vercel.app.

Live at https://marlonbaatjes-freelance.vercel.app. The `marlonbaatjes.is-a.dev`
domain moves to it once Marlon detaches it from the old Vercel project.

## Run it

Needs [bun](https://bun.sh) 1.3 or newer.

```bash
bun install
bun run dev        # http://localhost:5173
```

## Check it

```bash
bunx playwright install chromium   # once
bun run check && bun run lint && bun run test && bun run build
```

`bun run test` runs the unit tests, then builds the site and runs the browser
tests in `e2e/` against the build.

## Change the content

- Words on the home page: `src/lib/content/site.ts`.
- Projects: `src/lib/content/projects.ts`. Screenshots go in
  `src/lib/assets/work/<slug>/` as `1.png`, `2.png` and so on; the first is
  the cover. Write one line of alt text per screenshot in `shots`.
- Every project has a `kind`: `own`, `concept` or `client`. The label is shown
  on the site. Use `client` only for paid work the client has agreed to show.
  The "Work for clients" section appears by itself once one exists.

## Deploy

Vercel, with `@sveltejs/adapter-vercel`. Every page is prerendered.
`vercel.json` sends `/resume` and `/projects/...` to the job-application site,
because links to those were given out before this site took the domain.

There are no environment variables.

## Design

`DIRECTION.md` records the visual direction. `DESIGN.md` describes how it is
applied, and the live tokens are in `src/routes/layout.css`. Desktop and
mobile captures are in `shots/`.
