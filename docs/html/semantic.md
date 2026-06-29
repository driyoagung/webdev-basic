# Semantic HTML & Praktik Modern

Di awal kemunculan internet, tidak ada panduan ketat tentang struktur dokumen. Web Developer sering menggunakan elemen generik tanpa makna seperti `<div>` atau `<span>` untuk membangun semua tata letak website (Masa ini sering dijuluki era *"Div Soup"* atau sup div). 

HTML5 memperkenalkan revolusi bernama **Semantic HTML**. Elemen Semantic adalah tag yang secara lisan dan jelas mendeskripsikan tujuan serta isi kontennya kepada browser dan *Screen Reader* (mesin pembaca untuk penyandang tunanetra).

### Perbedaan Mendasar
- **Non-Semantic**: `<div>` dan `<span>`. Tidak peduli isi di dalamnya apa, ia hanya bertindak sebagai wadah (container).
- **Semantic**: `<form>`, `<table>`, `<article>`, `<header>`. Begitu melihat tag ini, manusia maupun mesin langsung tahu apa fungsinya.

---

## Mengapa Semantic HTML Sangat Penting?

1. **SEO (Search Engine Optimization)**: Google, Bing, dan mesin pencari lainnya memprioritaskan situs yang memiliki markup struktur logis yang baik. Mesin pencari lebih mementingkan konten di dalam `<article>` ketimbang konten yang terkubur di dalam lautan `<div>`.
2. **Aksesibilitas (Accessibility / A11y)**: Screen reader sangat bergantung pada elemen semantic. Misalnya, tag `<nav>` memicu screen reader untuk mengumumkan "Landmark Navigasi" sehingga pengguna tunanetra bisa melompat langsung ke menu tersebut jika ia mau.
3. **Keterbacaan Kode (Maintainability)**: Jauh lebih mudah bagi programmer (dan rekan setimnya) untuk mencari letak *header* website dengan membaca tag `<header>` dibandingkan dengan membaca `<div class="header-container-wrapper">`.

---

## Daftar Elemen Semantic Utama HTML5

Berikut adalah elemen penyusun struktur layout standar:

### 1. `<header>`
Mendefinisikan bagian kepala (*header*) dari dokumen atau bagian. Umumnya berisi Logo Website, Navigasi Utama, dan kolom Pencarian.

### 2. `<nav>` (Navigation)
Area utama untuk kumpulan tautan navigasi. Jangan membungkus semua tautan di web dengan `<nav>`, gunakan hanya untuk Menu Utama atau Menu Kaki yang besar.

### 3. `<main>`
Menentukan area konten dominan dari dokumen. Konten di dalamnya harus unik ke halaman tersebut (tidak boleh berisi sidebar, header footer logo yang diulang di banyak halaman). **Ingat: Hanya boleh ada satu elemen `<main>` di seluruh halaman.**

### 4. `<section>`
Mewakili "Bab" atau area tematik mandiri dalam halaman. Contoh: Sebuah halaman Landing Page bisa dibagi menjadi `<section class="fitur">`, `<section class="harga">`, dan `<section class="testimoni">`. Sebaiknya sebuah section memiliki sebuah Heading (`<h2>` - `<h6>`) di dalamnya.

### 5. `<article>`
Mewakili konten yang bisa berdiri sendiri (independen) dan masih masuk akal jika dibagikan ke tempat lain tanpa konteks website utama Anda. Contoh paling jelas: Postingan Blog, Berita, Kolom Komentar dari pengunjung, Widget Cuaca.

### 6. `<aside>`
Bagian dari halaman yang isinya hanya menunjang konten utama (konten sampingan). Secara visual sering dipakai sebagai Sidebar, Iklan, atau Daftar Kategori/Link terkait.

### 7. `<footer>`
Area kaki halaman. Biasanya memuat hak cipta, informasi kontak (sering dibungkus tag `<address>`), tautan ke dokumen legal (Syarat & Ketentuan), dan sitemap.

---

## Contoh Studi Kasus Layout Semantik

Mari kita gabungkan semuanya. Berikut adalah struktur HTML untuk halaman postingan Blog profesional yang disukai oleh mesin pencari Google:

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Tutorial HTML Semantik - Blog Coding</title>
</head>
<body>

  <!-- Bagian Kepala Global -->
  <header>
    <a href="/">
      <img src="logo.png" alt="Logo Blog Coding">
    </a>
    <nav>
      <ul>
        <li><a href="/">Beranda</a></li>
        <li><a href="/tutorial">Tutorial</a></li>
        <li><a href="/kontak">Kontak</a></li>
      </ul>
    </nav>
  </header>

  <!-- Area Dominan Halaman -->
  <main>
    
    <!-- Sebuah Artikel Utuh (Independen) -->
    <article>
      <header>
        <h1>Cara Menguasai Semantic HTML5</h1>
        <p>Dipublikasikan pada <time datetime="2026-06-29">29 Juni 2026</time> oleh Penulis.</p>
      </header>

      <p>Semantic HTML sangat penting untuk SEO...</p>
      
      <!-- Sub-bagian dari Artikel -->
      <section>
        <h2>Mengapa Ini Penting?</h2>
        <p>Karena Google menyukainya.</p>
      </section>

      <!-- Komentar Pengguna (Juga berdiri sendiri) -->
      <section class="comments">
        <h2>Komentar (1)</h2>
        <article>
          <strong>Budi:</strong>
          <p>Wah artikel yang sangat membantu, terima kasih!</p>
        </article>
      </section>
    </article>

    <!-- Sidebar Pendukung -->
    <aside>
      <h3>Artikel Terpopuler</h3>
      <ul>
        <li><a href="#">Dasar CSS Flexbox</a></li>
        <li><a href="#">Cara Membuat Form</a></li>
      </ul>
    </aside>

  </main>

  <!-- Bagian Kaki Global -->
  <footer>
    <p>&copy; 2026 Blog Coding. Hak cipta dilindungi.</p>
    <address>
      Hubungi kami di <a href="mailto:halo@blogcoding.id">halo@blogcoding.id</a>
    </address>
  </footer>

</body>
</html>
```

Menggunakan tag Semantic ini menandakan bahwa Anda bukan hanya bisa menulis kode HTML asal tampil, melainkan menulis kode Web berstandar Industri modern (*Best Practices*).
