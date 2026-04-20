const fs = require('fs'); 
const files = ['index.html', 'menu.html', 'roti.html', 'kue.html', 'makanan.html', 'minuman.html', 'cookies.html', 'cart.html']; 
const newNav = `<ul class="navbar-nav ms-auto align-items-center mt-3 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Beranda</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Kategori Menu
            </a>
            <ul class="dropdown-menu border-0 shadow-sm" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="menu.html">Semua Menu</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="roti.html">Roti</a></li>
              <li><a class="dropdown-item" href="kue.html">Kue</a></li>
              <li><a class="dropdown-item" href="makanan.html">Makanan</a></li>
              <li><a class="dropdown-item" href="minuman.html">Minuman</a></li>
              <li><a class="dropdown-item" href="cookies.html">Cookies</a></li>
            </ul>
          </li>
          <li class="nav-item ms-lg-3 mt-2 mt-lg-0">
            <a href="cart.html" class="btn btn-sm btn-primary-custom rounded-pill px-3 py-2 d-flex align-items-center gap-2" id="cart-btn-nav">
              🛒 <span id="cart-count" class="fw-bold">0</span>
            </a>
          </li>
        </ul>`; 

files.forEach(file => { 
  let content = fs.readFileSync(file, 'utf8'); 
  content = content.replace(/<ul class="navbar-nav ms-auto[\s\S]*?<\/ul>/, newNav); 
  fs.writeFileSync(file, content); 
}); 
console.log('Fixed navbars');
