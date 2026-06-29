# CrAlSim (Cryptography Algorithms Simulator)

CrAlSim is a browser-based (static) educational web project that lets you **visualize and interact with multiple cryptography algorithms**. The app provides UI-driven pages for algorithms and includes step-by-step “simulator” views for understanding how encryption/decryption transforms data.

## Features

- **Home / Introduction / Algorithms / Help / Feedback** navigation (single-page layout)
- **Multiple algorithm modules**, each loaded dynamically into the main UI
- **Interactive encrypt/decrypt tools** (client-side JavaScript)
- **Algorithm simulators / round-by-round visualizations** (notably implemented for AES)

## Supported Algorithms (modules in this repo)

From the project structure (HTML loaders and JS files), the following modules exist:

- **Additive cipher** (`Additive.html`, `Additive.js`)
- **Multiplicative cipher** (`Multiplicative.html`, `Multiplicative.js`)
- **Affine cipher** (`Affine.html`, `Affine.js`)
- **AES block cipher** (`AES.html`, `AES.js`) 
  - Includes round transformations (SubBytes, ShiftRows, MixColumns, AddRoundKey)
  - Includes a decryption path as well
  - Includes an AES “simulator” UI that highlights the internal state
- **RSA** (`RSA.html`, `RSA.js`)
  - (Module exists; simulator details are implemented in its JS)

> Note: DES is present as an HTML/CSS/JS module name in the repository, but the current `Algorithm.html` tab configuration loads AES + RSA + the classical ciphers shown above.

## How to Run

Because this is a static front-end project, you can run it by opening the main entry page:

1. Open **`Index.html`** in a browser.
2. Use the navigation to go to **Algorithms**.
3. Select an algorithm module.

### Recommended: local web server
Some browsers block or limit features (like module/script loading or embedded resources) when opened via `file://`. Running through a local server avoids that.

## Project Structure (high level)

- `Index.html` - main UI shell; loads `Home.html`, `Algorithm.html`, `Help.html`, `Feedback.html`.
- `Algorithm.html` - tabs for algorithm modules; loads algorithm pages like `AES.html`, `RSA.html`, etc.
- `*.html` - per-page markup for each algorithm and simulator UI.
- `*.js` - per-algorithm logic (encryption/decryption and simulator steps).
- `*.css` - styling for the UI.
- Images used by simulators (e.g., `XorImage.jpg`, `encDec.png`, `simulatorImage.png`, etc.).

## AES Simulator (what to expect)

The AES module (`AES.html` + `AES.js`) includes:

- Input fields:
  - 128-bit key (expected 16 characters)
  - Plaintext and Ciphertext
- Core AES operations:
  - Key expansion (round keys)
  - Round transformations:
    - SubBytes
    - ShiftRows
    - MixColumns
    - AddRoundKey
- Decryption flow:
  - Inverse SubBytes
  - Inverse ShiftRows
  - Inverse MixColumns
  - AddRoundKey
- A “Next / Skip / Reset” step control to traverse the simulator states.

## Limitations / Notes

- This project runs **entirely in the browser** (no backend).
- Input validation is implemented per-module (AES checks for key length and basic input presence).
- Algorithm correctness and UX may vary by module, since each algorithm is implemented independently.

## License

Not specified in the repository. Add a LICENSE file if you want formal licensing.

