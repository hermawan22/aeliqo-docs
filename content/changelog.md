# Changelog

Changes to the independent Aeliqo music product and its public docs.

## 0.2.2 · Provider setup correction; live AI unavailable

**0.2.2 is live at [aeliqo.com](https://aeliqo.com/).** Source `17c7e6d1f9a9810c80b579618ef8ea9284db895b`, signed tag `main-17c7e6d-38162521503` and digest `sha256:cf0ced485bacfb413fef2645f14505b3169bb35b914d4b627f096a603ccc6850` passed exact-source CI, signed release and native/public rollout verification. Local music, six genre arrangements, five switchable synthesized instrument stems and measured target-note feedback remain available.

- Removed unsupported `providerOptions`. Setup-only probes isolated its rejection with `1008` / `transformRejected`; removing only that option reached `session-created`. This was setup acceptance, not a generated model reply.
- The explicitly authorized fourth trial created a session with HTTP 201. Input POSTs returned HTTP 200 for 80,000 bytes of microphone PCM, but no stream event, transcript or native output appeared before the 15-second microphone-reply timeout. HTTP acceptance is not proven upstream forwarding: the server can drain late bytes. The browser closed without a second typed generation or retry. No grounded-pitch conversation was qualified.
- The silent-reply cause and stream-first-byte behavior remain unresolved. Offline nonzero fake-microphone and parser tests are not provider proof.
- All four US$0.25 lifetime reservations are closed, retaining US$1.00 in application holds. The original three rows remain unchanged. This is not a provider invoice or proof that US$1 was spent. A fifth admission is blocked; no reset, refund, top-up, replacement key or further provider call is authorized under the exhausted trial.
- The same dedicated US$1 lifetime, Refresh Never key remains. A later dashboard display of US$0.00 used, US$1.00 remaining and zero requests/tokens may be delayed or rounded; it does not prove settled zero cost or permit another attempt.
- The 60-second session, three-reply, 20-second aggregate decoded audio-output and local text/input bounds remain. No verified upstream 128-token cap or hard provider-invoice ceiling is claimed.

**Experimental live AI coaching is unavailable.** The retained ledger, signed image, working local music and warm legacy rollback remain preserved.

## 0.2.1 · Voice transport patch

The 0.2.1 release corrected premature voice-input failure under ordinary network delay while preserving ordered, bounded uploads. Independent review, same-source CI, signed-image release checks, strict vulnerability scanning and public deployment verification passed. The previous framework remains available for rollback.

The transport patch was implemented without additional paid calls. The subsequent third production acceptance attempt returned **HTTP 503 before Connected**, with no stream events, transcripts, input or spoken output. No successful Gemini exchange or audible coaching was qualified. At that release, all three lifetime reservations were closed, retaining US$0.75 in application holds; these are not a provider invoice or a statement that US$1 was spent. **Experimental live AI coaching is unavailable.** The initial trial closed without reset, refund, top-up or replacement key. The owner later explicitly authorized a fourth admission within the same US$1 total limit, as recorded under 0.2.2.

A later gateway dashboard read displayed US$0.00 used, US$1.00 remaining and zero requests/tokens with recent key activity. The display may be delayed or rounded; it does not prove settled zero cost or authorize a retry. The dedicated US$1 lifetime, Refresh Never budget remains unchanged.

## 0.2.0 · Expanded karaoke and local coaching

The 0.2.0 release introduced the features below. Its signed source/image identity, public version, health and readiness were verified before the 0.2.1 transport patch. A successful real provider exchange and actual billed cost were not established by that release.

- Six original genre arrangements and five independently switchable synthesized instrument stems per song.
- Search and genre filtering before song playback.
- Local target-note comparison with stable-signal gating, neutral uncertain/rest/partner states, explicit octave choice and a paused reference tone.
- Experimental Gemini spoken-coach integration through a Vercel AI Gateway server proxy, separate from local analysis and arranged partner vocals; no real provider response was verified.
- Explicit provider-transmission consent, private trial code, pause-for-conversation controls, bounded input/output and fail-closed transport handling.
- Corrected normalized `audio/pcm` setup. Two failed setup reservations remain held, totaling US$0.50; no successful provider exchange is asserted.
- A dedicated gateway key with a US$1 lifetime, Refresh Never soft budget.
- A durable SQLite trial ledger: at most three nonrefundable US$0.25 lifetime holds under a US$1 total test authorization, no automatic ledger creation, reconnect, retry or top-up.

At the 0.2.0 release, the dedicated gateway credential was provisioned, provider acceptance and billed-cost verification were pending, and two failed setup reservations were preserved. The final reservation was subsequently used unsuccessfully under 0.2.1, closing the trial without free ongoing AI access or authorization for further spending. Word/syllable alignment, live AI duet singing, accounts and cloud recordings are not included. Local reservation limits are not a verified provider billing hard cap.

## 0.1.0 · Initial release

The initial source release establishes a genuinely playable, browser-local music session.

- Sing Together, Jam Together, and optional Get Better modes.
- Original procedurally synthesized music and arranged synthetic vowel partner parts.
- Synchronized authored lyrics with assigned roles.
- Explicit microphone consent, real activity visualization, and basic local pitch feedback.
- Separate instrumental and partner mixing.
- Opt-in mixed recording with replay, download, and deletion.
- Responsive accessible controls and explicit failure states.
- A documented future provider boundary; contextual AI assistance is explicitly unavailable.
- Public static documentation and a GitHub Pages deployment workflow.
- The music application is live at [aeliqo.com](https://aeliqo.com/) using a signed image qualified by production smoke, strict vulnerability scanning, and three-engine staging and public browser checks. The legacy framework remains warm for rollback and its documentation is preserved separately.

### Current limits

No unrestricted live generative singer, reactive AI band, commercial song catalog, accounts, saved progress, or cloud recording library. Real-device latency and audio quality need device validation. Production application deployment is separate from publication of these docs.

### Relationship to earlier Aeliqo releases

Earlier `@aeliqo/*` releases belong to the adaptive UI framework that is being separated as Varendo. Those historical releases and legal/provenance records are preserved independently. This changelog begins with the music product's own 0.1.0.
