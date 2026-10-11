# Your microphone, your choice

**0.2.1 is live. Music, pitch analysis and recordings run locally. Experimental live AI coaching is unavailable after a failed production trial and exhaustion of its three-session allowance.** Microphone permission, local recording and provider transmission are separate choices.

## Before you enable the microphone

Opening the page does not request microphone access. Choose **Enable microphone** to invoke the browser's permission prompt. The browser may remember your earlier choice, so it will not necessarily ask again each time.

Allowing capture lets the application analyze local amplitude and pitch. It does not opt you into recording or uploading. You can listen without microphone permission.

## While you perform

Microphone audio flows into the local Web Audio graph. Amplitude drives the visualization and an AudioWorklet supplies samples for pitch estimation. Instrumental and partner playback are mixed locally.

Local performance analysis does not send microphone audio to an AI provider. The separate coach flow requires its own consent and explicit controls. [Provider documentation](../providers/) explains the failed trial and current unavailability.

## Recording and retention

Recording requires a separate opt-in. MediaRecorder captures the local mix into browser memory. A completed take can be replayed, downloaded, or deleted. There is no account, cloud library, or automatic recording upload.

- **Delete** releases the in-page recording and its object URL.
- Reloading or leaving clears session-only recordings.
- **Download** creates a file on your device, subject to your device's own backup and retention settings.
- Deleting an in-page recording cannot remove an already downloaded file.

Close the session or disable capture when you are finished. The browser's microphone indicator and site controls show whether capture remains active. Revoking permission or disconnecting a microphone interrupts capture; the application should report that state explicitly.

## Experimental live coach boundary: currently unavailable

The production trial failed before Connected, with no observed stream events, transcripts, microphone input or spoken output. No successful provider exchange has been verified. The following describes the implemented transmission boundary, not an available service.

A private trial code and a separate consent checkbox are required by the implemented connection flow. Consent covers sending questions and limited song/pitch context through the application server and **Vercel AI Gateway to Google**. Pressing **Talk to coach** starts provider voice transmission; microphone permission for local pitch feedback alone does not authorize it. Music pauses while you talk, and **Finish speaking** ends that voice turn. Provider voice detection can answer during a pause before that button is pressed.

The transmitted voice is microphone PCM, separate from the locally mixed recording. Text questions can include the chosen song, genre, tempo, session time and the last stable solo-note estimate: target note, detected note, cents difference, selected octave and measurement age. Quality and clipping are evaluated locally before a stable estimate is retained; they are not a whole-performance score. Voice turns use the fixed song setup; buffered pitch context is not sent as a second voice-turn prompt. Do not include sensitive information in a question. The spoken reply and its transcript are distinct from a transcript of your recorded performance.

Disconnecting, hiding the tab, losing the microphone or encountering a transport failure cancels the AI interaction and pending input. Each connection is limited to 60 seconds and three replies, with no automatic reconnect. These are implemented safeguards, not a claim of successful real-provider acceptance. The closed trial cannot be retried or refilled.

Local recordings remain in browser memory and are not uploaded by the coach flow. There is no account or cloud recording library. **Local recording privacy does not mean live coach voice stays on the device.**

Provider retention and hosting logs depend on the operator's configuration and service terms. This documentation makes no exact deletion deadline or zero-retention promise for gateway/provider traffic. Review the operator's provider disclosure before consenting to transmission.

The server keeps a durable SQLite budget ledger with reservation identity, timestamps, closure and accounting amounts. That accounting ledger is not a recording library or saved conversation history. All three closed reservations retain US$0.75 in application holds against the owner's lifetime trial allowance. This accounting does not establish the provider invoice; see [providers](../providers/).

Permanent provider keys belong in server environment variables. Never paste a production API key into browser code, a public issue, or this documentation repository.

## These public docs

The documentation site is static and does not request a microphone. It contains no analytics script, third-party font request, authentication, or AI request. Local search uses a generated JSON index from the same site. GitHub Pages receives ordinary page requests under its hosting terms.
