# Form dan Input

Form adalah komponen interaktif yang paling vital untuk mengumpulkan data dari pengguna, seperti halaman login, formulir pendaftaran, hingga kolom pencarian.

## Elemen `<form>`

Elemen `<form>` adalah kontainer/pembungkus untuk berbagai macam elemen inputan. Secara default, `<form>` akan mengatur bagaimana dan ke mana data akan dikirimkan saat pengguna menekan tombol Submit.

```html
<form action="/submit-data" method="POST">
  <!-- Elemen-elemen input akan diletakkan di sini -->
</form>
```
- **`action`**: Menentukan URL tujuan (backend) ke mana form data akan dikirimkan.
- **`method`**: Metode pengiriman data (`GET` atau `POST`).

## Elemen `<input>`

Elemen `<input>` adalah elemen paling umum dalam form. Bentuk dan fungsinya bisa sangat beragam tergantung dari nilai atribut `type`-nya.

Beberapa tipe input yang paling sering digunakan:

```html
<!-- Input teks standar -->
<label for="nama">Nama Lengkap:</label>
<input type="text" id="nama" name="nama" placeholder="Masukkan nama Anda">

<!-- Input kata sandi (Karakter disamarkan) -->
<label for="password">Kata Sandi:</label>
<input type="password" id="password" name="password">

<!-- Input email (Akan di validasi format emailnya oleh browser) -->
<label for="email">Email:</label>
<input type="email" id="email" name="email">

<!-- Input angka -->
<label for="umur">Umur:</label>
<input type="number" id="umur" name="umur" min="17">

<!-- Input Tanggal -->
<label for="tanggal">Tanggal Lahir:</label>
<input type="date" id="tanggal" name="tanggal">
```

### Atribut Penting pada `<input>`
- **`type`**: Menentukan tipe data input.
- **`name`**: Nama kunci/variabel ketika data dikirim ke server.
- **`id`**: Identifier unik (biasanya digunakan agar `<label>` bisa terhubung dengan input).
- **`placeholder`**: Teks petunjuk abu-abu yang muncul saat input kosong.
- **`required`**: Atribut boolean yang membuat input ini wajib diisi sebelum form disubmit.

## Elemen Input Lainnya

Selain `<input>`, ada beberapa elemen lain yang khusus digunakan untuk mengumpulkan tipe data tertentu.

### 1. `<textarea>`
Digunakan untuk mengumpulkan teks multi-baris (misal: komentar, alamat).

```html
<label for="pesan">Pesan Anda:</label>
<textarea id="pesan" name="pesan" rows="4" cols="50"></textarea>
```

### 2. `<select>` dan `<option>`
Digunakan untuk membuat menu *dropdown* (pilihan ganda, pengguna memilih satu).

```html
<label for="kota">Pilih Kota Asal:</label>
<select id="kota" name="kota">
  <option value="jkt">Jakarta</option>
  <option value="bdg">Bandung</option>
  <option value="sby">Surabaya</option>
</select>
```

### 3. `<button>`
Digunakan untuk membuat tombol yang dapat diklik. Tombol di dalam sebuah tag `<form>` secara default memiliki tipe submit.

```html
<button type="submit">Kirim Data</button>
<button type="reset">Kosongkan Form</button>
<button type="button">Tombol Biasa (Butuh JS)</button>
```

## Contoh Form Utuh

```html
<form action="/login" method="POST">
  <div>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
  </div>
  
  <div>
    <label for="pwd">Password:</label>
    <input type="password" id="pwd" name="pwd" required>
  </div>
  
  <button type="submit">Login</button>
</form>
```
