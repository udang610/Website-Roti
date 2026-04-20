

// Dummy Products
const products = [
  { id: 1, name: 'Choco Lava Cake', price: 45000, category: 'Kue', img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=60', description: 'Kue cokelat lumer premium.' },
  { id: 2, name: 'Kue Ulang Tahun', price: 250000, category: 'Kue', img: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=500&q=60', description: 'Kue ulang tahun spesial dengan lapisan krim lembut.' },
  { id: 3, name: 'Roti Coklat', price: 15000, category: 'Roti', img: 'https://images.unsplash.com/photo-1579697096985-41fe1430e5df?auto=format&fit=crop&w=500&q=60', description: 'Roti manis dengan isian cokelat lumer yang melimpah.' },
  { id: 4, name: 'Roti Keju', price: 18000, category: 'Roti', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=60', description: 'Roti empuk dengan topping dan isian keju gurih.' },
  { id: 5, name: 'Es Kopi Susu', price: 22000, category: 'Minuman', img: 'https://images.unsplash.com/photo-1499961024600-ad094db305cc?auto=format&fit=crop&w=500&q=60', description: 'Es kopi susu gula aren yang menyegarkan.' },
  { id: 6, name: 'Matcha Latte', price: 30000, category: 'Minuman', img: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=500&q=60', description: 'Minuman teh hijau Jepang otentik dengan susu.' },
  { id: 7, name: 'Pempek', price: 35000, category: 'Makanan', img: 'https://images.unsplash.com/photo-1634825595906-8d148e6587d1?auto=format&fit=crop&w=500&q=60', description: 'Pempek ikan tenggiri asli dengan cuko pedas manis.' },
  { id: 8, name: 'Tekwan', price: 30000, category: 'Makanan', img: 'https://images.unsplash.com/photo-1596541175657-65d1d6a66699?auto=format&fit=crop&w=500&q=60', description: 'Sup ikan bening dengan bola-bola ikan kenyal.' },
  { id: 9, name: 'Nasi + Ayam Bakar', price: 40000, category: 'Makanan', img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=500&q=60', description: 'Nasi putih hangat dengan ayam bakar bumbu spesial dan sambal.' },
  { id: 10, name: 'Choco Chips Cookies', price: 45000, category: 'Cookies', img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=500&q=60', description: 'Kue kering renyah dengan taburan choco chips melimpah.' }
];

// Persistent Cart Logic
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const saveCart = () => {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
};

const formatRupiah = (number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
};

// Global DOM
const cartCountElements = [document.getElementById('cart-count'), document.getElementById('cart-count-float'), document.getElementById('cart-btn-nav')].filter(el => el !== null);

const updateCartCount = () => {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCountElements.forEach(el => {
    if (el && el.tagName === 'SPAN') {
      el.textContent = totalItems;
    } else if (el) {
      el.innerHTML = `🛒 Keranjang (${totalItems})`;
    }
  });
};

// --- MENU PAGE LOGIC ---
const productsContainer = document.getElementById('products-container');
const searchInputs = document.querySelectorAll('.search-input-nav'); // Changed to class for multiple navbars

let currentCategory = document.body.dataset.category || 'Semua';
let currentSearch = '';

if (productsContainer || document.querySelector('.search-input-nav')) {
  const renderProducts = () => {
    if (!productsContainer) return; // If on home page but searching, we could redirect, but for now just filter if container exists
    productsContainer.innerHTML = '';

    let filtered = products.filter(p => {
      const matchCategory = currentCategory === 'Semua' || p.category === currentCategory;
      const matchSearch = p.name.toLowerCase().includes(currentSearch.toLowerCase()) || p.description.toLowerCase().includes(currentSearch.toLowerCase());
      return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
      productsContainer.innerHTML = '<div class="col-12 text-center py-5 text-muted">Produk tidak ditemukan.</div>';
      return;
    }

    filtered.forEach((product) => {
      const col = document.createElement('div');
      col.className = 'col-sm-6 col-md-4 col-lg-3';
      col.innerHTML = `
        <div class="card product-card h-100">
          <div class="category-badge">${product.category}</div>
          <img src="${product.img}" alt="${product.name}" class="card-img-top product-img">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title fw-bold text-dark">${product.name}</h5>
            <p class="card-text text-muted small mb-3">${product.description}</p>
            <p class="card-text text-primary-custom fw-bold fs-5 mb-3 mt-auto">${formatRupiah(product.price)}</p>
            <button class="btn btn-primary-custom w-100 add-to-cart" data-id="${product.id}">Tambah</button>
          </div>
        </div>
      `;
      productsContainer.appendChild(col);
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', (e) => {
        const id = parseInt(e.target.dataset.id);
        addToCart(id);
      });
    });
  };

  if (searchInputs.length > 0) {
    searchInputs.forEach(input => {
      input.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        if (productsContainer) {
          renderProducts();
        } else {
          // If on home page and typing search, redirect to menu.html with query parameter
          // For simple implementation without routing, we just save to sessionStorage and redirect
          sessionStorage.setItem('pendingSearch', currentSearch);
          window.location.href = 'menu.html';
        }
      });
    });
  }

  // Handle cross-page search
  if (sessionStorage.getItem('pendingSearch')) {
    currentSearch = sessionStorage.getItem('pendingSearch');
    searchInputs.forEach(input => input.value = currentSearch);
    sessionStorage.removeItem('pendingSearch');
  }

  // Initial Render
  if (productsContainer) renderProducts();
}

const addToCart = (id) => {
  const product = products.find(p => p.id === id);
  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart();

  // Find the button that was clicked (it's the event target)
  // Since we don't pass 'event' to addToCart natively in the onclick attribute, 
  // we can just use a non-intrusive notification or simply do nothing.
  // We'll update the cart count visually instead of an annoying alert.
  const cartBtnNav = document.getElementById('cart-btn-nav');
  if (cartBtnNav) {
    const originalStyle = cartBtnNav.style.transform;
    cartBtnNav.style.transform = 'scale(1.1)';
    setTimeout(() => { cartBtnNav.style.transform = originalStyle || 'scale(1)'; }, 200);
  }
};

// --- CART PAGE LOGIC ---
const cartItemsPage = document.getElementById('cart-items-page');
if (cartItemsPage) {
  const cartTotalPage = document.getElementById('cart-total-page');
  const checkoutFormPage = document.getElementById('checkout-form-page');
  const paymentMethod = document.getElementById('paymentMethod');
  const qrisInfo = document.getElementById('qris-info');
  const bankInfo = document.getElementById('bank-info');
  const promoCodeInput = document.getElementById('promo-code');
  const applyPromoBtn = document.getElementById('apply-promo');
  const promoMessage = document.getElementById('promo-message');

  let discount = 0;

  const renderCartPage = () => {
    cartItemsPage.innerHTML = '';
    if (cart.length === 0) {
      cartItemsPage.innerHTML = '<div class="text-center py-5 text-muted"><h4 class="mb-3">🛒</h4><p>Keranjang Anda masih kosong.</p><a href="menu.html" class="btn btn-primary-custom rounded-pill px-4 mt-2">Belanja Sekarang</a></div>';
      cartTotalPage.textContent = formatRupiah(0);
      return;
    }

    let total = 0;
    cart.forEach((item, index) => {
      const subtotal = item.price * item.qty;
      total += subtotal;
      const div = document.createElement('div');
      div.className = 'd-flex justify-content-between align-items-center mb-4 p-3 bg-white rounded-3 shadow-sm border border-light';
      div.innerHTML = `
        <div class="d-flex align-items-center gap-3">
          <img src="${item.img}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 10px;">
          <div>
            <h6 class="mb-1 fw-bold text-dark">${item.name}</h6>
            <small class="text-muted">${formatRupiah(item.price)} x ${item.qty}</small>
          </div>
        </div>
        <div class="d-flex align-items-center gap-4">
          <span class="fw-bold text-primary-custom fs-5">${formatRupiah(subtotal)}</span>
          <button class="btn btn-sm btn-danger rounded-circle py-1 px-2 remove-item shadow-sm" data-index="${index}" title="Hapus Item">&times;</button>
        </div>
      `;
      cartItemsPage.appendChild(div);
    });

    document.querySelectorAll('.remove-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = e.target.dataset.index;
        cart.splice(idx, 1);
        saveCart();
        renderCartPage();
      });
    });

    let finalTotal = total - (total * discount);
    if (discount > 0) {
      cartTotalPage.innerHTML = `<del class="text-muted fs-6">${formatRupiah(total)}</del> <br> ${formatRupiah(finalTotal)}`;
    } else {
      cartTotalPage.textContent = formatRupiah(finalTotal);
    }
  };

  renderCartPage();

  if (applyPromoBtn) {
    applyPromoBtn.addEventListener('click', () => {
      const code = promoCodeInput.value.trim().toUpperCase();
      if (code === 'PROMO10') {
        discount = 0.10; // 10% discount
        promoMessage.textContent = 'Kode promo 10% berhasil diterapkan!';
        promoMessage.className = 'mt-2 d-block text-success fw-bold';
      } else {
        discount = 0;
        promoMessage.textContent = 'Kode promo tidak valid!';
        promoMessage.className = 'mt-2 d-block text-danger fw-bold';
      }
      renderCartPage();
    });
  }

  paymentMethod.addEventListener('change', (e) => {
    if (e.target.value === 'qris') {
      qrisInfo.classList.remove('d-none');
      bankInfo.classList.add('d-none');
    } else {
      qrisInfo.classList.add('d-none');
      bankInfo.classList.remove('d-none');
    }
  });

  if (checkoutFormPage) {
    checkoutFormPage.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (cart.length === 0) {
        alert('Keranjang masih kosong!');
        return;
      }

      const btnSubmit = checkoutFormPage.querySelector('button[type="submit"]');
      const originalText = btnSubmit.textContent;
      btnSubmit.textContent = 'Memproses...';
      btnSubmit.disabled = true;

      const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
      const formData = {
        customer_name: document.getElementById('name').value,
        phone: document.getElementById('whatsapp').value,
        address: document.getElementById('address').value,
        weight: cart.reduce((sum, item) => sum + item.qty, 0),
        price: totalAmount,
        items: cart,
        status: 'pending'
      };

      try {
        const { error } = await window.db.from('orders').insert([formData]);
        if (error) throw error;

        alert('Pesanan berhasil dibuat! Admin kami akan segera menghubungi Anda.');
        cart = [];
        saveCart();
        window.location.href = 'index.html';
      } catch (error) {
        alert('Terjadi kesalahan saat memproses pesanan.');
        console.error(error);
      } finally {
        btnSubmit.textContent = originalText;
        btnSubmit.disabled = false;
      }
    });
  }
}

// Initial Sync
updateCartCount();
