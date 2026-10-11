# AI providers

**0.1.0 is the deployed release. The optional live coach described below is forthcoming in 0.2 and is not yet verified in production.** Music playback and local recording remain independent of provider access.

## Available in 0.1.0

**No AI provider is enabled** in the 0.1.0 release. There is no working conversation route or API-key form. Luma and Echo are warm and airy filters on arranged synthetic vowel vocals, not conversational models or live generative singers.

## Forthcoming in 0.2: spoken music coach

The implementation connects a real Gemini Live spoken coach through **Vercel AI Gateway**, using an application-server proxy. It accepts spoken questions with song context and text questions with bounded song and last-stable-note context. **Coach my last note** asks for an explanation grounded in the local measurement; it does not automatically speak over singing. Music pauses for conversations; local target-note feedback supplies immediate visual guidance during solo singing turns.

This is a private owner trial, not unrestricted public AI access. A dedicated gateway credential is provisioned, but end-to-end acceptance remains pending. Availability must be established by a real successful connection and audible response; the presence of code or a configured key is not proof.

Connecting requires a private trial code and explicit consent. Voice leaves the device only after **Talk to coach**; **Finish speaking** ends that voice turn. The provider may detect a pause and answer before you press Finish speaking. A connection allows at most **60 seconds and three replies**, with no automatic reconnect or provider retry. Disconnect, tab hiding, microphone loss and transport errors end the AI interaction. Local music remains available when AI is unavailable.

The model can explain a warm-up or the next phrase. It must not invent accurate vocal scores from listening, control browser permissions, or claim to sing an unrestricted live duet. [Capabilities](../capabilities/) distinguishes local measured feedback from spoken guidance.

## Server configuration and trial budget

Permanent credentials stay on the application server. There is no browser key form. Operators configure these variable names through their private deployment process; never place their values in this public repository:

- `AI_GATEWAY_API_KEY` — dedicated gateway credential.
- `AELIQO_AI_ENABLED` — explicit operator enablement.
- `AELIQO_AI_ACCESS_CODE` — private owner trial code.
- `AELIQO_AI_BUDGET_PATH` — absolute path to the durable SQLite trial ledger.

The dedicated Aeliqo gateway key is provisioned with a **US$1 lifetime budget, Refresh Never**. This gateway setting is a soft spending cap, not a guarantee that an in-flight request cannot cross the limit. The authorization ceiling for testing remains **US$1 total**. The ledger admits at most **three lifetime reservations of US$0.25**, retaining each hold even when a session fails or ends early. Reported usage cannot reduce a hold. An admission that would exceed the lifetime ceiling is rejected. These holds are conservative application reservations, not a provider invoice or a verified provider-enforced dollar cap; actual transport and cost acceptance are pending.

The protected local ledger is initialized once by an explicit operator action. Production receives that already-used ledger through a one-time seeding operation that refuses to overwrite an existing destination; it does not receive a newly initialized allowance. Runtime refuses a missing or invalid ledger. Redeployment must preserve it. Local acceptance and production share the same lifetime allowance: migrate the existing ledger instead of creating a second allowance. There is no automatic refill, reset, top-up or refund of failed-session holds. Exhaustion or provider failure closes access rather than silently switching to a fabricated reply.

Two failed setup attempts retain **US$0.50 in application holds**. Their reservations are not refunded after the setup fix. The normalized PCM format configuration was corrected, but an actual successful provider exchange remains pending; setup failures and held amounts do not establish the provider invoice.

## Provider documentation

[Gemini Live](https://ai.google.dev/gemini-api/docs/live-api) documents audio/text input and spoken output. [Vercel AI Gateway realtime documentation](https://vercel.com/docs/ai-gateway/modalities/realtime) describes the gateway boundary; deployed model access and behavior still require verification.

The earlier evaluation also considered [direct Gemini ephemeral tokens](https://ai.google.dev/gemini-api/docs/live-api/ephemeral-tokens) and [ElevenLabs signed URLs](https://elevenlabs.io/docs/eleven-agents/customization/authentication). These are alternatives, not additional enabled providers in this release. No live AI duet singing, voice cloning, reactive AI band, or commercial song catalog is claimed.
