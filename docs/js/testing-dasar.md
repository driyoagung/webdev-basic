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

## Setup & Teardown: `beforeEach` / `afterEach`

Sering kali beberapa test butuh **state awal yang sama** (mis: array yang sama, mock yang sama, file temp yang sama). Ketimbang mengetik ulang di tiap `test()`, Vitest menyediakan hook lifecycle:

| Hook | Kapan berjalan |
|---|---|
| `beforeAll` | Sekali sebelum semua test di sebuah `describe`/file |
| `beforeEach` | Sebelum tiap `test` |
| `afterEach` | Setelah tiap `test` |
| `afterAll` | Sekali setelah semua test selesai |

```js
import { describe, test, expect, beforeEach, afterEach, vi } from "vitest";
import { TodoList } from "./todo.js";

describe("TodoList", () => {
  let todo;

  beforeEach(() => {
    // State bersih sebelum tiap test → test independen
    todo = new TodoList();
    todo.seed(["belajar", "mandi"]);
  });

  afterEach(() => {
    // Bersihkan efek samping (mis: hapus file temp, reset mock)
    vi.restoreAllMocks();
  });

  test("mulai dengan 2 item", () => {
    expect(todo.items).toHaveLength(2);
  });

  test("bisa tambah item", () => {
    todo.add("tidur");
    expect(todo.items).toHaveLength(3);
  });

  test("tidak tercemar test sebelumnya", () => {
    // Karena beforeEach bikin TodoList baru, tetap 2 item di sini
    expect(todo.items).toHaveLength(2);
  });
});
```

::: tip Aturan emas testing
Setiap test harus **independen** — boleh dijalankan dalam urutan apa pun, secara mandiri. Itulah kenapa `beforeEach` dipakai begitu sering: membangun state bersih yang sama tanpa duplikasi kode.
:::

---

## Mocking — Mengisolasi Dependency

**Mock** = mengganti dependency nyata (database, API, timer, modul lain) dengan versi palsu yang **terkontrol**. Tujuannya: test cepat, deterministik (tidak kena rate-limit / network), dan isolasi.

### `vi.fn()` —/function Mock dasar
```js
import { vi } from "vitest";

const mockMath = vi.fn();
mockMath(2, 3);                     // panggil
expect(mockMath).toHaveBeenCalled();
expect(mockMath).toHaveBeenCalledWith(2, 3);

// Set return value palsu
mockMath.mockReturnValue(10);
expect(mockMath(7, 8)).toBe(10);

// Implementasi palsu
mockMath.mockImplementation((a, b) => a + b);
expect(mockMath(1, 2)).toBe(3);

// Inspeksi: lihat semua "call" yang terjadi
expect(mockMath.mock.calls).toHaveLength(4);
expect(mockMath.mock.results[0].value).toBe(undefined);
```

### `vi.mock()` — Mock modul
Mengganti export dari sebuah modul secara penuh. Sangat berguna saat kode Anda memanggil API eksternal atau database.

```js
// user.test.js
import { describe, test, expect, vi } from "vitest";

// WAJIB di top-level — di-hoist otomatis oleh Vitest sebelum import lain
vi.mock("./api.js", () => ({
  fetchUser: vi.fn(() => Promise.resolve({ id: 1, nama: "Budi" })),
  saveUser: vi.fn(),
}));

import { fetchUser, saveUser } from "./api.js";
import { getDisplayName } from "./user.js";

describe("getDisplayName", () => {
  test("mengembalikan nama user dari API mock", async () => {
    const nama = await getDisplayName(1);
    expect(nama).toBe("Budi");
    expect(fetchUser).toHaveBeenCalledWith(1);
  });
});
```

### Mock vs Stub vs Spy — Apa beda?

| Istilah | Perilaku | Contoh |
|---|---|---|
| **Mock** | Mengganti fungsi dengan versi palsu, dan **memverifikasi** dipanggil | Cek `fetchUser` dipanggil dengan ID `1` |
| **Stub** | Mengganti fungasi dengan return value tetap, tanpa peduli dipanggil atau tidak | `clock = { now: () => 1000 }` |
| **Spy** | Membungkus fungsi asli tetap dipanggil, tapi merekam aktivitasnya | `vi.spyOn(console, "log")` untuk cek pemanggilan, lalu restore |

```js
// Spy: bungkus fungsi ASLI, tetap dijalankan, tapi tercatat
const spy = vi.spyOn(console, "log");
myFunc();                              // benar-benar console.log
expect(spy).toHaveBeenCalledWith("halo");
spy.mockRestore();                     // kembalikan seperti semula
```

### Memalsukan timer (`vi.useFakeTimers`)
Test yang melibatkan `setTimeout`/`setInterval` bisa berkualitas lama dan tidak stabil. Pakai fake timer:

```js
import { vi, test, expect } from "vitest";

test("callback dipanggil setelah 1 detik", () => {
  vi.useFakeTimers();
  const cb = vi.fn();
  setTimeout(cb, 1000);

  // Memajukan waktu 1000ms secara instan tanpa menunggu sungguhan
  vi.advanceTimersByTime(1000);
  expect(cb).toHaveBeenCalled();

  vi.useRealTimers();   // jangan lupa kembalikan
});
```

---

## Testing Asynchronous

Banyak kode JavaScript bersifat async (Promise, fetch, query DB). Vitest mendukungnya dengan beberapa pola:

### 1. `async/await` di dalam `test`
Cara paling idiomatic: jadikan callback `test` menjadi `async` dan `await` Promise di dalamnya.

```js
test("fetch mengembalikan data user", async () => {
  const user = await fetchUser(1);
  expect(user.nama).toBe("Budi");
});
```

### 2. `resolves` / `rejects` — assertion pada Promise
Bila Anda tidak ingin pakai `await` eksplisit:
```js
test("Promise resolve", async () => {
  await expect(fetchUser(1)).resolves.toEqual({ id: 1, nama: "Budi" });
});

test("Promise reject kalau ID tidak ada", async () => {
  await expect(fetchUser(999)).rejects.toThrow("User tidak ditemukan");
});
```

### 3. `waitFor` — polling untuk kondisi asinkron (Vitest Testing Library)
Saat test DOM dengan update async yang belum jelas kapan selesai:
```js
import { render, screen, waitFor } from "@testing-library/vue";
import Counter from "./Counter.vue";

test("counter bertambah setelah klik", async () => {
  render(Counter);
  const btn = screen.getByText("Klik");

  btn.click();
  await waitFor(() => {
    expect(screen.getByText("1")).toBeTruthy();
  });
});
```

::: warning
**Jangan lupa `await`!** Tanpa `await`, test selesai sebelum Promise resolve → false positive (test "lulus" padahal belum dicek).
:::

---

## Snapshot Testing

Snapshot test = Vitest merekam **representasi string** dari output Anda, lalu menyimpannya di file `.snap`. Saat test berikutnya, jika output berubah, test gagal dan Anda diminta konfirmasi: apakah perubahan ini intentional?

```js
import { test, expect } from "vitest";
import { formatInvoice } from "./invoice.js";

test("format invoice cocok dengan snapshot", () => {
  const output = formatInvoice({
    id: "INV-001",
    items: [{ nama: "Buku", harga: 10000, qty: 2 }],
  });
  expect(output).toMatchSnapshot();   // simpan/bandingkan ke file .snap
});
```

Saat pertama dijalankan, file `__snapshots__/invoice.test.js.snap` dibuat. Saat berubah: `vitest -u` untuk update snapshot.

⚠️ **Jangan snapshot data dinamis** (tanggal sekarang, UUID, random). Selalu mock dulu, atau pakai `toMatchSnapshot({ id: expect.any(String) })`.

---

## Coverage — Mengukur Cakupan Test

**Coverage** mengukur persentase baris / cabang / fungsi yang "disentuh" test Anda. Bukan jaminan kualitas, tapi indikator.

```bash
npx vitest run --coverage
```

Anda perlu tambah provider coverage (Vitest v1+). Pakai `@vitest/coverage-v8` (cepat):

```bash
npm install -D @vitest/coverage-v8
```

Output berupa HTML report di `coverage/index.html`:

| Metrik | Arti |
|---|---|
| **Lines** | % baris kode yang dieksekusi saat test |
| **Branches** | % cabang `if/else`/switch yang diambil |
| **Functions** | % fungsi yang dipanggil minimal sekali |
| **Statements** | % statement total yang dijalankan |

Konfigurasi target coverage di `vitest.config.ts`:
```ts
export default defineConfig({
  test: {
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      thresholds: { lines: 80, branches: 75 },  // wajib ≥ ambang ini
    },
  },
});
```

::: warning Coverage tinggi ≠ kualitas tinggi
Baris yang dijalankan tidak berarti dites dengan benar. Test `expect(1).toBe(1)` menaikkan coverage, tapi tidak terlalu berharga. Coverage = alat bantu, bukan tujuan.
:::

---

## E2E Testing dengan Playwright (Sekilas)

Unit test menguji satu fungsi. E2E test mensimulasikan **user sungguhan** di browser penuh: buka halaman → klik tombol → isi form → menunggu response → assert tampilan.

**Playwright** (Microsoft) adalah tool E2E modern yang mendukung Chromium, Firefox, dan WebKit sekaligus.

```bash
npm install -D @playwright/test
npx playwright install   # unduh browser driver
```

Contoh skrip `tests/login.spec.ts`:
```ts
import { test, expect } from "@playwright/test";

test("user bisa login", async ({ page }) => {
  await page.goto("http://localhost:5173/login");

  await page.fill('input[name="email"]', "budi@example.com");
  await page.fill('input[name="password"]', "rahasia");
  await page.click('button[type="submit"]');

  // Tunggu redirect ke dashboard
  await expect(page).toHaveURL("/dashboard");
  await expect(page.locator("h1")).toHaveText("Selamat datang, Budi");
});
```

Cara jalankan:
```bash
npx playwright test           # jalankan semua spec
npx playwright test --headed  # tampilkan browser (bukan headless)
npx playwright show-report    # buka laporan HTML hasil test
```

::: tip
Lihat `_snapshot/_trace.zip` saat test gagal — Playwright merekam screenshot, video, DOM snapshot, network log, dan console error lengkap. Sangat memudahkan debugging.
:::

### Kapan pakai apa?
- **Unit** (∞ harian, detik): pure function, helper, util
- **Integration** (mingguan): beberapa modul ESM bekerja bersama
- **E2E** (sebelum deploy, menit/koneksi): alur kritis user (login, checkout, signup)

Piramida testing (testing pyramid):
```
        /  E2E  \      ← sedikit, lambat, mahal
       /----------\
      / Integration \  ← sedang
     /--------------\
    /    Unit Tests   \ ← banyak, cepat, murah
   /--------------------\
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
