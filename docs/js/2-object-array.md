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

## Object Methods Penting
```js
const buah = { apel: 5, jeruk: 3, mangga: 7 };

// Object.keys() — array dari semua key
console.log(Object.keys(buah)); // ["apel", "jeruk", "mangga"]

// Object.values() — array dari semua value
console.log(Object.values(buah)); // [5, 3, 7]

// Object.entries() — array dari [key, value]
console.log(Object.entries(buah)); // [["apel",5], ["jeruk",3], ["mangga",7]]

// Object.assign(target, source) — copy/menggabung object
const target = { a: 1 };
const hasil = Object.assign(target, { b: 2, c: 3 });
console.log(hasil); // { a: 1, b: 2, c: 3 }

// Object.freeze() — bekukan object (tidak bisa diubah)
const konstan = Object.freeze({ pi: 3.14 });
// konstan.pi = 3; // ❌ Tidak berpengaruh / Error (strict mode)

// Object.fromEntries() — kebalikan Object.entries()
const entries = [["nama", "Budi"], ["umur", 20]];
console.log(Object.fromEntries(entries)); // { nama: "Budi", umur: 20 }
```

## Array Destructuring Lebih Dalam
```js
const arr = [10, 20, 30, 40];

// Skip element
const [a, , c] = arr;
console.log(a, c); // 10 30

// Default value
const [x = 1, y = 2] = [];
console.log(x, y); // 1 2

// Swap variables (tanpa temp!)
let p = 5, q = 10;
[p, q] = [q, p];
console.log(p, q); // 10 5

// Nested destructuring
const data = ["Budi", ["Jakarta", "Bandung"]];
const [nama, [kota1, kota2]] = data;
console.log(kota1); // "Jakarta"
```

## `Array.from()` & `Array.of()`
```js
// Array.from() — ubah iterable/array-like ke array
const divs = document.querySelectorAll("div"); // NodeList (bukan array)
const arrDiv = Array.from(divs); // Sekarang array asli → bisa .map(), .filter(), dll

console.log(Array.from("Halo"));         // ["H", "a", "l", "o"]
console.log(Array.from([1, 2], x => x * 2)); // [2, 4]

// Array.of() — buat array dari argumen (konsisten)
console.log(Array.of(7));       // [7]
console.log(Array.of(1, 2, 3)); // [1, 2, 3]
// Bandingkan dengan new Array(7) → [empty × 7] (beda perilaku!)
```

### `Array.isArray()`
```js
console.log(Array.isArray([1, 2]));   // true
console.log(Array.isArray("Halo"));   // false
console.log(Array.isArray({ a: 1 })); // false
```

## Method Array Tambahan
```js
const arr = [10, 20, 30, 40, 20];

// findIndex() — indeks pertama yang cocok
console.log(arr.findIndex(n => n > 25)); // 2

// indexOf() / lastIndexOf()
console.log(arr.indexOf(20));     // 1
console.log(arr.lastIndexOf(20)); // 4

// slice(start, end) — potong (non-mutasi)
console.log(arr.slice(1, 3)); // [20, 30]

// splice(start, deleteCount, ...items) — hapus/sisip (MUTASI!)
const spl = [1, 2, 3, 4];
spl.splice(1, 2, "a", "b");
console.log(spl); // [1, "a", "b", 4]

// concat() — gabung array (non-mutasi)
console.log([1, 2].concat([3, 4])); // [1, 2, 3, 4]

// flat(depth) — ratakan array bersarang
console.log([1, [2, [3]]].flat(2)); // [1, 2, 3]

// flatMap() — map lalu flat(1)
console.log([1, 2].flatMap(n => [n, n * 2])); // [1, 2, 2, 4]

// at(index) — akses dengan indeks negatif
console.log(["a", "b", "c"].at(-1)); // "c"

// reverse() — balik urutan (MUTASI!)
const rev = [1, 2, 3];
rev.reverse();
console.log(rev); // [3, 2, 1]

// join(separator) — gabung ke string
console.log(["a", "b", "c"].join("-")); // "a-b-c"

// keys() / values() / entries() — iterator
const iterArr = ["x", "y"];
console.log([...iterArr.keys()]);    // [0, 1]
console.log([...iterArr.values()]);  // ["x", "y"]
console.log([...iterArr.entries()]); // [[0, "x"], [1, "y"]]
```

## Mutator vs Non-Mutator
| Mutator (ubah array asli) | Non-Mutator (array baru) |
|---|---|
| `.push()`, `.pop()` | `.map()` |
| `.shift()`, `.unshift()` | `.filter()` |
| `.splice()` | `.slice()` |
| `.sort()` | `.concat()` |
| `.reverse()` | `.flat()`, `.flatMap()` |

```js
const original = [1, 2, 3];
const copy = original.map(n => n); // Tidak mengubah original
original.push(4);                   // Mengubah original!
console.log(original); // [1, 2, 3, 4]
```

## `push` / `pop` / `shift` / `unshift`
```js
const arr = [2, 3];

arr.push(4);       // Tambah di BELAKANG → [2, 3, 4]
arr.unshift(1);    // Tambah di DEPAN     → [1, 2, 3, 4]
arr.pop();         // Hapus dari BELAKANG → [1, 2, 3] — return: 4
arr.shift();       // Hapus dari DEPAN    → [2, 3]    — return: 1
```

## Method Chaining
```js
const angka = [5, 2, 8, 1, 9, 3];

const hasil = angka
  .filter(n => n > 3)   // [5, 8, 9]
  .map(n => n * 10)     // [50, 80, 90]
  .sort((a, b) => a - b) // [50, 80, 90]
  .join(" → ");          // "50 → 80 → 90"

console.log(hasil); // "50 → 80 → 90"
```

## `toSorted()`, `toReversed()`, `toSpliced()` (ES2023)
Versi **immutable** (tidak mengubah array asli) dari `sort`, `reverse`, `splice`.

```js
const arr = [3, 1, 4, 1, 5];

const sorted = arr.toSorted();     // [1, 1, 3, 4, 5]
const reversed = arr.toReversed(); // [5, 1, 4, 1, 3]
const spliced = arr.toSpliced(1, 2, 9, 9); // [3, 9, 9, 1, 5]

console.log(arr);      // [3, 1, 4, 1, 5] — TETAP, tidak berubah!
console.log(sorted);   // [1, 1, 3, 4, 5]
```
