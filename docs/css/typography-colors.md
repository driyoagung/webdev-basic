# Typography & Colors

Tampilan teks (Tipografi) dan Warna adalah dua elemen visual yang paling cepat ditangkap oleh mata pengguna. 

## Properti Teks & Font

### 1. Mengubah Jenis Font (`font-family`)
CSS membaca font berdasarkan ketersediaannya di komputer pengguna. Oleh karena itu, kita sering menulis beberapa font sekaligus (sebagai cadangan / fallback).
```css
p {
  /* Jika komputer tidak punya Arial, pakai Helvetica, jika tidak ada pakai sans-serif bawaan os */
  font-family: Arial, Helvetica, sans-serif;
}
```
*(Catatan: Saat ini, mayoritas developer menggunakan layanan gratis seperti **Google Fonts** untuk mengimpor font custom modern secara online).*

### 2. Ukuran Teks (`font-size`)
Bisa menggunakan `px` (Pixel - Fix), `rem` (Relatif terhadap root), atau `em` (Relatif terhadap parent). Praktik modern sangat menyarankan penggunaan `rem` (1rem biasanya = 16px).
```css
h1 {
  font-size: 2rem; /* Sekitar 32px */
}
```

### 3. Ketebalan (`font-weight`)
Bisa menggunakan nilai string (`normal`, `bold`) atau angka (`400`, `700`).
```css
.teks-tebal { font-weight: bold; } /* atau 700 */
.teks-tipis { font-weight: 300; }
```

### 4. Perataan dan Dekorasi
- `text-align`: Meratakan teks (`left`, `center`, `right`, `justify`).
- `text-decoration`: Memberi garis teks (Sering dipakai `none` untuk menghapus garis bawah pada tautan `<a>`).
- `line-height`: Jarak antar baris kalimat (spasi paragraf).
- `letter-spacing`: Jarak antar huruf.

## Properti Warna (Colors & Background)

### 3 Cara Menulis Warna di CSS:
1. **Nama Warna:** Bahasa inggris dasar (`red`, `blue`, `green`, `tomato`).
2. **Hex Code:** Kode heksadesimal 6 digit (Paling sering dipakai desainer). Contoh: `#FF0000` (Merah).
3. **RGB / RGBA:** Kombinasi Red, Green, Blue. `rgba` punya ekstra `a` (Alpha) untuk transparansi (0.0 sampai 1.0).

```css
/* Mengubah warna teks */
.teks-merah { color: red; }
.teks-hijau { color: #4CAF50; }

/* Mengubah warna latar belakang */
.latar-gelap { background-color: #333333; }
.latar-transparan { background-color: rgba(0, 0, 0, 0.5); } /* Hitam transparan 50% */
```

## Preview: Kombinasi Tipografi & Warna

```html
<style scoped>
  .contoh-artikel {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f9f9f9;
    padding: 30px;
    border-radius: 10px;
    border-left: 6px solid #FF5722;
  }
  
  .contoh-artikel h2 {
    color: #333;
    font-size: 1.8rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 0;
  }
  
  .contoh-artikel p {
    color: #555;
    line-height: 1.6; /* Spasi baris agar nyaman dibaca */
    text-align: justify;
  }
  
  .badge {
    background-color: #FF5722;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 0.8rem;
  }
</style>

<div class="contoh-artikel">
  <h2>Berita Terkini <span class="badge">HOT</span></h2>
  <p>Penggunaan kombinasi font yang tepat, dipadukan dengan jarak baris (line-height) yang ideal dan kontras warna yang baik, akan membuat artikel website Anda terlihat sangat profesional dan nyaman dibaca berlama-lama oleh pengunjung. Ini adalah kunci dari UI/UX Design dasar.</p>
</div>
```

<div class="preview-box">
<div class="contoh-artikel">
  <h2>Berita Terkini <span class="badge">HOT</span></h2>
  <p>Penggunaan kombinasi font yang tepat, dipadukan dengan jarak baris (line-height) yang ideal dan kontras warna yang baik, akan membuat artikel website Anda terlihat sangat profesional dan nyaman dibaca berlama-lama oleh pengunjung. Ini adalah kunci dari UI/UX Design dasar.</p>
</div>
</div>

<style scoped>
  .contoh-artikel {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f9f9f9;
    padding: 30px;
    border-radius: 10px;
    border-left: 6px solid #FF5722;
  }
  .contoh-artikel h2 {
    color: #333;
    font-size: 1.8rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 0;
  }
  .contoh-artikel p {
    color: #555;
    line-height: 1.6;
    text-align: justify;
  }
  .badge {
    background-color: #FF5722;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 0.8rem;
  }
</style>

---

## HSL / HSLA Color

Selain hex dan RGB, CSS mendukung format **HSL** (Hue, Saturation, Lightness) yang lebih intuitif untuk manusia:

```
hsl(hue, saturation%, lightness%)
```

| Komponen | Rentang | Keterangan |
|---|---|---|
| **Hue** (H) | `0` – `360` | Warna pada roda warna: 0=merah, 120=hijau, 240=biru |
| **Saturation** (S) | `0%` – `100%` | 0% = abu-abu (tanpa warna), 100% = warna penuh |
| **Lightness** (L) | `0%` – `100%` | 0% = hitam, 50% = warna normal, 100% = putih |
| **Alpha** (A) | `0` – `1` | Transparansi (opsional, untuk `hsla`) |

```css
.warna-hsl {
  background: hsl(210, 80%, 55%);  /* Biru cerah */
  color: hsl(0, 0%, 100%);          /* Putih */
}
.box-transparan {
  background: hsla(210, 80%, 55%, 0.5); /* Biru 50% transparan */
}
```

<div class="preview-box">
<div style="display:flex; gap:10px; flex-wrap:wrap;">
  <div style="background:hsl(0,80%,55%); padding:20px; border-radius:6px; color:white; font-weight:bold;">hsl(0, 80%, 55%)</div>
  <div style="background:hsl(120,80%,45%); padding:20px; border-radius:6px; color:white; font-weight:bold;">hsl(120, 80%, 45%)</div>
  <div style="background:hsl(240,80%,55%); padding:20px; border-radius:6px; color:white; font-weight:bold;">hsl(240, 80%, 55%)</div>
  <div style="background:hsl(280,80%,55%); padding:20px; border-radius:6px; color:white; font-weight:bold;">hsl(280, 80%, 55%)</div>
</div>
<p style="text-align:center; font-size:0.8rem; color:gray; margin-top:10px;">Keunggulan HSL: untuk membuat variasi warna (lebih gelap/terang), cukup ubah nilai Lightness saja.</p>
</div>

> **Kenapa HSL lebih intuitif?** Untuk membuat warna "lebih gelap", turunkan Lightness. Untuk variasi "lebih pudar", turunkan Saturation. Di hex/RGB, Anda harus mengubah tiga nilai sekaligus secara manual.

---

## `currentColor` Keyword

`currentColor` adalah keyword spesial yang secara otomatis mengikuti nilai `color` dari elemen atau parent-nya. Sangat berguna untuk **SVG icons** dan elemen yang warnanya harus konsisten dengan teks.

```css
.icon {
  color: #E91E63;               /* Warna teks */
  background: currentColor;      /* Background ikut warna teks */
  fill: currentColor;            /* SVG fill ikut warna teks */
}
```

```html
<button style="color:#2196F3; padding:10px 20px; font-size:1rem; border:2px solid currentColor; background:transparent; border-radius:8px; cursor:pointer;">
  🏠 Tombol dengan outline CurrentColor
</button>
```

<div class="preview-box">
<div style="display:flex; gap:16px; flex-wrap:wrap;">
  <button style="color:#2196F3; padding:10px 20px; font-size:1rem; border:2px solid currentColor; background:transparent; border-radius:8px;">Default (Biru)</button>
  <button style="color:#E91E63; padding:10px 20px; font-size:1rem; border:2px solid currentColor; background:transparent; border-radius:8px;">Danger (Merah)</button>
  <button style="color:#4CAF50; padding:10px 20px; font-size:1rem; border:2px solid currentColor; background:transparent; border-radius:8px;">Success (Hijau)</button>
</div>
<p style="text-align:center; font-size:0.8rem; color:gray; margin-top:10px;">Semua tombol di atas hanya mengubah <code>color</code> — border otomatis mengikuti berkat <code>currentColor</code>.</p>
</div>

---

## CSS Variables (`--var`) untuk Warna

CSS Custom Properties (variabel) memungkinkan Anda mendefinisikan nilai warna sekali pakai di banyak tempat — fondasi untuk **theming** (mode gelap/terang, brand colors).

```css
/* Definisikan variabel di :root (scope global) */
:root {
  --brand: #3498db;
  --brand-dark: #2176a9;
  --text: #333333;
  --bg: #ffffff;
}

/* Gunakan dengan fungsi var() */
.button-primary {
  background: var(--brand);
  color: white;
}
.button-primary:hover {
  background: var(--brand-dark);
}
.card {
  background: var(--bg);
  color: var(--text);
}
```

**Keunggulan CSS Variables:**
- Ubah satu nilai di `:root`, seluruh elemen yang memakainya ikut berubah
- Bisa di-override per komponen (scope lokal)
- Bisa dikombinasikan dengan JavaScript untuk dynamic theming
- Mendukung fallback: `var(--warna, red)` — pakai `red` jika `--warna` tidak ditemukan

```css
/* Dark mode override — cukup timpa variabel di :root */
@media (prefers-color-scheme: dark) {
  :root {
    --text: #f0f0f0;
    --bg: #1a1a2e;
    --brand: #5dade2;
  }
}
```

---

## `@font-face` dan Google Fonts

### Cara 1: `<link>` di HTML (Direkomendasikan)

Tambahkan di `<head>` HTML:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

Lalu gunakan di CSS:

```css
body {
  font-family: 'Inter', sans-serif;
}
```

### Cara 2: `@import` di CSS

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
```

### `font-display: swap` — Kunci Performa

`display=swap` di URL Google Fonts (atau `font-display: swap` di `@font-face`) memastikan teks langsung muncul menggunakan font fallback sistem, lalu "ditukar" ke font kustom setelah selesai di-download. Tanpa ini, pengguna akan melihat teks kosong (FOIT — Flash of Invisible Text) selama font di-download.

```css
/* Contoh @font-face manual */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap; /* Tampilkan teks langsung, swap setelah font siap */
}
```

<div class="preview-box">
<div style="font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background:white; border-radius:8px; padding:20px; border:1px solid #ddd;">
  <h3 style="margin:0 0 8px 0; font-size:1.4rem;">Contoh Font "Inter"</h3>
  <p style="margin:0; color:#555; line-height:1.6;">Inter is a carefully crafted & designed typeface focused on high readability on computer screens. This font is used by GitHub, Figma, and many modern products.</p>
</div>
<p style="text-align:center; font-size:0.8rem; color:gray; margin-top:8px;">Font Inter terlihat bersih dan modern — font ini tidak memerlukan Google Fonts secara lokal; preview menggunakan fallback system font.</p>
</div>

> **Tips:** Google Fonts mendukung subset (Latin, Cyrillic, dll), variasi weight, dan `text=` parameter untuk hanya memuat karakter tertentu — menghemat ukuran download.

---

## `text-overflow: ellipsis`

Teknik 3-baris untuk memotong teks kepanjangan dengan tanda `...`:

```css
.teks-potong {
  white-space: nowrap;      /* Teks tidak boleh pindah baris */
  overflow: hidden;         /* Sembunyikan teks yang meluber */
  text-overflow: ellipsis;  /* Tambahkan "..." di akhir */
}
```

<div class="preview-box">
<div style="display:flex; gap:16px; flex-wrap:wrap;">
  <div style="width:200px; border:1px solid #ddd; border-radius:8px; padding:16px;">
    <h4 style="margin:0 0 8px 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Judul Artikel yang Sangat Panjang Sekali</h4>
    <p style="margin:0; font-size:0.85rem; color:#666;">Deskripsi singkat di sini.</p>
  </div>
  <div style="width:150px; border:1px solid #ddd; border-radius:8px; padding:16px;">
    <h4 style="margin:0 0 8px 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">NamaProdukSuperPanjangSekali</h4>
    <p style="margin:0; font-size:0.85rem; color:#666;">Rp 99.000</p>
  </div>
</div>
<p style="text-align:center; font-size:0.8rem; color:gray; margin-top:10px;">Teks judul yang terlalu panjang otomatis dipotong dengan "..." — tanpa perlu JavaScript.</p>
</div>

---

## `word-break` & `overflow-wrap`

Kedua properti ini menangani teks yang sangat panjang tanpa spasi (seperti URL atau email):

| Properti | Perilaku |
|---|---|
| `overflow-wrap: break-word` | Hanya memotong kata jika TIDAK ada cara lain — lebih "sopan", tidak merusak layout normal |
| `word-break: break-all` | Paksa memotong kata DI MANA SAJA — bahkan di tengah kata pendek, demi mencegah overflow |

```css
/* Untuk URL/email panjang — gunakan overflow-wrap dulu */
.teks-url {
  overflow-wrap: break-word;
  /* atau */
  word-break: break-word; /* Alternatif */
}
```

<div class="preview-box">
<div style="display:flex; gap:16px; flex-wrap:wrap;">
  <div style="width:200px; background:#FFF3E0; padding:12px; border-radius:6px; font-size:0.85rem; overflow-wrap:break-word;">
    <strong>overflow-wrap:</strong><br>https://subdomain.contoh-website-yang-panjang.com/halaman/artikel/2026
  </div>
  <div style="width:200px; background:#E8F5E9; padding:12px; border-radius:6px; font-size:0.85rem; word-break:break-all;">
    <strong>word-break: break-all:</strong><br>https://subdomain.contoh-website-yang-panjang.com/halaman/artikel/2026
  </div>
</div>
</div>

---

## `clamp()` Fluid Typography

`clamp()` memungkinkan ukuran font yang **tumbuh-menyusut secara mulus** mengikuti lebar layar, tanpa media query bertingkat:

```css
h1 {
  font-size: clamp(1.5rem, 4vw + 0.5rem, 3rem);
  /* Minimal 1.5rem, ideal mengikuti viewport, maksimal 3rem */
}
p {
  font-size: clamp(0.875rem, 1.5vw, 1.125rem);
}
```

<div class="preview-box">
<div style="font-size:clamp(1rem, 3vw, 1.8rem); font-weight:bold; padding:16px; background:#E8EAF6; border-radius:8px; text-align:center;">
  Ukuran teks ini: clamp(1rem, 3vw, 1.8rem)
</div>
<p style="text-align:center; font-size:0.8rem; color:gray; margin-top:10px;">Resize browser — teks membesar/mengecil secara fluid tanpa breakpoint!</p>
</div>

---

## `text-shadow` dan Gradient Text

### Text Shadow

```css
.teks-bayangan {
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  /*            X    Y   blur  warna            */
}
```

<div class="preview-box">
<div style="font-size:2rem; font-weight:bold; text-align:center; padding:20px; text-shadow:2px 2px 4px rgba(0,0,0,0.4);">
  Teks dengan Bayangan
</div>
</div>

### Gradient Text

Gradient pada teks menggunakan kombinasi `background-image`, `background-clip: text`, dan teks transparan:

```css
.teks-gradient {
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

<div class="preview-box">
<div style="font-size:2.2rem; font-weight:900; text-align:center; padding:20px; background:linear-gradient(135deg,#667eea,#764ba2); -webkit-background-clip:text; background-clip:text; color:transparent;">
  Gradient Text Keren!
</div>
</div>

---

## WCAG Contrast (Rasio Kontras)

**WCAG** (Web Content Accessibility Guidelines) menetapkan standar rasio kontras minimum agar teks dapat dibaca oleh semua orang, termasuk pengguna dengan gangguan penglihatan:

| Kategori | Rasio Minimum | Contoh |
|---|---|---|
| Teks normal (< 18pt / < 24px) | **4.5:1** | Paragraf, label, menu |
| Teks besar (>= 18pt bold / >= 24px) | **3:1** | Heading, judul hero |
| Elemen grafis / UI components | **3:1** | Border input, icon |

**Cara mengecek kontras:**
1. Buka Chrome DevTools (F12)
2. Klik icon warna di panel Styles (kotak warna kecil)
3. Akan muncul **contrast ratio** dan indikator ✓ hijau (lulus) atau ✗ merah (gagal)
4. Bisa juga pakai alat online: [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/)

<div class="preview-box">
<div style="display:flex; gap:16px; flex-wrap:wrap;">
  <div style="padding:20px; border-radius:8px; text-align:center; background:#333; color:#fff; flex:1;">
    <strong>✓ Kontras Bagus</strong><br>
    <span style="font-size:0.8rem;">#333 pada #fff = 12.6:1</span>
  </div>
  <div style="padding:20px; border-radius:8px; text-align:center; background:#fff; color:#ccc; flex:1; border:1px solid #eee;">
    <strong>✗ Kontras Buruk</strong><br>
    <span style="font-size:0.8rem;">#ccc pada #fff = 1.6:1</span>
  </div>
</div>
</div>

> **Tips:** Jangan andalkan mata sendiri. Rasio kontras rendah mungkin terlihat "cukup" di monitor bagus, tapi sulit dibaca di HP di bawah sinar matahari.

---

## `opacity` vs RGBA/HSLA Alpha

Perbedaan krusial yang sering membingungkan:

| | `opacity` | `rgba()` / `hsla()` alpha |
|---|---|---|
| **Yang terpengaruh** | Seluruh elemen + semua child-nya | Hanya properti yang diberi warna tersebut |
| **Teks** | Ikut transparan | Teks tetap solid (tidak terpengaruh) |
| **Child elements** | Semua ikut transparan | Child tidak terpengaruh |
| **Use case** | Animasi fade-in/out seluruh elemen | Background semi-transparan dengan teks solid |

```css
/* ❌ Opacity — teks dan child ikut transparan */
.box-opacity {
  background: #2196F3;
  opacity: 0.5; /* Seluruh box + teks di dalamnya jadi 50% transparan */
}

/* ✅ RGBA alpha — hanya background yang transparan */
.box-rgba {
  background: rgba(33, 150, 243, 0.5); /* Hanya background 50%, teks tetap solid */
}
```

<div class="preview-box">
<div style="display:flex; gap:16px; flex-wrap:wrap;">
  <div style="flex:1; text-align:center;">
    <p style="font-size:0.8rem; font-weight:bold; margin-bottom:4px;">opacity: 0.5</p>
    <div style="background:#2196F3; opacity:0.5; padding:20px; border-radius:8px; color:white; font-weight:bold;">Teks ikut transparan</div>
  </div>
  <div style="flex:1; text-align:center;">
    <p style="font-size:0.8rem; font-weight:bold; margin-bottom:4px;">rgba() alpha</p>
    <div style="background:rgba(33,150,243,0.5); padding:20px; border-radius:8px; color:white; font-weight:bold;">Teks tetap solid!</div>
  </div>
</div>
</div>
