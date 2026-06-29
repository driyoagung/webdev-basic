# Teks dan Formatting

Menampilkan dan menyusun teks adalah fungsi utama HTML. HTML menyediakan berbagai macam tag untuk memberikan makna dan struktur pada teks.

## Heading (Judul)

Heading digunakan untuk mendefinisikan judul atau sub-judul pada halaman web. Terdapat 6 tingkat heading, dari `<h1>` (paling penting/besar) hingga `<h6>` (paling tidak penting/kecil).

```html
<h1>Ini adalah Heading 1 (Judul Utama)</h1>
<h2>Ini adalah Heading 2</h2>
<h3>Ini adalah Heading 3</h3>
<h4>Ini adalah Heading 4</h4>
<h5>Ini adalah Heading 5</h5>
<h6>Ini adalah Heading 6</h6>
```

> **Praktik Terbaik:** Gunakan hanya **satu `<h1>`** pada sebuah halaman web. Ini sangat penting untuk keperluan SEO (Search Engine Optimization) agar mesin pencari mengerti topik utama dari halaman tersebut.

## Paragraph (Paragraf)

Tag `<p>` digunakan untuk membuat paragraf. Browser akan otomatis memberikan sedikit jarak (margin) sebelum dan sesudah paragraf.

```html
<p>Ini adalah sebuah paragraf teks. Paragraf digunakan untuk mengelompokkan kalimat-kalimat yang saling berkaitan menjadi satu blok tulisan.</p>
<p>Ini adalah paragraf kedua.</p>
```

## List (Daftar)

Ada dua tipe utama list dalam HTML: Unordered List (Daftar tidak berurutan) dan Ordered List (Daftar berurutan).

### 1. Unordered List (`<ul>`)
Daftar yang itemnya ditandai dengan *bullet* (titik hitam). Item di dalamnya dibungkus dengan tag `<li>` (List Item).

```html
<ul>
  <li>Apel</li>
  <li>Pisang</li>
  <li>Jeruk</li>
</ul>
```

### 2. Ordered List (`<ol>`)
Daftar yang itemnya berurutan menggunakan angka (atau huruf).

```html
<ol>
  <li>Bangun tidur</li>
  <li>Mandi</li>
  <li>Sarapan</li>
</ol>
```

## Inline Text Formatting

Terkadang kita perlu memberikan penekanan khusus pada beberapa kata di dalam sebuah paragraf. HTML memiliki beberapa tag untuk formatting ini:

- `<strong>` : Menandakan teks yang sangat penting. Secara visual akan dibuat menjadi **Tebal (Bold)**.
- `<b>` : Membuat teks menjadi **Tebal (Bold)** tanpa memberi makna kepentingan secara semantik.
- `<em>` : Menandakan penekanan kata (Emphasis). Secara visual akan dibuat menjadi *Miring (Italic)*.
- `<i>` : Membuat teks menjadi *Miring (Italic)* tanpa penekanan khusus.
- `<u>` : Membuat garis bawah (Underline).
- `<mark>` : Menandai/highlight teks, biasanya dengan warna latar kuning.

Contoh Penggunaan:
```html
<p>Anda <strong>wajib</strong> membaca peraturan ini. Ada beberapa hal yang sangat <em>krusial</em> untuk dipahami. Jangan lupa membawa <mark>KTP</mark> saat pendaftaran.</p>
```

## Break dan Thematic Break

- **`<br>` (Line Break)**: Memaksa teks untuk pindah ke baris baru tanpa memulai paragraf baru.
- **`<hr>` (Horizontal Rule)**: Membuat garis pemisah horizontal. Berguna untuk memisahkan konten yang berbeda tema.

```html
<p>Alamat Pengiriman:<br>
Jl. Sudirman No.12<br>
Jakarta Selatan</p>

<hr>

<p>Catatan Tambahan...</p>
```
