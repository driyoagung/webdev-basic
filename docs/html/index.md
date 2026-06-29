# Pengenalan HTML

**HTML** (HyperText Markup Language) adalah bahasa markup standar yang digunakan untuk membuat dan menyusun struktur halaman web. HTML bukanlah bahasa pemrograman, melainkan bahasa markup yang menggunakan penanda (tag) untuk mendeskripsikan elemen-elemen di dalam dokumen.

## Anatomi Dokumen HTML

Setiap dokumen HTML memiliki struktur dasar yang standar. Berikut adalah kerangka dasar halaman HTML5:

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Judul Halaman Web</title>
</head>
<body>
  <h1>Selamat Datang di Web Dev Basic</h1>
  <p>Ini adalah paragraf pertama saya.</p>
</body>
</html>
```

### Penjelasan Baris per Baris:

1. `<!DOCTYPE html>`: Deklarasi wajib di awal dokumen untuk memberi tahu browser bahwa kita menggunakan HTML5.
2. `<html>`: Elemen root (akar) dari sebuah halaman HTML. Atribut `lang="id"` mendeklarasikan bahasa utama halaman (Bahasa Indonesia).
3. `<head>`: Bagian ini berisi meta-informasi tentang dokumen, seperti pengaturan karakter set (`<meta charset="UTF-8">`) dan `<title>` (judul yang muncul di tab browser). Konten di dalam `<head>` **tidak terlihat langsung** oleh pengunjung web.
4. `<body>`: Bagian terpenting yang berisi **semua konten yang terlihat** oleh pengguna, seperti teks, gambar, tabel, daftar, dll.

## Tag, Elemen, dan Atribut

Untuk menulis HTML yang baik, kita harus memahami tiga konsep fundamental ini:

### 1. Tag (Penanda)
HTML menggunakan simbol kurung sudut (`<` dan `>`) untuk membuat tag. Secara umum tag datang berpasangan:
- **Tag Pembuka:** `<nama-tag>` (misalnya `<p>`)
- **Tag Penutup:** `</nama-tag>` (misalnya `</p>`). Perhatikan garis miring `/`.

*Catatan: Ada juga tag mandiri (Self-closing tag) yang tidak butuh penutup, seperti `<img>`, `<br>`, dan `<hr>`.*

### 2. Elemen
Elemen adalah **keseluruhan blok** dari tag pembuka hingga tag penutup, beserta konten di dalamnya.
Contoh sebuah Elemen:
```html
<p>Ini adalah teks paragraf.</p>
```

### 3. Atribut
Atribut memberikan **informasi tambahan** pada sebuah elemen HTML. Atribut selalu diletakkan di **tag pembuka** dan ditulis dalam format `nama="nilai"`.

Contoh Atribut:
```html
<a href="https://google.com">Pergi ke Google</a>
```
- `<a>` adalah tag untuk membuat tautan (link).
- `href` adalah **atribut** yang menentukan alamat URL tujuan tautan tersebut.

---

Dengan memahami struktur dasar, tag, dan atribut, Anda sudah siap untuk mulai merangkai halaman web pertama Anda. Di halaman selanjutnya, kita akan belajar bagaimana memformat teks di dalam HTML.
