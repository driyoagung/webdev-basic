# 2. Object & Array

Framework modern (React/Vue) hampir setiap hari berurusan dengan Object dan Array. Anda dijamin akan kesulitan jika tidak menguasai modul ini!

## Object (Kamus Data)
Object menyimpan data dalam format `Key-Value` (Kunci-Nilai).

```js
const siswa = {
  nama: "Agung",
  umur: 20,
  lulus: true
};

// Cara Akses
console.log(siswa.nama); // "Agung"
console.log(siswa["umur"]); // 20
```

### Nested Object (Object bersarang)
```js
const user = {
  id: 1,
  profil: {
    nama: "Budi",
    alamat: {
      kota: "Jakarta",
      kodepos: "10110"
    }
  }
};

console.log(user.profil.alamat.kota); // "Jakarta"
```

### Iterasi Object (`for...in`)
Cara membaca seluruh properti di dalam object.
```js
const mobil = { merk: "Toyota", warna: "Hitam" };

for (const key in mobil) {
  console.log(`${key}: ${mobil[key]}`);
}
// Output: 
// merk: Toyota
// warna: Hitam
```

---

## Array (Daftar Data)
Menyimpan banyak data secara berurutan berdasakan Indeks (dimulai dari 0).

```js
const buah = ["Apel", "Mangga", "Jeruk"];
console.log(buah[1]); // "Mangga" (Indeks ke-1)
```

### Nested Array
```js
const matriks = [
  [1, 2],
  [3, 4]
];
console.log(matriks[1][0]); // 3 (Baris indeks 1, Kolom indeks 0)
```

---

## Array Methods (SANGAT WAJIB!)

Di JS modern, kita jarang memakai `for` biasa. Kita menggunakan method bawaan Array.

### 1. `.map()` (Mengubah Data)
Membuat array *baru* yang berisi hasil perubahan dari array asli.
```js
const angka = [1, 2, 3];
const kaliDua = angka.map((n) => n * 2);

console.log(kaliDua); // [2, 4, 6]
```

### 2. `.filter()` (Menyaring Data)
Membuat array baru berisi elemen yang memenuhi kondisi (bernilai `true`).
```js
const nilai = [60, 75, 80, 90, 50];
const lulus = nilai.filter((n) => n >= 75);

console.log(lulus); // [75, 80, 90]
```

### 3. `.find()` (Mencari 1 Data)
Sama seperti filter, tapi hanya mengembalikan **1 elemen pertama** yang cocok.
```js
const users = [{id: 1, nama: "Dio"}, {id: 2, nama: "Jojo"}];
const cariUser = users.find((u) => u.id === 2);

console.log(cariUser.nama); // "Jojo"
```

### 4. `.reduce()` (Merangkum Data)
Menggabungkan seluruh elemen menjadi 1 nilai tunggal.
```js
const harga = [10, 20, 30];
const total = harga.reduce((akumulasi, nilaiSaatIni) => akumulasi + nilaiSaatIni, 0);

console.log(total); // 60
```

### 5. `.some()` & `.every()` (Validasi)
- `.some()` : true jika **minimal 1** elemen memenuhi kondisi.
- `.every()`: true jika **SEMUA** elemen memenuhi kondisi.

```js
const absen = [true, true, false, true]; // false = tidak hadir
console.log(absen.some(x => x === false));  // true (Ada yang bolos)
console.log(absen.every(x => x === true)); // false (Tidak semua hadir)
```

### 6. `.sort()` (Mengurutkan)
Hati-hati! `.sort()` bawaan JS mengurutkan berdasarkan String/Alfabet, bukan angka mutlak.

```js
const acak = [30, 4, 100, 21];
acak.sort(); // ❌ Jadinya: [100, 21, 30, 4] karena "1" lebih dulu dari "2"

// ✅ Cara Benar untuk Angka:
acak.sort((a, b) => a - b); 
console.log(acak); // [4, 21, 30, 100]
```

### 7. `.includes()` (Mengecek Keberadaan)
```js
const nama = ["Dio", "Jotaro", "Joseph"];
console.log(nama.includes("Dio")); // true
console.log(nama.includes("Giorno")); // false
```

### 8. `.forEach()` (Melakukan aksi)
Mirip `map()`, tapi `.forEach()` **TIDAK** menghasilkan array baru (hanya untuk menjalankan tugas).
```js
const hewan = ["Kucing", "Anjing"];
hewan.forEach((h) => {
  console.log("Saya memelihara " + h);
});
// Output:
// Saya memelihara Kucing
// Saya memelihara Anjing
```
