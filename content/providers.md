# AI providers

The music engine works independently of a conversation service.

## Available in 0.1.0

**No AI provider is enabled.** Contextual assistance is explicitly unavailable. Playback, microphone capture, pitch feedback, and local recording work without paid inference or credentials. The application does not return a canned response presented as AI output.

There is no API-key form, live voice conversation, or working provider text route in this release. Luma and Echo are warm and airy filter variations of the same arranged synthetic vowel part, not conversational models.

## Future provider boundary

A future provider-agnostic adapter should run behind an application server. Permanent credentials must remain in private server environment variables. Before enabling requests, maintainers need input validation, timeouts, rate limits, cost bounds, explicit user consent, and a documented retention policy.

Contextual text assistance must remain separate from deterministic song playback. Live audio transmission would require its own consent and privacy contract. The default music experience must continue working when providers are unavailable.

## Evaluated for later releases

**Gemini Live** and **ElevenLabs Conversational AI** are candidates for low-latency interaction. Neither is an enabled integration in 0.1.0. Evaluation covers how a trusted backend could grant temporary browser access without exposing permanent keys:

- [Gemini Live ephemeral tokens](https://ai.google.dev/gemini-api/docs/live-api/ephemeral-tokens) are short-lived and can be constrained for a Live API session. The official documentation marks this mechanism as preview.
- [ElevenLabs signed conversation URLs](https://elevenlabs.io/docs/api-reference/conversations/get-signed-url) are issued by a server using its private API credentials for an authenticated conversation.

These are architectural options, not shipped capabilities. BYOK, voice conversation, and live generative singing are not available.

## Operational rules

Do not enable a provider by adding a browser key. First define request and cost limits, failure states, what leaves the device, and retention. Update [privacy](../privacy/), [capabilities](../capabilities/), and the changelog when real behavior changes.
