import { test, expect } from "@playwright/test";
import { AxeBuilder } from "@axe-core/playwright";

for (const width of [360, 768, 1440]) {
  test(`responsive accessible reading at ${width}px`, async ({
    page,
  }, testInfo) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/aeliqo-docs/");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Your music. Your stage. Your AI partner.",
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    await page.screenshot({
      path: testInfo.outputPath("overview.png"),
      fullPage: true,
    });
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(result.violations).toEqual([]);
    await page
      .getByRole("link", { name: "Permissions & privacy", exact: true })
      .click();
    await expect(page).toHaveURL(/privacy\/$/);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Your microphone, your choice",
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  });
}

test("local search returns usable routes and safe empty states", async ({
  page,
}) => {
  await page.goto("/aeliqo-docs/");
  await page.getByRole("searchbox").fill("permission denied");
  await expect(
    page.locator("#search-results a", { hasText: "Troubleshooting" }),
  ).toBeVisible();
  await page
    .locator("#search-results a", { hasText: "Troubleshooting" })
    .click();
  await expect(page).toHaveURL(/troubleshooting\/$/);
  await page.getByRole("searchbox").fill("zznonexistent");
  await expect(page.locator("#search-status")).toHaveText("0 results");
});

test("keyboard skip link and reduced motion remain usable", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/aeliqo-docs/capabilities/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main")).toBeFocused();
  const result = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(result.violations).toEqual([]);
});
