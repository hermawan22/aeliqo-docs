# Find your way back to the music

Start with the smallest check that matches what you hear or see.

## Microphone permission is denied

You can keep listening. To sing with live feedback, open the browser's site permissions and allow microphone access, then choose **Enable microphone** again. A browser-level denial may also require operating-system permission for the browser.

Check that the page uses HTTPS or localhost and is open in a full browser rather than a restricted in-app webview. The docs site itself never asks for microphone access.

## The microphone is allowed, but nothing moves

Speak or sing a sustained vowel. Check the system input device, input level, mute switch, and browser microphone selection. Close another application that may be holding exclusive access to the device. Reconnect the microphone and enable it again if it was unplugged.

A missing pitch estimate does not necessarily mean capture failed. Noisy, quiet, breathy, or unvoiced sounds may not produce a stable note.

## I cannot hear the song

Use **Start session** or **Resume** from a click or tap. Check device volume, browser-tab mute, the output device, and both mix controls. Browsers can suspend audio after a screen lock or interruption.

If a Bluetooth device changed routes, reconnect it and restart the session. Wired headphones help distinguish routing problems from wireless delay.

## The recording is silent or unavailable

Recording is opt-in; choose **Record this session** before performing. Check that capture was active and mix volumes were audible. A browser without a compatible MediaRecorder format should explain that recording is unavailable.

Finish the take before replaying it. If a downloaded file will not open, try a player that supports its actual browser-selected format. Do not rename its extension and assume it has been converted.

## Lyrics or singing feel late

Headphones reduce the backing track re-entering the microphone. Bluetooth, hardware buffering, and device processing introduce delay. The lyrics use the song clock; pitch feedback and visuals have analysis/rendering delay. The release does not provide device latency calibration.

Pause and resume after an interruption. If the state remains inconsistent, end the session and start again. Export an existing take before reloading the page.

## The partner does not pronounce the lyrics

The arranged backing part in 0.3.3 uses an arranged synthetic vowel part. Lyrics are authored cues for the human performer and identify each role. This release does not include a speech-to-singing or unrestricted generative voice service.

## AI assistance is unavailable

One bounded 0.3.1 text-led trial completed a real exercise, a correction matching locally measured flat pitch and a responsive local instrument phrase. Bounded private-code trial admission is available, subject to consent and remaining budget; visible controls do not promise unrestricted ongoing access. One controlled synthetic-speech exchange on 0.3.3 was independently qualified; physical-device singing remains unqualified. Do not repeat provider calls as a troubleshooting step without separately authorized access.

The earlier intermittent second-turn failure remains unresolved. A later successful trial does not establish its cause or guarantee that it cannot recur. Local music and pitch guidance remain available. Nine closed reservations and their accounting history are preserved. The earlier 0.3.2 voice trial received no reply despite valid input; a later 0.3.3 synthetic speech exchange completed. The intermittent cause remains unresolved; independent review qualified only this one controlled synthetic-speech exchange. An unindexed cost is unknown, not zero. Five official receipts currently record US$0.02693550, including US$0.004293 for the latest voice exchange. This freshly rechecked total is not settled invoice finality or proof that US$1 was spent. The same lifetime US$1 key remains unchanged, without reset or top-up. See [providers](../providers/).

## An exercise or response is silent

The text-led flow completed one controlled trial on 0.3.1; current access requires the private trial code, consent and sufficient remaining budget. Check device/tab volume and **Instrumental** volume: local exercise and response notes use the instrument bus, independently of the arranged **Partner** vocal level. A cancelled response after a song change, disconnect or hidden tab should stop rather than resume stale notes. Do not repeat provider requests to diagnose missing sound without available authorized access.

**Try exercise** compares only the example's first note at the selected octave. Sing a steady vowel with headphones; uncertain or clipped sound stays neutral. Recent summary observations expire after 30 seconds, and changing the attempt or target clears the relevant practice scope. No observation means there is no measured practice evidence to send; it is not a zero performance score.

## A session stops after a call or device change

Return to the browser, reconnect the intended device, and use **Resume** or enable the microphone again. Browsers may revoke or end the stream. A completed take can be kept, but an interrupted capture cannot reconstruct audio that was never recorded.

## Report a reproducible issue

Use the support channel supplied by your application operator. Include the product version, browser and operating-system versions, mode, steps, expected behavior, and visible error. Avoid sharing recordings or sensitive prompts unless you intentionally consent to share them. Documentation-only corrections can be reported in the [public docs repository](https://github.com/hermawan22/aeliqo-docs/issues).
