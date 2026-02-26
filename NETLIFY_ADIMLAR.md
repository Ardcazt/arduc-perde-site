# Arduç Perde Sitesini Netlify'de Yayına Alma – Adım Adım

Bu rehber, projeyi GitHub’a atıp Netlify’de ücretsiz yayınlamanız için hazırlandı.

---

## BÖLÜM 1: GitHub’a Proje Yükleme

### 1.1 GitHub hesabı

- GitHub hesabınız yoksa: https://github.com adresine gidin, **Sign up** ile ücretsiz hesap açın.
- Hesabınız varsa giriş yapın.

### 1.2 Git’i bilgisayarınızda kullanma

- **Git yüklü mü?** Bilmiyorsanız https://git-scm.com/download/win adresinden Windows için indirip kurun.
- Kurulumdan sonra **Cursor** veya **VS Code** içindeki **Terminal**’i açın (veya Windows’ta **CMD** / **PowerShell**).

### 1.3 Proje klasöründe Git başlatma

1. Terminalde şu komutla proje klasörüne gidin:
   ```
   cd C:\Users\mmuca\arduc-perde-site
   ```
2. Git deposu oluşturun:
   ```
   git init
   ```
3. Tüm dosyaları ekleyin:
   ```
   git add .
   ```
4. İlk kaydı (commit) oluşturun:
   ```
   git commit -m "Arduç Perde site ilk sürüm"
   ```

### 1.4 GitHub’da yeni depo (repository) oluşturma

1. https://github.com adresine gidin, giriş yapın.
2. Sağ üstte **+** → **New repository** tıklayın.
3. **Repository name:** `arduc-perde-site` (veya istediğiniz bir isim) yazın.
4. **Public** seçili kalsın.
5. **Create repository** butonuna tıklayın. (README eklemeniz istenmez; projede zaten var.)

### 1.5 Projeyi GitHub’a gönderme

GitHub, sayfada size komutlar gösterecek. Siz şunları kullanın (KULLANICI_ADINIZ yerine kendi GitHub kullanıcı adınızı yazın):

1. Ana dalı `main` yapın (zaten öyleyse atlayabilirsiniz):
   ```
   git branch -M main
   ```
2. GitHub deposunu “uzak” olarak ekleyin:
   ```
   git remote add origin https://github.com/KULLANICI_ADINIZ/arduc-perde-site.git
   ```
3. Projeyi yükleyin:
   ```
   git push -u origin main
   ```
   - İlk seferde GitHub kullanıcı adı ve şifre (veya **Personal Access Token**) isteyebilir. Giriş yapın.

Bu adımlardan sonra projeniz GitHub’da görünür.

---

## BÖLÜM 2: Netlify’de Site Oluşturma

### 2.1 Netlify hesabı ve giriş

1. Tarayıcıda https://app.netlify.com adresine gidin.
2. **Sign up** veya **Log in** deyin.
3. **Sign up with GitHub** (veya **Log in with GitHub**) seçin; GitHub hesabınızla giriş yapın ve Netlify’in GitHub’a erişim isteğini **Authorize** ile onaylayın.

### 2.2 Yeni site – Git’ten içe aktarma

1. Netlify panelinde **Add new site** (veya **Add site**) butonuna tıklayın.
2. Açılan menüden **Import an existing project** seçin.
3. **Connect to Git provider** bölümünde **GitHub**’a tıklayın.
4. GitHub izin verdiyseniz **Netlify**’in repolarınızı listeleyecek. **arduc-perde-site** (veya verdiğiniz isim) deposunu bulun ve **Select** / **Import** deyin.

### 2.3 Build ve yayın ayarları

Netlify size bir ayar ekranı gösterecek:

- **Branch to deploy:** `main` seçili kalsın.
- **Build command:** Bu alanı **boş bırakın** (statik site, derleme yok).
- **Publish directory:** Bu alanı da **boş bırakın** veya `.` (nokta) yazın; proje kökü yayınlansın.

Sonra **Deploy site** (veya **Deploy arduc-perde-site**) butonuna tıklayın.

### 2.4 Yayın tamamlanması

- Birkaç saniye içinde **Site is live** mesajı çıkar.
- Netlify size otomatik bir adres verir; örneğin: `https://rastgele-isim-123.netlify.app`.
- Bu adres sizin canlı sitenizdir; tarayıcıda açıp kontrol edin.

### 2.5 Site adını değiştirme (isteğe bağlı)

- Netlify’de sitenize tıklayın → **Site configuration** (veya **Domain settings**) → **Domain management**.
- **Options** veya **Edit** ile site adını değiştirebilirsiniz. Örneğin: `arduc-perde` yaparsanız adres `https://arduc-perde.netlify.app` olur.

---

## BÖLÜM 3: İletişim Formu (Netlify Forms)

- Siteniz Netlify’de yayındayken, **iletisim.html** sayfasındaki form otomatik çalışır.
- Gelen mesajları görmek için: Netlify panelinde sitenize girin → **Forms** sekmesi.
- Burada **iletisim** formuna gelen gönderimler listelenir; e-posta bildirimi de ayarlardan açılabilir.

---

## Özet Kontrol Listesi

- [ ] Git kurulu, proje klasöründe `git init` ve `git add .` / `git commit` yapıldı.
- [ ] GitHub’da yeni depo oluşturuldu, `git remote add origin` ve `git push` ile kod gönderildi.
- [ ] Netlify’de GitHub ile giriş yapıldı, **Import an existing project** ile depo seçildi.
- [ ] Build command boş, Publish directory boş veya `.` olarak bırakıldı, **Deploy** tıklandı.
- [ ] Canlı site adresi açılıp logo, iletişim ve form test edildi.

Takıldığınız bir adım olursa, hangi adımda kaldığınızı yazarsanız oradan devam edebiliriz.
