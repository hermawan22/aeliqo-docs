# Aeliqo documentation

Public documentation for **Aeliqo 0.1.0**, the independent music companion.

Intended repository: [hermawan22/aeliqo-docs](https://github.com/hermawan22/aeliqo-docs). Intended documentation address: [hermawan22.github.io/aeliqo-docs](https://hermawan22.github.io/aeliqo-docs/). These addresses describe the publication target; a local build alone does not confirm publication.

## Develop

Use Node.js **24.20.0** and pnpm **11.24.0**.

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm dev
```

The preview runs at `http://localhost:4321/aeliqo-docs/`. Edit authored Markdown in `content/`, navigation in `scripts/site.mjs`, and styling in `public/`. The small static generator uses Markdown-it with raw HTML disabled. No application server or external service is required by the published docs.

## Verify

```sh
pnpm exec playwright install chromium firefox webkit
pnpm test:browser
pnpm audit --audit-level high
```

Browser tests cover local search, internal navigation, mobile layout, keyboard access, and axe accessibility checks. They verify documentation, not audio hardware or the commercial app. Build output and test evidence are ignored.

## Publish

Set repository **Settings → Pages → Source** to **GitHub Actions**. The Pages workflow checks, builds, and publishes pushes to `main`; it can also run manually. Deployment needs the repository's Pages permission and environment. The workflow uses GitHub's supported upload/deploy actions, no custom credentials. Preview pull requests run checks without deployment.

The path prefix is `/aeliqo-docs/`. The application at `aeliqo.com` is deployed separately and must never be placed in this Pages artifact. Do not add credentials or private application source to this public repository.

## Content contract

Describe only shipped behavior, name limitations, and update the version, changelog, and capability matrix together. The 0.1.0 partner is an arranged synthetic vowel performance, not a live generative singer. Optional provider credentials belong on the application server. Preserve asset attribution and provenance in the private application repository.
