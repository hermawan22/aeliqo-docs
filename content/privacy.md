# Your microphone, your choice

**0.3.3 is live. Music, local pitch analysis and recordings run on the device.** One controlled 0.3.1 text-led teacher/correction/instrument-response trial completed through the provider. One controlled synthetic-speech exchange was independently qualified. Physical-device input remains unqualified, and bounded private-code trial admission is available, subject to consent and remaining budget. Microphone permission, local recording and provider transmission remain separate choices.

## Before you enable the microphone

Opening the page does not request microphone access. Choose **Enable microphone** to invoke the browser's permission prompt. The browser may remember your earlier choice, so it will not necessarily ask again each time.

Allowing capture lets the application analyze local amplitude and pitch. It does not opt you into recording or uploading. You can listen without microphone permission.

## While you perform

Microphone audio flows into the local Web Audio graph. Amplitude drives the visualization and an AudioWorklet supplies samples for pitch estimation. Instrumental and partner playback are mixed locally.

Local performance analysis does not send microphone audio to an AI provider. The separate coach flow requires its own consent and explicit controls. [Provider documentation](../providers/) explains the qualified text-led scope, failed voice trial and current access limits.

## Recording and retention

Recording requires a separate opt-in. MediaRecorder captures the local mix into browser memory. A completed take can be replayed, downloaded, or deleted. There is no account, cloud library, or automatic recording upload.

- **Delete** releases the in-page recording and its object URL.
- Reloading or leaving clears session-only recordings.
- **Download** creates a file on your device, subject to your device's own backup and retention settings.
- Deleting an in-page recording cannot remove an already downloaded file.

Close the session or disable capture when you are finished. The browser's microphone indicator and site controls show whether capture remains active. Revoking permission or disconnecting a microphone interrupts capture; the application should report that state explicitly.

## Provider boundary and qualified scope

The qualified trial used explicit text requests and a local held-note summary. It did not upload the practice oscillator audio: the provider received the bounded pitch context, then supplied spoken guidance and validated note choices for local playback. All three replies and the musical phrases completed, and cleanup stopped capture with DELETE 200. A separate 0.3.3 trial sent synthetic speech through the real browser capture/worklet route, without a text fallback, and received a spoken reply. Independent review qualified this single controlled synthetic-speech exchange; this does not establish physical-human/device acceptance. Bounded private-code trial admission is available, subject to consent and remaining budget.

A private trial code and a separate consent checkbox are required by the implemented connection flow. Consent covers sending questions and limited song/pitch context through the application server and **Vercel AI Gateway to Google**. Pressing **Talk to coach** starts sending microphone PCM to the application server for provider transmission; microphone permission for local pitch feedback alone does not authorize it. Music pauses while you talk, and **Finish speaking** ends that voice turn. Provider voice detection can answer during a pause before that button is pressed.

The transmitted voice is microphone PCM, separate from the locally mixed recording. Text questions can include the chosen song, genre, tempo, session time and the last stable solo-note estimate: target note, detected note, cents difference, selected octave and measurement age. Quality and clipping are evaluated locally before a stable estimate is retained; they are not a whole-performance score. Voice turns use the fixed song setup; buffered pitch context is not sent as a second voice-turn prompt. Do not include sensitive information in a question. The spoken reply and its transcript are distinct from a transcript of your recorded performance.

Disconnecting, hiding the tab, losing the microphone or encountering a transport failure cancels the AI interaction and pending input. Each connection is limited to 60 seconds and three replies, with no automatic reconnect. These are implemented safeguards, not a claim of successful application acceptance. Four historical reservations remain closed; they do not establish actual spending. One bounded text-led teaching/partner session completed; access does not refill automatically.

Local recordings remain in browser memory and are not uploaded by the coach flow. There is no account or cloud recording library. **Local recording privacy does not mean live coach voice stays on the device.**

Provider retention and hosting logs depend on the operator's configuration and service terms. This documentation makes no exact deletion deadline or zero-retention promise for gateway/provider traffic. Review the operator's provider disclosure before consenting to transmission.

The server keeps a durable SQLite budget ledger with reservation identity, timestamps, closure and accounting amounts. It is not a recording library or saved conversation history. Nine reservations are closed; original rows, the checkpoint and immutable accounting adjustments are preserved. A reviewed key-scope correction and complete multi-receipt bundle have been applied without rewriting history or discarding uncertainty margins. Application holds are distinct from the freshly checked US$0.02693550 recorded in five official receipts, including US$0.004293 for the latest voice exchange. This does not establish settled invoice finality or complete delayed-usage coverage. See [providers](../providers/#recorded-cost-and-historical-holds).

**Try exercise** measures the first example note at the selected octave without uploading practice audio. **Coach my practice** sends at most 32 recent stable observations within 30 seconds as close/above/below counts, median cents, target and octave. **Hear an exercise** and **Play a musical response** send explicit text requests and relevant bounded context; returned note actions are validated before local playback. Microphone permission alone does not authorize provider transmission. No generated sung duet is claimed.

The deployed private diagnostic summary retains fixed failure labels and a bounded tail of 16 timing events after closure, excluding audio, transcript payloads and raw provider error strings. It does not introduce a cloud recording library or a provider-retention promise.

A reviewed operator-only historical-exposure policy was applied before the latest voice trial, retaining all historical rows, known costs and uncertainty margins. After the settling interval and fresh verification of all five receipts, an immutable operator adjustment was applied to the latest voice trial, preserving its original row and own US$0.05 uncertainty margin. Runtime does not reconcile or retry automatically. The same lifetime budget remains, without reset or top-up.

Permanent provider keys belong in server environment variables. Never paste a production API key into browser code, a public issue, or this documentation repository.

## These public docs

The documentation site is static and does not request a microphone. It contains no analytics script, third-party font request, authentication, or AI request. Local search uses a generated JSON index from the same site. GitHub Pages receives ordinary page requests under its hosting terms.
