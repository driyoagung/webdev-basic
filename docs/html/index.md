# Pengenalan HTML

**HTML** (HyperText Markup Language) adalah bahasa markup standar global yang digunakan untuk membuat dan menyusun struktur kerangka dasar dari semua halaman web di internet. 

HTML **bukanlah bahasa pemrograman** (seperti JavaScript atau Python) karena HTML tidak memiliki logika pengkondisian (`if/else`) atau perulangan (`for/while`). Sebaliknya, HTML menggunakan sistem **markup** (penanda atau *tag*) untuk mendeskripsikan kepada browser web (seperti Chrome, Firefox, Safari) tentang bagaimana teks, gambar, dan elemen lainnya harus ditampilkan di layar.

## Sejarah Singkat
HTML diciptakan oleh Tim Berners-Lee pada tahun 1991. Versi standar modern yang kita gunakan saat ini adalah **HTML5**, yang dirilis secara resmi pada tahun 2014. HTML5 membawa banyak pembaruan penting, terutama dukungan native untuk video, audio, dan elemen semantik yang lebih baik.

---

## Anatomi Dokumen HTML5

Setiap dokumen web profesional wajib memiliki struktur dasar kerangka HTML5 yang standar. Berikut adalah contoh lengkapnya:

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <!-- Pengaturan Karakter dan Viewport -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- SEO Meta Tags -->
  <meta name="description" content="Ini adalah contoh deskripsi halaman untuk mesin pencari Google.">
  <meta name="author" content="Nama Anda">
  <meta name="keywords" content="belajar html, web development, dasar html">
  
  <!-- Judul Halaman -->
  <title>Belajar Web Dev Basic</title>
  
  <!-- Tautan ke CSS Eksternal (Contoh) -->
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Konten yang dilihat pengunjung ada di sini -->
  <h1>Selamat Datang di Web Dev Basic</h1>
  <p>Ini adalah paragraf pertama saya.</p>

  <!-- Script JavaScript diletakkan di akhir body untuk performa -->
  <script src="script.js"></script>
</body>
</html>
```

### Bedah Struktur per Baris:

1. **`<!DOCTYPE html>`**: Ini disebut *Document Type Declaration*. Deklarasi wajib di baris paling pertama untuk memberi tahu browser agar merender halaman menggunakan aturan HTML5 versi terbaru. Tanpa ini, browser bisa masuk ke *quirks mode* yang membuat tampilan web menjadi kacau.
2. **`<html lang="id">`**: Elemen *root* (akar) yang membungkus seluruh dokumen. Atribut `lang="id"` sangat krusial untuk aksesibilitas (Screen Reader akan membacanya dengan logat Indonesia) dan membantu SEO (Google tahu ini web berbahasa Indonesia).
3. **`<head>`**: Bagian "otak" dokumen. Berisi meta-informasi tentang dokumen tersebut. **Semua yang ada di dalam `<head>` tidak terlihat langsung secara visual di halaman web** (kecuali `<title>` dan *favicon*).
   - `<meta charset="UTF-8">`: Memastikan website Anda mendukung semua karakter teks di dunia (termasuk emoji 🔥 dan huruf Arab/Kanji).
   - `<meta name="viewport" content="...">`: **Sangat Penting!** Baris ini memastikan website Anda responsif dan ukurannya menyesuaikan dengan layar HP pengunjung.
4. **`<body>`**: Bagian "tubuh" dokumen. **Segala sesuatu yang Anda ingin pengunjung lihat** (teks, gambar, video, tombol, form) wajib diletakkan di dalam tag `<body>` ini.

---

## Tag, Elemen, dan Atribut (Konsep Fundamental)

Untuk menjadi Web Developer yang handal, Anda harus sangat paham membedakan tiga istilah ini:

### 1. Tag (Penanda)
Simbol `< >` yang digunakan untuk "membungkus" konten. Sebagian besar tag berpasangan:
- **Tag Pembuka:** `<p>`
- **Tag Penutup:** `</p>` (wajib memiliki garis miring `/`)

Ada juga **Void/Empty Elements (Tag Mandiri)** yang tidak memiliki konten di dalamnya, sehingga tidak butuh penutup, contohnya: `<img />`, `<br>`, `<hr>`, `<meta>`, `<input>`.

### 2. Elemen
Elemen adalah **kesatuan utuh** dari Tag Pembuka + Konten + Tag Penutup.
Contoh sebuah Elemen utuh:
```html
<h1>Ini adalah Konten Elemen Heading</h1>
```

### 3. Atribut
Atribut adalah parameter tambahan yang memberikan **instruksi atau informasi ekstra** kepada sebuah elemen. 
Aturan penulisan atribut:
- Selalu diletakkan di dalam **tag pembuka**.
- Format penulisannya berupa pasangan `nama="nilai"` (Name-Value pair).
- Nilai (value) sebaiknya selalu dibungkus tanda kutip (ganda `""` atau tunggal `''`).

Contoh Elemen dengan banyak Atribut:
```html
<a href="https://google.com" target="_blank" class="tombol-biru" id="link-utama">Pergi ke Google</a>
```
- `href` : Menentukan URL tujuan.
- `target` : Menentukan cara membuka link (di tab baru).
- `class` : Menandai elemen untuk diberi *styling* CSS nantinya. (Satu *class* bisa dipakai berulang kali).
- `id` : Menandai identitas unik elemen. (Satu *id* hanya boleh ada satu dalam satu halaman).

---

## Meta Tags Lengkap — Lebih dari Sekedar Deskripsi

Selain `description` dan `viewport`, ada beberapa meta tag yang sering dipakai di web produksi modern. Tambahkan di dalam `<head>`:

### Open Graph (OG) — preview saat dibagikan ke sosial media
Saat link Anda dibagikan ke WhatsApp, Facebook, Twitter/X, Discord, Slack, platform akan membaca tag OG untuk menampilkan "kartu preview" lengkap dengan gambar & judul.

```html
<meta property="og:title" content="Belajar Web Dev Basic">
<meta property="og:description" content="Dokumentasi web development dasar dalam bahasa Indonesia.">
<meta property="og:image" content="https://webdev-basic.dev/og-image.png">
<meta property="og:url" content="https://webdev-basic.dev/">
<meta property="og:type" content="website">
<meta property="og:locale" content="id_ID">
```

### Twitter Card (Twitter / X)
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Belajar Web Dev Basic">
<meta name="twitter:description" content="Dokumentasi web development dasar dalam bahasa Indonesia.">
<meta name="twitter:image" content="https://webdev-basic.dev/twitter-card.png">
```

### Lain-lain yang sering dipakai
```html
<!-- Warna address bar HP (Chrome mobile) -->
<meta name="theme-color" content="#4CAF50">

<!-- URL kanonik (cegah duplikat konten di SEO) -->
<link rel="canonical" href="https://webdev-basic.dev/">

<!-- Indeks robot pencari: izinkan index, ikuti link -->
<meta name="robots" content="index, follow">

<!-- Refresh / redirect otomatis -->
<meta http-equiv="refresh" content="5; url=/baru">
```

::: tip Tool uji
Pasang tag OG, lalu test di [opengraph.xyz](https://www.opengraph.xyz/) atau [Social Share Preview](https://www.socialsharepreview.com/) untuk memastikan preview keluar benar sebelum di-deploy.
:::

---

## Favicon — Ikon Kecil di Tab Browser

Favicon adalah ikon kecil yang tampil di tab browser dan bookmark. Tambahkan di `<head>`:

```html
<!-- Ikon klasik (32x32 PNG) -->
<link rel="icon" type="image/png" href="/favicon.png">

<!-- SVG favicon fleksibel & mendukung dark mode -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg">

<!-- Untuk tampilan home screen iPhone -->
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

Rekomendasi: pakai SVG favicon (1 file adaptif, jernih di semua resolusi). Klik kanan file SVG di browser inspeksi apakah warnanya menyesuaikan tema.

---

## Komentar HTML — Catatan yang Tidak Tampil

Komentar dipakai untuk menandai bagian kode agar tidak tampil di browser, tetapi **tetap terlihat di View Source / DevTools**. Berguna untuk dokumentasi inline dan menonaktifkan kode sementara.

```html
<!-- Ini komentar satu baris -->

<!--
  Ini komentar
  multi baris.
  Berguna untuk menandai section besar.
-->

<p>Paragraf ini tampil di browser.</p>
<!-- <p>Paragraf ini tidak tampil — dinonaktifkan sementara.</p> -->
```

::: warning Komentar HTML BUKAN tempat rahasia
Komentar HTML **terlihat oleh siapa pun** yang klik kanan → View Source. Jangan taruh password, token, atau catatan sensitif di sini. Untuk hal yang benar-benar rahasia, simpan di server (backend).
:::

Shortcut cepat di VS Code: blok kode → `Ctrl + /` (Windows) / `Cmd + /` (Mac).

---

## DOM Tree — Pohon Hierarki Elemen

Browser memparse HTML menjadi **DOM Tree** — pohon objek. Memahami ini krusial untuk JavaScript & CSS nanti (selector descendant/child adalah traversal pohon ini).

Misalkan HTML berikut:
```html
<body>
  <header>
    <h1>Judul</h1>
  </header>
  <main>
    <p>Paragraf di main</p>
  </main>
</body>
```

Pohon DOM-nya:
```
document
  └── <html>
       └── <body>
            ├── <header>
            │    └── <h1> "Judul"
            └── <main>
                 └── <p> "Paragraf di main"
```

Istilah penting:
- **parent** / **ancestor** → elemen di atas (`<body>` parent dari `<main>`)
- **child** / **descendant** → elemen di bawah (`<header>` child dari `<body>`)
- **sibling** → saudara selevel (`<header>` dan `<main>` sibling)

Di DevTools Elements panel, Anda bisa lihat pohon DOM ini secara interaktif — collapse/expand node, edit langsung, dan lihat highlight yang sesuai.

---

## Tools untuk Mempermudah Ngoding HTML

### Live Server — reload otomatis setiap simpan
VS Code extension **Live Server** (atau built-in Vite dev server) menjalankan file HTML di localhost dengan auto-reload: setiap Anda `Ctrl+S`, browser merefresh sendiri. Jauh lebih produktif daripada manual F5.

### Emmet — singkatan keyboard untuk HTML/CSS
Emmet sudah built-in di VS Code. Tik singkatan → tekan Tab → ter-expand jadi HTML:

| Tik | Hasil setelah Tab |
|---|---|
| `!` | seluruh boilerplate HTML5 |
| `h1{Judul}` | `<h1>Judul</h1>` |
| `ul>li*3` | `<ul>` berisi 3 `<li></li>` |
| `a[href="#"]` | `<a href="#"></a>` |
| `.card>img+p` | `<div class="card"><img>+<p></p></div>` |
| `nav>ul>li*5>a` | navbar lengkap dengan 5 link |

::: tip
Bookmark [emmet cheat sheet](https://docs.emmet.io/cheat-sheet/) — sebagian besar editor modern mendukungnya. Hemat banyak ketikan.
:::

### HTML Validator — pastikan HTML Anda valid
[**W3C Validator**](https://validator.w3.org/) adalah layanan resmi yang mengecek apakah HTML Anda valid sesuai standar W3C. Tidak valid tidak selalu berarti rusak — browser cukup toleran — tapi kebiasaan menulis HTML valid membantu SEO & aksesibilitas.

Hal yang sering ditegur validator:
- Tag belum ditutup (`<div>` tanpa `</div>`)
- Atribut tanpa nilai (`disabled=""` sebenarnya OK, tapi `disabled="true"` tidak tepat)
- Duplikat ID (`id="header"` pakai dua kali)
- Struktur tidak boleh: `<p>` membungkus `<div>`, atau `<a>` di dalam `<a>`

---

Dengan pondasi kuat terkait Anatomi HTML ini, Anda sekarang siap merangkai blok-blok penyusun konten visual halaman web di materi selanjutnya: **[Teks & Formatting →](./teks-formatting)**.
