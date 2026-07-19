# Pengenalan CSS

**CSS (Cascading Style Sheets)** adalah bahasa *penata gaya* yang digunakan untuk mempercantik dan mengatur tata letak halaman web yang telah dibuat menggunakan HTML. Jika HTML adalah "kerangka/tulang" dari sebuah rumah, maka CSS adalah cat, wallpaper, dan dekorasinya.

Nama "Cascading" (bertingkat/berjenjang) bukan sekadar istilah puitis — ia merujuk pada **aturan prioritas** bagaimana browser memilih deklarasi mana yang menang ketika beberapa aturan CSS menargetkan elemen yang sama. Konsep ini akan kita dalami di bagian [Cascade & Specificity](#cascade-specificity--inheritance).

## 3 Cara Menulis CSS

Ada tiga cara untuk menerapkan CSS ke dalam elemen HTML:

### 1. Inline CSS (Di dalam elemen)
Digunakan langsung pada tag HTML menggunakan atribut `style`. **Kekurangan:** Membuat HTML kotor, tidak bisa di-cache, dan sulit di-maintain. Hindari kecuali untuk styling dinamis dari JavaScript.
```html
<h1 style="color: blue; text-align: center;">Judul Biru</h1>
```

### 2. Internal CSS (Di dalam tag `<head>`)
Ditulis di dalam elemen `<style>` yang diletakkan di dalam `<head>`. Cocok untuk *styling* khusus satu halaman.
```html
<style>
  h1 { color: red; }
</style>
```

### 3. External CSS (Di file terpisah) — *Best Practice*
Ditulis di file berekstensi `.css` (contoh: `style.css`), lalu dihubungkan ke HTML menggunakan tag `<link>`.
```html
<!-- Di dalam head HTML -->
<link rel="stylesheet" href="style.css">
```

Keuntungan utama external CSS:
- ✅ Bisa di-cache browser (load lebih cepat di halaman berikutnya)
- ✅ Dipakai bersama oleh banyak halaman (DRY — *Don't Repeat Yourself*)
- ✅ Memisahkan struktur (HTML) dari presentasi (CSS)

### Komentar CSS
Sama seperti HTML punya `<!-- -->` dan JS punya `//`, CSS punya komentarnya sendiri. Sangat penting untuk menandai bagian-bagian besar file CSS.
```css
/* Ini komentar satu baris */
/*
  Ini komentar
  multi baris
  Biasanya digunakan untuk memisahkan section file CSS yang besar.
*/
.btn { /* komentar di akhir baris juga valid */ }
```

### Mengimpor File CSS Lain: `@import`
Cara alternatif menyisipkan CSS lain tanpa menyentuh HTML. **Peringatan:** `@import` memblokir render dan bersifat serial (file diimpor satu per satu), jadi lebih disarankan pakai multiple `<link>` di HTML daripada `@import`.
```css
/* Di paling atas file style.css */
@import url('reset.css');
@import url('theme.css');

body { font-family: sans-serif; }
```

---

## Selektor CSS (CSS Selectors)

Untuk memberi gaya pada elemen, CSS harus tahu **elemen mana yang ingin dituju**. Inilah fungsi selektor. Mari kita bedah kategori selektor dari yang paling dasar hingga modern.

### Selektor Dasar (Basic Selectors)

#### 1. Selektor Elemen (Tag/Type Selector)
Menargetkan semua elemen dengan nama tag tertentu di seluruh halaman. Specificity paling rendah (0,0,0,1).
```css
/* Akan mengubah semua paragraf <p> menjadi abu-abu */
p {
  color: gray;
}
```

#### 2. Selektor Class
Menargetkan elemen berdasarkan atribut `class="..."`. Ditandai dengan **tanda titik (`.`)**. Class bisa dipakai berulang kali oleh elemen berbeda, dan satu elemen bisa punya banyak class. Inilah selektor **paling sering digunakan**.
```css
/* Menargetkan elemen seperti <button class="btn-utama"> */
.btn-utama {
  background-color: blue;
  color: white;
}

/* Boleh juga merangkap tag untuk menaikkan specificity */
button.btn-utama { /* specificity (0,0,1,1) */ }
```

#### 3. Selektor ID
Menargetkan elemen spesifik berdasarkan atribut `id="..."`. Ditandai dengan **tanda pagar (`#`)**. ID harus **unik** (hanya boleh ada satu elemen dengan ID tertentu dalam 1 halaman).

```css
/* Menargetkan <div id="header-utama"> */
#header-utama {
  background-color: black;
}
```
⚠️ **Best practice:** Hindari pakai ID sebagai selektor CSS. Specificity-nya (0,1,0,0) terlalu tinggi sehingga susah di-override. Pakai untuk anchor link & JavaScript saja.

#### 4. Universal Selector (`*`)
Menargetkan **semua** elemen. Specificity (0,0,0,0) — paling rendah. Umum dipakai untuk reset box model.
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

### Combinators (Selektor Kombinasi)

Combinator menggabungkan beberapa selektor untuk memilih elemen berdasarkan **hubungan hierarkinya** di DOM.

| Combinator | Simbol | Arti | Contoh |
|---|---|---|---|
| Descendant | spasi ` ` | Keturunan di kedalaman berapa pun | `article p` |
| Child | `>` | Anak **langsung** satu level di bawah | `ul > li` |
| Adjacent sibling | `+` | Saudara **tepat setelah** elemen | `h2 + p` |
| General sibling | `~` | Semua saudara setelah elemen | `h2 ~ p` |

```css
/* Descendant: setiap <p> di dalam <article>, seberapa pun dalamnya */
article p { line-height: 1.6; }

/* Child: hanya <li> anak LANGSUNG <ul>, bukan cucu */
ul > li { list-style: square; }

/* Adjacent sibling: paragraf pertama SETELAH heading (intro) */
h2 + p { font-weight: bold; }

/* General sibling: semua <p> setelah h2 dalam parent yang sama */
h2 ~ p { color: #555; }
```

### Attribute Selectors
Menargetkan elemen berdasarkan atribut dan nilainya. Sangat berguna untuk form & link.
```css
/* Semua elemen dengan atribut href */
[href] { color: blue; }

/* Atribut dengan nilai eksak */
[type="text"] { border: 1px solid #ccc; }

/* Nilai diawali dengan... */
[href^="https://"] { color: green; }       /* link aman */

/* Nilai diakhiri dengan... */
[href$=".pdf"]::after { content: " 📄"; }

/* Nilai mengandung kata utuh (dipisah spasi) */
[class~="aktif"] { font-weight: bold; }

/* Nilai mengandung substring */
[class*="btn"] { padding: 8px 16px; }
```

### Pseudo-Classes
Pseudo-class menargetkan **state/kondisi** elemen, ditulis dengan **satu titik dua (`:`)**. Bayangkan kalimat: "elemen X dalam kondisi Y".

```css
/* State interaktif */
a:link    { color: blue; }    /* belum dikunjungi */
a:visited { color: purple; }  /* sudah dikunjungi */
a:hover   { text-decoration: underline; }  /* kursor di atas */
a:active  { color: red; }     /* sedang diklik */
a:focus   { outline: 2px solid blue; }  /* dapat fokus keyboard */

/* Posisi di antara saudara */
li:first-child  { color: red; }    /* li pertama */
li:last-child   { color: red; }    /* li terakhir */
li:nth-child(2) { color: green; }  /* li ke-2 */
li:nth-child(odd)  { background: #f5f5f5; } /* baris ganjil (zebra striping) */
li:nth-child(3n+1) { color: blue; }        /* 1, 4, 7, 10... */

/* Negasi: bukan kondisi ini */
input:not([type="checkbox"]) { display: block; }

/* Form state */
input:disabled { opacity: 0.5; }
input:checked + label { font-weight: bold; }
input:valid { border-color: green; }
input:invalid { border-color: red; }

/* Empty: elemen tanpa anak */
div:empty { display: none; }
```

Pola `nth-child(an+b)` sangat kuat: formula `a` = kelipatan, `b` = offset awal.

### Pseudo-Elements
Pseudo-element menargetkan **bagian tertentu** dari elemen (bukan elemen nyata), ditulis dengan **dua titik dua (`::`)** untuk membedakannya dari pseudo-class.

```css
/* Sisipkan konten sebelum/sesudah elemen (butuh properti content) */
.quote::before { content: "“"; }
.quote::after  { content: "”"; }

/* Huruf pertama (drop cap) */
p::first-letter {
  font-size: 3em;
  float: left;
  font-weight: bold;
}

/* Baris pertama */
p::first-line { font-weight: bold; }

/* Styling placeholder input */
input::placeholder { color: #999; }

/* Highlight teks terseleksi */
::selection { background: yellow; color: black; }
```
::: tip
`::before` dan `::after` adalah cara CSS "menyisipkan" elemen semu tanpa menyentuh HTML. Padanan konseptual: kaya seperti menambah elemen `<span>`虚拟 dari sisi CSS only.
:::

### Selektor Modern: `:is()`, `:where()`, `:has()`

CSS modern menambah tiga selektor serbaguna yang menyederhanakan kode panjang.

#### `:is()` — singkat untuk banyak selektor
```css
/* Sebelum: */
/* h1, h2, h3 { margin: 0; } */

/* Setelah: sama persis, tetapi specificity diambil dari yang tertinggi di dalam */
:is(h1, h2, h3) { margin: 0; }

/* Lebih berguna untuk kombinasi panjang */
:is(.card, .panel, .box) > p { line-height: 1.6; }
```

#### `:where()` — sama seperti `:is()` tapi specificity NOL
```css
/* Specificity 0 → mudah di-override. Cocok untuk base style */
:where(.card) p { color: #555; }
/* Aturan lain .card p (specificity 0,0,1,1) akan menang */
```

#### `:has()` — *Parent Selector* (CSS selector yang paling ditunggu-tunggu)
```css
/* <section> yang BERISI <img> di dalamnya */
section:has(img) {
  padding: 0; /* padding gambar saja */
}

/* Form dengan checkbox yang dicentang */
form:has(input:checked) button { opacity: 1; }

/* Card dengan kosong */
.card:not(:has(*)) { display: none; }

/* Hanya didukung browser modern (2023+). Cek caniuse sebelum dipakai di produksi. */
```

::: warning
`:has()` baru didukung semua browser modern pada akhir 2023. Untuk proyek yang perlu mendukung browser lama, berikan fallback atau gunakan `@supports`.
:::

---

## Cascade, Specificity & Inheritance

Tiga konsep ini menjelaskan **mengapa gaya CSS kadang tidak jalan seperti yang kita harap**. Memahaminya = 90% bug CSS selesai.

### 1. Cascade (Urutan Sumber)
Ketika beberapa aturan CSS menargetkan elemen yang sama dengan **specificity setara**, aturan yang **ditulis paling akhir** yang menang.
```css
p { color: red; }
p { color: blue; }  /* Menang — ditulis kemudian */
```

Urutan prioritas sumber dari tertinggi ke terendah:
1. Inline CSS (`style="..."`) di elemen HTML
2. CSS di dalam `<style>` di `<head>`
3. External CSS via `<link>`

### 2. Specificity (Spesifisitas)
Specificity adalah sistem skor untuk menentukan pemenang. Format 4 kolom: **(inline, ID, class/attr/pseudo-class, element/pseudo-element)**.

| Selektor | Inline | ID | Class/Attr/Pseudo-class | Element | Skor |
|---|---|---|---|---|---|
| `*` | 0 | 0 | 0 | 0 | (0,0,0,0) |
| `p` | 0 | 0 | 0 | 1 | (0,0,0,1) |
| `.btn` | 0 | 0 | 1 | 0 | (0,0,1,0) |
| `p.btn` | 0 | 0 | 1 | 1 | (0,0,1,1) |
| `#header` | 0 | 1 | 0 | 0 | (0,1,0,0) |
| `#header .btn` | 0 | 1 | 1 | 0 | (0,1,1,0) |
| `style="..."` | 1 | 0 | 0 | 0 | (1,0,0,0) |

Banding dari kiri ke kanan: ID selalu mengalahkan jumlah class berapa pun pun juga, class selalu mengalahkan jumlah element berapa pun pun juga.

```css
/* Contoh klasik: berapa pun class di atas, ID menang */
#nav .item { color: red; }            /* (0,1,1,0) - MENANG */
.nav ul li.item.a.b.c { color: blue; } /* (0,0,6,2) - KALAH */
```

### 3. Inheritance (Pewarisan)
Beberapa properti diwariskan ke anak-elemennya, beberapa tidak.

**Diwariskan** (turun ke anak):
- `color`, `font-family`, `font-size`, `font-weight`, `line-height`, `text-align`, `letter-spacing`, `visibility`, `cursor`

**Tidak diwariskan** (perlu ditulis ulang):
- `border`, `margin`, `padding`, `background`, `width`, `height`, `display`

```css
body {
  color: #333;          /* turun ke semua teks */
  font-family: sans-serif;
  border: 1px solid red; /* TIDAK turun — body saja yang berborder */
}

/* Paksa mewarisi nilai parent */
.child {
  color: inherit;       /* eksplisit waris */
  border: inherit;
  all: inherit;         /* semua properti! berbahaya */
}

/* Reset ke nilai awal / default browser */
button { all: unset; }  /* hapus semua styling */
```

### Tata Tertib Pemenang (Urutan Lengkap)
Ketika beberapa aturan menargetkan elemen yang sama, browser pilih pemenang berdasarkan urutan ini:

1. **`!important`** — pemenang mutlak (jarang sekali dibenarkan)
2. **Inline style** (`style="..."`)
3. **Specificity** — yang skornya lebih tinggi menang
4. **Cascade** — bila specificity seri, yang paling akhir ditulis menang
5. **Origin order** — external CSS < internal < inline

### Tentang `!important`
```css
.btn { color: white !important; } /* memaksa, ignoring specificity */
```
Hanya pakai `!important` ketika **benar-benar terpaksa** (misal overwrite third-party CSS yang tak bisa diubah). Pemakaian berlebihan membuat debugging menjadi mimpi buruk, karena penaikan specificity buatan yang tidak bisa dimenangi secara natural. **Cari solusi specificity dulu**, baru `!important` sebagai jalan terakhir.

::: tip GitHab issue selector specificity rule
Jika CSS Anda "tidak mau jalan", langkah debug:
1. Klik kanan elemen → **Inspect** → panel **Styles** DevTools
2. Lihat aturan yang di-strikethrough (tertimpa) — ada aturan lain dengan specificity lebih tinggi
3. Tambahkan class atau gunakan combinator untuk menaikkan specificity, bukan langsung pakai `!important`
:::

---

## Inspeksi CSS dengan DevTools

Browser DevTools (Chrome/Edge/Firefox) adalah senjata utama. Cara pakai:
1. Klik kanan elemen di halaman → **Inspect** (atau tekan `F12` / `Ctrl+Shift+I`)
2. Panel **Elements** → pilih elemen
3. Panel **Styles** menampilkan semua CSS yang diterapkan:
   - Aturan tertimpa ditampilkan dengan ~~strikethrough~~
   - Pewarisan (`inherited from ...`)
   - bisa klik nilai langsung untuk edit live
4. Panel **Computed** — lihat nilai final setelah cascade & inheritance
5. Panel **Layout** (Chrome) / **Flexbox/Grid** — overlay visual untuk box model, flex, grid

Tip: edit CSS live di DevTools untuk eksperimen, lalu salin perubahan ke file `.css`. Browser akan mereset reload, tapi yang Anda copy sudah aman.

---

## Preview: Menggabungkan Semua Konsep

Berikut contoh konkret yang memadu **selektor tag, class, combinator, pseudo-class, dan attribute selector**:

```html
<style scoped>
  /* Reset ringan */
  .demo-section * { box-sizing: border-box; }

  /* Tag selector + descendant */
  .demo-section p {
    color: #555;
    line-height: 1.6;
  }

  /* Class + descendant */
  .demo-section .judul {
    color: #4CAF50;
    margin: 0 0 8px;
  }

  /* Pseudo-class + combinator */
  .demo-section .link:hover { color: #2E7D32; }
  .demo-section .link:active { color: #1B5E20; }

  /* Attribute selector */
  .demo-section input[type="text"] {
    border: 2px solid #c8e6c9;
    border-radius: 6px;
    padding: 8px;
  }
  .demo-section input:focus {
    outline: none;
    border-color: #4CAF50;
  }

  /* first-child + adjacent sibling */
  .demo-section h2 + p {
    font-style: italic;
    color: #777;
  }

  /* nth-child untuk zebra striping */
  .demo-section li:nth-child(odd) {
    background: #f5f5f5;
  }
</style>

<section class="demo-section">
  <h2 class="judul">Mengenal Selektor CSS</h2>
  <p>Paragraf pertama (tepat setelah h2) dibuat italic lewat <code>h2 + p</code>.</p>
  <a href="#" class="link">Hover saya untuk lihat <code>:hover</code></a>
  <form>
    <input type="text" placeholder="Ketik lalu klik keluar untuk lihat :focus" />
  </form>
  <ul>
    <li>Item 1 — ganjil (bg abu-abu)</li>
    <li>Item 2 — genap</li>
    <li>Item 3 — ganjil</li>
    <li>Item 4 — genap</li>
  </ul>
</section>
```

<div class="preview-box">
<section class="demo-section">
  <h2 class="judul">Mengenal Selektor CSS</h2>
  <p>Paragraf pertama (tepat setelah h2) dibuat italic lewat <code>h2 + p</code>.</p>
  <a href="#" class="link">Hover saya untuk lihat <code>:hover</code></a>
  <form>
    <input type="text" placeholder="Ketik lalu klik keluar untuk lihat :focus" />
  </form>
  <ul>
    <li>Item 1 — ganjil (bg abu-abu)</li>
    <li>Item 2 — genap</li>
    <li>Item 3 — ganjil</li>
    <li>Item 4 — genap</li>
  </ul>
</section>
</div>

<style>
  .demo-section * { box-sizing: border-box; }
  .demo-section p { color: #555; line-height: 1.6; }
  .demo-section .judul { color: #4CAF50; margin: 0 0 8px; }
  .demo-section .link:hover { color: #2E7D32; }
  .demo-section .link:active { color: #1B5E20; }
  .demo-section input[type="text"] {
    border: 2px solid #c8e6c9;
    border-radius: 6px;
    padding: 8px;
    width: 100%;
    max-width: 300px;
    font: inherit;
  }
  .demo-section input:focus {
    outline: none;
    border-color: #4CAF50;
  }
  .demo-section h2 + p {
    font-style: italic;
    color: #777;
  }
  .demo-section ul {
    padding-left: 0;
    list-style: inside;
  }
  .demo-section li {
    padding: 6px 8px;
    border-radius: 4px;
  }
  .demo-section li:nth-child(odd) {
    background: #f5f5f5;
  }
  .demo-section .link {
    display: inline-block;
    margin: 8px 0;
    color: #4CAF50;
    text-decoration: none;
  }
</style>

---

## Ringkasan: Cheat Sheet Selektor

| Kebutuhan | Pake ini |
|---|---|
| Tulis semua elemen | `*` |
| Semua tag `<p>` | `p` |
| Semua dengan class | `.nama` |
| Elemen dengan ID unik | `#nama` |
| Keturunan berapa pun dalam | `parent anak` |
| Anak langsung | `parent > anak` |
| Saudara tepat setelah | `A + B` |
| Saudara setelahnya | `A ~ B` |
| Berdasar atribut | `[href]`, `[type="text"]`, `[href^="..."]` |
| State/hover | `:hover`, `:focus`, `:checked`, `:disabled` |
| Berdasar posisi | `:first-child`, `:nth-child(2)`, `:last-child` |
| Sisip konten semu | `::before`, `::after` |
| Selektor banyak | `:is(...)`, `:where(...)` |
| Berdasar isi anak | `:has(img)` |

---

## Selanjutnya

Sekarang Anda sudah mengenal sintaks CSS dan sistem selektornya. Di modul berikutnya kita akan mengupas konsep yang menyentuh **kotak elemen** — fondasi tata letak CSS modern:

➡️ **[Box Model →](./box-model)** — pahami `margin`/`padding`/`border` & `box-sizing`.