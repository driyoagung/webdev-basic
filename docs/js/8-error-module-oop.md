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
