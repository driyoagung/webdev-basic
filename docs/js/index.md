# Pengenalan JavaScript

**JavaScript** (JS) adalah bahasa pemrograman yang dijalankan langsung di dalam browser web. Jika HTML adalah kerangka dan CSS adalah desain, maka JavaScript adalah **otak** yang membuat website menjadi interaktif dan hidup.

## Cara Menambahkan JavaScript ke HTML

### 1. Internal Script (Di dalam file HTML)
```html
<script>
  alert('Halo Dunia!');
</script>
```

### 2. External Script (File terpisah — Best Practice)
```html
<!-- Di akhir <body> -->
<script src="script.js"></script>
```

### 3. Console Browser
Buka browser → Klik kanan → **Inspect** → Tab **Console**. Anda bisa langsung mengetik kode JS di sana untuk eksperimen cepat.

---

## Variabel

Variabel adalah "wadah" untuk menyimpan data. JavaScript modern memiliki 3 cara mendeklarasikan variabel:

### `let` — Bisa Diubah Nilainya
```js
let nama = "Budi";
nama = "Andi"; // ✅ Boleh diubah
```

### `const` — Tidak Bisa Diubah (Konstan)
```js
const PI = 3.14159;
PI = 3.15; // ❌ Error! Tidak bisa diubah
```

### `var` — Cara Lama (Hindari)
```js
var umur = 25; // Masih berfungsi, tapi JANGAN dipakai di kode modern
```

> **Best Practice:** Selalu gunakan `const` terlebih dahulu. Gunakan `let` hanya jika nilai variabel memang perlu diubah di kemudian hari. Jangan pernah pakai `var`.

---

## 7 Tipe Data Dasar

JavaScript memiliki tipe data yang fleksibel (dinamis). Anda tidak perlu mendeklarasikan tipe secara eksplisit.

### 1. String (Teks)
```js
const sapaan = "Halo Dunia";
const nama = 'Budi Santoso';
const pesan = `Selamat datang, ${nama}!`; // Template Literal (backtick)
```

### 2. Number (Angka)
```js
const umur = 25;
const harga = 99.99;
const negatif = -10;
```

### 3. Boolean (Benar/Salah)
```js
const sudahLogin = true;
const adalahAdmin = false;
```

### 4. Undefined (Belum diberi nilai)
```js
let alamat; // Nilainya undefined (belum diisi)
```

### 5. Null (Kosong secara sengaja)
```js
const data = null; // Sengaja dikosongkan
```

### 6. Array (Daftar/Koleksi)
```js
const buah = ["Apel", "Jeruk", "Mangga"];
console.log(buah[0]); // "Apel" (indeks dimulai dari 0)
```

### 7. Object (Objek / Kamus)
```js
const mahasiswa = {
  nama: "Budi",
  umur: 21,
  jurusan: "Informatika"
};
console.log(mahasiswa.nama); // "Budi"
```

---

## Mengecek Tipe Data (`typeof`)

```js
console.log(typeof "Halo");   // "string"
console.log(typeof 42);       // "number"
console.log(typeof true);     // "boolean"
console.log(typeof undefined);// "undefined"
console.log(typeof null);     // "object" (ini bug historis JS!)
console.log(typeof [1,2,3]);  // "object"
```

---

## Konversi Tipe Data

Konversi antar tipe data sangat sering dilakukan, terutama saat menerima input dari form HTML (yang selalu berupa String).

```js
// String → Number
const input = "42";
const angka = Number(input);     // 42
const angka2 = parseInt("100px"); // 100 (mengambil angka di depan)

// Number → String
const harga = 50000;
const teks = String(harga);     // "50000"
const teks2 = harga.toString(); // "50000"

// Ke Boolean
Boolean(0);  // false
Boolean(""); // false
Boolean("Halo"); // true
Boolean(1);      // true
```
