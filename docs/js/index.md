# ⚡ JavaScript Dasar

**JavaScript** adalah bahasa pemrograman yang membuat halaman web menjadi interaktif dan hidup. Jika HTML adalah kerangka dan CSS adalah kulit/dekorasi, maka JavaScript adalah **otot dan otak** dari sebuah website.

JavaScript memungkinkan Anda untuk:
- Merespons klik, ketikan, dan geseran pengguna
- Mengambil dan mengirim data ke server tanpa reload halaman (AJAX/Fetch)
- Memanipulasi tampilan halaman secara real-time (DOM)
- Membangun aplikasi web modern dengan React, Vue, dan framework lainnya

---

## Sekilas Sejarah Singkat

Brendan Eich menulis JavaScript dalam **10 hari** pada Mei 1995 di Netscape. Awalnya dinamai Mocha → LiveScript → JavaScript (marketing decision untuk menumpang popularitas Java, meskipun dua bahasa tersebut tidak berhubungan sama sekali).

Setelah era "browser war" antara Netscape vs Internet Explorer, JavaScript akhirnya distandardisasi menjadi **ECMAScript**. Tahun 2015, versi besar ES2015 (ES6) meremajakan JavaScript dengan `let`/`const`, arrow function, class, module, Promise, dan banyak lagi. Sejak itu, TC39 (komite standar) merilis versi baru tiap tahun: ES2020, ES2022, ES2024, dst. Era modern JavaScript dimulai.

## ECMAScript vs JavaScript — Apa bedanya?

- **ECMAScript** adalah **spesifikasi** (dokumen aturan) — defines syntax & semantics bahasa. Diurus oleh ECMA International (TC39 committee).
- **JavaScript** adalah **implementasi praktis** ECMAScript + Web API (DOM, fetch, localStorage, dll).

Bayangkan: ECMAScript adalah blueprint mobil; JavaScript adalah mobilnya. V8, SpiderMonkey, JavaScriptCore adalah mesin yang menjalankannya di browser/Node.

## Cara Menjalankan JavaScript

Pilih salah satu cara saat membaca materi ini:

### 1. Browser Console — paling cepat untuk eksperimen
Buka halaman apa pun di Chrome/Firefox → tekan `F12` → tab **Console**. Tik kode → Enter → lihat hasil instan. Cocok untuk mencoba sintaks satu baris.

```js
1 + 1                // → 2
Array(3).fill("a")   // → ["a", "a", "a"]
```

### 2. File HTML dengan `<script>`
```html
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Belajar JS</title></head>
<body>
  <script src="app.js"></script>           <!-- external (best practice) -->
  <script>
    console.log("inline juga bisa");
  </script>
</body>
</html>
```
Buka file di browser → buka DevTools Console → lihat output.

### 3. Node.js — untuk kode tanpa browser
Setelah pasang [Node.js](https://nodejs.org/):
```bash
node app.js          # jalankan file
node                 # REPL: prompt interaktif
```
Berguna saat belajar modul yang tidak butuh DOM (misal variabel, function, async).

### 4. Editor online tanpa install
- [CodeSandbox](https://codesandbox.io) — proyek full Vite/React/Vue
- [StackBlitz](https://stackblitz.com) — VS Code di browser
- [CodePen](https://codepen.io) — HTML/CSS/JS in one pen
- [playcode.io](https://playcode.io) — cepat untuk snippet

---

## 📚 Daftar Modul

| # | Modul | Ringkasan |
|---|---|---|
| 1 | [Dasar JavaScript](/js/1-dasar) | Variabel, tipe data, operator, conditional, loop, function |
| 2 | [Object & Array](/js/2-object-array) | Object, array, array methods (map, filter, reduce, dll) |
| 3 | [ES6+ Modern](/js/3-es6) | Arrow function, destructuring, spread, optional chaining |
| 4 | [Function Mendalam](/js/4-advanced-function) | Callback, HOF, closure, debounce, throttle, currying |
| 5 | [Asynchronous JS](/js/5-async) | Callback, Promise, async/await, event loop |
| 6 | [DOM & Events](/js/6-dom-events) | Manipulasi HTML, event handling, event delegation |
| 7 | [Fetch API](/js/7-fetch-api) | HTTP request, GET/POST, error handling, AbortController |
| 8 | [Error, Module, OOP](/js/8-error-module-oop) | Try/catch, import/export, class, inheritance |
| 9 | [Konsep Penting](/js/9-konsep-penting) | Value vs reference, localStorage, JSON, debugging |
| 10 | [Testing Dasar](/js/testing-dasar) | Unit testing dengan Vitest |
| 11 | [Tooling & Dev](/js/tooling) | Node.js, npm, Vite, ESLint, Prettier |

---

## 🚀 Mulai Cepat

Jika Anda baru pertama kali belajar JavaScript, ikuti urutan ini:

1. **[Dasar JavaScript](/js/1-dasar)** — Pahami variabel, tipe data, dan control flow
2. **[Object & Array](/js/2-object-array)** — Kuasai struktur data yang paling sering dipakai
3. **[ES6+ Modern](/js/3-es6)** — Pelajari sintaks modern yang dipakai di semua framework
4. **[Function Mendalam](/js/4-advanced-function)** — Pahami closure, callback, dan HOF
5. **[Asynchronous JS](/js/5-async)** — Kunci komunikasi dengan server
6. **[DOM & Events](/js/6-dom-events)** — Mulai membuat halaman interaktif
7. **[Fetch API](/js/7-fetch-api)** — Ambil dan kirim data ke server

Modul 8-11 akan semakin penting saat Anda mulai membangun proyek nyata.

---

## 🛠️ Yang Anda Butuhkan

- **Browser modern** (Chrome, Firefox, Edge) — sudah termasuk DevTools
- **Text editor** (VS Code direkomendasikan)
- **Node.js** (untuk modul tooling dan testing) — [Download di sini](https://nodejs.org/)

> 💡 **Tips:** Buka DevTools (F12) → Console untuk mencoba kode JavaScript langsung saat membaca materi!
