# Architecture for maintainers

**0.2.1 is deployed and its signed identity is verified. Experimental live AI coaching is unavailable: production acceptance failed before Connected and all three trial reservations are closed.** Deterministic musical timing remains separate from conversational guidance.

## Separate repositories, separate responsibilities

- **hermawan22/aeliqo** — private Next.js, React, and TypeScript music application.
- **hermawan22/aeliqo-docs** — public static documentation; this repository.
- **hermawan22/varendo** — the former adaptive UI framework, separately preserved and rebranded.

Aeliqo's music application is a new codebase. It does not import the former framework. This documentation is published on GitHub Pages. The signed application image runs independently on the existing infrastructure at [aeliqo.com](https://aeliqo.com/). The legacy framework remains warm for route rollback, with its documentation preserved separately at `docs.aeliqo.com`.

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

## Local coaching and catalog

Six genre arrangements use one canonical composition catalog for melody, tempo, phrase timing, synthetic vowel events and generated WAV assets. Five real instrumental stems feed independent gain nodes before the master instrumental bus; partner vocals retain their own bus. Song choice is locked during an active session. Pausing and resuming replace all stem sources against one preserved audio-clock offset.

The local pitch worklet posts amplitude, frequency, periodicity, clipping, measurement sequence and capture-window midpoint; it does not post raw microphone samples. The session maps capture time to song time rather than assuming main-thread delivery time is the singing time. A target evaluator compares stable measurements with the authored solo melody, using an explicit octave choice. It abstains around note edges, during rests/partner turns and when the signal is unreliable. It does not validate word or syllable alignment.

## Conversation boundary

The historical 0.1.0 release had no enabled provider route. The 0.2.1 implementation uses a separate consent-gated voice worklet and application-server proxy intended to connect to Gemini Live through Vercel AI Gateway. Permanent credentials remain server-side. The browser sends bounded PCM or text/context messages only for the explicit AI interaction; the server forwards validated input and streams spoken replies back. The normalized transport declares PCM as `audio/pcm`, with 16 kHz microphone input and 24 kHz spoken output. Text questions can include the last stable solo-note result and its octave/age; voice turns use the fixed song setup without a separate context prompt. Conversation pauses music and cannot execute code, change permissions or substitute an AI guess for measured pitch evidence.

Input queues, output queues, session lifetime and response counts are bounded. The 0.2.1 transport patch keeps voice uploads ordered and bounded while avoiding premature queue exhaustion under ordinary network delay. Epochs invalidate pending work after disconnect, song change or tab hiding. Microphone denial must prevent a paid session from starting. Transport errors fail closed, with no automatic retry or reconnect. Music and local feedback continue independently when AI is unavailable. The production acceptance request returned HTTP 503 before Connected, with no observed stream events, transcripts, input or output. No real Gemini exchange passed acceptance. This result does not by itself identify the upstream cause.

## Trial persistence and operations

The 0.1.0 session-local release needed no database. The 0.2.1 owner trial adds **SQLite solely for durable budget accounting**, not saved progress, recordings or accounts. `AELIQO_AI_BUDGET_PATH` identifies a ledger on a persistent volume. Runtime refuses a missing or invalid ledger. An operator initializes the protected local ledger once, then seeds that already-used ledger onto the production volume through an explicit one-time operation that refuses to overwrite an existing destination. Existing ledgers are not overwritten or automatically recreated after failure. Local acceptance and production must preserve one shared lifetime allowance rather than initialize separate trial budgets.

Reservations are transactional and permanent: at most three lifetime US$0.25 holds under a US$1 total authorization ceiling. Failures and early closure do not refund holds, reported cost cannot reduce them, and exhausted access does not refill on restart. Session transports remain process-local: deployments need sticky routing to the owning application process and all instances must use the same durable ledger. A routing failure ends the interaction without an automatic reconnect. Deployed ledger preservation is verified, but provider behavior and actual billing have not passed acceptance. The dedicated Aeliqo gateway key also has a US$1 lifetime budget with Refresh Never; the gateway budget is a soft cap checked before requests, not a verified hard financial ceiling. The first two setup attempts and final failed production attempt are all closed, retaining US$0.75 in application holds. This is admission exhaustion, not a provider invoice or US$1 spent. A later gateway dashboard display of zero requests/tokens and US$0.00 used may be delayed or rounded; it does not prove settled zero cost or authorize another call. There is no reset, refund, top-up, replacement key or further paid use under this trial.

Operator enablement also requires `AI_GATEWAY_API_KEY`, `AELIQO_AI_ENABLED` and `AELIQO_AI_ACCESS_CODE`. Never add secret values to browser code or this repository. Provider activation, paid testing and production deployment require their own authorization.

## Music assets

Keep composition data, lyrics, line timing, partner assignments, audio generation, and provenance aligned. The asset manifest must identify sources and rights for every demo. Do not add commercial songs, lyrics, samples, or voice likenesses without appropriate rights.

## Documentation delivery

A small Node static generator converts authored Markdown to semantic HTML. Raw Markdown HTML is disabled. Every route is prefixed with `/aeliqo-docs/`; a local search index contains only public documentation. The published artifact has no application server, provider key, or audio upload path.

The Pages workflow installs a pinned toolchain from the lockfile, checks formatting, lint, types, content and links, then runs browser/accessibility checks before publishing. Pull requests verify without deploying. Version changes update the package metadata, release page, and changelog together.
