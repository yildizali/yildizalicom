# CLAUDE.md

Notes for future Claude (or any LLM/agent) working on this repo. The README is the human-facing doc — read that first for context. This file captures conventions, deliberate non-decisions, and traps that aren't obvious from the code.

## What this repo is

Personal portfolio site for Ali Yildiz, deployed at https://www.yildizali.com on GitHub Pages with a custom domain. Single-page React + Vite + TS + Tailwind app. Repo: https://github.com/yildizali/yildizalicom.

Site is intentionally simple and content-driven. There is no backend, no auth, no user input handling. Everything visible on the page is rendered from data in [src/data/resume.ts](src/data/resume.ts).

## Things to NOT suggest re-adding

Earlier versions of this repo had Lovable scaffolding that pulled in libraries the site never actually used. They were removed deliberately — bundle dropped from ~402 KB to ~214 KB. **Do not propose adding these back unless a real feature requires them:**

- **`react-router-dom`** — single page, no client-side nav. `App.tsx` does `path === "/" ? <Index /> : <NotFound />`. The 404 page is reachable because `deploy.yml` does `cp dist/index.html dist/404.html`, GitHub Pages serves `index.html` for any unknown path, and the path check in `App.tsx` then renders `<NotFound />`.
- **`@tanstack/react-query`** — no data fetching at runtime; resume content is bundled.
- **`sonner`, `@radix-ui/react-toast`, toasters in general** — no toast surfaces.
- **`@radix-ui/react-tooltip`, `@radix-ui/react-dialog`, etc.** — no UI surfaces use them.
- **`class-variance-authority`** — only consumer was the deleted `toast.tsx`.

If a real feature pulls one of these back, that's fine — but the diff should be focused on the feature, not "scaffolding for later."

## Brand icons

`lucide-react` v1.x dropped brand icons (Linkedin, Github, etc.). They're implemented as inline SVG components in [src/components/icons/](src/components/icons/) using the same `forwardRef<SVGSVGElement, ...>` pattern. If a new brand icon is needed, follow the same pattern — don't add a separate icon-pack dependency.

## Resume content is data-driven

[src/data/resume.ts](src/data/resume.ts) is the single source of truth for everything content-shaped: experiences, certifications, skills, education, languages, the about/summary/biography text. Components import from it.

Specifically:

- **`yearsOfExperience`** is computed from the earliest experience start year. Don't hardcode a number anywhere — `<ExperienceSection>` and `<MetricsSection>` both render `{yearsOfExperience}+`.
- **`certifications.length`** drives the cert count tile in `<MetricsSection>`. Add a cert by appending to the array; the metric self-updates.
- The experiences array is **reverse chronological** (newest first). `experiences[experiences.length - 1]` is the earliest job.

When the user asks to update content (e.g. "I have a new certification"), update [resume.ts](src/data/resume.ts), not the component JSX.

## Tailwind v4 with legacy config bridge

Tailwind v4 changed PostCSS handling. The setup here:

- `postcss.config.js` uses `@tailwindcss/postcss`, not the legacy `tailwindcss` plugin.
- [src/index.css](src/index.css) imports Tailwind via `@import "tailwindcss"` and bridges to the JS config with `@config "../tailwind.config.ts"`.
- [tailwind.config.ts](tailwind.config.ts) imports `tailwindcss-animate` as ESM (no `require()`), and has no `baseUrl`-style options.

If a build error mentions `tailwindcss directly as a PostCSS plugin`, the `@tailwindcss/postcss` package is missing or the import order is wrong.

## CI / quality gates

[.github/workflows/ci.yml](.github/workflows/ci.yml) runs on every PR to main:

1. `npm ci`
2. `npm run lint` (ESLint)
3. `npx tsc --noEmit` (separate from build to surface type errors clearly)
4. `npm run build` (Vite production build)

A second job, `notify-on-failure`, runs only `if: failure()` of `validate`. It opens (or comments on) a GitHub issue when CI breaks. Don't propose disabling it; the user relies on issue-subscription emails for breakage notifications.

`main` is branch-protected:
- `validate` is a required check.
- "Require branches up to date before merging" is on.
- PR is required, with **0 required approvals** (so Renovate's bot can still automerge).

## Renovate / dependency policy

[renovate.json](renovate.json) is configured to:
- Bundle ALL updates (major + minor + patch) into ONE PR per week.
- Run weekly (Mondays before 6 AM, Europe/Amsterdam).
- `automerge: true` + `platformAutomerge: true` → CI green ⇒ auto squash-merge.
- `dependencyDashboard: false` (was creating noisy emails).

A failing Renovate PR will sit open until investigated. The user will see it via the auto-issue from `notify-on-failure`. Don't manually close Renovate PRs without checking why CI failed.

## Deploy

[.github/workflows/deploy.yml](.github/workflows/deploy.yml) runs on every push to main. Builds, copies `index.html` → `404.html` for the SPA fallback, uploads `dist/` to GitHub Pages.

Custom domain in [public/CNAME](public/CNAME).

Public assets (favicon, og-image, sitemap, robots) live in [public/](public/) so URLs are stable. **Don't import images that need stable URLs from `src/`** — Vite hashes them.

## App.tsx is intentionally tiny

```tsx
const App = () => {
  const path = window.location.pathname;
  return path === "/" ? <Index /> : <NotFound />;
};
```

No `<BrowserRouter>`, no `<QueryClientProvider>`, no `<TooltipProvider>`. If you find yourself wanting to wrap things, reconsider whether the feature you're adding actually needs the wrapper. If it does, fine — but flag it explicitly.

## Working style for this repo

- The user reviews and merges PRs himself. Do not propose `gh pr merge` unless explicitly asked.
- Prefer small, single-concern PRs. When making multi-step changes (especially anything that could break CI), split into separate PRs so failures localize.
- The user verifies claims. Don't speculate — read the code, check the deployed site, run `gh` queries. If something can't be verified, say so.
- After CI breaks, the simplest path is usually to fix the smallest thing first (one commit per attempt) so the issue auto-comments stay readable.

## Useful one-liners

```bash
# Find unused exports in src/
grep -rln "useFoo\b" src/  # check if a hook/function is actually consumed

# Check if a npm dep is actually imported
grep -rn "from \"<pkg-name>\"" src/

# Inspect bundle size after build
curl -sI https://www.yildizali.com/assets/index-*.js | grep -i content-length

# Verify deployed asset URL works
curl -sI https://www.yildizali.com/og-image.jpeg | head -1
```
