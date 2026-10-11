# Version information

Current application and documentation version: **0.2.2**. The application is deployed and verified; publication of this documentation update is separate.

**Experimental live AI coaching is unavailable.** The fourth production trial created a session and received HTTP acceptance for microphone input, but no stream event, transcript or native audio reply was observed before a 15-second timeout. HTTP acceptance does not prove upstream audio forwarding. No successful Gemini response, audible coaching or grounded-pitch conversation has been qualified. The silent-reply cause and stream-first-byte behavior remain unresolved.

All four lifetime US$0.25 reservations are closed, retaining **US$1.00 in application holds**. The original three rows remain unchanged. These holds are not a provider invoice or proof that US$1 was spent. A fifth admission is blocked; no reset, refund, top-up, replacement key or further paid/provider call is authorized under this exhausted trial.

The same dedicated gateway key retains its US$1 lifetime, Refresh Never soft budget. A later dashboard display of US$0.00 used, US$1.00 remaining and zero requests/tokens with recent key activity may be delayed or rounded. It is not settled zero-cost proof or permission to retry. Local music, recording and measured pitch feedback remain independent of provider availability.

This music product has its own version history. It does not inherit the former adaptive UI framework's 0.7.1 package version. Varendo has its own version and release process.

## Current release identity

The application and public docs retain separate repository histories, each beginning with one root commit named **Initialize**. Subsequent changes use reviewed branches. The application version endpoint reports its baked source revision; source and image verification are maintained in the application's status record.

The signed 0.2.2 application is live at [aeliqo.com](https://aeliqo.com/). Its current identity is:

- Source revision: `17c7e6d1f9a9810c80b579618ef8ea9284db895b`.
- Image tag: `main-17c7e6d-38162521503`.
- Image digest: `sha256:cf0ced485bacfb413fef2645f14505b3169bb35b914d4b627f096a603ccc6850`.

Exact-source main CI passed with 170 unit tests and 67 browser tests, with 8 existing native microphone skips. The signed owner release, strict vulnerability checks, private-registry image and native rollout verification passed. The application has two ready replicas with zero restarts at verification; public health, readiness and version responses were successful. All 42 public WAV assets, totaling 146,231,764 bytes, matched their release hashes. The legacy framework's specification and two warm rollback endpoints remain preserved.

The durable ledger is retained across both application replicas with all four holds closed and the original three rows unchanged. The one-time seed is absent. These checks establish deployed identity, ledger preservation and local product behavior, not a successful provider conversation or physical-device audio quality. GitHub Pages publication is separate and does not publish an application image.

## 0.2.2 setup correction

The release removes unsupported `providerOptions` after setup-only probes isolated that configuration as the cause of setup rejection. Reaching `session-created` did not qualify a generated reply or audible coaching; the subsequent fourth end-to-end trial also failed to qualify output. No verified upstream 128-token cap or hard invoice ceiling is claimed.

## Historical 0.2.1 qualification

The 0.2.1 release used source revision `71420f9806ef3bee258e540e1834809118f6a79d`, image tag `main-71420f9-38157519753` and digest `sha256:49d62ab6b0d7b28938466e5bd834d761bb4971380f02536c9e3f4eca5a20e8ef`. It corrected premature voice-upload queue exhaustion. Independent review, same-source CI, signed-image checks and public deployment verification passed, with 169 passing unit tests and 67 passing browser tests plus 8 existing skips. Its third trial failed with HTTP 503 before Connected; three closed US$0.25 application holds were retained. The owner subsequently authorized one fourth admission within the same US$1 total limit, without resetting those holds.

## Historical 0.2.0 qualification

The 0.2.0 release used source revision `5a73e3cda54a7c3b4c0d66fa7d79343125c9603a`, image tag `main-5a73e3c-38153754591` and digest `sha256:4565b43970b81b976abd1c09b11d1d454546efb4d23f2b4907bcf889ee160fc6`. Its same-source CI, signed-image checks, public version, health and readiness were verified. Real provider acceptance remained pending, and 0.2.1 subsequently corrected the voice transport.

## Historical 0.1.0 qualification

The signed 0.1.0 release used source revision `81fd2021154a414b52a529710e0a20803e9bc9e2`. At that release, public HTTPS health, readiness, source identity and original audio assets were verified. All 22 public browser tests passed across Chromium, Firefox and WebKit, with 8 existing native microphone skips; Chromium used fake microphone hardware for automated recording checks. That historical result does not qualify physical-device audio quality or the current provider flow.

## Publication targets

| Surface                  | Target                                                     |
| ------------------------ | ---------------------------------------------------------- |
| Music application        | [aeliqo.com](https://aeliqo.com/) — live music application |
| Public docs              | `https://hermawan22.github.io/aeliqo-docs/` — GitHub Pages |
| Application repository   | `hermawan22/aeliqo` — private                              |
| Documentation repository | `hermawan22/aeliqo-docs` — public                          |
| Framework repository     | `hermawan22/varendo` — public                              |

## Compatibility and verification

The release uses browser-local Web Audio and browser-dependent capture/recording features. Read [requirements](../requirements/) for their practical limits. Automated browser coverage is not a real-device audio certification.

See the [changelog](../changelog/) for the preserved release history and current 0.2.2 patch and [capabilities](../capabilities/) for the precise behavior.
