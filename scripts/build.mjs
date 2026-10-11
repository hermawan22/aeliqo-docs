import { mkdir, readFile, rm, writeFile, cp } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import MarkdownIt from "markdown-it";
import { site, pages, escapeHtml, href, headingId } from "./site.mjs";

export const root = fileURLToPath(new URL("../", import.meta.url));
const markdown = new MarkdownIt({
  html: false,
  linkify: false,
  typographer: true,
});

/** @param {typeof pages[number]} page @param {string} html @param {{id: string, title: string}[]} headings */
function layout(page, html, headings) {
  const index = pages.indexOf(page);
  const groups = [...new Set(pages.map((item) => item.group))];
  const nav = groups
    .map(
      (group) =>
        `<section aria-label="${group}"><p class="nav-label">${group}</p>${pages
          .filter((item) => item.group === group)
          .map(
            (item) =>
              `<a href="${href(item.slug)}"${item.slug === page.slug ? ' aria-current="page"' : ""}>${escapeHtml(item.title)}</a>`,
          )
          .join("")}</section>`,
    )
    .join("");
  const previous = pages[index - 1];
  const next = pages[index + 1];
  const canonical = `${site.origin}${href(page.slug)}`;
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#090711"><title>${escapeHtml(page.title)} · Aeliqo docs</title><meta name="description" content="${escapeHtml(page.description)}"><link rel="canonical" href="${canonical}"><meta property="og:title" content="${escapeHtml(page.title)} · Aeliqo"><meta property="og:description" content="${escapeHtml(page.description)}"><meta property="og:type" content="website"><link rel="icon" href="${site.base}favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="${site.base}style.css"><script type="module" src="${site.base}search.js"></script></head>
<body><a class="skip" href="#main" tabindex="0">Skip to content</a>
<header class="header"><a class="brand" href="${site.base}" aria-label="Aeliqo documentation home"><span class="brand-mark" aria-hidden="true">a</span>aeliqo<span class="docs-word"> / docs</span></a><div class="header-right"><span class="version">v${site.version}</span><a href="https://github.com/hermawan22/aeliqo-docs">GitHub <span aria-hidden="true">↗</span></a></div></header>
<div class="shell"><aside class="sidebar"><details class="navigation" open><summary>Explore the docs</summary><nav aria-label="Documentation">${nav}</nav></details><div class="sidebar-note"><span class="status-dot" aria-hidden="true"></span> Local audio first.<br><span>No account needed to begin.</span></div></aside>
<main id="main" tabindex="-1"><div class="eyebrow">${page.eyebrow}</div><article class="prose${page.slug === "" ? " overview" : ""}">${html}</article><nav class="pagination" aria-label="Adjacent pages">${previous ? `<a href="${href(previous.slug)}"><small>Previous</small>${escapeHtml(previous.title)} <span aria-hidden="true">←</span></a>` : "<span></span>"}${next ? `<a href="${href(next.slug)}"><small>Up next</small>${escapeHtml(next.title)} <span aria-hidden="true">→</span></a>` : ""}</nav><footer>Made for the moments you make music.<br><span>Aeliqo ${site.version} · Public documentation</span></footer></main>
<aside class="on-this-page" aria-label="Page tools"><form class="search" role="search"><label for="search">Search the docs</label><input id="search" name="q" type="search" placeholder="Try “microphone”" autocomplete="off" aria-describedby="search-status"><p id="search-status" aria-live="polite"></p><ul id="search-results"></ul></form><div class="toc"><p class="nav-label">On this page</p>${headings.map((heading) => `<a href="#${heading.id}">${escapeHtml(heading.title)}</a>`).join("")}</div><a class="edit-link" href="https://github.com/hermawan22/aeliqo-docs/blob/main/content/${page.file}.md">Improve this page <span aria-hidden="true">↗</span></a></aside></div>
</body></html>`;
}

export async function build() {
  const dist = path.join(root, "dist");
  await rm(dist, { recursive: true, force: true });
  await mkdir(dist, { recursive: true });
  await cp(path.join(root, "public"), dist, { recursive: true });
  const search = [];
  for (const page of pages) {
    const source = await readFile(
      path.join(root, "content", `${page.file}.md`),
      "utf8",
    );
    const tokens = markdown.parse(source, {});
    const headings = [];
    const ids = new Set();
    for (let index = 0; index < tokens.length; index++) {
      const token = tokens[index];
      if (token.type !== "heading_open") continue;
      const title = tokens[index + 1]?.content ?? "";
      const base = headingId(title);
      let id = base;
      for (let count = 2; ids.has(id); count++) id = `${base}-${count}`;
      ids.add(id);
      token.attrSet("id", id);
      if (token.tag === "h2") headings.push({ id, title });
    }
    const html = markdown.renderer.render(tokens, markdown.options, {});
    const directory = path.join(dist, page.slug);
    await mkdir(directory, { recursive: true });
    await writeFile(
      path.join(directory, "index.html"),
      layout(page, html, headings),
    );
    search.push({
      title: page.title,
      url: href(page.slug),
      description: page.description,
      text: source
        .replace(/[#*`|]/g, "")
        .replace(/\s+/g, " ")
        .trim(),
    });
  }
  await writeFile(path.join(dist, "search.json"), JSON.stringify(search));
  await writeFile(path.join(dist, ".nojekyll"), "");
  await writeFile(
    path.join(dist, "404.html"),
    '<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Page not found · Aeliqo</title><link rel="stylesheet" href="/aeliqo-docs/style.css"><main class="not-found"><p class="eyebrow">AELIQO DOCUMENTATION</p><h1>This page is off stage.</h1><p>The address may have changed.</p><a href="/aeliqo-docs/">Return to the docs</a></main></html>',
  );
  console.log(
    `Built ${pages.length} documentation pages for ${site.origin}${site.base}`,
  );
}
if (process.argv[1] === fileURLToPath(import.meta.url)) await build();
