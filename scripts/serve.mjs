import http from "node:http";
import path from "node:path";
import { readFile, stat } from "node:fs/promises";
import { build, root } from "./build.mjs";
import { site } from "./site.mjs";
await build();
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".svg": "image/svg+xml",
};
const server = http.createServer(async (request, response) => {
  const pathname = new URL(request.url ?? "/", "http://localhost").pathname;
  if (pathname === "/") {
    response.writeHead(302, { Location: site.base });
    response.end();
    return;
  }
  if (!pathname.startsWith(site.base)) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }
  try {
    const relative = decodeURIComponent(pathname.slice(site.base.length));
    let file = path.resolve(root, "dist", relative);
    if (
      !file.startsWith(path.join(root, "dist") + path.sep) &&
      file !== path.join(root, "dist")
    )
      throw new Error("Invalid path");
    if ((await stat(file)).isDirectory()) file = path.join(file, "index.html");
    const data = await readFile(file);
    response.writeHead(200, {
      "Content-Type":
        types[/** @type {keyof typeof types} */ (path.extname(file))] ??
        "application/octet-stream",
    });
    response.end(data);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
});
server.listen(4321, "127.0.0.1", () =>
  console.log(`Local: http://localhost:4321${site.base}`),
);
