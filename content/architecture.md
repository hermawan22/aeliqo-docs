# Architecture for maintainers

**0.3.3 is deployed with its signed identity verified.** One independently reviewed 0.3.1 text-led production trial completed a spoken teacher exercise, a correction grounded in local pitch and an AI-directed local instrument response. One controlled synthetic-speech exchange on 0.3.3 was independently qualified. Physical-device acceptance and generated sung lyrics remain unqualified. One passing trial does not establish the cause of an earlier intermittent failure. Deterministic audio timing stays separate from model decisions.

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

The historical 0.1.0 release had no enabled provider route. The 0.3.3 implementation uses a separate consent-gated voice worklet and application-server proxy intended to connect to Gemini Live through Vercel AI Gateway. Permanent credentials remain server-side. The browser sends bounded PCM or text/context messages only for the explicit AI interaction; the server is designed to forward validated input and stream spoken replies back. The normalized transport declares PCM as `audio/pcm`, with 16 kHz microphone input and 24 kHz spoken output. Text questions can include the last stable solo-note result and its octave/age; voice turns use the fixed song setup without a separate context prompt. Conversation pauses music and cannot execute code, change permissions or substitute an AI guess for measured pitch evidence.

Input queues, output queues, session lifetime and response counts are bounded. Voice uploads remain ordered and bounded following the 0.2.1 correction for premature queue exhaustion under ordinary network delay. Epochs invalidate pending work after disconnect, song change or tab hiding. Microphone denial must prevent a paid session from starting. Transport errors fail closed, with no automatic retry or reconnect. Music and local feedback continue independently when AI is unavailable. The third trial under 0.2.1 failed with HTTP 503 before Connected. Subsequent setup-only probes isolated unsupported `providerOptions`: options-bearing setup returned `1008` / `transformRejected`, while removing only that option reached `session-created`. The historical 0.2.2 release removed that option; it makes no verified upstream 128-token-cap claim.

Historically, the fourth 0.2.2 trial created a session with HTTP 201 and accepted 80,000 bytes of microphone PCM at the application HTTP endpoint, with all input POSTs returning 200. No stream events, transcript or native audio output were observed before a 15-second timeout. HTTP-accepted audio was not proven forwarded audio: the server can drain late bytes. The browser closed without a second typed generation or retry. Controlled offline fake-microphone and parser tests were nonzero/working, but did not establish provider behavior or a grounded-pitch conversation.

## Qualified 0.3.1 teacher and musical response

The model chooses a short exercise or partner phrase through a validated note action. The contract permits one to eight notes, integer MIDI 48–84, lengths of 0.25, 0.5, 1 or 2 beats, no more than eight beats total and finite tempo 60–140 BPM. Unknown fields are rejected. Browser Web Audio schedules real oscillators/envelopes through the instrumental gain bus, recording mix and analyser; natural audio-ended events and explicit playback acknowledgements establish completion. Cancellation invalidates pending starts and stops scheduled nodes.

The actual text-led trial selected A4/C5 at 100 BPM. Local analysis supplied four stable held A4 observations at octave zero, median −49.95 cents; the spoken teacher correctly advised raising the flat note and trying again. The partner selected an ascending A4/B4/C5 phrase from the supplied context. Both phrases had nonzero post-gain sound while arranged vocals were muted; two played acknowledgements and all five natural note endings were observed. Three spoken replies totaled about 13.34 seconds of nonzero PCM, with 51 naturally completed buffers and zero cancellations. DELETE 200, microphone teardown and a null final failure label were verified.

Qualification covers spoken guidance grounded in measured metadata and model-directed local instrumental call and response. The held target is only the exercise first note plus the explicit octave; at most 32 stable observations within 30 seconds feed counts and median cents. Local practice audio is not uploaded. No raw voice-input, physical-human/device, whole-phrase score or generated sung-lyric claim follows from this trial. The earlier intermittent second-turn error remains unexplained; this release adds diagnostic visibility, not a proven causal fix.

The instrumental master controls the phrase independently of arranged vocal volume. The analyser measures after actual output gains. The model cannot execute code, change permissions, choose external audio URLs or substitute guessed pitch for measured evidence. Song/target/octave changes, a new attempt and stale session epochs invalidate relevant practice and playback work.

## Trial persistence and operations

The 0.1.0 session-local release needed no database. The 0.2.2 owner trial adds **SQLite solely for durable budget accounting**, not saved progress, recordings or accounts. `AELIQO_AI_BUDGET_PATH` identifies a ledger on a persistent volume. Runtime refuses a missing or invalid ledger. An operator initializes the protected local ledger once, then seeds that already-used ledger onto the production volume through an explicit one-time operation that refuses to overwrite an existing destination. Existing ledgers are not overwritten or automatically recreated after failure. Local acceptance and production must preserve one shared lifetime allowance rather than initialize separate trial budgets.

The historical 0.2.2 rule admitted at most four US$0.25 reservations. All four are closed, retaining US$1.00 in application holds, with the original three rows unchanged; that rule blocked a fifth admission at closure. Holds are not actual charges. The retained volume and ledger are preserved across both application replicas; the one-time seed is absent. Runtime continues to refuse missing or invalid state.

Failures and early closure do not refund holds, reported cost cannot reduce them, and exhausted access does not refill on restart. Session transports remain process-local: deployments need sticky routing to the owning application process and all instances must use the same durable ledger. A routing failure ends the interaction without an automatic reconnect.

The same dedicated gateway key retains its US$1 lifetime, Refresh Never soft cap, without reset or top-up. A later TEAM-wide recorded usage read was US$0.1763548916; that aggregate may include other products/history and is not an Aeliqo-only invoice. Earlier zero dashboard displays were not settled zero-cost evidence. The server's local bounds include 60 seconds of session lifetime, three replies and 960,000 decoded PCM-output bytes (20 seconds at 24 kHz mono PCM16), plus bounded input/text/queues. These are not a verified hard provider-invoice ceiling.

Deployed accounting preserves all nine closed session rows, the original checkpoint and immutable receipt adjustments. An explicit operator-only key-scope correction replaced the effective overinclusive TEAM floor with corroborated same-key receipts, preserving the original checkpoint. Complete multi-receipt bundles avoid undercounting a session that produces multiple billing rows. Adjusted exposure remains `max(upward-rounded complete receipt bundle, later reported cost) + US$0.05` per adjusted session. The applied historical policy retains a US$0.25 global uncertainty allowance and a margin for each historical session; the newest session has an immutable complete-receipt adjustment with its own US$0.05 margin, while its original hold row is unchanged. These are practical exposure controls, not settled invoices or strict billing guarantees. Bounded private-code trial admission is available, subject to consent and remaining budget, without automatic refill or retry.

Five official receipts and native requests corroborate a freshly rechecked US$0.02693550 recorded key total, including US$0.004293 for the latest voice exchange. This is not settled invoice finality or complete delayed-usage coverage. The qualified text-led app session correlates with two billing rows totaling US$0.01512750. The later 0.3.2 voice trial forwarded 4.8 seconds of valid input and committed one turn, but received no transcript, spoken audio or response completion. Input inspection found no corruption; no cause or fix is established. Its unindexed cost remains unknown after the settling interval.

Deployed 0.3.3 adds a bounded 1.2-second silence tail, a 15-second reply deadline, cleanup and private voice-activity diagnostics. Its guarded operator-only historical-exposure policy was applied, preserving all then-closed eight rows and prior accounting records while retaining known costs, a global uncertainty allowance and a margin for each historical session. After the settling interval, a fresh verification of all five receipts supported an immutable adjustment for the ninth session, preserving all nine original rows and prior accounting history. Both replicas report exposure US$0.726937 and bounded admission available; the next full reservation would bring exposure to US$0.976937.

The actual 0.3.3 trial sent synthetic speech through the real MediaStream and production worklet without text/context fallback. It received an instrument-specific ukulele practice reply, one input transcription and one response completion. About 7.7 seconds of spoken output completed naturally with no interrupted buffers; cleanup succeeded. Independent review qualified this single controlled synthetic-speech exchange. This does not establish physical-human/device performance or isolate a causal fix for earlier intermittent silence.

The deployed private closed-session diagnostic summary retains fixed failure labels and the last 16 timing events after closure, excluding audio, transcript payloads and raw provider error strings. It does not grant paid access or establish the cause of a prior failure.

Operator enablement also requires `AI_GATEWAY_API_KEY`, `AELIQO_AI_ENABLED` and `AELIQO_AI_ACCESS_CODE`. Never add secret values to browser code or this repository. Provider activation, paid testing and production deployment require their own authorization.

## Music assets

Keep composition data, lyrics, line timing, partner assignments, audio generation, and provenance aligned. The asset manifest must identify sources and rights for every demo. Do not add commercial songs, lyrics, samples, or voice likenesses without appropriate rights.

## Documentation delivery

A small Node static generator converts authored Markdown to semantic HTML. Raw Markdown HTML is disabled. Every route is prefixed with `/aeliqo-docs/`; a local search index contains only public documentation. The published artifact has no application server, provider key, or audio upload path.

The Pages workflow installs a pinned toolchain from the lockfile, checks formatting, lint, types, content and links, then runs browser/accessibility checks before publishing. Pull requests verify without deploying. Version changes update the package metadata, release page, and changelog together.
