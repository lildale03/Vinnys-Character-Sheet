# Adventurer Sheet

This is a tablet-friendly first-pass D&D character sheet web app inspired by journal-style tools like Heroes Diary.

## What it includes

- Responsive layout tuned for tablet portrait and landscape use
- Editable profile, combat, ability, skill, equipment, and note sections
- Automatic ability modifier, saving throw, and skill bonus calculations
- Local device persistence with `localStorage`
- Sample character loader for quick testing

## Run it locally

Because this version is fully static, you can open `index.html` directly in a browser.

If you want a local server instead, run one of these from `E:\Code\Character Sheet Project`:

```powershell
python -m http.server 8080
```

or

```powershell
py -m http.server 8080
```

Then open `http://localhost:8080`.

## Good next steps

- Add tabs for spellcasting, inventory detail, and session logs
- Support multiple saved characters
- Add export/import to JSON so the sheet can move between devices
- Convert this into an installable PWA for a more app-like tablet experience

## Use It On A Pixel Tablet

This project is now set up as a basic installable PWA.

To use it on a Google Pixel Tablet:

1. Serve the project over `http://localhost` during testing, or over `https` when hosted remotely.
2. Open it in Chrome on the tablet.
3. Use Chrome's install option (`Add to Home screen` / `Install app`) to install it.

Notes:

- `index.html` opened directly from the filesystem will not give full PWA install behavior.
- The service worker caches the app shell for offline reopening after the first successful load.
- The current icons are SVG-based and are sufficient for testing/install flows. If you want production-quality launcher assets, the next step is adding exported PNG icons in standard Android sizes.
