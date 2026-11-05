# Six Reference Homepages — Progress

Branch: `rebuild/reference-homepages-20261105`

## Completed in this checkpoint

- Rebuilt `kickgent/index.html` around the actual **Kickgent Home V1** reference structure.
- Replaced the prior template-showcase/FAQ approach with the reference-led product layout:
  hero light-rays and layered product workspace, animated logo rail, social-proof/metrics area, five coverage cards, interactive feature panels, role tools, MT4-vs-MT5 comparison, connected-stack visual, CTA, and footer.
- Used the approved MT4 & MT5 Grey Label homepage copy; no generic or duplicated FAQ section remains.
- Kept HTML, CSS, and JavaScript entirely inside Kickgent's standalone `index.html`.

## Verified

- Source is present and the working tree has no whitespace errors from `git diff --check`.
- The live Kickgent Home V1 reference was inspected at desktop size before implementation.

## Not yet verified

- A local visual browser pass could not run in this environment because the available browser is isolated from the local static server and the installed Playwright package has no browser binary.
- Mobile reference comparison remains pending.

## Remaining

1. Capture and compare desktop/mobile references for TradeNova, Fyntic, Fexiva, iDeck, and Flowvy.
2. Rebuild the next largest visual mismatch (likely Fyntic or Fexiva) in its own standalone folder.
3. Repeat source, desktop/mobile, and structure checks after each page.
4. Do not merge to `main` or deploy without approval.
