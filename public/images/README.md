Usage
----

Place site images in this folder to serve them from the app's public path.

Examples:
- `public/images/team-1.jpg`
- `public/images/hero-bg.jpg`

In the code, reference images with absolute paths starting from `/`, e.g.:

<img src="/images/team-1.jpg" alt="Team member" />

Or in CSS:

background-image: url('/images/hero-bg.jpg');

Notes:
- Keep filenames lowercase, use hyphens for separators.
- Optimize images for web (compress and resize).
- Use appropriate formats: `jpg`/`jpeg` for photos, `png` for transparency, `webp` for modern web where supported.