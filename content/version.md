# Version information

Product and documentation version: **0.1.0**.

This is the first independent Aeliqo music release. It does not inherit the former adaptive UI framework's 0.7.1 package version. Varendo has its own version and release process.

## Release identity

The application and public docs begin with clean repository histories. Each initial source repository is intended to contain a single root commit named **Initialize**. Exact commit IDs and deployment results belong in the verified delivery record, not a guessed value in these docs.

The package version identifies source content. It does not prove that a production domain, GitHub repository, or Pages deployment is reachable. Verify those destinations after publication.

## Publication targets

| Surface                  | Target                                                                   |
| ------------------------ | ------------------------------------------------------------------------ |
| Music application        | `https://aeliqo.com` — separate deployment and approved cutover required |
| Public docs              | `https://hermawan22.github.io/aeliqo-docs/` — GitHub Pages               |
| Application repository   | `hermawan22/aeliqo` — private                                            |
| Documentation repository | `hermawan22/aeliqo-docs` — public                                        |
| Framework repository     | `hermawan22/varendo` — public                                            |

## Compatibility and verification

The release uses browser-local Web Audio and browser-dependent capture/recording features. Read [requirements](../requirements/) for their practical limits. Automated browser coverage is not a real-device audio certification.

See the [changelog](../changelog/) for the 0.1.0 scope and [capabilities](../capabilities/) for the precise behavior.
