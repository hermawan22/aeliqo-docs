const input = document.querySelector("#search");
const status = document.querySelector("#search-status");
const results = document.querySelector("#search-results");
/** @typedef {{title: string, url: string, text: string}} SearchPage */
/** @type {Promise<SearchPage[]> | undefined} */
let indexPromise;
let request = 0;
if (input instanceof HTMLInputElement && status && results) {
  input
    .closest("form")
    ?.addEventListener("submit", (event) => event.preventDefault());
  input.addEventListener("input", async () => {
    const current = ++request;
    const query = input.value.trim().toLowerCase();
    results.replaceChildren();
    status.textContent = "";
    if (query.length < 2) return;
    try {
      indexPromise ??= fetch(new URL("search.json", import.meta.url)).then(
        (response) => {
          if (!response.ok) throw new Error("Search unavailable");
          return response.json();
        },
      );
      const pages = await indexPromise;
      if (current !== request) return;
      const words = query.split(/\s+/);
      const matches = pages
        .filter((page) =>
          words.every((word) =>
            `${page.title} ${page.text}`.toLowerCase().includes(word),
          ),
        )
        .slice(0, 6);
      status.textContent = `${matches.length} ${matches.length === 1 ? "result" : "results"}`;
      for (const page of matches) {
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.href = page.url;
        link.textContent = page.title;
        item.append(link);
        results.append(item);
      }
    } catch {
      indexPromise = undefined;
      if (current === request)
        status.textContent =
          "Search is unavailable. Use the navigation to explore the docs.";
    }
  });
}
