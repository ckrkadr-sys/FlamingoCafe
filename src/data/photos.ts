import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/food/*.jpg', { eager: true });

export function photo(name: string): ImageMetadata {
  const f = files[`../assets/food/${name}.jpg`];
  if (!f) throw new Error(`missing photo: ${name}`);
  return f.default;
}
