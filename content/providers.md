# AI providers

**0.2.2 is deployed and healthy. Experimental live AI coaching is unavailable: the fourth production trial did not produce a verified reply, and all four lifetime admissions are exhausted. No successful Gemini response or audible coach output has been verified.** Music playback and local recording remain independent of provider access.

## Historical 0.1.0 boundary

**No AI provider is enabled** in the 0.1.0 release. There is no working conversation route or API-key form. Luma and Echo are warm and airy filters on arranged synthetic vowel vocals, not conversational models or live generative singers.

## Experimental spoken coach: unavailable

The implementation is designed to connect a real Gemini Live spoken coach through **Vercel AI Gateway**, using an application-server proxy. The implemented flow supports spoken questions with song context and text questions with bounded song and last-stable-note context. **Coach my last note** is designed to request an explanation grounded in the local measurement; it does not automatically speak over singing. These are implementation descriptions, not verified provider behavior. Music pauses for conversations; local target-note feedback supplies immediate visual guidance during solo singing turns.

The private owner trial is closed. After the setup repair, the fourth trial created a session with **HTTP 201**. The application endpoint accepted **80,000 bytes of microphone PCM**, and all input POSTs returned HTTP 200. No stream events, transcript or native audio output were observed before the 15-second microphone-reply timeout. The browser then closed; no second typed generation or retry was attempted.

**HTTP-accepted PCM is not proof that the provider received or processed it.** The server can drain late audio bytes without forwarding them. The silent-reply cause is unresolved, and the stream's first byte was not qualified. Offline tests found nonzero looping fake-microphone input and a working SSE parser, but those tests are not provider acceptance. No grounded-pitch conversation was qualified.

The implemented connection flow requires a private trial code and explicit consent, but is currently unavailable. Voice leaves the device only after **Talk to coach**; **Finish speaking** ends that voice turn. The provider may detect a pause and answer before you press Finish speaking. A connection allows at most **60 seconds and three replies**, with no automatic reconnect or provider retry. Disconnect, tab hiding, microphone loss and transport errors end the AI interaction. Local music remains available when AI is unavailable.

The intended spoken coach would explain a warm-up or the next phrase. It must not invent accurate vocal scores from listening, control browser permissions, or claim to sing an unrestricted live duet. [Capabilities](../capabilities/) distinguishes local measured feedback from spoken guidance.

## Server configuration and trial budget

Permanent credentials stay on the application server. There is no browser key form. Operators configure these variable names through their private deployment process; never place their values in this public repository:

- `AI_GATEWAY_API_KEY` — dedicated gateway credential.
- `AELIQO_AI_ENABLED` — explicit operator enablement.
- `AELIQO_AI_ACCESS_CODE` — private owner trial code.
- `AELIQO_AI_BUDGET_PATH` — absolute path to the durable SQLite trial ledger.

The dedicated Aeliqo gateway key is provisioned with a **US$1 lifetime budget, Refresh Never**. This gateway setting is a soft spending cap, not a guarantee that an in-flight request cannot cross the limit. The authorization ceiling for testing remains **US$1 total**. The ledger admits at most **four lifetime reservations of US$0.25**, retaining each hold even when a session fails or ends early. Reported usage cannot reduce a hold. An admission that would exceed the lifetime ceiling is rejected. These holds are conservative application reservations, not a provider invoice or a verified provider-enforced dollar cap; actual provider charges have not been established.

The protected local ledger is initialized once by an explicit operator action. Production receives that already-used ledger through a one-time seeding operation that refuses to overwrite an existing destination; it does not receive a newly initialized allowance. Runtime refuses a missing or invalid ledger. Redeployment must preserve it. Local acceptance and production share the same lifetime allowance: migrate the existing ledger instead of creating a second allowance. There is no automatic refill, reset, top-up or refund of failed-session holds. Exhaustion or provider failure closes access rather than silently switching to a fabricated reply.

All **four lifetime reservations are closed, retaining US$1.00 in application holds**. The original three rows and their US$0.75 holds were preserved; the owner explicitly authorized one fourth US$0.25 admission under the same US$1 total authorization. That fourth trial is now closed too. A fifth admission is blocked. This is **application admission exhaustion, not a US$1.00 provider invoice or proof that US$1 was spent**. There is no reset, refund, top-up, replacement key or further provider/token/WebSocket call authorized under the exhausted trial. The release does not provide free ongoing AI access.

A later gateway dashboard read displayed US$0.00 used, US$1.00 remaining and zero requests/tokens with no model rows, while showing recent key activity. That display may be delayed or rounded; it is not settled zero-cost proof, successful model acceptance or permission for a fifth attempt. The same dedicated key's US$1 lifetime, Refresh Never budget remains unchanged.

## 0.2.2 setup correction and earlier failures

The third trial under 0.2.1 returned HTTP 503 before Connected, with no observed input or output. Subsequent production-boundary setup-only probes rejected the options-bearing setup with `1008` / `transformRejected`. Removing only `providerOptions` reached `session-created`; a minimal setup also succeeded, while a Google-namespaced generation configuration was rejected. These probes isolated the rejected setup configuration, not a working spoken coach.

The deployed 0.2.2 release removes unsupported `providerOptions`. A verified upstream 128-token output cap is not claimed. Application limits remain: a 60-second session, three replies, 20 seconds of aggregate decoded audio output, bounded local text/input queues and no automatic provider retry or reconnect. Application controls and the gateway's soft budget do not establish a hard provider-invoice ceiling.

## Provider documentation

[Gemini Live](https://ai.google.dev/gemini-api/docs/live-api) documents audio/text input and spoken output. [Vercel AI Gateway realtime documentation](https://vercel.com/docs/ai-gateway/modalities/realtime) describes the gateway boundary; deployed model access and behavior still require verification.

The earlier evaluation also considered [direct Gemini ephemeral tokens](https://ai.google.dev/gemini-api/docs/live-api/ephemeral-tokens) and [ElevenLabs signed URLs](https://elevenlabs.io/docs/eleven-agents/customization/authentication). These are alternatives, not additional enabled providers in this release. No live AI duet singing, voice cloning, reactive AI band, or commercial song catalog is claimed.
