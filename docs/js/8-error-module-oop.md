# 8. Error, Module, & OOP

Bagian ini membahas cara membungkus struktur kode skala besar agar rapi dan aman dari *crash*.

---

## 1. Error Handling (Try / Catch)
Saat program menemui Error kritis, ia akan berhenti total (*Crash*). Blok `try/catch` digunakan untuk "menangkap" error tersebut agar program bisa tetap berjalan meskipun gagal di satu bagian.

```js
function bagiAngka(a, b) {
  try {
    // 1. Coba lakukan sesuatu yang berisiko
    if (b === 0) {
      // 2. Lemparkan (Throw) error secara manual jika logika salah
      throw new Error("Tidak bisa dibagi nol!"); 
    }
    console.log("Hasil:", a / b);

  } catch (err) {
    // 3. Jika terjadi error di dalam blok TRY, program akan melompat ke sini
    console.error("Terjadi masalah:", err.message);

  } finally {
    // 4. (Opsional) Selalu dieksekusi di akhir, baik Error ataupun Sukses
    console.log("Proses pembagian selesai (Loading ditutup).");
  }
}

bagiAngka(10, 0); 
// Output: 
// Terjadi masalah: Tidak bisa dibagi nol!
// Proses pembagian selesai (Loading ditutup).
```

---

## 2. ES Modules (Import & Export)
Membuat file JS yang panjangnya 5000 baris adalah mimpi buruk! JavaScript modern memecah file menjadi potongan-potongan (*Module*) agar rapi.

Framework seperti React atau Vue sangat bergantung pada ekspor dan impor ini!

### Named Export (Bisa banyak per file)
Bisa mengekspor fungsi atau variabel sesuka hati. Saat impor, namanya harus dicapit dengan kurung kurawal `{}`.

```js
// file: matematika.js
export const pi = 3.14;
export function tambah(a, b) { return a + b; }

// file: utama.js
import { pi, tambah } from './matematika.js';
console.log(tambah(1, 2));
```

### Default Export (Hanya boleh 1 per file)
Sangat berguna untuk mengekspor 1 Komponen Utama dari sebuah file (Contoh: Komponen React).

```js
// file: Tombol.js
function Tombol(teks) {
  return `<button>${teks}</button>`;
}
export default Tombol; // Ekspor utama!

// file: utama.js (Bebas namain apa saja karena Default!)
import KomponenTombol from './Tombol.js';
console.log(KomponenTombol("Klik"));
```

---

## 3. OOP Dasar (Class & Constructor)

Meskipun JS Modern (sejak ES6) lebih condong ke arah fungsional, sintaks Object Oriented Programming (OOP) berbasis `Class` sering digunakan untuk mencetak banyak objek dengan format yang sama (seperti *Blue Print*).

```js
// Membuat Cetak Biru (Class)
class Kendaraan {
  // Fungsi yang otomatis dipanggil PERTAMA KALI saat dibuat
  constructor(merk, kecepatan) {
    // 'this' merujuk pada objek unik yang sedang diciptakan
    this.merk = merk;
    this.kecepatan = kecepatan;
  }

  // Method (Fungsi di dalam Class)
  gas() {
    console.log(`${this.merk} melaju di ${this.kecepatan} km/jam!`);
  }
}

// Pewarisan (Inheritance) - Mengambil sifat dari Kelas Bapak
class MobilBalap extends Kendaraan {
  constructor(merk, kecepatan, nos) {
    // Panggil konstruktor Bapak ('super') dulu sebelum nambah properti sendiri
    super(merk, kecepatan);
    this.nos = nos;
  }

  boost() {
    console.log(`${this.merk} menyalakan Turbo x${this.nos}!`);
  }
}

// Implementasi Nyata
const toyota = new Kendaraan("Avanza", 100);
toyota.gas(); // Avanza melaju di 100 km/jam!

const ferrari = new MobilBalap("Ferrari F1", 300, 3);
ferrari.gas();   // Punya sifat bapaknya!
ferrari.boost(); // Ferrari F1 menyalakan Turbo x3!
```

---

## 4. Tipe-tipe Error Built-in

Selain `Error` generic, JavaScript punya beberapa tipe error spesifik:

```js
// TypeError: operasi pada tipe data yang salah
null.nama;          // TypeError: Cannot read properties of null
const a = 5;
a.toUpperCase();    // TypeError: a.toUpperCase is not a function

// RangeError: nilai di luar jangkauan yang diizinkan
new Array(-1);      // RangeError: Invalid array length
(3.14159).toFixed(200); // RangeError

// SyntaxError: kode tidak valid (biasanya saat eval/parsing)
JSON.parse("{nama: 'Budi'}"); // SyntaxError — key JSON harus pakai kutip dua

// ReferenceError: akses variabel yang belum dideklarasikan
console.log(variabelTidakAda); // ReferenceError

// URIError: encodeURI/decodeURI dengan URI malformed
decodeURIComponent("%"); // URIError
```

---

## 5. Custom Error Class

Membuat tipe error sendiri untuk error handling yang lebih presisi:

```js
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";  // Nama spesifik
    this.field = field;             // Properti tambahan
  }
}

class NetworkError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "NetworkError";
    this.statusCode = statusCode;
  }
}

// Penggunaan
try {
  const email = "";
  if (!email) {
    throw new ValidationError("Email wajib diisi", "email");
  }
  // ... logika lainnya
} catch (err) {
  if (err instanceof ValidationError) {
    console.error(`Validasi gagal di field ${err.field}: ${err.message}`);
  } else if (err instanceof NetworkError) {
    console.error(`Network error ${err.statusCode}: ${err.message}`);
  } else {
    console.error("Error tidak dikenal:", err);
  }
}
```

---

## 6. Error Properties

```js
try {
  throw new Error("Database gagal terkoneksi");
} catch (err) {
  console.log(err.message); // "Database gagal terkoneksi"
  console.log(err.name);    // "Error"
  console.log(err.stack);   // "Error: Database gagal terkoneksi\n    at ... (file.js:3:9)"
  console.log(err.cause);   // Error penyebab (ES2022, lihat bawah)
}

// Error cause (ES2022): merantai error untuk debugging
try {
  await fetch("/api").catch(() => {
    throw new Error("Gagal sinkronisasi", { cause: "Timeout 30 detik" });
  });
} catch (err) {
  console.log(err.cause); // "Timeout 30 detik"
}
```

---

## 7. Global Error Handling

Menangkap error yang lolos dari `try/catch` — **last resort** sebelum crash:

```js
// Error synchronous yang tidak ter-catch
window.addEventListener("error", (event) => {
  console.error("Global error:", event.message, "di", event.filename, "baris", event.lineno);
  // Kirim ke logging service seperti Sentry
});

// Promise rejection yang tidak ter-catch (fetch gagal tanpa .catch, dll.)
window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled promise rejection:", event.reason);
  event.preventDefault(); // Mencegah error tampil di console (opsional)
});
```

---

## 8. Dynamic `import()`

Impor modul secara dinamis — berguna untuk **lazy loading** dan **code splitting**:

```js
// ❌ Static import: semua dimuat di awal (blocking)
import { renderChart } from "./chart.js";

// ✅ Dynamic import: hanya dimuat saat dibutuhkan
tombolGrafik.addEventListener("click", async () => {
  const { renderChart } = await import("./chart.js");
  renderChart(data);
});

// Conditional import: muat polyfill hanya untuk browser lama
if (!window.fetch) {
  await import("./polyfill-fetch.js");
}

// Dynamic import mengembalikan Promise — bisa pakai .then() juga
import("./modul-berat.js")
  .then((modul) => modul.init())
  .catch((err) => console.error("Gagal memuat modul:", err));
```

---

## 9. `import * as` dan `import { x as y }`

```js
// === Alias untuk named export ===
import { getUser as ambilUser, saveUser as simpanUser } from "./user.js";
simpanUser({ nama: "Budi" });

// === Namespace import: ambil SEMUA export dalam satu objek ===
import * as UserAPI from "./user.js";
UserAPI.getUser(1);
UserAPI.saveUser(data);
UserAPI.deleteUser(1);

// === Gabungkan default + named ===
import ModulUtama, { helperSatu, helperDua } from "./modul.js";
```

---

## 10. `&lt;script type="module"&gt;` vs `&lt;script defer/async&gt;`

```html
<!-- type="module": OTOMATIS deferred (tidak blocking render) -->
<script type="module" src="./app.js"></script>

<!-- defer: download paralel, eksekusi SETELAH HTML selesai di-parse -->
<script defer src="./app.js"></script>

<!-- async: download paralel, eksekusi SEGERA setelah download (tidak peduli urutan) -->
<script async src="./analytics.js"></script>

<!-- Tanpa atribut: BLOCKING, render berhenti sampai selesai -->
<script src="./app.js"></script>
```

| Atribut       | Download     | Eksekusi            | Urutan Dijamin |
|---------------|-------------|--------------------|---------------|
| (tanpa)       | Blocking    | Langsung            | ✅ Ya          |
| `defer`       | Paralel     | Setelah HTML parsed | ✅ Ya          |
| `async`       | Paralel     | Segera setelah download | ❌ Tidak    |
| `type="module"` | Paralel   | Setelah HTML parsed (seperti defer) | ✅ Ya |

---

## 11. Circular Dependency

Terjadi ketika dua modul saling mengimpor satu sama lain (A import B, B import A). Ini bisa menyebabkan hasil yang tidak terduga karena salah satu modul dieksekusi sebelum yang lain selesai.

```js
// ❌ Circular dependency — HINDARI!
// file: a.js
import { pesanDariB } from "./b.js";
export const pesanDariA = "Halo dari A";
console.log(pesanDariB); // Mungkin undefined!

// file: b.js
import { pesanDariA } from "./a.js";
export const pesanDariB = "Halo dari B";
```

**Cara menghindari:**
- Ekstrak kode yang dibutuhkan kedua modul ke **modul ketiga** (`utils.js`).
- Gunakan **dynamic import** untuk memutus siklus.
- Refaktor agar aliran dependensi hanya satu arah.

---

## 12. OOP: Static Methods & Properties

Method/properti milik **class**, bukan milik instance (tidak perlu `new`):

```js
class Kendaraan {
  static totalRoda = 4;                        // Static property

  static hitungJumlahRoda(jumlahKendaraan) {   // Static method
    return jumlahKendaraan * this.totalRoda;   // this mengacu ke class
  }

  constructor(merk) {
    this.merk = merk; // Instance property — butuh `new`
  }
}

console.log(Kendaraan.totalRoda);              // 4 — langsung dari class
console.log(Kendaraan.hitungJumlahRoda(10));   // 40

const avanza = new Kendaraan("Avanza");
// avanza.hitungJumlahRoda(); ❌ Error! Static method bukan milik instance
```

---

## 13. OOP: Getter & Setter

Method yang menyamar seperti properti — cocok untuk validasi dan computed value:

```js
class User {
  constructor(namaDepan, namaBelakang) {
    this._namaDepan = namaDepan;
    this._namaBelakang = namaBelakang;
  }

  // Getter: dipanggil seperti properti (tanpa tanda kurung)
  get namaLengkap() {
    return `${this._namaDepan} ${this._namaBelakang}`;
  }

  // Setter: validasi saat assign nilai
  set namaDepan(nilai) {
    if (nilai.length < 2) {
      throw new ValidationError("Nama depan minimal 2 karakter");
    }
    this._namaDepan = nilai;
  }
}

const user = new User("Agung", "Santoso");
console.log(user.namaLengkap); // "Agung Santoso" ← getter, TANPA ()
user.namaDepan = "A";          // ValidationError ← setter melakukan validasi
```

---

## 14. OOP: Private Fields `#`

Truly private — tidak bisa diakses dari luar class sama sekali (ES2022):

```js
class BankAccount {
  #saldo = 0;        // Private field — hanya bisa diakses di dalam class
  #pin;

  constructor(nama, pinAwal) {
    this.nama = nama; // Public
    this.#pin = pinAwal;
  }

  deposit(jumlah) {
    this.#saldo += jumlah;
    console.log(`Deposit ${jumlah}. Saldo: ${this.#saldo}`);
  }

  #validasiPin(pin) { // Private method
    return this.#pin === pin;
  }

  cekSaldo(pin) {
    if (!this.#validasiPin(pin)) throw new Error("PIN salah!");
    return this.#saldo;
  }
}

const rekening = new BankAccount("Budi", 1234);
rekening.nama;        // ✅ "Budi" (public)
rekening.deposit(50000);
rekening.cekSaldo(1234); // ✅ 50000
// rekening.#saldo;   // ❌ SyntaxError: Private field
// rekening.#pin;      // ❌ SyntaxError: Private field
```

> **Konvensi underscore (`_field`)** adalah cara lama menandai "private" — tapi hanya konvensi, tidak benar-benar private. Gunakan `#` untuk private sejati.

---

## 15. OOP: `instanceof` & `Object.getPrototypeOf`

```js
class Hewan {}
class Kucing extends Hewan {}

const miko = new Kucing();

console.log(miko instanceof Kucing); // true
console.log(miko instanceof Hewan);  // true (inheritance)
console.log(miko instanceof Object); // true (semua objek turunan Object)
console.log(miko instanceof Array);  // false

// Melihat prototype langsung
console.log(Object.getPrototypeOf(miko) === Kucing.prototype); // true
```

---

## 16. OOP: Prototype Chain

JavaScript adalah bahasa **prototypal inheritance**, BUKAN class-based sejati. Sintaks `class` hanyalah *syntactic sugar* di atas prototype:

```
         null
           ↑
     Object.prototype
      ↑            ↑
  Function.prototype   Array.prototype   Kucing.prototype
      ↑                                     ↑
   class Kucing                           miko (instance)
```

```js
// "Class" sebelum ES6 — ini yang sebenarnya terjadi di belakang layar:
function HewanLama(nama) {
  this.nama = nama;
}
HewanLama.prototype.suara = function () {
  console.log(`${this.nama} bersuara!`);
};

// SAMA dengan:
class HewanBaru {
  constructor(nama) { this.nama = nama; }
  suara() { console.log(`${this.nama} bersuara!`); }
}

// Bukti bahwa class hanyalah "gula sintaks":
console.log(typeof HewanBaru); // "function"
```

---

## 17. OOP: Composition vs Inheritance

|                | Inheritance (`extends`)        | Composition (Mixin)                |
|----------------|--------------------------------|------------------------------------|
| Hubungan       | **"is-a"** (adalah)           | **"has-a"** (memiliki)            |
| Struktur       | Hierarki kaku                 | Fleksibel, gabung dari banyak sumber |
| Fleksibilitas  | Sulit diubah setelah dalam | Mudah ditambah/hapus kemampuan     |
| Masalah umum   | Deep hierarchy, *gorilla-banana problem* | -                    |

**Composition lebih disukai** karena menghindari hierarki yang kaku:

```js
// Mixin: objek berisi method yang bisa "dicampur" ke class manapun
const bisaTerbang = {
  terbang() { console.log(`${this.nama} terbang!`); }
};

const bisaBerkicau = {
  berkicau() { console.log(`${this.nama}: cuit cuit!`); }
};

// Fungsi helper untuk mencampur mixin
function campurkan(target, ...mixins) {
  Object.assign(target.prototype, ...mixins);
}

class Burung {
  constructor(nama) { this.nama = nama; }
}

campurkan(Burung, bisaTerbang, bisaBerkicau);

const kenari = new Burung("Kenari");
kenari.terbang();  // "Kenari terbang!"
kenari.berkicau(); // "Kenari: cuit cuit!"
```

---

## 18. Method Chaining

Mengembalikan `this` dari method untuk memungkinkan rantai panggilan:

```js
class QueryBuilder {
  constructor() {
    this._table = "";
    this._where = [];
    this._limit = null;
  }

  table(nama) {
    this._table = nama;
    return this; // ← Kunci chaining
  }

  where(kondisi) {
    this._where.push(kondisi);
    return this;
  }

  limit(n) {
    this._limit = n;
    return this;
  }

  build() {
    let sql = `SELECT * FROM ${this._table}`;
    if (this._where.length) sql += ` WHERE ${this._where.join(" AND ")}`;
    if (this._limit) sql += ` LIMIT ${this._limit}`;
    return sql;
  }
}

const query = new QueryBuilder()
  .table("users")                    // return this
  .where("age > 18")                 // return this
  .where("status = 'active'")        // return this
  .limit(10)                         // return this
  .build();                          // Terminator — return hasil akhir

console.log(query);
// "SELECT * FROM users WHERE age > 18 AND status = 'active' LIMIT 10"
```
