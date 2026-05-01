# yildizali.com

Personal portfolio site for Ali Yildiz, MSc — Senior Data & Platform Engineer.

**Live site:** https://www.yildizali.com

Static SPA built with **React + Vite + TypeScript + Tailwind**, deployed to **GitHub Pages** with a fully automated CI/CD pipeline. The repo doubles as a small reference for how to ship a personal site without dragging in unnecessary infra.

---

## Why this repo might be interesting

Most personal sites either ship a bloated framework you'll never need, or a hand-rolled HTML page with no automation. This one tries to land in the middle: a real React app, but every dependency and pattern in the tree has to earn its place.

A snapshot of what's set up:

| Concern | What's here | Why |
| --- | --- | --- |
| **CI on every PR** | `lint` + `tsc --noEmit` + `build` | Catch regressions before merge — type-check separately so the lint step doesn't hide type errors. |
| **Auto-merge for deps** | Renovate bundled PRs, weekly schedule, automerge after green CI | One PR, one decision per week. No PR fatigue, no stale deps. |
| **Branch protection** | `main` requires the CI check, branches must be up to date | Renovate's `platformAutomerge` only fires when checks are required — otherwise CI status is advisory. |
| **Auto-issue on CI failure** | A second job opens (or comments on) a GitHub issue when `validate` fails | Email goes out via issue subscription instead of relying on per-workflow notification settings. Dedup is by PR number so retries don't spam. |
| **Data-driven UI** | Resume content lives in [`src/data/resume.ts`](src/data/resume.ts); sections render from it | "14+ years experience" and the certifications count are computed, not hand-edited. |
| **Real Open Graph + JSON-LD** | OG image at a stable URL, schema.org `Person` block | Linked-in / Twitter previews actually render; Google can resolve the entity. |
| **Performance hints** | Hero image gets `width`/`height`/`fetchPriority="high"`/`decoding="async"` | LCP candidate is loaded eagerly with reserved space. No CLS. |
| **No dead deps** | `npm audit` clean, no router/query/UI scaffolding the app doesn't use | If a dependency's only consumer is a wrapper that's never triggered, both go. |

---

## Tech stack

- **[Vite](https://vitejs.dev/)** + **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react-swc)** — fast dev server, SWC for transforms.
- **React 19** + **TypeScript 6** — UI and types.
- **[Tailwind CSS v4](https://tailwindcss.com/)** + **`@tailwindcss/postcss`** — styling. CSS-first config with `@config` pointing at the legacy `tailwind.config.ts`.
- **[lucide-react](https://lucide.dev/)** — icon set. Brand icons (LinkedIn, GitHub) are inline SVG components in [`src/components/icons/`](src/components/icons/) since lucide-react v1.x dropped them.
- **ESLint** + **typescript-eslint** + **eslint-plugin-react-hooks** + **eslint-plugin-react-refresh** — lint rules.

Dependencies that aren't here (intentionally):

- ❌ React Router — single-page site with no client-side navigation. `App.tsx` does `path === "/" ? <Index /> : <NotFound />`.
- ❌ TanStack Query — no data fetching at runtime; resume data is bundled.
- ❌ Toast / dialog / form / dropdown libraries — none of the page surfaces need them.

Removing those took the production JS bundle from ~402 KB to ~214 KB.

---

## Project structure

```
.
├── .github/workflows/
│   ├── ci.yml          # lint + type-check + build on PR; auto-issue on failure
│   └── deploy.yml      # build + publish to GitHub Pages on push to main
├── public/
│   ├── og-image.jpeg   # stable URL for OG / Twitter / Apple touch icon
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── favicon.ico
│   └── CNAME
├── src/
│   ├── components/
│   │   ├── icons/      # inline SVG icons (Github, Linkedin)
│   │   ├── HeroSection.tsx
│   │   ├── MetricsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   ├── resume.ts   # single source of truth for all content
│   │   └── types.ts
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx         # 7 lines
│   ├── main.tsx
│   └── index.css
├── index.html          # OG, Twitter, JSON-LD, GA4
├── renovate.json       # bundled + automerged updates
└── tsconfig.json
```

---

## Quality gates

[`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs on every PR to `main`:

```yaml
- npm ci
- npm run lint          # ESLint
- npx tsc --noEmit      # type check (separate from build to surface type errors clearly)
- npm run build         # Vite production build
```

A second job (`notify-on-failure`) only runs `if: failure()` on the validate job. It:

1. Looks for an open `CI failure on PR #N` issue.
2. If one exists, comments on it with the new failure details.
3. Otherwise opens a fresh issue.

This means the repo owner gets an email for the **first** failure on each PR (and one comment-email per repeated failure), without needing to fiddle with workflow notification preferences in GitHub settings.

`main` is branch-protected:

- `validate` is a required status check.
- Branches must be up to date before merging.
- PR is required (with 0 required approvals — so Renovate's bot can still automerge).

---

## Dependency management

[`renovate.json`](renovate.json):

```json
{
  "extends": ["config:recommended", "group:all"],
  "packageRules": [
    { "matchPackageNames": ["*"], "groupName": "all dependencies", "automerge": true }
  ],
  "separateMajorMinor": false,
  "prConcurrentLimit": 1,
  "automerge": true,
  "platformAutomerge": true,
  "automergeStrategy": "squash",
  "schedule": ["before 6am on Monday"],
  "timezone": "Europe/Amsterdam",
  "dependencyDashboard": false
}
```

What that buys:

- **One PR per week**, bundling every available update (major + minor + patch). No 17 separate Renovate PRs to triage.
- **Auto-merge on green CI** via GitHub's native auto-merge (`platformAutomerge`). If the build breaks under the new versions, the PR sits there with a failing check and the auto-issue tells me.
- **Branch protection makes auto-merge actually safe** — without required checks, `platformAutomerge` would still fire on a red build.

Trade-off accepted: a major-version dep bump that *passes* CI gets merged without my eyes on it. For a static portfolio with no users that's fine; for a real product I'd split major bumps into a separate, manual-review group.

---

## Security

- `npm audit` — 0 vulnerabilities. Dependency surface is small (6 production deps), so the chance of new advisories is low and Renovate handles them when they appear.
- Workflow permissions are scoped to the minimum:
  - [`ci.yml`](.github/workflows/ci.yml) `notify-on-failure`: `issues: write`.
  - [`deploy.yml`](.github/workflows/deploy.yml): `contents: read`, `pages: write`, `id-token: write` (OIDC for GitHub Pages).
- No hard-coded secrets — there are no secrets to begin with. Only public client-side code.
- Site headers (CSP, HSTS, X-Frame-Options) are not customizable on GitHub Pages without a CDN in front. Not added here; would be the next step if the site grew session/auth surface.

---

## SEO & social previews

- **Open Graph + Twitter cards** in [`index.html`](index.html) — title, description, `og:image` pointing to a stable `/og-image.jpeg` (Vite hashes assets imported from `src/`, so the previous `/assets/...` URL 404'd in production).
- **JSON-LD `Person` schema** — name, jobTitle, image, sameAs LinkedIn, worksFor. Helps Google associate the page with the person entity.
- **`sitemap.xml`** + **`Sitemap:` reference in `robots.txt`**.
- **Apple touch icon** + explicit favicon `<link>`.

---

## Performance

- Production JS: ~214 KB (gzipped served).
- Hero image: 27 KB JPEG, served from `public/og-image.jpeg` for a stable URL. The same file is reused for OG previews and the iOS Apple touch icon.
- Hero `<img>` tag has `width={460}`, `height={460}`, `fetchPriority="high"`, `decoding="async"` — LCP candidate, reserved aspect ratio, no layout shift.
- Tailwind v4's per-page CSS is ~22 KB.

---

## Local development

```bash
# Node 20.19+ or 22.12+ (Vite v8 requirement)
npm ci
npm run dev      # http://localhost:8080
npm run build    # outputs to dist/
npm run preview  # serve dist/
npm run lint
npx tsc --noEmit
```

Resume content lives in [`src/data/resume.ts`](src/data/resume.ts). To update what's rendered on the page, edit that file — the components consume it directly.

---

## Deployment

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) runs on every push to `main`:

1. `npm ci` + `npm run build`.
2. `cp dist/index.html dist/404.html` so GitHub Pages serves the SPA shell for any unknown path; the React app then routes to the 404 page client-side.
3. Upload `dist/` as a Pages artifact and deploy.

Custom domain (`www.yildizali.com`) is set via [`public/CNAME`](public/CNAME).

---

## License & contact

This is personal site code; not licensed for reuse. If anything here is useful to you, fork it freely and learn from it — but the site content (bio, photo, certifications) is mine.

- LinkedIn: [linkedin.com/in/yildizalicom](https://www.linkedin.com/in/yildizalicom)
- Live site: https://www.yildizali.com
