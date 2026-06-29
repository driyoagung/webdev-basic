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

Mari kita gabungkan semuanya. Berikut adalah struktur blok layout HTML untuk halaman postingan Blog profesional yang disukai oleh mesin pencari Google:

```html
<header>
  <h1>Blog Coding</h1>
  <nav>
    <a href="/">Beranda</a> | <a href="/tutorial">Tutorial</a>
  </nav>
</header>

<main>
  <!-- Sebuah Artikel Utuh -->
  <article>
    <header>
      <h2>Cara Menguasai Semantic HTML5</h2>
      <p>Dipublikasikan: 29 Juni 2026</p>
    </header>
    <p>Semantic HTML sangat penting untuk SEO...</p>
    
    <!-- Sub-bagian dari Artikel -->
    <section>
      <h3>Mengapa Ini Penting?</h3>
      <p>Karena Google menyukainya.</p>
    </section>
  </article>

  <!-- Sidebar Pendukung -->
  <aside>
    <h3>Artikel Terpopuler</h3>
    <ul>
      <li><a href="#">Dasar CSS Flexbox</a></li>
    </ul>
  </aside>
</main>

<footer>
  <p>&copy; 2026 Blog Coding.</p>
</footer>
```

<div class="preview-box">
  <!-- Simulasi Layout Semantic dengan border agar strukturnya terlihat -->
  <div style="font-family: sans-serif; font-size: 0.9rem; line-height: 1.4;">
    
    <header style="border: 2px dashed #4CAF50; padding: 1rem; margin-bottom: 1rem; text-align: center;">
      <span style="font-size: 0.7rem; color: #4CAF50; text-transform: uppercase; font-weight: bold;">&lt;header&gt;</span>
      <h1 style="margin: 0.5rem 0;">Blog Coding</h1>
      <nav style="border: 1px dashed #2196F3; padding: 0.5rem; display: inline-block;">
        <span style="font-size: 0.7rem; color: #2196F3; font-weight: bold; margin-right: 0.5rem;">&lt;nav&gt;</span>
        <a href="#" style="color: blue;">Beranda</a> | <a href="#" style="color: blue;">Tutorial</a>
      </nav>
    </header>

    <main style="border: 2px dashed #F44336; padding: 1rem; margin-bottom: 1rem; display: flex; gap: 1rem; flex-wrap: wrap;">
      <div style="width: 100%;"><span style="font-size: 0.7rem; color: #F44336; text-transform: uppercase; font-weight: bold;">&lt;main&gt;</span></div>
      
      <article style="border: 2px dashed #FF9800; padding: 1rem; flex: 2; min-width: 200px;">
        <span style="font-size: 0.7rem; color: #FF9800; text-transform: uppercase; font-weight: bold;">&lt;article&gt;</span>
        
        <header style="border: 1px dashed #4CAF50; padding: 0.5rem; margin-top: 0.5rem;">
          <span style="font-size: 0.6rem; color: #4CAF50;">&lt;header&gt; dalam article</span>
          <h2 style="margin: 0.2rem 0; font-size: 1.2rem;">Cara Menguasai Semantic HTML5</h2>
          <p style="margin: 0; font-size: 0.8rem; color: #666;">Dipublikasikan: 29 Juni 2026</p>
        </header>

        <p style="margin: 1rem 0;">Semantic HTML sangat penting untuk SEO...</p>
        
        <section style="border: 1px dashed #9C27B0; padding: 0.5rem;">
          <span style="font-size: 0.6rem; color: #9C27B0;">&lt;section&gt;</span>
          <h3 style="margin: 0.2rem 0; font-size: 1rem;">Mengapa Ini Penting?</h3>
          <p style="margin: 0;">Karena Google menyukainya.</p>
        </section>
      </article>

      <aside style="border: 2px dashed #009688; padding: 1rem; flex: 1; min-width: 150px; background: rgba(0,0,0,0.03);">
        <span style="font-size: 0.7rem; color: #009688; text-transform: uppercase; font-weight: bold;">&lt;aside&gt;</span>
        <h3 style="margin-top: 0.5rem; font-size: 1rem;">Artikel Terpopuler</h3>
        <ul style="padding-left: 1rem; margin: 0;">
          <li><a href="#" style="color: blue;">Dasar CSS</a></li>
        </ul>
      </aside>
    </main>

    <footer style="border: 2px dashed #607D8B; padding: 1rem; text-align: center;">
      <span style="font-size: 0.7rem; color: #607D8B; text-transform: uppercase; font-weight: bold;">&lt;footer&gt;</span>
      <p style="margin: 0.5rem 0 0 0;">&copy; 2026 Blog Coding.</p>
    </footer>

  </div>
</div>

Menggunakan tag Semantic ini menandakan bahwa Anda bukan hanya bisa menulis kode HTML asal tampil, melainkan menulis kode Web berstandar Industri modern (*Best Practices*).
