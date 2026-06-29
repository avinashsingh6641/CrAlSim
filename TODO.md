1) Create new folder structure (e.g., /assets, /pages, /scripts, /styles).
2) Move existing files into appropriate folders while updating references (CSS/JS/HTML/object loads).
3) Add responsive layout improvements (CSS media queries; header + tabs adapt to mobile).
4) Improve JS structure: separate per-algorithm entrypoints, avoid global functions where possible, remove eval usage for simulator step dispatch.
5) Update main entry and algorithm loader to use the new paths.
6) Verify by running local server and testing in browser.
