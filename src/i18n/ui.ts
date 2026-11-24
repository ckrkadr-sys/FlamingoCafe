// Languages of the /menu page and the shared chrome (header, footer). Home and 404 stay Turkish.
export const locales = ['tr', 'en', 'ru', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'tr';

// One piece of text in every language. tr and en are required; ru and de become required in the next phase.
export type Text = { tr: string; en: string; ru?: string; de?: string };

// Missing ru/de fall back to English.
export const pick = (text: Text, locale: Locale): string => text[locale] ?? text.en;

// Fixed interface strings. `{name}` is filled in by the caller.
export const ui = {
  'og.locale': { tr: 'tr_TR', en: 'en_GB', ru: 'ru_RU', de: 'de_DE' },
  'skip': { tr: 'İçeriğe geç', en: 'Skip to content' },
  'nav.label': { tr: 'Ana menü', en: 'Main menu' },
  'nav.home': { tr: ', ana sayfa', en: ', home page' },
  'nav.menu': { tr: 'Menü', en: 'Menu' },
  'nav.find': { tr: 'Bizi bul', en: 'Find us' },
  'nav.call': { tr: 'Ara', en: 'Call' },
  'foot.big': { tr: 'Gece yarısına kadar buradayız.', en: 'We’re here until midnight.' },
  'foot.prices': { tr: 'Fiyatları masada sorabilirsiniz.', en: 'Ask for prices at your table.' },

  'menu.title': { tr: 'Menü', en: 'Menu' },
  'menu.description': {
    tr: 'Flamingo Cafe & Bistro menüsü: gün boyu kahvaltı, tost, burger, makarna, kase, tatlı, kahve, bira, şarap ve kokteyller. Türkçe ve İngilizce.',
    en: 'The Flamingo Cafe & Bistro menu: all-day breakfast, toasties, burgers, pasta, bowls, desserts, coffee, beer, wine and cocktails.',
  },
  'menu.sections': { tr: 'Menü bölümleri', en: 'Menu sections' },
  'menu.zoom': { tr: '{name} görselini büyüt', en: 'Enlarge photo of {name}' },
  'menu.dialog': { tr: 'Yemek görseli', en: 'Dish photo' },
  'menu.close': { tr: 'Kapat', en: 'Close' },
  'menu.end.title': { tr: 'Gün battı, sıra sizde.', en: 'The sun has set, over to you.' },
  'menu.end.text': {
    tr: 'Masanızı ayırtmak ya da bir şey sormak için arayın. Instagram’dan da yazabilirsiniz:',
    en: 'Call us to book a table or ask a question. You can also message us on Instagram:',
  },
  'menu.end.call': { tr: 'Ara:', en: 'Call:' },

  // Top row of the menu bar (ids as in `groups`, src/data/menu.ts).
  'group.yiyecek': { tr: 'Yiyecek', en: 'Food' },
  'group.kahve-cay': { tr: 'Kahve & çay', en: 'Coffee & tea' },
  'group.icecek': { tr: 'İçecekler', en: 'Drinks' },
  'group.alkol': { tr: 'Alkol', en: 'Alcohol' },
  'group.tatli': { tr: 'Tatlı', en: 'Desserts' },
} satisfies Record<string, Text>;

export type UiKey = keyof typeof ui;
export const t = (key: UiKey, locale: Locale): string => pick(ui[key], locale);
