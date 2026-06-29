# Semantic HTML

HTML5 memperkenalkan konsep elemen Semantic. **Elemen Semantic adalah elemen yang secara jelas mendeskripsikan maknanya** kepada browser dan mesin pengembang (developer).

Sebelum HTML5, pembuat web terlalu sering menggunakan tag `<div>` atau `<span>` yang tidak memiliki arti (Non-semantic). 

### Perbandingan
- **Non-Semantic**: `<div>`, `<span>` (Tidak memberi petunjuk tentang isi kontennya).
- **Semantic**: `<form>`, `<table>`, `<article>`, `<header>` (Secara gamblang mendeskripsikan isi kontennya).

## Mengapa Semantic HTML Penting?

1. **SEO (Search Engine Optimization)**: Mesin pencari seperti Google bisa lebih mudah mengindeks dan memahami konteks struktur halaman web Anda.
2. **Accessibility (Aksesibilitas)**: Pembaca layar (*screen reader*) untuk orang tunanetra sangat bergantung pada elemen semantic untuk membacakan struktur halaman secara masuk akal.
3. **Kerapian Kode**: Mempermudah developer lain untuk membaca dan memelihara kode Anda karena tidak dipenuhi oleh lautan `<div>`.

## Elemen Semantic Baru di HTML5

Berikut adalah beberapa elemen semantic utama untuk menyusun struktur kerangka halaman:

1. **`<header>`**: Mendefinisikan bagian atas/kepala dari dokumen atau bagian. Biasanya berisi logo, navigasi, atau judul utama.
2. **`<nav>`**: Mendefinisikan satu blok tautan navigasi (menu utama).
3. **`<main>`**: Menentukan area konten utama yang unik dari dokumen. Tidak boleh berisi sidebar, header footer yang diulang di banyak tempat.
4. **`<section>`**: Mendefinisikan area/babak tertentu dalam dokumen (misal: Section Layanan, Section Portfolio).
5. **`<article>`**: Mewakili konten independen yang masuk akal dibaca secara tersendiri tanpa konteks luar (misal: postingan blog, berita).
6. **`<aside>`**: Digunakan untuk konten sampingan yang masih sedikit berhubungan dengan konten utama (seperti *Sidebar*, link terkait, atau iklan).
7. **`<footer>`**: Mendefinisikan bagian bawah/kaki dari dokumen. Biasanya memuat hak cipta, kontak, atau tautan privasi.

## Contoh Struktur Layout Semantic

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Blog Saya</title>
</head>
<body>

  <!-- Bagian Header Website -->
  <header>
    <h1>My Personal Blog</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <!-- Konten Utama Website -->
  <main>
    <section class="latest-posts">
      <h2>Postingan Terakhir</h2>
      
      <!-- Artikel independen -->
      <article>
        <h3>Cara Belajar HTML</h3>
        <p>Belajar HTML itu mudah asalkan rajin praktik...</p>
        <a href="#">Baca selengkapnya</a>
      </article>

    </section>

    <!-- Konten Sampingan (Sidebar) -->
    <aside>
      <h3>Tentang Penulis</h3>
      <p>Halo, saya adalah Web Developer asal Indonesia.</p>
    </aside>
  </main>

  <!-- Bagian Bawah Website -->
  <footer>
    <p>&copy; 2026 My Personal Blog. All rights reserved.</p>
  </footer>

</body>
</html>
```

Menggunakan elemen semantic ini merupakan **standar industri modern** (Best Practice) dalam menyusun HTML.
