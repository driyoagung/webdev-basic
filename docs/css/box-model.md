# CSS Box Model

Konsep **Box Model** (Model Kotak) adalah konsep paling fundamental dalam CSS. Semua elemen HTML pada dasarnya adalah kotak persegi. 

Ketika kita mengatur jarak antar elemen atau ukuran sebuah elemen, kita harus memahami anatomi dari kotak tersebut yang terdiri dari 4 lapisan (dari dalam ke luar):
1. **Content**: Isi elemen itu sendiri (Teks atau Gambar).
2. **Padding**: Jarak transparant di dalam kotak (antara Content dan Border).
3. **Border**: Garis tepi yang mengelilingi Padding.
4. **Margin**: Jarak transparant di luar kotak (jarak antara kotak ini dengan kotak lainnya).

## Visualisasi Box Model

```html
<style scoped>
  .kotak-belajar {
    background-color: #E3F2FD; /* Warna latar belakang content */
    width: 200px;
    padding: 20px;
    border: 5px solid #2196F3;
    margin: 30px auto; /* 30px atas-bawah, rata tengah (auto) kiri-kanan */
    text-align: center;
    font-weight: bold;
  }
</style>

<div class="kotak-belajar">
  Ini adalah Konten
</div>
```

<div class="preview-box">
<div class="kotak-belajar">
  Ini adalah Konten (200px)
</div>
<div style="text-align:center; font-size: 0.8rem; color: gray;">
  ^ Kotak di atas memiliki Margin (luar), Border (biru 5px), dan Padding (ruang dalam 20px).
</div>
</div>

<style scoped>
  .kotak-belajar {
    background-color: #E3F2FD;
    width: 200px;
    padding: 20px;
    border: 5px solid #2196F3;
    margin: 30px auto;
    text-align: center;
    font-weight: bold;
    color: #333;
  }
</style>

## Membedah Properti Box Model

### 1. Margin
Mengatur jarak **luar** elemen. Margin tidak memiliki warna latar (selalu transparan).
```css
margin: 20px; /* Atas, Kanan, Bawah, Kiri semua 20px */
margin-top: 10px; /* Khusus atas */
margin: 10px 20px; /* Atas-Bawah 10px, Kiri-Kanan 20px */
```

### 2. Padding
Mengatur jarak **dalam** elemen. Jika elemen memiliki warna latar belakang (*background*), padding akan ikut terwarnai.
```css
padding: 15px; /* Semua sisi 15px */
padding-left: 20px; /* Khusus kiri */
```

### 3. Border
Garis tepi kotak. Membutuhkan 3 nilai: Ketebalan, Gaya garis (solid, dashed, dotted), dan Warna.
```css
border: 2px solid black; 
border-bottom: 1px dashed red; /* Hanya garis bawah yang putus-putus merah */
```

### 4. Width & Height
Lebar dan tinggi dari *Content* area.

---

## Masalah Klasik Lebar Kotak (Box-Sizing)

Secara bawaan CSS standar, jika Anda mengatur `width: 100px;`, lalu menambahkan `padding: 20px` dan `border: 5px`, maka total lebar kotak Anda menjadi:
**100 (width) + 40 (kiri-kanan padding) + 10 (kiri-kanan border) = 150px.**

Ini sering membuat elemen menjadi "tumpah" melebihi lebar layar.

### Solusi Modern: `box-sizing: border-box;`
Atribut sakti ini memaksa agar `width: 100px;` sudah mencakup Content + Padding + Border. Jika ada padding, konten di dalamnya akan mengecil agar lebar total elemen tetap persis 100px.

> **Tips Profesional:** Developer profesional web selalu memasukkan kode ini di baris paling atas CSS mereka agar perhitungan lebar selalu konsisten.

```css
/* Atur border-box untuk SEMUA elemen di HTML dengan selector Universal (*) */
* {
  box-sizing: border-box;
}
```

---

## Margin Collapse

**Margin collapse** adalah fenomena di mana dua margin vertikal yang bersentuhan akan "runtuh" (collapse) — hanya margin yang lebih besar yang dipertahankan, bukan dijumlahkan. Margin collapse HANYA terjadi pada arah **vertikal** (atas-bawah), tidak pada horizontal (kiri-kanan).

### Kasus 1: Margin Antar Sibling (Bersaudara)

Ketika dua elemen bersaudara memiliki `margin-bottom: 30px` dan `margin-top: 20px`, jarak antara mereka adalah **30px** (yang terbesar), **BUKAN 50px**.

```html
<style scoped>
  .box { background: #2196F3; color: white; padding: 15px; border-radius: 6px; text-align: center; }
  .mc-top    { margin-bottom: 30px; }
  .mc-bottom { margin-top: 20px; }
</style>
<div class="box mc-top">Box Atas (margin-bottom: 30px)</div>
<div class="box mc-bottom">Box Bawah (margin-top: 20px)</div>
```

<div class="preview-box">
<div class="box mc-top" style="margin-bottom:30px; background:#2196F3; color:white; padding:15px; border-radius:6px; text-align:center;">Box Atas (margin-bottom: 30px)</div>
<div class="box mc-bottom" style="margin-top:20px; background:#2196F3; color:white; padding:15px; border-radius:6px; text-align:center;">Box Bawah (margin-top: 20px)</div>
<div style="text-align:center; font-size:0.8rem; color:gray; margin-top:8px;">Jarak: 30px (bukan 50px!) — margin collapse.</div>
</div>

<style scoped>
  .mc-top    { margin-bottom: 30px; }
  .mc-bottom { margin-top: 20px; }
</style>

### Kasus 2: Margin Parent-Child (Ayah-Anak)

Jika sebuah child memiliki `margin-top: 40px`, margin tersebut bisa "tembus" ke parent — membuat parent ikut turun, bukan hanya child-nya. Ini terjadi karena tidak ada "penghalang" (border/padding) antara parent dan child.

```html
<style scoped>
  .mc-parent { background: #FF5722; border-radius: 8px; height: 180px; }
  .mc-child  { background: white; color: #333; padding: 20px; margin-top: 40px; text-align: center; border-radius: 6px; }
</style>
<div class="mc-parent">
  <div class="mc-child">Child dengan margin-top: 40px — parent ikut turun!</div>
</div>
```

<div class="preview-box">
<div class="mc-parent" style="background:#FF5722; border-radius:8px; height:180px;">
  <div class="mc-child" style="background:white; color:#333; padding:20px; margin-top:40px; text-align:center; border-radius:6px;">Child dengan margin-top: 40px — parent ikut turun!</div>
</div>
<div style="text-align:center; font-size:0.8rem; color:gray; margin-top:8px;">Margin child "bocor" ke parent karena tidak ada pembatas.</div>
</div>

<style scoped>
  .mc-parent { background: #FF5722; border-radius: 8px; height: 180px; }
  .mc-child  { background: white; color: #333; padding: 20px; margin-top: 40px; text-align: center; border-radius: 6px; }
</style>

### Solusi Margin Collapse

Tiga cara paling umum untuk mencegah margin collapse:

| Solusi | Kode | Kapan Dipakai |
|---|---|---|
| `overflow: auto` | `overflow: auto;` | Solusi paling bersih, buat BFC baru |
| `padding: 1px` | `padding: 1px;` (atau `padding-top: 1px`) | Jika overflow tidak cocok |
| `display: flex` | `display: flex;` | Jika parent bisa jadi flex container |

```css
/* Solusi 1: Buat Block Formatting Context baru */
.parent { overflow: auto; }

/* Solusi 2: Tambahkan padding tipis sebagai "penghalang" */
.parent { padding: 1px; }
/* atau */
.parent { padding-top: 1px; }

/* Solusi 3: Ubah menjadi flex container */
.parent { display: flex; flex-direction: column; }
```

> **Intinya:** Margin collapse hanya terjadi ketika tidak ada "penghalang" (border, padding, atau BFC) antara dua margin vertikal.

---

## Negative Margin

Margin bisa diberi nilai **negatif** (`margin: -10px`) untuk menarik elemen ke arah berlawanan — membuat elemen saling **overlap** (tumpang tindih). Teknik ini sangat berguna untuk membuat badge, label, atau elemen dekoratif.

```html
<style scoped>
  .neg-card { background: white; border: 1px solid #ddd; border-radius: 10px; padding: 25px; position: relative; max-width: 300px; margin: 30px auto; }
  .neg-badge { background: #E91E63; color: white; font-weight: bold; font-size: 0.8rem; padding: 6px 14px; border-radius: 6px; position: absolute; top: -12px; left: -12px; }
</style>
<div class="neg-card">
  <span class="neg-badge">🔥 HOT</span>
  <h4 style="margin:0 0 8px 0;">Judul Produk</h4>
  <p style="margin:0; color:#666; font-size:0.9rem;">Deskripsi singkat produk unggulan dengan badge menempel di pojok kiri atas.</p>
</div>
```

<div class="preview-box">
<div style="background:white; border:1px solid #ddd; border-radius:10px; padding:25px; position:relative; max-width:300px; margin:30px auto;">
  <span style="background:#E91E63; color:white; font-weight:bold; font-size:0.8rem; padding:6px 14px; border-radius:6px; position:absolute; top:-12px; left:-12px;">🔥 HOT</span>
  <h4 style="margin:0 0 8px 0;">Judul Produk</h4>
  <p style="margin:0; color:#666; font-size:0.9rem;">Deskripsi singkat produk unggulan dengan badge menempel di pojok kiri atas.</p>
</div>
</div>

Selain dengan `position: absolute`, negative margin juga bisa dipakai untuk:
- **Overlap horizontal**: `margin-left: -20px` pada avatar untuk membuat avatar saling tumpang tindih (avatar stack).
- **Full-bleed section**: `margin-inline: calc(-50vw + 50%)` untuk membuat elemen melebar penuh melebihi parent.

---

## Satuan Modern CSS

### `ch` — Lebar Karakter "0"

Satuan `ch` merepresentasikan lebar karakter angka `0` dalam font yang sedang digunakan. Sangat berguna untuk membatasi **lebar baris teks** agar nyaman dibaca (idealnya 45–75 karakter).

```css
article {
  max-width: 65ch; /* Lebar maksimal ~65 karakter — ideal untuk keterbacaan */
  margin-inline: auto;
}
```

### `vw` dan `vh` — Viewport Units

- **`1vw`** = 1% dari lebar viewport (jendela browser)
- **`1vh`** = 1% dari tinggi viewport

```css
.hero { height: 100vh; } /* Section full screen */
.title { font-size: 5vw; } /* Ukuran font mengecil/membesar mengikuti lebar layar */
```

<div class="preview-box">
<div style="font-size:4vw; font-weight:bold; text-align:center; padding:20px; background:#E3F2FD; border-radius:8px;">Teks dengan font-size: 4vw</div>
<p style="text-align:center; font-size:0.8rem; color:gray; margin-top:8px;">Coba resize browser — ukuran teks ikut berubah!</p>
</div>

### `dvh`, `svh`, `lvh` — Dynamic Viewport Height

`100vh` memiliki masalah di mobile browser: address bar browser HP tidak diperhitungkan, sehingga konten sering terpotong. **Dynamic viewport units** adalah solusinya:

| Satuan | Arti |
|---|---|
| `dvh` | Dynamic — mengikuti tinggi viewport saat ini (address bar terlihat/tidak) |
| `svh` | Small — tinggi viewport saat address bar **terbuka** (paling kecil) |
| `lvh` | Large — tinggi viewport saat address bar **tertutup** (paling besar) |

```css
.hero {
  min-height: 100dvh; /* Selalu memenuhi layar berapapun state address bar */
}
```

### `clamp()` — Fluid Sizing

`clamp(MIN, IDEAL, MAX)` memungkinkan ukuran yang fleksibel tanpa media query. CSS akan memilih nilai IDEAL, tapi tidak akan lebih kecil dari MIN atau lebih besar dari MAX.

```css
/* Ukuran font: minimal 1rem, ideal 2.5vw, maksimal 2rem */
h1 { font-size: clamp(1rem, 2.5vw, 2rem); }

/* Padding: minimal 1rem, ideal 5vw, maksimal 3rem */
section { padding: clamp(1rem, 5vw, 3rem); }

/* Lebar card: minimal 280px, ideal 50%, maksimal 500px */
.card { width: clamp(280px, 50%, 500px); }
```

<div class="preview-box">
<div style="font-size:clamp(1rem, 3vw, 1.8rem); font-weight:bold; padding:clamp(12px, 3vw, 30px); background:#FFF3E0; border-radius:8px; text-align:center;">
  clamp(12px, 3vw, 30px) padding + clamp(1rem, 3vw, 1.8rem) font
</div>
<p style="text-align:center; font-size:0.8rem; color:gray; margin-top:8px;">Resize browser — ukuran berubah mulus tanpa media query!</p>
</div>

---

## `min-width` / `max-width` vs `width`

| Properti | Perilaku | Kapan Digunakan |
|---|---|---|
| `width` | Ukuran PASTI (fixed) | Jarang — hindari untuk layout responsif |
| `max-width` | Maksimal selebar X, boleh lebih kecil | Card, artikel, gambar — agar tidak terlalu lebar di layar besar |
| `min-width` | Minimal selebar X, boleh lebih besar | Tombol, kolom sidebar — agar tidak terlalu sempit |

```css
/* Card responsif: lebarnya 100% di HP, tapi tidak lebih dari 400px di desktop */
.card {
  width: 100%;
  max-width: 400px;
  margin-inline: auto;
}

/* Kolom sidebar: minimal 200px agar tidak terlalu sempit */
.sidebar {
  width: 25%;
  min-width: 200px;
}
```

<div class="preview-box">
<div style="width:100%; max-width:400px; margin:0 auto; background:white; border:2px solid #E91E63; border-radius:8px; padding:20px; text-align:center;">
  <strong>Card dengan max-width: 400px</strong>
  <p style="margin:8px 0 0 0; font-size:0.85rem; color:#666;">Lebar card ini 100% di layar kecil, tapi tidak melebihi 400px di layar besar.</p>
</div>
</div>

---

## `overflow` Property

Properti `overflow` mengontrol apa yang terjadi ketika konten terlalu besar untuk muat di dalam kotaknya.

| Nilai | Perilaku |
|---|---|
| `visible` | Konten yang meluber tetap terlihat (Default) |
| `hidden` | Konten yang meluber dipotong/di-sembunyikan |
| `scroll` | Scrollbar selalu muncul (meskipun konten tidak meluber) |
| `auto` | Scrollbar muncul HANYA jika konten meluber (Paling sering dipakai) |

```css
.box-overflow {
  width: 250px;
  height: 120px;
  overflow: auto; /* Scrollbar muncul hanya saat dibutuhkan */
}
```

<div class="preview-box">
<div style="display:flex; gap:12px; flex-wrap:wrap;">
  <div>
    <p style="margin:0 0 4px 0; font-size:0.8rem; font-weight:bold;">overflow: visible</p>
    <div style="width:180px; height:80px; overflow:visible; background:#FFCDD2; border-radius:6px; padding:10px; font-size:0.8rem; border:2px dashed #E53935;">
      Teks yang sangat panjang akan keluar melebihi batas kotak tanpa dipotong sama sekali.
    </div>
  </div>
  <div style="margin-top:30px;">
    <p style="margin:0 0 4px 0; font-size:0.8rem; font-weight:bold;">overflow: hidden</p>
    <div style="width:180px; height:80px; overflow:hidden; background:#C8E6C9; border-radius:6px; padding:10px; font-size:0.8rem; border:2px solid #43A047;">
      Teks yang sangat panjang akan keluar melebihi batas kotak — tapi bagian yang meluber akan dipotong! Tidak terlihat.
    </div>
  </div>
  <div style="margin-top:30px;">
    <p style="margin:0 0 4px 0; font-size:0.8rem; font-weight:bold;">overflow: auto</p>
    <div style="width:180px; height:80px; overflow:auto; background:#E3F2FD; border-radius:6px; padding:10px; font-size:0.8rem; border:2px solid #1E88E5;">
      Teks yang sangat panjang akan memunculkan scrollbar vertikal sehingga konten tetap bisa di-scroll dan dibaca seluruhnya.
    </div>
  </div>
</div>
</div>

---

## `outline` vs `border`

**Perbedaan mendasar:** `outline` **TIDAK memakan ruang** dalam box model — ia digambar di luar kotak tanpa memengaruhi layout. Sebaliknya, `border` memakan ruang dan ikut dalam perhitungan ukuran elemen.

| Aspek | `border` | `outline` |
|---|---|---|
| Memakan ruang box model | Ya | Tidak |
| Bisa diatur per sisi | Ya (`border-top`, dll) | Tidak (semua sisi sama) |
| Ikut radius (`border-radius`) | Ya | Tidak selalu (tergantung browser) |
| Kegunaan utama | Desain visual | Indikator fokus aksesibilitas |

```css
button:focus-visible {
  outline: 3px solid #2196F3;
  outline-offset: 2px; /* Jarak outline dari tepi elemen */
}
```

<div class="preview-box">
<div style="display:flex; gap:20px; align-items:center; flex-wrap:wrap;">
  <button style="padding:12px 24px; background:#2196F3; color:white; border:3px solid #1565C0; border-radius:8px; font-size:1rem; cursor:pointer;">Border (3px)</button>
  <button style="padding:12px 24px; background:#2196F3; color:white; border:none; outline:3px solid #FF5722; outline-offset:3px; border-radius:8px; font-size:1rem;">Outline (3px, offset 3px)</button>
  <button style="padding:12px 24px; background:#4CAF50; color:white; border:none; border-radius:8px; font-size:1rem; outline:3px solid #1B5E20; outline-offset:2px;">:focus-visible</button>
</div>
<p style="text-align:center; font-size:0.8rem; color:gray; margin-top:12px;">Perhatikan: outline tidak mendorong elemen lain karena tidak memakan ruang box model.</p>
</div>

> **Aksesibilitas:** Jangan pernah menghapus outline fokus dengan `outline: none` tanpa memberi alternatif fokus visual. Gunakan `:focus-visible` agar outline hanya muncul untuk pengguna keyboard (bukan klik mouse).

---

## DevTools Box Model Inspector

Saat debugging layout, Chrome/Firefox DevTools menyediakan panel Box Model visual:

1. Buka DevTools: tekan **F12** (atau **Ctrl+Shift+I** / **Cmd+Option+I** di Mac)
2. Pilih tab **Elements** (Chrome) atau **Inspector** (Firefox)
3. Pilih elemen HTML yang ingin diinspeksi
4. Scroll ke bawah panel Styles — Anda akan melihat diagram **Box Model** interaktif berwarna:
   - **Biru** = Content area
   - **Hijau** = Padding
   - **Oranye/Kuning** = Border
   - **Coklat** = Margin

<div class="preview-box">
<div style="background:#263238; color:#fff; border-radius:8px; padding:16px; font-size:0.85rem; font-family:monospace;">
  <span style="color:#FFB74D;">◼ Margin</span> &nbsp;
  <span style="color:#FFCC80;">◼ Border</span> &nbsp;
  <span style="color:#A5D6A7;">◼ Padding</span> &nbsp;
  <span style="color:#90CAF9;">◼ 200 × 100</span>
  <div style="margin-top:10px; display:flex; justify-content:space-between;">
    <span>💡 DevTools juga menampilkan properti <b>Computed</b> — berisi nilai final SETIAP properti CSS setelah semua kalkulasi.</span>
  </div>
</div>
</div>

Anda juga bisa mengklik dua kali nilai di diagram Box Model untuk **mengedit langsung** dan melihat perubahannya secara real-time — sangat membantu saat bereksperimen dengan margin/padding.```
