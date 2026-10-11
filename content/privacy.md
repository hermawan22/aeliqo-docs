# Your microphone, your choice

Local audio first. Clear consent before capture.

## Before you enable the microphone

Opening the page does not request microphone access. Choose **Enable microphone** to invoke the browser's permission prompt. The browser may remember your earlier choice, so it will not necessarily ask again each time.

Allowing capture lets the application analyze local amplitude and pitch. It does not opt you into recording or uploading. You can listen without microphone permission.

## While you perform

Microphone audio flows into the local Web Audio graph. Amplitude drives the visualization and an AudioWorklet supplies samples for pitch estimation. Instrumental and partner playback are mixed locally.

The first release does not send microphone streams or recorded audio to an AI provider. Provider-backed assistance is unavailable in 0.1.0. [Provider documentation](../providers/) explains this boundary.

## Recording and retention

Recording requires a separate opt-in. MediaRecorder captures the local mix into browser memory. A completed take can be replayed, downloaded, or deleted. There is no account, cloud library, or automatic upload in 0.1.0.

- **Delete** releases the in-page recording and its object URL.
- Reloading or leaving clears session-only recordings.
- **Download** creates a file on your device, subject to your device's own backup and retention settings.
- Deleting an in-page recording cannot remove an already downloaded file.

Close the session or disable capture when you are finished. The browser's microphone indicator and site controls show whether capture remains active. Revoking permission or disconnecting a microphone interrupts capture; the application should report that state explicitly.

## Optional AI requests

A future configured text provider would send a prompt and supplied session context through the application server. Do not put sensitive personal information into a prompt. Provider retention and hosting logs depend on the operator's configuration and the chosen provider's terms. No provider-backed privacy promise is implied by the local audio behavior.

Permanent provider keys belong in server environment variables. Never paste a production API key into browser code, a public issue, or this documentation repository.

## These public docs

The documentation site is static and does not request a microphone. It contains no analytics script, third-party font request, authentication, or AI request. Local search uses a generated JSON index from the same site. GitHub Pages receives ordinary page requests under its hosting terms.
