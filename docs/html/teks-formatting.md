# Teks dan Formatting

Teks adalah tulang punggung penyampaian informasi di internet. HTML menyediakan variasi tag yang sangat kaya untuk memformat teks tidak hanya agar terlihat bagus secara visual, tetapi juga memberikan makna semantik yang dipahami oleh mesin (SEO & Screen Reader).

## Heading (Judul Utama & Sub-Judul)

Heading mendefinisikan hierarki dan kerangka topik konten Anda. HTML menyediakan 6 tingkat: `<h1>` (Terbesar/Paling Penting) hingga `<h6>` (Terkecil).

```html
<h1>Belajar Pemrograman Web (Judul Halaman)</h1>
<h2>Bab 1: Dasar HTML (Sub-judul utama)</h2>
<h3>1.1 Sejarah HTML (Sub-bagian)</h3>
<h4>Detail Rilis HTML5</h4>
```
<div class="preview-box">
  <h1>Belajar Pemrograman Web (Judul Halaman)</h1>
  <h2>Bab 1: Dasar HTML (Sub-judul utama)</h2>
  <h3>1.1 Sejarah HTML (Sub-bagian)</h3>
  <h4>Detail Rilis HTML5</h4>
</div>

### 💡 Praktik Terbaik (Best Practices) Heading:
1. **Hanya gunakan satu `<h1>` per halaman.** Mesin pencari Google menganggap `<h1>` sebagai tema utama halaman tersebut.
2. **Jangan melompati tingkatan.** Jangan menggunakan `<h3>` setelah `<h1>` hanya karena Anda ingin ukuran teks yang lebih kecil. Gunakan CSS untuk mengubah ukuran teks, dan pertahankan hierarki H1 -> H2 -> H3 untuk menjaga aksesibilitas.
3. Jangan gunakan tag heading untuk membuat teks biasa menjadi tebal/besar.

## Paragraph dan Tipografi Dasar

Tag `<p>` digunakan untuk paragraf tulisan.

```html
<p>Ini adalah paragraf pertama. HTML otomatis memberikan jarak bawah (margin-bottom) untuk memisahkan paragraf ini dari elemen di bawahnya.</p>
```
<div class="preview-box">
  <p>Ini adalah paragraf pertama. HTML otomatis memberikan jarak bawah (margin-bottom) untuk memisahkan paragraf ini dari elemen di bawahnya.</p>
</div>

### Spasi di HTML (White Space Collapse)
Penting diketahui: HTML akan **mengabaikan spasi berlebih** atau enter (baris baru) yang Anda ketik di kode editor. 

Jika Anda ingin memaksa baris baru (Enter), gunakan **Line Break `<br>`**.
Jika Anda ingin membuat teks yang mempertahankan format spasinya persis seperti di kode editor (biasa dipakai untuk menampilkan contoh kode sumber), gunakan tag **Preformatted `<pre>`**.

```html
<p>Baris pertama.<br>Baris kedua di bawahnya tanpa membuat paragraf baru.</p>

<pre>
  Teks di dalam pre
     akan persis mengikuti       spasi
  dan enter yang Anda buat.
</pre>
```
<div class="preview-box">
  <p>Baris pertama.<br>Baris kedua di bawahnya tanpa membuat paragraf baru.</p>
  <pre>
    Teks di dalam pre
       akan persis mengikuti       spasi
    dan enter yang Anda buat.
  </pre>
</div>

## Inline Text Formatting (Penekanan & Visual)

Terkadang sebuah kalimat membutuhkan penekanan kata khusus. Bedakan antara tag visual dan tag semantik:

### Semantic Emphasis (Direkomendasikan)
- **`<strong>`** : Teks yang **Sangat Penting / Urgent**. (Tampil tebal).
- **`<em>`** : Teks yang ditekankan (*Emphasis*). (Tampil miring).
- **`<mark>`** : Teks yang di-highlight/stabilo. Relevan untuk hasil pencarian.

### Visual Only (Kurang Direkomendasikan)
- **`<b>`** : Bold (Tebal).
- **`<i>`** : Italic (Miring).
- **`<u>`** : Underline (Garis bawah). 
- **`<s>`** : Strikethrough (Coret). Digunakan untuk teks yang sudah tidak relevan/harga coret diskon.

```html
<p>Hati-hati! Bahan kimia ini <strong>sangat beracun</strong>. Pastikan Anda sudah membaca <mark>buku panduan</mark> dengan <em>seksama</em> sebelum memulai. Harga lama <s>Rp10.000</s> kini hanya Rp5.000!</p>
```
<div class="preview-box">
  <p>Hati-hati! Bahan kimia ini <strong>sangat beracun</strong>. Pastikan Anda sudah membaca <mark>buku panduan</mark> dengan <em>seksama</em> sebelum memulai. Harga lama <s>Rp10.000</s> kini hanya Rp5.000!</p>
</div>

## Quotations (Kutipan)

Bagaimana cara yang benar untuk mengutip perkataan orang lain?

- **`<blockquote>`**: Untuk kutipan panjang yang memakan blok sendiri. Biasanya browser akan memberikan indentasi.
- **`<q>`**: Untuk kutipan pendek di dalam baris kalimat (*inline*). Browser otomatis menambahkan tanda petik ganda `" "`.
- **`<cite>`**: Menandakan judul karya atau nama sumber kutipan.

```html
<p>Steve Jobs pernah berkata <q>Stay hungry, stay foolish.</q></p>

<blockquote cite="https://www.who.int">
  Kesehatan adalah keadaan sehat fisik, mental, dan sosial yang utuh dan bukan hanya bebas dari penyakit.
</blockquote>
<p>- <cite>World Health Organization</cite></p>
```
<div class="preview-box">
  <p>Steve Jobs pernah berkata <q>Stay hungry, stay foolish.</q></p>
  <blockquote cite="https://www.who.int" style="border-left: 4px solid #ccc; padding-left: 1rem; margin-left: 0;">
    Kesehatan adalah keadaan sehat fisik, mental, dan sosial yang utuh dan bukan hanya bebas dari penyakit.
  </blockquote>
  <p>- <cite>World Health Organization</cite></p>
</div>

## List (Daftar / Poin)

List sangat penting untuk menyajikan data yang mudah dipindai (*scannable*).

### 1. Unordered List (`<ul>`)
Daftar yang itemnya setara, tidak butuh urutan prioritas. Menggunakan *bullet* bulat.

```html
<h3>Daftar Belanjaan:</h3>
<ul>
  <li>Beras 5kg</li>
  <li>Telur 1 Kg</li>
  <li>Susu Kotak</li>
</ul>
```
<div class="preview-box">
  <h3 style="margin-top:0;">Daftar Belanjaan:</h3>
  <ul style="padding-left: 1.5rem;">
    <li>Beras 5kg</li>
    <li>Telur 1 Kg</li>
    <li>Susu Kotak</li>
  </ul>
</div>

### 2. Ordered List (`<ol>`)
Daftar yang langkah-langkahnya harus berurutan (1, 2, 3 atau A, B, C).

```html
<h3>Cara Merebus Mie:</h3>
<ol type="1"> <!-- type bisa diganti "A", "a", "I", "i" -->
  <li>Didihkan air 400ml.</li>
  <li>Masukkan mie instan.</li>
  <li>Tunggu 3 menit.</li>
  <li>Tiriskan.</li>
</ol>
```
<div class="preview-box">
  <h3 style="margin-top:0;">Cara Merebus Mie:</h3>
  <ol type="1" style="padding-left: 1.5rem;">
    <li>Didihkan air 400ml.</li>
    <li>Masukkan mie instan.</li>
    <li>Tunggu 3 menit.</li>
    <li>Tiriskan.</li>
  </ol>
</div>

### 3. Description List (`<dl>`)
Digunakan seperti format kamus: Term (istilah) dan Deskripsinya.
```html
<dl>
  <dt><strong>HTML</strong></dt>
  <dd>Bahasa markup untuk membuat web.</dd>
  
  <dt><strong>CSS</strong></dt>
  <dd>Bahasa penata gaya untuk mempercantik web.</dd>
</dl>
```
<div class="preview-box">
  <dl>
    <dt><strong>HTML</strong></dt>
    <dd style="margin-left: 1.5rem; margin-bottom: 1rem;">Bahasa markup untuk membuat web.</dd>
    <dt><strong>CSS</strong></dt>
    <dd style="margin-left: 1.5rem;">Bahasa penata gaya untuk mempercantik web.</dd>
  </dl>
</div>

---

## HTML Entities (Karakter Spesial)

Beberapa karakter seperti `<`, `>`, dan `&` memiliki arti khusus di HTML. Jika Anda mengetikkannya langsung di kode, browser akan mengira itu adalah tag atau instruksi HTML, bukan teks biasa. Solusinya: **HTML Entities** — kode khusus yang dirender menjadi karakter yang Anda inginkan.

**Analogi:** Seperti "kata sandi" di dunia spionase. Agen menyebut "The Eagle has landed" yang artinya "Operasi dimulai". HTML Entities adalah kode sandi yang diterjemahkan browser menjadi karakter asli.

| Entity | Karakter | Kegunaan |
|--------|----------|----------|
| `&amp;` | `&` | Ampersand — wajib digunakan di URL dan atribut |
| `&lt;` | `<` | Less-than / Kurang dari — menampilkan tag HTML sebagai teks |
| `&gt;` | `>` | Greater-than / Lebih dari |
| `&quot;` | `"` | Tanda petik ganda — berguna di dalam atribut HTML |
| `&nbsp;` | spasi tak terputus | Non-Breaking Space — spasi yang tidak akan dipotong ke baris baru |
| `&copy;` | © | Copyright / Hak Cipta |
| `&reg;` | ® | Registered Trademark |
| `&trade;` | ™ | Trademark |

```html
<p>Gunakan &lt;h1&gt; untuk judul utama, bukan &lt;div&gt;.</p>
<p>Hak cipta &copy; 2026 oleh PT Maju Jaya &amp; Co.</p>
<p>Harga: Rp&nbsp;10.000&nbsp;(diskon 50%) &mdash; jangan sampai ketinggalan!</p>
```
<div class="preview-box">
  <p style="margin-top:0;">Gunakan &lt;h1&gt; untuk judul utama, bukan &lt;div&gt;.</p>
  <p>Hak cipta &copy; 2026 oleh PT Maju Jaya &amp; Co.</p>
  <p>Harga: Rp&nbsp;10.000&nbsp;(diskon 50%) &mdash; jangan sampai ketinggalan!</p>
</div>

### 💡 Tips Praktis:
- **Non-Breaking Space (`&nbsp;`)** sangat berguna untuk mencegah "yatim piatu tipografi" — misalnya, mencegah angka `10.000` terpisah dari satuan `Rp` saat baris teks terpotong.
- Gunakan `&lt;` dan `&gt;` setiap kali Anda menampilkan kode HTML di dalam konten (seperti yang dilakukan dokumen ini!).

---

## Inline Semantic Tags Tambahan

Selain `<strong>`, `<em>`, dan `<mark>` yang sudah kita bahas, HTML menyediakan beragam tag inline lain yang memberi **makna spesifik** pada potongan teks:

### `<time datetime="...">`
Menandai teks sebagai tanggal/waktu yang bisa dibaca mesin. Atribut `datetime` berisi format ISO (YYYY-MM-DD) yang dipahami oleh kalender, asisten virtual, dan search engine.

### `<abbr title="...">`
Menandai singkatan (*Abbreviation* atau *Acronym*). Browser menampilkan tooltip berisi kepanjangan saat kursor diarahkan.

### `<code>`
Menandai potongan kode komputer (*inline code*). Dirender dengan font monospace.

### `<kbd>`
Menandai input keyboard. Dirender dengan font monospace dan sering distyling seperti tombol fisik.

### `<sub>` dan `<sup>`
Subscript (teks di bawah garis normal) dan Superscript (teks di atas garis normal). Berguna untuk rumus kimia (`H₂O`) dan pangkat matematika (`x²`).

### `<small>`
Menandai teks "fine print" — catatan kaki, disclaimer, atau informasi hak cipta (ukuran lebih kecil).

### `<var>`
Menandai variabel dalam konteks matematika atau pemrograman. Dirender miring.

### `<samp>`
Menandai *sample output* dari program komputer. Dirender dengan font monospace.

```html
<p>Workshop dimulai pada <time datetime="2026-08-15">15 Agustus 2026</time>.</p>
<p>Teknologi <abbr title="HyperText Markup Language">HTML</abbr> adalah fondasi web modern.</p>
<p>Gunakan tag <code>&lt;section&gt;</code> untuk membagi konten.</p>
<p>Tekan <kbd>Ctrl</kbd> + <kbd>S</kbd> untuk menyimpan dokumen.</p>
<p>Rumus kimia air: H<sub>2</sub>O. Rumus luas persegi: x<sup>2</sup>.</p>
<p><small>&copy; 2026 PT Maju Jaya. Seluruh hak cipta dilindungi undang-undang.</small></p>
<p>Variabel <var>totalHarga</var> menyimpan hasil kalkulasi yang ditampilkan sebagai <samp>Rp 150.000</samp>.</p>
```
<div class="preview-box">
  <p style="margin-top:0;">Workshop dimulai pada <time datetime="2026-08-15">15 Agustus 2026</time>.</p>
  <p>Teknologi <abbr title="HyperText Markup Language" style="text-decoration: underline dotted; cursor: help;">HTML</abbr> adalah fondasi web modern.</p>
  <p>Gunakan tag <code style="background: #f4f4f4; padding: 2px 6px; border-radius: 3px; font-family: monospace;">&lt;section&gt;</code> untuk membagi konten.</p>
  <p>Tekan <kbd style="background: #eee; border: 1px solid #aaa; border-radius: 3px; padding: 2px 6px; font-family: monospace; box-shadow: 0 1px 0 #aaa;">Ctrl</kbd> + <kbd style="background: #eee; border: 1px solid #aaa; border-radius: 3px; padding: 2px 6px; font-family: monospace; box-shadow: 0 1px 0 #aaa;">S</kbd> untuk menyimpan dokumen.</p>
  <p>Rumus kimia air: H<sub>2</sub>O. Rumus luas persegi: x<sup>2</sup>.</p>
  <p><small>&copy; 2026 PT Maju Jaya. Seluruh hak cipta dilindungi undang-undang.</small></p>
  <p>Variabel <var style="font-style: italic;">totalHarga</var> menyimpan hasil kalkulasi yang ditampilkan sebagai <samp style="font-family: monospace; background: #f4f4f4; padding: 2px 4px;">Rp 150.000</samp>.</p>
</div>

---

## `<details>` dan `<summary>` — Widget Accordion Native

Pernah melihat widget **"Baca Selengkapnya"** atau **FAQ Accordion** yang mengembang (expand) saat diklik? Dulu butuh JavaScript, sekarang bisa pakai HTML murni.

- **`<details>`**: Wadah widget accordion. Secara default dalam keadaan tertutup (*collapsed*).
- **`<summary>`**: Judul yang selalu terlihat — pengguna klik ini untuk membuka/menutup isi.

**Analogi:** Seperti amplop surat. `<summary>` adalah tulisan di luar amplop yang selalu bisa dibaca. Isi surat di dalam amplop (`<details>` di luar `<summary>`) hanya terlihat setelah amplop dibuka.

```html
<details>
  <summary>Apa itu Semantic HTML?</summary>
  <p>Semantic HTML adalah praktik menggunakan elemen HTML yang mendeskripsikan makna kontennya, bukan hanya tampilan visualnya. Contoh: <code>&lt;article&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;header&gt;</code>.</p>
</details>

<details open>
  <summary>Mengapa website saya harus responsif? (Sudah terbuka)</summary>
  <p>Karena lebih dari 60% pengguna internet mengakses web melalui smartphone. Google juga memberikan peringkat lebih tinggi untuk website yang mobile-friendly.</p>
</details>
```
<div class="preview-box">
  <details style="margin-bottom: 1rem;">
    <summary style="cursor: pointer; font-weight: bold; padding: 0.5rem 0; color: var(--vp-c-brand);">Apa itu Semantic HTML?</summary>
    <p style="margin-top: 0.5rem; padding-left: 1rem; border-left: 3px solid var(--vp-c-divider);">Semantic HTML adalah praktik menggunakan elemen HTML yang mendeskripsikan makna kontennya, bukan hanya tampilan visualnya. Contoh: <code style="background: #f4f4f4; padding: 2px 6px; border-radius: 3px; font-family: monospace;">&lt;article&gt;</code>, <code style="background: #f4f4f4; padding: 2px 6px; border-radius: 3px; font-family: monospace;">&lt;nav&gt;</code>, <code style="background: #f4f4f4; padding: 2px 6px; border-radius: 3px; font-family: monospace;">&lt;header&gt;</code>.</p>
  </details>
  <details open>
    <summary style="cursor: pointer; font-weight: bold; padding: 0.5rem 0; color: var(--vp-c-brand);">Mengapa website saya harus responsif? (Sudah terbuka)</summary>
    <p style="margin-top: 0.5rem; padding-left: 1rem; border-left: 3px solid var(--vp-c-divider);">Karena lebih dari 60% pengguna internet mengakses web melalui smartphone. Google juga memberikan peringkat lebih tinggi untuk website yang mobile-friendly.</p>
  </details>
</div>

### 💡 Tips Praktis:
- Gunakan atribut `open` pada `<details>` jika Anda ingin accordion terbuka secara default.
- `<details>` bisa di-*nesting* (ditaruh di dalam `<details>` lain) untuk membuat FAQ bertingkat.
- Tidak perlu JavaScript sama sekali — tetapi Anda bisa menambahkan animasi buka/tutup dengan CSS `::details-content` (masih experimental).
