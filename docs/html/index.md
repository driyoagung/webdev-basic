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

Dengan pondasi kuat terkait Anatomi HTML ini, Anda sekarang siap merangkai blok-blok penyusun konten visual halaman web di materi selanjutnya.
