# Your music. Your stage. Your AI partner.

Sing together. Play together. Make every session yours.

Aeliqo is a music companion built around performing, not navigating a dashboard. Start with an original song, hear your arranged partner part, and make room for your own voice. No account is required for the first session.

## A small, playable first release

Version **0.1.0** brings three ways to spend time with music:

- **Sing Together** — perform with an original instrumental, synchronized lyrics, and an arranged synthetic vowel duet part.
- **Jam Together** — play or sing over deterministic accompaniment. The pattern is scheduled ahead; it does not improvise in response to you.
- **Get Better** — use optional pitch feedback while practicing. Feedback is a rough signal, not a vocal assessment.

The partner's sound is synthesized and arranged. It does **not** sing arbitrary lyrics, clone a voice, or generate a live vocal response. Aeliqo's AI-native direction reserves a separate boundary for future contextual assistance; music remains usable without it.

## Make your first session

[Get started](getting-started/) with headphones and a quiet place to sing. You can listen before enabling your microphone, adjust the balance, and choose whether to record.

Your microphone audio is processed locally. Recordings stay in the browser session until you download or delete them. [Read about permissions and privacy](privacy/).

## Where to go next

- [Capabilities](capabilities/) describes what works and what is outside this release.
- [Browser requirements](requirements/) helps you prepare your device.
- [Troubleshooting](troubleshooting/) covers permissions, silence, and interrupted sessions.
- [Architecture](architecture/) explains the boundaries for maintainers.

## A new Aeliqo

This music product is independent of the former Aeliqo adaptive UI framework. That framework is being separated as **Varendo**. The music application does not depend on the framework or its `@aeliqo/*` packages. Historical framework versions and package records are separate from this product's 0.1.0 version.
