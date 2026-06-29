# Menengah 2: Array & Object Methods

Di dunia nyata, Anda jarang memanipulasi satu data saja. Anda akan bekerja dengan ratusan atau ribuan data secara bersamaan (misalnya: daftar produk dari database). 
**Array** dan **Object** adalah pilar utama pengelolaan data di JavaScript, dan JS modern menyediakan banyak fungsi bawaan (Methods) yang sangat kuat untuk memanipulasinya tanpa menggunakan perulangan `for` klasik.

---

## Manipulasi Array Modern

Misalkan kita memiliki array nilai ujian:
```js
const nilaiUjian = [70, 85, 90, 65, 80];
```

### 1. `.map()` (Mengubah/Mapping Data)
Digunakan untuk **mengubah setiap elemen** dalam array dan menghasilkan array baru dengan jumlah elemen yang **sama persis**.

```js
// Kasus: Guru ingin menambah semua nilai ujian sebanyak 5 poin
const nilaiDitambah = nilaiUjian.map((nilai) => {
  return nilai + 5;
});

console.log(nilaiDitambah); // [75, 90, 95, 70, 85]
```

### 2. `.filter()` (Menyaring Data)
Digunakan untuk membuat array baru yang hanya berisi elemen yang **memenuhi kondisi tertentu** (menghasilkan nilai `true`).

```js
// Kasus: Mencari siswa yang lulus (nilai >= 80)
const siswaLulus = nilaiUjian.filter((nilai) => {
  return nilai >= 80;
});

console.log(siswaLulus); // [85, 90, 80]
```

### 3. `.find()` (Mencari 1 Data)
Mirip dengan `filter`, tapi hanya mengembalikan **1 elemen pertama** yang cocok.

```js
// Kasus: Mencari SATU siswa pertama yang nilainya 90
const peraihNilai90 = nilaiUjian.find((nilai) => nilai === 90);
console.log(peraihNilai90); // 90
```

### 4. `.reduce()` (Menjumlahkan/Merangkum)
Digunakan untuk menggulung semua nilai array menjadi **satu nilai tunggal**.

```js
// Kasus: Mencari total seluruh nilai
const totalNilai = nilaiUjian.reduce((totalSementara, nilaiSaatIni) => {
  return totalSementara + nilaiSaatIni;
}, 0); // 0 adalah nilai awal 'totalSementara'

console.log(totalNilai); // 390
```

---

## Mengelola Object Modern

Di JavaScript, data yang kompleks hampir selalu disajikan dalam bentuk Object (struktur Data JSON).

```js
const pengguna = {
  id: 1,
  nama: "Budi Santoso",
  email: "budi@email.com",
  alamat: {
    kota: "Jakarta",
    kodepos: "10110"
  }
};
```

### 1. Object Destructuring (Pembongkaran)
Fitur ES6 yang paling sering digunakan! Mengizinkan Anda menarik variabel keluar dari object dengan mudah.

```js
// Cara Kuno:
// const nama = pengguna.nama;
// const email = pengguna.email;

// Cara Modern (Destructuring):
const { nama, email } = pengguna;

console.log(nama); // "Budi Santoso"
console.log(email); // "budi@email.com"

// Destructuring dari dalam object (Nested)
const { kota } = pengguna.alamat;
console.log(kota); // "Jakarta"
```

### 2. Spread Operator (`...`)
Titik tiga kali ini digunakan untuk **membongkar isi object atau array** dan memasukkannya ke tempat baru (biasanya dipakai untuk mengkopi atau menggabungkan data).

```js
const infoTambahan = {
  pekerjaan: "Developer",
  hobi: "Membaca"
};

// Menggabungkan object lama dengan info tambahan yang baru
const penggunaLengkap = {
  ...pengguna,
  ...infoTambahan
};

console.log(penggunaLengkap);
// Hasilnya: { id: 1, nama: "Budi Santoso", email: "...", pekerjaan: "Developer", hobi: "Membaca" }
```

### 3. Array of Objects (Bentuk Paling Umum)
Kombinasi Array dan Object adalah struktur data standar yang akan Anda temui saat bekerja dengan API Backend / Database.

```js
const keranjangBelanja = [
  { produk: "Buku", harga: 50000, jumlah: 2 },
  { produk: "Pensil", harga: 5000, jumlah: 5 },
  { produk: "Tas", harga: 150000, jumlah: 1 }
];

// Menghitung total harga seluruh keranjang belanja pakai .reduce
const totalHarga = keranjangBelanja.reduce((total, item) => {
  return total + (item.harga * item.jumlah);
}, 0);

console.log(totalHarga); // 275000
```
