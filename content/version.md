# Version information

Current application and documentation version: **0.2.1**. The application is deployed and verified; publication of this documentation update is separate.

**Experimental live AI coaching is unavailable.** The final production session-creation attempt returned HTTP 503 before Connected, with no observed stream events, transcripts, input or spoken output. No successful Gemini response or audible coaching has been verified. All three trial reservations are closed, retaining US$0.75 in application holds. This is admission exhaustion, not a provider invoice or a statement that US$1 was spent. There will be no reset, refund, top-up, replacement key or further paid call under this trial.

The dedicated gateway key has a US$1 lifetime, Refresh Never soft budget. A later gateway dashboard read displayed US$0.00 used, US$1.00 remaining and zero requests/tokens with recent key activity. That possibly delayed or rounded display does not establish settled zero cost, a successful model response or permission to retry. A documentation build, passing fixture or configured key does not verify an audible provider response or its invoice. Local music, recording and measured pitch feedback remain independent of provider availability.

This music product has its own version history. It does not inherit the former adaptive UI framework's 0.7.1 package version. Varendo has its own version and release process.

## Current release identity

The application and public docs retain separate repository histories, each beginning with one root commit named **Initialize**. Subsequent changes use reviewed branches. The application version endpoint reports its baked source revision; source and image verification are maintained in the application's status record.

The signed 0.2.1 application is live at [aeliqo.com](https://aeliqo.com/). Its current identity is:

- Source revision: `71420f9806ef3bee258e540e1834809118f6a79d`.
- Image tag: `main-71420f9-38157519753`.
- Image digest: `sha256:49d62ab6b0d7b28938466e5bd834d761bb4971380f02536c9e3f4eca5a20e8ef`.

Independent review, same-source CI, signed-image release checks and strict vulnerability scanning passed. CI includes 169 passing unit tests and 67 passing browser tests, with 8 existing native microphone skips. Public HTTPS `/version` reports 0.2.1 and the source revision above; `/healthz` and `/readyz` return successful responses. All 42 public WAV assets matched their release hashes. The deployment has two ready application replicas, and the legacy framework remains ready for rollback with its specification and documentation backend preserved.

These checks establish deployed identity and local product behavior, not a successful provider conversation or physical-device audio quality. The final paid trial reservation was used by the failed production acceptance attempt. The retained ledger and healthy application replicas were verified afterward. GitHub Pages documentation is published separately; a documentation update does not publish an application image.

## 0.2.1 transport correction

The patch corrects voice-upload handling so ordinary network delay does not prematurely exhaust the bounded input queue. Uploads remain ordered and bounded; the change does not relax the trial budget, consent or failure limits.

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

See the [changelog](../changelog/) for the preserved release history and current 0.2.1 patch and [capabilities](../capabilities/) for the precise behavior.
