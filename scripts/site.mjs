export const site = {
  name: "Aeliqo",
  version: "0.2.2",
  base: "/aeliqo-docs/",
  origin: "https://hermawan22.github.io",
};
export const pages = [
  {
    slug: "",
    file: "overview",
    title: "Overview",
    group: "Start here",
    eyebrow: "YOUR MUSIC COMPANION",
    description: "Meet the first independent Aeliqo music experience.",
  },
  {
    slug: "getting-started",
    file: "getting-started",
    title: "Getting started",
    group: "Start here",
    eyebrow: "TAKE THE STAGE",
    description:
      "Choose a song, enable your microphone, and make your first take.",
  },
  {
    slug: "requirements",
    file: "requirements",
    title: "Browser & microphone",
    group: "Start here",
    eyebrow: "BEFORE YOU PLAY",
    description: "Prepare your browser, headphones, and microphone.",
  },
  {
    slug: "capabilities",
    file: "capabilities",
    title: "Capabilities",
    group: "The experience",
    eyebrow: "THE 0.2.2 EXPERIENCE",
    description: "A precise guide to shipped behavior and current limits.",
  },
  {
    slug: "privacy",
    file: "privacy",
    title: "Permissions & privacy",
    group: "The experience",
    eyebrow: "IN YOUR HANDS",
    description: "Understand consent, local audio, recordings, and deletion.",
  },
  {
    slug: "troubleshooting",
    file: "troubleshooting",
    title: "Troubleshooting",
    group: "The experience",
    eyebrow: "KEEP THE SESSION GOING",
    description: "Resolve capture, playback, timing, and recording problems.",
  },
  {
    slug: "providers",
    file: "providers",
    title: "AI providers",
    group: "Behind the stage",
    eyebrow: "OPTIONAL BY DESIGN",
    description: "Unavailable experimental coaching and closed-trial status.",
  },
  {
    slug: "architecture",
    file: "architecture",
    title: "Architecture",
    group: "Behind the stage",
    eyebrow: "FOR MAINTAINERS",
    description: "Audio, analysis, privacy, and documentation boundaries.",
  },
  {
    slug: "version",
    file: "version",
    title: "Version information",
    group: "Behind the stage",
    eyebrow: "RELEASE 0.2.2",
    description: "Release identity, compatibility, and publication targets.",
  },
  {
    slug: "changelog",
    file: "changelog",
    title: "Changelog",
    group: "Behind the stage",
    eyebrow: "RELEASE NOTES",
    description: "Changes to the independent music product.",
  },
];
/** @param {unknown} value */
export function escapeHtml(value) {
  return String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        character
      ] ?? character,
  );
}
/** @param {string} slug */
export function href(slug) {
  return `${site.base}${slug ? `${slug}/` : ""}`;
}
/** @param {string} text */
export function headingId(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
