# Architecture for maintainers

**0.2.2 is deployed and its signed identity is verified. Experimental live AI coaching is unavailable: the fourth trial did not qualify a reply and all four lifetime reservations are closed.** Deterministic musical timing remains separate from conversational guidance.

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

The historical 0.1.0 release had no enabled provider route. The 0.2.2 implementation uses a separate consent-gated voice worklet and application-server proxy intended to connect to Gemini Live through Vercel AI Gateway. Permanent credentials remain server-side. The browser sends bounded PCM or text/context messages only for the explicit AI interaction; the server is designed to forward validated input and stream spoken replies back. The normalized transport declares PCM as `audio/pcm`, with 16 kHz microphone input and 24 kHz spoken output. Text questions can include the last stable solo-note result and its octave/age; voice turns use the fixed song setup without a separate context prompt. Conversation pauses music and cannot execute code, change permissions or substitute an AI guess for measured pitch evidence.

Input queues, output queues, session lifetime and response counts are bounded. Voice uploads remain ordered and bounded following the 0.2.1 correction for premature queue exhaustion under ordinary network delay. Epochs invalidate pending work after disconnect, song change or tab hiding. Microphone denial must prevent a paid session from starting. Transport errors fail closed, with no automatic retry or reconnect. Music and local feedback continue independently when AI is unavailable. The third trial under 0.2.1 failed with HTTP 503 before Connected. Subsequent setup-only probes isolated unsupported `providerOptions`: options-bearing setup returned `1008` / `transformRejected`, while removing only that option reached `session-created`. The deployed 0.2.2 release removes that option; it makes no verified upstream 128-token-cap claim.

The fourth trial created a session with HTTP 201 and accepted 80,000 bytes of microphone PCM at the application HTTP endpoint, with all input POSTs returning 200. No stream events, transcript or native audio output were observed before a 15-second timeout. HTTP-accepted audio is not proven forwarded audio: the server can drain late bytes. The browser closed without a second typed generation or retry. The silent-reply cause and stream-first-byte behavior remain unresolved. Controlled offline fake-microphone and parser tests were nonzero/working, but did not establish provider behavior or a grounded-pitch conversation.

## Trial persistence and operations

The 0.1.0 session-local release needed no database. The 0.2.2 owner trial adds **SQLite solely for durable budget accounting**, not saved progress, recordings or accounts. `AELIQO_AI_BUDGET_PATH` identifies a ledger on a persistent volume. Runtime refuses a missing or invalid ledger. An operator initializes the protected local ledger once, then seeds that already-used ledger onto the production volume through an explicit one-time operation that refuses to overwrite an existing destination. Existing ledgers are not overwritten or automatically recreated after failure. Local acceptance and production must preserve one shared lifetime allowance rather than initialize separate trial budgets.

Reservations are transactional and permanent: at most four lifetime US$0.25 holds under the same US$1 total authorization ceiling. The owner explicitly authorized the fourth admission without refunding or resetting the first three. All four rows are now closed, holding US$1.00, with the original three rows unchanged. A fifth admission is blocked. The retained volume and ledger are preserved across both application replicas; the one-time seed is absent. Runtime continues to refuse missing or invalid state.

Failures and early closure do not refund holds, reported cost cannot reduce them, and exhausted access does not refill on restart. Session transports remain process-local: deployments need sticky routing to the owning application process and all instances must use the same durable ledger. A routing failure ends the interaction without an automatic reconnect.

The same dedicated gateway key retains its US$1 lifetime, Refresh Never soft cap. Application holds are not a provider invoice or proof of US$1 spent. A later dashboard display of US$0.00 used, US$1.00 remaining and zero requests/tokens may be delayed or rounded; it neither proves settled zero cost nor permits a fifth attempt. No reset, refund, top-up, replacement key or further provider/token/WebSocket call is authorized under the exhausted trial. The server's local bounds include 60 seconds of session lifetime, three replies and 960,000 decoded PCM-output bytes (20 seconds at 24 kHz mono PCM16), plus bounded input/text/queues. These are not a verified hard provider-invoice ceiling.

Operator enablement also requires `AI_GATEWAY_API_KEY`, `AELIQO_AI_ENABLED` and `AELIQO_AI_ACCESS_CODE`. Never add secret values to browser code or this repository. Provider activation, paid testing and production deployment require their own authorization.

## Music assets

Keep composition data, lyrics, line timing, partner assignments, audio generation, and provenance aligned. The asset manifest must identify sources and rights for every demo. Do not add commercial songs, lyrics, samples, or voice likenesses without appropriate rights.

## Documentation delivery

A small Node static generator converts authored Markdown to semantic HTML. Raw Markdown HTML is disabled. Every route is prefixed with `/aeliqo-docs/`; a local search index contains only public documentation. The published artifact has no application server, provider key, or audio upload path.

The Pages workflow installs a pinned toolchain from the lockfile, checks formatting, lint, types, content and links, then runs browser/accessibility checks before publishing. Pull requests verify without deploying. Version changes update the package metadata, release page, and changelog together.
