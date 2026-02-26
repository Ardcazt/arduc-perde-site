# Git İndirdikten Sonra – Ne Yapacağım?

Git’i kurduktan sonra projeyi GitHub’a atmak için aşağıdaki adımları sırayla yapın.

---

## Adım 1: Terminali açın

- **Cursor** kullanıyorsanız: Üst menüden **Terminal** → **New Terminal** (veya kısayol: `` Ctrl+` ``).
- Açılan pencerenin altında siyah/beyaz bir satır görünecek; komutları oraya yazacaksınız.

---

## Adım 2: Proje klasörüne gidin

Aşağıdaki komutu **aynen** kopyalayıp terminale yapıştırın ve **Enter**’a basın:

```
cd "C:\Users\arduc\Aİ\Semereler\arduc-perde-site"
```

> Not: Yol sizin bilgisayarınıza göre. Başka bir klasördeyse, `cd` sonrasındaki yolu kendi proje klasörünüzle değiştirin.

---

## Adım 3: Git’i projede başlatın

Sırayla şu **3 komutu** yazın (her birinden sonra **Enter**):

**3.1 – Git deposu oluştur:**
```
git init
```
*“Initialized empty Git repository...” gibi bir yazı görürsünüz.*

**3.2 – Tüm dosyaları ekle:**
```
git add .
```
*Hiçbir çıktı olmayabilir; normal.*

**3.3 – İlk kaydı oluştur:**
```
git commit -m "Arduç Perde site ilk sürüm"
```
*“X files changed...” benzeri bir özet görürsünüz.*

---

## Adım 4: GitHub’da depo oluşturun

1. Tarayıcıda **https://github.com** adresine gidin.
2. Giriş yapın (hesabınız yoksa **Sign up** ile ücretsiz açın).
3. Sağ üstte **+** → **New repository** tıklayın.
4. **Repository name** kutusuna: `arduc-perde-site` yazın.
5. **Public** seçili kalsın.
6. **Create repository** butonuna tıklayın.

Sayfa açıldıktan sonra “push an existing repository...” bölümündeki komutlara **şimdilik dokunmayın**; bir sonraki adımda kendi komutlarımızı kullanacağız.

---

## Adım 5: Projeyi GitHub’a gönderin

Terminale dönün (Cursor’daki Terminal penceresi). Aşağıdaki komutları **sırayla** yazın.

**5.1 – Ana dalı main yap:**
```
git branch -M main
```

**5.2 – GitHub deposunu bağla:**

Bu satırda **KULLANICI_ADINIZ** yerine kendi GitHub kullanıcı adınızı yazın. Örneğin GitHub adınız `arducperde` ise:

```
git remote add origin https://github.com/arducperde/arduc-perde-site.git
```

**5.3 – Projeyi yükle:**
```
git push -u origin main
```

- İlk seferde **GitHub kullanıcı adı** ve **şifre** isteyebilir.
- Şifre yerine **Personal Access Token** kullanmanız gerekebilir (GitHub artık şifreyle push’a izin vermiyor). Token oluşturmak için: GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Generate new token**; yetkide **repo** işaretleyin; oluşan token’ı şifre gibi yapıştırın.

İşlem bittiğinde tarayıcıda GitHub deposunu yenilerseniz tüm dosyalarınızı göreceksiniz.

---

## Özet – Hangi sırayla?

| Sıra | Nerede        | Ne yapıyorsunuz                          |
|------|---------------|------------------------------------------|
| 1    | Cursor        | Terminal aç                              |
| 2    | Terminal      | `cd "C:\Users\arduc\Aİ\Semereler\arduc-perde-site"` |
| 3    | Terminal      | `git init` → `git add .` → `git commit -m "..."` |
| 4    | Tarayıcı      | GitHub’da yeni depo oluştur (arduc-perde-site) |
| 5    | Terminal      | `git branch -M main` → `git remote add origin ...` → `git push -u origin main` |

Bunları yaptıktan sonra **NETLIFY_ADIMLAR.md** dosyasındaki “BÖLÜM 2: Netlify’de Site Oluşturma” adımlarına geçebilirsiniz; Netlify, GitHub’daki bu depoyu seçerek siteyi yayınlayacaktır.

Takıldığınız komut veya adımı yazarsanız, o kısım için birlikte ilerleyebiliriz.
