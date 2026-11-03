# MT4 Grey Label — Source-driven redesign (v3)

This package is a *new local revision*, prepared in response to the visual mismatch between the prior six designs and the user's reference sites. **Published as a GitHub Pages static design gallery on the `main` branch.**

## What changed

The earlier six pages independently approximated generic fintech themes. In this revision, four pages instead adapt the actual saved Webflow homepage DOM structure, CSS classes, and associated local design assets that the user supplied. This is a closer reference-based starting point, rather than a palette swap.

- **TradeNova:** direct adaptation of the downloaded trading homepage, including its centered hero and original page composition.
- **Fexiva:** direct adaptation of the downloaded financial homepage, including the original hero grid, financial interface cards and image assets.
- **Fyntic:** direct adaptation of the downloaded AI homepage, including its original hero composition, major visual asset, and service/process sections.
- **iDeck:** direct adaptation of the downloaded presentation website markup and CSS.
- **Kickgent:** independent HTML/CSS reconstruction using the `Home V1.webp` preview embedded in the supplied archive; the downloaded HTML itself was only a template showcase, not Home V1.
- **Flowvy:** retained as a provisional approximation, because the supplied archive did not include Flowvy source HTML or a screenshot. No claim of fidelity is made for this one.

## Content

Only the MT4 Grey Label Homepage Google Doc supplies substantive copy:
https://docs.google.com/document/d/1AW8JVYdWaMb4VieL7nsDFz1qL1-UYmOqONPlCBhpuMs/edit?tab=t.0

The full homepage copy is included in semantic sections on each page. Reference template text was replaced or adapted, although the direct adaptations retain reference-defined visual UI components and illustration assets. A few fragments may remain in decorative image artwork or SVG files: review those before production use.

## Usage

1. Open https://omarreact.github.io/mt4-grey-label/ to view the live design gallery.
2. Open `index.html` for the gallery or any of the six `index-*.html` pages directly.
3. The GitHub Pages edition links the four Webflow-derived site assets to public Webflow CDN URLs instead of requiring local asset folders. Eight large Fexiva SVGs are stored under `assets/`.
4. The static pages do not submit leads to a CRM or send email; links jump to sections. Contact integration is not configured.

## Limitations / verification

- Browser screenshot testing could not be completed in this runtime because the browser's managed policy blocks navigation, including localhost files. The new layouts have **not been visually verified** in a browser; do not treat them as pixel-perfect or production-ready.
- HTML content integrity and relative CSS/image asset paths have been checked by a static QA script.
- Flowvy cannot be matched accurately without its actual homepage screenshot or source.
- The user-provided archive contains reference-source markup and artwork. Ensure you have the appropriate template/asset rights before publishing those files publicly.

## Deployment

**GitHub Pages:** https://omarreact.github.io/mt4-grey-label/ · **Source:** `main`. The separate production domain `mt4greylabel.org` has not been changed.