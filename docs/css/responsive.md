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

---

## `<meta name="viewport">` — WAJIB untuk Responsive!

Setiap halaman HTML modern **WAJIB** memiliki tag ini di dalam `<head>`. Tanpa tag ini, mobile browser akan merender halaman seolah-olah di layar desktop (biasanya 980px lebar), lalu mengecilkannya — menghasilkan teks yang sangat kecil dan tidak terbaca.

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

| Atribut | Fungsi |
|---|---|
| `width=device-width` | Lebar viewport = lebar layar perangkat (bukan 980px default) |
| `initial-scale=1.0` | Zoom awal 100% (tidak diperbesar/diperkecil) |
| `maximum-scale=1.0` | (Opsional) Batasi zoom maksimum — **hati-hati, bisa mengganggu aksesibilitas** |
| `user-scalable=no` | (Opsional) Matikan zoom — **tidak direkomendasikan** untuk aksesibilitas |

> **Akibat jika TIDAK ada:** Website Anda akan terlihat seperti versi desktop yang dikecilkan di HP. Teks terlalu kecil, pengguna harus zoom-in manual, dan Google akan menganggap website Anda tidak mobile-friendly (berdampak negatif pada SEO).

---

## `max-width` Media Query — Pendekatan Desktop-First

Selama ini kita menggunakan `min-width` (Mobile-First). Ada juga pendekatan **Desktop-First** menggunakan `max-width`:

```css
/* Gaya Dasar: Desktop (Layar Lebar) */
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr; /* 4 kolom */
}

/* Layar Tablet — maksimal 1024px */
@media (max-width: 1024px) {
  .container { grid-template-columns: 1fr 1fr; } /* 2 kolom */
}

/* Layar HP — maksimal 600px */
@media (max-width: 600px) {
  .container { grid-template-columns: 1fr; } /* 1 kolom */
}
```

**Kapan gunakan Desktop-First?**
- Proyek yang pengguna utamanya desktop (dashboard admin, aplikasi internal)
- Codebase legacy yang sudah ditulis untuk desktop
- Website dengan fitur kompleks yang sulit disederhanakan untuk mobile

> **Rekomendasi:** Mobile-First (dengan `min-width`) hampir selalu lebih baik karena memaksa Anda memprioritaskan konten esensial dan menghasilkan performa lebih baik di mobile.

---

## Breakpoint Konvensional

Tidak ada aturan baku, tapi developer profesional umumnya menggunakan rentang ini sebagai acuan (bukan patokan kaku):

| Nama | Lebar | Perangkat Target |
|---|---|---|
| Small (Mobile) | `< 576px` | HP portrait |
| Medium (Mobile Landscape) | `576px – 767px` | HP landscape / tablet kecil |
| Tablet | `768px – 991px` | iPad, tablet Android |
| Desktop | `992px – 1199px` | Laptop, desktop kecil |
| Large Desktop | `1200px – 1439px` | Monitor standar |
| Extra Large | `>= 1440px` | Monitor lebar / ultrawide |

```css
/* Mobile-First dengan breakpoint konvensional */
/* Base: Mobile (< 576px) — tidak perlu @media */

@media (min-width: 576px) { /* Mobile landscape */ }
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 992px) { /* Desktop */ }
@media (min-width: 1200px) { /* Large desktop */ }
@media (min-width: 1440px) { /* Extra large */ }
```

> **Tips:** Jangan membuat breakpoint berdasarkan device spesifik (iPhone, Samsung, iPad). Gunakan breakpoint berdasarkan KONTEN — tambahkan breakpoint saat layout terlihat "pecah", bukan saat mencapai lebar tertentu.

---

## `orientation` Media Query

Mendeteksi apakah perangkat dalam mode **landscape** (mendatar) atau **portrait** (berdiri):

```css
/* Mode landscape (lebar > tinggi) — misal: HP dimiringkan */
@media (orientation: landscape) {
  .gallery {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Mode portrait (tinggi > lebar) */
@media (orientation: portrait) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

<div class="preview-box">
<div style="display:flex; gap:12px; flex-wrap:wrap;">
  <div style="background:#E3F2FD; padding:16px; border-radius:8px; text-align:center; flex:1;">
    <div style="font-size:2rem;">📱</div>
    <strong>Portrait</strong>
    <p style="margin:4px 0 0 0;font-size:0.8rem;color:#666;">width < height</p>
  </div>
  <div style="background:#E8F5E9; padding:16px; border-radius:8px; text-align:center; flex:1;">
    <div style="font-size:2rem;">🖥</div>
    <strong>Landscape</strong>
    <p style="margin:4px 0 0 0;font-size:0.8rem;color:#666;">width > height</p>
  </div>
</div>
</div>

---

## `prefers-color-scheme` — Dark Mode Otomatis

Media query ini mendeteksi preferensi tema sistem pengguna (Light atau Dark). Dikombinasikan dengan CSS Variables, Anda bisa membuat dark mode otomatis:

```css
/* Definisikan variabel untuk light mode (default) */
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --text-primary: #1a1a1a;
  --text-secondary: #666666;
  --border: #e0e0e0;
  --accent: #2196F3;
}

/* Override untuk dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #1a1a2e;
    --bg-secondary: #16213e;
    --text-primary: #e0e0e0;
    --text-secondary: #a0a0a0;
    --border: #2a2a4a;
    --accent: #64b5f6;
  }
}

/* Gunakan variabel di seluruh halaman */
body {
  background: var(--bg-primary);
  color: var(--text-primary);
}
.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
}
```

<div class="preview-box">
<div style="display:flex; gap:12px; flex-wrap:wrap;">
  <div style="background:#ffffff; color:#1a1a1a; padding:20px; border-radius:8px; border:1px solid #e0e0e0; flex:1; text-align:center;">
    <div style="font-size:1.5rem;">☀️</div>
    <strong>Light Mode</strong>
    <p style="margin:4px 0 0 0;font-size:0.75rem;color:#666;">prefers-color-scheme: light</p>
  </div>
  <div style="background:#1a1a2e; color:#e0e0e0; padding:20px; border-radius:8px; border:1px solid #2a2a4a; flex:1; text-align:center;">
    <div style="font-size:1.5rem;">🌙</div>
    <strong>Dark Mode</strong>
    <p style="margin:4px 0 0 0;font-size:0.75rem;color:#a0a0a0;">prefers-color-scheme: dark</p>
  </div>
</div>
<p style="text-align:center;font-size:0.8rem;color:gray;margin-top:10px;">Coba ubah tema sistem Anda (Settings → Appearance → Dark Mode) — website akan otomatis mengikuti!</p>
</div>

> **Tips:** Sediakan juga toggle manual (switch light/dark) dengan JavaScript. Simpan preferensi di `localStorage` agar pengguna bisa memilih override dari preferensi sistem.

---

## `prefers-reduced-motion` — Menghormati Aksesibilitas

Beberapa pengguna sensitif terhadap animasi (dapat menyebabkan mabuk/vertigo). Sistem operasi menyediakan pengaturan "Reduce Motion" — Anda wajib menghormatinya:

```css
/* Animasi dan transisi normal */
.hero-animation {
  animation: slideIn 1s ease;
}
.card {
  transition: transform 0.3s ease;
}
.card:hover {
  transform: scale(1.05);
}

/* Hapus/redupkan animasi jika user memilih reduce motion */
@media (prefers-reduced-motion: reduce) {
  .hero-animation {
    animation: none; /* Matikan animasi */
  }
  .card {
    transition: none; /* Matikan transisi */
  }
  .card:hover {
    transform: none; /* Tetap bisa hover, tapi tanpa animasi */
  }

  /* Atau: animasi yang sangat halus */
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

> **Ini adalah aksesibilitas dasar.** Banyak framework modern (Tailwind, Bootstrap) sudah menyediakan utility class `motion-reduce` secara built-in.

---

## `pointer` Media Query — Deteksi Jenis Input

Mendeteksi apakah pengguna menggunakan **mouse** (pointer presisi) atau **touchscreen** (pointer kasar). Berguna untuk menyesuaikan ukuran tap target:

```css
/* Untuk touchscreen — perbesar area klik */
@media (pointer: coarse) {
  button, a, input[type="checkbox"] {
    min-height: 48px;  /* Ukuran minimum jari manusia */
    min-width: 48px;
    padding: 12px 16px;
  }
  .menu-item {
    margin: 8px 0; /* Beri jarak lebih agar tidak salah sentuh */
  }
}

/* Untuk mouse — tampilan lebih rapat */
@media (pointer: fine) {
  .menu-item {
    margin: 2px 0;
    padding: 4px 8px;
  }
}
```

| Nilai | Arti |
|---|---|
| `none` | Tidak ada pointing device (keyboard-only, screen reader) |
| `coarse` | Touchscreen — jari (akurasi rendah) |
| `fine` | Mouse, stylus, trackpad presisi |

---

## `hover` Media Query — Deteksi Kemampuan Hover

Mendeteksi apakah perangkat bisa melakukan hover (kursor diam di atas elemen). Touchscreen **tidak bisa** hover:

```css
/* Hanya untuk device dengan mouse — tampilkan efek hover */
@media (hover: hover) {
  .card:hover {
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    transform: translateY(-4px);
  }
  .tooltip-trigger:hover .tooltip {
    display: block;
  }
}

/* Untuk touchscreen — jangan andalkan hover */
@media (hover: none) {
  .tooltip {
    display: none; /* Tooltip tidak bisa muncul tanpa hover */
  }
  /* Alternatif: gunakan tap/long-press via JavaScript */
}
```

<div class="preview-box">
<div style="display:flex; gap:12px; flex-wrap:wrap;">
  <div style="background:#FFF3E0; padding:16px; border-radius:8px; text-align:center; flex:1;">
    <strong>hover: hover</strong>
    <p style="margin:4px 0 0 0;font-size:0.8rem;color:#666;">Mouse / Trackpad</p>
    <div style="margin-top:8px;padding:8px;background:#FFB74D;color:white;border-radius:4px;font-size:0.8rem;">Hover efek: ✓</div>
  </div>
  <div style="background:#E8F5E9; padding:16px; border-radius:8px; text-align:center; flex:1;">
    <strong>hover: none</strong>
    <p style="margin:4px 0 0 0;font-size:0.8rem;color:#666;">Touchscreen</p>
    <div style="margin-top:8px;padding:8px;background:#81C784;color:white;border-radius:4px;font-size:0.8rem;">Hover efek: ✗</div>
  </div>
</div>
</div>

---

## Container Queries (`@container`)

**Container Queries** adalah evolusi dari Media Queries. Alih-alih bertanya "seberapa lebar viewport?", Container Queries bertanya **"seberapa lebar container/parent saya?"**. Ini membuat komponen benar-benar reusable di berbagai konteks.

```css
/* 1. Tandai elemen sebagai container */
.card-wrapper {
  container-type: inline-size;  /* Pantau lebar */
  container-name: card-container; /* Nama opsional */
}

/* 2. Style berdasarkan lebar container */
@container card-container (min-width: 500px) {
  .card {
    display: grid;
    grid-template-columns: 200px 1fr; /* Layout horizontal jika container cukup lebar */
  }
}

@container card-container (max-width: 499px) {
  .card {
    grid-template-columns: 1fr; /* Layout vertikal jika container sempit */
  }
  .card img {
    width: 100%;
  }
}
```

<div class="preview-box">
<p style="margin-top:0;font-weight:bold;font-size:0.85rem;">Container Query Demo — card menyesuaikan LEBAR CONTAINER, bukan viewport</p>
<div style="display:flex;gap:12px;">
  <div style="flex:1;container-type:inline-size;border:2px dashed #E91E63;border-radius:8px;padding:12px;min-width:0;">
    <p style="font-size:0.7rem;color:#E91E63;margin:0 0 6px 0;font-weight:bold;">Sidebar Sempit</p>
    <div style="background:white;border:1px solid #eee;border-radius:6px;overflow:hidden;">
      <div style="background:#E3F2FD;padding:16px;text-align:center;">🖼 Foto</div>
      <div style="padding:12px;font-size:0.8rem;"><strong>Produk A</strong><br><span style="color:#4CAF50;font-weight:bold;">Rp 99K</span></div>
    </div>
  </div>
  <div style="flex:2.5;container-type:inline-size;border:2px dashed #4CAF50;border-radius:8px;padding:12px;">
    <p style="font-size:0.7rem;color:#4CAF50;margin:0 0 6px 0;font-weight:bold;">Konten Lebar</p>
    <div style="display:flex;background:white;border:1px solid #eee;border-radius:6px;overflow:hidden;">
      <div style="background:#E3F2FD;padding:20px 30px;display:flex;align-items:center;">🖼 Foto</div>
      <div style="padding:12px;flex:1;"><strong>Produk A</strong><p style="margin:4px 0;font-size:0.8rem;color:#666;">Deskripsi lengkap produk yang hanya muncul saat container cukup lebar.</p><span style="color:#4CAF50;font-weight:bold;">Rp 99K</span></div>
    </div>
  </div>
</div>
</div>

**Perbedaan Container vs Media Queries:**

| Aspek | `@media` | `@container` |
|---|---|---|
| Basis | Lebar viewport (seluruh browser) | Lebar container (parent) |
| Reusable component | Sulit — komponen tergantung viewport | Mudah — komponen mandiri |
| Kompleksitas | Satu dimensi | Modular & composable |
| Dukungan browser | 100% sejak lama | ~94% (2026, semua browser modern) |

---

## `clamp()` untuk Fluid Typography & Spacing

`clamp()` memungkinkan nilai yang fleksibel mengikuti lebar layar **tanpa media query**:

```css
/* Fluid Typography */
h1 { font-size: clamp(1.5rem, 4vw + 0.5rem, 3rem); }
p  { font-size: clamp(0.875rem, 1.5vw, 1.125rem); }

/* Fluid Spacing */
section { padding: clamp(1rem, 5vw, 3rem); }
.card   { gap: clamp(8px, 2vw, 24px); }

/* Fluid Width */
.container { width: clamp(320px, 90%, 1200px); }
```

<div class="preview-box">
<div style="padding:clamp(12px, 5vw, 40px); background:linear-gradient(135deg,#667eea,#764ba2); border-radius:8px; text-align:center; color:white;">
  <div style="font-size:clamp(1rem, 4vw, 2rem); font-weight:bold;">Padding & Font Fluid!</div>
  <div style="font-size:clamp(0.75rem, 2vw, 1rem); margin-top:8px; opacity:0.9;">padding: clamp(12px, 5vw, 40px)<br>font-size: clamp(1rem, 4vw, 2rem)</div>
</div>
<p style="text-align:center;font-size:0.8rem;color:gray;margin-top:10px;">Resize browser — ukuran dan spacing berubah MULUS tanpa breakpoint!</p>
</div>

**Keunggulan `clamp()`:**
- Tidak perlu rangkaian `@media` query untuk setiap ukuran
- Transisi mulus (bukan lompatan di breakpoint)
- Kode lebih ringkas dan mudah dibaca

---

## Responsive Images — `srcset`, `sizes`, dan `<picture>`

### `srcset` + `sizes`

Memberi browser beberapa opsi gambar dengan ukuran berbeda. Browser akan memilih yang paling sesuai:

```html
<img
  src="foto-800.jpg"
  srcset="foto-400.jpg 400w, foto-800.jpg 800w, foto-1200.jpg 1200w"
  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
  alt="Foto responsif"
/>
```

| Atribut | Fungsi |
|---|---|
| `srcset` | Daftar gambar + lebar aslinya (`400w` = 400px wide) |
| `sizes` | Memberi tahu browser berapa lebar gambar akan ditampilkan di setiap breakpoint |
| `src` | Fallback untuk browser lama |

### `<picture>` — Art Direction

Gunakan `<picture>` saat Anda ingin gambar yang **benar-benar berbeda** (bukan hanya ukuran berbeda) di tiap breakpoint:

```html
<picture>
  <!-- Mobile: gambar portrait/cropped -->
  <source media="(max-width: 600px)" srcset="hero-mobile.jpg">
  <!-- Tablet: gambar landscape -->
  <source media="(max-width: 1024px)" srcset="hero-tablet.jpg">
  <!-- Desktop: gambar full-size -->
  <img src="hero-desktop.jpg" alt="Hero Banner">
</picture>
```

> **Tips:** Selalu gunakan atribut `alt` pada `<img>`. Untuk gambar dekoratif, gunakan `alt=""` agar diabaikan screen reader.

---

## `dvh` / `svh` / `lvh` — Dynamic Viewport Units

Masalah klasik: `height: 100vh` di mobile browser. Address bar HP tidak diperhitungkan dalam `100vh`, sehingga bagian bawah konten sering terpotong atau memunculkan scroll yang tidak diinginkan.

```css
/* ❌ Masalah: 100vh tidak menghitung address bar */
.hero { height: 100vh; } /* Bagian bawah terpotong di Chrome mobile! */

/* ✅ Solusi modern: Dynamic Viewport Height */
.hero { min-height: 100dvh; } /* Selalu 100% dari viewport yang terlihat */
```

| Satuan | Arti | Kapan Digunakan |
|---|---|---|
| `100dvh` | Dynamic — mengikuti tinggi viewport saat ini | Paling sering dipakai untuk full-screen section |
| `100svh` | Small — tinggi saat address bar TERBUKA | Aman, tidak pernah terpotong |
| `100lvh` | Large — tinggi saat address bar TERTUTUP | Bisa terpotong saat address bar terbuka |
| `100vh` | Viewport Height (lama) | Hindari untuk mobile layout |

```css
.hero-section {
  min-height: 100dvh; /* Full screen di semua kondisi */
  /* Fallback untuk browser lama */
  min-height: 100vh;
}
```

<div class="preview-box">
<div style="background:#1a1a2e; color:white; border-radius:8px; padding:16px; font-size:0.85rem;">
  <div style="display:flex;gap:12px;justify-content:space-between;">
    <div style="text-align:center;"><div style="font-size:1.2rem;font-weight:bold;">dvh</div><span style="font-size:0.7rem;color:#aaa;">Dynamic</span></div>
    <div style="text-align:center;"><div style="font-size:1.2rem;font-weight:bold;">svh</div><span style="font-size:0.7rem;color:#aaa;">Small</span></div>
    <div style="text-align:center;"><div style="font-size:1.2rem;font-weight:bold;">lvh</div><span style="font-size:0.7rem;color:#aaa;">Large</span></div>
    <div style="text-align:center;"><div style="font-size:1.2rem;font-weight:bold;color:#FF5722;">vh</div><span style="font-size:0.7rem;color:#aaa;">Old (hindari)</span></div>
  </div>
  <p style="margin:10px 0 0 0;font-size:0.75rem;text-align:center;color:#aaa;">dvh selalu mengikuti tinggi viewport yang terlihat, termasuk saat address bar muncul/sembunyi.</p>
</div>
</div>

---

## Testing Responsive — Cara Mengecek di Berbagai Perangkat

### 1. Chrome DevTools Device Toolbar

1. Buka DevTools: **F12** (atau **Ctrl+Shift+I**)
2. Aktifkan Device Toolbar: **Ctrl+Shift+M** (atau klik icon HP/Kotak di kiri atas panel DevTools)
3. Pilih device dari dropdown (iPhone, iPad, Galaxy, dll)
4. Anda bisa:
   - **Rotate** (putar) device dengan ikon rotasi
   - **Resize** viewport dengan drag handle
   - **Throttle** network (3G, 4G) untuk simulasi koneksi lambat
   - **Show media queries** — lihat semua breakpoint sebagai bar berwarna di atas viewport

### 2. Testing di HP Aktual (Paling Akurat)

Cara terbaik: test langsung di device fisik. Tools:

- **Chrome Remote Debugging**: Colok HP via USB → buka `chrome://inspect` → inspect tab yang terbuka di HP
- **ngrok / localtunnel**: Expose `localhost` ke internet → buka URL di HP via 4G
- **Responsively App**: Aplikasi desktop untuk preview banyak device sekaligus

### 3. Ceklist Responsive Testing

| Item | Cek |
|---|---|
| Tidak ada horizontal scroll di HP | ✓ |
| Teks terbaca tanpa zoom | ✓ |
| Tombol/tap target minimal 48×48px | ✓ |
| Gambar tidak pecah atau terlalu besar | ✓ |
| Form input mudah diisi (tipe keyboard sesuai) | ✓ |
| Tidak ada konten yang terpotong | ✓ |
| Font size minimal 16px untuk input (agar iOS tidak zoom otomatis) | ✓ |
