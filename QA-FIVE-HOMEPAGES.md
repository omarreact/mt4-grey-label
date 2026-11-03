# Five homepage rebuild — validation record

Updated: 2026-11-03

HTML5 + embedded CSS3 + vanilla JavaScript only. No framework and no nonlocal runtime dependencies.

## Designs

- Fexiva: phone-led fintech composition and vertical implementation timeline
- Fyntic: purple horizon and alternating service rows
- iDeck: editorial presentation slides and numbered process rows
- Kickgent: dark purple assistant-style console and horizontal setup cards
- Flowvy: light SaaS dashboard-inspired adaptation (original reference source unavailable)

## Local QA

The five pages were rendered in Chromium at widths 320, 375, 390, 430, 768, 1024, 1440, and 1920 px. At these viewport sizes, all five passed the automated checks for horizontal overflow and uncaught JavaScript exceptions. Mobile navigation open/Escape-close and FAQ toggle were checked at 390px. All 10 FAQs, 6 services, 5 process steps, two comparison tables, approved homepage text, unique element IDs, and internal anchor targets were verified for each page.

**Limits:** Browsing to the external Webflow and GitHub Pages sites was blocked from the local browser environment. Thus direct visual pixel comparisons against live references and independent post-deployment browser screenshot checks were not performed. Flowvy's reference HTML was not supplied. The designs are source-informed adaptations, not certified pixel-perfect copies.

The TradeNova file is unchanged.
