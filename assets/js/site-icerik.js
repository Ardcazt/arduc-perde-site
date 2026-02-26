/**
 * site-icerik.json dosyasından iletişim ve kurumsal içeriği yükler.
 * Böylece teknik bilgisi sınırlı kişi sadece data/site-icerik.json dosyasını düzenleyebilir.
 */
(function () {
  const jsonUrl = 'data/site-icerik.json';

  function getIletisimHtml(data) {
    const i = data.iletisim;
    return `
      <div>
        <div class="contact-detail-label">Adres</div>
        <div>${escapeHtml(i.adres)}</div>
      </div>
      <div>
        <div class="contact-detail-label">Telefon</div>
        <div><a href="tel:${escapeHtml(i.telefon_link)}">${escapeHtml(i.telefon)}</a></div>
      </div>
      <div>
        <div class="contact-detail-label">WhatsApp</div>
        <div><a href="https://wa.me/${escapeHtml(i.whatsapp_link)}" target="_blank" rel="noopener">WhatsApp hattımıza yazın</a></div>
      </div>
      <div>
        <div class="contact-detail-label">E-posta</div>
        <div><a href="mailto:${escapeHtml(i.email)}">${escapeHtml(i.email)}</a></div>
      </div>
      <div>
        <div class="contact-detail-label">Çalışma Saatleri</div>
        <div>${escapeHtml(i.calisma_saatleri)}</div>
      </div>
    `;
  }

  function getKurumsalHtml(data) {
    const k = data.kurumsal;
    const hizmetlerList = k.hizmetler.map((m) => `<li>${escapeHtml(m)}</li>`).join('');
    return `
      <h1>${escapeHtml(k.baslik)}</h1>
      <p>${escapeHtml(k.giris)}</p>
      <p>${escapeHtml(k.paragraf2)}</p>
      <h2>${escapeHtml(k.hizmetler_baslik)}</h2>
      <ul class="content-list">${hizmetlerList}</ul>
      <h2>${escapeHtml(k.vizyon_baslik)}</h2>
      <p>${escapeHtml(k.vizyon_metin)}</p>
    `;
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  async function loadAndApply() {
    try {
      const res = await fetch(jsonUrl);
      const data = await res.json();

      const contactDetails = document.querySelector('.contact-details');
      if (contactDetails) {
        contactDetails.innerHTML = getIletisimHtml(data);
        const i = data.iletisim;
        const btnWhatsApp = document.querySelector('a.btn-primary[href^="https://wa.me"]');
        const btnTel = document.querySelector('a.btn-outline[href^="tel:"]');
        if (btnWhatsApp) btnWhatsApp.href = 'https://wa.me/' + i.whatsapp_link;
        if (btnTel) btnTel.href = 'tel:' + i.telefon_link;
      }

      const kurumsalIcerik = document.getElementById('kurumsal-icerik');
      if (kurumsalIcerik) {
        kurumsalIcerik.innerHTML = getKurumsalHtml(data);
      }
    } catch (e) {
      console.warn('site-icerik.json yüklenemedi, sayfadaki varsayılan içerik kullanılıyor.', e);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAndApply);
  } else {
    loadAndApply();
  }
})();
