# Your first session

A song, a partner, and a little space for your voice. **These first steps describe live 0.1.0. The 0.2 additions below are forthcoming and not yet accepted in production.**

## 1. Prepare your sound

Use headphones to keep the backing track out of your microphone. Start at a comfortable volume. Open Aeliqo in a browser tab on HTTPS, or use localhost when developing. Check [browser requirements](../requirements/) before troubleshooting a device.

Open [Aeliqo](https://aeliqo.com/) to start. The music application is live on HTTPS; `www.aeliqo.com` redirects to the same application.

## 2. Choose your stage

Select **Sing Together**, choose an original demo song, and choose an available partner timbre. The partner part is an arranged synthetic vowel performance. Its role is to give you a duet texture; it does not pronounce every lyric or react as a live singer.

Lyrics follow the song clock and identify assigned parts. Follow your assigned lines and listen when the partner has the lead.

## 3. Enable your microphone

Choose **Enable microphone**, then allow access in the browser prompt. This explicit action is the point where capture begins. Permission alone does not start a recording.

If you decline, you can still listen to the accompaniment. [Permission help](../troubleshooting/#microphone-permission-is-denied) explains how to change your mind. You can stop microphone access from the application or the browser's site controls.

## 4. Start and find your balance

Choose **Start session**. Playback must start from your interaction because browsers restrict automatic audio. Use **Instrumental volume** and **Partner volume** to balance the two parts. Try a low partner level if you want to lead.

The live visual responds to actual audio activity. Optional pitch feedback needs a clear, sustained voice. Background music, noise, and breathy sounds can confuse it.

Use **Pause** and **Resume** during a session. **End session** finishes it. Changing a song starts a new context rather than moving an old recording to a different track.

## 5. Keep a take if you want one

Choose **Record this session** before your performance. Recording is opt-in and captures the microphone mixed with the instrumental and partner parts. A browser must support a usable MediaRecorder format for recording to be available.

At the end, replay the take, download it to your device, or delete it. Downloaded files are yours to manage; deleting the in-page take does not erase a copy you saved elsewhere. Leaving or reloading the page discards session-only audio.

## Try another mode

**Jam Together** offers deterministic accompaniment for an open-ended session. **Get Better** brings the optional pitch guide forward. Neither requires an account or an AI provider connection.

## Forthcoming in 0.2: build your mix and find your note

Search by title, genre or key, or filter the six original genres before starting. Choose the song, then toggle its five synthesized instrumental layers: keys, guitar, bass, drums and pad. These switches mute real stems; the instrumental volume still controls their combined level.

Choose your singing octave explicitly: original melody, one octave lower or one octave higher. While paused, **Hear target** plays a reference tone. During your solo phrase, hold a comfortable vowel and watch the target, detected steady note and sharp/flat difference. The guide waits for stable input and does not grade silence, clipping, uncertain sound, note boundaries or partner/together turns. Headphones improve isolation.

The partner sings arranged vowels. Words on screen are phrase prompts, without validated syllable alignment; the app does not generate a partner singing those words live.

## Forthcoming in 0.2: talk with a real coach

The optional Gemini spoken coach is a limited private owner trial. The dedicated gateway credential is provisioned; provider acceptance and deployment are pending. If available, enter the private trial code, read the provider-transmission consent and choose **Connect live coach**. Permission to use a microphone for local feedback is separate from this consent.

Choose **Talk to coach** to transmit your microphone through Vercel AI Gateway to Google; music pauses while you speak. Choose **Finish speaking** to end the voice turn; the provider can also detect a pause and answer before you press it. Choose **Coach my last note** for guidance based on the last stable solo-note estimate, or ask a text question about a phrase or exercise. The estimate includes its selected octave and age; it does not describe the whole performance. Each connection is limited to 60 seconds and three replies. There are no automatic reconnects, retries or top-ups. **Disconnect AI** ends the connection; hiding the tab or losing the microphone also cancels it.

The spoken model provides guidance. Local target-note analysis provides measured pitch feedback. This is not a live AI singing duet. Read [privacy](../privacy/) and [provider limits](../providers/) before opting in.
