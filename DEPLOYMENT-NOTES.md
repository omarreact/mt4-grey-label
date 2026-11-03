# GitHub Pages deployment notes — V3

- Gallery: https://omarreact.github.io/mt4-grey-label/
- Branch: `main`, source: repository root
- Source package: `mt4-grey-label-source-aligned-v3.zip` provided in ChatGPT
- Six HTML versions: TradeNova, Fexiva, Fyntic, iDeck, Kickgent, Flowvy
- The approved homepage copy comes from the Homepage Google Doc.

## Assets

The original downloaded Webflow reference package included local `*_files` directories. The GitHub Pages version rewrites CSS/image references to their original Webflow CDN origins, which are external dependencies. The eight unusually large inline SVGs saved in Fexiva's exported HTML were extracted to `assets/fexiva-visual-01.svg` through `08.svg` to fit GitHub's file upload route and preserve the rendered imagery.

## Fidelity and limitations

TradeNova, Fexiva, Fyntic, iDeck are adaptations of supplied saved HTML and CSS. Kickgent is a Home V1 screenshot-based reconstruction. Flowvy remains provisional because the original reference was not included. Visual screenshot verification, CDN runtime availability, lead form submission, and production readiness are not established by source or GitHub Actions build validation. Reference/template licensing rights should be checked before using production imagery.

The production website `mt4greylabel.org` is not changed.
