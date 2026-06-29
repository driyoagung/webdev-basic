# CSS Grid (Layout 2 Dimensi)

Jika **Flexbox** handal mengatur layout 1 dimensi (baris ATAU kolom), maka **CSS Grid** adalah raja untuk layout **2 dimensi** (mengatur baris DAN kolom secara serentak). Grid diciptakan untuk membagi halaman menjadi area-area kotak besar seperti spreadsheet.

## Konsep Dasar Grid

Grid diaktifkan pada elemen wadah (Container) dengan `display: grid;`. Setelah itu Anda mendefinisikan berapa **kolom** dan **baris** yang diinginkan.

### Unit Spesial: `fr` (Fraction)
Grid memperkenalkan satuan `fr` (fraksi). `1fr` berarti "satu bagian dari sisa ruang yang tersedia". Ini jauh lebih mudah daripada menghitung persen.

---

## Properti Grid Container

### 1. `grid-template-columns` (Mendefinisikan Kolom)

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 1fr; /* 3 kolom: 200px tetap, 2 sisanya sama rata */
}
```

<div class="preview-box">
  <p style="margin-top:0;font-weight:bold;font-size:0.85rem;">grid-template-columns: 200px 1fr 1fr</p>
  <div style="display:grid;grid-template-columns:200px 1fr 1fr;gap:8px;">
    <div style="background:#2196F3;color:white;padding:12px;border-radius:4px;text-align:center;">200px (Tetap)</div>
    <div style="background:#4CAF50;color:white;padding:12px;border-radius:4px;text-align:center;">1fr (Fleksibel)</div>
    <div style="background:#4CAF50;color:white;padding:12px;border-radius:4px;text-align:center;">1fr (Fleksibel)</div>
  </div>
</div>

### 2. `grid-template-rows` (Mendefinisikan Baris)

```css
.container {
  grid-template-rows: 80px auto 60px; /* Header 80px, konten otomatis, footer 60px */
}
```

### 3. Fungsi `repeat()` (Pengulangan Otomatis)

Jika Anda ingin membuat banyak kolom dengan ukuran yang sama, tidak perlu menulis `1fr` berulang-ulang:

```css
grid-template-columns: repeat(3, 1fr);  /* Sama dengan: 1fr 1fr 1fr */
grid-template-columns: repeat(4, 150px); /* 4 kolom, masing-masing 150px */
```

<div class="preview-box">
  <p style="margin-top:0;font-weight:bold;font-size:0.85rem;">repeat(4, 1fr) — 4 Kolom Sama Rata</p>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
    <div style="background:#673AB7;color:white;padding:15px;border-radius:4px;text-align:center;">1</div>
    <div style="background:#673AB7;color:white;padding:15px;border-radius:4px;text-align:center;">2</div>
    <div style="background:#673AB7;color:white;padding:15px;border-radius:4px;text-align:center;">3</div>
    <div style="background:#673AB7;color:white;padding:15px;border-radius:4px;text-align:center;">4</div>
  </div>
</div>

### 4. Fungsi `minmax()` (Ukuran Minimum & Maksimum)

Sangat berguna untuk membuat kolom yang fleksibel tapi tidak pernah terlalu kecil:

```css
grid-template-columns: repeat(3, minmax(200px, 1fr));
/* Setiap kolom minimal 200px, maksimal 1fr */
```

### 5. `auto-fill` dan `auto-fit` (Grid Responsif Otomatis)

Ini adalah fitur **paling powerful** dari Grid untuk membuat layout responsif **TANPA media queries!**

```css
/* auto-fill: Buat kolom sebanyak mungkin yang muat, minimal 200px */
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

/* auto-fit: Sama, tapi kolom kosong akan "collapsed" (tidak makan ruang) */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

<div class="preview-box">
  <p style="margin-top:0;font-weight:bold;font-size:0.85rem;">repeat(auto-fit, minmax(150px, 1fr)) — Coba resize browser!</p>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;">
    <div style="background:#E91E63;color:white;padding:20px;border-radius:6px;text-align:center;font-weight:bold;">Card 1</div>
    <div style="background:#E91E63;color:white;padding:20px;border-radius:6px;text-align:center;font-weight:bold;">Card 2</div>
    <div style="background:#E91E63;color:white;padding:20px;border-radius:6px;text-align:center;font-weight:bold;">Card 3</div>
    <div style="background:#E91E63;color:white;padding:20px;border-radius:6px;text-align:center;font-weight:bold;">Card 4</div>
    <div style="background:#E91E63;color:white;padding:20px;border-radius:6px;text-align:center;font-weight:bold;">Card 5</div>
    <div style="background:#E91E63;color:white;padding:20px;border-radius:6px;text-align:center;font-weight:bold;">Card 6</div>
  </div>
  <p style="text-align:center;font-size:0.8rem;margin-top:10px;color:gray;"><em>💡 Perkecil/perbesar jendela browser. Card akan otomatis menyesuaikan tanpa @media query!</em></p>
</div>

### 6. `gap` (Jarak Antar Sel)

```css
.container {
  gap: 20px;         /* Jarak seragam baris dan kolom */
  row-gap: 10px;     /* Jarak khusus antar baris */
  column-gap: 20px;  /* Jarak khusus antar kolom */
}
```

---

## Properti Grid Items (Anak)

### 1. `grid-column` dan `grid-row` (Mengatur Posisi & Span Item)

Setiap item Grid bisa diposisikan secara manual dan dibuat memakan beberapa kolom/baris sekaligus (mirip *merge cells* di Excel).

```css
.item-besar {
  grid-column: 1 / 3; /* Mulai dari garis kolom 1, berakhir di garis kolom 3 (memakan 2 kolom) */
  grid-row: 1 / 3;    /* Mulai dari garis baris 1, berakhir di garis baris 3 (memakan 2 baris) */
}

/* Shorthand dengan span: */
.item-lebar {
  grid-column: span 2; /* Memakan 2 kolom dari posisi saat ini */
}
```

<div class="preview-box">
  <p style="margin-top:0;font-weight:bold;font-size:0.85rem;">Item 1 memakan 2 kolom (grid-column: span 2)</p>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
    <div style="background:#FF5722;color:white;padding:20px;border-radius:6px;text-align:center;font-weight:bold;grid-column:span 2;">Item 1 (span 2 kolom)</div>
    <div style="background:#607D8B;color:white;padding:20px;border-radius:6px;text-align:center;">Item 2</div>
    <div style="background:#607D8B;color:white;padding:20px;border-radius:6px;text-align:center;">Item 3</div>
    <div style="background:#607D8B;color:white;padding:20px;border-radius:6px;text-align:center;">Item 4</div>
    <div style="background:#607D8B;color:white;padding:20px;border-radius:6px;text-align:center;">Item 5</div>
  </div>
</div>

### 2. `grid-template-areas` (Penamaan Area — Fitur Terbaik Grid!)

Ini adalah fitur yang **tidak dimiliki Flexbox** dan menjadikan Grid sangat intuitif. Anda bisa memberi nama pada setiap area, lalu menggambar layout secara visual langsung di CSS!

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 60px 1fr 40px;
  grid-template-areas:
    "header  header"
    "sidebar content"
    "footer  footer";
  gap: 10px;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer  { grid-area: footer; }
```

<div class="preview-box">
  <p style="margin-top:0;font-weight:bold;font-size:0.85rem;">Layout Website dengan grid-template-areas</p>
  <div style="display:grid;grid-template-columns:180px 1fr;grid-template-rows:50px 120px 40px;grid-template-areas:'header header' 'sidebar content' 'footer footer';gap:8px;font-size:0.9rem;">
    <div style="grid-area:header;background:#333;color:white;padding:12px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-weight:bold;">🔝 HEADER</div>
    <div style="grid-area:sidebar;background:#795548;color:white;padding:12px;border-radius:6px;display:flex;align-items:center;justify-content:center;">📋 SIDEBAR</div>
    <div style="grid-area:content;background:#2196F3;color:white;padding:12px;border-radius:6px;display:flex;align-items:center;justify-content:center;">📝 CONTENT</div>
    <div style="grid-area:footer;background:#607D8B;color:white;padding:12px;border-radius:6px;display:flex;align-items:center;justify-content:center;">🔻 FOOTER</div>
  </div>
</div>

### 3. Alignment dalam Grid

Grid memiliki properti perataan yang mirip Flexbox tapi berlaku untuk 2 dimensi:

| Properti | Fungsi |
|---|---|
| `justify-items` | Perataan item secara horizontal di dalam sel mereka |
| `align-items` | Perataan item secara vertikal di dalam sel mereka |
| `place-items` | Shorthand: `align-items` + `justify-items` |
| `justify-content` | Perataan seluruh grid secara horizontal di dalam container |
| `align-content` | Perataan seluruh grid secara vertikal di dalam container |

---

## Studi Kasus: Dashboard Layout Lengkap

Mari kita gabungkan semua yang sudah dipelajari menjadi layout dashboard profesional:

```css
.dashboard {
  display: grid;
  grid-template-columns: 220px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header  header  header"
    "sidebar main    main"
    "sidebar footer  footer";
  min-height: 300px;
  gap: 10px;
}
```

<div class="preview-box">
  <div style="display:grid;grid-template-columns:160px 1fr 1fr;grid-template-rows:50px 1fr 1fr 40px;grid-template-areas:'header header header' 'sidebar main1 main2' 'sidebar main3 main4' 'footer footer footer';min-height:280px;gap:8px;font-size:0.8rem;">
    <div style="grid-area:header;background:linear-gradient(135deg,#1a237e,#283593);color:white;padding:12px 16px;border-radius:6px;display:flex;align-items:center;justify-content:space-between;">
      <strong>📊 Dashboard Admin</strong>
      <span>👤 Admin</span>
    </div>
    <div style="grid-area:sidebar;background:#37474F;color:white;padding:12px;border-radius:6px;">
      <p style="margin:0 0 8px 0;font-weight:bold;border-bottom:1px solid #546E7A;padding-bottom:8px;">Menu</p>
      <p style="margin:4px 0;cursor:pointer;">📈 Statistik</p>
      <p style="margin:4px 0;cursor:pointer;">👥 Pengguna</p>
      <p style="margin:4px 0;cursor:pointer;">📦 Produk</p>
      <p style="margin:4px 0;cursor:pointer;">⚙️ Pengaturan</p>
    </div>
    <div style="grid-area:main1;background:white;border:1px solid #e0e0e0;padding:12px;border-radius:6px;text-align:center;">
      <div style="font-size:1.5rem;font-weight:bold;color:#4CAF50;">1,240</div>
      <div style="font-size:0.75rem;color:#999;">Total User</div>
    </div>
    <div style="grid-area:main2;background:white;border:1px solid #e0e0e0;padding:12px;border-radius:6px;text-align:center;">
      <div style="font-size:1.5rem;font-weight:bold;color:#2196F3;">Rp 12.5M</div>
      <div style="font-size:0.75rem;color:#999;">Pendapatan</div>
    </div>
    <div style="grid-area:main3;background:white;border:1px solid #e0e0e0;padding:12px;border-radius:6px;text-align:center;">
      <div style="font-size:1.5rem;font-weight:bold;color:#FF9800;">328</div>
      <div style="font-size:0.75rem;color:#999;">Pesanan</div>
    </div>
    <div style="grid-area:main4;background:white;border:1px solid #e0e0e0;padding:12px;border-radius:6px;text-align:center;">
      <div style="font-size:1.5rem;font-weight:bold;color:#E91E63;">52</div>
      <div style="font-size:0.75rem;color:#999;">Produk Baru</div>
    </div>
    <div style="grid-area:footer;background:#ECEFF1;padding:8px 16px;border-radius:6px;display:flex;align-items:center;justify-content:center;color:#90A4AE;font-size:0.75rem;">
      &copy; 2026 Dashboard Admin — All Rights Reserved
    </div>
  </div>
</div>

---

## Kapan Grid vs Flexbox?

| Kebutuhan | Pilihan |
|---|---|
| Jejerkan menu/tombol horizontal | **Flexbox** |
| Posisikan elemen ke tengah | **Flexbox** |
| Layout halaman utama (Header, Sidebar, Konten, Footer) | **Grid** |
| Galeri Foto / Daftar Produk e-Commerce | **Grid** |
| Menyusun konten di dalam sebuah Card | **Flexbox** |
| Layout 2 dimensi yang kompleks | **Grid** |

> **Tips Pro:** Dalam dunia nyata, **keduanya selalu digabungkan!** Grid dipakai untuk kerangka layout luar, Flexbox dipakai di dalam setiap kotak Grid untuk menata isi kontennya.

---

## Cheat Sheet Grid

| Properti | Diterapkan di | Fungsi |
|---|---|---|
| `display: grid` | Container | Mengaktifkan Grid |
| `grid-template-columns` | Container | Jumlah dan lebar kolom |
| `grid-template-rows` | Container | Jumlah dan tinggi baris |
| `grid-template-areas` | Container | Penamaan area layout |
| `gap` | Container | Jarak antar sel |
| `repeat()` | Container | Fungsi pengulangan kolom/baris |
| `minmax()` | Container | Ukuran min-max kolom/baris |
| `auto-fit` / `auto-fill` | Container | Grid responsif otomatis |
| `grid-column` | Item | Posisi dan span kolom |
| `grid-row` | Item | Posisi dan span baris |
| `grid-area` | Item | Menetapkan area bernama |
