# Browser and microphone requirements

Aeliqo uses your browser as a small audio stage.

## Required platform features

The music experience needs JavaScript and the **Web Audio API**. Microphone capture needs `navigator.mediaDevices.getUserMedia` on a secure origin: HTTPS or localhost. Live pitch analysis uses **AudioWorklet** where available. Recording needs **MediaRecorder** and a supported audio MIME type.

Feature availability is checked at runtime. A missing microphone or recording capability should produce a clear explanation rather than a successful-looking control.

## Browser coverage

Modern Chrome, Firefox, and Safari are the intended browser families. Automated browser engines can verify UI behavior, permission flows, and scheduling, but they do not establish real-device audio quality. Mobile browser audio routing, Bluetooth latency, and operating-system interruptions require device testing before a supported-device claim can be made.

Use an updated browser. In-app browsers and embedded webviews may limit microphone capture or playback. Open the site in the device's full browser if capture fails.

## Recommended setup

- Headphones, preferably wired, to reduce echo and wireless delay.
- A built-in, USB, or headset microphone selected in the browser's site settings.
- A quiet room and a moderate output volume.
- A foreground tab with the device awake during a performance.

Aeliqo does not calibrate your hardware latency. Avoid relying on it for studio timing or precise vocal measurement.

## Autoplay and interruptions

Start audio with the session control. A browser may suspend its audio context when a page loses focus, the screen locks, a phone call arrives, or an output device changes. Return to the tab and use **Resume**. If the device is no longer available, reconnect it and enable the microphone again.

## Accessibility

Controls have text labels and visible keyboard focus. The interface supports small screens and reduced motion preferences. Lyrics remain text rather than being conveyed only through animation. No sound is required to read these docs. Pitch and audio feedback supplement the experience; they are not the only way to operate controls.
