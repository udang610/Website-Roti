

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
  { id: 10, name: 'Choco Chips Cookies', price: 45000, category: 'Cookies', img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=500&q=60', description: 'Kue kering renyah dengan taburan choco chips melimpah.' },
  { id: 11, name: 'Roti Srikaya', price: 16000, category: 'Roti', img: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=500&q=60', description: 'Roti lembut dengan selai srikaya khas.' },
  { id: 12, name: 'Roti Blueberry', price: 17000, category: 'Roti', img: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=500&q=60', description: 'Roti manis dengan isian blueberry segar.' },
  { id: 13, name: 'Roti Gandum', price: 22000, category: 'Roti', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=60', description: 'Roti gandum sehat dan kaya serat.' },
  { id: 14, name: 'Roti Smoke Beef', price: 20000, category: 'Roti', img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=60', description: 'Roti gurih dengan daging sapi asap dan keju.' },
  { id: 15, name: 'Roti Tawar', price: 18000, category: 'Roti', img: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?auto=format&fit=crop&w=500&q=60', description: 'Roti tawar lembut untuk sarapan keluarga.' },
  { id: 16, name: 'Roti Pizza', price: 25000, category: 'Roti', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=60', description: 'Roti dengan topping pizza mini yang lezat.' },
  { id: 17, name: 'Roti Isi Daging', price: 22000, category: 'Roti', img: 'https://images.unsplash.com/photo-1541544741938-0af808891cc5?auto=format&fit=crop&w=500&q=60', description: 'Roti dengan isian daging berbumbu spesial.' },
  { id: 18, name: 'Kue Tart Premium', price: 180000, category: 'Kue', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=60', description: 'Kue tart mewah untuk momen spesial Anda.' },
  { id: 19, name: 'Cheesecake', price: 45000, category: 'Kue', img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=60', description: 'Kue keju lembut dengan crust renyah.' },
  { id: 20, name: 'Blackforest', price: 50000, category: 'Kue', img: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=500&q=60', description: 'Kue cokelat klasik dengan ceri dan krim.' },
  { id: 21, name: 'Kue Chiffon', price: 65000, category: 'Kue', img: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=500&q=60', description: 'Kue chiffon yang sangat lembut dan ringan.' },
  { id: 22, name: 'Ayam Goreng', price: 25000, category: 'Makanan', img: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=500&q=60', description: 'Ayam goreng renyah dengan bumbu meresap.' },
  { id: 23, name: 'Risol Mayo', price: 15000, category: 'Makanan', img: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=500&q=60', description: 'Risol dengan isian smoked beef dan mayo.' },
  { id: 24, name: 'Kentang Goreng', price: 20000, category: 'Makanan', img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=60', description: 'Kentang goreng gurih dan renyah.' },
  { id: 25, name: 'Siomay Bandung', price: 25000, category: 'Makanan', img: 'https://images.unsplash.com/photo-1563245332-69214647ef84?auto=format&fit=crop&w=500&q=60', description: 'Siomay ikan asli dengan bumbu kacang kental.' },
  { id: 26, name: 'Dimsum Ayam', price: 30000, category: 'Makanan', img: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=500&q=60', description: 'Dimsum ayam hangat dan lembut.' },
  { id: 27, name: 'Kopi Susu Gula Aren', price: 20000, category: 'Minuman', img: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&w=500&q=60', description: 'Perpaduan kopi, susu, dan gula aren asli.' },
  { id: 28, name: 'Black Coffee', price: 15000, category: 'Minuman', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=60', description: 'Kopi hitam murni dari biji pilihan.' },
  { id: 29, name: 'Matcha Latte Premium', price: 35000, category: 'Minuman', img: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=500&q=60', description: 'Minuman matcha Jepang berkualitas tinggi.' },
  { id: 30, name: 'Butter Cookie', price: 35000, category: 'Cookies', img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=500&q=60', description: 'Kue kering mentega yang lumer di mulut.' },
  { id: 31, name: 'Triple Chocochip Cookie', price: 40000, category: 'Cookies', img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=500&q=60', description: 'Kue kering dengan tiga jenis cokelat melimpah.' }
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
      const parent = input.closest('.input-group') || input.parentElement;
      const searchBtn = parent.querySelector('.search-btn-nav');

      const performSearch = () => {
        currentSearch = input.value;
        if (productsContainer) {
          renderProducts();
        } else {
          sessionStorage.setItem('pendingSearch', currentSearch);
          window.location.href = 'menu.html';
        }
      };

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          performSearch();
        }
      });

      if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
      }
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
const showOrderSuccessModal = () => {
  const modalId = 'orderSuccessModal';
  let modalEl = document.getElementById(modalId);

  if (!modalEl) {
    const modalHtml = `
      <div class="modal fade" id="${modalId}" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0 rounded-4 shadow-lg overflow-hidden">
            <div class="modal-body p-5 text-center">
              <div class="mb-4">
                <div class="display-1 text-success mb-3">✅</div>
                <h3 class="fw-bold">Pesanan Berhasil!</h3>
                <p class="text-muted">Terima kasih telah berbelanja di Crumb & Crust. Admin kami akan segera menghubungi Anda melalui WhatsApp.</p>
              </div>
              <button type="button" class="btn btn-primary-custom btn-lg rounded-pill px-5 w-100" data-bs-dismiss="modal">Tutup</button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    modalEl = document.getElementById(modalId);
  }

  const bsModal = new bootstrap.Modal(modalEl);
  bsModal.show();

  modalEl.addEventListener('hidden.bs.modal', () => {
    window.location.href = 'index.html';
  });
};

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
    // Dynamic QRIS update
    const updateQRIS = () => {
      const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
      const qrisImg = document.getElementById('qris-image');
      if (qrisImg) {
        qrisImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=PRODUK_CRUMB_CRUST_TOTAL_${totalAmount}`;
      }
    };

    renderCartPage(); // Ensure total is calculated
    updateQRIS();

    checkoutFormPage.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (cart.length === 0) {
        alert('Keranjang masih kosong!');
        return;
      }

      const proofFile = document.getElementById('payment-proof').files[0];
      if (!proofFile) {
        alert('Silakan upload bukti transfer terlebih dahulu.');
        return;
      }

      const btnSubmit = checkoutFormPage.querySelector('button[type="submit"]');
      const originalText = btnSubmit.textContent;
      btnSubmit.textContent = 'Memproses...';
      btnSubmit.disabled = true;

      // Convert file to Base64
      const fileToBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });

      try {
        const proofBase64 = await fileToBase64(proofFile);
        const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        
        const formData = {
          customer_name: document.getElementById('name').value,
          phone: document.getElementById('whatsapp').value,
          address: document.getElementById('address').value,
          weight: cart.reduce((sum, item) => sum + item.qty, 0),
          price: totalAmount,
          // Store payment info inside the items field to avoid DB column errors
          items: {
            cart: cart,
            payment: {
              method: document.getElementById('paymentMethod').value,
              proof: proofBase64
            }
          },
          status: 'pending'
        };

        const { error } = await window.db.from('orders').insert([formData]);
        if (error) throw error;

        cart = [];
        saveCart();
        showOrderSuccessModal();
      } catch (error) {
        alert('Terjadi kesalahan: ' + (error.message || 'Gagal memproses pesanan'));
        console.error(error);
      } finally {
        btnSubmit.textContent = originalText;
        btnSubmit.disabled = false;
      }
    });
  }
}

// --- ORDER HISTORY TRACKING ---
const btnTrackOrder = document.getElementById('btn-track-order');
const trackPhoneInput = document.getElementById('track-phone');
const orderHistoryList = document.getElementById('order-history-list');

const fetchOrderHistory = async (phone) => {
  try {
    orderHistoryList.innerHTML = '<div class="text-center py-5"><div class="spinner-border text-primary-custom" role="status"></div><p class="mt-2">Mencari pesanan...</p></div>';
    
    const { data: orders, error } = await window.db
      .from('orders')
      .select('*')
      .eq('phone', phone)
      .order('created_at', { ascending: false });

    if (error) throw error;

    if (!orders || orders.length === 0) {
      orderHistoryList.innerHTML = '<div class="text-center py-5 text-muted"><p>Tidak ada pesanan ditemukan untuk nomor ini.</p></div>';
      return;
    }

    orderHistoryList.innerHTML = orders.map(order => {
      // Handle both old and new data structure
      const cartItems = Array.isArray(order.items) ? order.items : (order.items?.cart || []);
      const itemsHtml = cartItems.map(i => `${i.qty}x ${i.name}`).join(', ');
      
      const statusBadge = order.status === 'pending' 
        ? '<span class="badge bg-warning text-dark rounded-pill">Menunggu Konfirmasi</span>' 
        : '<span class="badge bg-success rounded-pill">Pesanan Dikonfirmasi</span>';

      return `
        <div class="card border-0 shadow-sm rounded-3 p-3">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <div>
              <h6 class="fw-bold mb-1">Order #${order.id.toString().slice(-4)}</h6>
              <small class="text-muted">${new Date(order.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</small>
            </div>
            ${statusBadge}
          </div>
          <div class="mb-2">
            <small class="d-block text-muted small">Item:</small>
            <p class="mb-0 small">${itemsHtml}</p>
          </div>
          <div class="d-flex justify-content-between align-items-center mt-2 pt-2 border-top">
            <span class="text-muted small">Total Pembayaran</span>
            <span class="fw-bold text-primary-custom">${formatRupiah(order.price)}</span>
          </div>
        </div>
      `;
    }).join('');

  } catch (err) {
    console.error(err);
    orderHistoryList.innerHTML = '<div class="text-center py-5 text-danger"><p>Gagal memuat data. Silakan coba lagi.</p></div>';
  }
};

const itemsPreview = (items) => {
  if (!items) return '-';
  const names = items.map(i => i.name);
  return names.slice(0, 3).join(', ') + (names.length > 3 ? '...' : '');
};

if (btnTrackOrder) {
  btnTrackOrder.addEventListener('click', () => {
    const phone = trackPhoneInput.value.trim();
    if (phone) {
      fetchOrderHistory(phone);
    } else {
      alert('Masukkan nomor WhatsApp terlebih dahulu');
    }
  });
}

// Initial Sync
updateCartCount();
