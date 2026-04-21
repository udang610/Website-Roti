let ordersTableBody, totalRevenueEl, totalOrdersEl, monthlySalesBody, orderDetailContent, detailModal;
let paginationInfoEl, paginationTotalEl, btnPrev, btnNext;

let allOrders = [];
let salesChart = null;
let currentPage = 1;
const pageSize = 20;

const formatRupiah = (number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
};

const formatDate = (isoString) => {
  if (!isoString) return '-';
  const date = new Date(isoString.replace(' ', 'T'));
  if (isNaN(date.getTime())) return '-';

  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }) + ' pukul ' + date.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
};

const updateOrderStatus = async (id, newStatus) => {
  try {
    const { error } = await window.db.from('orders').update({ status: newStatus }).eq('id', id);
    if (error) throw error;
    fetchOrders(); // Refresh table
  } catch (err) {
    alert('Gagal memperbarui status');
    console.error(err);
  }
};

const showOrderDetails = (id) => {
  const order = allOrders.find(o => o.id == id);
  if (!order) return;

  const cartItems = Array.isArray(order.items) ? order.items : (order.items?.cart || []);
  const payment = Array.isArray(order.items) ? {} : (order.items?.payment || {});

  const itemsHtml = cartItems.map(i => `
    <div class="d-flex justify-content-between align-items-center border-bottom py-2">
      <div>
        <h6 class="mb-0 fw-bold">${i.name}</h6>
        <small class="text-muted">${formatRupiah(i.price)} x ${i.qty}</small>
      </div>
      <span class="fw-bold text-primary-custom">${formatRupiah(i.price * i.qty)}</span>
    </div>
  `).join('');

  orderDetailContent.innerHTML = `
    <div class="mb-3">
      <small class="text-muted d-block">ID Pesanan</small>
      <span class="fw-bold">#${order.id}</span>
    </div>
    <div class="row mb-3">
      <div class="col-6">
        <small class="text-muted d-block">Pelanggan</small>
        <span class="fw-bold">${order.customer_name}</span>
      </div>
      <div class="col-6">
        <small class="text-muted d-block">WhatsApp</small>
        <span class="fw-bold">${order.phone}</span>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-6">
        <small class="text-muted d-block">Metode Pembayaran</small>
        <span class="fw-bold text-uppercase">${payment.method || order.payment_method || 'Transfer'}</span>
      </div>
      <div class="col-6">
        <small class="text-muted d-block">Tanggal Pesanan</small>
        <span class="fw-bold">${formatDate(order.created_at)}</span>
      </div>
    </div>
    <div class="mb-3">
      <small class="text-muted d-block">Alamat Pengiriman</small>
      <span class="fw-bold">${order.address}</span>
    </div>
    ${(payment.proof || order.payment_proof) ? `
    <div class="mb-3">
      <small class="text-muted d-block mb-2">Bukti Pembayaran</small>
      <img src="${payment.proof || order.payment_proof}" class="img-fluid rounded-3 border shadow-sm" style="max-height: 300px; cursor: pointer;" onclick="window.open(this.src)">
    </div>
    ` : ''}
    <div class="mb-4">
      <small class="text-muted d-block mb-2">Item Pesanan</small>
      ${itemsHtml}
    </div>
    <div class="d-flex justify-content-between align-items-center pt-3 border-top">
      <h5 class="mb-0 fw-bold">Total Bayar</h5>
      <h4 class="mb-0 fw-bold text-primary-custom">${formatRupiah(order.price)}</h4>
    </div>
  `;
  detailModal.show();
};

const renderMonthlySales = (orders) => {
  if (!orders || orders.length === 0) return;
  const salesMap = {};

  orders.forEach(o => {
    if (!o.created_at) return;
    const d = new Date(o.created_at);
    // Ignore dates before 2020 (handles null/1970 cases)
    if (d.getFullYear() < 2020) return;

    const key = d.toLocaleDateString('id-ID', { month: 'short', year: 'numeric' });
    if (!salesMap[key]) {
      salesMap[key] = { count: 0, revenue: 0, date: d };
    }
    salesMap[key].count += 1;
    salesMap[key].revenue += (o.price || 0);
  });

  // Sort months chronologically
  const months = Object.keys(salesMap).sort((a, b) => salesMap[a].date - salesMap[b].date);
  const revenues = months.map(m => salesMap[m].revenue);

  if (monthlySalesBody) {
    // Show in descending order for the table
    const displayMonths = [...months].reverse();
    monthlySalesBody.innerHTML = displayMonths.map(month => `
      <tr>
        <td class="fw-bold text-dark text-start">${month}</td>
        <td class="text-primary-custom fw-bold text-end">${formatRupiah(salesMap[month].revenue)}</td>
      </tr>
    `).join('');
  }

  const chartEl = document.getElementById('salesChart');
  if (!chartEl) return;
  const ctx = chartEl.getContext('2d');
  if (salesChart) salesChart.destroy();

  try {
    salesChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: months,
        datasets: [{
          label: 'Pendapatan (Rp)',
          data: revenues,
          borderColor: '#E85D04',
          backgroundColor: 'rgba(232, 93, 4, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#E85D04',
          pointRadius: 5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: 'rgba(0,0,0,0.05)' },
            ticks: { callback: value => 'Rp ' + (value / 1000) + 'k' }
          },
          x: { grid: { display: false } }
        }
      }
    });
  } catch (chartErr) {
    console.error("Chart Error:", chartErr);
  }
};

const renderOrdersTable = () => {
  if (!ordersTableBody) return;

  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const pageOrders = allOrders.slice(start, end);

  ordersTableBody.innerHTML = '';

  if (pageOrders.length === 0) {
    ordersTableBody.innerHTML = '<tr><td colspan="6" class="text-center py-4">Tidak ada pesanan.</td></tr>';
  } else {
    pageOrders.forEach(order => {
      const tr = document.createElement('tr');
      const cartItems = Array.isArray(order.items) ? order.items : (order.items?.cart || []);
      const itemsPreview = cartItems.length > 0
        ? (cartItems.map(i => i.name).slice(0, 2).join(', ') + (cartItems.length > 2 ? '...' : ''))
        : '-';
      const payment = Array.isArray(order.items) ? {} : (order.items?.payment || {});
      const payMethod = payment.method || order.payment_method || 'transfer';

      tr.innerHTML = `
        <td class="px-4 text-muted small">#${order.id}</td>
        <td>
          <span class="fw-bold d-block">${order.customer_name}</span>
          <small class="text-muted">${order.phone}</small>
        </td>
        <td>
          <small class="d-block">${itemsPreview}</small>
          <span class="badge bg-light text-dark border extra-small mt-1 text-uppercase" style="font-size: 10px;">${payMethod}</span>
        </td>
        <td class="fw-bold">${formatRupiah(order.price)}</td>
        <td>
          <span class="badge ${order.status === 'pending' ? 'bg-warning text-dark' : 'bg-success'} rounded-pill px-3">
            ${order.status === 'pending' ? 'Menunggu' : 'Dikonfirmasi'}
          </span>
        </td>
        <td class="text-center">
          <div class="d-flex justify-content-center gap-2">
            <button class="btn btn-sm btn-outline-primary rounded-pill px-3 detail-btn" data-id="${order.id}">Detail</button>
            ${order.status === 'pending' ? `<button class="btn btn-sm btn-primary-custom rounded-pill px-3 confirm-btn" data-id="${order.id}">Konfirmasi</button>` : ''}
          </div>
        </td>
      `;
      ordersTableBody.appendChild(tr);
    });
  }

  // Update Pagination UI
  const total = allOrders.length;
  paginationTotalEl.textContent = total;
  paginationInfoEl.textContent = total > 0 ? `${start + 1} - ${Math.min(end, total)}` : '0 - 0';
  btnPrev.disabled = currentPage === 1;
  btnNext.disabled = end >= total;

  // Listeners
  document.querySelectorAll('.detail-btn').forEach(btn => {
    btn.addEventListener('click', () => showOrderDetails(btn.dataset.id));
  });
  document.querySelectorAll('.confirm-btn').forEach(btn => {
    btn.addEventListener('click', () => updateOrderStatus(btn.dataset.id, 'confirmed'));
  });
};

const fetchOrders = async () => {
  try {
    const { data: orders, error } = await window.db
      .from('orders')
      .select('*')
      .order('id', { ascending: false });

    if (error) throw error;
    allOrders = orders || [];

    let totalRevenue = 0;
    allOrders.forEach(o => totalRevenue += (o.price || 0));

    if (totalOrdersEl) totalOrdersEl.textContent = allOrders.length;
    if (totalRevenueEl) totalRevenueEl.textContent = formatRupiah(totalRevenue);

    renderMonthlySales(allOrders);
    renderOrdersTable();
  } catch (err) {
    console.error("Fetch Error:", err);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  ordersTableBody = document.getElementById('orders-table-body');
  totalRevenueEl = document.getElementById('total-revenue');
  totalOrdersEl = document.getElementById('total-orders');
  monthlySalesBody = document.getElementById('monthly-sales-body');
  orderDetailContent = document.getElementById('order-detail-content');
  paginationInfoEl = document.getElementById('pagination-info');
  paginationTotalEl = document.getElementById('pagination-total');
  btnPrev = document.getElementById('prev-page');
  btnNext = document.getElementById('next-page');

  const modalEl = document.getElementById('orderDetailModal');
  if (modalEl) detailModal = new bootstrap.Modal(modalEl);

  btnPrev.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderOrdersTable();
    }
  });

  btnNext.addEventListener('click', () => {
    if (currentPage * pageSize < allOrders.length) {
      currentPage++;
      renderOrdersTable();
    }
  });

  fetchOrders();
});
