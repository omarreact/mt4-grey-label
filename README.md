# MT4 & MT5 Grey Label — Homepage Design Showcase

**Live design index:** https://omarreact.github.io/mt4-grey-label/

Browse **11 independent, responsive homepages** with their own visual styles. The index provides searchable cards, filters by collection, and an on-demand desktop/mobile live preview.

## Five original concepts

| Homepage | Live preview | Source |
| --- | --- | --- |
| Obsidian Exchange | [Open](https://omarreact.github.io/mt4-grey-label/originals/obsidian/) | `originals/obsidian/index.html` |
| Atelier Capital | [Open](https://omarreact.github.io/mt4-grey-label/originals/atelier/) | `originals/atelier/index.html` |
| Gridlock | [Open](https://omarreact.github.io/mt4-grey-label/originals/gridlock/) | `originals/gridlock/index.html` |
| Northstar OS | [Open](https://omarreact.github.io/mt4-grey-label/originals/northstar/) | `originals/northstar/index.html` |
| Pulseworks | [Open](https://omarreact.github.io/mt4-grey-label/originals/pulseworks/) | `originals/pulseworks/index.html` |

## Six Webflow-inspired editions

| Homepage | Live preview | Source |
| --- | --- | --- |
| TradeNova | [Open](https://omarreact.github.io/mt4-grey-label/tradenova/) | `tradenova/index.html` |
| Fyntic | [Open](https://omarreact.github.io/mt4-grey-label/fyntic/) | `fyntic/index.html` |
| Fexiva | [Open](https://omarreact.github.io/mt4-grey-label/fexiva/) | `fexiva/index.html` |
| Ideck | [Open](https://omarreact.github.io/mt4-grey-label/ideck/) | `ideck/index.html` |
| Kickgent | [Open](https://omarreact.github.io/mt4-grey-label/kickgent/) | `kickgent/index.html` |
| Flowvy | [Open](https://omarreact.github.io/mt4-grey-label/flowvy/) | `flowvy/index.html` |

## Architecture and deployment

- Each page is independent and self-contained with inline HTML, CSS, and vanilla JavaScript.
- `index.html` at the repository root is the **11-design showcase**.
- Six reference-edition folders retain their `design-audit.xml` files.
- Existing root-level compatibility links and `.nojekyll` remain intact.
- GitHub Pages publishes from `main`; commits trigger its existing build-and-deploy workflow.
- The gallery's previews load their corresponding pages on demand, so opening the gallery does not immediately load eleven iframes.

---

## Archived notes from the earlier six-design gallery


## Standalone design folders

Each of the six designs lives in its **own folder**. Its complete HTML markup, CSS (`<style>`), and vanilla JavaScript (`<script>`) are contained in **one `index.html` file**. None imports a shared CSS or JavaScript bundle. Styles and interactions are isolated by document.

```text
/
├── index.html                  # Six-design comparison gallery
├── tradenova/index.html        # TradeNova-only HTML, CSS and JS
├── fexiva/index.html           # Fexiva-only HTML, CSS and JS
├── fyntic/index.html           # Fyntic-only HTML, CSS and JS
├── ideck/index.html            # iDeck-only HTML, CSS and JS
├── kickgent/index.html         # Kickgent-only HTML, CSS and JS
└── flowvy/index.html           # Flowvy-only HTML, CSS and JS
```

**Live design routes:** [TradeNova](./tradenova/) · [Fexiva](./fexiva/) · [Fyntic](./fyntic/) · [iDeck](./ideck/) · [Kickgent](./kickgent/) · [Flowvy](./flowvy/).

The six old root-level `index-*.html` URLs remain as **tiny HTML redirects** for backward compatibility; they are not additional copies of the designs. The gallery now links directly to the new folder routes. The root gallery also embeds its own CSS.

**Important:** Separate folders prevent shared-file coupling and CSS/JS collisions. They do not automatically make the visual designs different; independent visual reconstruction and browser comparison are still required. Some design imagery remains externally hosted. All CSS and JavaScript are embedded locally in each design's HTML.


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
2. Open `index.html` for the gallery or one of the six independent `<design>/index.html` files; the historical root-level URLs redirect.
3. The GitHub Pages edition links the four Webflow-derived site assets to public Webflow CDN URLs instead of requiring local asset folders. Eight large Fexiva SVGs are stored under `assets/`.
4. The static pages do not submit leads to a CRM or send email; links jump to sections. Contact integration is not configured.

## Limitations / verification

- Browser screenshot testing could not be completed in this runtime because the browser's managed policy blocks navigation, including localhost files. The new layouts have **not been visually verified** in a browser; do not treat them as pixel-perfect or production-ready.
- HTML content integrity and relative CSS/image asset paths have been checked by a static QA script.
- Flowvy cannot be matched accurately without its actual homepage screenshot or source.
- The user-provided archive contains reference-source markup and artwork. Ensure you have the appropriate template/asset rights before publishing those files publicly.

## Deployment

**GitHub Pages:** https://omarreact.github.io/mt4-grey-label/ · **Source:** `main`. The separate production domain `mt4greylabel.org` has not been changed.