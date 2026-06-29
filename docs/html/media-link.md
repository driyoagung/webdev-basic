# Media, Tautan (Link), dan Iframe

Dunia web (World Wide Web) mendapatkan kata "Web" karena kemampuannya saling menautkan satu halaman dengan halaman lain yang membentuk jaring laba-laba. Selain teks, media seperti gambar dan video membuat halaman menjadi hidup.

## 1. Anchor / Hyperlink (`<a>`)

Tag `<a>` digunakan untuk membuat tautan yang dapat diklik.

```html
<a href="https://wikipedia.org" target="_blank" rel="noopener noreferrer">Kunjungi Wikipedia</a>
```

### Bedah Atribut Tautan:
- **`href`** (Hypertext Reference): Wajib ada. Menentukan alamat tujuan.
  - *Absolute URL*: `https://google.com` (Tujuan ke website luar)
  - *Relative URL*: `/kontak.html` atau `./gambar/logo.png` (Tujuan ke file dalam proyek yang sama)
  - *Email*: `mailto:halo@email.com` (Otomatis membuka aplikasi email client)
  - *Telepon*: `tel:+62812345678` (Otomatis membuka mode telepon di HP)
  - *Anchor Link*: `#bagian-bawah` (Melompat ke elemen dengan id `bagian-bawah` di halaman yang sama)
- **`target`**: Menentukan di mana link terbuka.
  - `_blank`: Buka di Tab Baru.
  - `_self`: Buka di Tab saat ini (Default).
- **`rel="noopener noreferrer"`**: **PRAKTIK KEAMANAN KRUSIAL!** Selalu tambahkan atribut ini jika Anda menggunakan `target="_blank"` untuk menghindari *tabnabbing attack* (dimana halaman eksternal bisa mengontrol performa halaman asli Anda melalui JavaScript `window.opener`).

---

## 2. Gambar (`<img>`)

Menampilkan gambar (*Image*) dengan tag `<img>`. Ini adalah tag mandiri (void element).

```html
<img src="/assets/foto-kucing.jpg" alt="Seekor Kucing Oranye Sedang Tidur" width="500" loading="lazy">
```

### Bedah Atribut Gambar:
- **`src`**: Jalur URL gambar (Absolute atau Relative). Mendukung JPG, PNG, GIF, SVG, WEBP.
- **`alt`** (Alternative Text): **Sangat Penting!** Teks ini akan dibaca oleh Screen Reader untuk tunanetra, dan akan muncul di layar jika link gambar rusak/internet mati. Mesin pencari juga menggunakan ini untuk mengindeks gambar.
- **`loading="lazy"`**: (Modern HTML5) Atribut ini membuat browser menunda (*delay*) memuat gambar yang berada di luar layar pengguna bawah. Ini akan membuat website Anda *loading* jauh lebih cepat!

### Gambar Adaptif (`<picture>`)
Terkadang Anda ingin memuat gambar yang berbeda berdasarkan ukuran layar HP atau Laptop (Art Direction). Anda bisa menggunakan elemen `<picture>`.

```html
<picture>
  <!-- Jika layar besar, pakai gambar resolusi tinggi -->
  <source media="(min-width: 800px)" srcset="kucing-besar.jpg">
  <!-- Jika layar HP, pakai gambar kecil agar loading cepat -->
  <source media="(min-width: 400px)" srcset="kucing-sedang.jpg">
  <!-- Fallback standar jika tidak memenuhi syarat di atas -->
  <img src="kucing-kecil.jpg" alt="Seekor Kucing">
</picture>
```

---

## 3. Video dan Audio HTML5

Sebelum HTML5, memutar video di web memerlukan plugin berat seperti Adobe Flash. Sekarang, memutar media semudah menaruh gambar.

### Video
```html
<video width="640" controls autoplay muted loop poster="thumbnail-video.jpg">
  <source src="video-promosi.mp4" type="video/mp4">
  <source src="video-promosi.webm" type="video/webm">
  Maaf, browser Anda tidak mendukung pemutar video HTML5.
</video>
```
**Atribut Penting Video:**
- `controls`: Menampilkan tombol play, pause, volume.
- `autoplay`: Memutar video otomatis. *(Catatan: Hampir semua browser modern seperti Chrome/Safari akan memblokir autoplay jika video tersebut memiliki suara. Tambahkan atribut `muted` agar autoplay berfungsi).*
- `loop`: Video akan mengulang dari awal setelah habis.
- `poster`: Menampilkan gambar *thumbnail* sebelum tombol play ditekan.

### Audio
```html
<audio controls>
  <source src="lagu-santai.mp3" type="audio/mpeg">
  Maaf, browser Anda tidak mendukung elemen audio.
</audio>
```

---

## 4. Iframe (Menyematkan Web/Widget Eksternal)

`<iframe >` (*Inline Frame*) digunakan untuk menyematkan halaman web lain, video YouTube, atau Google Maps ke dalam halaman web Anda.

```html
<!-- Contoh Embed Google Maps -->
<iframe 
  src="https://www.google.com/maps/embed?..." 
  width="600" 
  height="450" 
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade">
</iframe>

<!-- Contoh Embed YouTube Video -->
<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>
```
Penting untuk menyadari bahwa menggunakan banyak Iframe dari penyedia layanan luar dapat memperlambat kinerja web Anda, jadi gunakan dengan bijak.
