# Media, Tautan (Link), dan Iframe

Dunia web (World Wide Web) mendapatkan kata "Web" karena kemampuannya saling menautkan satu halaman dengan halaman lain yang membentuk jaring laba-laba. Selain teks, media seperti gambar dan video membuat halaman menjadi hidup.

## 1. Anchor / Hyperlink (`<a>`)

Tag `<a>` digunakan untuk membuat tautan yang dapat diklik.

```html
<p>Silakan kunjungi <a href="https://wikipedia.org" target="_blank" rel="noopener noreferrer">Wikipedia Indonesia</a> untuk mencari informasi lebih lanjut.</p>
```
<div class="preview-box">
  <p>Silakan kunjungi <a href="https://wikipedia.org" target="_blank" rel="noopener noreferrer" style="color: blue; text-decoration: underline;">Wikipedia Indonesia</a> untuk mencari informasi lebih lanjut.</p>
</div>

### Bedah Atribut Tautan:
- **`href`** (Hypertext Reference): Wajib ada. Menentukan alamat tujuan.
  - *Absolute URL*: `https://google.com` (Tujuan ke website luar)
  - *Relative URL*: `/kontak.html` atau `./gambar/logo.png` (Tujuan ke file dalam proyek yang sama)
  - *Email*: `mailto:halo@email.com` (Otomatis membuka aplikasi email client)
  - *Telepon*: `tel:+62812345678` (Otomatis membuka mode telepon di HP)
- **`target`**: Menentukan di mana link terbuka.
  - `_blank`: Buka di Tab Baru.
  - `_self`: Buka di Tab saat ini (Default).
- **`rel="noopener noreferrer"`**: **PRAKTIK KEAMANAN KRUSIAL!** Selalu tambahkan atribut ini jika Anda menggunakan `target="_blank"` untuk menghindari *tabnabbing attack*.

---

## 2. Gambar (`<img>`)

Menampilkan gambar (*Image*) dengan tag `<img>`. Ini adalah tag mandiri (void element).

```html
<img src="https://picsum.photos/400/200" alt="Gambar Acak Pemandangan" width="400" loading="lazy">
```
<div class="preview-box">
  <img src="https://picsum.photos/400/200" alt="Gambar Acak Pemandangan" width="400" loading="lazy" style="border-radius: 8px;">
</div>

### Bedah Atribut Gambar:
- **`src`**: Jalur URL gambar (Absolute atau Relative). Mendukung JPG, PNG, GIF, SVG, WEBP.
- **`alt`** (Alternative Text): **Sangat Penting!** Teks ini akan dibaca oleh Screen Reader untuk tunanetra, dan akan muncul di layar jika link gambar rusak/internet mati. Mesin pencari juga menggunakan ini untuk mengindeks gambar.
- **`loading="lazy"`**: (Modern HTML5) Atribut ini membuat browser menunda memuat gambar yang berada di luar layar pengguna bawah. Ini akan membuat website Anda *loading* jauh lebih cepat!

---

## 3. Video dan Audio HTML5

Sebelum HTML5, memutar video di web memerlukan plugin berat seperti Adobe Flash. Sekarang, memutar media semudah menaruh gambar.

### Video
```html
<video width="400" controls>
  <!-- Kita gunakan video eksternal sebagai contoh -->
  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
  Maaf, browser Anda tidak mendukung pemutar video HTML5.
</video>
```
<div class="preview-box">
  <video width="400" controls style="border-radius: 8px; max-width: 100%;">
    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
    Maaf, browser Anda tidak mendukung pemutar video HTML5.
  </video>
</div>

### Audio
```html
<audio controls>
  <!-- Kita gunakan audio eksternal sebagai contoh -->
  <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
  Maaf, browser Anda tidak mendukung elemen audio.
</audio>
```
<div class="preview-box">
  <audio controls>
    <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
    Maaf, browser Anda tidak mendukung elemen audio.
  </audio>
</div>

---

## 4. Iframe (Menyematkan Web/Widget Eksternal)

`<iframe >` (*Inline Frame*) digunakan untuk menyematkan halaman web lain, video YouTube, atau Google Maps ke dalam halaman web Anda.

```html
<!-- Contoh Embed Web Lain (Contoh: Wikipedia) -->
<iframe 
  src="https://id.wikipedia.org/wiki/HTML" 
  width="100%" 
  height="300" 
  style="border: 1px solid #ccc; border-radius: 8px;" 
  loading="lazy">
</iframe>
```
<div class="preview-box">
  <iframe 
    src="https://id.wikipedia.org/wiki/HTML" 
    width="100%" 
    height="300" 
    style="border: 1px solid #ccc; border-radius: 8px;" 
    loading="lazy">
  </iframe>
</div>
