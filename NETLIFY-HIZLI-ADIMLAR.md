# Arduç Perde – Netlify’a 5 Dakikada Yayınlama

## Yöntem A: Sürükle-bırak (Git / GitHub yok)

### 1. ZIP dosyası oluştur

1. **Dosya Gezgini**’ni açın.
2. Şu klasöre gidin: **`C:\Users\mmuca\arduc-perde-site`**
3. **İçerideki** tüm dosya ve klasörleri seçin (**Ctrl + A**).
   - `index.html`, `perde.html`, `assets` klasörü vb. seçili olmalı.
   - **arduc-perde-site** klasörünün kendisini seçmeyin; içindekileri seçin.
4. Seçili haldeyken **sağ tık** → **Sıkıştırılmış (zip) klasöre gönder**.
5. Oluşan ZIP dosyasının yerini not alın (genelde aynı klasörde veya Masaüstü’nde).

### 2. Netlify’e girin

1. Tarayıcıda açın: **https://app.netlify.com**
2. **Sign up** veya **Log in** (e-posta veya Google ile giriş yapabilirsiniz).

### 3. Siteyi yükleyin

1. **Add new site** → **Deploy manually** seçin.
2. Açılan büyük alana **az önce oluşturduğunuz ZIP dosyasını sürükleyip bırakın**.
3. Yükleme bitene kadar bekleyin; **Site is live** yazısı çıkacak.

### 4. Adresi kullanın

- Netlify size bir link verecek (örn: `https://xxxxx.netlify.app`).
- Bu link sizin canlı sitenizdir; tarayıcıda açıp kontrol edin.
- İsterseniz **Domain settings** → **Change site name** ile adı **arduc-perde** yapabilirsiniz; adres `https://arduc-perde.netlify.app` olur.

---

## Yöntem B: GitHub + Netlify (Güncellemeler otomatik)

Projeyi GitHub’a atıp Netlify’in her değişiklikte otomatik yayınlamasını isterseniz **NETLIFY_ADIMLAR.md** dosyasındaki adımları uygulayın.

---

Takıldığınız adımı yazarsanız, o adımı birlikte yapabiliriz.
