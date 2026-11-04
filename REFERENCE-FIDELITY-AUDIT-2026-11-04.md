# MT4 Grey Label — Reference Fidelity Audit (2026-11-04)

Repository: `omarreact/mt4-grey-label`
Review branch: `audit/reference-fidelity-motion-20261104`

## Evidence and limitations

- Inspected all six `design-audit.xml` files, the six current standalone `index.html` documents, and the repository's prior `DESIGN-AUDIT.md`.
- Reviewed live public Webflow template listing descriptions for Flowvy, Kickgent, Fexiva and TradeNova. Exact reference-site DOM and screenshot capture were **not available** to this audit; this is an implementation-to-existing-audit comparison, **not a claim of pixel-perfect parity**.
- The existing repository notes state that the supplied archive did not contain the actual **Kickgent Home V1** or **Flowvy** homepage; the audit for Kickgent previously covered the template showcase instead of the target Home V1.
- Do not copy vendor CSS, proprietary images, animations or licensed Webflow assets without permission.

## Design-by-design review

| Folder | Reference target | Existing strengths | Highest-impact missing or unverified fidelity | Current branch |
| --- | --- | --- | --- | --- |
| `flowvy/` | https://flowvy-template.webflow.io | Pastel lavender, floating pill navigation, centered hero, custom workflow board, mobile layout | Match actual light/shadow and hero-to-dashboard spacing against screenshot; previous view-timeline-only reveals were not reliable cross-browser; live GSAP timings unverified | **Improved**: workspace entrance, gentle floated notes and independent IntersectionObserver reveals |
| `kickgent/` | https://kickgent.webflow.io/home-pages/home-v1 | Purple product-browser composition, accessible demo tabs, keyboard support, FAQ accordion and reduced-motion scroll reveals | **Reference mismatch** was material: audit described template showcase rather than Home V1; original Home V1 hero layout, image geometry, typography and movement still need direct visual comparison | **Improved**: added exact Home V1 link while preserving original template link and clarified XML target |
| `fexiva/` | https://fexiva.webflow.io | Dark green fintech palette, custom phone mockup, floating account cards, split analytics | Reference shows a hand-held high-fidelity banking device; CSS-only stylized phone is not identical, and exact hero visual scale / image depth / typography need screenshot comparison | **Improved**: phone-stage entrance, distinct floating card motion and resilient scroll reveals |
| `fyntic/` | https://fyntic.webflow.io | Cosmic blue palette, hand-to-orb SVG, floating technology labels and services | Vector hands and orb do not match a photographic/3D original; exact starfield, lighting, headline scale and section spacing remain unverified | **Improved**: halo movement, floating labels and resilient service reveals |
| `ideck/` | https://ideck.webflow.io | Dark/lime identity, deck-like hero composition, editorial headings and distinct showcase | Fine-tune grid, layered deck geometry, lime emphasis, featured card spacing and motion using screenshots; currently relies on CSS view-driven animation rather than JS fallback | **Audit only** in this batch |
| `tradenova/` | https://tradenova-site.webflow.io | Dark blue trading visual language, platform features and numbered process | Exact central 3D/market illustration, hero split/typography, chart details, section density and native GSAP-style reveal timing remain unverified; CSS view-driven animation only | **Audit only** in this batch |

## High-impact next work (ranked)

1. **P0 — Screenshot-based parity**: capture matching 1440px, 768px and 390px viewports of each *actual* live reference and project preview; compare hero height, navbar position, first-fold content, typography metrics, images, section spacing and footer composition before making large layout changes.
2. **P1 — Hero imagery**: replace approximate central visuals only with permission-cleared, original or generated assets that preserve each design's identity. Prioritize Fexiva phone/hand, Fyntic 3D orb/hands, TradeNova data object and iDeck deck screens. Keep licenses/attribution recorded.
3. **P1 — Site-specific interaction polish**: implement separate motion timelines and hover states for remaining iDeck/TradeNova; verify actual reference transitions rather than simply applying one animation to all pages.
4. **P2 — Typography/spacing**: measure font families, display sizes, line heights, navbar-to-hero distances, button radii, and card padding from screenshots. Change each HTML's embedded CSS independently.
5. **P2 — Real device QA**: run Chrome/Firefox/Safari (where available) at 320, 390, 768, 1024, 1440px; check image clipping, focus, navigation, tab order, reduced motion and 60fps animation. A static parser cannot prove these.

## Implemented branch changes

- `flowvy/index.html`: local entrance and float animations, progressive scroll reveal fallback using IntersectionObserver, reduced-motion compliance.
- `fexiva/index.html`: local phone entrance, floating cards with preserved rotations, scroll reveals, reduced-motion compliance.
- `fyntic/index.html`: local orbital halo, floating label animations, scroll reveals, reduced-motion compliance; existing orb pulse preserved.
- `kickgent/index.html`: direct Home V1 source link added alongside the original showcase link, without replacing it.
- `kickgent/design-audit.xml`: explicit target Home V1 URL and caveat about source showcase audit.

All changes remain self-contained per design folder. No shared stylesheet, script, external runtime dependency, copied proprietary asset, or content rewrite was introduced.

## Static QA performed on the branch

| Gate | Result |
| --- | --- |
| All six folders have exactly one `<h1>` | PASS 6/6 |
| Exactly one embedded stylesheet per page | PASS 6/6 |
| All embedded scripts parse as JavaScript | PASS 6/6 |
| Internal `href="#..."` links resolve to page IDs | PASS 6/6 |
| No duplicate IDs detected | PASS 6/6 |
| No external script/stylesheet dependency | PASS 6/6 |
| Reduced-motion CSS and responsive CSS present | PASS 6/6 |
| Original Webflow design links retained | PASS 6/6 |
| Actual browser screenshot parity | NOT RUN — site capture unavailable |
| Mobile Safari/Android/Firefox interactive QA | NOT RUN |
| Deployed-page smoke tests | NOT RUN — review branch not deployed |

**Deployment**: none. Do not merge the branch or deploy to Vercel without separate approval. Keep the current `main` and GitHub Pages site as rollback baselines.
