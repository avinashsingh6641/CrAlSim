# CrAlSim — Cryptography Algorithms Simulator

**CrAlSim** is a browser-based educational simulator for common cryptography algorithms. It provides interactive pages where you can encrypt/decrypt messages and (for some algorithms) step through internal transformations like keys, intermediate states, and rounds.

This repository is a **front-end (HTML/CSS/JavaScript)** project—there are no server-side components.

---

## Live entry point

Open:
- `Index.html`

The UI is a single-page style navigation where content for Home/Introduction/Algorithms/Help/Feedback is loaded dynamically.

---

## Algorithms included

From the project structure and UI:

### 1) Additive cipher (monoalphabetic)
Files:
- `Additive.html`, `Additive.js`, `Additive.css`

Implements interactive encryption, decryption, and step tables.

### 2) Multiplicative cipher (monoalphabetic)
Files:
- `Multiplicative.html`, `Multiplicative.js`, `Multiplicative.css`

Supports encryption/decryption using a multiplicative key (with modular inverse logic).

### 3) Affine cipher (monoalphabetic)
Files:
- `Affine.html`, `Affine.js`, `Affine.css`

Combines additive + multiplicative logic with interactive simulation over alphabets.

### 4) AES (block cipher)
Files:
- `AES.html`, `AES.js`, `AES.css`

Provides:
- AES encryption and decryption for inputs/key used by the demo.
- A detailed **round simulator UI** (modals for SubBytes, ShiftRows, MixColumns, AddRoundKey).
- AES internals including:
  - S-Box / inverse S-Box
  - Round key generation (key expansion)
  - XOR with round keys
  - MixColumns math and its explanation
  - Base64-like conversion used by this implementation

Key constraints (from code/UI):
- AES key length is validated as **exactly 16 characters**.

### 5) RSA (asymmetric)
Files:
- `RSA.html`, `RSA.js`, `RSA.css`

Provides RSA screens and logic (key generation/encryption/decryption depending on the UI).

*(DES is present as files, but the UI currently appears commented out in some places.)*

---

## How navigation works

- `Index.html` loads page sections using jQuery `.load()`.
- `Algorithm.html` provides tabbed algorithm selection and loads each algorithm page:
  - `AES.html`, `RSA.html`, `Additive.html`, `Multiplicative.html`, `Affine.html`, etc.

---

## Folder / file map (high-level)

- `Index.html` – main landing page
- `Home.html`, `Introduction.html`, `Help.html`, `Feedback.html` – content sections
- `Algorithm.html` – algorithm tab container
- `AES.*`, `RSA.*`, `Additive.*`, `Affine.*`, `Multiplicative.*` – algorithm implementations
- `Style.css`, `Algorithm.css`, plus per-algorithm CSS files – styling

---

## Running the project

Because it’s static front-end code, you can run it by opening the HTML file directly:

1. Double-click `Index.html` (browser)

For best results (especially if browser blocks some features with `file://`), use a simple local server, e.g.:

- If you have Python:
  - `python -m http.server 5500`
  - open `http://localhost:5500/Index.html`

---

## Notes / limitations

- This is primarily designed for learning/visualization, not as a production-grade cryptographic library.
