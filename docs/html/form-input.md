# Form dan Input Lanjutan

Form (Formulir) adalah cara utama aplikasi web berinteraksi dan mengumpulkan data kompleks dari pengguna, mulai dari pencarian, pendaftaran akun, hingga checkout E-commerce.

## Struktur Kerangka Form (`<form>`)

```html
<form action="/api/register" method="POST" enctype="multipart/form-data">
  <!-- Elemen Input diletakkan di sini -->
</form>
```
- **`action`**: URL / Endpoint Backend tempat data akan dikirim.
- **`method`**: Cara data dikirim. 
  - `GET`: Data dikirim lewat URL (Cocok untuk Form Pencarian). Tidak aman untuk password.
  - `POST`: Data disembunyikan di dalam *request body* (Aman untuk login, registrasi, data sensitif).
- **`enctype="multipart/form-data"`**: Wajib ditambahkan jika form Anda memiliki fitur *Upload File/Gambar*. Jika tidak, file gambar tidak akan terkirim ke server.

## Menghubungkan Label dengan Input (Aksesibilitas)

Pernahkah Anda melihat Checkbox yang teks di sebelahnya bisa diklik? Itu berkat elemen `<label>`. Menghubungkan label dan input wajib hukumnya untuk UX (Pengalaman Pengguna) dan Screen Reader.

Gunakan atribut `for` pada label yang nilainya sama dengan atribut `id` pada input.

```html
<div>
  <!-- "for" harus sama persis dengan "id" -->
  <label for="username">Username Sistem:</label>
  <input type="text" id="username" name="username">
</div>
```

## Eksplorasi Tipe Input (`<input type="...">`)

HTML5 memperkaya tipe input sehingga browser dapat memunculkan *keyboard khusus* di HP (misal memunculkan keyboard angka saja jika type number) dan memberikan validasi otomatis tanpa perlu JavaScript.

```html
<form>
  <!-- Input Biasa -->
  <label for="nama">Nama Lengkap:</label>
  <input type="text" id="nama" name="nama" placeholder="Masukkan nama" required minlength="3" maxlength="50">

  <!-- Input Email (Browser akan mencegat jika format bukan nama@email.com) -->
  <label for="email">Email Aktif:</label>
  <input type="email" id="email" name="email" required>

  <!-- Input Password (Menyensor ketikan menjadi titik hitam) -->
  <label for="pwd">Kata Sandi:</label>
  <input type="password" id="pwd" name="pwd" required>

  <!-- Input Angka (Hanya menerima angka, dan bisa membatasi batas minimum/maksimum) -->
  <label for="umur">Umur (17-99):</label>
  <input type="number" id="umur" name="umur" min="17" max="99">

  <!-- Input Nomor Telepon (Memunculkan Numpad di Smartphone) -->
  <label for="hp">No Handphone:</label>
  <input type="tel" id="hp" name="hp">

  <!-- Input Tanggal & Waktu (Memunculkan Kalender Kalender Picker Datepicker otomatis) -->
  <label for="tgl_lahir">Tanggal Lahir:</label>
  <input type="date" id="tgl_lahir" name="tgl_lahir">

  <!-- Input Warna (Memunculkan Color Picker OS) -->
  <label for="warna_kesukaan">Warna Tema Profil:</label>
  <input type="color" id="warna_kesukaan" name="warna_kesukaan" value="#ff0000">

  <!-- Input Slider / Range (Untuk memilih nilai rentang) -->
  <label for="volume">Volume Suara:</label>
  <input type="range" id="volume" name="volume" min="0" max="100">

  <!-- Input File Upload -->
  <label for="foto">Unggah Foto Profil:</label>
  <input type="file" id="foto" name="foto" accept="image/png, image/jpeg">
</form>
```

## Checkbox dan Radio Button

- **Checkbox**: Digunakan ketika pengguna boleh memilih **lebih dari satu** pilihan (atau tidak memilih sama sekali).
- **Radio**: Digunakan ketika pengguna **hanya boleh memilih SATU** dari beberapa pilihan (Mutual Exclusive). Atribut `name` pada grup Radio **wajib sama**.

```html
<!-- Contoh Checkbox -->
<p>Keahlian Pemrograman:</p>
<input type="checkbox" id="skill1" name="skills" value="html">
<label for="skill1">HTML</label>
<input type="checkbox" id="skill2" name="skills" value="css">
<label for="skill2">CSS</label>

<!-- Contoh Radio Button (Hanya bisa klik salah satu karena "name" nya sama) -->
<p>Jenis Kelamin:</p>
<input type="radio" id="pria" name="gender" value="l">
<label for="pria">Pria</label>
<input type="radio" id="wanita" name="gender" value="p">
<label for="wanita">Wanita</label>
```

## Textarea & Dropdown Select

- **`<textarea>`**: Untuk input teks panjang seperti Alamat atau Pesan Komentar.
- **`<select>`**: Untuk opsi Dropdown yang hemat tempat.

```html
<label for="alamat">Alamat Pengiriman:</label>
<textarea id="alamat" name="alamat" rows="4" placeholder="Tulis alamat lengkap..."></textarea>

<label for="kota">Kota Tujuan:</label>
<select id="kota" name="kota">
  <option value="" disabled selected>-- Pilih Kota --</option>
  <option value="jkt">Jakarta</option>
  <option value="bdg">Bandung</option>
  <option value="sby">Surabaya</option>
</select>
```

## Mengelompokkan Form dengan Fieldset

Untuk form yang sangat panjang, Anda disarankan untuk membaginya menjadi kelompok logika yang jelas menggunakan `<fieldset>` dan `<legend>`. Ini memberi visual "kotak" mengelilingi form.

```html
<form>
  <fieldset>
    <legend>Data Pribadi</legend>
    <label for="fname">Nama Depan:</label>
    <input type="text" id="fname" name="fname"><br><br>
    <label for="lname">Nama Belakang:</label>
    <input type="text" id="lname" name="lname">
  </fieldset>

  <fieldset>
    <legend>Keamanan Akun</legend>
    <label for="user">Username:</label>
    <input type="text" id="user" name="user"><br><br>
    <label for="pass">Password:</label>
    <input type="password" id="pass" name="pass">
  </fieldset>
  
  <br>
  <!-- Tombol Eksekusi Form -->
  <button type="submit">Daftar Akun Baru</button>
</form>
```

### Validasi Bawaan (HTML Native Validation)
Anda sudah melihat sekilas atribut validasi di atas. Berikut daftarnya:
- `required` : Form tidak bisa disubmit jika kosong.
- `minlength` & `maxlength` : Batasan jumlah karakter teks (misal minimal password 8 karakter).
- `min` & `max` : Batasan nilai numerik (misal umur minimal 17).
- `pattern` : Validasi super kompleks menggunakan aturan *RegEx* (Regular Expression) (misal: "Harus kombinasi huruf besar dan angka").
