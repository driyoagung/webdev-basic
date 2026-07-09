# Testing Dasar untuk JavaScript

Pernahkah Anda mengubah satu baris kode, lalu tiba-tiba fitur lain yang tidak berhubungan ikut rusak? Itulah **regression bug** — musuh utama developer. **Testing** adalah tameng Anda. Testing memastikan bahwa setiap fungsi dan komponen yang Anda tulis berperilaku sesuai ekspektasi, hari ini, besok, dan selamanya.

## Kenapa Testing Penting?

Bayangkan Anda membangun jembatan. Anda tidak akan menunggu jembatan ambruk untuk tahu ada yang salah. Anda mengujinya — memberi beban bertahap, mengecek kekuatan material, memastikan setiap sambungan aman. Software testing bekerja dengan prinsip yang sama.

1. **Mencegah Regresi** — Saat Anda menambah fitur baru, test memastikan fitur lama tidak ikut rusak.
2. **Dokumentasi Hidup** — Test menjelaskan perilaku yang diharapkan dari suatu fungsi. Developer baru membaca test untuk memahami kode.
3. **Confidence** — Anda bisa refactor kode tanpa ketakutan. Jika test tetap hijau, semua aman.
4. **Debugging Lebih Cepat** — Test yang gagal langsung menunjuk ke sumber masalah.

---

## Jenis-Jenis Testing

| Jenis | Fokus | Contoh |
|---|---|---|
| **Unit Testing** | Menguji satu fungsi/unit terkecil secara terisolasi | Test fungsi `tambah(a, b)` |
| **Integration Testing** | Menguji interaksi antar beberapa unit | Test fungsi `simpanUser()` yang memanggil `validasiEmail()` + `simpanKeDatabase()` |
| **End-to-End (E2E)** | Menguji alur aplikasi dari sudut pengguna | Test: buka browser → login → klik tombol → lihat hasil |

Untuk pemula, **Unit Testing** adalah tempat terbaik untuk memulai.

---

## Setup Vitest

**Vitest** adalah test framework modern untuk JavaScript yang bekerja sempurna dengan Vite. Ia cepat, sintaksnya mirip Jest, dan mendukung ESM secara native.

### Instalasi

```bash
npm install -D vitest
```

Tambahkan script test di `package.json`:

```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest"
  }
}
```

- `vitest run` — menjalankan test sekali lalu selesai (untuk CI/CD)
- `vitest` — watch mode, test otomatis berjalan ulang saat ada perubahan file

---

## Struktur Dasar Test

### `test()` / `it()`

Keduanya identik — `it()` adalah alias dari `test()`. Gunakan mana yang terasa lebih alami saat membaca test.

### `expect()`

Fungsi utama untuk membuat assertion (pernyataan ekspektasi). Formatnya:

```js
expect(nilaiYangDiuji).toBe(nilaiYangDiharapkan);
```

### Matchers

Matchers adalah fungsi setelah `expect()` yang menentukan jenis perbandingan.

| Matcher | Fungsi |
|---|---|
| `toBe(value)` | Membandingkan nilai primitif (strict equality `===`) |
| `toEqual(value)` | Membandingkan struktur object/array secara mendalam (deep equality) |
| `toBeTruthy()` | Cek apakah nilai *truthy* (bukan `false`, `0`, `""`, `null`, `undefined`) |
| `toBeFalsy()` | Cek apakah nilai *falsy* |
| `toContain(item)` | Cek apakah array mengandung item tertentu |
| `toHaveLength(n)` | Cek apakah array/string memiliki panjang `n` |
| `toThrow()` | Cek apakah fungsi melempar error |

---

## Contoh Test untuk Fungsi Matematika

Misalkan kita punya file `utils/math.js`:

```js
export function tambah(a, b) {
  return a + b;
}

export function kurang(a, b) {
  return a - b;
}

export function kali(a, b) {
  return a * b;
}

export function bagi(a, b) {
  if (b === 0) {
    throw new Error("Tidak bisa membagi dengan nol");
  }
  return a / b;
}
```

Test-nya di `utils/math.test.js`:

```js
import { describe, test, expect } from "vitest";
import { tambah, kurang, kali, bagi } from "./math.js";

describe("Fungsi tambah", () => {
  test("menjumlahkan dua bilangan positif", () => {
    expect(tambah(2, 3)).toBe(5);
  });

  test("menjumlahkan bilangan negatif dan positif", () => {
    expect(tambah(-2, 5)).toBe(3);
  });

  test("menjumlahkan dua bilangan negatif", () => {
    expect(tambah(-2, -3)).toBe(-5);
  });
});

describe("Fungsi kurang", () => {
  test("mengurangi dua bilangan", () => {
    expect(kurang(10, 4)).toBe(6);
  });

  test("hasil negatif jika pengurang lebih besar", () => {
    expect(kurang(3, 8)).toBe(-5);
  });
});

describe("Fungsi bagi", () => {
  test("pembagian normal", () => {
    expect(bagi(10, 2)).toBe(5);
  });

  test("melempar error jika dibagi nol", () => {
    expect(() => bagi(10, 0)).toThrow("Tidak bisa membagi dengan nol");
  });
});
```

---

## Contoh Test untuk Fungsi Array

```js
import { describe, test, expect } from "vitest";

// Fungsi yang akan di-test
function filterGenap(angka) {
  return angka.filter(n => n % 2 === 0);
}

function kaliSemua(arr, pengali) {
  return arr.map(n => n * pengali);
}

function totalBelanja(items) {
  return items.reduce((total, item) => total + item.harga * item.qty, 0);
}

describe("filterGenap", () => {
  test("mengembalikan hanya bilangan genap", () => {
    expect(filterGenap([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });

  test("mengembalikan array kosong jika tidak ada genap", () => {
    expect(filterGenap([1, 3, 5])).toEqual([]);
  });

  test("tidak mengubah array asli", () => {
    const asli = [1, 2, 3, 4];
    const hasil = filterGenap(asli);
    // Pastikan array asli tetap utuh
    expect(asli).toEqual([1, 2, 3, 4]);
  });
});

describe("kaliSemua", () => {
  test("mengalikan semua elemen dengan pengali", () => {
    expect(kaliSemua([1, 2, 3], 10)).toEqual([10, 20, 30]);
  });
});

describe("totalBelanja", () => {
  test("menghitung total belanja dengan benar", () => {
    const keranjang = [
      { nama: "Buku", harga: 15000, qty: 2 },
      { nama: "Pensil", harga: 3000, qty: 5 },
    ];
    expect(totalBelanja(keranjang)).toBe(45000);
  });
});
```

---

## `describe()` — Grouping Test

`describe()` mengelompokkan beberapa test yang terkait dalam satu blok. Ini membuat output test di terminal lebih terstruktur dan rapi.

```js
describe("Modul User", () => {
  describe("validasiEmail", () => {
    test("email valid diterima", () => { /* ... */ });
    test("email tanpa @ ditolak", () => { /* ... */ });
  });

  describe("formatNama", () => {
    test("kapitalisasi huruf pertama", () => { /* ... */ });
    test("trim spasi berlebih", () => { /* ... */ });
  });
});
```

Nesting `describe()` membantu Anda mengorganisir test seperti folder di komputer. Output Vitest akan menampilkan hierarki ini:

```
✓ Modul User
  ✓ validasiEmail
    ✓ email valid diterima
    ✓ email tanpa @ ditolak
  ✓ formatNama
    ✓ kapitalisasi huruf pertama
    ✓ trim spasi berlebih
```

---

## Menjalankan Test

```bash
# Jalankan semua test sekali
npx vitest run

# Jalankan dengan watch mode (auto reload)
npx vitest

# Jalankan test yang cocok dengan pola tertentu
npx vitest run -t "tambah"

# Jalankan file test spesifik
npx vitest run utils/math.test.js
```

---

## TDD (Test Driven Development) — Sekilas

TDD adalah filosofi menulis kode dimana Anda **menulis test dulu, baru implementasi**. Siklusnya dikenal dengan **Red-Green-Refactor**:

1. **Red** — Tulis test. Jalankan. Test gagal (merah) karena fungsi belum ada.
2. **Green** — Tulis kode minimum agar test lulus (hijau). Jangan lebih, jangan kurang.
3. **Refactor** — Rapikan kode. Test harus tetap hijau setelah refactor.

```js
// 1. RED: Tulis test dulu
test("cekPalindrome mengembalikan true untuk kata palindrom", () => {
  expect(cekPalindrome("katak")).toBe(true);
});
// Jalankan → GAGAL (fungsi belum ada)


// 2. GREEN: Implementasi minimal
function cekPalindrome(kata) {
  return kata === kata.split("").reverse().join("");
}
// Jalankan → LULUS


// 3. REFACTOR: Bersihkan kode (tapi test tetap hijau)
function cekPalindrome(kata) {
  const reversed = [...kata].reverse().join("");
  return kata.toLowerCase() === reversed.toLowerCase();
}
```

---

## Tips Testing untuk Pemula

1. **Nama test harus deskriptif** — Baca nama test langsung paham apa yang diuji. `test("menjumlahkan dua bilangan negatif")` jauh lebih baik daripada `test("test1")`.

2. **Test satu hal per test case** — Jangan mencampur banyak assertion yang tidak berhubungan dalam satu `test()`. Satu test = satu konsep.

3. **Gunakan `toEqual` untuk object/array, `toBe` untuk primitif** — `toBe` mengecek referensi (===), `toEqual` mengecek nilai secara rekursif.

4. **Test edge cases** — Jangan hanya test "happy path". Uji juga: input kosong, input negatif, input null/undefined, input ekstrem.

5. **Test tidak boleh bergantung pada test lain** — Setiap test harus bisa berjalan secara independen. Urutan eksekusi tidak boleh mempengaruhi hasil.

6. **Jangan test implementasi pihak ketiga** — Anda tidak perlu mengetes apakah `Array.map()` bekerja. Test logika bisnis Anda, bukan library yang sudah teruji.

7. **Mulai dari fungsi murni (pure functions)** — Fungsi yang tidak memiliki efek samping (tidak mengubah variabel luar, tidak fetch API) adalah kandidat terbaik untuk unit test pertama Anda.

> **Tips Pro:** Biasakan untuk langsung membuat file `*.test.js` begitu Anda selesai menulis fungsi baru. Jika menunda, Anda tidak akan pernah menulis test-nya.
