# Kickgent Frontend Architect — Project-scoped Rules

This file applies only inside `kickgent/`. Do not style, rewrite, import from, or otherwise edit sibling homepage design folders.

## 1. Design system grounding
- First read `kickgent/DESIGN.md` and `kickgent/design-audit.xml`, then inspect the actual `index.html` before coding.
- Existing *approved* light-lilac appearance takes precedence over the old dark reference palette. Preserve business copy, 10 detail pages and all hyperlinks.
- Do not copy another brand's DESIGN.md as-is. Adapt composition, not copyrighted branding/assets.

## 2. Impeccable + Taste governance
- Run `npx impeccable install` and `/impeccable init` in a supported agent environment, when explicitly authorized to install.
- Use `/impeccable audit` and `/impeccable polish` (specific components and typography). Review each suggestion rather than applying blindly.
- Calibrate Taste: BOLD 6, MOTION 4, DENSITY 5. Avoid generic cards-with-icon-tile layouts, decorative emoji feature grids, and blue/purple gradient text clichés. Keep the established orbit illustration and valuable product cards.
- Do not accumulate contradictory CSS overrides. Consolidate existing rules in a separately reviewed change when possible.

## 3. Accessibility and functionality
- Apply Vercel Web Interface Guidelines with WCAG 2.2 AA as the accessibility target; check contrast per text use, not by color token alone.
- Visible keyboard focus; screen-reader-friendly toggle names; semantic tabs with arrow-key support; mobile target dimensions ideally >=44px.
- Never disable browser zoom. Honor `prefers-reduced-motion` and avoid layout shifts.
- Every asynchronous interactive action, **if any is introduced**, requires a labelled pending state; the existing anchors do not need a spinner.

## 4. Closed-loop visual browser QA
- Use Playwright or Playwright MCP to open localhost from the actual repository, not a mockup.
- Verify at 320, 375, 390, 768, 1024, 1440 CSS pixels. Capture screenshots and inspect heading contrast, menu, buttons, feature/tool tabs, FAQ, table scrolling, CTA/footer, and page transitions.
- Run `python qa/kickgent_visual_qa.py --repo /path/to/mt4-grey-label` once dependencies are available. Fix failures and rerun before shipping.
- Passing an HTML parse, HTTP 200 or JavaScript syntax check does not establish visual or functional completion.

## 5. Release restrictions
- GitHub `main` powers public GitHub Pages. Never push to `main`, merge, delete, change DNS, or deploy without explicit authorization.
- Work on a local copy or an approved feature branch; preserve rollback and produce a report with changed paths and verified QA evidence.
