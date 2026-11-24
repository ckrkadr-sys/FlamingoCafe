// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set `site` to the production URL before deploying: canonical, OG and sitemap depend on it (placeholder domain).
export default defineConfig({
  site: 'https://flamingocafebistro.com',
  integrations: [sitemap()],
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  // Turkish stays unprefixed (/, /menu/); /en, /ru, /de pages come in a later phase. Strings: src/i18n/ui.ts.
  i18n: { defaultLocale: 'tr', locales: ['tr', 'en', 'ru', 'de'], routing: { prefixDefaultLocale: false } },
});
