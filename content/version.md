# Version information

Product and documentation version: **0.1.0**.

This is the first independent Aeliqo music release. It does not inherit the former adaptive UI framework's 0.7.1 package version. Varendo has its own version and release process.

## Release identity

The application and public docs retain separate repository histories, each beginning with one root commit named **Initialize**. Subsequent changes use reviewed branches. The application version endpoint reports its baked source revision; source and image verification are maintained in the application's status record.

The signed 0.1.0 music release is live at [aeliqo.com](https://aeliqo.com/). Its `/version` endpoint reports source revision `81fd2021154a414b52a529710e0a20803e9bc9e2`. Public HTTPS health, readiness, source identity and original audio assets are verified. All 22 public browser tests passed across Chromium, Firefox and WebKit, with 8 existing native microphone skips; Chromium uses fake microphone hardware for automated recording checks. This does not qualify physical-device audio quality. GitHub Pages documentation is published separately; a documentation update does not publish an application image.

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

See the [changelog](../changelog/) for the 0.1.0 scope and [capabilities](../capabilities/) for the precise behavior.
