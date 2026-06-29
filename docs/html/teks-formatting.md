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
