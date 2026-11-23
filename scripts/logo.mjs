// One-off: cut the flamingo out of the logo as an alpha mask (white RGB), so CSS can color it.
// Dish photos come from scripts/photos.mjs.
// Run: node scripts/logo.mjs
import sharp from 'sharp';

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
