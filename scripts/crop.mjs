// One-off: cut the dish photos out of the printed menu spreads and the flamingo out of the logo.
// shortcut: crops come from 1600px menu scans (low res); replace src/assets/food/* with the original photos when available.
// Run: node scripts/crop.mjs
import sharp from 'sharp';
import fs from 'node:fs';

const out = 'src/assets/food';
fs.mkdirSync(out, { recursive: true });

// name: [file, left, top, right, bottom] in source pixels
const crops = {
  'kahvalti-iki-kisilik': ['menu/1.jpeg', 30, 165, 405, 588],
  'mini-kahvalti': ['menu/1.jpeg', 30, 652, 405, 935],
  'kahvalti-sepeti': ['menu/1.jpeg', 415, 695, 668, 940],
  'simit-tabagi': ['menu/1.jpeg', 940, 36, 1145, 185],
  'pisi-tabagi': ['menu/1.jpeg', 940, 213, 1145, 345],
  'pankek-tabak': ['menu/1.jpeg', 940, 377, 1145, 540],
  'menemen': ['menu/1.jpeg', 1160, 368, 1380, 515],
  'sahanda-sucuklu': ['menu/1.jpeg', 1322, 518, 1558, 652],
  'omlet-avokado': ['menu/1.jpeg', 1300, 675, 1585, 940],
  'flamingo-tost': ['menu/2.jpeg', 42, 47, 308, 245],
  'soguk-sandvic': ['menu/2.jpeg', 40, 268, 308, 440],
  'sigara-boregi': ['menu/2.jpeg', 205, 462, 400, 648],
  'sosis-tabagi': ['menu/2.jpeg', 450, 462, 652, 638],
  'peynir-tabagi': ['menu/2.jpeg', 362, 708, 665, 925],
  'flamingo-combo': ['menu/2.jpeg', 1000, 242, 1500, 568],
  'citir-tavuk': ['menu/2.jpeg', 1095, 672, 1395, 942],
  'chili-burger': ['menu/3.jpeg', 35, 40, 325, 325],
  'inegol-kofte': ['menu/3.jpeg', 35, 358, 325, 525],
  'kofte-toplari': ['menu/3.jpeg', 345, 400, 520, 555],
  'citir-tavuk-burger': ['menu/3.jpeg', 35, 607, 665, 962],
  'sinitzel': ['menu/3.jpeg', 935, 36, 1225, 220],
  'fish-chips': ['menu/3.jpeg', 935, 253, 1225, 462],
  'tavuk-wrap': ['menu/3.jpeg', 935, 508, 1568, 962],
  'fettucini': ['menu/4.jpeg', 37, 40, 325, 238],
  'manti': ['menu/4.jpeg', 37, 555, 327, 738],
  'kofte-bowl': ['menu/4.jpeg', 364, 172, 664, 344],
  'smoothie-bowl': ['menu/4.jpeg', 368, 792, 665, 945],
  'frambuazli-cheesecake': ['menu/4.jpeg', 1272, 37, 1465, 228],
  'mozaik-pasta': ['menu/4.jpeg', 1272, 262, 1565, 442],
  'san-sebastian': ['menu/4.jpeg', 948, 413, 1240, 603],
  'pankek': ['menu/4.jpeg', 932, 612, 1565, 965],
  'kahve': ['menu/5.jpeg', 0, 645, 690, 990],
  'serinletici': ['menu/5.jpeg', 1185, 545, 1600, 990],
  'sarap-peynir': ['menu/6.png', 30, 687, 313, 960],
  'mojito': ['menu/6.png', 1305, 20, 1562, 230],
  'flamingo-moonlight': ['menu/6.png', 1305, 263, 1562, 445],
  'margarita': ['menu/6.png', 1305, 480, 1562, 695],
  'apple-martini': ['menu/6.png', 1305, 730, 1562, 945],
};

for (const [name, [file, l, t, r, b]] of Object.entries(crops)) {
  await sharp(file).extract({ left: l, top: t, width: r - l, height: b - t }).jpeg({ quality: 92 }).toFile(`${out}/${name}.jpg`);
}
console.log(`cropped ${Object.keys(crops).length} photos`);

// Flamingo silhouette: pink pixels of the logo become an alpha mask (white RGB), so CSS can color it.
const L = 268, T = 222, W = 360, H = 452;
const { data, info } = await sharp('logo/flamingo logo.jpg').extract({ left: L, top: T, width: W, height: H }).raw().toBuffer({ resolveWithObject: true });
const rgba = Buffer.alloc(info.width * info.height * 4);
for (let i = 0, j = 0; i < data.length; i += info.channels, j += 4) {
  const [r, g, bl] = [data[i], data[i + 1], data[i + 2]];
  const pink = r - g; // ~170 on the flamingo, ~0 on charcoal and white
  rgba[j] = rgba[j + 1] = rgba[j + 2] = 255;
  rgba[j + 3] = Math.max(0, Math.min(255, (pink - 60) * 2.5)) * (bl > 60 ? 1 : 0);
}
const big = await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } }).resize(info.width * 2, info.height * 2, { kernel: 'lanczos3' }).raw().toBuffer();
for (let j = 3; j < big.length; j += 4) big[j] = Math.max(0, Math.min(255, (big[j] - 128) * 3 + 128)); // steep edge: crisp at 2x
await sharp(big, { raw: { width: info.width * 2, height: info.height * 2, channels: 4 } }).png({ compressionLevel: 9, palette: true, colors: 16 }).toFile('public/flamingo.png');
console.log('wrote public/flamingo.png');
