// Every Text on the menu pages has tr, en, ru and de; runs before `npm run build` (prebuild) and stops it if one is missing.
// Also warns when the Russian text is the Turkish one unchanged (usually an untranslated string), unless the
// Turkish text is listed in scripts/translation-allowlist.txt (brand names).
// Node imports the .ts data files directly (type stripping, Node 23.6+); no packages needed.
import { readFileSync } from 'node:fs';

const { menu, chip } = await import('../src/data/menu.ts');
const { ui, locales } = await import('../src/i18n/ui.ts');

const allow = new Set(
  readFileSync(new URL('./translation-allowlist.txt', import.meta.url), 'utf8')
    .split(/\r?\n/).map((l) => l.trim()).filter((l) => l && !l.startsWith('#')),
);

const texts = [];
for (const s of menu) {
  texts.push([`menu.${s.id}.title`, s.title]);
  if (s.note) texts.push([`menu.${s.id}.note`, s.note]);
  s.items.forEach((i, n) => {
    texts.push([`menu.${s.id}.${n}.name`, i.name]);
    if (i.desc) texts.push([`menu.${s.id}.${n}.desc`, i.desc]);
  });
}
for (const [id, text] of Object.entries(chip)) texts.push([`chip.${id}`, text]);
for (const [key, text] of Object.entries(ui)) texts.push([`ui.${key}`, text]);

const missing = [];
const same = [];
for (const [key, text] of texts) {
  for (const l of locales) if (typeof text?.[l] !== 'string' || !text[l].trim()) missing.push(`${key} [${l}]`);
  if (text?.ru && text.ru === text.tr && !allow.has(text.tr)) same.push(`${key}: "${text.tr}"`);
}

if (same.length) console.warn(`check-translations: ${same.length} ru text(s) identical to tr (add brand names to scripts/translation-allowlist.txt):\n  ${same.join('\n  ')}`);
if (missing.length) {
  console.error(`check-translations: ${missing.length} missing translation(s):\n  ${missing.join('\n  ')}`);
  process.exit(1);
}
console.log(`check-translations: ${texts.length} texts × ${locales.length} languages OK`);
