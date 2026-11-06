# Kickgent Next.js + WordPress FSE generator

This folder converts the existing `kickgent/` static reference into a maintainable source model:

- `app/`, `components/` and `content/` are the Next.js 15 preview and editorial source.
- `wordpress/kickgent-fse/` is a WordPress 6.6+ Full Site Editing theme with editable site header, footer, navigation, page content, global tokens and a reusable hero pattern.
- `scripts/generate-wordpress-theme.mjs` produces a clean installation folder in `dist/kickgent-fse/` without changing source files.

## Local use

```bash
npm install
npm run check
npm run generate:wordpress
```

Install `dist/kickgent-fse` on a staging WordPress site. In **Appearance → Editor**, edit global styles, header/footer and page patterns. Create pages using the slugs in `content/site.ts`, set Home as the static front page, then populate navigation in the Site Editor.

The original static `kickgent/` directory remains an untouched visual reference. The new project intentionally does not alter GitHub Pages or production hosting.
