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

## Symbol — Tipe Primitif ke-6
Symbol adalah tipe primitif yang menghasilkan nilai **unik** dan **immutable**. Sering digunakan sebagai key properti object agar tidak bertabrakan.

```js
const id = Symbol("id");
const id2 = Symbol("id");

console.log(id === id2); // false — setiap Symbol selalu unik

const user = {
  [id]: 123,
  nama: "Budi"
};

console.log(user[id]); // 123
// Simbol tidak muncul di for...in atau Object.keys() — cocok untuk "hidden" property
```

## Truthy & Falsy Values
Dalam konteks conditional (`if`, `&&`, `||`), JavaScript mengkonversi nilai ke boolean. Nilai yang dianggap **Falsy** (false):

| Nilai | Keterangan |
|-------|------------|
| `false` | Boolean false |
| `0`, `-0` | Angka nol |
| `""`, `''` | String kosong |
| `null` | Sengaja kosong |
| `undefined` | Belum diisi |
| `NaN` | Not a Number |

**Semua selain di atas adalah Truthy** — termasuk `[]`, `{}`, `" "`, `"false"`.

```js
const input = "";
if (input) {
  console.log("Ada isinya");
} else {
  console.log("Kosong!"); // Yang ini tercetak
}
```

## Type Coercion & `typeof`
### Implicit vs Explicit Coercion
```js
// Implicit: JS otomatis mengkonversi
console.log("5" - 2); // 3 (String "5" jadi Number)
console.log("5" + 2); // "52" (Number 2 jadi String — hati-hati!)

// Explicit: Kita yang mengkonversi
console.log(Number("5")); // 5
console.log(String(123)); // "123"
console.log(Boolean("")); // false
```

### Operator `typeof`
```js
console.log(typeof "Halo");    // "string"
console.log(typeof 42);        // "number"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" ⚠️ (bug historis JS!)
console.log(typeof []);        // "object"
console.log(typeof Symbol());  // "symbol"
```

### `isNaN()` vs `Number.isNaN()`
```js
console.log(isNaN("abc"));       // true (konversi dulu — rawan false positive)
console.log(isNaN(undefined));   // true

console.log(Number.isNaN("abc")); // false (tidak konversi, lebih ketat)
console.log(Number.isNaN(NaN));   // true
```

## `do...while` Loop
Berbeda dengan `while` (cek dulu, baru jalan), `do...while` **jalan minimal 1 kali**, baru cek.

```js
let i = 5;

do {
  console.log(`Jalan ke-${i}`);
  i++;
} while (i < 3); // Kondisi false, tapi output tetap: "Jalan ke-5" (minimal 1x)

// Bandingkan dengan while:
// while (i < 3) { ... } — Tidak jalan sama sekali!
```

## `break` & `continue`
```js
// break: Keluar dari loop sepenuhnya
for (let i = 1; i <= 10; i++) {
  if (i === 5) break; // Hentikan loop saat i = 5
  console.log(i);     // Output: 1, 2, 3, 4
}

// continue: Lompat 1 iterasi, lanjut ke berikutnya
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // Lewati i = 3
  console.log(i);        // Output: 1, 2, 4, 5
}
```

## String Methods Penting
```js
const teks = "  Hello Dunia JS  ";
const koma = "apel,jeruk,mangga";

// .slice(start, end) — potong string
console.log("Hello Dunia".slice(0, 5));  // "Hello"
console.log("Hello Dunia".slice(6));     // "Dunia"

// .replace() — ganti teks (pertama ketemu)
console.log("Budi Budi".replace("Budi", "Andi")); // "Andi Budi"

// .split() — pecah ke array
console.log(koma.split(",")); // ["apel", "jeruk", "mangga"]

// .includes() — cek substring
console.log("JavaScript".includes("Script")); // true

// .trim() — buang spasi awal/akhir
console.log(teks.trim()); // "Hello Dunia JS"

// .toUpperCase() / .toLowerCase()
console.log("halo".toUpperCase()); // "HALO"

// .padStart() / .padEnd() — tambah karakter di awal/akhir
console.log("7".padStart(3, "0"));  // "007"
console.log("ID".padEnd(5, "-"));   // "ID---"
```

## Number & Math
```js
// parseInt / parseFloat
console.log(parseInt("42px"));    // 42
console.log(parseFloat("3.14cm")); // 3.14

// toFixed(digit) — pembulatan ke desimal tertentu (hasil: string)
console.log((3.14159).toFixed(2)); // "3.14"

// Math
console.log(Math.floor(3.9)); // 3 (bulat ke bawah)
console.log(Math.ceil(3.1));  // 4 (bulat ke atas)
console.log(Math.random());   // 0.00... sampai 0.99...
console.log(Math.max(1, 5, 3)); // 5
console.log(Math.min(1, 5, 3)); // 1
```

## Ternary Operator
Singkatan `if/else` dalam satu baris.

```js
const umur = 18;
const status = umur >= 17 ? "Boleh buat SIM" : "Belum boleh";
console.log(status); // "Boleh buat SIM"

// Untuk nilai default:
const nama = inputUser ? inputUser : "Anonim";
// Atau versi singkat pakai ||
const namaSingkat = inputUser || "Anonim";
```

## TDZ (Temporal Dead Zone)
Koreksi klaim "`let`/`const` tidak hoisting" — **sebenarnya tetap hoisting terjadi**, tetapi variabel masuk ke **Temporal Dead Zone**: tidak bisa diakses antara awal scope sampai baris deklarasinya.

```js
// console.log(x); // ❌ ReferenceError — x ada di TDZ
let x = 10;
console.log(x);    // ✅ 10

// Bandingkan dengan var:
console.log(y);    // undefined (bukan error — hoisting tanpa TDZ)
var y = 20;
```

## `var` Function-Scope vs `let` Block-Scope

```js
// let: Block-Scope
if (true) {
  let a = 1;
  const b = 2;
  var c = 3;
}
console.log(c); // 3 — var lolos dari if block!
// console.log(a); // ❌ Error — let terjebak dalam block {}
// console.log(b); // ❌ Error — const juga terjebak

// var dalam loop: BERBAHAYA!
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // Output: 3, 3, 3 (bukan 0, 1, 2!)
}
// Solusi: pakai let (block-scope) → Output: 0, 1, 2
```
