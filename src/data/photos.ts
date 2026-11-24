import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/food/*.{jpg,png}', { eager: true });

export function photo(name: string): ImageMetadata {
  const f = files[`../assets/food/${name}.jpg`] ?? files[`../assets/food/${name}.png`];
  if (!f) throw new Error(`missing photo: ${name}`);
  return f.default;
}

// /menu photos (section photos and item thumbnails) shown as background-free cutouts
// (<name>-cutout.png, made by scripts/cutout.py). Remove a name to go back to its original.
export const cutouts = new Set([
  'kahvalti-iki-kisilik', 'menemen', 'flamingo-tost', 'peynir-tabagi', 'citir-tavuk',
  'chili-burger', 'fettucini', 'tavuk-bowl', 'mozaik-pasta', 'sarap-kirmizi',
  // Breakfast thumbnails
  'kahvalti-sepeti', 'simit-tabagi', 'pisi-tabagi', 'sigara-boregi', 'sahanda-sucuk', 'smoothie-bowl',
  // Other thumbnails
  'sahanda-yumurta', 'sahanda-sucuklu', 'omlet-peynirli', 'omlet-mantarli-kasarli', 'omlet-avokado', 'kasarli-tost',
  'karisik-tost', 'cheeseburger', 'citir-tavuk-burger', 'sinitzel', 'fish-chips', 'kofte-wrap', 'tavuk-wrap',
  'kofte-bowl', 'sade-bowl', 'sarap-beyaz', 'sarap-rose', 'pankek',
]);
