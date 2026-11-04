'use strict';
// Zero-dependency static checks for the six independent GitHub Pages designs.
// Run from repository root: node scripts/validate-designs.cjs
const fs = require('node:fs');
const path = require('node:path');
const designs = {
  flowvy: 'https://flowvy-template.webflow.io',
  kickgent: 'https://kickgent.webflow.io/home-pages/home-v1',
  fexiva: 'https://fexiva.webflow.io',
  fyntic: 'https://fyntic.webflow.io',
  ideck: 'https://ideck.webflow.io',
  tradenova: 'https://tradenova-site.webflow.io'
};
const root = path.resolve(__dirname, '..');
let failed = 0;
for (const [name, reference] of Object.entries(designs)) {
  const errors = [];
  const htmlPath = path.join(root, name, 'index.html');
  const auditPath = path.join(root, name, 'design-audit.xml');
  if (!fs.existsSync(htmlPath)) { console.error('FAIL', name, 'missing index.html'); failed++; continue; }
  if (!fs.existsSync(auditPath)) { console.error('FAIL', name, 'missing design-audit.xml'); failed++; continue; }
  const html = fs.readFileSync(htmlPath, 'utf8');
  const audit = fs.readFileSync(auditPath, 'utf8');
  const count = regex => [...html.matchAll(regex)].length;
  const ids = [...html.matchAll(/\bid=["']([^"']+)["']/g)].map(match => match[1]);
  const anchors = [...html.matchAll(/<a\b[^>]*\bhref=["']#([^"']+)["']/gi)].map(match => match[1]);
  const styles = [...html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)];
  const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)];
  if (count(/<h1\b/gi) !== 1) errors.push('expected one h1');
  if (styles.length !== 1 || !styles[0][1].trim()) errors.push('expected one nonempty inline stylesheet');
  if (!scripts.length) errors.push('missing local JavaScript');
  if (/<script\b[^>]*\bsrc\s*=/i.test(html)) errors.push('external JavaScript dependency');
  if (/<link\b(?=[^>]*\brel=["']stylesheet["'])[^>]*>/i.test(html)) errors.push('external stylesheet dependency');
  if (!/<meta\b[^>]*name=["']viewport["']/i.test(html)) errors.push('missing viewport meta');
  if (!/@media\s*\(\s*max-width\s*:/i.test(html)) errors.push('missing responsive CSS');
  if (!/prefers-reduced-motion/i.test(html)) errors.push('missing reduced-motion support');
  if (new Set(ids).size !== ids.length) errors.push('duplicate IDs');
  for (const anchor of anchors) if (!ids.includes(anchor)) errors.push('broken #anchor: ' + anchor);
  if (!html.includes(reference)) errors.push('reference URL missing: ' + reference);
  if (!/<design_audit\b/i.test(audit)) errors.push('audit XML root missing');
  for (const [index, match] of scripts.entries()) {
    try { new Function(match[1]); } catch (error) { errors.push('script ' + (index + 1) + ' syntax: ' + error.message); }
  }
  if (errors.length) { failed++; console.error('FAIL', name, errors.join('; ')); }
  else console.log('PASS', name, '|', anchors.length, 'anchors |', scripts.length, 'local scripts |', ids.length, 'IDs');
}
if (failed) { console.error(failed + ' design(s) failed.'); process.exitCode = 1; }
else console.log('PASS: all six HTML folders are independent and statically valid.');
