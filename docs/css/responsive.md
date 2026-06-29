# Responsive Design & Media Queries

**Responsive Web Design** (Desain Web Responsif) adalah pendekatan di mana tampilan website Anda dapat menyesuaikan ukuran secara otomatis agar terlihat bagus di semua perangkat (Desktop, Tablet, dan Smartphone).

Saat ini, pengunjung website yang menggunakan HP jauh lebih banyak daripada pengguna Laptop. Oleh karena itu, hukum wajib modern web development adalah **Mobile-First** (Desain untuk HP dulu, baru disesuaikan untuk layar besar).

## Media Queries (`@media`)

Media queries adalah cara CSS menerapkan gaya *berbeda* berdasarkan aturan tertentu (biasanya berdasarkan lebar layar browser pengguna).

Sintaks dasar:
```css
/* Gaya CSS Dasar (Mobile-First) */
.kotak {
  background-color: blue;
  width: 100%;
}

/* Jika lebar layar minimal 768px (Tablet & Desktop) */
@media (min-width: 768px) {
  .kotak {
    background-color: green; /* Warna berubah jadi hijau */
    width: 50%; /* Lebarnya menyusut jadi setengah */
  }
}
```

## Preview: Grid yang Responsif

Mari kita manfaatkan `@media` untuk mengubah layout kotak **Grid** yang sebelumnya kita pelajari. Kita akan membuat kotak yang berjumlah 1 kolom di HP, lalu berubah menjadi 2 kolom di Tablet, dan 4 kolom di layar besar.

```html
<style scoped>
  /* 1. Aturan Dasar untuk Layar Kecil (Mobile) */
  .grid-responsif {
    display: grid;
    grid-template-columns: 1fr; /* Hanya 1 Kolom */
    gap: 10px;
  }
  
  .kotak-r {
    background-color: #E91E63;
    color: white;
    padding: 15px;
    text-align: center;
    border-radius: 6px;
    font-weight: bold;
  }

  /* 2. Jika layar minimal 600px (Lebar Tablet/HP Landscape) */
  @media (min-width: 600px) {
    .grid-responsif {
      grid-template-columns: 1fr 1fr; /* Berubah jadi 2 Kolom */
    }
    .kotak-r { background-color: #9C27B0; } /* Ganti warna ungu */
  }

  /* 3. Jika layar minimal 900px (Desktop / Layar Lebar) */
  @media (min-width: 900px) {
    .grid-responsif {
      grid-template-columns: 1fr 1fr 1fr 1fr; /* Berubah jadi 4 Kolom */
    }
    .kotak-r { background-color: #3F51B5; } /* Ganti warna biru */
  }
</style>

<div class="grid-responsif">
  <div class="kotak-r">Kolom 1</div>
  <div class="kotak-r">Kolom 2</div>
  <div class="kotak-r">Kolom 3</div>
  <div class="kotak-r">Kolom 4</div>
</div>
```

<div class="preview-box">
<div class="grid-responsif">
  <div class="kotak-r">Kolom 1</div>
  <div class="kotak-r">Kolom 2</div>
  <div class="kotak-r">Kolom 3</div>
  <div class="kotak-r">Kolom 4</div>
</div>
<p style="text-align:center; font-size: 0.8rem; margin-top: 15px; color: gray;">
  <em>💡 Coba perkecil/perbesar ukuran jendela (window) browser Anda sekarang untuk melihat keajaibannya!</em>
</p>
</div>

<style scoped>
  .grid-responsif {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .kotak-r {
    background-color: #E91E63;
    color: white;
    padding: 15px;
    text-align: center;
    border-radius: 6px;
    font-weight: bold;
    transition: all 0.3s ease;
  }
  @media (min-width: 600px) {
    .grid-responsif { grid-template-columns: 1fr 1fr; }
    .kotak-r { background-color: #9C27B0; }
  }
  @media (min-width: 900px) {
    .grid-responsif { grid-template-columns: 1fr 1fr 1fr 1fr; }
    .kotak-r { background-color: #3F51B5; }
  }
</style>
