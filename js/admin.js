

const ordersTableBody = document.getElementById('orders-table-body');
const totalRevenueEl = document.getElementById('total-revenue');
const totalOrdersEl = document.getElementById('total-orders');

const formatRupiah = (number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
};

const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleDateString('id-ID', {
    day: 'numeric', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });
};

const fetchOrders = async () => {
  try {
    ordersTableBody.innerHTML = '<tr><td colspan="6" style="text-align:center;">Memuat data pesanan...</td></tr>';

    const { data: orders, error } = await window.db
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    if (!orders || orders.length === 0) {
      ordersTableBody.innerHTML = '<tr><td colspan="6" style="text-align:center;">Belum ada pesanan.</td></tr>';
      totalOrdersEl.textContent = '0';
      totalRevenueEl.textContent = 'Rp 0';
      return;
    }

    let totalRevenue = 0;
    ordersTableBody.innerHTML = '';

    orders.forEach(order => {
      totalRevenue += order.price;

      const tr = document.createElement('tr');

      const itemsList = order.items
        ? order.items.map(i => `${i.qty}x ${i.name}`).join(', ')
        : '-';

      tr.innerHTML = `
    <td>#${order.id.toString().slice(-4)}</td>
    <td>
      <strong>${order.customer_name}</strong><br>
      <small>${order.phone}</small>
    </td>
    <td><small>${itemsList}</small></td>
    <td>${formatRupiah(order.price)}</td>
    <td>-</td>
    <td>
      <span class="badge ${order.status === 'pending' ? 'bg-warning text-dark' : 'bg-success'} rounded-pill px-3">
        ${order.status}
      </span>
    </td>
  `;

      ordersTableBody.appendChild(tr);
    });

    totalOrdersEl.textContent = orders.length;
    totalRevenueEl.textContent = formatRupiah(totalRevenue);

  } catch (err) {
    console.error(err);
    ordersTableBody.innerHTML = '<tr><td colspan="6" style="text-align:center; color: red;">Gagal memuat pesanan.</td></tr>';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  fetchOrders();
  // Refresh data every 30 seconds
  setInterval(fetchOrders, 30000);
});
