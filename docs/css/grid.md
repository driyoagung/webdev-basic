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

---

## Subgrid — Menyelaraskan Grid Anak dengan Parent

`subgrid` memungkinkan grid item untuk **mewarisi** definisi kolom/baris dari parent grid-nya. Sangat berguna ketika Anda memiliki card di dalam grid dan ingin elemen di dalam card tersebut sejajar dengan grid parent.

```css
.grid-parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.grid-child {
  display: grid;
  grid-template-columns: subgrid; /* Ikuti kolom parent! */
  grid-row: span 1;
}
```

<div class="preview-box">
<p style="margin-top:0;font-weight:bold;font-size:0.85rem;">Card dengan subgrid — judul dan tombol sejajar antar card</p>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">
  <div style="display:grid;grid-template-columns:subgrid;grid-row:span 1;border:1px solid #ddd;border-radius:8px;overflow:hidden;">
    <div style="padding:12px;"><strong style="font-size:0.9rem;">Card Pendek</strong><p style="margin:4px 0 0 0;font-size:0.8rem;color:#666;">Deskripsi singkat</p></div>
    <div style="padding:8px 12px;background:#f5f5f5;border-top:1px solid #eee;text-align:center;color:#2196F3;font-size:0.8rem;">Beli →</div>
  </div>
  <div style="display:grid;grid-template-columns:subgrid;grid-row:span 1;border:1px solid #ddd;border-radius:8px;overflow:hidden;">
    <div style="padding:12px;"><strong style="font-size:0.9rem;">Card dengan Judul yang Lebih Panjang</strong><p style="margin:4px 0 0 0;font-size:0.8rem;color:#666;">Deskripsi agak panjang.</p></div>
    <div style="padding:8px 12px;background:#f5f5f5;border-top:1px solid #eee;text-align:center;color:#2196F3;font-size:0.8rem;">Beli →</div>
  </div>
  <div style="display:grid;grid-template-columns:subgrid;grid-row:span 1;border:1px solid #ddd;border-radius:8px;overflow:hidden;">
    <div style="padding:12px;"><strong style="font-size:0.9rem;">Card Sedang</strong><p style="margin:4px 0 0 0;font-size:0.8rem;color:#666;">Cukup.</p></div>
    <div style="padding:8px 12px;background:#f5f5f5;border-top:1px solid #eee;text-align:center;color:#2196F3;font-size:0.8rem;">Beli →</div>
  </div>
</div>
</div>

> **Catatan:** Dukungan browser untuk `subgrid` sudah tersedia di semua browser modern sejak 2023 (Chrome 117+, Firefox 71+, Safari 16+).

---

## `grid-auto-flow` — Arah Alur Item Otomatis

`grid-auto-flow` mengontrol bagaimana item yang **tidak ditempatkan secara eksplisit** akan dialirkan ke dalam grid:

| Nilai | Deskripsi |
|---|---|
| `row` | Item dialirkan per baris dari kiri ke kanan (Default) |
| `column` | Item dialirkan per kolom dari atas ke bawah |
| `dense` | Algoritma "padat" — mengisi celah kosong yang ada |

```css
.grid { grid-auto-flow: row; }     /* Default: isi baris dulu */
.grid { grid-auto-flow: column; }  /* Isi kolom dulu */
.grid { grid-auto-flow: dense; }   /* Isi celah kosong */
```

<div class="preview-box">
<p style="margin-top:0;font-weight:bold;font-size:0.85rem;">grid-auto-flow: column — item mengalir ke bawah dulu</p>
<div style="display:grid;grid-template-columns:repeat(3,1fr);grid-auto-flow:column;grid-template-rows:repeat(3,60px);gap:8px;">
  <div style="background:#2196F3;color:white;padding:10px;border-radius:4px;text-align:center;display:flex;align-items:center;justify-content:center;">1</div>
  <div style="background:#2196F3;color:white;padding:10px;border-radius:4px;text-align:center;display:flex;align-items:center;justify-content:center;">2</div>
  <div style="background:#2196F3;color:white;padding:10px;border-radius:4px;text-align:center;display:flex;align-items:center;justify-content:center;">3</div>
  <div style="background:#2196F3;color:white;padding:10px;border-radius:4px;text-align:center;display:flex;align-items:center;justify-content:center;">4</div>
  <div style="background:#2196F3;color:white;padding:10px;border-radius:4px;text-align:center;display:flex;align-items:center;justify-content:center;">5</div>
  <div style="background:#2196F3;color:white;padding:10px;border-radius:4px;text-align:center;display:flex;align-items:center;justify-content:center;">6</div>
</div>
<p style="text-align:center;font-size:0.8rem;color:gray;margin-top:8px;">Perhatikan: item 1-3 mengisi kolom 1 (atas ke bawah), lalu item 4-6 di kolom 2, dst.</p>
</div>

Nilai `dense` sangat berguna untuk mengisi celah kosong yang terjadi akibat item dengan `grid-column: span 2`:

```css
.grid-foto {
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: dense; /* Isi celah kosong dengan foto kecil */
}
```

---

## `grid-auto-rows` & `grid-auto-columns` — Ukuran Implicit Track

Ketika Anda tidak mendefinisikan `grid-template-rows` secara eksplisit, grid akan membuat **implicit rows** secara otomatis. `grid-auto-rows` menentukan tinggi baris-baris implicit tersebut.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 150px; /* Setiap baris baru tingginya 150px */
}
```

<div class="preview-box">
<p style="margin-top:0;font-weight:bold;font-size:0.85rem;">grid-auto-rows: 80px — setiap baris implicit setinggi 80px</p>
<div style="display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:80px;gap:8px;">
  <div style="background:#E91E63;color:white;padding:10px;border-radius:4px;display:flex;align-items:center;justify-content:center;">1</div>
  <div style="background:#E91E63;color:white;padding:10px;border-radius:4px;display:flex;align-items:center;justify-content:center;">2</div>
  <div style="background:#E91E63;color:white;padding:10px;border-radius:4px;display:flex;align-items:center;justify-content:center;">3</div>
  <div style="background:#E91E63;color:white;padding:10px;border-radius:4px;display:flex;align-items:center;justify-content:center;">4</div>
  <div style="background:#E91E63;color:white;padding:10px;border-radius:4px;display:flex;align-items:center;justify-content:center;">5</div>
</div>
<p style="text-align:center;font-size:0.8rem;color:gray;margin-top:8px;">Tidak perlu mendefinisikan baris satu per satu — setiap baris otomatis 80px.</p>
</div>

```css
/* Ukuran minimum konten dengan auto */
.grid { grid-auto-rows: auto; }  /* Tinggi mengikuti konten */

/* Ukuran fleksibel dengan minmax */
.grid { grid-auto-rows: minmax(100px, auto); } /* Minimal 100px, bisa lebih */
```

---

## Line Naming — Memberi Nama pada Grid Lines

Selain menggunakan angka, Anda bisa memberi **nama** pada garis grid (grid lines) untuk kode yang lebih mudah dibaca:

```css
.container {
  display: grid;
  grid-template-columns:
    [col-start] 1fr [main-start] 2fr [main-end] 1fr [col-end];
  grid-template-rows:
    [header-start] 60px [header-end main-start] 1fr [main-end footer-start] 50px [footer-end];
}

.header  { grid-column: col-start / col-end; grid-row: header-start / header-end; }
.content { grid-column: main-start / main-end; grid-row: main-start / main-end; }
.footer  { grid-column: col-start / col-end; grid-row: footer-start / footer-end; }
```

<div class="preview-box">
<p style="margin-top:0;font-weight:bold;font-size:0.85rem;">Layout dengan Named Grid Lines</p>
<div style="display:grid;grid-template-columns:[c1] 80px [c2] 1fr [c3];grid-template-rows:[r1] 40px [r2] 1fr [r3] 30px [r4];gap:6px;min-height:180px;">
  <div style="grid-column:c1/c3;grid-row:r1/r2;background:#333;color:white;padding:8px;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:0.8rem;">HEADER (c1/c3, r1/r2)</div>
  <div style="grid-column:c1/c2;grid-row:r2/r3;background:#795548;color:white;padding:8px;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:0.8rem;">SIDEBAR (c1/c2)</div>
  <div style="grid-column:c2/c3;grid-row:r2/r3;background:#2196F3;color:white;padding:8px;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:0.8rem;">CONTENT (c2/c3)</div>
  <div style="grid-column:c1/c3;grid-row:r3/r4;background:#607D8B;color:white;padding:6px;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:0.75rem;">FOOTER (c1/c3)</div>
</div>
</div>

> **Tips:** Satu garis bisa punya banyak nama: `[main-end footer-start]`. Ini berguna saat dua area bertemu di garis yang sama.

---

## Container Queries (`@container`)

Selama bertahun-tahun kita hanya bisa menggunakan `@media` (berbasis viewport). **Container Queries** adalah fitur revolusioner yang memungkinkan styling berdasarkan **ukuran container/parent**, bukan viewport. Sangat berguna untuk komponen yang bisa ditempatkan di berbagai konteks (sidebar sempit, konten lebar, dll).

```css
/* 1. Definisikan container */
.card-wrapper {
  container-type: inline-size; /* Pantau lebar container */
  container-name: card;        /* Nama opsional */
}

/* 2. Query berdasarkan ukuran container */
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 150px 1fr; /* Layout horizontal jika cukup lebar */
  }
}
@container (max-width: 399px) {
  .card {
    grid-template-columns: 1fr; /* Layout vertikal jika sempit */
  }
}
```

<div class="preview-box">
<p style="margin-top:0;font-weight:bold;font-size:0.85rem;">Container Query — card berubah layout berdasarkan lebar containernya</p>
<div style="display:flex;gap:12px;">
  <div style="flex:1;container-type:inline-size;border:2px dashed #2196F3;border-radius:8px;padding:8px;">
    <p style="font-size:0.7rem;color:#999;margin:0 0 6px 0;">Container Sempit</p>
    <div style="display:grid;grid-template-columns:1fr;gap:6px;">
      <div style="background:#E3F2FD;padding:12px;border-radius:4px;text-align:center;font-size:0.8rem;">🖼 Foto</div>
      <div style="font-size:0.85rem;"><strong>Judul Card</strong><p style="margin:2px 0 0 0;color:#666;font-size:0.75rem;">Deskripsi di bawah foto.</p></div>
    </div>
  </div>
  <div style="flex:2.5;container-type:inline-size;border:2px dashed #4CAF50;border-radius:8px;padding:8px;">
    <p style="font-size:0.7rem;color:#999;margin:0 0 6px 0;">Container Lebar</p>
    <div style="display:grid;grid-template-columns:120px 1fr;gap:10px;">
      <div style="background:#E8F5E9;padding:12px;border-radius:4px;text-align:center;font-size:0.8rem;">🖼 Foto</div>
      <div style="font-size:0.85rem;"><strong>Judul Card</strong><p style="margin:2px 0 0 0;color:#666;font-size:0.75rem;">Deskripsi di samping foto karena container cukup lebar.</p></div>
    </div>
  </div>
</div>
</div>

---

## `aspect-ratio` untuk Grid Cell

Properti `aspect-ratio` memastikan grid cell mempertahankan rasio lebar-tinggi tertentu — sangat berguna untuk galeri foto, thumbnail video, atau card persegi:

```css
.grid-kotak {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.grid-kotak > * {
  aspect-ratio: 1; /* Setiap cell selalu persegi (1:1) */
  object-fit: cover; /* Untuk gambar */
}
```

<div class="preview-box">
<p style="margin-top:0;font-weight:bold;font-size:0.85rem;">Grid cell dengan aspect-ratio: 1 (persegi sempurna)</p>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
  <div style="aspect-ratio:1;background:#E91E63;color:white;border-radius:6px;display:flex;align-items:center;justify-content:center;font-weight:bold;">1:1</div>
  <div style="aspect-ratio:1;background:#2196F3;color:white;border-radius:6px;display:flex;align-items:center;justify-content:center;font-weight:bold;">1:1</div>
  <div style="aspect-ratio:1;background:#4CAF50;color:white;border-radius:6px;display:flex;align-items:center;justify-content:center;font-weight:bold;">1:1</div>
</div>
<p style="text-align:center;font-size:0.8rem;color:gray;margin-top:8px;">Resize browser — cell tetap persegi (lebar = tinggi).</p>
</div>

```css
/* Rasio video 16:9 */
.video-thumb { aspect-ratio: 16 / 9; }

/* Rasio foto 4:3 */
.foto { aspect-ratio: 4 / 3; }
```

---

## Fallback untuk Browser Lama — `@supports`

Tidak semua browser mendukung CSS Grid (terutama versi lama). **Feature Query** (`@supports`) memungkinkan Anda memberikan fallback:

```css
/* Fallback: layout tanpa Grid (float atau inline-block) */
.card-container {
  overflow: auto; /* Clearfix */
}
.card {
  float: left;
  width: 48%;
  margin: 1%;
}

/* Jika browser mendukung Grid, gunakan Grid */
@supports (display: grid) {
  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;
  }
  .card {
    float: none;  /* Reset float */
    width: auto;
    margin: 0;
  }
}
```

```css
/* Cek fitur spesifik */
@supports (grid-template-rows: subgrid) {
  /* Kode khusus browser yang mendukung subgrid */
}
@supports not (aspect-ratio: 1) {
  /* Fallback padding-bottom hack untuk browser lama */
  .kotak { padding-bottom: 100%; }
}
```

> **Realita 2026:** Dukungan Grid sudah 97%+ secara global. Fallback float biasanya hanya diperlukan untuk proyek yang harus mendukung IE11 atau browser sangat tua.

---

## Masonry Layout — Konsep Singkat

**Masonry layout** adalah tata letak seperti susunan batu bata — kolom dengan tinggi item berbeda-beda yang saling mengisi celah. CSS Grid Level 3 sedang mengembangkan `masonry` sebagai nilai native, namun saat ini masih experimental.

### Alternatif Saat Ini: CSS Columns

```css
.masonry {
  column-count: 3;
  column-gap: 16px;
}
.masonry > * {
  break-inside: avoid;  /* Jangan potong item di tengah */
  margin-bottom: 16px;
}
```

<div class="preview-box">
<p style="margin-top:0;font-weight:bold;font-size:0.85rem;">Masonry dengan CSS Columns</p>
<div style="column-count:3;column-gap:12px;">
  <div style="break-inside:avoid;margin-bottom:12px;background:#E3F2FD;padding:20px;border-radius:6px;text-align:center;font-size:0.85rem;">Item 1</div>
  <div style="break-inside:avoid;margin-bottom:12px;background:#E3F2FD;padding:40px;border-radius:6px;text-align:center;font-size:0.85rem;">Item 2 (Tinggi)</div>
  <div style="break-inside:avoid;margin-bottom:12px;background:#E3F2FD;padding:15px;border-radius:6px;text-align:center;font-size:0.85rem;">Item 3</div>
  <div style="break-inside:avoid;margin-bottom:12px;background:#E3F2FD;padding:50px;border-radius:6px;text-align:center;font-size:0.85rem;">Item 4 (Sangat Tinggi)</div>
  <div style="break-inside:avoid;margin-bottom:12px;background:#E3F2FD;padding:25px;border-radius:6px;text-align:center;font-size:0.85rem;">Item 5</div>
  <div style="break-inside:avoid;margin-bottom:12px;background:#E3F2FD;padding:30px;border-radius:6px;text-align:center;font-size:0.85rem;">Item 6</div>
</div>
<p style="text-align:center;font-size:0.8rem;color:gray;margin-top:10px;">Perhatikan: item mengalir dari atas ke bawah per kolom (seperti koran), bukan kiri ke kanan.</p>
</div>

> **Catatan:** `column-count` mengalirkan item dari ATAS ke BAWAH per kolom (seperti teks koran), bukan kiri ke kanan. Jika Anda butuh aliran kiri-kanan, gunakan library JavaScript seperti Masonry.js hingga CSS Grid masonry native tersedia.
