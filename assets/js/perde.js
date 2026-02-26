// Basit ürün listeleme ve filtreleme

async function loadProducts() {
  const url = 'data/products.json';
  try {
    const res = await fetch(url);
    const products = await res.json();
    renderProducts(products);
    setupFilters(products);
  } catch (e) {
    console.error('Ürünler yüklenirken hata oluştu', e);
  }
}

function groupByType(products) {
  const groups = { tul: [], fon: [], stor: [] };
  products.forEach((p) => {
    if (groups[p.type]) {
      groups[p.type].push(p);
    }
  });
  return groups;
}

function renderProducts(products) {
  const grouped = groupByType(products);
  ['tul', 'fon', 'stor'].forEach((type) => {
    const grid = document.querySelector(`.product-grid[data-grid="${type}"]`);
    if (!grid) return;
    grid.innerHTML = '';
    grouped[type].forEach((product) => {
      const card = document.createElement('article');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="product-image">
          <span>${product.name}</span>
        </div>
        <div class="product-body">
          <div class="product-name">${product.name}</div>
          <div class="product-meta">
            ${product.color ? product.color.toUpperCase() : ''} · ${product.width_cm}x${product.height_cm} cm
          </div>
          <div class="product-price">${product.price_try.toLocaleString('tr-TR')} TL</div>
        </div>
        <div class="product-actions">
          <a href="iletisim.html" class="btn btn-outline btn-full">Sipariş için iletişime geç</a>
        </div>
      `;
      grid.appendChild(card);
    });
  });
}

function setupFilters(products) {
  const typeInputs = Array.from(document.querySelectorAll('input[data-filter-type="type"]'));
  const colorSelect = document.getElementById('filter-color');
  const sortSelect = document.getElementById('sort-select');

  function applyFilters() {
    let filtered = [...products];

    const activeTypes = typeInputs.filter((i) => i.checked).map((i) => i.value);
    if (activeTypes.length) {
      filtered = filtered.filter((p) => activeTypes.includes(p.type));
    }

    const color = colorSelect.value;
    if (color) {
      filtered = filtered.filter((p) => p.color === color);
    }

    const sort = sortSelect.value;
    if (sort === 'price-asc') {
      filtered.sort((a, b) => a.price_try - b.price_try);
    } else if (sort === 'price-desc') {
      filtered.sort((a, b) => b.price_try - a.price_try);
    }

    renderProducts(filtered);
  }

  typeInputs.forEach((el) => el.addEventListener('change', applyFilters));
  colorSelect.addEventListener('change', applyFilters);
  sortSelect.addEventListener('change', applyFilters);
}

document.addEventListener('DOMContentLoaded', loadProducts);

