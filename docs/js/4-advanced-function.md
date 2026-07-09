# 4. Function yang Lebih Dalam

Selain fungsi dasar, JavaScript (sebagai bahasa fungsional) memiliki konsep function tingkat lanjut yang menjadi otak dari arsitektur React dan Node.js.

## 1. First-Class Function & Anonymous Function
Di JavaScript, Fungsi adalah "Warga Kelas Satu". Artinya fungsi bisa disimpan ke dalam variabel (Anonymous Function).

```js
// Anonymous Function (Fungsi tanpa nama) yang disimpan di variabel
const sapa = function() {
  console.log("Halo Dunia!");
};
sapa();
```

## 2. Callback Function
Callback adalah fungsi yang dikirimkan ke dalam fungsi lain sebagai **argumen/parameter**, lalu dipanggil (*called back*) nanti di dalam fungsi penerima tersebut.

```js
function prosesData(nama, callback) {
  console.log("Memproses: " + nama);
  // Panggil fungsi callback setelah proses selesai
  callback(); 
}

function beritahuSelesai() {
  console.log("Proses Selesai!");
}

// Memasukkan fungsi beritahuSelesai TANPA tanda kurung ()
prosesData("Gambar", beritahuSelesai);
```

> **Catatan:** `setTimeout` atau method array `.map()` adalah contoh nyata penggunaan Callback!

## 3. Higher Order Function (HOF)
HOF adalah fungsi yang **menerima fungsi lain sebagai argumen** (seperti Callback) ATAU **mengembalikan fungsi lain**. 

```js
// map() adalah HOF karena dia menerima fungsi (n => n * 2)
const angka = [1, 2].map(n => n * 2);
```

## 4. Pure Function
Fungsi murni yang **tidak memiliki efek samping (side effects)**. Syaratnya:
1. Jika diberi input `x`, outputnya PASTI `y` (konsisten).
2. Tidak mengubah variabel dari luar fungsi (Global variable).

```js
// ❌ Impure (Tidak Murni - bergantung & mengubah var luar)
let pajak = 0.1;
function hitungTotal(harga) {
  return harga + (harga * pajak); // Jika 'pajak' diubah dari luar, hasil fungsi berubah!
}

// ✅ Pure Function (Murni - hanya bergantung pada parameter)
function hitungTotalPure(harga, pajak) {
  return harga + (harga * pajak);
}
```
*(Konsep ini sangat penting saat mempelajari State Management seperti Redux di React).*

## 5. Lexical Scope
Lexical Scope (Cakupan Leksikal) berarti fungsi **mengingat lokasi di mana dia diciptakan/ditulis**, bukan di mana dia dipanggil. Fungsi yang berada di dalam fungsi lain bisa membaca variabel milik bapaknya.

```js
function bapak() {
  const namaBapak = "Budi";

  function anak() {
    // Fungsi anak punya akses (Lexical Scope) ke variabel bapaknya
    console.log("Bapak saya adalah " + namaBapak);
  }
  anak();
}
bapak();
```

## 6. Closure
**Closure** adalah "Memori Ajaib". Saat HOF mengembalikan sebuah fungsi, fungsi yang dikembalikan tersebut **tetap mengingat variabel dari fungsi induknya**, meskipun fungsi induknya sudah selesai dijalankan dan "mati"!

```js
// Ini adalah HOF yang mengembalikan fungsi
function greet(name) {
    const sapaanPagi = "Selamat Pagi, ";
    
    // Fungsi internal ini adalah Closure
    return () => {
        // Ia masih ingat 'name' dan 'sapaanPagi' meskipun 'greet()' nanti selesai
        console.log(sapaanPagi + name);
    };
}

const sapaDio = greet("Dio"); // greet() selesai di sini!
// Tapi 'sapaDio' masih ingat nilai "Dio"
sapaDio(); // Output: Selamat Pagi, Dio
```

> **Kenapa Penting?** Konsep Closure adalah pondasi dari berfungsinya `React Hooks` (seperti `useState` dan `useEffect`). Hooks mengandalkan closure untuk mengingat state meskipun komponen React sudah di-render ulang.

## IIFE (Immediately Invoked Function Expression)
Fungsi yang langsung dijalankan saat didefinisikan. Dahulu dipakai untuk isolasi scope sebelum era ES Modules.

```js
// Arrow IIFE
(() => {
  const rahasia = "Tidak bocor ke global scope";
  console.log(rahasia);
})();

// Function IIFE
(function () {
  console.log("Langsung jalan!");
})();

// IIFE dengan parameter
((nama) => {
  console.log("Halo " + nama);
})("Budi");
```

## `this` Keyword Secara Eksplisit: `call()`, `apply()`, `bind()`
Ketiga method ini memungkinkan kita menentukan nilai `this` secara manual.

```js
const orang1 = { nama: "Budi" };
const orang2 = { nama: "Andi" };

function sapa(salam, tanda) {
  console.log(`${salam} ${this.nama}${tanda}`);
}

// call(context, arg1, arg2, ...) — langsung panggil
sapa.call(orang1, "Halo", "!"); // "Halo Budi!"

// apply(context, [arg1, arg2, ...]) — sama tapi argumen pakai array
sapa.apply(orang2, ["Hai", "~"]); // "Hai Andi~"

// bind(context) — return fungsi baru (TIDAK langsung jalan)
const sapaBudi = sapa.bind(orang1, "Selamat Pagi");
sapaBudi("!!"); // "Selamat Pagi Budi!!"

// Bind di callback
const tombol = { teks: "Klik Saya", klik() { console.log(this.teks); } };
// setTimeout(tombol.klik, 100); // ❌ this = window → undefined
setTimeout(tombol.klik.bind(tombol), 100); // ✅ this = tombol
```

## `arguments` Object vs Rest Parameter
```js
// arguments — array-like (bukan array asli!), tersedia di function biasa
function jadul() {
  console.log(arguments);         // Arguments(3) [1, 2, 3] — bukan array!
  // arguments.map(...);          // ❌ Error: arguments.map is not a function
  const arr = Array.from(arguments); // Harus dikonversi dulu
}

// Rest parameter — array asli, lebih modern
function modern(...args) {
  console.log(args);              // [1, 2, 3] — array asli!
  console.log(args.map(n => n * 2)); // [2, 4, 6] ✅
  // Tidak tersedia arguments di arrow function!
}

jadul(1, 2, 3);
modern(1, 2, 3);
```

## Debounce & Throttle
### Debounce — tunda eksekusi sampai "hening" selama X ms
Cocok untuk: search input, resize event, auto-save form.

```js
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Contoh: fetch data setelah user berhenti mengetik 500ms
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", debounce((e) => {
  console.log("Fetching...", e.target.value);
}, 500));
```

### Throttle — batasi eksekusi maksimal 1 kali per X ms
Cocok untuk: scroll event, button click spam.

```js
function throttle(fn, limit) {
  let inThrottle = false;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Contoh: hanya log scroll maksimal setiap 200ms
window.addEventListener("scroll", throttle(() => {
  console.log("Scroll position:", window.scrollY);
}, 200));
```

## Currying
Mengubah fungsi multi-parameter menjadi serangkaian fungsi satu parameter.

```js
// Fungsi biasa
function tambah(a, b, c) {
  return a + b + c;
}

// Versi Curried
function tambahCurry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(tambahCurry(1)(2)(3)); // 6

// Currying dengan arrow function (lebih ringkas)
const kali = a => b => c => a * b * c;
console.log(kali(2)(3)(4)); // 24

// Kegunaan: partial application
const tambahSepuluh = tambahCurry(10);
const tambahSepuluhLima = tambahSepuluh(5);
console.log(tambahSepuluhLima(3)); // 18
```

## Memoization
Caching hasil fungsi untuk menghindari komputasi ulang dengan input yang sama.

```js
function memoize(fn) {
  const cache = {};
  return function (arg) {
    if (arg in cache) {
      console.log("Dari cache!");
      return cache[arg];
    }
    console.log("Komputasi...");
    const result = fn(arg);
    cache[arg] = result;
    return result;
  };
}

const fibonacci = memoize((n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(40)); // Komputasi... (lalu hasilnya di-cache)
console.log(fibonacci(40)); // Dari cache! (instan)
```

## Function Composition
Menggabungkan beberapa fungsi menjadi satu, hasil kanan mengalir ke kiri.

```js
// compose(f, g)(x) = f(g(x))
const compose = (f, g) => x => f(g(x));

const kaliDua = x => x * 2;
const tambahTiga = x => x + 3;

const tambahLaluKali = compose(kaliDua, tambahTiga);
console.log(tambahLaluKali(5)); // 16 → (5 + 3) * 2

// Pipe (kiri ke kanan): pipe(f, g)(x) = g(f(x))
const pipe = (f, g) => x => g(f(x));
const kaliLaluTambah = pipe(kaliDua, tambahTiga);
console.log(kaliLaluTambah(5)); // 13 → (5 * 2) + 3

// Multi-function compose
const composeMany = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
```

## Pure Function & Side Effects Lebih Dalam
Dalam konteks React/Redux, **reducer HARUS pure function** — tidak boleh mengubah state langsung (mutasi), dan tidak boleh ada side effects (API call, random, timestamp, localStorage).

```js
// ❌ Side Effects (TIDAK boleh di Redux reducer)
function reducerBuruk(state, action) {
  state.count++;               // Mutasi langsung — NO!
  fetch("/api/save");          // API call — NO!
  localStorage.setItem("x", 1);// localStorage — NO!
  return { ...state, random: Math.random() }; // Non-deterministik — NO!
}

// ✅ Pure (Redux-safe)
function reducerBaik(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 }; // Immutable update
    default:
      return state;
  }
}
```
