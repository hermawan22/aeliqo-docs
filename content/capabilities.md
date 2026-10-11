# Capabilities and release status

**0.2.2 is live. Experimental live AI coaching is unavailable: the fourth trial failed to qualify a reply and all four admissions are exhausted. No successful Gemini response or audible output has been verified.** Music playback, local target-note feedback and recording work independently of provider access.

| Capability                  | 0.2.2 behavior                                                                                    |
| --------------------------- | ------------------------------------------------------------------------------------------------- |
| Song playback               | Original, procedurally synthesized instrumentals, scheduled by Web Audio                          |
| Duet partner                | Arranged synthetic vowel stems with partner timbre choices                                        |
| Lyrics                      | Authored original lyrics synchronized with the session clock and assigned parts                   |
| Mixing                      | Five switchable synthesized instrumental stems plus instrumental and partner volume controls      |
| Microphone                  | Explicit opt-in capture and live activity visualization                                           |
| Pitch guide                 | Stable local target-note comparison on user solo turns, explicit octave choice and reference tone |
| Recording                   | Opt-in mixed recording, replay, download, and deletion in the browser session                     |
| Jam Together                | Deterministic accompaniment; no reactive improvisation                                            |
| Get Better                  | Optional practice feedback; no medical or professional voice assessment                           |
| Contextual assistance       | Unavailable experimental spoken-coach implementation; trial failed and allowance exhausted        |
| Accounts and saved progress | Not included                                                                                      |
| Cloud recordings            | Not included                                                                                      |
| Live generative singing     | Not included                                                                                      |
| Commercial song catalog     | Not included                                                                                      |

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
- **Experimental spoken-coach implementation, unavailable:** designed for Gemini Live through a Vercel AI Gateway server proxy, with explicit consent and a private trial code. The code pauses music for conversation and grounds text questions in the last stable solo-note measurement. No real model reply or audible coaching passed acceptance; these implemented controls are not a verified working AI feature.

The catalog and local pitch guidance are deployed. The fourth trial created a session and received HTTP acceptance for microphone bytes, but no stream event, transcript or native output was observed before a 15-second timeout. HTTP acceptance does not establish upstream forwarding. All four lifetime holds are closed, totaling US$1.00 in application reservations, not a provider invoice. A fifth admission is blocked; no reset, refund, top-up, replacement key or further provider call is authorized under the exhausted trial. The synthetic partner still performs arranged **ooh/ah vowels**. Displayed words are phrase prompts; word pronunciation and syllable-to-note alignment are not implemented. Live generative duet singing remains unavailable.

See [providers](../providers/) for connection limits and [privacy](../privacy/) for what leaves the device.
