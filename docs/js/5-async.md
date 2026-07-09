# 5. Asynchronous JavaScript (WAJIB)

Konsep Asinkron adalah jantung dari aplikasi web interaktif yang menarik data dari server (API). 

JavaScript itu **Synchronous** (Satu baris jalan, baris lain menunggu). Jika proses sinkron terjebak lambat (misal: antri download), seluruh UI akan macet (*Freeze*). Solusinya adalah mendelegasikan tugas berat ke proses **Asynchronous (berjalan di background)**.

## Evolusi Asynchronous

### 1. Callback (Cara Klasik - Callback Hell)
Cara paling lama menangani proses delay.

```js
function ambilDataUser(callback) {
  setTimeout(() => {
    callback("Data User A");
  }, 1000);
}

// Kekurangan: Jika proses bersambung, akan terjadi penumpukan (Callback Hell)
ambilDataUser((user) => {
  ambilDetailUser(user, (detail) => {
    ambilFoto(detail, (foto) => {
       console.log(foto); // Makin lama makin menjorok ke dalam (Pyramid of Doom)
    });
  });
});
```

### 2. Promise (Janji)
Objek Promise merepresentasikan operasi masa depan yang akan sukses (`resolve`) atau gagal (`reject`).

```js
// 1. Membuat Promise
const janjiCuaca = new Promise((resolve, reject) => {
  const cuacaCerah = true;
  
  if (cuacaCerah) {
    resolve("Ayo kita pergi liburan!");
  } else {
    reject("Hujan, di rumah saja.");
  }
});

// 2. Mengonsumsi Promise (Menggunakan .then dan .catch)
janjiCuaca
  .then((hasil) => {
    console.log(hasil); // Jika Resolved!
  })
  .catch((error) => {
    console.log(error); // Jika Rejected!
  });
```

### 3. Async / Await (Modern ES8 - Wajib!)
Cara modern membaca Promise agar kodenya terlihat lurus seperti Synchronous (tidak ada Callback Hell, tidak perlu banyak `.then()`).

1. Tambahkan `async` di depan nama fungsi.
2. Tambahkan `await` di depan perintah Promise (JS akan menjeda fungsi ini di background sampai janjinya ditepati).

```js
// Fungsi Async
async function prosesLiburan() {
  try {
    // Tunggu janji ditepati
    const hasil = await janjiCuaca; 
    console.log(hasil); // Output: "Ayo kita pergi liburan!"
    
  } catch (error) {
    // Jika janji gagal (rejected), masuk ke blok catch ini
    console.log(error); 
  }
}

prosesLiburan();
```

## `Promise.all()` (Paralel)
Jika Anda punya 3 proses Async yang **tidak saling bergantung**, Anda bisa menjalankannya secara serentak (paralel) ketimbang satu per satu, sangat menghemat waktu!

```js
const ambilProduk = fetch('/api/produk');
const ambilUser = fetch('/api/user');
const ambilKategori = fetch('/api/kategori');

async function ambilSemua() {
  try {
    // Ketiganya berjalan bersamaan, dan baru selesai jika ketiganya selesai!
    const [produk, user, kategori] = await Promise.all([ambilProduk, ambilUser, ambilKategori]);
    
    console.log("Semua data siap digunakan!");
  } catch(e) {
    console.log("Salah satu gagal, maka semua batal.");
  }
}
```

## Event Loop — Konsep Inti Async
JavaScript itu **single-threaded** dengan satu Call Stack. Agar tidak blocking, tugas lambat didelegasikan ke Web APIs (browser) atau libuv (Node.js).

Urutan eksekusi:
1. **Call Stack** — menjalankan kode sinkron
2. **Web APIs** — menangani `setTimeout`, `fetch`, DOM event (di background)
3. **Task Queue (Callback Queue)** — callback dari Web APIs (macrotask) antri di sini
4. **Microtask Queue** — Promise `.then`/`.catch`, `queueMicrotask` (lebih prioritas!)
5. Event Loop terus mengecek: Call Stack kosong? → jalankan Microtask dulu → baru Macrotask

```js
console.log("1: Sinkron");

setTimeout(() => console.log("2: setTimeout 0"), 0);

Promise.resolve().then(() => console.log("3: Promise microtask"));

console.log("4: Sinkron akhir");

// Output:
// 1: Sinkron
// 4: Sinkron akhir
// 3: Promise microtask
// 2: setTimeout 0
```

> **Kesimpulan:** `setTimeout(fn, 0)` tidak langsung jalan — ia antri di Macrotask Queue setelah semua microtask selesai.

## Microtask vs Macrotask
| Microtask (prioritas tinggi) | Macrotask (prioritas rendah) |
|---|---|
| `Promise.then()`, `.catch()`, `.finally()` | `setTimeout`, `setInterval` |
| `queueMicrotask()` | I/O, UI rendering |
| `async/await` (setelah await) | `setImmediate` (Node.js) |

```js
// Urutan: Sinkron → Microtask → Macrotask → Microtask → ...
setTimeout(() => console.log("Macro: setTimeout"), 0);
queueMicrotask(() => console.log("Micro: queueMicrotask"));
Promise.resolve().then(() => console.log("Micro: Promise.then"));
console.log("Sync");

// Output: "Sync" → "Micro: queueMicrotask" → "Micro: Promise.then" → "Macro: setTimeout"
```

## Status Promise
Setiap Promise punya 3 kemungkinan status (internal, tidak bisa langsung dicek dari kode):

| Status | Keterangan |
|--------|------------|
| **Pending** | Belum selesai (initial state) |
| **Fulfilled** | Berhasil — `resolve()` dipanggil |
| **Rejected** | Gagal — `reject()` dipanggil |

Sekali settled (fulfilled/rejected), status tidak bisa berubah lagi.

## `Promise.race()` — Siapa Cepat Dia Dapat
Resolve/reject saat promise **pertama** selesai.

```js
const cepat = new Promise((res) => setTimeout(() => res("Cepat"), 100));
const lambat = new Promise((res) => setTimeout(() => res("Lambat"), 500));

Promise.race([cepat, lambat]).then(console.log); // "Cepat" (setelah 100ms)

// Contoh: timeout race — batalkan fetch jika > 3 detik
function fetchWithTimeout(url, timeout = 3000) {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Request timeout")), timeout)
  );
  return Promise.race([fetch(url), timeoutPromise]);
}
```

## `Promise.allSettled()` — Tunggu Semua (Sukses atau Gagal)
Berbeda dengan `Promise.all` (gagal satupun = semua batal), `allSettled` menunggu **semua** selesai dan memberi hasil masing-masing.

```js
const p1 = Promise.resolve("Sukses");
const p2 = Promise.reject("Gagal");
const p3 = Promise.resolve("OK");

Promise.allSettled([p1, p2, p3]).then((results) => {
  results.forEach((r, i) => {
    console.log(`Promise ${i + 1}:`, r.status, r.value || r.reason);
  });
});
// Promise 1: fulfilled "Sukses"
// Promise 2: rejected "Gagal"
// Promise 3: fulfilled "OK"
```

## `Promise.any()` — Pertama Sukses (Abaikan Gagal)
Resolve saat promise **pertama yang FULFILLED**. Jika semua reject, baru throw `AggregateError`.

```js
const api1 = Promise.reject("Server 1 down");
const api2 = new Promise((res) => setTimeout(() => res("Data dari Server 2"), 200));
const api3 = new Promise((res) => setTimeout(() => res("Data dari Server 3"), 100));

Promise.any([api1, api2, api3]).then(console.log); // "Data dari Server 3" (paling cepat sukses)
```

## `.finally()` — Cleanup
Dijalankan setelah promise selesai, **sukses maupun gagal**. Cocok untuk: hide loading spinner, cleanup resource.

```js
fetch("/api/data")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err))
  .finally(() => {
    console.log("Selesai (berhasil atau gagal)");
    document.getElementById("loader").style.display = "none";
  });
```

## Async Function Selalu Return Promise
Apapun yang di-`return` dari `async function` otomatis dibungkus `Promise`.

```js
async function ambilAngka() {
  return 42; // Sebenarnya return Promise.resolve(42)
}

ambilAngka().then(console.log); // 42

// Ini sama dengan:
function ambilAngkaManual() {
  return Promise.resolve(42);
}
```

## `await` di `forEach` — PROBLEM!
`forEach` tidak menunggu promise. `await` di dalam callback `forEach` tidak membuat loop berhenti/ditunggu.

```js
const items = [1, 2, 3];

// ❌ SALAH — tidak menunggu! Output bisa acak
async function salah() {
  items.forEach(async (item) => {
    await delay(100);
    console.log(item);
  });
  console.log("Selesai"); // Ini muncul duluan!
}

// ✅ BENAR — for...of menunggu tiap iterasi
async function benar() {
  for (const item of items) {
    await delay(100);
    console.log(item);
  }
  console.log("Selesai"); // Muncul setelah semua selesai
}
```

## Web APIs Timer
```js
// setTimeout — tunda eksekusi sekali
const t = setTimeout(() => console.log("Setelah 1 detik"), 1000);
clearTimeout(t); // Batalkan sebelum jalan

// setInterval — ulangi setiap X ms
const interval = setInterval(() => console.log("Tiap detik"), 1000);
clearInterval(interval); // Hentikan

// requestAnimationFrame — optimal untuk animasi (60fps)
function animate() {
  // Update animasi di sini...
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
```

## Top-Level Await (ES2022)
Di **ES Modules** (`type="module"` atau `.mjs`), `await` bisa dipakai di level paling atas tanpa membungkus dalam `async function`.

```html
<script type="module">
  const data = await fetch("/api/config");
  const config = await data.json();
  console.log(config); // Langsung bisa, tanpa async function pembungkus
</script>
```

```js
// file.mjs atau ES module
const response = await fetch("https://api.example.com");
export const result = await response.json();
```