# Your microphone, your choice

**0.1.0 is live and keeps audio local. The optional provider flow below is forthcoming in 0.2; production acceptance is pending.** Microphone permission, local recording and provider transmission are separate choices.

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

## Forthcoming in 0.2: optional live coach

A private trial code and a separate consent checkbox are required before connecting. Consent covers sending questions and limited song/pitch context through the application server and **Vercel AI Gateway to Google**. Pressing **Talk to coach** starts provider voice transmission; microphone permission for local pitch feedback alone does not authorize it. Music pauses while you talk, and **Finish speaking** ends that voice turn. Provider voice detection can answer during a pause before that button is pressed.

The transmitted voice is microphone PCM, separate from the locally mixed recording. Text questions can include the chosen song, genre, tempo, session time and the last stable solo-note estimate: target note, detected note, cents difference, selected octave and measurement age. Quality and clipping are evaluated locally before a stable estimate is retained; they are not a whole-performance score. Voice turns use the fixed song setup; buffered pitch context is not sent as a second voice-turn prompt. Do not include sensitive information in a question. The spoken reply and its transcript are distinct from a transcript of your recorded performance.

Disconnecting, hiding the tab, losing the microphone or encountering a transport failure cancels the AI interaction and pending input. Each connection is limited to 60 seconds and three replies, with no automatic reconnect. These behaviors are implementation requirements under acceptance testing, not a claim of completed production verification.

Local recordings remain in browser memory and are not uploaded by the coach flow. There is no account or cloud recording library. **Local recording privacy does not mean live coach voice stays on the device.**

Provider retention and hosting logs depend on the operator's configuration and service terms. This documentation makes no exact deletion deadline or zero-retention promise for gateway/provider traffic. Review the operator's final disclosure before enabling a production provider.

The server keeps a durable SQLite budget ledger with reservation identity, timestamps, closure and accounting amounts. That accounting ledger is not a recording library or saved conversation history. Failed reservations remain charged against the owner's lifetime trial allowance; see [providers](../providers/).

Permanent provider keys belong in server environment variables. Never paste a production API key into browser code, a public issue, or this documentation repository.

## These public docs

The documentation site is static and does not request a microphone. It contains no analytics script, third-party font request, authentication, or AI request. Local search uses a generated JSON index from the same site. GitHub Pages receives ordinary page requests under its hosting terms.
