# Media dan Link

Halaman web tidak akan lengkap tanpa adanya tautan (link) yang menghubungkan antar halaman dan media seperti gambar yang membuat halaman web lebih menarik.

## Anchor (Tautan / Link)

Tag `<a>` (Anchor) digunakan untuk membuat sebuah hyperlink, yang akan mengarahkan pengguna ke halaman web lain, file, alamat email, atau lokasi dalam halaman yang sama.

Struktur dasar:
```html
<a href="URL_TUJUAN">Teks yang dapat diklik</a>
```

### Atribut Penting pada Link

1. **`href`**: (Hypertext Reference) Ini adalah atribut wajib yang berisi alamat URL tujuan.
2. **`target`**: Menentukan di mana dokumen akan dibuka.
   - `_blank`: Membuka link di tab atau jendela baru.
   - `_self`: (Default) Membuka link di jendela/frame yang sama.

Contoh Penggunaan:
```html
<!-- Link ke halaman web eksternal (Tab Baru) -->
<a href="https://google.com" target="_blank">Kunjungi Google</a>

<!-- Link ke file lain di dalam proyek yang sama (Lokal) -->
<a href="/about.html">Tentang Kami</a>
```

## Images (Gambar)

Tag `<img>` digunakan untuk menampilkan gambar di halaman web. Berbeda dengan tag paragraf atau heading, tag `<img>` adalah tag mandiri (*self-closing*) dan tidak memiliki tag penutup.

Struktur dasar:
```html
<img src="URL_GAMBAR" alt="Deskripsi Gambar">
```

### Atribut Penting pada Gambar

1. **`src`**: (Source) Ini adalah atribut wajib yang menentukan jalur/URL tempat gambar berada.
2. **`alt`**: (Alternative Text) Menentukan teks alternatif yang akan ditampilkan jika gambar gagal dimuat (misal karena internet lambat). Ini sangat penting untuk aksesibilitas (Screen reader) dan SEO.
3. **`width` dan `height`**: Menentukan lebar dan tinggi gambar dalam pixel. (Catatan: Praktik modern seringkali menggunakan CSS untuk mengatur ukuran gambar).

Contoh Penggunaan:
```html
<!-- Mengambil gambar dari internet -->
<img src="https://picsum.photos/200/300" alt="Gambar Acak dari Internet">

<!-- Mengambil gambar lokal di folder project (misal: /images/logo.png) -->
<img src="/images/logo.png" alt="Logo Perusahaan Kami" width="150">
```

### Gambar sebagai Link

Anda juga dapat membuat sebuah gambar bertindak sebagai tautan yang dapat diklik dengan membungkus elemen `<img>` ke dalam elemen `<a>`:

```html
<a href="https://github.com" target="_blank">
  <img src="github-logo.png" alt="Kunjungi Profil Github">
</a>
```
