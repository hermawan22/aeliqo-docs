import test from "node:test";
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { build, root } from "../scripts/build.mjs";
import { pages, site, escapeHtml, headingId } from "../scripts/site.mjs";

await build();

test("every internal route, asset, and anchor resolves in the Pages subdirectory", async () => {
  for (const page of pages) {
    const file = path.join(root, "dist", page.slug, "index.html");
    const html = await readFile(file, "utf8");
    assert.match(html, /<html lang="en">/);
    assert.equal([...html.matchAll(/<h1[ >]/g)].length, 1);
    assert.match(html, /aria-current="page"/);
    assert.match(html, /Skip to content/);
    const url = new URL(
      `${site.base}${page.slug ? `${page.slug}/` : ""}`,
      site.origin,
    );
    for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      const target = new URL(match[1], url);
      if (target.origin !== site.origin) continue;
      assert.ok(
        target.pathname.startsWith(site.base),
        `${file}: link escapes Pages base: ${target}`,
      );
      const relative = target.pathname.slice(site.base.length);
      const location = path.join(
        root,
        "dist",
        relative,
        target.pathname.endsWith("/") ? "index.html" : "",
      );
      assert.ok((await stat(location)).isFile(), `${target} does not resolve`);
      if (target.hash) {
        const content = await readFile(location, "utf8");
        assert.ok(
          content.includes(`id="${target.hash.slice(1)}"`),
          `Missing anchor: ${target}`,
        );
      }
    }
  }
});

test("search covers all public pages with no duplicate paths", async () => {
  const index = JSON.parse(
    await readFile(path.join(root, "dist/search.json"), "utf8"),
  );
  assert.equal(index.length, pages.length);
  assert.equal(
    new Set(index.map(/** @param {{url: string}} page */ (page) => page.url))
      .size,
    pages.length,
  );
  assert.ok(
    index.some(
      /** @param {{text: string}} page */ (page) =>
        page.text.includes("No AI provider is enabled"),
    ),
  );
});

test("release identity stays consistent", async () => {
  const packageJson = JSON.parse(
    await readFile(path.join(root, "package.json"), "utf8"),
  );
  assert.equal(packageJson.version, site.version);
  for (const file of ["version", "changelog"]) {
    assert.ok(
      (
        await readFile(path.join(root, "content", `${file}.md`), "utf8")
      ).includes(site.version),
    );
  }
});

test("text escaping and stable heading IDs protect the template boundary", () => {
  assert.equal(
    escapeHtml("<script>\"x\" & 'y'</script>"),
    "&lt;script&gt;&quot;x&quot; &amp; &#39;y&#39;&lt;/script&gt;",
  );
  assert.equal(
    headingId("Microphone permission is denied"),
    "microphone-permission-is-denied",
  );
});
