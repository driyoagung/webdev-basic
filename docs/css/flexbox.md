# CSS Flexbox (Layout 1 Dimensi)

**Flexbox** (Flexible Box Module) adalah fitur CSS revolusioner yang ditujukan untuk mengatur layout dan menjajarkan elemen-elemen secara dinamis di dalam suatu wadah (container), bahkan ketika ukuran elemen tidak diketahui atau berubah-ubah ukurannya (*responsive*).

Sebelum Flexbox ada, developer memakai teknik usang seperti `float`, `table`, atau `position` yang sangat merepotkan hanya untuk memposisikan suatu div ke tengah (center).

## Konsep Flexbox: Container dan Item
Flexbox bekerja pada hubungan Ayah-Anak (Parent-Child).
Anda memberikan properti `display: flex;` pada elemen wadah (Parent/Container). Otomatis, anak-anak di dalamnya (Items) menjadi *flex-items*.

## Properti Flex Container (Wadah)

### 1. `display: flex;`
Menyalakan kekuatan Flexbox pada kontainer tersebut.

### 2. `flex-direction` (Arah Alur)
Menentukan sumbu arah anak-anaknya dijajarkan.
- `row` (Default): Mendatar dari kiri ke kanan.
- `column`: Menurun dari atas ke bawah.
- `row-reverse` / `column-reverse`: Arah berlawanan.

### 3. `justify-content` (Perataan Sumbu Utama/Mendatar)
Bagaimana elemen didistribusikan secara horizontal (jika `flex-direction: row`).
- `flex-start` (Default): Merapat ke kiri.
- `center`: Merapat ke tengah.
- `flex-end`: Merapat ke kanan.
- `space-between`: Diberi jarak maksimal antar item (item pertama nempel kiri, item terakhir nempel kanan).
- `space-evenly`: Jarak merata di setiap celah.

### 4. `align-items` (Perataan Sumbu Silang/Vertikal)
Bagaimana elemen dijajarkan secara vertikal.
- `stretch` (Default): Item akan ditarik memenuhi tinggi wadah.
- `center`: Item berada persis di tengah-tengah secara vertikal.
- `flex-start` / `flex-end`: Merapat ke atas / bawah.

### 5. `gap`
Menambahkan jarak konstan di antara elemen-elemen flex. (Sangat disarankan dibanding menggunakan margin antar item).

## Preview Flexbox: Membuat Navbar & Center Box

Mari kita lihat kehebatan Flexbox dalam dunia nyata:

### Contoh 1: Membuat Navbar Sejajar Kanan-Kiri
```html
<style scoped>
  .navbar-flex {
    display: flex; /* Nyalakan flexbox */
    justify-content: space-between; /* Pisahkan kiri dan kanan ke ujung */
    align-items: center; /* Rata tengah secara vertikal */
    background-color: #333;
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
  }
  .nav-links {
    display: flex; /* Flex di dalam flex! Untuk jejerkan menu */
    gap: 15px; /* Jarak antar menu 15px */
    list-style: none; /* Hilangkan titik bullet */
    margin: 0; padding: 0;
  }
  .nav-links li { cursor: pointer; }
  .nav-links li:hover { color: #4CAF50; }
</style>

<nav class="navbar-flex">
  <div class="logo"><strong>MY-LOGO</strong></div>
  <ul class="nav-links">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</nav>
```

<div class="preview-box">
<style scoped>
  .navbar-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
  }
  .nav-links {
    display: flex;
    gap: 15px;
    list-style: none;
    margin: 0; padding: 0;
  }
  .nav-links li { cursor: pointer; }
  .nav-links li:hover { color: #4CAF50; }
</style>
<nav class="navbar-flex">
  <div class="logo"><strong>MY-LOGO</strong></div>
  <ul class="nav-links">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</nav>
</div>

### Contoh 2: Cara Legendaris Memposisikan Elemen ke Tengah Persis (Dead Center)
Dulu ini adalah hal yang paling sulit dilakukan di CSS. Dengan Flexbox, cukup 3 baris kode!

```html
<style scoped>
  .super-center {
    display: flex;
    justify-content: center; /* Tengah secara Horizontal */
    align-items: center; /* Tengah secara Vertikal */
    height: 150px; /* Beri tinggi pada kontainer */
    background-color: #e0f7fa;
    border: 2px dashed #00bcd4;
    border-radius: 8px;
  }
  .kotak-kecil {
    background: #00bcd4;
    color: white;
    padding: 15px;
    font-weight: bold;
    border-radius: 4px;
  }
</style>

<div class="super-center">
  <div class="kotak-kecil">Saya di tengah persis!</div>
</div>
```

<div class="preview-box">
<style scoped>
  .super-center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    background-color: #e0f7fa;
    border: 2px dashed #00bcd4;
    border-radius: 8px;
  }
  .kotak-kecil {
    background: #00bcd4;
    color: white;
    padding: 15px;
    font-weight: bold;
    border-radius: 4px;
  }
</style>
<div class="super-center">
  <div class="kotak-kecil">Saya di tengah persis!</div>
</div>
</div>
