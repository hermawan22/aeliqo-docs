# AI providers

**0.3.3 is live. One controlled 0.3.1 text-led production trial qualified a spoken music teacher, measured-note correction and model-directed local instrument response.** One controlled synthetic-speech exchange on 0.3.3 was independently qualified. Physical-device performance and generated sung lyrics remain unqualified. Bounded private-code trial admission is available, subject to consent and remaining budget; music playback and local recording remain usable.

## Historical 0.1.0 boundary

**No AI provider is enabled** in the 0.1.0 release. There is no working conversation route or API-key form. Luma and Echo are warm and airy filters on arranged synthetic vowel vocals, not conversational models or live generative singers.

## Qualified teacher and responsive instrument partner

The implemented flow is **Hear an exercise → Try exercise → Coach my practice → Play a musical response**. The AI chooses bounded notes and the local instrument engine plays them. Local practice does not upload audio; the explicit coaching request sends a bounded recent pitch summary. This is spoken teaching and model-directed local instrumental call and response, not generated sung audio or a lyric-pronouncing duet.

The controlled three-turn trial chose an A4/C5 exercise at 100 BPM. Four stable local A4 observations at octave zero had median −49.95 cents. The spoken teacher consistently called the note flat, advised aiming higher and invited another attempt. The partner then chose an ascending A4/B4/C5 phrase. Both musical playback acknowledgements succeeded, five local notes completed naturally, and all three spoken replies completed with nonzero audio. Cleanup returned DELETE 200 and stopped the microphone; the final private diagnostic failure label was empty.

This qualification covers that explicit text-led musical flow. It does not qualify raw microphone conversation, physical human/device input or continuous reactive jamming. The earlier intermittent second-turn failure remains unresolved; one pass does not establish its cause or general reliability. Mocked browser tests are separate supporting evidence.

A connection requires a private trial code and explicit consent. Voice leaves the device only after **Talk to coach**; **Finish speaking** ends that voice turn, although provider pause detection may answer first. One controlled synthetic-speech exchange on this path was independently qualified; physical human/device input remains unqualified. Each connection is bounded to **60 seconds and three replies**, without automatic retry or reconnect. Disconnect, tab hiding, microphone loss and transport errors end it. Bounded trial admission is available with the private code and consent, subject to remaining budget; these controls do not grant unrestricted ongoing access or automatic retries.

## Server configuration

Permanent credentials stay on the application server. There is no browser key form. Operators configure these variable names through their private deployment process; never place their values in this public repository:

- `AI_GATEWAY_API_KEY` — dedicated gateway credential.
- `AELIQO_AI_ENABLED` — explicit operator enablement.
- `AELIQO_AI_ACCESS_CODE` — private owner trial code.
- `AELIQO_AI_BUDGET_PATH` — absolute path to the durable SQLite trial ledger.

The same dedicated Aeliqo gateway key retains its **US$1 lifetime budget, Refresh Never**, without a reset, top-up or replacement key. This gateway setting is a soft spending cap, not a guarantee that an in-flight request cannot cross the limit. The total testing authorization remains US$1; there is no free ongoing AI service.

The protected local ledger is initialized once by an explicit operator action. Production receives that already-used ledger through a one-time seeding operation that refuses to overwrite an existing destination; it does not receive a newly initialized allowance. Runtime refuses a missing or invalid ledger. Redeployment must preserve it. Local acceptance and production share the same lifetime allowance. There is no automatic refill, reset, top-up or refund of failed-session holds. Provider failure closes the interaction rather than substituting a fabricated reply.

## Recorded cost and historical holds

The historical **four lifetime reservations are closed, retaining US$1.00 in application holds**. The original three rows and their US$0.75 holds remain preserved. At the fourth trial's closure, the 0.2.2 reservation rule blocked a fifth admission. This was application admission exhaustion, **not actual US$1 spending or a provider invoice**. Historical holds must not be silently rewritten or treated as charges.

Five official generation receipts and a native request count of five corroborate **US$0.02693550 currently recorded for the same dedicated key**. The latest voice exchange has an indexed receipt of US$0.004293; the four earlier receipts remain unchanged. All five receipts were freshly rechecked after the settling interval and were unchanged. This recorded total is not a settled invoice or proof that every delayed charge is posted. The earlier direct speech receipt was US$0.00290475 and the interrupted text-teacher receipt was US$0.00461025. The completed three-turn app session correlates with two new billing rows, US$0.00470175 and US$0.01042575, totaling US$0.01512750 for that time window. One application session can therefore span multiple billing rows. These are recorded costs, not settled invoice finality or a guarantee that all delayed usage is posted.

Earlier TEAM-wide usage included a US$0.176850 upward-rounded floor in the retained checkpoint. TEAM scope may include other products/history; it is not an Aeliqo-only invoice. Do not add same-key receipts to a TEAM aggregate without evidence they are excluded, or equate either amount with reservation holds.

The live ledger preserves all nine closed session rows, the original checkpoint and immutable receipt adjustments. A reviewed operator-only key-scope correction replaced the effective TEAM-wide floor with corroborated same-key receipts; the original checkpoint was retained. Complete receipt bundles account for sessions that span more than one billing row. The applied historical policy retains known costs, the global uncertainty allowance and a US$0.05 margin for each historical session. The latest session has an immutable complete-receipt adjustment plus its own US$0.05 uncertainty margin; its original row and hold are preserved. Runtime never refills or reconciles automatically.

The 0.3.2 voice trial sent 4.8 seconds of valid PCM and committed one turn, but received no transcript, spoken audio or response completion. Cleanup succeeded. Inspection found no corrupted input; the cause of the silent reply is unresolved. No matching billing row was indexed after the settling interval, so that trial's cost remains **unknown, not zero**.

Both replicas report bounded trial admission available: effective exposure is US$0.726937, and another full US$0.25 reservation would bring it to US$0.976937. The private trial code, explicit consent and remaining budget are still required. This is not an unrestricted ongoing service. This is **not proof that US$1 was actually spent**. The same US$1 lifetime, Refresh Never key remains unchanged, without reset, refund or top-up. The uncertainty allowances and gateway soft cap are practical controls, not strict invoice guarantees.

## Controlled 0.3.3 voice exchange

The deployed release adds a bounded silence tail for provider voice detection, a reply deadline, cleanup and private activity diagnostics. A reviewed one-time operator policy was applied to the eight then-closed historical rows, retaining their full history, known costs, a global uncertainty allowance and a margin for each historical session. This did not reset the ledger or key, or top up the budget.

One controlled synthetic voice question asked the coach to name the instrument ukulele and give a beginner practice tip. Speech went through the real browser MediaStream and production worklet, with no text or context fallback. The spoken answer named ukulele and advised pressing near the frets for a clear sound. About 7.7 seconds of output played naturally; input transcription, response completion and microphone/session cleanup were observed. Independent review qualified this single controlled synthetic-speech exchange. This is one synthetic speech exchange, not physical-human/device acceptance, continuous jamming or generated sung lyrics; it does not isolate the cause of earlier silence.

After the settling interval, all five same-key receipts were freshly verified unchanged. An immutable operator adjustment accounts for the latest US$0.004293 receipt plus its own US$0.05 margin, preserving all nine original rows, prior accounting history and uncertainty allowances. Bounded private-code admission is available under the exposure limit. The recorded five-receipt total does not establish complete delayed-usage coverage or final invoice cost. There is no automatic retry, budget reset or top-up.

## 0.2.2 setup correction and earlier failures

The third trial under 0.2.1 returned HTTP 503 before Connected, with no observed input or output. Subsequent production-boundary setup-only probes rejected the options-bearing setup with `1008` / `transformRejected`. Removing only `providerOptions` reached `session-created`; a minimal setup also succeeded, while a Google-namespaced generation configuration was rejected. These probes isolated the rejected setup configuration, not a working spoken coach.

The historical 0.2.2 release removed unsupported `providerOptions`. A verified upstream 128-token output cap is not claimed. Application limits remain: a 60-second session, three replies, 20 seconds of aggregate decoded audio output, bounded local text/input queues and no automatic provider retry or reconnect. Application controls and the gateway's soft budget do not establish a hard provider-invoice ceiling.

## Provider documentation

[Gemini Live](https://ai.google.dev/gemini-api/docs/live-api) documents audio/text input and spoken output. [Vercel AI Gateway realtime documentation](https://vercel.com/docs/ai-gateway/modalities/realtime) describes the gateway boundary; deployed model access and behavior still require verification.

The earlier evaluation also considered [direct Gemini ephemeral tokens](https://ai.google.dev/gemini-api/docs/live-api/ephemeral-tokens) and [ElevenLabs signed URLs](https://elevenlabs.io/docs/eleven-agents/customization/authentication). These are alternatives, not additional enabled providers in this release. No live AI duet singing, voice cloning, reactive AI band, or commercial song catalog is claimed.
