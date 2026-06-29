# Menengah 1: Functions

**Function** (Fungsi) adalah blok kode yang dirancang untuk melakukan tugas tertentu. Anda bisa membayangkan fungsi seperti "mesin pabrik": Anda memasukkan bahan baku (Parameter/Input), mesin memprosesnya, lalu mengeluarkan barang jadi (Return/Output).

Tanpa fungsi, Anda harus menulis ulang kode yang sama berkali-kali. Dengan fungsi, kode menjadi dapat digunakan kembali (*reusable*).

## Mendeklarasikan Function (Cara Klasik)

```js
// 1. Membuat (Deklarasi) Fungsi
function sapaPengguna(nama) {
  console.log(`Halo, selamat pagi ${nama}!`);
}

// 2. Memanggil (Execute/Call) Fungsi
sapaPengguna("Budi"); // Output: Halo, selamat pagi Budi!
sapaPengguna("Andi"); // Output: Halo, selamat pagi Andi!
```

## Parameter dan Return Value

Fungsi biasanya membutuhkan data untuk diproses (**Parameter**) dan mengembalikan hasil proses tersebut (**Return**).

```js
function tambah(a, b) {
  const hasil = a + b;
  return hasil; // Mengirimkan hasil keluar dari fungsi
}

// Menyimpan hasil dari fungsi ke dalam variabel
const jumlah = tambah(10, 5);
console.log(jumlah); // 15
```

> **Catatan Penting:** 
> - Sebuah fungsi akan langsung **berhenti beroperasi** seketika setelah membaca perintah `return`.
> - Jika Anda tidak menulis `return`, fungsi secara otomatis mengembalikan nilai `undefined`.

---

## Arrow Function (ES6)

Di JavaScript modern (sejak 2015), diperkenalkan sintaks baru bernama **Arrow Function** (`=>`). Sintaks ini jauh lebih ringkas dan sering digunakan di framework modern (React/Vue).

```js
// Cara Klasik
function kali(a, b) {
  return a * b;
}

// Arrow Function
const kaliArrow = (a, b) => {
  return a * b;
};

// Arrow Function "Satu Baris" (Implicit Return)
// Jika fungsinya sangat sederhana (hanya 1 baris return), kurung kurawal dan kata 'return' bisa dibuang!
const kaliCepat = (a, b) => a * b;

console.log(kaliCepat(4, 5)); // 20
```

---

## Ruang Lingkup (Scope)

**Scope** menentukan "siapa yang bisa melihat variabel mana". Ini adalah konsep yang sering membuat pemula kebingungan.

JavaScript menggunakan **Block Scope** (untuk `let` dan `const`). Artinya, variabel yang dibuat di dalam sebuah blok `{ ... }` (seperti dalam if atau function) **TIDAK BISA** diakses dari luar blok tersebut.

### 1. Local Scope (Dalam Fungsi/Blok)
```js
function tesScope() {
  const rahasia = "12345";
  console.log(rahasia); // ✅ Berhasil dipanggil dari dalam
}

tesScope();
console.log(rahasia); // ❌ ERROR! 'rahasia' is not defined (Tidak bisa diakses dari luar)
```

### 2. Global Scope (Luar Fungsi)
Variabel yang dideklarasikan di luar fungsi manapun bisa diakses oleh siapa saja.

```js
const namaAplikasi = "My App"; // Global Variable

function cetakNama() {
  console.log("Welcome to " + namaAplikasi); // ✅ Berhasil dipanggil!
}

cetakNama(); // Welcome to My App
```

> **Aturan Emas:** Hindari membuat variabel Global sebanyak mungkin. Variabel global dapat secara tidak sengaja tertimpa oleh bagian kode lain yang menyebabkan *bug* yang sulit dilacak. Gunakan variabel lokal di dalam fungsi selagi bisa.
