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
