# 1. Dasar JavaScript

JavaScript adalah bahasa yang berjalan di browser untuk membuat halaman web menjadi interaktif. Modul ini adalah pondasi wajib sebelum melangkah lebih jauh.

## Variabel (`let`, `const`, `var`)
Variabel digunakan untuk menyimpan data.

```js
// 1. const (Konstan): Nilainya TIDAK BISA diubah (Best Practice!)
const pi = 3.14;
// pi = 3.15; // ❌ ERROR

// 2. let: Nilainya BISA diubah
let umur = 25;
umur = 26; // ✅ Boleh

// 3. var: Cara lama (JANGAN dipakai lagi, rentan bug bocor scope)
var nama = "Budi";
```

## Tipe Data
JavaScript memiliki tipe data dinamis.

```js
const nama = "Andi";      // String
const nilai = 90.5;       // Number
const lulus = true;       // Boolean (true/false)
let belumAdaNilai;        // Undefined (belum diisi)
const kosong = null;      // Null (sengaja dikosongkan)
const angkaBesar = 9007199254740991n; // BigInt
```

## Operator
```js
// Aritmatika
console.log(10 + 5); // 15 (Tambah)
console.log(10 % 3); // 1  (Sisa Bagi/Modulo)

// Perbandingan
console.log(5 == "5");  // true  (Hanya cek nilai)
console.log(5 === "5"); // false (Cek nilai & Tipe Data - WAJIB DIPAKAI!)

// Logika (AND, OR, NOT)
console.log(true && false); // false (Keduanya harus true)
console.log(true || false); // true  (Salah satu true)
console.log(!true);         // false (Kebalikan)
```

## Conditional (Percabangan)

### 1. `if / else if / else`
```js
const skor = 85;

if (skor >= 90) {
  console.log("Grade A");
} else if (skor >= 80) {
  console.log("Grade B"); // Output ini tercetak
} else {
  console.log("Grade C");
}
```

### 2. `switch`
Digunakan jika kondisi didasarkan pada kecocokan nilai mutlak.
```js
const hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari kerja pertama");
    break;
  case "Minggu":
    console.log("Hari libur");
    break;
  default:
    console.log("Hari tidak valid");
}
```

## Loop (Perulangan)

```js
// 1. for (Jika tahu batas akhirnya)
for (let i = 1; i <= 3; i++) {
  console.log(`Loop ke-${i}`);
}

// 2. while (Jika batas akhir belum pasti, cek kondisi dulu)
let bensin = 2;
while (bensin > 0) {
  console.log("Mobil jalan");
  bensin--;
}

// 3. for...of (Khusus membaca isi Array modern)
const buah = ["Apel", "Jeruk", "Mangga"];
for (const b of buah) {
  console.log(b); 
}
```

## Function (Fungsi Dasar)
Fungsi adalah blok kode yang bisa digunakan berulang kali.

```js
function sapa(nama) {
  return "Halo " + nama;
}

const sapaBudi = sapa("Budi");
console.log(sapaBudi); // "Halo Budi"
```

## Scope & Hoisting

### Scope (Ruang Lingkup)
Variabel yang dibuat di dalam fungsi (`Local Scope`) tidak bisa diakses dari luar.
```js
function tes() {
  const rahasia = 123;
}
// console.log(rahasia); // ❌ Error! rahasia is not defined
```

### Hoisting (Pengangkatan)
Di JS, fungsi biasa (`function`) akan "diangkat" ke atas sebelum eksekusi, sehingga bisa dipanggil *sebelum* ditulis!
```js
sapa("Andi"); // ✅ Tetap jalan, output: Halo Andi!

function sapa(nama) {
  console.log("Halo " + nama);
}
```
*(Catatan: Variabel `let` dan `const` TIDAK terkena hoisting).*

## Template Literal
Menggabungkan string dan variabel sekarang sangat mudah menggunakan *Backtick* (\`) dan `${variabel}`.

```js
const nama = "Dio";
const umur = 20;

// Cara lama (Ribet pakai tanda +)
const teks1 = "Nama saya " + nama + ", umur " + umur;

// Cara modern (Template Literal)
const teks2 = `Nama saya ${nama}, umur ${umur}`;

console.log(teks2);
```

> **HASIL PREVIEW:**
> ```text
> Nama saya Dio, umur 20
> ```
