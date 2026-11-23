# Flamingo Cafe & Bistro: tasarım notları

## Brief
- Mekân: Fethiye, Çalış Sahili'nde deniz kenarında bir kafe ve bistro. Kahve, kahvaltı, yemek, alkollü ve alkolsüz içecekler. Her gün 10:00 ile 24:00 arası açık.
- Sitenin işi: menüyü göstermek (büyük olasılıkla masadaki QR koddan, telefonla). İkinci işi: adres, saat ve telefon.
- Dil: Türkçe. Ürün adlarının İngilizce karşılıkları basılı menüdeki gibi korunur (`lang="en"`).
- Varsayımlar `src/data/site.ts` dosyasının başında listelidir.

## Konsept seçimi
| | Fikir | Dayanak | O/F/Fe/P |
|---|---|---|---|
| A. İsim | Flamingolar yediklerinden pembeleşir: menüde aşağı indikçe sayfa da pembeleşir | flamingonun rengi besininden gelir; menü sırası günün sırası; Çalış gün batımıyla bilinir | 4/5/5/1 |
| B. Yer | Menü, Çalış kıyı şeridi gibi: bölümler dalga dalga gelir | sahil | 2/4/4/4 |
| C. Biçim | Her şey iki sesle: Türkçe kalın, İngilizce ince (basılı menünün sistemi) | menünün kendi tipografisi | 3/4/5/3 |

A seçildi: en az taşınabilir fikir bu ve sitenin asıl işine (menüye) doğrudan bağlanıyor. C'den iki dilli tipografi sistemi alındı.

## Konsept kartı
```
Idea:        Flamingolar pembe doğmaz, rengini yediklerinden alır; bu site de menüde aşağı indikçe pembeleşir.
Metaphor:    Çalış'ta bir gün: sabah kumu, gün batımı pembesi, gece.
Signature:   Hero'daki kuş ilk karede kömür rengindedir ve açılışta ayaklarından pembeye dolar ("yer"); sonra --glow sürücüsü (scroll ilerlemesi → zemin rengi + logodaki kuşun ayaklarından dolması). src/motion/setup.ts
Emotion:     Güneşli, rahat, net. "Burası deniz kenarı, menü burada."
Motion verb: dal ve yüksel (flamingo besinine eğilir, kalkar).
Screenshot:  Dev "Flamingo" yazısı, suda tek ayak üstünde pembe kuş, altında çizgili yansıması.
```

## Sistem
- Palet: kum `#f7f1e8` (zemin, sabah), gün batımı `#f6b3cd` (zemin, akşam), pembe `#ee3f93` (kuş, büyük vurgular, perde), mürekkep `#232122` (logodaki kömür; yazı ve gece/footer), ikincil yazı `#574d51` (kumda 7:1, pembede 4.6:1).
- Yazı: Alfa Slab One (logodaki kalın slab harfler; başlıklar), Host Grotesk 300 ile 700 (metin, arayüz). İkisinde de latin-ext (ğ ş ı İ) var.
- Grid: 12 sütun, gutter = kenar boşluğu. Bölüm ritmi değişken: hero tam ekran, açıklama geniş, galeri duvarı düzensiz, liste sıkı, ziyaret iki sütun, footer gece.
- Şekil: fotoğraflar ve paneller köşesiz; butonlar ve çipler hap biçimli (logodaki rozet).
- Hareket: tek eğri ailesi (`--e-dip`, engine `ease`). Navigasyon etiketleri suya dalar, kopyası yükselir; butonlarda gelgit dolar; marka kuşu başını eğer; sayfa geçişi pembe bir gelgit.
- Hareketsiz an: hero'daki yansıma GSAP ticker ile dalgalanır, ekran dışında durur, azaltılmış harekette sabittir. Menü sayfası bilerek durgundur: orada canlılığı renk geçişi, çipler ve hover'lar taşır (QR ile açılan bir menüde okunurluk önce gelir).

## Genericness testi
- "Kafe sitesi" denince gelen krem + terracotta serif ve tam ekran stok fotoğraflı hero yerine logonun kendi paleti ve kendi silüeti kullanıldı.
- Üç eşit kart yok; özel lezzetler düzensiz bir galeri duvarında.
- Renk geçişi süs değil, bir bilgi: menüde ne kadar ilerlediğinizi gösteriyor (header'daki kuş da o oranda doluyor).

## Teknik not
Windows'ta build'i büyük sürücü harfiyle çalıştırın (`D:\projects\FlamingoCafe`). Küçük `d:` ile Vite CSS'i sayfalara bağlamıyor.
