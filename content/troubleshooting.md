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

That is the current design: 0.2.2 uses an arranged synthetic vowel part. Lyrics are authored cues for the human performer and identify each role. This release does not include a speech-to-singing or unrestricted generative voice service.

## AI assistance is unavailable

Live AI coaching is currently unavailable. The fourth trial created a session and received HTTP acceptance for microphone input, but no stream event, transcript or native audio reply was observed before a 15-second timeout. HTTP acceptance does not prove forwarding to the provider; the silent-reply cause and stream-first-byte behavior remain unresolved.

All four lifetime reservations are closed, retaining US$1.00 in application holds. These are not a provider invoice or proof that US$1 was spent. The same US$1 lifetime, Refresh Never key remains, and a dashboard displaying unused funds does not permit another attempt. A fifth admission is blocked. No reset, refund, top-up, replacement key or further provider call is authorized under the exhausted trial. Local music and pitch guidance remain available; do not troubleshoot this unavailable AI service as a microphone problem. See [providers](../providers/) for the closed-trial status.

## A session stops after a call or device change

Return to the browser, reconnect the intended device, and use **Resume** or enable the microphone again. Browsers may revoke or end the stream. A completed take can be kept, but an interrupted capture cannot reconstruct audio that was never recorded.

## Report a reproducible issue

Use the support channel supplied by your application operator. Include the product version, browser and operating-system versions, mode, steps, expected behavior, and visible error. Avoid sharing recordings or sensitive prompts unless you intentionally consent to share them. Documentation-only corrections can be reported in the [public docs repository](https://github.com/hermawan22/aeliqo-docs/issues).
