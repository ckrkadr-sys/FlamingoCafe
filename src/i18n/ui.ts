// Languages of the /menu page and the shared chrome (header, footer). Home and 404 stay Turkish.
export const locales = ['tr', 'en', 'ru', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'tr';
// Languages with built pages; the switcher shows only these.
export const published: Locale[] = ['tr', 'en', 'ru', 'de'];
// Language names in their own language, for the switcher.
export const native: Record<Locale, string> = { tr: 'Türkçe', en: 'English', ru: 'Русский', de: 'Deutsch' };

// One piece of text in every language. All four are required (scripts/check-translations.mjs checks they are filled).
export type Text = { tr: string; en: string; ru: string; de: string };

export const pick = (text: Text, locale: Locale): string => text[locale];

// Fixed interface strings. `{name}` is filled in by the caller.
export const ui = {
  'og.locale': { tr: 'tr_TR', en: 'en_GB', ru: 'ru_RU', de: 'de_DE' },
  'skip': { tr: 'İçeriğe geç', en: 'Skip to content', ru: 'Перейти к содержанию', de: 'Zum Inhalt springen' },
  'nav.label': { tr: 'Ana menü', en: 'Main menu', ru: 'Главное меню', de: 'Hauptmenü' },
  'nav.home': { tr: ', ana sayfa', en: ', home page', ru: ', главная страница', de: ', Startseite' },
  'nav.menu': { tr: 'Menü', en: 'Menu', ru: 'Меню', de: 'Speisekarte' },
  'nav.find': { tr: 'Bizi bul', en: 'Find us', ru: 'Как нас найти', de: 'Anfahrt' },
  'nav.call': { tr: 'Ara', en: 'Call', ru: 'Позвонить', de: 'Anrufen' },
  'nav.lang': { tr: 'Dil', en: 'Language', ru: 'Язык', de: 'Sprache' },
  'ld.cuisine': { tr: 'Kahvaltı, Burger, Makarna, Kahve, Kokteyl', en: 'Breakfast, Burgers, Pasta, Coffee, Cocktails', ru: 'Завтраки, Бургеры, Паста, Кофе, Коктейли', de: 'Frühstück, Burger, Pasta, Kaffee, Cocktails' },
  'foot.big': { tr: 'Gece yarısına kadar buradayız.', en: 'We’re here until midnight.', ru: 'Мы открыты до полуночи.', de: 'Wir sind bis Mitternacht für Sie da.' },
  'foot.prices': { tr: 'Fiyatları masada sorabilirsiniz.', en: 'Ask for prices at your table.', ru: 'Цены уточняйте у официанта.', de: 'Die Preise erfahren Sie am Tisch.' },

  'menu.title': { tr: 'Menü', en: 'Menu', ru: 'Меню', de: 'Speisekarte' },
  'menu.description': {
    tr: 'Flamingo Cafe & Bistro menüsü: gün boyu kahvaltı, tost, burger, makarna, kase, tatlı, kahve, bira, şarap ve kokteyller. Türkçe ve İngilizce.',
    en: 'The Flamingo Cafe & Bistro menu: all-day breakfast, toasties, burgers, pasta, bowls, desserts, coffee, beer, wine and cocktails.',
    ru: 'Меню Flamingo Cafe & Bistro: завтраки весь день, тосты, бургеры, паста, боулы, десерты, кофе, пиво, вино и коктейли.',
    de: 'Die Speisekarte des Flamingo Cafe & Bistro: Frühstück den ganzen Tag, Toasts, Burger, Pasta, Bowls, Desserts, Kaffee, Bier, Wein und Cocktails.',
  },
  'menu.sections': { tr: 'Menü bölümleri', en: 'Menu sections', ru: 'Разделы меню', de: 'Bereiche der Speisekarte' },
  'menu.zoom': { tr: '{name} görselini büyüt', en: 'Enlarge photo of {name}', ru: 'Увеличить фото: {name}', de: 'Foto vergrößern: {name}' },
  'menu.dialog': { tr: 'Yemek görseli', en: 'Dish photo', ru: 'Фото блюда', de: 'Foto des Gerichts' },
  'menu.close': { tr: 'Kapat', en: 'Close', ru: 'Закрыть', de: 'Schließen' },
  'menu.end.title': { tr: 'Gün battı, sıra sizde.', en: 'The sun has set, over to you.', ru: 'Солнце село — теперь ваш черёд.', de: 'Die Sonne ist weg, jetzt sind Sie dran.' },
  'menu.end.text': {
    tr: 'Masanızı ayırtmak ya da bir şey sormak için arayın. Instagram’dan da yazabilirsiniz:',
    en: 'Call us to book a table or ask a question. You can also message us on Instagram:',
    ru: 'Позвоните, чтобы забронировать столик или задать вопрос. Можно написать и в Instagram:',
    de: 'Rufen Sie an, um einen Tisch zu reservieren oder etwas zu fragen. Oder schreiben Sie uns auf Instagram:',
  },
  'menu.end.call': { tr: 'Ara:', en: 'Call:', ru: 'Позвонить:', de: 'Anrufen:' },

  // Top row of the menu bar (ids as in `groups`, src/data/menu.ts).
  'group.yiyecek': { tr: 'Yiyecek', en: 'Food', ru: 'Еда', de: 'Essen' },
  'group.kahve-cay': { tr: 'Kahve & çay', en: 'Coffee & tea', ru: 'Кофе и чай', de: 'Kaffee & Tee' },
  'group.icecek': { tr: 'İçecekler', en: 'Drinks', ru: 'Напитки', de: 'Getränke' },
  'group.alkol': { tr: 'Alkol', en: 'Alcohol', ru: 'Алкоголь', de: 'Alkohol' },
  'group.tatli': { tr: 'Tatlı', en: 'Desserts', ru: 'Десерты', de: 'Desserts' },
} satisfies Record<string, Text>;

export type UiKey = keyof typeof ui;
export const t = (key: UiKey, locale: Locale): string => pick(ui[key], locale);
