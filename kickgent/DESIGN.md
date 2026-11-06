# Kickgent — Design System (MT4 & MT5 Grey Label)

**Scope:** Only `kickgent/` in `omarreact/mt4-grey-label`. Other design folders are independent and must not inherit these tokens or implementation rules.

## Design intent

The approved page is a **light lilac editorial interpretation** of the Kickgent Home V1 layout, with purple accents and translucent panels. Preserve its content hierarchy, ten linked detail pages, product-panel illustrations, hero orbit motif, navigation and footer. Do not revert to the near-black reference palette documented in the original `design-audit.xml`; that reference records source inspiration, not the current approved state.

## Tokens taken from the existing homepage

| Category | Token | Value / behavior |
|---|---|---|
| Light background | `--bg` | `#fbf8ff` |
| Heading | `--heading` | `#241036` (high-contrast, fully opaque) |
| Body ink | `--ink` | `#241038` |
| Muted body | `--muted` | `#574464` |
| Strong supporting copy | `--muted-strong` | `#473554` |
| Accent violet | `--v` (original) | `#9448f7` |
| Primary action background | current gradient | `#8038e9` → `#a95be9`, never generic blue/purple headline text |
| Container | `--max` | `1180px` |
| Section spacing | `--section-space` | `clamp(68px,6vw,76px)` desktop, tighter below 850/640px |
| Main typography | original root font stack | Inter / ui-sans-serif / system-ui |
| Headings | h1–h3 | 1.15–1.17 line height; restrained negative letter spacing |
| Panels | `.card`, `.metric`, `.tool-box`, `.feature-copy` | Pale lilac/white glass, subtle border, restrained shadows |
| Curvature | cards | typically 16–22px; pill accents round |
| Interactive control | keyboard/touch | >=44px hit area on mobile; visible focus indicator |

## Image treatment

Image washes are decorative texture only. Titles must remain dark, opaque and clear. Never use `opacity` or `filter` on headline containers to achieve a fade-in. Never let `::before` overlays cover text. Images in solution and process cards may be decorative (`alt=""`). Product illustrations should keep existing hierarchy and not pretend to be a functional backend.

## Taste calibration

- **BOLD: 6/10.** Distinctive editorial composition without reconstructing the visual identity.
- **MOTION: 4/10.** Subtle hover/reveal/orbit movement, with a complete reduced-motion fallback.
- **DENSITY: 5/10.** Readable cards, compact but breathable desktop spacing, comfortable mobile tap regions.

## Invariants

Keep `kickgent/index.html` standalone: HTML, CSS and JavaScript inline. Preserve all original page copy, anchored sections, 10 detail-page links, menu, feature switches, tool selector, FAQ, contact email, and GitHub Pages relative paths. Do not add framework dependencies or perform auto-deployment. Screenshot review at 320, 375, 390, 768, 1024, and 1440 CSS pixels is required before release.
