# Dasar 2: Logika & Perulangan

JavaScript membutuhkan instruksi untuk mengambil keputusan dan melakukan tugas berulang. Bagian ini akan membahas dasar dari algoritma pemrograman.

## Operator

Operator adalah simbol yang memberi tahu mesin JavaScript untuk melakukan operasi matematika, relasional, atau logika.

### 1. Aritmatika
```js
let a = 10;
let b = 3;

console.log(a + b); // 13 (Tambah)
console.log(a - b); // 7 (Kurang)
console.log(a * b); // 30 (Kali)
console.log(a / b); // 3.333 (Bagi)
console.log(a % b); // 1 (Sisa Bagi / Modulo)
console.log(a ** b); // 1000 (Pangkat: 10^3)
```

### 2. Perbandingan (Relasional)
Selalu menghasilkan nilai `Boolean` (`true` atau `false`).

```js
const x = 5;

console.log(x > 3);   // true
console.log(x < 10);  // true
console.log(x >= 5);  // true

// Perbedaan Sama Dengan
console.log(5 == "5");  // true  (Hanya mengecek nilai, tipe datanya diabaikan)
console.log(5 === "5"); // false (Strict Equality: Mengecek nilai DAN tipe data) - Best Practice!
```

> **Best Practice:** Selalu gunakan `===` (triple equals) dan `!==` untuk membandingkan agar terhindar dari *bug* karena perbedaan tipe data.

### 3. Logika (Logical)
Digunakan untuk menggabungkan beberapa kondisi perbandingan.

```js
// AND (&&) - Keduanya harus true
console.log(true && true);   // true
console.log(true && false);  // false

// OR (||) - Salah satu saja true sudah cukup
console.log(true || false);  // true
console.log(false || false); // false

// NOT (!) - Membalikkan nilai
console.log(!true);  // false
```

---

## Percabangan (If / Else)

Percabangan membuat kode bisa mengambil jalur eksekusi yang berbeda berdasarkan kondisi tertentu.

### 1. `if`, `else if`, `else`

```js
const nilai = 85;

if (nilai >= 90) {
  console.log("Grade: A");
} else if (nilai >= 80) {
  console.log("Grade: B"); // Kode ini yang akan dieksekusi
} else if (nilai >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D"); // Jika semua kondisi di atas false
}
```

### 2. Ternary Operator (If Singkat)
Sangat berguna untuk menyederhanakan `if...else` sederhana ke dalam satu baris (sering dipakai di framework modern seperti React/Vue).

```js
const umur = 20;

// Format: kondisi ? nilai_jika_true : nilai_jika_false
const status = (umur >= 18) ? "Boleh memilih" : "Belum cukup umur";

console.log(status); // "Boleh memilih"
```

---

## Perulangan (Looping)

Komputer sangat hebat dalam melakukan pekerjaan berulang-ulang tanpa lelah. Looping digunakan untuk mengeksekusi blok kode berkali-kali.

### 1. `for` Loop
Digunakan saat Anda **tahu pasti** berapa kali perulangan harus dilakukan.

```js
// Format: for (inisialisasi; kondisi; increment/decrement)
for (let i = 1; i <= 5; i++) {
  console.log("Perulangan ke-" + i);
}
// Output:
// Perulangan ke-1
// Perulangan ke-2
// ... (sampai 5)
```

### 2. `while` Loop
Digunakan saat Anda **tidak tahu pasti** kapan perulangan berakhir, tapi bergantung pada suatu kondisi.

```js
let bensin = 3;

while (bensin > 0) {
  console.log("Mobil berjalan...");
  bensin--; // Mengurangi bensin 1 setiap putaran
}
console.log("Bensin habis!");
```

### 3. Loop pada Array (`for...of`)
Cara paling modern dan elegan untuk membaca seluruh isi daftar (Array) satu per satu.

```js
const buahBuahan = ["Apel", "Pisang", "Jeruk"];

for (const buah of buahBuahan) {
  console.log(buah);
}
```
