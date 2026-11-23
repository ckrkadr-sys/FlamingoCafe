// Every contact detail and visible site-wide string lives here.
// Assumptions (placeholder: true below, mirrored in the hand-off message):
//  - url: the domain flamingocafebistro.com is a guess; set the real one before deploying.
//  - address: only "Çalış Sahili, Fethiye" is known; street and number are missing.
//  - reservation: by phone call or Instagram message (WhatsApp not assumed).
//  - prices: the printed menu has none, so the site shows none.
//  - photos: the café's own set (scripts/photos.mjs); drinks, cocktails, cheesecakes and the combo plate have none yet.

export const site = {
  name: 'Flamingo Cafe & Bistro',
  short: 'Flamingo',
  url: 'https://flamingocafebistro.com', // placeholder
  description:
    'Fethiye Çalış Sahili’nde deniz kenarında kafe ve bistro. Gün boyu kahvaltı, burger, makarna, tatlı, kahve ve gün batımında kokteyl. Her gün 10:00 ile 24:00 arası açık.',
  phone: '0543 212 25 43',
  tel: '+905432122543',
  instagram: { handle: '@flamingocafe.bistro', href: 'https://www.instagram.com/flamingocafe.bistro/' },
  hours: { text: 'Her gün 10:00 ile 24:00 arası', schema: 'Mo-Su 10:00-24:00' },
  address: {
    line: 'Çalış Sahili, Fethiye', // placeholder: street and number unknown
    locality: 'Fethiye',
    region: 'Muğla',
    country: 'TR',
    placeholder: true,
  },
  map: 'https://www.google.com/maps/search/?api=1&query=Flamingo+Cafe+%26+Bistro+%C3%87al%C4%B1%C5%9F+Fethiye',
  reservation: { text: 'Telefonla arayın ya da Instagram’dan yazın.', placeholder: true },
};
