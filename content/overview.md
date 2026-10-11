# Your music. Your stage. Your practice.

Sing together. Play together. Make every session yours.

Aeliqo is a music companion built around performing, not navigating a dashboard. Start with an original song, hear your arranged partner part, and make room for your own voice. No account is required for the first session.

## A playable music companion

Version **0.2.1** brings six original genre arrangements, five switchable synthesized instrumental stems per song, and three ways to spend time with music:

- **Sing Together** — perform with an original instrumental, synchronized lyrics, and an arranged synthetic vowel duet part.
- **Jam Together** — play or sing over deterministic accompaniment. The pattern is scheduled ahead; it does not improvise in response to you.
- **Get Better** — compare stable microphone pitch with the authored solo melody, choose your octave and hear a reference tone. Uncertain measurements stay neutral; this is not a professional vocal assessment.

The partner's sound is synthesized and arranged. It does **not** sing arbitrary lyrics, clone a voice, or generate a live vocal response. Experimental Gemini spoken-coach code is included, but **live AI coaching is unavailable**. The production trial failed before connecting, no Gemini response was verified, and its three-session allowance is exhausted. Immediate pitch guidance comes from local measurements; it does not depend on a model. Read [provider status and limits](providers/).

## Make your first session

[Get started](getting-started/) with headphones and a quiet place to sing. You can listen before enabling your microphone, adjust the balance, and choose whether to record.

Local pitch analysis processes microphone audio on your device. The unavailable experimental coach flow requires separate consent and an explicit Talk action for voice transmission. Recordings stay in the browser session until you download or delete them. [Read about permissions and privacy](privacy/).

## Where to go next

- [Capabilities](capabilities/) describes what works and what is outside this release.
- [Browser requirements](requirements/) helps you prepare your device.
- [Troubleshooting](troubleshooting/) covers permissions, silence, and interrupted sessions.
- [Architecture](architecture/) explains the boundaries for maintainers.

## A new Aeliqo

This music product is independent of the former Aeliqo adaptive UI framework. That framework is being separated as **Varendo**. The music application does not depend on the framework or its `@aeliqo/*` packages. Historical framework versions and package records are separate from this music product's version history.
