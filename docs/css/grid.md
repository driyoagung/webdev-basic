# CSS Grid (Layout 2 Dimensi)

Jika **Flexbox** sangat handal untuk mengatur layout 1 dimensi (hanya baris ATAU kolom), maka **CSS Grid** adalah raja untuk layout 2 dimensi (mengatur baris DAN kolom secara serentak). Grid diciptakan untuk membagi ruang halaman menjadi area kotak-kotak besar.

## Konsep Dasar Grid

Sama seperti flexbox, Grid diaktifkan pada elemen wadah (Container). 
Setelah wadah menjadi Grid, Anda bisa memotong-motongnya menjadi beberapa **kolom** (vertikal) dan **baris** (horizontal).

### Properti Utama Grid
- `display: grid;`: Mengaktifkan mode grid.
- `grid-template-columns`: Menentukan jumlah dan lebar kolom.
- `grid-template-rows`: Menentukan jumlah dan tinggi baris.
- `gap`: Jarak antar kotak (kolom/baris).

### Unit Super Grid: `fr` (Fraction)
Grid memperkenalkan satuan ukuran baru bernama `fr` (Fraksi/Bagian). 
Jika Anda menulis `1fr 1fr 1fr`, artinya Anda membagi ruang menjadi 3 kolom yang lebarnya **sama rata**, berapapun sisa ruang yang ada. Ini jauh lebih mudah daripada menghitung persen (seperti 33.333%).

## Preview: Membuat Layout Galeri Foto

Mari kita buat grid galeri foto 3 kolom yang rapi dengan `gap`.

```html
<style scoped>
  .grid-container {
    display: grid;
    /* Membuat 3 kolom sama besar */
    grid-template-columns: 1fr 1fr 1fr; 
    gap: 15px; /* Jarak antar kotak */
  }
  
  .grid-item {
    background-color: #673AB7;
    color: white;
    padding: 20px;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 8px;
  }
</style>

<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>
```

<div class="preview-box">
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>
</div>

<style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
    gap: 15px;
  }
  .grid-item {
    background-color: #673AB7;
    color: white;
    padding: 20px;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 8px;
  }
</style>

## Kapan Menggunakan Grid vs Flexbox?

- **Gunakan Flexbox** saat Anda ingin menjejerkan elemen di satu arah (misalnya: menu navigasi mendatar, jejeran tombol, memposisikan ikon di sebelah teks).
- **Gunakan Grid** saat Anda memikirkan kerangka/layout besar website (misalnya: Header di atas, Sidebar di kiri, Konten di kanan, dan Footer di bawah), atau saat membuat daftar produk E-Commerce (Galeri Card).

**Seringkali, Keduanya Digabung!**
Sangat umum sebuah *website* menggunakan Grid untuk mengatur struktur luarnya (Main layout), lalu menggunakan Flexbox di dalam kotak grid tersebut untuk meratakan elemen di dalamnya (seperti menengahkan tombol di dalam card).
