// Import the café's own photos into src/assets/food as web-sized JPGs (Astro makes the WebP variants).
// Run: node scripts/photos.mjs [source dir]   (default D:/projectstuff/flamingo)
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const src = process.argv[2] || 'D:/projectstuff/flamingo';
const out = 'src/assets/food';

// source file → slug used in src/data/menu.ts
const map = {
  'Avokadolu omlet.png': 'omlet-avokado',
  'chili burger.png': 'chili-burger',
  'citir-tavuk-burger.png': 'citir-tavuk-burger',
  'citir-tavuk-parcalari.png': 'citir-tavuk',
  'cizburger.png': 'cheeseburger',
  'fish and chips.png': 'fish-chips',
  'iki kişilik kahvaltı.png': 'kahvalti-iki-kisilik',
  'kahvalti-menemen.png': 'menemen',
  'kahvalti-pancake.png': 'pankek-kahvalti',
  'kahvalti-pisi-tabagi.png': 'pisi-tabagi',
  'kahvalti-sahanda-izgara-sucuk.png': 'sahanda-sucuk',
  'kahvalti-sahanda-sucuklu-yumurta.png': 'sahanda-sucuklu',
  'kahvalti-sahanda-yumurta.png': 'sahanda-yumurta',
  'kahvalti-simit-tabagi.png': 'simit-tabagi',
  'kofte-wrap.png': 'kofte-wrap',
  'manti-makarna-salata-bowl-kofte-bowl.png': 'kofte-bowl',
  'manti-makarna-salata-bowl-makarna-tavuklu-fettucini.png': 'fettucini',
  'manti-makarna-salata-bowl-smoothie-bowl.png': 'smoothie-bowl',
  'pankek.png': 'pankek',
  'peynir tabağı.png': 'peynir-tabagi',
  'sade-bowl.png': 'sade-bowl',
  'saraplar-doluca-beyaz-kadeh.png': 'sarap-beyaz',
  'saraplar-doluca-kirmizi-kadeh.png': 'sarap-kirmizi',
  'saraplar-doluca-rose-kadeh.png': 'sarap-rose',
  'schnitzel.png': 'sinitzel',
  'sigara böreği.png': 'sigara-boregi',
  'tatlilar-ev-yapimi-mozaik.png': 'mozaik-pasta',
  'tavuk-wrap.png': 'tavuk-wrap',
  'tavuklu-bowl.png': 'tavuk-bowl',
  'tost-sandivic-flamingo-tost.png': 'flamingo-tost',
  'tost-sandivic-karisik-tost.png': 'karisik-tost',
  'tost-sandivic-kasarli-tost.png': 'kasarli-tost',
  'Çıtır kahvaltı sepeti-3.png': 'kahvalti-sepeti',
};

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
const files = fs.readdirSync(src).map((f) => f.normalize('NFC'));
const missing = Object.keys(map).filter((k) => !files.includes(k.normalize('NFC')));
if (missing.length) throw new Error(`missing in ${src}: ${missing.join(', ')}`);
const unmapped = files.filter((f) => !Object.keys(map).some((k) => k.normalize('NFC') === f));
if (unmapped.length) console.warn(`not used (add to map): ${unmapped.join(', ')}`);

for (const f of fs.readdirSync(src)) {
  const slug = map[Object.keys(map).find((k) => k.normalize('NFC') === f.normalize('NFC'))];
  if (!slug) continue;
  await sharp(path.join(src, f)).resize({ width: 1600, withoutEnlargement: true }).jpeg({ quality: 86, mozjpeg: true }).toFile(`${out}/${slug}.jpg`);
}
console.log(`imported ${Object.keys(map).length} photos into ${out}`);
