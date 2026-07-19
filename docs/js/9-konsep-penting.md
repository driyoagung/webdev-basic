# 9. Konsep Penting & Fundamental

Ini adalah topik yang sering dilewatkan pemula, tetapi menjadi sumber *bug* terbesar di aplikasi React atau Vue yang mereka buat.

---

## 1. Value vs Reference (SANGAT PENTING!)

Bagaimana JS menyalin data dari satu variabel ke variabel lain sangat ditentukan oleh tipe datanya.

### Pass by Value (Tipe Dasar: String, Number, Boolean)
Mereka menyalin **Nilainya** secara mutlak. Variabel A dan B tidak saling berhubungan.

```js
let a = 10;
let b = a;  // B menyalin angka 10
b = 20;     // B diubah jadi 20

console.log(a); // Tetap 10 (Aman!)
```

### Pass by Reference (Tipe Kompleks: Object, Array)
Mereka **TIDAK** menyalin isinya, melainkan menyalin **Alamat Memori (Reference)**. Ini menyebabkan dua variabel terhubung ke rumah yang sama!

```js
const user1 = { nama: "Dio" };
const user2 = user1; // Mereka berbagi alamat memori yang SAMA!

user2.nama = "Jotaro"; 

// Bencana Terjadi:
console.log(user1.nama); // "Jotaro" (Berubah secara tidak sengaja!)
```

---

## 2. Copy Data yang Benar (Mutable vs Immutable)

Gara-gara sifat *Pass by Reference* di atas, Anda tidak boleh mengubah isi Object/Array secara langsung jika Anda ingin mempertahankan wujud aslinya (Ini disebut konsep **Immutable**).

Lalu bagaimana cara menyalin Object dengan benar?

### Shallow Copy (Kopi Dangkal) 
Menggunakan *Spread Operator* untuk memecah ikatan memori (TAPI hanya sedalam 1 tingkat / level pertama saja).

```js
const asli = { nama: "Dio", status: "Hidup" };

// BENAR (Mengkopi, bukan numpang memori)
const salinanAman = { ...asli, status: "Vampir" };

console.log(asli.status); // Tetap "Hidup" (Aman!)
```

### Deep Copy (Kopi Dalam / Tuntas)
Jika object Anda bersarang (ada object di dalam object), *Spread* tidak akan mempan untuk level ke-2 ke bawah. Cara terkuat dan tercepat saat ini (JS Modern) adalah: `structuredClone()`.

```js
const bos = {
  nama: "Diavolo",
  kemampuan: { stand: "King Crimson" } // Object bersarang
};

// Deep Copy: Memutus rantai memori seutuhnya sampai ke akar!
const kloningMurni = structuredClone(bos);
```

---

## 3. JSON (JavaScript Object Notation)

JSON adalah format teks universal yang dipahami oleh semua bahasa pemrograman (bukan hanya JS) untuk mengirim data melintasi internet.
Wujudnya persis Object JS, tapi semua *Key*-nya diapit tanda kutip dua.

```js
const dataMurni = { nama: "Agung", umur: 20 };

// 1. JS Object -> String JSON (Biasa saat POST ke Server)
const jsonString = JSON.stringify(dataMurni); 
console.log(jsonString); // '{"nama":"Agung","umur":20}'

// 2. String JSON -> JS Object (Biasa saat GET dari Server)
const objekLagi = JSON.parse(jsonString);
```

---

## 4. Local Storage (Penyimpanan Browser)

Sangat berguna untuk menyimpan setting Tema Dark/Light, atau Token Login, agar tidak hilang saat halaman di-*refresh*. 
**Catatan:** Storage hanya bisa menyimpan format **String (Teks)**.

```js
// Menyimpan Data
localStorage.setItem("tema_warna", "dark");

// Mengambil Data
const temaAktif = localStorage.getItem("tema_warna"); // "dark"

// Menghapus Data
localStorage.removeItem("tema_warna");
localStorage.clear(); // Bersihkan semua!

// TIPS: Menyimpan Object ke Storage (Gunakan JSON.stringify!)
const dataUser = { nama: "Budi", poin: 100 };
localStorage.setItem("user", JSON.stringify(dataUser));
```

---

## 5. Debugging Senjata Utama

Sebagai Developer, Anda akan lebih banyak memecahkan Error dibanding menulis kode baru. 

1. **`console.log()`** : Teman terbaik Anda. Taburkan ini di setiap baris yang mencurigakan.
2. **`console.error()`** : Menulis log tapi dengan warna merah mencolok.
3. **`console.table()`** : Sangat rapi untuk melihat isi Array of Object!
4. **Network Tab (F12)** : Jika fungsi `fetch` (API) Anda gagal, BUKA TAB INI di Inspect Element! Tab Network memperlihatkan apakah URL yang Anda tembak benar, Data Payload yang dikirim benar, dan bentuk Response yang dikembalikan server (di tab Preview).
5. **Breakpoint (Sources Tab)**: Jika `console.log` kurang canggih, tulis `debugger;` di tengah kode JS Anda (sambil membuka DevTools). Web akan *freeze* persis di baris itu sehingga Anda bisa melihat wujud memori saat itu juga selangkah demi selangkah.

---

## 6. Koreksi Terminologi: Pass by Sharing

Istilah "Pass by Value" dan "Pass by Reference" di JS sebenarnya kurang tepat. JavaScript menggunakan **Pass by Sharing**:

- **Primitif** (string, number, boolean): nilai disalin — berperilaku seperti *pass by value*.
- **Object/Array**: yang disalin adalah **referensi ke alamat memori yang sama** — PRIMITIF dari pass by reference. Tapi Anda **tidak bisa mengganti alamat referensi itu sendiri**; yang bisa diubah hanya *properti di dalamnya*.

```js
// Ini bukan pass by reference murni:
function gantiObjek(obj) {
  obj.nama = "Diubah";   // ✅ Ini mengubah properti — terlihat di luar
  obj = { nama: "Baru" }; // ❌ Ini assign ulang local variable — TIDAK terlihat di luar!
}

const orang = { nama: "Asli" };
gantiObjek(orang);
console.log(orang.nama); // "Diubah" — bukan "Baru"
```

> **Intinya:** Untuk primitif = nilai disalin penuh. Untuk object = referensi ke tempat yang sama disalin, tapi referensi itu sendiri tidak bisa di-*reassign* oleh fungsi.

---

## 7. `sessionStorage` vs `localStorage` vs `IndexedDB` vs `Cookies`

|                 | `localStorage`     | `sessionStorage`     | `IndexedDB`        | `Cookies`           |
|-----------------|--------------------|----------------------|--------------------|---------------------|
| **Kapasitas**   | ~5-10 MB           | ~5-10 MB             | Ratusan MB/GB      | ~4 KB               |
| **Scope**       | Per origin         | Per origin + tab     | Per origin         | Per origin          |
| **Expiry**      | Tidak pernah       | Saat tab ditutup     | Tidak pernah       | Bisa di-set manual  |
| **Dikirim ke server** | ❌ Tidak      | ❌ Tidak             | ❌ Tidak           | ✅ Otomatis (setiap request) |
| **API**         | Synchronous        | Synchronous          | Asynchronous       | `document.cookie`   |
| **Cocok untuk** | Setting app, tema  | Form draft, state sementara | Data besar, offline app | Auth token (httpOnly), session |

```js
// sessionStorage: hilang saat tab ditutup
sessionStorage.setItem("form-draft", JSON.stringify({ nama: "Budi" }));

// localStorage: tetap ada walau browser ditutup
localStorage.setItem("tema", "dark");

// IndexedDB: database penuh di browser (async)
// const db = await idb.openDB("app-db", 1, { /* ... */ });

// Cookie (via js): jarang dipakai langsung, lebih baik httpOnly dari server
document.cookie = "bahasa=id; max-age=86400; path=/";
```

---

## 8. Peringatan Keamanan `localStorage`

**JANGAN simpan token/JWT di `localStorage`!** Alasannya:

- `localStorage` bisa diakses oleh **semua JavaScript** di domain yang sama — termasuk script berbahaya yang disuntikkan via XSS.
- Jika penyerang berhasil inject `&lt;script&gt;` ke halaman Anda, mereka bisa membaca token dan mengirimkannya ke server mereka.

```js
// ❌ RENTAN XSS — penyerang cukup inject script dan baca ini:
localStorage.setItem("token", "eyJhbGci...");

// ✅ AMAN: serahkan ke server — set cookie httpOnly
// (server yang mengirim Set-Cookie: token=...; HttpOnly; Secure; SameSite=Strict)
// Cookie httpOnly TIDAK bisa dibaca JavaScript sama sekali.
```

> **Best practice:** Token autentikasi → httpOnly cookie dari server. Data tidak sensitif seperti tema/preferensi → localStorage boleh.

---

## 9. JSON Edge Cases

Hal-hal yang perlu diwaspadai saat `JSON.stringify` dan `JSON.parse`:

```js
const dataBermasalah = {
  nama: "Budi",
  umur: undefined,         // ❌ undefined → DIHILANGKAN
  hitung: function () {},  // ❌ Function → DIHILANGKAN
  skor: NaN,               // ❌ NaN → jadi null
  takTerbatas: Infinity,   // ❌ Infinity → jadi null
  tgl: new Date(),         // ⚠️ Date → jadi string ISO
};

const json = JSON.stringify(dataBermasalah);
console.log(json);
// {"nama":"Budi","skor":null,"takTerbatas":null,"tgl":"2025-07-09T..."}
//        ↑ umur & hitung lenyap!    ↑ NaN→null    ↑ Infinity→null

// ❌ Circular reference → ERROR!
const obj = {};
obj.diriku = obj;
// JSON.stringify(obj); // TypeError: Converting circular structure to JSON
```

### Cara Mengatasi

```js
// Gunakan replacer di JSON.stringify untuk handle khusus
// Gunakan toJSON() method di object — dipanggil otomatis oleh JSON.stringify
const event = {
  nama: "Workshop",
  tanggal: new Date(),
  toJSON() {
    return {
      nama: this.nama,
      tanggal: this.tanggal.toISOString(),
    };
  },
};
JSON.stringify(event); // {"nama":"Workshop","tanggal":"2025-07-09T..."}
```

---

## 10. `JSON.stringify(obj, replacer, space)`

Parameter ke-3 (`space`) untuk prettify/indentasi JSON:

```js
const data = { nama: "Budi", umur: 25, hobi: ["Coding", "Membaca"] };

// Compact (default):
JSON.stringify(data);
// '{"nama":"Budi","umur":25,"hobi":["Coding","Membaca"]}'

// Prettify dengan indentasi 2 spasi:
console.log(JSON.stringify(data, null, 2));
/*
{
  "nama": "Budi",
  "umur": 25,
  "hobi": [
    "Coding",
    "Membaca"
  ]
}
*/

// replacer: filter atau transform key/value
const jsonFilter = JSON.stringify(data, ["nama", "umur"]); // Hanya key tertentu
// '{"nama":"Budi","umur":25}'
```

---

## 11. Debugging Lanjutan

Selain `console.log`, DevTools punya senjata yang lebih kuat:

```js
// === console.group() — Grouping log messages ===
console.group("Proses Login");
console.log("Validasi input...");
console.log("Mengirim request ke server...");
console.group("Detail User"); // Nested group
console.log("ID: 42");
console.log("Role: Admin");
console.groupEnd(); // Tutup "Detail User"
console.groupEnd(); // Tutup "Proses Login"

// === console.trace() — Print call stack ===
function c() { console.trace("Siapa yang manggil?"); }
function b() { c(); }
function a() { b(); }
a(); // Menampilkan: a → b → c lengkap dengan file & nomor baris

// === console.dir() — Tampilan interaktif objek (khususnya DOM) ===
const box = document.querySelector("#app");
console.log(box);  // Tampilan HTML (stringified)
console.dir(box);  // Tampilan objek — bisa eksplor properti, method, listener

// === console.time() — Mengukur durasi eksekusi ===
console.time("Proses Besar");
for (let i = 0; i < 1_000_000; i++) { /* kerja berat */ }
console.timeEnd("Proses Besar"); // "Proses Besar: 4.23ms"

// === console.assert() — Log hanya jika kondisi FALSE ===
const usia = 15;
console.assert(usia >= 18, "User belum cukup umur!"); // Muncul karena false

// === performance.now() — High-precision timing (microseconds) ===
const t0 = performance.now();
// ... kode yang ingin diukur ...
const t1 = performance.now();
console.log(`Eksekusi: ${(t1 - t0).toFixed(3)}ms`);
```

---

## 12. Memory Leaks Umum

Kebocoran memori yang sering terjadi dan cara menghindarinya:

| Penyebab                              | Cara Hindari                                  |
|---------------------------------------|-----------------------------------------------|
| **Global variable** yang tidak sengaja | Gunakan `"use strict"` atau `let`/`const`    |
| **Timer/Interval** yang lupa `clear`  | Simpan ID timer, panggil `clearInterval`/`clearTimeout` |
| **Event listener terlantar**          | `removeEventListener` saat elemen dihapus     |
| **Closure** menahan referensi besar   | Null-kan variabel di dalam closure jika sudah tidak perlu |
| **Detached DOM**                      | Jangan simpan referensi DOM di variabel global |

```js
// ❌ Forgotten interval — interval terus jalan walau komponen sudah di-destroy
function startPolling() {
  setInterval(() => fetch("/api/status"), 5000); // Bocor! Tidak ada clear
}

// ✅ Simpan ID dan bersihkan
function startPollingAman() {
  const intervalId = setInterval(() => fetch("/api/status"), 5000);

  // Kembalikan fungsi cleanup agar dipanggil saat selesai
  return () => clearInterval(intervalId);
}
const stopPolling = startPollingAman();
// ... nanti saat komponen di-unmount ...
stopPolling();
```

---

## 13. `WeakRef` & `FinalizationRegistry`

Untuk advanced memory management — jarang dipakai di kode sehari-hari, tapi baik untuk diketahui.

**`WeakRef`** = referensi yang **tidak mencegah garbage collection**. Biasanya, selama ada variabel yang merujuk ke objek, objek itu tidak akan di-GC. Dengan `WeakRef`, objek bisa tetap di-GC jika tidak ada referensi kuat lain — kita hanya "melihat" sambil tidak melarang.

```js
// WeakRef: referensi lemah — tidak mencegah garbage collection
let objBesar = { data: Array(1_000_000).fill("data") };
const weakRef = new WeakRef(objBesar);

// Akses via .deref() — mungkin undefined kalau sudah di-GC
console.log(weakRef.deref()?.data?.length);

objBesar = null; // Hapus referensi kuat — objek bisa di-GC kapan saja
```

**Studi kasus praktis:** cache memoization yang **bisa dibersihkan otomatis** ketika sistem kehabisan memori:

```js
const cache = new WeakMap();        // WeakMap = versi Map dgn key "weak"
function getUserExpensiveData(user) {
  if (cache.has(user)) return cache.get(user);   // hit cache
  const result = hitungBerat(user);              // mis. JSON besar
  cache.set(user, result);
  return result;
}
// Saat objek `user` sudah tidak dirujuk di mana pun,
// cache otomatis dibersihkan oleh GC → no memory leak.
```

**`FinalizationRegistry`** = callback yang dipanggil **saat objek di-garbage collect**. Berguna untuk resource cleanup di-level tinggi (mis. WebAssembly buffer, file handle).

```js
const registry = new FinalizationRegistry((nilai) => {
  console.log("Objek telah di-GC:", nilai);
});

registry.register(objData, "ID: user-42"); // Daftarkan objek untuk dipantau
// Saat objData di-GC → log: "Objek telah di-GC: ID: user-42"
```

::: warning
**Tidak deterministik.** Anda tidak boleh mengandalkan `FinalizationRegistry` untuk logika bisnis kritis (misal "selalu simpan ke disk saat di-GC"). V8 boleh menunda GC sampai runtime memutuskan butuh memori. Pakai lebih untuk observasi/debugging, bukan lifecycle utama.
:::

> **Jarang digunakan.** Cukup tahu keberadaannya. Gunakan hanya jika Anda benar-benar butuh kontrol atas lifecycle memori.

---

## 14. BigInt — Bilangan Bulat yang Sangat Besar

`Number` JavaScript disimpan dalam format double-precision float — presisi hanya sampai `2^53 - 1` = `9_007_199_254_740_991`. Di atas batas itu, perhitungan **mulai membulatkan** tanpa peringatan:

```js
console.log(9007199254740991 + 1); // 9007199254740992  OK
console.log(9007199254740991 + 2); // 9007199254740992  ❌ salah! seharusnya ...993
```

Untuk angka lebih besar dari itu ( kriptografi, microsecond timestamp, financial), gunakan **`BigInt`**:

```js
const besar = 123456789012345678901234567890n;  // suffix `n`
console.log(besar + 1n);                          // 123456789012345678901234567891n

console.log(typeof 10n);   // "bigint"
console.log(typeof 10);    // "number"
console.log(10n === 10);    // false (beda tipe)
console.log(10n == 10);    // true  (coercion, tapi jangan pakai)
```

### Aturan & jebakan BigInt
```js
10n + 5n;     // 15n     ✅ BigInt + BigInt
10n + 5;      // ❌ TypeError: Cannot mix BigInt and other types
10n / 3n;     // 3n      ⚠️ pembagian BigInt TIDAK ada desimal (dipotong)
Number(10n);  // 10      konversi ke Number (kehilangan presisi kalau >2^53)
BigInt(10);   // 10n     konversi dari Number/int
```

::: tip JSON tidak mendukung BigInt
`JSON.stringify({ n: 10n })` → error. Anda harus konversi manual ke string: `10n.toString()` → `"10"`, lalu parse balik di sisi penerima.
:::

---

## 15. `Date` — Manipulasi Tanggal & Waktu

Tanggal adalah satu topik yang rawan bug (timezone!, DST, format). JavaScript punya `Date` (meskipun ibaratnya "berantakan") — digunakan sangat sering untuk deadline, timestamp log, dsb.

```js
const now = new Date();
console.log(now);                    // 2025-07-19T... (ISO string)
console.log(now.getTime());          // angka (ms sejak 1 Jan 1970 UTC) — epoch ms

// Parse dari string ISO (REKOMENDASI: selalu pakai ISO 8601)
const tgl = new Date("2025-12-31T23:59:59Z");   // Z = UTC

// Komponen (perhatikan: getMonth() mulai dari 0!)
console.log(now.getFullYear(), now.getMonth() + 1, now.getDate());

// Format ISO untuk simpan/kirim ke API
console.log(now.toISOString());       // "2025-07-19T08:42:13.456Z"
```

### Jebakan Timezone
```js
new Date("2025-12-31");               // di-parse sebagai UTC midnight → bisa jadi 31 Des 00:00 lokal ATAU 30 Des malam tergantung offset
new Date("2025-12-31T00:00:00");      // local midnight (aman, jelas)
new Date("2025-12-31T00:00:00Z");    // UTC midnight
```

::: warning Tips anti-pusing
- Simpan & kirim data tanggal **selalu dalam ISO 8601 UTC** (`toISOString` menghasilkan ini).
- Format & tampilkan ke UI di sisi client, sesuai timezone user lewat `Intl.DateTimeFormat`.
- Untuk operasi kompleks (add 1 bulan, "akhir bulan ini", DST) pakai library `date-fns` atau `Temporal` API (proposal TC39, akan ganti `Date` di masa depan).
:::

### Format yang mudah dibaca dengan `Intl.DateTimeFormat`

```js
const fmtID = new Intl.DateTimeFormat("id-ID", {
  weekday: "long", year: "numeric", month: "long", day: "numeric",
});
console.log(fmtID.format(new Date()));   // "Sabtu, 19 Juli 2025"

new Intl.DateTimeFormat("id-ID", { dateStyle: "full", timeStyle: "short" })
  .format(new Date());   // "Sabtu, 19 Juli 2025 pukul 15.42"
```

Lihat section [#16 Intl](#_16-intl-internationalization-api) di bawah untuk lengkap.

---

## 16. RegExp — Pola Teks (Regular Expression)

Tidak bisa dipisahkan dari JS praktis: validasi email sebelum submit, ambil semua `<a href>` dari HTML, hapus whitespace di tepi string, pattern matching untuk password strong.

```js
// Cara tulis: /pola/flag, atau new RegExp("pola", "flag")
const reEmail = /^\S+@\S+\.\S+$/;
console.log(reEmail.test("budi@example.com"));   // true
console.log(reEmail.test("budi"));                // false

const reAngka = /\d+/g;
console.log("Ada 3 apel dan 15 jeruk".match(reAngka));  // ["3", "15"]
console.log("ada 3 apel".replace(reAngka, "X"));        // "ada X apel"
```

| Flag | Arti |
|---|---|
| `g` | global — cari semua kecocokan (default hanya pertama) |
| `i` | case-insensitive |
| `m` | multiline — `^`/`$` cocok per baris |
| `s` | dotAll — `.` cocok newline juga |
| `u` | unicode (untuk emoji & karakter non-ASCII) |

### Pola yang sering dipakai
```js
/^\d{4}-\d{2}-\d{2}$/        // tanggal YYYY-MM-DD
/^[A-Z][a-z]+$/              // Nama PascalCase
/\b\w+@\w+\.\w+\b/           // email (versi sederhana, tidak 100% akurat)
/<(\w+)>[\s\S]*?<\/\1>/g     // HTML tag dengan nama grup (backreference)
/^\s+|\s+$/g                 // whitespace di tepi → untuk trim manual
```

`String.prototype.trim()` menyediakan trim tanpa regex; di atas cuma contoh.

::: tip Latihan regex
[regex101.com](https://regex101.com/) — playground interaktif dengan penjelasan tiap karakter. Pilih flavor "ECMAScript" / "JavaScript".
:::

::: warning
Validasi email dengan regex tunggal 100% akurat itu **mustahil** (RFC 5322 punya edge case aneh). Pakai pola sederhana untuk UI feedback cepat, lalu **validasi sungguhan di server** (mis: kirim email verifikasi).
:::

---

## 17. `Intl` — Internationalization API

API bawaan JS untuk format **sesuai locale** — angka, mata uang, tanggal, collation. Wajib untuk produk yang melayani user Indonesia (atau multi-bahasa).

```js
// Angka → format Indonesia (titik pemisah ribuan, koma desimal)
new Intl.NumberFormat("id-ID").format(1234567.89);  // "1.234.567,89"
new Intl.NumberFormat("en-US").format(1234567.89);  // "1,234,567.89"

// Mata uang
new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" })
  .format(50000);                    // "Rp 50.000,00"

// Persen & unit
new Intl.NumberFormat("id-ID", { style: "percent" }).format(0.45);  // "45%"
new Intl.NumberFormat("id-ID", { style: "unit", unit: "kilometer-per-hour" })
  .format(60);                       // "60 km/jam"

// Tanggal
new Intl.DateTimeFormat("id-ID", { dateStyle: "long" }).format(new Date());
// "19 Juli 2025"

// Collator — sort sesuai alphabet lokal
const bahasa = ["z", "é", "a", "ñ"];
bahasa.sort(new Intl.Collator("id").compare);   // ["a", "é", "ñ", "z"]

// Plural rules — "1 item" vs "2 items"
new Intl.PluralRules("en-US").select(0);   // "other"
new Intl.PluralRules("en-US").select(1);   // "one"
new Intl.PluralRules("en-US").select(5);   // "other"
```

`Intl` tersedia di semua browser modern & Node.js ≥ 13. Performa lebih baik daripada pakai library custom — dibakar di level V8.

---

## 18. Generator Function & `yield`

Generator adalah fungsi yang bisa **pause & resume**. Ditandai dengan `function*` dan kata kunci `yield`. Berguna untuk: stream data lazy, sequence tak hingga, iterator custom, dan dipakai banyak di Redux Saga.

```js
function* hitungMaju() {
  yield 1;
  yield 2;
  yield 3;
}

const g = hitungMaju();
console.log(g.next()); // { value: 1, done: false }
console.log(g.next()); // { value: 2, done: false }
console.log(g.next()); // { value: 3, done: false }
console.log(g.next()); // { value: undefined, done: true }

// Loop dengan for..of
for (const n of hitungMaju()) console.log(n);   // 1 2 3
```

### Sequence tak hingga (lazy)

```js
function* fibonacci() {
  let [a, b] = [0, 1];
  while (true) {           // tak hingga, tapi aman karena lazy
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacci();
console.log(fib.next().value);  // 0
console.log(fib.next().value);  // 1
console.log(fib.next().value);  // 1
console.log(fib.next().value);  // 2
console.log(fib.next().value);  // 3
// Pakai 1 juta kali pun tak OOM selama kita next() satu per satu
```

### Dua-arah komunikasi dengan generator
```js
function* tanya() {
  const nama = yield "Siapa namamu?";
  return `Halo, ${nama}`;
}

const it = tanya();
console.log(it.next().value);         // "Siapa namamu?"
console.log(it.next("Budi").value);   // "Halo, Budi"
```

### Iterator async dengan `await` (async generators)
```js
async function* streamData(url) {
  const res = await fetch(url);
  for await (const chunk of res.body) {     // stream chunks
    yield new TextDecoder().decode(chunk);
  }
}

for await (const text of streamData("/api/big")) {
  console.log(text);    // proses tiap chunk saat tersedia
}
```

::: tip
Generator adalah pondasi banyak fitur modern JS: `for await...of`, `Symbol.iterator`, dan library seperti `redux-saga`. Kalaupun Anda tak menulis generator sendiri, memahaminya penting untuk membaca kode library.
:::

---

## 19. Testing: Langkah Selanjutnya

Konsep fundamental yang sudah Anda pelajari di atas adalah fondasi untuk memahami **automated testing**. Testing memastikan kode Anda berfungsi dengan benar sebelum sampai ke user — dan mencegah *regression* (bug yang muncul lagi setelah diperbaiki).

Dua framework testing paling populer di ekosistem JavaScript:

| Framework | Cocok untuk                | Kelebihan                            |
|-----------|----------------------------|--------------------------------------|
| **Vitest** | Project Vite, JS/TS modern | Cepat, konfigurasi minimal, kompatibel Jest |
| **Jest**   | Project umum, React        | Ekosistem matang, banyak plugin      |

> **Lanjutkan ke:** `docs/js/testing-dasar.md` untuk mempelajari Unit Test, Integration Test, mocking, dan TDD dengan Vitest. 🧪
