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

---

## ARIA Roles — Fallback untuk Browser Lama

Elemen semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<footer>`) sudah dikenal oleh semua browser modern. Tetapi jika aplikasi Anda harus mendukung browser sangat lawas (IE11 atau older screen reader), Anda bisa menambahkan **ARIA Landmark Roles** sebagai "label cadangan".

**Analogi:** Seperti stiker Braille di tombol lift. Orang yang bisa melihat sudah tahu lantai berapa dari angka yang tertera. Tunanetra membaca stiker Braille sebagai lapisan informasi tambahan.

| Elemen HTML5 | ARIA Role Setara | Keterangan |
|-------------|------------------|------------|
| `<header>` | `role="banner"` | Hanya untuk header utama halaman (bukan header di dalam `<article>`) |
| `<nav>` | `role="navigation"` | Area navigasi |
| `<main>` | `role="main"` | Konten utama halaman |
| `<aside>` | `role="complementary"` | Konten pendamping/sampingan |
| `<footer>` | `role="contentinfo"` | Informasi tentang dokumen (copyright, kontak) |

```html
<header role="banner">
  <h1>Website Saya</h1>
</header>

<nav role="navigation">
  <a href="/">Beranda</a>
  <a href="/tentang">Tentang</a>
</nav>

<main role="main">
  <article>
    <h2>Judul Artikel</h2>
    <p>Konten utama di sini...</p>
  </article>
</main>

<footer role="contentinfo">
  <p>&copy; 2026. Hak cipta dilindungi.</p>
</footer>
```

### 💡 Tips Praktis:
- **Untuk browser modern (Chrome, Firefox, Safari, Edge 2020+)**, menambahkan ARIA explicit tidak diperlukan — semantic HTML5 sudah cukup. Faktanya, aturan ARIA pertama: *"Jika Anda bisa menggunakan elemen HTML native yang sudah memiliki semantics dan behavior bawaan, gunakan itu. Jangan menambah ARIA."*
- `role="banner"` hanya digunakan pada `<header>` **level halaman**, bukan `<header>` di dalam `<article>` atau `<section>`.

---

## `aria-label` dan `aria-labelledby` — Membedakan Elemen Serupa

Bagaimana screen reader membedakan dua `<nav>` di halaman yang sama — misalnya navigasi utama dan navigasi footer? Dengan `aria-label` atau `aria-labelledby`.

### `aria-label`
Menambahkan label teks yang hanya dibaca screen reader (tidak terlihat secara visual).

### `aria-labelledby`
Menunjuk ke elemen lain (via ID) yang berfungsi sebagai judul/label untuk elemen ini.

```html
<!-- DUA nav di halaman yang sama -->
<nav aria-label="Utama">
  <ul>
    <li><a href="/">Beranda</a></li>
    <li><a href="/layanan">Layanan</a></li>
    <li><a href="/kontak">Kontak</a></li>
  </ul>
</nav>

<!-- ... konten halaman ... -->

<nav aria-label="Footer">
  <ul>
    <li><a href="/privasi">Kebijakan Privasi</a></li>
    <li><a href="/syarat">Syarat & Ketentuan</a></li>
  </ul>
</nav>
```
<div class="preview-box">
  <p style="margin-top:0; font-size: 0.85rem; color: #666;">Screen reader akan mengumumkan:</p>
  <ul style="font-size: 0.85rem;">
    <li><em>"Navigasi Utama, daftar 3 item"</em> — untuk nav atas</li>
    <li><em>"Navigasi Footer, daftar 2 item"</em> — untuk nav bawah</li>
  </ul>
  <p style="font-size: 0.85rem; color: #666;">Tanpa <code>aria-label</code>, keduanya akan terdengar identik: <em>"Navigasi, daftar item"</em></p>
</div>

### Contoh `aria-labelledby`:
```html
<h2 id="judul-faq">Pertanyaan yang Sering Diajukan</h2>
<section aria-labelledby="judul-faq">
  <details>
    <summary>Apa itu HTML?</summary>
    <p>HTML adalah bahasa markup standar untuk membuat halaman web.</p>
  </details>
</section>
```

---

## `<dialog>` — Modal / Popup Native HTML5

Selama bertahun-tahun, developer membuat modal/popup dengan tumpukan `<div>`, CSS `position: fixed`, z-index, dan JavaScript ribuan baris. **Masuki `<dialog>`** — elemen HTML native untuk dialog/modal sejak 2022 (kini didukung semua browser modern).

### Perbedaan `<details>` dan `<dialog>`:
- **`<details>`**: Seksi konten yang bisa dibuka/tutup *inline* (accordion). Tidak mengganggu halaman di sekitarnya.
- **`<dialog>`**: Jendela popup di atas konten halaman (*overlay*). Bisa berupa modal (memblokir interaksi dengan halaman) atau non-modal.

```html
<!-- Dialog tanpa JavaScript (terbuka default) -->
<dialog open>
  <p>Ini adalah dialog sederhana yang langsung terlihat.</p>
  <form method="dialog">
    <button>Tutup</button>
  </form>
</dialog>

<!-- Modal dengan JavaScript -->
<button id="btnModal">Buka Modal Konfirmasi</button>

<dialog id="modalKonfirmasi">
  <h3>Konfirmasi Penghapusan</h3>
  <p>Apakah Anda yakin ingin menghapus data ini? Tindakan ini tidak dapat dibatalkan.</p>
  <form method="dialog">
    <button value="batal">Batal</button>
    <button value="hapus" style="background: #F44336; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px;">Hapus</button>
  </form>
</dialog>

<script>
  document.getElementById('btnModal').addEventListener('click', function() {
    document.getElementById('modalKonfirmasi').showModal(); // Membuka sebagai modal
  });
</script>
```
<div class="preview-box">
  <p style="margin-top:0; font-size: 0.85rem;"><strong>Demo Dialog (tanpa modal backdrop):</strong></p>
  <dialog open style="border: 2px solid var(--vp-c-brand); border-radius: 8px; padding: 1rem; max-width: 350px;">
    <h3 style="margin-top: 0;">Konfirmasi Penghapusan</h3>
    <p style="font-size: 0.9rem;">Apakah Anda yakin ingin menghapus data ini?</p>
    <form method="dialog" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
      <button style="padding: 0.4rem 1rem; border: 1px solid #ccc; border-radius: 4px; cursor: pointer;">Batal</button>
      <button style="padding: 0.4rem 1rem; background: #F44336; color: white; border: none; border-radius: 4px; cursor: pointer;">Hapus</button>
    </form>
  </dialog>
  <p style="font-size: 0.8rem; color: #666; margin-top: 0.5rem;">Dialog di atas ditampilkan sebagai non-modal (atribut <code>open</code>). Untuk modal penuh dengan backdrop, panggil <code>.showModal()</code> via JavaScript.</p>
</div>

### 💡 Tips Praktis:
- `dialog.showModal()` otomatis menambahkan backdrop semi-transparan (`::backdrop` pseudo-element) dan membuat body tidak bisa di-scroll.
- Gunakan `<form method="dialog">` di dalam dialog — tombol submit otomatis menutup dialog dan mengembalikan `value` tombol ke properti `dialog.returnValue`.
- Pseudo-element `::backdrop` bisa distyling dengan CSS: `dialog::backdrop { background: rgba(0,0,0,0.5); }`

---

## Skip Link — Navigasi Keyboard untuk Aksesibilitas

Pengguna tunanetra dan pengguna keyboard (tanpa mouse) harus menekan **Tab puluhan kali** untuk melewati menu header dan mencapai konten utama. **Skip Link** adalah tautan tersembunyi yang muncul saat pertama kali Tab ditekan, memungkinkan lompatan langsung ke konten utama.

```html
<!-- Tempatkan SEBELUM header, sebagai elemen pertama di <body> -->
<a href="#konten-utama" class="skip-link">Lompat ke konten utama</a>

<header>
  <nav>
    <a href="/">Beranda</a>
    <a href="/tentang">Tentang</a>
    <a href="/layanan">Layanan</a>
    <a href="/kontak">Kontak</a>
  </nav>
</header>

<main id="konten-utama">
  <h1>Judul Halaman</h1>
  <p>Konten utama di sini...</p>
</main>
```

```css
.skip-link {
  position: absolute;
  top: -100px;
  left: 10px;
  background: #000;
  color: #fff;
  padding: 0.5rem 1rem;
  z-index: 9999;
  text-decoration: none;
  border-radius: 0 0 4px 4px;
}

.skip-link:focus {
  top: 0;
}
```
<div class="preview-box">
  <p style="margin-top:0; font-size: 0.85rem; color: #666;">Tekan tombol <kbd style="background: #eee; border: 1px solid #aaa; border-radius: 3px; padding: 2px 6px; font-family: monospace;">Tab</kbd> pada keyboard Anda sekarang. Link "Lompat ke konten utama" akan muncul:</p>
  <div style="position: relative; border: 1px solid var(--vp-c-divider); padding: 0.5rem; border-radius: 4px; background: #fafafa; min-height: 60px;">
    <a href="#demo-skip-target" style="position: absolute; top: -100px; left: 10px; background: #000; color: #fff; padding: 0.5rem 1rem; z-index: 9999; text-decoration: none; border-radius: 0 0 4px 4px;">Lompat ke konten utama</a>
    <a href="#" style="display: inline-block; padding: 0.4rem; margin-right: 0.5rem; color: blue;">Beranda</a>
    <a href="#" style="display: inline-block; padding: 0.4rem; margin-right: 0.5rem; color: blue;">Tentang</a>
    <a href="#" style="display: inline-block; padding: 0.4rem; margin-right: 0.5rem; color: blue;">Layanan</a>
    <a href="#" style="display: inline-block; padding: 0.4rem; color: blue;">Kontak</a>
  </div>
</div>

### 💡 Tips Praktis:
- Skip link harus menjadi **elemen interaktif pertama** di `<body>`.
- Jangan gunakan `display: none` — itu akan menyembunyikannya dari screen reader juga. Gunakan trik `position: absolute` + `top: -100px` seperti di atas.
- Target lompatan (contoh: `<main id="konten-utama">`) harus memiliki atribut `tabindex="-1"` agar bisa menerima fokus dari skip link.

---

## Heading Outline di HTML5

Di HTML4, aturannya ketat: **satu `<h1>` per halaman**. Di HTML5 dengan semantic sectioning elements, aturannya lebih fleksibel — setiap `<article>`, `<section>`, `<aside>`, atau `<nav>` bisa memiliki struktur heading-nya sendiri, dimulai dari `<h1>`.

**Konsep:** HTML5 mendefinisikan **document outline** berdasarkan sectioning elements. Secara teori, browser dan screen reader bisa memahami hierarki heading berdasarkan kedalaman section, bukan hanya angka heading.

```html
<h1>Blog Teknologi</h1> <!-- H1 halaman -->

<article>
  <h1>Cara Install Linux Ubuntu</h1> <!-- H1 artikel (independent) -->
  <p>Panduan langkah demi langkah...</p>

  <section>
    <h2>Persyaratan Sistem</h2> <!-- Sub-heading artikel -->
    <p>Minimal RAM 4GB...</p>
  </section>

  <section>
    <h2>Langkah Instalasi</h2>
    <p>Pertama, download ISO...</p>
  </section>
</article>

<article>
  <h1>Review MacBook Pro M4</h1> <!-- H1 artikel lain (independent) -->
  <p>Apple kembali menghadirkan...</p>
</article>
```
<div class="preview-box">
  <div style="font-family: sans-serif; font-size: 0.9rem; border: 1px solid var(--vp-c-divider); padding: 1rem; border-radius: 4px;">
    <h1 style="font-size: 1.3rem; margin-top: 0;">Blog Teknologi</h1>
    <div style="border-left: 3px solid var(--vp-c-brand); padding-left: 1rem; margin-bottom: 1rem;">
      <h2 style="font-size: 1.1rem;">Cara Install Linux Ubuntu</h2>
      <p style="font-size: 0.85rem;">Panduan langkah demi langkah...</p>
      <div style="margin-left: 1rem;">
        <h3 style="font-size: 1rem;">Persyaratan Sistem</h3>
        <p style="font-size: 0.8rem;">Minimal RAM 4GB...</p>
        <h3 style="font-size: 1rem;">Langkah Instalasi</h3>
        <p style="font-size: 0.8rem;">Pertama, download ISO...</p>
      </div>
    </div>
    <div style="border-left: 3px solid var(--vp-c-brand); padding-left: 1rem;">
      <h2 style="font-size: 1.1rem;">Review MacBook Pro M4</h2>
      <p style="font-size: 0.85rem;">Apple kembali menghadirkan...</p>
    </div>
  </div>
</div>

### ⚠️ Kenyataan vs Teori:

Meskipun spesifikasi HTML5 mengizinkan multiple `<h1>`, **dalam praktiknya**, screen reader dan SEO tool belum sepenuhnya mengimplementasikan outline algorithm ini. Rekomendasi terkini untuk web developer:

1. **Tetap gunakan satu `<h1>` per halaman** untuk judul utama.
2. Gunakan hierarki bertingkat: `<h2>` untuk sub-judul utama, `<h3>` untuk sub-bagian, dan seterusnya.
3. Jangan melompati level heading (`h1 → h3` tanpa `h2`).

Gaya seperti contoh di atas lebih cocok untuk konten yang benar-benar *syndicated* (konten feed, agregator berita) di mana setiap artikel independen dan bisa tampil di halaman mana pun.
