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

---

## 5. Gambar Responsif (`srcset` & `<picture>`)

Di era multi-device, satu ukuran gambar tidak cocok untuk semua layar. Mengapa mengirim gambar lebar 2000px ke layar HP yang hanya 375px? Dua teknik modern menyelesaikan masalah ini:

### `srcset` + `sizes` — Berdasarkan Lebar Layar

Atribut `srcset` memberi browser **beberapa pilihan URL gambar** dengan lebar berbeda. Atribut `sizes` memberi tahu browser berapa lebar slot gambar di berbagai kondisi layar. Browser kemudian **memilih sendiri** gambar terbaik.

**Analogi:** Seperti menu makanan dengan porsi Small / Medium / Large. Pelayan (browser) tahu seberapa lapar Anda (ukuran layar) dan otomatis menyajikan porsi yang pas.

### `<picture>` + `<source>` — Berdasarkan Format & Kondisi

Elemen `<picture>` memungkinkan Anda menyajikan format gambar modern (WEBP, AVIF) untuk browser yang mendukung, dengan **fallback otomatis** ke JPG/PNG untuk browser lama. Bisa juga untuk *Art Direction* — gambar berbeda di mobile vs desktop.

```html
<!-- srcset: Browser memilih gambar terbaik -->
<img 
  src="foto-800.jpg" 
  srcset="foto-400.jpg 400w, foto-800.jpg 800w, foto-1200.jpg 1200w"
  sizes="(max-width: 600px) 100vw, 50vw"
  alt="Pemandangan Pantai">

<!-- picture: Fallback format modern ke JPG -->
<picture>
  <source srcset="hero.avif" type="image/avif">
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" alt="Hero Banner" width="800" height="400">
</picture>
```
<div class="preview-box">
  <p style="margin-top:0;"><strong>Contoh <code>&lt;picture&gt;</code> (format priority):</strong></p>
  <p style="font-size: 0.85rem; color: #666;">Browser modern akan memuat AVIF atau WEBP; browser lama akan fallback ke JPG.</p>
  <picture>
    <source srcset="https://picsum.photos/id/1015/800/400.webp" type="image/webp">
    <img src="https://picsum.photos/id/1015/800/400" alt="Hero Banner" style="max-width: 100%; border-radius: 8px;" width="800" height="400" loading="lazy">
  </picture>
</div>

---

## 6. Width & Height untuk Mencegah CLS

**CLS (Cumulative Layout Shift)** adalah metrik Core Web Vitals yang mengukur seberapa sering layout halaman "meloncat" saat loading — pengalaman yang sangat menjengkelkan. Penyebab utama: gambar yang belum punya ruang (space) sebelum dimuat.

**Solusi:** Selalu sertakan atribut `width` dan `height` pada `<img>`. Browser akan langsung menyediakan kotak dengan rasio aspek yang tepat **sebelum gambar selesai diunduh**.

```html
<!-- BURUK: Layout bergeser saat gambar muncul -->
<img src="foto.jpg" alt="Foto">

<!-- BAIK: Ruang sudah dipesan, layout tidak bergeser -->
<img src="foto.jpg" alt="Foto" width="800" height="600">
```

### 💡 Tips Praktis:
- CSS modern (`img { max-width: 100%; height: auto; }`) tetap membuat gambar responsif, tapi `width`/`height` HTML memberi browser informasi rasio aspek.
- Untuk layout yang sudah menggunakan `aspect-ratio` di CSS, tambahkan `width`/`height` sebagai fallback.

---

## 7. Keamanan Iframe

Menyematkan konten dari website lain membawa risiko keamanan. Atribut berikut wajib Anda pahami:

### `sandbox`
Membatasi kemampuan iframe. Nilai kosong (`sandbox`) = **semua dibatasi**. Tambahkan izin spesifik satu per satu.

| Nilai `sandbox` | Mengizinkan |
|-----------------|-------------|
| `allow-scripts` | Menjalankan JavaScript |
| `allow-forms` | Submit form |
| `allow-same-origin` | Akses ke origin sendiri (storage, cookie) |
| `allow-popups` | Membuka popup / tab baru |
| `allow-downloads` | Mengunduh file |

### `allow`
Mengontrol API browser di dalam iframe (kamera, mikrofon, geolokasi, dll). Contoh: `allow="camera; microphone"`.

### `referrerpolicy="no-referrer"`
Mencegah browser mengirim informasi URL halaman asal ke website yang disematkan.

```html
<!-- Iframe YouTube dengan keamanan ketat -->
<iframe 
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  width="560" height="315"
  sandbox="allow-scripts allow-same-origin"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  referrerpolicy="no-referrer"
  style="border: none; border-radius: 8px;"
  loading="lazy">
</iframe>
```
<div class="preview-box">
  <p style="font-size: 0.85rem; margin-top:0;"><strong>Iframe YouTube (dengan sandbox):</strong></p>
  <iframe 
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    width="100%" height="315"
    sandbox="allow-scripts allow-same-origin"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    referrerpolicy="no-referrer"
    style="border: none; border-radius: 8px; max-width: 560px;"
    loading="lazy">
  </iframe>
</div>

---

## 8. Atribut `download` pada Anchor

Ingin pengguna **mengunduh file** (PDF, gambar, ZIP) alih-alih membukanya di browser? Tambahkan atribut `download` pada `<a>`. Anda bisa memberi nama file hasil unduhan yang berbeda dari nama aslinya.

```html
<!-- Download langsung (nama file tetap) -->
<a href="/dokumen/buku-panduan.pdf" download>
  📥 Unduh Buku Panduan (PDF)
</a>

<!-- Download dengan nama file kustom -->
<a href="/gambar/foto-profil.jpg" download="profil-agung.jpg">
  📥 Simpan Foto Profil
</a>

<!-- Hanya berlaku untuk same-origin; cross-origin diabaikan -->
```
<div class="preview-box">
  <p style="margin-top:0;">
    <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" download="contoh-dokumen.pdf" style="color: blue; text-decoration: underline;">📥 Unduh Contoh PDF</a>
  </p>
  <p style="font-size: 0.8rem; color: #666;">Klik link di atas — browser akan langsung mengunduh, bukan membuka file.</p>
</div>

### 💡 Tips Praktis:
- `download` hanya bekerja untuk file **same-origin** (domain yang sama). Untuk cross-origin, browser akan mengabaikan atribut ini demi keamanan.
- Gunakan `download` untuk file ZIP, PDF, CSV, atau gambar yang memang dimaksudkan untuk diunduh.

---

## 9. `<track>` untuk Subtitle / Caption Video

Aksesibilitas video sangat penting — baik untuk tunarungu maupun pengguna yang menonton tanpa suara. Elemen `<track>` menambahkan teks (subtitle, caption, deskripsi) ke `<video>` menggunakan format **WebVTT** (`.vtt`).

| `kind` | Kegunaan |
|--------|----------|
| `subtitles` | Terjemahan dialog (untuk yang tidak paham bahasa) |
| `captions` | Transkrip dialog + suara latar (untuk tunarungu) |
| `descriptions` | Deskripsi audio visual (untuk tunanetra) |
| `chapters` | Navigasi bab/segmen video |
| `metadata` | Data untuk script (tidak ditampilkan) |

```html
<video width="560" controls>
  <source src="/video/tutorial-html.mp4" type="video/mp4">
  <track src="/subtitle/tutorial-id.vtt" kind="captions" srclang="id" label="Bahasa Indonesia" default>
  <track src="/subtitle/tutorial-en.vtt" kind="subtitles" srclang="en" label="English">
  Maaf, browser Anda tidak mendukung HTML5 video.
</video>
```
<div class="preview-box">
  <p style="font-size: 0.85rem; margin-top:0;"><strong>Contoh konseptual — file VTT biasanya di-host di server Anda sendiri:</strong></p>
  <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; font-size: 0.8rem; overflow-x: auto;">
WEBVTT

1
00:00:02.000 --> 00:00:05.000
&lt;v Narator&gt;Selamat datang di tutorial HTML5 dasar.&lt;/v&gt;

2
00:00:05.500 --> 00:00:10.000
&lt;v Narator&gt;Hari ini kita akan mempelajari elemen multimedia.&lt;/v&gt;

3
00:00:10.500 --> 00:00:14.000
[Musik latar ceria]
</pre>
  <p style="font-size: 0.8rem; color: #666; margin-top: 0.5rem;">Format <code>.vtt</code> di atas mendefinisikan teks yang muncul di detik tertentu saat video diputar.</p>
</div>

### 💡 Tips Praktis:
- Gunakan `default` pada satu `<track>` untuk mengaktifkan subtitle secara otomatis.
- Atribut `srclang` wajib diisi dengan kode bahasa ISO (contoh: `id`, `en`, `ja`).
- Anda bisa membuat file `.vtt` manual dengan Notepad, atau gunakan tool seperti YouTube Studio untuk mengekspor subtitle.
