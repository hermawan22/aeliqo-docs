# Your music. Your stage. Your practice.

Sing together. Play together. Make every session yours.

Aeliqo is a music companion built around performing, not navigating a dashboard. Start with an original song, hear your arranged partner part, and make room for your own voice. No account is required for the first session.

## A playable music companion

Version **0.3.3** retains six original genre arrangements, five switchable synthesized instrumental stems per song, and three ways to spend time with music:

- **Karaoke** — perform with an original instrumental, synchronized lyrics, and an arranged synthetic vowel duet part.
- **AI partner** — play or sing over deterministic accompaniment with arranged vocals initially muted, and use the experimental musical-response controls. The model can choose a short response to your measured practice; backing playback alone does not improvise in response to you.
- **AI teacher** — compare stable microphone pitch with the authored solo melody, choose your octave and hear a reference tone. The experimental teacher adds exercise and correction controls, whose exercise and measured correction completed a controlled real-provider trial. Local measurements stay neutral when uncertain; this is not a professional vocal assessment.

The arranged vowel partner does **not** sing arbitrary lyrics, clone a voice or generate a live vocal response. Version 0.3.3 is live. **A spoken teacher and AI-directed instrument partner completed a controlled production trial.** In the 0.3.1 trial, the teacher chose an A4/C5 exercise, corrected a locally measured flat A4, and answered with an ascending A4/B4/C5 instrument phrase. All three spoken replies and both local musical phrases completed. This is model-directed local synthesis, not generated singing.

## Learn, try and answer with music

The implemented flow is **Hear an exercise → Try exercise → Coach my practice → Play a musical response**. Hold the exercise's first note at a chosen octave; local analysis measures your pitch. On your explicit request, the teacher receives a recent bounded summary and gives a spoken correction. The partner can then choose a short instrumental answer that your browser plays.

Qualification covers one controlled, text-led three-turn trial using real local pitch and audio playback. One controlled synthetic-speech exchange on 0.3.3 was independently qualified. Physical-device performance and generated sung lyrics remain unqualified. One successful trial does not establish an ongoing reliable service or explain an earlier intermittent failure. **Bounded AI trial admission is available with the private code, consent and remaining budget.** Local music and pitch guidance remain usable without provider access. Read [provider status and limits](providers/).

## Make your first session

[Get started](getting-started/) with headphones and a quiet place to sing. You can listen before enabling your microphone, adjust the balance, and choose whether to record.

Local pitch analysis processes microphone audio on your device. The experimental coach flow requires separate consent and an explicit Talk action for voice transmission. Recordings stay in the browser session until you download or delete them. [Read about permissions and privacy](privacy/).

## Where to go next

- [Capabilities](capabilities/) describes what works and what is outside this release.
- [Browser requirements](requirements/) helps you prepare your device.
- [Troubleshooting](troubleshooting/) covers permissions, silence, and interrupted sessions.
- [Architecture](architecture/) explains the boundaries for maintainers.

## A new Aeliqo

This music product is independent of the former Aeliqo adaptive UI framework. That framework is being separated as **Varendo**. The music application does not depend on the framework or its `@aeliqo/*` packages. Historical framework versions and package records are separate from this music product's version history.
