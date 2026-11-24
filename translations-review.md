# Menü çevirileri: inceleme listesi

Rusça ve Almanca bilen birinin kontrolü için. Kaynak: `src/data/menu.ts` ve `src/i18n/ui.ts`.
Düzeltmeyi bu dosyada değil, kaynak dosyalarda yapın; bu liste o dosyalardan üretildi.

- **Not** sütununda "kontrol edilmeli" yazan satırlar önce bakılması gerekenler (52 satır).
  - "alerjen/diyet": glutensiz, fıstık/fındık/ceviz, süt ürünü gibi ifadeler ya da içerik varsayımı.
  - "çeviri": emin olunmayan ya da serbest çevrilen ifadeler.
- Marka adları (biralar, alkoller, Red Bull, Fanta, Sprite) bilerek Latin harfle bırakıldı.
- Rusçada uluslararası içecek ve kokteyl adları Kiril yazıldı; Almancada aynı kaldı.
- Hacimler Rusçada "0,5 л", Almancada "0,5 l" olarak yazıldı (Türkçede "50 cl").

| Anahtar | TR | EN | RU | DE | Not |
|---|---|---|---|---|---|
| menu.kahvalti.title | Gün boyu kahvaltı | All-day breakfasts | Завтраки весь день | Frühstück den ganzen Tag |  |
| menu.kahvalti.0.name | İki kişilik kahvaltı | Breakfast for 2 people | Завтрак на двоих | Frühstück für 2 Personen |  |
| menu.kahvalti.0.desc | Beyaz peynir, çeçil peyniri, top peynir, siyah zeytin, yeşil zeytin, ızgara zeytin, acuka, sahanda yumurta, söğüş tabağı, reçel, bal, çikolata, simit, patates kızartması, pişi, sosis, sigara böreği ve sınırsız çay | White cheese, çeçil cheese, cheese balls, black olives, green olives, grilled olives, acuka, fried eggs, fresh vegetable plate, jam, honey, chocolate spread, simit, French fries, pişi, sausages, spring rolls and unlimited tea | Белый сыр, сыр чечил, сырные шарики, чёрные оливки, зелёные оливки, оливки на гриле, акука (паста из перца с грецким орехом), яичница, свежие овощи, варенье, мёд, шоколадная паста, симит, картофель фри, пиши, сосиски, сигара бёрек и чай без ограничений | Weißkäse, Çeçil-Käse, Käsekugeln, schwarze Oliven, grüne Oliven, gegrillte Oliven, Acuka (Paprika-Walnuss-Paste), Spiegeleier, frisches Gemüse, Marmelade, Honig, Schokocreme, Simit, Pommes frites, Pişi, Würstchen, Sigara Börek und unbegrenzt Tee | kontrol edilmeli: alerjen/diyet (acuka cevizli varsayıldı; "çikolata" sürülebilir çikolata diye çevrildi) |
| menu.kahvalti.1.name | Mini kahvaltı | Mini breakfast (for 1 person) | Мини-завтрак (на одного) | Mini-Frühstück (für 1 Person) |  |
| menu.kahvalti.1.desc | Beyaz peynir, siyah zeytin, yeşil zeytin, haşlanmış yumurta, domates, salatalık, reçel, bal, tereyağı, sınırsız çay | White cheese, black olives, green olives, boiled egg, tomatoes, cucumbers, jam, honey, butter, unlimited tea | Белый сыр, чёрные оливки, зелёные оливки, варёное яйцо, помидоры, огурцы, варенье, мёд, сливочное масло, чай без ограничений | Weißkäse, schwarze Oliven, grüne Oliven, gekochtes Ei, Tomaten, Gurken, Marmelade, Honig, Butter, unbegrenzt Tee |  |
| menu.kahvalti.2.name | Kahvaltı sepeti | Breakfast basket | Корзинка к завтраку | Frühstückskorb |  |
| menu.kahvalti.2.desc | Patates kızartması, simit, sosis, sigara böreği, pişi | French fries, simit, sausages, spring rolls, pişi | Картофель фри, симит, сосиски, сигара бёрек, пиши | Pommes frites, Simit, Würstchen, Sigara Börek, Pişi |  |
| menu.kahvalti.3.name | Simit tabağı | Bagel plate | Тарелка с симитом | Simit-Teller |  |
| menu.kahvalti.3.desc | Beyaz peynir, labne, domates, salatalık, siyah zeytin, yeşil zeytin | White cheese, labneh, tomatoes, cucumbers, black olives, green olives | Белый сыр, лабне, помидоры, огурцы, чёрные оливки, зелёные оливки | Weißkäse, Labneh, Tomaten, Gurken, schwarze Oliven, grüne Oliven |  |
| menu.kahvalti.4.name | Pişi tabağı | Fried dough plate | Тарелка пиши (жареные лепёшки) | Pişi-Teller (frittiertes Fladenbrot) | kontrol edilmeli: çeviri (açıklama eklendi) |
| menu.kahvalti.4.desc | Beyaz peynir, domates, salatalık, siyah zeytin, yeşil zeytin | White cheese, tomatoes, cucumbers, black olives, green olives | Белый сыр, помидоры, огурцы, чёрные оливки, зелёные оливки | Weißkäse, Tomaten, Gurken, schwarze Oliven, grüne Oliven |  |
| menu.kahvalti.5.name | Sosis tabağı | Sausage plate | Тарелка сосисок | Würstchenteller |  |
| menu.kahvalti.6.name | Sigara böreği | Spring rolls | Сигара бёрек (хрустящие рулетики из теста) | Sigara Börek (knusprige Teigröllchen) | kontrol edilmeli: alerjen/diyet (iç malzeme belirtilmedi; peynirliyse eklenmeli) |
| menu.kahvalti.7.name | Sahanda ızgara sucuk | Fried sausage | Суджук на сковороде (пряная говяжья колбаса) | Sucuk aus der Pfanne (würzige Rindswurst) | kontrol edilmeli: alerjen/diyet (sucuk "dana" diye açıklandı; içerik doğrulanmalı) |
| menu.kahvalti.8.name | Pankek | Pancake | Панкейки | Pancakes |  |
| menu.kahvalti.9.name | Smoothie bowl | Smoothie bowl | Смузи-боул | Smoothie Bowl |  |
| menu.kahvalti.9.desc | Mevsim meyveleri, yulaf, yoğurt veya süt, bal, fıstık ezmesi, ceviz | Seasonal fruit, oats, yoghurt or milk, honey, peanut butter, walnuts | Сезонные фрукты, овсяные хлопья, йогурт или молоко, мёд, арахисовая паста, грецкие орехи | Saisonales Obst, Haferflocken, Joghurt oder Milch, Honig, Erdnussbutter, Walnüsse | kontrol edilmeli: alerjen/diyet (fıstık ezmesi = yer fıstığı ezmesi varsayıldı; ceviz; süt; yulaf/gluten) |
| menu.yumurta.title | Yumurtalı lezzetler | Egg dishes | Блюда из яиц | Eierspeisen |  |
| menu.yumurta.0.name | Sahanda yumurta | Fried eggs | Яичница на сковороде | Spiegeleier aus der Pfanne |  |
| menu.yumurta.1.name | Sahanda sucuklu yumurta | Fried eggs with sausage | Яичница с суджуком | Spiegeleier mit Sucuk |  |
| menu.yumurta.2.name | Menemen | Menemen (Turkish-style scrambled eggs) | Менемен (яичница по-турецки) | Menemen (türkisches Rührei) | kontrol edilmeli: çeviri (açıklama eklendi) |
| menu.yumurta.2.desc | Domates ve yeşil biberle pişen yumurta | Eggs cooked with tomatoes and green peppers | Яйца, тушённые с помидорами и зелёным перцем | Eier, in der Pfanne mit Tomaten und grüner Paprika gegart |  |
| menu.yumurta.3.name | Peynirli omlet | Omelette with cheese | Омлет с сыром | Omelett mit Käse |  |
| menu.yumurta.4.name | Mantarlı omlet | Omelette with mushrooms | Омлет с грибами | Omelett mit Pilzen |  |
| menu.yumurta.5.name | Mantarlı kaşarlı omlet | Omelette with mushroom and kaşar cheese | Омлет с грибами и сыром кашар | Omelett mit Pilzen und Kaşar-Käse |  |
| menu.yumurta.6.name | Avokadolu omlet | Omelette with avocado | Омлет с авокадо | Omelett mit Avocado |  |
| menu.yumurta.7.name | Sebzeli omlet | Omelette with vegetables | Омлет с овощами | Gemüseomelett |  |
| menu.tost.title | Tost ve sandviç | Toasties & sandwiches | Тосты и сэндвичи | Toasts & Sandwiches |  |
| menu.tost.0.name | Kaşarlı tost | Kaşar cheese toast | Тост с сыром кашар | Toast mit Kaşar-Käse |  |
| menu.tost.1.name | Peynirli tost | White cheese toast | Тост с белым сыром | Toast mit Weißkäse |  |
| menu.tost.1.desc | Domates ve kekikli | With tomatoes and thyme | С помидорами и тимьяном | Mit Tomaten und Thymian |  |
| menu.tost.2.name | Karışık tost | Mixed toast | Тост ассорти | Gemischter Toast | kontrol edilmeli: çeviri (içeriği belirsiz: "ассорти" / "gemischt") |
| menu.tost.3.name | Glutensiz tost | Gluten-free toast | Тост без глютена | Glutenfreier Toast | kontrol edilmeli: alerjen/diyet (glutensiz) |
| menu.tost.4.name | Flamingo tost | Flamingo toast | Тост Flamingo | Flamingo-Toast |  |
| menu.tost.4.desc | Özel sos, kaşar, sucuk, cheddar peyniri, domates, turşu | Special sauce, kaşar cheese, sucuk, cheddar, tomatoes, pickles | Фирменный соус, сыр кашар, суджук, чеддер, помидоры, маринованные овощи | Spezialsauce, Kaşar-Käse, Sucuk, Cheddar, Tomaten, eingelegtes Gemüse |  |
| menu.tost.5.name | Soğuk sandviç | Cold sandwich | Холодный сэндвич | Kaltes Sandwich |  |
| menu.tost.5.desc | Labne, zeytin ezmesi, yeşillik, hindi füme, kaşar, domates, salatalık ve cips | Labneh, olive paste, greens, smoked turkey, kaşar cheese, tomatoes, cucumbers and crisps | Лабне, оливковая паста, зелень, копчёная индейка, сыр кашар, помидоры, огурцы и чипсы | Labneh, Olivenpaste, Blattsalat, geräucherte Pute, Kaşar-Käse, Tomaten, Gurken und Chips |  |
| menu.atistirmalik.title | Atıştırmalıklar | Snacks | Закуски | Snacks |  |
| menu.atistirmalik.0.name | Patates kızartması | French fries | Картофель фри | Pommes frites |  |
| menu.atistirmalik.1.name | Sigara böreği | Spring rolls | Сигара бёрек (хрустящие рулетики из теста) | Sigara Börek (knusprige Teigröllchen) | kontrol edilmeli: alerjen/diyet (iç malzeme belirtilmedi; peynirliyse eklenmeli) |
| menu.atistirmalik.2.name | Sosis tabağı | Sausage plate | Тарелка сосисок | Würstchenteller |  |
| menu.atistirmalik.3.name | Peynir tabağı | Cheese plate | Сырная тарелка | Käseteller |  |
| menu.atistirmalik.3.desc | Beyaz peynir, kaşar peyniri, çeçil peyniri, top peynir, hindi füme, ızgara zeytin, ceviz, kuru üzüm ve galeta | White cheese, kaşar cheese, çeçil cheese, cheese balls, smoked turkey, grilled olives, walnuts, raisins and breadsticks | Белый сыр, сыр кашар, сыр чечил, сырные шарики, копчёная индейка, оливки на гриле, грецкие орехи, изюм и хлебные палочки | Weißkäse, Kaşar-Käse, Çeçil-Käse, Käsekugeln, geräucherte Pute, gegrillte Oliven, Walnüsse, Rosinen und Grissini | kontrol edilmeli: alerjen/diyet (ceviz; galeta = grissini/хлебные палочки) |
| menu.atistirmalik.4.name | Tuzlu fıstık | Peanuts | Солёный арахис | Gesalzene Erdnüsse | kontrol edilmeli: alerjen/diyet (yer fıstığı: arahis / Erdnüsse) |
| menu.ozel.title | Flamingo özel lezzetler | Flamingo’s specials | Фирменные блюда Flamingo | Flamingo-Spezialitäten |  |
| menu.ozel.0.name | Flamingo combo tabağı | Flamingo combo plate | Комбо-тарелка Flamingo | Flamingo-Kombiteller |  |
| menu.ozel.0.desc | Patates kızartması, sosis, sigara böreği, Flamingo çıtır tavuk, kroket | French fries, sausages, spring rolls, Flamingo crispy chicken, croquettes | Картофель фри, сосиски, сигара бёрек, хрустящая курица Flamingo, крокеты | Pommes frites, Würstchen, Sigara Börek, knuspriges Flamingo-Hähnchen, Kroketten |  |
| menu.ozel.1.name | Flamingo çıtır tavuk parçaları | Flamingo crispy chicken pieces | Хрустящие кусочки курицы Flamingo | Knusprige Flamingo-Hähnchenstücke |  |
| menu.ozel.1.desc | Patates kızartması, Flamingo çıtır tavuk | French fries, Flamingo crispy chicken | Картофель фри, хрустящая курица Flamingo | Pommes frites, knuspriges Flamingo-Hähnchen |  |
| menu.burger.title | Burger, köfte ve wrap | Burgers, meatballs and wraps | Бургеры, кёфте и роллы | Burger, Köfte & Wraps |  |
| menu.burger.0.name | Flamingo chilli burger | Flamingo chilli burger | Чили-бургер Flamingo | Flamingo Chili-Burger |  |
| menu.burger.1.name | Hamburger | Hamburger | Гамбургер | Hamburger |  |
| menu.burger.2.name | Cheeseburger | Cheeseburger | Чизбургер | Cheeseburger |  |
| menu.burger.3.name | Çıtır tavuk burger | Crispy chicken burger | Бургер с хрустящей курицей | Crispy-Chicken-Burger |  |
| menu.burger.4.name | İnegöl köfte | İnegöl-style meatballs | Инегёльские кёфте (котлетки на гриле) | İnegöl-Köfte (gegrillte Hackfleischröllchen) | kontrol edilmeli: çeviri (açıklama eklendi) |
| menu.burger.4.desc | Patates kızartması, közlenmiş biber, domates, köfte sosu ve biber turşusu ile | With French fries, roasted peppers, tomatoes, meatball sauce and pickled peppers | С картофелем фри, печёным перцем, помидорами, соусом для кёфте и маринованным перцем | Mit Pommes frites, gerösteter Paprika, Tomaten, Köfte-Sauce und eingelegten Peperoni |  |
| menu.burger.5.name | Köfte topları | Meatballs | Тефтели | Fleischbällchen |  |
| menu.burger.5.desc | Patates kızartması ile | With French fries | С картофелем фри | Mit Pommes frites |  |
| menu.burger.6.name | Şinitzel | Schnitzel | Шницель | Schnitzel |  |
| menu.burger.6.desc | Patates kızartması, Meksika fasulyesi, taze yeşillik, domates, salatalık ile | With French fries, Mexican beans, fresh greens, tomatoes and cucumbers | С картофелем фри, мексиканской фасолью, свежей зеленью, помидорами и огурцами | Mit Pommes frites, mexikanischen Bohnen, frischem Salat, Tomaten und Gurken |  |
| menu.burger.7.name | Fish & chips | Fish & chips | Фиш-энд-чипс | Fish & Chips |  |
| menu.burger.7.desc | Panelenmiş çıtır balık, patates kızartması, özel soslar ile | Breaded crispy fish with French fries and special sauces | Хрустящая рыба в панировке с картофелем фри и фирменными соусами | Knusprig panierter Fisch mit Pommes frites und Spezialsaucen |  |
| menu.burger.8.name | Köfte wrap | Meatball wrap | Ролл с кёфте | Köfte-Wrap |  |
| menu.burger.8.desc | Köfte, karamelize soğan, sotelenmiş biber, kaşar peyniri, kekik, taze yeşillik ve domates ile | With meatballs, caramelised onions, sautéed peppers, kaşar cheese, thyme, fresh greens and tomatoes | С кёфте, карамелизированным луком, обжаренным перцем, сыром кашар, тимьяном, свежей зеленью и помидорами | Mit Köfte, karamellisierten Zwiebeln, gebratener Paprika, Kaşar-Käse, Thymian, frischem Salat und Tomaten |  |
| menu.burger.9.name | Tavuk wrap | Chicken wrap | Ролл с курицей | Hähnchen-Wrap |  |
| menu.burger.9.desc | Tavuk fileto, karamelize soğan, sotelenmiş biber, kaşar peyniri, krema, köri, kekik, taze yeşillik ve domates ile | With chicken fillet, caramelised onions, sautéed peppers, kaşar cheese, cream, curry, thyme, fresh greens and tomatoes | С куриным филе, карамелизированным луком, обжаренным перцем, сыром кашар, сливками, карри, тимьяном, свежей зеленью и помидорами | Mit Hähnchenfilet, karamellisierten Zwiebeln, gebratener Paprika, Kaşar-Käse, Sahne, Curry, Thymian, frischem Salat und Tomaten |  |
| menu.makarna.title | Makarnalar | Pasta | Паста | Pasta |  |
| menu.makarna.0.name | Fettucini Alfredo | Fettucini Alfredo | Феттучини Альфредо | Fettucini Alfredo |  |
| menu.makarna.0.desc | Krema, kaşar, mantar, tavuk, fesleğen | Cream, kaşar cheese, mushrooms, chicken, basil | Сливки, сыр кашар, грибы, курица, базилик | Sahne, Kaşar-Käse, Pilze, Hähnchen, Basilikum |  |
| menu.makarna.1.name | Penne Arrabiata | Penne Arrabiata | Пенне арраббьята | Penne Arrabiata |  |
| menu.makarna.1.desc | Acılı domates sos, parmesan, fesleğen | Spicy tomato sauce, parmesan, basil | Острый томатный соус, пармезан, базилик | Scharfe Tomatensauce, Parmesan, Basilikum |  |
| menu.makarna.2.name | Napoliten | Napoletana | Паста наполетана | Pasta Napoletana |  |
| menu.makarna.2.desc | Domates sos, parmesan, fesleğen | Tomato sauce, parmesan, basil | Томатный соус, пармезан, базилик | Tomatensauce, Parmesan, Basilikum |  |
| menu.makarna.3.name | Ev yapımı mantı | Homemade Turkish ravioli | Домашние манты по-турецки (маленькие пельмени) | Hausgemachte Mantı (türkische Teigtaschen) | kontrol edilmeli: çeviri (Rusça "манты" Orta Asya mantısını çağrıştırır; "по-турецки" eklendi) |
| menu.kase.title | Bol bol kase | Bowls | Боулы | Bowls |  |
| menu.kase.0.name | Köfte bowl | Meatball bowl | Боул с кёфте | Köfte-Bowl |  |
| menu.kase.0.desc | Köfte topları, taze yeşillik, domates, salatalık, Meksika fasulyesi, haşlanmış pirinç, kuru domates, mısır | Meatballs, fresh greens, tomatoes, cucumbers, Mexican beans, steamed rice, sun-dried tomatoes, corn | Тефтели, свежая зелень, помидоры, огурцы, мексиканская фасоль, отварной рис, вяленые томаты, кукуруза | Fleischbällchen, frischer Salat, Tomaten, Gurken, mexikanische Bohnen, gekochter Reis, getrocknete Tomaten, Mais |  |
| menu.kase.1.name | Tavuk bowl | Chicken bowl | Боул с курицей | Hähnchen-Bowl |  |
| menu.kase.1.desc | Tavuk fileto, taze yeşillik, domates, salatalık, Meksika fasulyesi, haşlanmış pirinç, kuru domates, mısır | Chicken fillet, fresh greens, tomatoes, cucumbers, Mexican beans, steamed rice, sun-dried tomatoes, corn | Куриное филе, свежая зелень, помидоры, огурцы, мексиканская фасоль, отварной рис, вяленые томаты, кукуруза | Hähnchenfilet, frischer Salat, Tomaten, Gurken, mexikanische Bohnen, gekochter Reis, getrocknete Tomaten, Mais |  |
| menu.kase.2.name | Falafel bowl | Falafel bowl | Боул с фалафелем | Falafel-Bowl |  |
| menu.kase.2.desc | Falafel, taze yeşillik, domates, salatalık, Meksika fasulyesi, haşlanmış pirinç, kuru domates, mısır | Falafel, fresh greens, tomatoes, cucumbers, Mexican beans, steamed rice, sun-dried tomatoes, corn | Фалафель, свежая зелень, помидоры, огурцы, мексиканская фасоль, отварной рис, вяленые томаты, кукуруза | Falafel, frischer Salat, Tomaten, Gurken, mexikanische Bohnen, gekochter Reis, getrocknete Tomaten, Mais |  |
| menu.kase.3.name | Avokado bowl | Avocado bowl | Боул с авокадо | Avocado-Bowl |  |
| menu.kase.3.desc | Avokado, taze yeşillik, domates, salatalık, Meksika fasulyesi, haşlanmış pirinç, kuru domates, mısır | Avocado, fresh greens, tomatoes, cucumbers, Mexican beans, steamed rice, sun-dried tomatoes, corn | Авокадо, свежая зелень, помидоры, огурцы, мексиканская фасоль, отварной рис, вяленые томаты, кукуруза | Avocado, frischer Salat, Tomaten, Gurken, mexikanische Bohnen, gekochter Reis, getrocknete Tomaten, Mais |  |
| menu.kase.4.name | Sade bowl | Plain bowl | Базовый боул | Basic-Bowl | kontrol edilmeli: çeviri ("Базовый боул" / "Basic-Bowl") |
| menu.kase.4.desc | Taze yeşillik, domates, salatalık, Meksika fasulyesi, haşlanmış pirinç, kuru domates, mısır | Fresh greens, tomatoes, cucumbers, Mexican beans, steamed rice, sun-dried tomatoes, corn | Свежая зелень, помидоры, огурцы, мексиканская фасоль, отварной рис, вяленые томаты, кукуруза | Frischer Salat, Tomaten, Gurken, mexikanische Bohnen, gekochter Reis, getrocknete Tomaten, Mais |  |
| menu.kase.5.name | Smoothie bowl | Smoothie bowl | Смузи-боул | Smoothie Bowl |  |
| menu.kase.5.desc | Mevsim meyveleri, yulaf, yoğurt veya süt, bal, fıstık ezmesi, ceviz | Seasonal fruit, oats, yoghurt or milk, honey, peanut butter, walnuts | Сезонные фрукты, овсяные хлопья, йогурт или молоко, мёд, арахисовая паста, грецкие орехи | Saisonales Obst, Haferflocken, Joghurt oder Milch, Honig, Erdnussbutter, Walnüsse | kontrol edilmeli: alerjen/diyet (fıstık ezmesi = yer fıstığı ezmesi varsayıldı; ceviz; süt; yulaf/gluten) |
| menu.salata.title | Salatalar | Salads | Салаты | Salate |  |
| menu.salata.0.name | Tavuklu salata | Chicken salad | Салат с курицей | Salat mit Hähnchen |  |
| menu.salata.1.name | Ton balıklı salata | Tuna salad | Салат с тунцом | Salat mit Thunfisch |  |
| menu.salata.2.name | Peynirli salata | Cheese salad | Салат с сыром | Salat mit Käse |  |
| menu.salata.3.name | Yeşil salata | Greens salad | Зелёный салат | Grüner Salat |  |
| menu.salata.4.name | Avokadolu salata | Avocado salad | Салат с авокадо | Salat mit Avocado |  |
| menu.cay.title | Çaylar | Tea | Чай | Tee |  |
| menu.cay.0.name | Demleme çay | Brewed tea | Заварной чай | Frisch aufgebrühter Tee | kontrol edilmeli: çeviri |
| menu.cay.1.name | İngiliz çayı | English tea | Английский чай | Englischer Tee |  |
| menu.cay.2.name | Hibiskus çayı | Hibiscus tea | Чай из гибискуса | Hibiskustee |  |
| menu.cay.3.name | Ihlamur | Linden tea | Липовый чай | Lindenblütentee |  |
| menu.cay.4.name | Yeşil çay | Green tea | Зелёный чай | Grüner Tee |  |
| menu.cay.5.name | Adaçayı | Sage tea | Шалфейный чай | Salbeitee |  |
| menu.cay.6.name | Kış çayı | Winter tea | Зимний чай | Wintertee | kontrol edilmeli: çeviri (içeriği bilinmiyor; birebir çevrildi) |
| menu.sicak-kahve.title | Sıcak kahveler | Hot coffees | Горячий кофе | Heißer Kaffee |  |
| menu.sicak-kahve.0.name | Türk kahvesi | Turkish coffee | Кофе по-турецки | Türkischer Kaffee |  |
| menu.sicak-kahve.1.name | Filtre kahve | Filter coffee | Фильтр-кофе | Filterkaffee |  |
| menu.sicak-kahve.2.name | Flat white | Flat white | Флэт уайт | Flat White |  |
| menu.sicak-kahve.3.name | Espresso | Espresso | Эспрессо | Espresso |  |
| menu.sicak-kahve.4.name | Americano | Americano | Американо | Americano |  |
| menu.sicak-kahve.5.name | Cappuccino | Cappuccino | Капучино | Cappuccino |  |
| menu.sicak-kahve.6.name | Caffè latte | Caffè latte | Кофе латте | Caffè Latte |  |
| menu.sicak-kahve.7.name | Caramel latte | Caramel latte | Карамельный латте | Karamell-Latte |  |
| menu.sicak-kahve.8.name | Chocolate mocha latte | Chocolate mocha latte | Шоколадный мокко-латте | Schoko-Mocha-Latte |  |
| menu.sicak-kahve.9.name | White chocolate mocha latte | White chocolate mocha latte | Мокко-латте с белым шоколадом | Mocha-Latte mit weißer Schokolade |  |
| menu.sicak-kahve.10.name | Fıstıklı latte | Pistachio latte | Фисташковый латте | Pistazien-Latte | kontrol edilmeli: alerjen/diyet (fıstık = Antep fıstığı varsayıldı: фисташка / Pistazie; yer fıstığıysa değişmeli) |
| menu.sicak-kahve.10.desc | Fıstık kreması ve süt ile | With pistachio cream and milk | С фисташковым кремом и молоком | Mit Pistaziencreme und Milch | kontrol edilmeli: alerjen/diyet (Antep fıstığı kreması varsayıldı; süt) |
| menu.sicak-kahve.11.name | Fındıklı latte | Hazelnut latte | Латте с фундуком | Haselnuss-Latte | kontrol edilmeli: alerjen/diyet (fındık) |
| menu.sicak-kahve.11.desc | Fındık kreması ve süt ile | With hazelnut cream and milk | С кремом из фундука и молоком | Mit Haselnusscreme und Milch | kontrol edilmeli: alerjen/diyet (fındık, süt) |
| menu.sicak-kahve.12.name | Chai tea latte | Chai tea latte | Чай латте | Chai Latte |  |
| menu.sicak-kahve.13.name | Sıcak çikolata | Hot chocolate | Горячий шоколад | Heiße Schokolade |  |
| menu.sicak-kahve.14.name | Salep | Salep (hot milk drink with orchid root and cinnamon) | Салеп (горячий молочный напиток с корнем орхидеи и корицей) | Salep (heißes Milchgetränk mit Orchideenwurzel und Zimt) | kontrol edilmeli: alerjen/diyet (süt) |
| menu.alkollu-kahve.title | Alkollü kahveler | Alcoholic coffees | Кофе с алкоголем | Kaffee mit Alkohol |  |
| menu.alkollu-kahve.0.name | Coffee Baileys | Coffee Baileys | Кофе с Baileys | Kaffee mit Baileys |  |
| menu.alkollu-kahve.1.name | Irish coffee | Irish coffee | Ирландский кофе | Irish Coffee |  |
| menu.soguk-kahve.title | Soğuk kahveler | Iced coffee | Холодный кофе | Kalter Kaffee | kontrol edilmeli: çeviri (Almanca "Eiskaffee" dondurmalı kahve demek; "Kalter Kaffee" seçildi) |
| menu.soguk-kahve.0.name | Iced chocolate mocha | Iced chocolate mocha | Холодный шоколадный мокко | Iced Chocolate Mocha |  |
| menu.soguk-kahve.1.name | Iced white chocolate mocha | Iced white chocolate mocha | Холодный мокко с белым шоколадом | Iced White Chocolate Mocha |  |
| menu.soguk-kahve.2.name | Iced latte | Iced latte | Айс-латте | Iced Latte |  |
| menu.soguk-kahve.3.name | Iced caramel latte | Iced caramel latte | Карамельный айс-латте | Iced Caramel Latte |  |
| menu.soguk-kahve.4.name | Iced americano | Iced americano | Айс-американо | Iced Americano |  |
| menu.soguk-kahve.5.name | Dondurmalı frappe | Frappe with ice cream | Фраппе с мороженым | Frappé mit Eiscreme |  |
| menu.soguk-kahve.6.name | Fıstıklı latte | Pistachio latte | Фисташковый латте | Pistazien-Latte | kontrol edilmeli: alerjen/diyet (fıstık = Antep fıstığı varsayıldı: фисташка / Pistazie; yer fıstığıysa değişmeli) |
| menu.soguk-kahve.6.desc | Fıstık kreması ve süt ile | With pistachio cream and milk | С фисташковым кремом и молоком | Mit Pistaziencreme und Milch | kontrol edilmeli: alerjen/diyet (Antep fıstığı kreması varsayıldı; süt) |
| menu.soguk-kahve.7.name | Fındıklı latte | Hazelnut latte | Латте с фундуком | Haselnuss-Latte | kontrol edilmeli: alerjen/diyet (fındık) |
| menu.soguk-kahve.7.desc | Fındık kreması ve süt ile | With hazelnut cream and milk | С кремом из фундука и молоком | Mit Haselnusscreme und Milch | kontrol edilmeli: alerjen/diyet (fındık, süt) |
| menu.serinletici.title | Serinleticiler | Refreshing drinks | Освежающие напитки | Erfrischungen |  |
| menu.serinletici.0.name | Virgin mojito | Virgin mojito | Безалкогольный мохито | Virgin Mojito |  |
| menu.serinletici.0.desc | Sprite, taze nane, lime | Sprite, fresh mint, lime | Sprite, свежая мята, лайм | Sprite, frische Minze, Limette |  |
| menu.serinletici.1.name | Cool lime | Cool lime | Кул лайм | Cool Lime | kontrol edilmeli: çeviri (Rusçada Kiril yazımı) |
| menu.serinletici.2.name | Cool berry | Cool berry | Кул берри | Cool Berry | kontrol edilmeli: çeviri (Rusçada Kiril yazımı) |
| menu.serinletici.3.name | Ev yapımı limonata | Homemade lemonade | Домашний лимонад | Hausgemachte Limonade |  |
| menu.soguk-icecek.title | Soğuk içecekler | Soft drinks | Холодные напитки | Kalte Getränke |  |
| menu.soguk-icecek.0.name | Cola | Cola | Кола | Cola |  |
| menu.soguk-icecek.1.name | Cola zero | Cola zero | Кола Зеро | Cola Zero |  |
| menu.soguk-icecek.2.name | Fanta | Fanta | Fanta | Fanta |  |
| menu.soguk-icecek.3.name | Sprite | Sprite | Sprite | Sprite |  |
| menu.soguk-icecek.4.name | Ice tea | Ice tea | Холодный чай | Eistee |  |
| menu.soguk-icecek.5.name | Vişne suyu | Cherry juice | Вишнёвый сок | Sauerkirschsaft |  |
| menu.soguk-icecek.6.name | Şeftali suyu | Peach juice | Персиковый сок | Pfirsichsaft |  |
| menu.soguk-icecek.7.name | Soda | Soda | Газированная минеральная вода | Mineralwasser mit Kohlensäure | kontrol edilmeli: çeviri (Türkçe "soda" = maden suyu diye çevrildi) |
| menu.soguk-icecek.8.name | Meyveli soda | Fruit soda | Минеральная вода со вкусом фруктов | Mineralwasser mit Fruchtgeschmack | kontrol edilmeli: çeviri (meyveli maden suyu) |
| menu.soguk-icecek.9.name | Churchill | Churchill (lemon juice, soda and salt) | Черчилль (лимонный сок, газированная вода и соль) | Churchill (Zitronensaft, Sprudel und Salz) |  |
| menu.soguk-icecek.10.name | Su, 50 cl | Water | Вода, 0,5 л | Wasser, 0,5 l |  |
| menu.soguk-icecek.11.name | Tonik | Tonic | Тоник | Tonic Water |  |
| menu.soguk-icecek.12.name | Red Bull | Red Bull | Red Bull | Red Bull |  |
| menu.soguk-icecek.13.name | Ayran | Buttermilk | Айран (солёный йогуртовый напиток) | Ayran (salziges Joghurtgetränk) | kontrol edilmeli: alerjen/diyet (süt ürünü; açıklama eklendi) |
| menu.bira.title | Biralar | Beers | Пиво | Bier |  |
| menu.bira.0.name | Efes fıçı, 50 cl | Draft | Efes разливное, 0,5 л | Efes vom Fass, 0,5 l | kontrol edilmeli: çeviri; İngilizce metin yalnızca "Draft" (marka ve hacim yok); İngilizce de düzeltilmeli |
| menu.bira.1.name | Efes fıçı, 33 cl | Draft | Efes разливное, 0,33 л | Efes vom Fass, 0,33 l | kontrol edilmeli: çeviri; İngilizce metin yalnızca "Draft" (marka ve hacim yok); İngilizce de düzeltilmeli |
| menu.bira.2.name | Mexican fıçı, 50 cl | Draft | Mexican разливное, 0,5 л | Mexican vom Fass, 0,5 l | kontrol edilmeli: çeviri; İngilizce metin yalnızca "Draft" (marka ve hacim yok); İngilizce de düzeltilmeli |
| menu.bira.3.name | Mexican fıçı, 33 cl | Draft | Mexican разливное, 0,33 л | Mexican vom Fass, 0,33 l | kontrol edilmeli: çeviri; İngilizce metin yalnızca "Draft" (marka ve hacim yok); İngilizce de düzeltilmeli |
| menu.bira.4.name | Efes, 50 cl | Efes, 50 cl | Efes, 0,5 л | Efes, 0,5 l |  |
| menu.bira.5.name | Efes Malt, 50 cl | Efes Malt, 50 cl | Efes Malt, 0,5 л | Efes Malt, 0,5 l |  |
| menu.bira.6.name | Efes Green, 50 cl | Efes Green, 50 cl | Efes Green, 0,5 л | Efes Green, 0,5 l |  |
| menu.bira.7.name | Efes Gluten Free, 50 cl | Efes Gluten Free, 50 cl | Efes Gluten Free (без глютена), 0,5 л | Efes Gluten Free (glutenfrei), 0,5 l | kontrol edilmeli: alerjen/diyet (glutensiz bira; marka adı korunup açıklama eklendi) |
| menu.bira.8.name | Bomonti Unfiltered, 50 cl | Bomonti Unfiltered, 50 cl | Bomonti Unfiltered, 0,5 л | Bomonti Unfiltered, 0,5 l |  |
| menu.bira.9.name | Tuborg, 50 cl | Tuborg, 50 cl | Tuborg, 0,5 л | Tuborg, 0,5 l |  |
| menu.bira.10.name | Carlsberg, 50 cl | Carlsberg, 50 cl | Carlsberg, 0,5 л | Carlsberg, 0,5 l |  |
| menu.bira.11.name | Miller, 33 cl | Miller, 33 cl | Miller, 0,33 л | Miller, 0,33 l |  |
| menu.bira.12.name | Beck’s, 50 cl | Beck’s, 50 cl | Beck’s, 0,5 л | Beck’s, 0,5 l |  |
| menu.bira.13.name | Corona, 33 cl | Corona, 33 cl | Corona, 0,33 л | Corona, 0,33 l |  |
| menu.bira.14.name | Bud, 50 cl | Bud, 50 cl | Bud, 0,5 л | Bud, 0,5 l |  |
| menu.bira.15.name | Belfast, 50 cl | Belfast, 50 cl | Belfast, 0,5 л | Belfast, 0,5 l |  |
| menu.bira.16.name | Stella Artois, 44 cl | Stella Artois, 44 cl | Stella Artois, 0,44 л | Stella Artois, 0,44 l |  |
| menu.bira.17.name | Guinness, 50 cl | Guinness, 50 cl | Guinness, 0,5 л | Guinness, 0,5 l |  |
| menu.bira.18.name | Shandy | Shandy | Шэнди | Shandy | kontrol edilmeli: çeviri |
| menu.bira.18.desc | Bira ve Sprite | Beer and Sprite | Пиво и Sprite | Bier und Sprite |  |
| menu.alkol.title | Alkollü içecekler | Spirits | Крепкие напитки | Spirituosen |  |
| menu.alkol.0.name | Chivas Regal | Chivas Regal | Chivas Regal | Chivas Regal |  |
| menu.alkol.1.name | Jack Daniel’s | Jack Daniel’s | Jack Daniel’s | Jack Daniel’s |  |
| menu.alkol.2.name | Smirnoff Red | Smirnoff Red | Smirnoff Red | Smirnoff Red |  |
| menu.alkol.3.name | Gordon’s Gin | Gordon’s Gin | Gordon’s Gin | Gordon’s Gin |  |
| menu.alkol.4.name | Captain Morgan | Captain Morgan | Captain Morgan | Captain Morgan |  |
| menu.alkol.5.name | Baileys | Baileys | Baileys | Baileys |  |
| menu.alkol.6.name | Cardinal Melon | Cardinal Melon | Cardinal Melon | Cardinal Melon |  |
| menu.raki.title | Rakı | Rakı | Ракы | Rakı | kontrol edilmeli: çeviri (Rusça yazım "Ракы") |
| menu.raki.note | Tek, duble ya da 70 cl şişe. | Aniseed spirit. Single, double or a 70 cl bottle. | Анисовая водка. Одинарная или двойная порция либо бутылка 0,7 л. | Anisschnaps. Einfach, doppelt oder als 0,7-l-Flasche. | kontrol edilmeli: çeviri (İngilizce ve diğer dillere "anason içkisi" açıklaması eklendi) |
| menu.raki.0.name | Beylerbeyi Göbek | Beylerbeyi Göbek | Beylerbeyi Göbek | Beylerbeyi Göbek |  |
| menu.raki.1.name | Beylerbeyi Terra Gold | Beylerbeyi Terra Gold | Beylerbeyi Terra Gold | Beylerbeyi Terra Gold |  |
| menu.raki.2.name | Yeni Rakı | Yeni Rakı | Yeni Rakı | Yeni Rakı |  |
| menu.sarap.title | Şaraplar | Wines | Вина | Weine |  |
| menu.sarap.note | Kadeh ya da şişe. Şaraplarımız mini şarap tabağı ile servis edilir. | By the glass or bottle. Our wines are served with a small wine platter. | Бокалом или бутылкой. К вину подаём небольшую тарелку закусок. | Glasweise oder als Flasche. Zum Wein servieren wir einen kleinen Snackteller. | kontrol edilmeli: çeviri |
| menu.sarap.0.name | Kırmızı | Red | Красное | Rotwein |  |
| menu.sarap.1.name | Beyaz | White | Белое | Weißwein |  |
| menu.sarap.2.name | Rose | Rosé | Розовое | Rosé |  |
| menu.sarap.3.name | Sıcak şarap | Hot wine | Глинтвейн | Glühwein |  |
| menu.sarap.4.name | Spritzer | Spritzer | Шпритцер | Weißweinschorle | kontrol edilmeli: çeviri (Almancada "Weißweinschorle") |
| menu.sarap.4.desc | Beyaz şarap ve soda | White wine and soda | Белое вино и газированная вода | Weißwein und Sprudel |  |
| menu.kokteyl.title | Kokteyller | Cocktails | Коктейли | Cocktails |  |
| menu.kokteyl.0.name | Flamingo Moonlight | Flamingo Moonlight | Flamingo Moonlight | Flamingo Moonlight |  |
| menu.kokteyl.0.desc | Rom, Cardinal kavun likörü, sweet & sour, Blue Curaçao | Rum, Cardinal melon liqueur, sweet & sour, Blue Curaçao | Ром, дынный ликёр Cardinal, sweet & sour, Blue Curaçao | Rum, Cardinal-Melonenlikör, Sweet & Sour, Blue Curaçao |  |
| menu.kokteyl.1.name | Mojito | Mojito | Мохито | Mojito |  |
| menu.kokteyl.1.desc | Rom, taze nane, lime, soda, esmer şeker | Rum, fresh mint, lime, soda, brown sugar | Ром, свежая мята, лайм, содовая, тростниковый сахар | Rum, frische Minze, Limette, Soda, brauner Zucker |  |
| menu.kokteyl.2.name | Margarita | Margarita | Маргарита | Margarita |  |
| menu.kokteyl.2.desc | Tekila, Cointreau, lime | Tequila, Cointreau, lime | Текила, Cointreau, лайм | Tequila, Cointreau, Limette |  |
| menu.kokteyl.3.name | Long Island ice tea | Long Island ice tea | Лонг-Айленд айс ти | Long Island Ice Tea |  |
| menu.kokteyl.3.desc | Votka, cin, Cointreau, rom, tekila, kola, lime | Vodka, gin, Cointreau, rum, tequila, cola, lime | Водка, джин, Cointreau, ром, текила, кола, лайм | Wodka, Gin, Cointreau, Rum, Tequila, Cola, Limette |  |
| menu.kokteyl.4.name | Lynchburg lemonade | Lynchburg lemonade | Линчбург лимонад | Lynchburg Lemonade |  |
| menu.kokteyl.4.desc | Bourbon viski, Cointreau, Sprite, sweet & sour | Bourbon, Cointreau, Sprite, sweet & sour | Бурбон, Cointreau, Sprite, sweet & sour | Bourbon, Cointreau, Sprite, Sweet & Sour |  |
| menu.kokteyl.5.name | Negroni | Negroni | Негрони | Negroni |  |
| menu.kokteyl.5.desc | Campari, kırmızı vermut, cin | Campari, red vermouth, gin | Campari, красный вермут, джин | Campari, roter Wermut, Gin |  |
| menu.kokteyl.6.name | Aperol spritz | Aperol spritz | Апероль шприц | Aperol Spritz |  |
| menu.kokteyl.6.desc | Beyaz şarap, Aperol, soda | White wine, Aperol, soda | Белое вино, Aperol, содовая | Weißwein, Aperol, Soda |  |
| menu.kokteyl.7.name | Frozen strawberry daiquiri | Frozen strawberry daiquiri | Клубничный фроузен дайкири | Frozen Strawberry Daiquiri |  |
| menu.kokteyl.7.desc | Rom, lime suyu, çilek | Rum, lime juice, strawberries | Ром, сок лайма, клубника | Rum, Limettensaft, Erdbeeren |  |
| menu.kokteyl.8.name | Apple martini | Apple martini | Яблочный мартини | Apple Martini |  |
| menu.kokteyl.8.desc | Votka, elma suyu, sweet & sour | Vodka, apple juice, sweet & sour | Водка, яблочный сок, sweet & sour | Wodka, Apfelsaft, Sweet & Sour |  |
| menu.kokteyl.9.name | Espresso martini | Espresso martini | Эспрессо мартини | Espresso Martini |  |
| menu.kokteyl.9.desc | Votka, kahve likörü, espresso | Vodka, coffee liqueur, espresso | Водка, кофейный ликёр, эспрессо | Wodka, Kaffeelikör, Espresso |  |
| menu.kokteyl.10.name | Cin tonik | Gin tonic | Джин-тоник | Gin Tonic |  |
| menu.shot.title | Shotlar | Shots | Шоты | Shots |  |
| menu.shot.0.name | Tequila shot | Tequila shot | Шот текилы | Tequila-Shot |  |
| menu.shot.1.name | Jägermeister shot | Jägermeister shot | Шот Jägermeister | Jägermeister-Shot |  |
| menu.shot.2.name | Long Island ice tea shot, 6’lı | Long Island ice tea shot, set of 6 | Шоты Лонг-Айленд, сет из 6 | Long-Island-Ice-Tea-Shots, 6er-Set | kontrol edilmeli: çeviri |
| menu.shot.3.name | Margarita shot, 6’lı | Margarita shot, set of 6 | Шоты Маргарита, сет из 6 | Margarita-Shots, 6er-Set |  |
| menu.shot.4.name | Tequila shot, 6’lı | Tequila shot, set of 6 | Шоты текилы, сет из 6 | Tequila-Shots, 6er-Set |  |
| menu.tatli.title | Tatlılar | Desserts | Десерты | Desserts |  |
| menu.tatli.0.name | Frambuazlı cheesecake | Raspberry cheesecake | Чизкейк с малиной | Himbeer-Cheesecake |  |
| menu.tatli.1.name | San Sebastian cheesecake | San Sebastian cheesecake | Чизкейк Сан-Себастьян | San-Sebastián-Cheesecake |  |
| menu.tatli.2.name | Ev yapımı mozaik pasta | Homemade mosaic cake | Домашний торт «Мозаика» (шоколад и печенье) | Hausgemachter Mosaikkuchen (Kalter Hund) | kontrol edilmeli: alerjen/diyet (bisküvi/çikolata açıklaması eklendi; gluten, süt) |
| menu.tatli.2.desc | Bir top dondurma ile servis edilir | Served with a scoop of ice cream | Подаётся с шариком мороженого | Mit einer Kugel Eis serviert |  |
| menu.tatli.3.name | Pankek | Pancake | Панкейки | Pancakes |  |
| menu.tatli.4.name | Dondurma | Ice cream | Мороженое | Eis |  |
| menu.tatli.4.desc | Bir top | One scoop | Один шарик | Eine Kugel |  |
| chip.kahvalti | Kahvaltı | Breakfast | Завтрак | Frühstück |  |
| chip.yumurta | Yumurta | Eggs | Яйца | Eier |  |
| chip.tost | Tost | Toasties | Тосты | Toasts |  |
| chip.atistirmalik | Atıştırmalık | Snacks | Закуски | Snacks |  |
| chip.ozel | Flamingo özel | Flamingo specials | Фирменное | Spezialitäten | kontrol edilmeli: çeviri (chip: "Фирменное" / "Spezialitäten") |
| chip.burger | Burger | Burgers | Бургеры | Burger |  |
| chip.makarna | Makarna | Pasta | Паста | Pasta |  |
| chip.kase | Kase | Bowls | Боулы | Bowls |  |
| chip.salata | Salata | Salads | Салаты | Salate |  |
| chip.tatli | Tatlı | Desserts | Десерты | Desserts |  |
| chip.cay | Çay | Tea | Чай | Tee |  |
| chip.sicak-kahve | Sıcak kahve | Hot coffee | Горячий кофе | Heißer Kaffee |  |
| chip.alkollu-kahve | Alkollü kahve | Spiked coffee | Кофе с алкоголем | Kaffee mit Schuss | kontrol edilmeli: çeviri (Almanca chip "Kaffee mit Schuss" günlük dil) |
| chip.soguk-kahve | Soğuk kahve | Iced coffee | Холодный кофе | Kalter Kaffee |  |
| chip.serinletici | Serinletici | Refreshers | Освежающие | Erfrischungen |  |
| chip.soguk-icecek | Soğuk içecek | Soft drinks | Холодные напитки | Kalte Getränke |  |
| chip.bira | Bira | Beer | Пиво | Bier |  |
| chip.alkol | Alkol | Spirits | Крепкое | Spirituosen |  |
| chip.raki | Rakı | Rakı | Ракы | Rakı | kontrol edilmeli: çeviri (Rusça yazım "Ракы") |
| chip.sarap | Şarap | Wine | Вино | Wein |  |
| chip.kokteyl | Kokteyl | Cocktails | Коктейли | Cocktails |  |
| chip.shot | Shot | Shots | Шоты | Shots |  |
| ui.og.locale | tr_TR | en_GB | ru_RU | de_DE |  |
| ui.skip | İçeriğe geç | Skip to content | Перейти к содержанию | Zum Inhalt springen |  |
| ui.nav.label | Ana menü | Main menu | Главное меню | Hauptmenü |  |
| ui.nav.home | , ana sayfa | , home page | , главная страница | , Startseite |  |
| ui.nav.menu | Menü | Menu | Меню | Speisekarte | kontrol edilmeli: çeviri (Almanca "Speisekarte"; telefonda menü sayfasındayken header'da gizleniyor) |
| ui.nav.find | Bizi bul | Find us | Как нас найти | Anfahrt | kontrol edilmeli: çeviri (Almanca "Anfahrt") |
| ui.nav.call | Ara | Call | Позвонить | Anrufen |  |
| ui.nav.lang | Dil | Language | Язык | Sprache |  |
| ui.ld.cuisine | Kahvaltı, Burger, Makarna, Kahve, Kokteyl | Breakfast, Burgers, Pasta, Coffee, Cocktails | Завтраки, Бургеры, Паста, Кофе, Коктейли | Frühstück, Burger, Pasta, Kaffee, Cocktails |  |
| ui.foot.big | Gece yarısına kadar buradayız. | We’re here until midnight. | Мы открыты до полуночи. | Wir sind bis Mitternacht für Sie da. |  |
| ui.foot.prices | Fiyatları masada sorabilirsiniz. | Ask for prices at your table. | Цены уточняйте у официанта. | Die Preise erfahren Sie am Tisch. | kontrol edilmeli: çeviri (Rusçada "garsona sorun" diye çevrildi) |
| ui.menu.title | Menü | Menu | Меню | Speisekarte | kontrol edilmeli: çeviri (Almanca "Speisekarte"; telefonda menü sayfasındayken header'da gizleniyor) |
| ui.menu.description | Flamingo Cafe & Bistro menüsü: gün boyu kahvaltı, tost, burger, makarna, kase, tatlı, kahve, bira, şarap ve kokteyller. Türkçe ve İngilizce. | The Flamingo Cafe & Bistro menu: all-day breakfast, toasties, burgers, pasta, bowls, desserts, coffee, beer, wine and cocktails. | Меню Flamingo Cafe & Bistro: завтраки весь день, тосты, бургеры, паста, боулы, десерты, кофе, пиво, вино и коктейли. | Die Speisekarte des Flamingo Cafe & Bistro: Frühstück den ganzen Tag, Toasts, Burger, Pasta, Bowls, Desserts, Kaffee, Bier, Wein und Cocktails. |  |
| ui.menu.sections | Menü bölümleri | Menu sections | Разделы меню | Bereiche der Speisekarte |  |
| ui.menu.zoom | {name} görselini büyüt | Enlarge photo of {name} | Увеличить фото: {name} | Foto vergrößern: {name} |  |
| ui.menu.dialog | Yemek görseli | Dish photo | Фото блюда | Foto des Gerichts |  |
| ui.menu.close | Kapat | Close | Закрыть | Schließen |  |
| ui.menu.end.title | Gün battı, sıra sizde. | The sun has set, over to you. | Солнце село — теперь ваш черёд. | Die Sonne ist weg, jetzt sind Sie dran. | kontrol edilmeli: çeviri (birebir değil, doğal karşılık) |
| ui.menu.end.text | Masanızı ayırtmak ya da bir şey sormak için arayın. Instagram’dan da yazabilirsiniz: | Call us to book a table or ask a question. You can also message us on Instagram: | Позвоните, чтобы забронировать столик или задать вопрос. Можно написать и в Instagram: | Rufen Sie an, um einen Tisch zu reservieren oder etwas zu fragen. Oder schreiben Sie uns auf Instagram: |  |
| ui.menu.end.call | Ara: | Call: | Позвонить: | Anrufen: |  |
| ui.group.yiyecek | Yiyecek | Food | Еда | Essen |  |
| ui.group.kahve-cay | Kahve & çay | Coffee & tea | Кофе и чай | Kaffee & Tee |  |
| ui.group.icecek | İçecekler | Drinks | Напитки | Getränke |  |
| ui.group.alkol | Alkol | Alcohol | Алкоголь | Alkohol |  |
| ui.group.tatli | Tatlı | Desserts | Десерты | Desserts |  |
