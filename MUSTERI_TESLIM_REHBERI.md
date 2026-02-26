# Arduç Perde Sitesi – Müşteri Teslim Rehberi

Bu rehber, siteyi teslim alacak ve **teknik bilgisi sınırlı** kişinin içerikleri kolayca güncellemesi için hazırlanmıştır.

---

## Özet: İki Yol

| Yöntem | Kim yapar? | Müşteri ne yapar? |
|--------|------------|-------------------|
| **A) Tek dosyadan düzenleme** | Siz sadece Netlify’a yüklersiniz | Sadece **bir dosyayı** (site-icerik.json) düzenleyip yeniden yükler |
| **B) Admin paneli (tarayıcıdan)** | Siz bir kez GitHub bağlantısı yaparsınız | Tarayıcıda site adresi + `/admin` ile giriş yapıp formlarla düzenler |

---

## Yöntem A: Tek Dosyadan Düzenleme (Sadece Netlify – Önerilen)

Site, **telefon, adres, e-posta, çalışma saatleri** ve **Kurumsal sayfa metinleri**ni tek bir dosyadan okur. Müşteri sadece bu dosyayı düzenleyip siteyi yeniden yükler.

### Hangi dosya?

- **Dosya:** `data/site-icerik.json`  
- **Konum:** `arduc-perde-site` klasörü → `data` klasörü → `site-icerik.json`

### Nasıl düzenlenir?

1. `site-icerik.json` dosyasını **Not Defteri** (Notepad) veya **Cursor / VS Code** ile açın.
2. Sadece **tırnak içindeki metinleri** değiştirin. **Süslü parantez `{ }`, virgül `,` ve anahtar isimlerini (örn. `"telefon"`, `"adres"`) silmeyin veya değiştirmeyin.
3. Örnek – telefonu değiştirmek:
   - `"telefon": "+90 544 659 34 36"`  →  `"telefon": "+90 555 123 45 67"`
   - `"telefon_link": "+905446593436"`  →  `"telefon_link": "+905551234567"` (boşluksuz numara)
   - WhatsApp için de `"whatsapp_link": "905551234567"` (90 ile başlayan, boşluksuz)
4. Kaydedin (Dosya → Kaydet).

### Düzenlenebilen alanlar (site-icerik.json)

- **iletisim:** adres, telefon, telefon_link, whatsapp_link, email, calisma_saatleri  
- **kurumsal:** baslik, giris, paragraf2, hizmetler_baslik, hizmetler (madde listesi), vizyon_baslik, vizyon_metin  

### Değişiklikten sonra siteyi güncelleme (Netlify)

1. `arduc-perde-site` klasörünün **içindeki tüm** dosya ve klasörleri seçin (Ctrl+A).
2. Sağ tık → **Sıkıştırılmış (zip) klasöre gönder** ile ZIP oluşturun.
3. **https://app.netlify.com** → giriş yapın → sitenize tıklayın.
4. **Deploys** sekmesi → **Drag and drop** alanına bu ZIP dosyasını sürükleyip bırakın.
5. Yeni yayın birkaç saniye içinde canlıya alınır.

**Müşteriye verebileceğiniz kısa not:**  
*“İletişim veya Kurumsal sayfadaki metinleri değiştirmek için `data` klasöründeki `site-icerik.json` dosyasını aç, tırnak içindeki yazıları düzenle, kaydet. Sonra tüm site klasörünü zipleyip Netlify’da Deploys bölümüne sürükleyip bırak.”*

---

## Yöntem B: Admin Paneli (Tarayıcıdan Form ile Düzenleme)

Sitede **Admin paneli** (Decap CMS) vardır. Bu panel **yalnızca site GitHub’a bağlı ve Netlify “Git’ten deploy” ediyorsa** çalışır. Sürükle-bırak (Deploy manually) ile yayınlarsanız admin paneli **çalışmaz**.

### Sizin yapmanız gerekenler (bir kez)

1. Projeyi **GitHub**’a atın (Git kurulumu, `git init`, `git add .`, `git commit`, GitHub’da repo oluşturma, `git push`).
2. **Netlify**’da **Add new site** → **Import an existing project** → **GitHub** → bu repoyu seçin; Build command **boş**, Publish directory **`.`** (nokta) olsun; deploy edin.
3. Netlify’da **Site configuration** → **Identity** → **Enable Identity** açın.
4. **Identity** → **Registration preferences** → **Invite only** veya **Open** (açık bırakırsanız herkes kayıt olabilir; güvenlik için Invite only + davet göndermek daha iyidir).
5. **Identity** → **Services** → **Git Gateway**’i **Enable** edin.
6. `admin/config.yml` içinde `site_url` ve `display_url` satırlarını kendi Netlify adresinizle güncelleyin (örn. `https://arduc-perde.netlify.app`).

### Müşteri ne yapar?

1. Tarayıcıda **https://SITE-ADINIZ.netlify.app/admin** adresine gider.
2. **Log in with Netlify Identity** ile e-posta/şifre ile giriş yapar (ilk seferde davet e-postası veya kayıt gerekebilir).
3. Solda **Sayfalar** veya **Perdeler** gibi bölümler görür; tıklayıp formlardan metinleri, iletişim bilgilerini düzenler.
4. **Publish** / **Save** deyince değişiklikler GitHub’a gider; Netlify otomatik yeniden yayınlar. **ZIP veya dosya ile uğraşmaz.**

**Özet:** Müşteri sadece tarayıcıdan site adresi + `/admin` ile giriş yapıp formlarla düzenler; siz sadece ilk kurulumda GitHub ve Netlify Identity/Git Gateway’i açmış olursunuz.

---

## Hangi Yöntemi Seçmeli?

- **Sadece Netlify kullanıyorsanız (GitHub yok):** **Yöntem A** kullanın. Müşteriye `site-icerik.json` ve “zipleyip Netlify’a sürükle” adımlarını anlatan bu rehberi verin.
- **GitHub’ı bir kez bağlamaya razıysanız:** **Yöntem B** ile müşteri hiç dosya/zip görmeden tarayıcıdan formlarla düzenleyebilir.

İsterseniz **Yöntem A + Yöntem B** birlikte de kullanılabilir: Önce Yöntem A ile hızlıca teslim edersiniz; ileride GitHub bağlanırsa müşteri admin panelini de kullanabilir.

---

## Dosya Özeti (Müşteri İçin)

| Ne değiştirilecek? | Hangi dosya? |
|--------------------|--------------|
| Telefon, adres, e-posta, çalışma saatleri, Kurumsal sayfa metinleri | `data/site-icerik.json` |
| Perde ürünleri (ürün listesi) | `data/products.json` (ileride gerekirse) |
| Logo | `assets/img/logo.png` (aynı isimle değiştirip kaydetmek yeterli) |

Bu rehberi site ile birlikte teslim edebilirsiniz; teknik bilgisi sınırlı kişi için hem “tek dosya” hem “admin paneli” seçenekleri burada özetlenmiştir.
