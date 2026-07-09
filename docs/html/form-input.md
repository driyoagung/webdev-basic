# Form dan Input Lanjutan

Form (Formulir) adalah cara utama aplikasi web berinteraksi dan mengumpulkan data kompleks dari pengguna.

## Struktur Kerangka Form (`<form>`)

```html
<form action="/api/register" method="POST" enctype="multipart/form-data">
  <!-- Elemen Input diletakkan di sini -->
</form>
```

## Eksplorasi Tipe Input (`<input type="...">`)

HTML5 memperkaya tipe input sehingga browser dapat memunculkan *keyboard khusus* di HP dan memberikan validasi otomatis.

```html
<form style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
  <!-- Input Biasa -->
  <div>
    <label for="nama">Nama Lengkap:</label><br>
    <input type="text" id="nama" name="nama" placeholder="Masukkan nama" required style="width: 100%; padding: 0.5rem;">
  </div>

  <!-- Input Email -->
  <div>
    <label for="email">Email Aktif:</label><br>
    <input type="email" id="email" name="email" required style="width: 100%; padding: 0.5rem;">
  </div>

  <!-- Input Angka -->
  <div>
    <label for="umur">Umur (17-99):</label><br>
    <input type="number" id="umur" name="umur" min="17" max="99" style="width: 100%; padding: 0.5rem;">
  </div>

  <!-- Input Tanggal & Waktu -->
  <div>
    <label for="tgl_lahir">Tanggal Lahir:</label><br>
    <input type="date" id="tgl_lahir" name="tgl_lahir" style="width: 100%; padding: 0.5rem;">
  </div>

  <!-- Input Warna -->
  <div>
    <label for="warna_kesukaan">Warna Tema Profil:</label><br>
    <input type="color" id="warna_kesukaan" name="warna_kesukaan" value="#ff0000" style="padding: 0;">
  </div>

  <!-- Input Slider / Range -->
  <div>
    <label for="volume">Volume Suara:</label><br>
    <input type="range" id="volume" name="volume" min="0" max="100" style="width: 100%;">
  </div>
  
  <button type="submit" style="padding: 0.5rem; background: var(--vp-c-brand); color: white; border:none; border-radius:4px; cursor: pointer;">Simpan Data</button>
</form>
```
<div class="preview-box">
  <form style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px; font-size: 0.9rem;">
    <div>
      <label for="nama_p">Nama Lengkap:</label><br>
      <input type="text" id="nama_p" name="nama" placeholder="Masukkan nama" required style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;">
    </div>
    <div>
      <label for="email_p">Email Aktif:</label><br>
      <input type="email" id="email_p" name="email" required style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;">
    </div>
    <div>
      <label for="umur_p">Umur (17-99):</label><br>
      <input type="number" id="umur_p" name="umur" min="17" max="99" style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;">
    </div>
    <div>
      <label for="tgl_lahir_p">Tanggal Lahir:</label><br>
      <input type="date" id="tgl_lahir_p" name="tgl_lahir" style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;">
    </div>
    <div>
      <label for="warna_kesukaan_p">Warna Tema Profil:</label><br>
      <input type="color" id="warna_kesukaan_p" name="warna_kesukaan" value="#ff0000" style="padding: 0; cursor: pointer;">
    </div>
    <div>
      <label for="volume_p">Volume Suara:</label><br>
      <input type="range" id="volume_p" name="volume" min="0" max="100" style="width: 100%;">
    </div>
    <button type="submit" style="padding: 0.5rem; background: var(--vp-c-brand); color: white; border:none; border-radius:4px; cursor: pointer; font-weight: bold;">Simpan Data</button>
  </form>
</div>

## Checkbox dan Radio Button

- **Checkbox**: Digunakan ketika pengguna boleh memilih **lebih dari satu** pilihan.
- **Radio**: Digunakan ketika pengguna **hanya boleh memilih SATU** dari beberapa pilihan (Mutual Exclusive). Atribut `name` pada grup Radio **wajib sama**.

```html
<!-- Contoh Checkbox -->
<p><strong>Keahlian Pemrograman:</strong></p>
<input type="checkbox" id="skill1" name="skills" value="html">
<label for="skill1">HTML</label><br>
<input type="checkbox" id="skill2" name="skills" value="css">
<label for="skill2">CSS</label>

<!-- Contoh Radio Button -->
<p><strong>Jenis Kelamin:</strong></p>
<input type="radio" id="pria" name="gender" value="l">
<label for="pria">Pria</label><br>
<input type="radio" id="wanita" name="gender" value="p">
<label for="wanita">Wanita</label>
```
<div class="preview-box">
  <p style="margin-top:0;"><strong>Keahlian Pemrograman:</strong></p>
  <input type="checkbox" id="skill1_p" name="skills" value="html" style="margin-right: 0.5rem;">
  <label for="skill1_p">HTML</label><br>
  <input type="checkbox" id="skill2_p" name="skills" value="css" style="margin-right: 0.5rem;">
  <label for="skill2_p">CSS</label>
  
  <p style="margin-top: 1rem;"><strong>Jenis Kelamin:</strong></p>
  <input type="radio" id="pria_p" name="gender" value="l" style="margin-right: 0.5rem;">
  <label for="pria_p">Pria</label><br>
  <input type="radio" id="wanita_p" name="gender" value="p" style="margin-right: 0.5rem;">
  <label for="wanita_p">Wanita</label>
</div>

## Textarea & Dropdown Select

```html
<label for="alamat">Alamat Pengiriman:</label><br>
<textarea id="alamat" name="alamat" rows="4" style="width: 100%;"></textarea>
<br><br>
<label for="kota">Kota Tujuan:</label><br>
<select id="kota" name="kota" style="padding: 0.5rem;">
  <option value="" disabled selected>-- Pilih Kota --</option>
  <option value="jkt">Jakarta</option>
  <option value="bdg">Bandung</option>
  <option value="sby">Surabaya</option>
</select>
```
<div class="preview-box">
  <label for="alamat_p">Alamat Pengiriman:</label><br>
  <textarea id="alamat_p" name="alamat" rows="4" style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;"></textarea>
  <br><br>
  <label for="kota_p">Kota Tujuan:</label><br>
  <select id="kota_p" name="kota" style="padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;">
    <option value="" disabled selected>-- Pilih Kota --</option>
    <option value="jkt">Jakarta</option>
    <option value="bdg">Bandung</option>
    <option value="sby">Surabaya</option>
  </select>
</div>

## Mengelompokkan Form dengan Fieldset

Untuk form yang sangat panjang, Anda disarankan untuk membaginya menjadi kelompok logika yang jelas menggunakan `<fieldset>` dan `<legend>`.

```html
<form>
  <fieldset>
    <legend>Keamanan Akun</legend>
    <label for="user">Username:</label>
    <input type="text" id="user" name="user"><br><br>
    <label for="pass">Password:</label>
    <input type="password" id="pass" name="pass">
  </fieldset>
</form>
```
<div class="preview-box">
  <form>
    <fieldset style="border: 1px solid #999; border-radius: 4px; padding: 1rem;">
      <legend style="padding: 0 0.5rem; font-weight: bold;">Keamanan Akun</legend>
      <label for="user_p" style="display:inline-block; width: 80px;">Username:</label>
      <input type="text" id="user_p" name="user" style="padding: 0.25rem; border: 1px solid #ccc; border-radius: 3px;"><br><br>
      <label for="pass_p" style="display:inline-block; width: 80px;">Password:</label>
      <input type="password" id="pass_p" name="pass" style="padding: 0.25rem; border: 1px solid #ccc; border-radius: 3px;">
    </fieldset>
  </form>
</div>

---

## Validasi HTML5 Lanjutan

Selain `required`, `min`, dan `max` yang sudah dibahas, HTML5 menyediakan validasi yang jauh lebih powerful — semuanya **tanpa JavaScript**:

### `pattern` (Regex)
Membatasi input hanya menerima pola tertentu menggunakan Regular Expression.

### `minlength` / `maxlength`
Mengontrol panjang minimal dan maksimal karakter.

### `step`
Mengontrol kelipatan nilai yang valid pada `input[type="number"]`.

### Pseudo-class `:valid` dan `:invalid`
CSS bisa mendeteksi apakah input sudah valid atau belum — memberi feedback visual instan ke pengguna.

```html
<form style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
  <div>
    <label for="username">Username (3-15 karakter, huruf & angka saja):</label>
    <input type="text" id="username" name="username"
      pattern="[A-Za-z0-9]{3,15}"
      minlength="3" maxlength="15"
      required
      style="width: 100%; padding: 0.5rem;">
    <small style="color: #666;">Contoh: budi123 (tanpa spasi & karakter spesial)</small>
  </div>

  <div>
    <label for="ipk">IPK (0.00 - 4.00):</label>
    <input type="number" id="ipk" name="ipk"
      min="0" max="4" step="0.01"
      style="width: 100%; padding: 0.5rem;">
  </div>

  <button type="submit" style="padding: 0.5rem; background: var(--vp-c-brand); color: white; border: none; border-radius: 4px; cursor: pointer;">Daftar</button>
</form>
```

<style scoped>
.demo-valid input:valid { border: 2px solid #4CAF50 !important; }
.demo-valid input:invalid:not(:placeholder-shown) { border: 2px solid #F44336 !important; }
</style>

<div class="preview-box">
  <form class="demo-valid" style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px; font-size: 0.9rem;">
    <div>
      <label for="username_d">Username (3-15 karakter, huruf & angka saja):</label>
      <input type="text" id="username_d" name="username"
        pattern="[A-Za-z0-9]{3,15}"
        minlength="3" maxlength="15"
        required
        placeholder="budi123"
        style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;">
      <small style="color: #666;">Border <span style="color: #F44336;">merah</span> = invalid, <span style="color: #4CAF50;">hijau</span> = valid</small>
    </div>
    <div>
      <label for="ipk_d">IPK (0.00 - 4.00):</label>
      <input type="number" id="ipk_d" name="ipk"
        min="0" max="4" step="0.01"
        style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;">
    </div>
    <button type="submit" style="padding: 0.5rem; background: var(--vp-c-brand); color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Daftar</button>
  </form>
</div>

### 💡 Tips Praktis:
- `pattern` tidak menggantikan validasi server-side; selalu validasi ulang di backend.
- Gunakan atribut `title` pada input dengan `pattern` untuk memberi tooltip berisi petunjuk format yang diharapkan.
- Pseudo-class `:user-valid` dan `:user-invalid` (modern) hanya aktif setelah pengguna selesai berinteraksi dengan input — lebih ramah UX daripada `:valid`/`:invalid`.

---

## Tipe Input Tambahan

Selain `text`, `email`, `number`, `date`, `color`, dan `range` yang sudah dibahas, berikut tipe input HTML5 lainnya:

| Tipe | Kegunaan | Catatan |
|------|----------|---------|
| `search` | Input pencarian | Ada tombol "X" untuk clear di beberapa browser |
| `tel` | Nomor telepon | Memunculkan keypad numerik di HP |
| `url` | URL website | Validasi format URL otomatis |
| `password` | Input tersembunyi | Karakter diganti `•`, wajib untuk login |
| `file` | Upload file | Gunakan `accept=".pdf,.jpg"` untuk filter ekstensi |
| `hidden` | Data tersembunyi | Tidak terlihat, dipakai untuk token/data internal |
| `datetime-local` | Tanggal + Jam | Tidak ada timezone |
| `time` | Jam saja | Format 24 jam atau AM/PM tergantung OS |

```html
<form style="display: flex; flex-direction: column; gap: 0.75rem; max-width: 400px;">
  <input type="search" placeholder="Cari artikel..." style="padding: 0.5rem;">
  <input type="tel" placeholder="Nomor WhatsApp" style="padding: 0.5rem;">
  <input type="url" placeholder="https://website-anda.com" style="padding: 0.5rem;">
  <input type="password" placeholder="Kata sandi" style="padding: 0.5rem;">
  <input type="file" accept=".pdf,.jpg,.png" style="padding: 0.25rem;">
  <input type="datetime-local" style="padding: 0.5rem;">
  <input type="time" style="padding: 0.5rem;">
</form>
```
<div class="preview-box">
  <form style="display: flex; flex-direction: column; gap: 0.75rem; max-width: 400px; font-size: 0.9rem;">
    <div>
      <label for="search_d" style="font-size: 0.8rem; color: #666;">search:</label>
      <input type="search" id="search_d" placeholder="Cari artikel..." style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;">
    </div>
    <div>
      <label for="tel_d" style="font-size: 0.8rem; color: #666;">tel:</label>
      <input type="tel" id="tel_d" placeholder="Nomor WhatsApp" style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;">
    </div>
    <div>
      <label for="url_d" style="font-size: 0.8rem; color: #666;">url:</label>
      <input type="url" id="url_d" placeholder="https://website-anda.com" style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;">
    </div>
    <div>
      <label for="pass_d" style="font-size: 0.8rem; color: #666;">password:</label>
      <input type="password" id="pass_d" placeholder="Kata sandi" style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;">
    </div>
    <div>
      <label for="file_d" style="font-size: 0.8rem; color: #666;">file:</label>
      <input type="file" id="file_d" accept=".pdf,.jpg,.png" style="padding: 0.25rem;">
    </div>
    <div>
      <label for="dtl_d" style="font-size: 0.8rem; color: #666;">datetime-local:</label>
      <input type="datetime-local" id="dtl_d" style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;">
    </div>
    <div>
      <label for="time_d" style="font-size: 0.8rem; color: #666;">time:</label>
      <input type="time" id="time_d" style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;">
    </div>
  </form>
</div>

---

## `<datalist>` — Autocomplete Native

Pernah mengetik di input dan muncul **suggestion dropdown** di bawahnya? Itu `<datalist>` — komponen autocomplete HTML5 tanpa library JavaScript sedetik pun.

**Analogi:** Seperti Google Search yang menebak kata yang Anda ketik, tetapi untuk form Anda sendiri. `<input>` terhubung ke `<datalist>` via atribut `list`, dan browser menampilkan saran yang cocok.

```html
<label for="buah">Buah Favorit:</label>
<input type="text" id="buah" name="buah" list="daftar-buah" placeholder="Ketik nama buah...">
<datalist id="daftar-buah">
  <option value="Apel"></option>
  <option value="Anggur"></option>
  <option value="Alpukat"></option>
  <option value="Belimbing"></option>
  <option value="Durian"></option>
  <option value="Jeruk"></option>
  <option value="Mangga"></option>
  <option value="Pisang"></option>
  <option value="Semangka"></option>
</datalist>
```
<div class="preview-box">
  <label for="buah_d" style="font-size: 0.9rem;">Buah Favorit:</label><br>
  <input type="text" id="buah_d" name="buah" list="daftar-buah-d" placeholder="Ketik nama buah..." style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; max-width: 350px;">
  <datalist id="daftar-buah-d">
    <option value="Apel"></option>
    <option value="Anggur"></option>
    <option value="Alpukat"></option>
    <option value="Belimbing"></option>
    <option value="Durian"></option>
    <option value="Jeruk"></option>
    <option value="Mangga"></option>
    <option value="Pisang"></option>
    <option value="Semangka"></option>
  </datalist>
  <p style="font-size: 0.8rem; color: #666; margin-top: 0.25rem;">Mulai ketik "ap..." — browser akan menampilkan saran.</p>
</div>

### 💡 Tips Praktis:
- `<datalist>` bersifat sugestif (pengguna tetap bisa mengetik bebas). Jika Anda ingin pilihan ketat (hanya dari list), gunakan `<select>`.
- ID `<datalist>` harus sama persis dengan nilai atribut `list` pada `<input>`.

---

## `<output>`, `<progress>`, dan `<meter>`

Tiga elemen visual HTML5 untuk menampilkan hasil perhitungan atau status:

### `<output>`
Menampilkan hasil kalkulasi form (biasanya diupdate dengan JavaScript). Elemen **semantik** — screen reader mengumumkannya sebagai "live region".

### `<progress>`
Menampilkan progres sebuah task (upload file, instalasi). Nilai `value` antara `0` dan `max`.

### `<meter>`
Menampilkan pengukuran skalar dalam rentang dikenal (*gauge*). Bukan untuk progres, melainkan untuk hal seperti: penggunaan disk, kekuatan sinyal, skor nilai.

```html
<p>Sisa kuota internet bulanan:</p>
<meter value="65" min="0" max="100" low="20" high="80" optimum="0">65%</meter>
<small>65 GB dari 100 GB terpakai</small>

<p>Upload sedang berlangsung:</p>
<progress value="42" max="100">42%</progress>
<small>42% selesai</small>

<p>Total belanja: Rp <output id="totalOutput">150.000</output></p>
```
<div class="preview-box">
  <p style="margin-top:0;"><strong>Sisa kuota internet bulanan:</strong></p>
  <meter value="65" min="0" max="100" low="20" high="80" optimum="0" style="width: 250px;">65%</meter>
  <small style="display: block; color: #666;">65 GB dari 100 GB terpakai</small>

  <p style="margin-top: 1rem;"><strong>Upload sedang berlangsung:</strong></p>
  <progress value="42" max="100" style="width: 250px;">42%</progress>
  <small style="display: block; color: #666;">42% selesai</small>

  <p style="margin-top: 1rem;"><strong>Total belanja:</strong> Rp <output id="totalOutput_d" style="font-weight: bold;">150.000</output></p>
</div>

### 💡 Tips Praktis:
- `<meter>` memiliki atribut `low`, `high`, `optimum` yang otomatis mengubah warna (hijau/kuning/merah) di browser pendukung.
- Selalu sertakan teks di dalam `<progress>` dan `<meter>` sebagai fallback untuk browser lama.
- Update `<output>` via JavaScript dengan `document.getElementById('total').value = hasil`.

---

## Atribut `autocomplete` — Kontrol Isi Otomatis Browser

Browser modern menyimpan data yang pernah diketik pengguna (nama, email, alamat) dan otomatis mengisikannya di form berikutnya. Atribut `autocomplete` memberi Anda kontrol penuh atas perilaku ini.

| Nilai | Efek |
|-------|------|
| `on` | Izinkan browser mengisi otomatis (default) |
| `off` | Matikan autocomplete untuk input ini |
| `new-password` | Untuk form register — browser **tidak** akan mengisi password lama |
| `current-password` | Untuk form login — browser boleh mengisi password tersimpan |
| `email` | Browser otomatis mengisi alamat email pengguna |
| `tel` | Browser otomatis mengisi nomor telepon |
| `street-address` | Browser otomatis mengisi alamat |

```html
<form>
  <label for="reg-pass">Password Baru (Register):</label>
  <input type="password" id="reg-pass" name="password" autocomplete="new-password">

  <label for="login-pass">Password (Login):</label>
  <input type="password" id="login-pass" name="password" autocomplete="current-password">

  <label for="cc">Nomor Kartu Kredit:</label>
  <input type="text" id="cc" name="cc" autocomplete="off">
</form>
```

### 💡 Tips Praktis:
- **`autocomplete="new-password"` WAJIB** dipakai di form registrasi untuk mencegah browser salah mengisi password lama.
- `autocomplete="off"` sering diabaikan browser modern untuk password (demi keamanan pengguna). Gunakan `new-password` sebagai gantinya.

---

## Keamanan Form Dasar

### CSRF Token (Cross-Site Request Forgery)
Serangan di mana penyerang menipu browser Anda agar mengirimkan request berbahaya ke website yang sedang Anda login. **Solusi:** server menghasilkan token unik per sesi yang disematkan sebagai `<input type="hidden">` di form. Saat submit, server memverifikasi token.

```html
<form action="/transfer" method="POST">
  <input type="hidden" name="csrf_token" value="aB3xZ9...token-unik">
  <input type="text" name="tujuan" placeholder="Rekening tujuan">
  <input type="number" name="jumlah" placeholder="Jumlah">
  <button type="submit">Transfer</button>
</form>
```

### `inputmode` — Keyboard Optimal di Mobile
Atribut `inputmode` memberi petunjuk ke HP tentang jenis keyboard apa yang harus dimunculkan:

| Nilai | Keyboard yang Muncul |
|-------|---------------------|
| `text` | Keyboard teks biasa (default) |
| `numeric` | Keypad angka (0-9) |
| `decimal` | Keypad angka + titik/koma |
| `tel` | Keypad telepon (#, *, +) |
| `email` | Keyboard dengan @ dan . |
| `url` | Keyboard dengan /, ., .com |
| `search` | Keyboard dengan tombol "Go" / "Cari" |

```html
<input type="text" inputmode="numeric" placeholder="Jumlah" style="padding: 0.5rem;">
<input type="text" inputmode="decimal" placeholder="Harga" style="padding: 0.5rem;">
```
<div class="preview-box">
  <p style="margin-top:0; font-size: 0.85rem; color: #666;">Buka halaman ini di smartphone — keyboard akan berbeda untuk setiap input di bawah:</p>
  <input type="text" inputmode="numeric" placeholder="Jumlah (keypad angka)" style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; margin-bottom: 0.5rem;">
  <input type="text" inputmode="decimal" placeholder="Harga (keypad desimal)" style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; margin-bottom: 0.5rem;">
  <input type="text" inputmode="email" placeholder="Email (keyboard dgn @)" style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;">
</div>

---

## `FormData` — Jembatan Form ke JavaScript

Setelah memahami form HTML, langkah selanjutnya adalah mengirim data ke server dengan JavaScript. **`FormData` API** adalah cara termudah mengumpulkan semua data form menjadi objek yang siap dikirim via `fetch()` atau AJAX.

**Analogi:** Seperti petugas yang mengumpulkan semua formulir yang sudah diisi, mengepaknya dalam satu amplop, lalu mengirimkannya ke alamat tujuan.

```html
<form id="formKontak" style="display: flex; flex-direction: column; gap: 0.5rem; max-width: 350px;">
  <input type="text" name="nama" placeholder="Nama Anda" required style="padding: 0.5rem;">
  <input type="email" name="email" placeholder="Email Anda" required style="padding: 0.5rem;">
  <textarea name="pesan" placeholder="Tulis pesan..." rows="3" style="padding: 0.5rem;"></textarea>
  <button type="submit" style="padding: 0.5rem; background: var(--vp-c-brand); color: white; border: none; border-radius: 4px; cursor: pointer;">Kirim</button>
</form>
```

```javascript
// JavaScript: Menangkap submit form
document.getElementById('formKontak').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah reload halaman

  const formData = new FormData(this); // Kumpulkan SEMUA data form

  // Lihat isi FormData (untuk debugging)
  for (let [key, value] of formData.entries()) {
    console.log(key + ': ' + value);
  }

  // Kirim ke server
  fetch('/api/kontak', {
    method: 'POST',
    body: formData // Tidak perlu JSON.stringify!
  })
  .then(response => response.json())
  .then(data => console.log('Sukses:', data))
  .catch(error => console.error('Gagal:', error));
});
```
<script setup>
import { ref } from 'vue'

const formNama = ref('')
const formEmail = ref('')
const formPesan = ref('')
const formOutput = ref('')
const formSubmitted = ref(false)

function handleFormSubmit() {
  const result = []
  if (formNama.value) result.push('<strong>nama</strong>: ' + formNama.value)
  if (formEmail.value) result.push('<strong>email</strong>: ' + formEmail.value)
  if (formPesan.value) result.push('<strong>pesan</strong>: ' + formPesan.value)
  formOutput.value = result.length ? '✅ Data berhasil dikumpulkan:<br>' + result.join('<br>') : '⚠️ Isi minimal satu field!'
  formSubmitted.value = true
}
</script>

<div class="preview-box">
  <form @submit.prevent="handleFormSubmit" style="display: flex; flex-direction: column; gap: 0.5rem; max-width: 350px; font-size: 0.9rem;">
    <input v-model="formNama" type="text" name="nama" placeholder="Nama Anda" required style="padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;">
    <input v-model="formEmail" type="email" name="email" placeholder="Email Anda" required style="padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;">
    <textarea v-model="formPesan" name="pesan" placeholder="Tulis pesan..." rows="3" style="padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;"></textarea>
    <button type="submit" style="padding: 0.5rem; background: var(--vp-c-brand); color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Kirim</button>
  </form>
  <p style="font-size: 0.8rem; margin-top: 0.75rem;" :style="{ color: formSubmitted ? '#4CAF50' : '#666' }">
    <span v-if="formOutput" v-html="formOutput"></span>
    <span v-else>Isi form di atas, lalu klik Kirim — data akan ditampilkan di sini.</span>
  </p>
</div>

### 💡 Tips Praktis:
- `new FormData(formElement)` otomatis mengumpulkan **semua** elemen dengan atribut `name`, termasuk checkbox, radio, file, dll.
- Untuk upload file, `FormData` adalah cara standar — tidak perlu base64 encode manual.
- Jika perlu menambah data ekstra (yang bukan dari input form), gunakan `formData.append('kunci', 'nilai')`.
