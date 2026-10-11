# Capabilities and release status

**0.3.3 is live. A spoken teacher, measured-note correction and AI-directed local musical response completed one controlled production trial.** The qualified flow was tested on 0.3.1 using explicit text-led requests and local pitch measurements. One controlled synthetic-speech exchange on 0.3.3 was independently qualified. Physical-device performance and generated sung duets remain unqualified. Bounded private-code AI trial admission is available, subject to consent and remaining budget; music playback, local pitch and recording remain usable.

| Capability                  | 0.3.3 behavior                                                                                                    |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Song playback               | Original, procedurally synthesized instrumentals, scheduled by Web Audio                                          |
| Duet partner                | Arranged synthetic vowel stems with partner timbre choices                                                        |
| Lyrics                      | Authored original lyrics synchronized with the session clock and assigned parts                                   |
| Mixing                      | Five switchable synthesized instrumental stems plus instrumental and partner volume controls                      |
| Microphone                  | Explicit opt-in capture and live activity visualization                                                           |
| Pitch guide                 | Stable local target-note comparison on user solo turns, explicit octave choice and reference tone                 |
| Recording                   | Opt-in mixed recording, replay, download, and deletion in the browser session                                     |
| AI partner                  | Deterministic backing plus a qualified bounded model-directed local instrument response                           |
| AI teacher                  | Local pitch guidance plus a qualified bounded spoken exercise/correction flow                                     |
| Contextual assistance       | One text-led musical session and one synthetic voice exchange completed; synthetic speech independently qualified |
| Accounts and saved progress | Not included                                                                                                      |
| Cloud recordings            | Not included                                                                                                      |
| Live generative singing     | Not included                                                                                                      |
| Commercial song catalog     | Not included                                                                                                      |

## What “partner” means here

The partner is an audible arranged part made from original synthesis. It gives the song a second musical voice. Choosing a timbre changes its sonic color; it does not impersonate a real singer. The lyrics guide the human performer, while the partner sings vowel tones rather than generated language.

## Original music and provenance

**Violet Hour** (A minor, 100 BPM, 38.4 seconds) and **Paper Moons** (C major, 80 BPM, 48 seconds) are the two original release demos, now joined by Sunlit Strings, Pocket Sparks, Tidal Steps and Velvet Waltz. Their procedural stems, lyrics, timing, and arranged synthetic vowel parts are dedicated under CC0 in the application provenance manifest. The application repository maintains an asset provenance manifest describing sources, licensing, attribution, and generation. No commercial backing tracks, scraped lyrics, or celebrity voice clones are included.

## Useful limits

Pitch feedback can fluctuate with noise, overlapping sound, vibrato, and unvoiced consonants. It is most useful with headphones and a held vowel. The app does not score your worth as a singer or diagnose vocal problems.

Recordings are session-local and are not automatically saved. Export a take before leaving if you want to keep it. Browser recording formats differ, so a downloaded take may need a compatible player.

## Current music and local coaching

- **Six original genres:** Synth-pop (Violet Hour), Lo-fi (Paper Moons), Acoustic (Sunlit Strings), Funk (Pocket Sparks), Latin (Tidal Steps), and Waltz (Velvet Waltz). All instruments are synthesized; genre names do not imply recorded acoustic instruments or a commercial catalog.
- **Five separate instrumental stems per song:** synth keys, synth guitar, synth bass, synth drums and synth pad. Checkboxes change the actual audio mix, alongside instrumental and partner volume controls. Genre filters and search help choose a song before playback.
- **Local target-note comparison:** the current score note is compared with measured microphone frequency during the user's solo turns. Three stable measurements are required before showing match, sharp or flat feedback. Periodicity is a signal-quality indicator, not an AI probability. Silence, clipping, uncertain input, rests, note edges and partner/together turns remain neutral.
- **Explicit octave choice:** original melody, one octave lower or one octave higher. An octave mistake is not automatically folded into a correct note. A reference-tone button helps hear the target while playback is paused.
- **Bounded spoken teacher and musical partner:** Gemini through a Vercel AI Gateway server proxy, with explicit consent and a private trial code. One actual text-led production trial completed an AI-selected exercise, a correction matching locally measured flat pitch and an AI-selected instrumental response. One controlled synthetic-speech exchange on 0.3.3 was independently qualified. This is owner-trial evidence, not an unrestricted available service.

The catalog and local pitch guidance work independently of AI access. The arranged synthetic partner performs **ooh/ah vowels**. Displayed words are phrase prompts; word pronunciation and syllable-to-note alignment are not implemented. Live generative duet singing remains unavailable. Provider receipts, reservation holds and lifetime spending are distinct; see [provider accounting](../providers/#recorded-cost-and-historical-holds).

## Qualified text-led musical flow and its limits

The teacher selected A4/C5 at 100 BPM. Local held-note analysis then supplied four stable A4 observations at octave zero, median −49.95 cents. The spoken correction consistently identified the note as flat, advised aiming higher and invited another attempt. The partner responded with an ascending A4/B4/C5 phrase. The browser produced measured post-gain sound for both phrases even with arranged vocals muted; both playback acknowledgements succeeded, all five instrument notes and all three spoken replies completed naturally.

This qualifies spoken teaching grounded in measured data and model-directed local instrument call and response. One separate controlled synthetic-speech exchange on 0.3.3 was independently qualified. Physical-device singing and generated vocal lyrics remain unqualified. The earlier intermittent second-turn failure remains unresolved; one successful trial is not evidence of its cause or a general reliability guarantee. Bounded private-code trial admission is available, subject to consent and remaining budget.

Automated unit/browser tests and offline native pitch/audio checks remain separate supporting evidence; their provider interactions are mocked and do not replace the actual trial.

The exercise measures only its first held note, with an explicit octave. Its summary retains at most 32 stable observations from the last 30 seconds, including close/above/below counts and median cents. The teacher receives this bounded context on **Coach my practice**; local practice audio stays on the device. Instrumental volume controls the actual example/response instrument bus independently of the arranged partner-vocal volume.

See [providers](../providers/) for connection limits and [privacy](../privacy/) for what leaves the device.
