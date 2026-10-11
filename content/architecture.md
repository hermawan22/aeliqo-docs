# Architecture for maintainers

A deterministic stage with optional intelligence around it.

## Separate repositories, separate responsibilities

- **hermawan22/aeliqo** — private Next.js, React, and TypeScript music application.
- **hermawan22/aeliqo-docs** — public static documentation; this repository.
- **hermawan22/varendo** — the former adaptive UI framework, separately preserved and rebranded.

Aeliqo's music application is a new codebase. It does not import the former framework. This documentation deploys to GitHub Pages; the application needs its own deployment on aeliqo.com after cutover approval.

## Audio path

1. A user gesture creates or resumes the browser AudioContext.
2. A deterministic song schedule places original instrumental and partner events against the audio clock.
3. Separate gain controls balance those parts.
4. An explicitly granted microphone stream feeds local amplitude and pitch analysis.
5. An opt-in MediaRecorder destination captures the microphone mixed with the backing and partner audio.
6. Completed recording blobs stay in session memory until deletion, navigation, or export.

UI timers display the current lyric; the audio clock remains the timing authority. Pause, resume, song changes, and ending a session must cancel or replace scheduled work deliberately. Audio nodes, tracks, worklets, and object URLs need explicit teardown.

## Analysis and feedback

AudioWorklet isolates sample collection from the main UI thread. Pitch estimation is a local, basic signal-analysis feature. The feedback engine consumes bounded estimates; it does not need an AI model to run. Uncertain or absent pitch should display a listening state rather than an invented note.

The stage visualization uses measured activity and session state. Reduced motion preferences reduce decorative movement. Avoid continuous expensive GPU effects for a feedback signal that can be expressed with simple transforms.

## Conversation boundary

No provider request route is enabled in 0.1.0. A future optional server adapter should receive validated text requests. Keep credentials on the server, constrain context, bound cost and rate, and report provider failures. Music must continue to work without provider access. A conversation response cannot execute code, silently change permissions, or bypass microphone consent.

No database or object storage is needed for the first session-local release. Introduce PostgreSQL, S3-compatible storage, and optional identity only when durable saved progress or recordings have an explicit product and privacy contract.

## Music assets

Keep composition data, lyrics, line timing, partner assignments, audio generation, and provenance aligned. The asset manifest must identify sources and rights for every demo. Do not add commercial songs, lyrics, samples, or voice likenesses without appropriate rights.

## Documentation delivery

A small Node static generator converts authored Markdown to semantic HTML. Raw Markdown HTML is disabled. Every route is prefixed with `/aeliqo-docs/`; a local search index contains only public documentation. The published artifact has no application server, provider key, or audio upload path.

The Pages workflow installs a pinned toolchain from the lockfile, checks formatting, lint, types, content and links, then runs browser/accessibility checks before publishing. Pull requests verify without deploying. Version changes update the package metadata, release page, and changelog together.
