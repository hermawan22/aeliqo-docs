# Capabilities and release status

**0.1.0 is live. 0.2 is forthcoming; its provider connection and production acceptance are pending.** The table below preserves the deployed release behavior.

| Capability                  | 0.1.0 behavior                                                                  |
| --------------------------- | ------------------------------------------------------------------------------- |
| Song playback               | Original, procedurally synthesized instrumentals, scheduled by Web Audio        |
| Duet partner                | Arranged synthetic vowel stems with partner timbre choices                      |
| Lyrics                      | Authored original lyrics synchronized with the session clock and assigned parts |
| Mixing                      | Separate instrumental and partner volume controls                               |
| Microphone                  | Explicit opt-in capture and live activity visualization                         |
| Pitch guide                 | Basic local pitch estimates when a stable voice is detectable                   |
| Recording                   | Opt-in mixed recording, replay, download, and deletion in the browser session   |
| Jam Together                | Deterministic accompaniment; no reactive improvisation                          |
| Get Better                  | Optional practice feedback; no medical or professional voice assessment         |
| Contextual assistance       | Unavailable; provider integrations are planned                                  |
| Accounts and saved progress | Not included                                                                    |
| Cloud recordings            | Not included                                                                    |
| Live generative singing     | Not included                                                                    |
| Commercial song catalog     | Not included                                                                    |

## What “partner” means here

The 0.1.0 partner is an audible arranged part made from original synthesis. It gives the song a second musical voice. Choosing a timbre changes its sonic color; it does not impersonate a real singer. The lyrics guide the human performer, while the partner sings vowel tones rather than generated language.

## Original music and provenance

**Violet Hour** (A minor, 100 BPM, 38.4 seconds) and **Paper Moons** (C major, 80 BPM, 48 seconds) are original demos. Their procedural stems, lyrics, timing, and arranged synthetic vowel parts are dedicated under CC0 in the application provenance manifest. The application repository maintains an asset provenance manifest describing sources, licensing, attribution, and generation. No commercial backing tracks, scraped lyrics, or celebrity voice clones are included.

## Useful limits

Pitch feedback can fluctuate with noise, overlapping sound, vibrato, and unvoiced consonants. It is most useful with headphones and a held vowel. The app does not score your worth as a singer or diagnose vocal problems.

Recordings are session-local and are not automatically saved. Export a take before leaving if you want to keep it. Browser recording formats differ, so a downloaded take may need a compatible player.

## Forthcoming in 0.2

- **Six original genres:** Synth-pop (Violet Hour), Lo-fi (Paper Moons), Acoustic (Sunlit Strings), Funk (Pocket Sparks), Latin (Tidal Steps), and Waltz (Velvet Waltz). All instruments are synthesized; genre names do not imply recorded acoustic instruments or a commercial catalog.
- **Five separate instrumental stems per song:** synth keys, synth guitar, synth bass, synth drums and synth pad. Checkboxes change the actual audio mix, alongside instrumental and partner volume controls. Genre filters and search help choose a song before playback.
- **Local target-note comparison:** the current score note is compared with measured microphone frequency during the user's solo turns. Three stable measurements are required before showing match, sharp or flat feedback. Periodicity is a signal-quality indicator, not an AI probability. Silence, clipping, uncertain input, rests, note edges and partner/together turns remain neutral.
- **Explicit octave choice:** original melody, one octave lower or one octave higher. An octave mistake is not automatically folded into a correct note. A reference-tone button helps hear the target while playback is paused.
- **Optional real spoken coach:** Gemini Live through a Vercel AI Gateway server proxy, with explicit consent and a private trial code. Music pauses for conversation. **Coach my last note** requests an explanation grounded in the last stable solo-note measurement and explicit octave. The coach explains exercises and answers questions; it does not automatically give spoken corrections during singing or replace local measurements with an invented vocal score.

These are forthcoming features, not a claim that 0.2 is already deployed or that live provider behavior has passed acceptance. The synthetic partner still performs arranged **ooh/ah vowels**. Displayed words are phrase prompts; word pronunciation and syllable-to-note alignment are not implemented. Live generative duet singing remains unavailable.

See [providers](../providers/) for connection limits and [privacy](../privacy/) for what leaves the device.
