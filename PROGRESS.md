# Six Reference Homepages — Progress

Branch: `rebuild/reference-homepages-20261105`

## Completed milestones

- Rebuilt `kickgent/index.html` around the actual **Kickgent Home V1** reference structure.
- Replaced the prior template-showcase approach with the reference-led product layout:
  hero light-rays and layered product workspace, animated logo rail, social-proof/metrics area, five coverage cards, interactive feature panels, role tools, both platform comparisons, connected-stack visual, CTA, and footer.
- Restored the complete approved homepage content that had been omitted: five-step process, Grey Label versus White Label comparison, and the single approved FAQ set.
- Made the mobile navigation keyboard-operable and closable with toggle state, Escape, close control, link close, outside-click close and focus management.
- Replaced the placeholder contact address with `admin@pincodeit.com`.
- Updated `kickgent/design-audit.xml` to document Home V1, rather than the template showcase.
- Added `prefers-reduced-motion` handling for scroll, rail animation, transitions and reveal states.
- Kept HTML, CSS, and JavaScript entirely inside Kickgent's standalone `index.html`.

## Verified

- Source is present and the working tree has no whitespace errors from `git diff --check`.
- The live Kickgent Home V1 desktop hero was compared again after correction: centered navigation, dark-violet canvas, light columns, orbit lines and layered assistant widgets remain the design basis.
- Static responsive review covers the 850px and 540px layout transitions, mobile navigation behavior, all required section IDs, contact address and reduced-motion rules.

## Not yet verified

- A pixel screenshot pass of the un-deployed local page could not run because the available browser is isolated from the local static server and the installed Playwright package has no browser binary.
- Direct mobile reference screenshot comparison remains pending; the page has been checked against the reference's documented mobile hierarchy and responsive constraints.

## Remaining

1. Fexiva is in progress: its floating navigation, three-part teal hero, phone/account-panel composition, proof cluster and trust rail have been rebuilt against the live reference. Its editorial/about, asymmetric benefit, tabs, pricing, testimonial, article and footer structure still need a full reference pass.
2. Capture and compare desktop/mobile references for Fyntic, iDeck, TradeNova and Flowvy.
3. Complete Fexiva, checkpoint it, then proceed to Fyntic.
3. Repeat source, desktop/mobile, and structure checks after each page.
4. Do not merge to `main` or deploy without approval.
