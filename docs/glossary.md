# Glosarium / Kamus Istilah Web Development

Berikut adalah daftar istilah penting dalam dunia web development yang telah muncul di seluruh materi pembelajaran. Gunakan halaman ini sebagai referensi cepat saat Anda menemukan istilah asing.

---

## A

**Accessibility (Aksesibilitas)**
Praktik membuat website dapat dipakai oleh semua orang, termasuk pengguna screen reader, keyboard-only, dan penyandang disabilitas visual. Standar diatur oleh WCAG; implementasi teknisnya lewat HTML semantic, ARIA, dan kontras warna.

**API (Application Programming Interface)**
Antarmuka yang memungkinkan dua aplikasi berbeda saling berkomunikasi. Seperti pelayan restoran: Anda (frontend) memesan menu, pelayan (API) meneruskan ke dapur (backend), lalu mengembalikan hasilnya. Baca lebih lanjut di MDN.

**ARIA (Accessible Rich Internet Applications)**
Kumpulan atribut HTML tambahan (`role`, `aria-label`, `aria-hidden`, dll) yang membantu teknologi bantu (screen reader) memahami widget dinamis yang tidak tercakup semantic HTML murni. Hanya pakai saat semantic HTML tidak cukup.

**Async / Await**
Sintaks modern JavaScript untuk menangani operasi asynchronous (Promise) dengan cara yang lebih bersih dan mudah dibaca. Menulis kode async seolah-olah ia berjalan secara synchronous.

**Attribute**
Informasi tambahan yang ditambahkan ke dalam tag HTML untuk mengonfigurasi perilaku atau tampilan elemen. Contoh: `src` pada `<img>`, `href` pada `<a>`, `class`, dan `id`.

---

## B

**Babel**
*Transpiler* JavaScript yang menerjemahkan sintaks modern (ES6+) menjadi versi lama yang bisa berjalan di browser jadul. Penting di era sebelum semua browser mendukung ES2015. Sekarang banyak dipakai untuk transform JSX di proyek React.

**Backend**
Bagian aplikasi yang berjalan di server — tidak terlihat oleh user. Mengurus logika bisnis, database, otentikasi, dan API. Bahasa populer: Node.js (JavaScript), PHP, Python, Go, Java. Lawan: Frontend.

**BigInt**
Tipe data JavaScript untuk bilangan bulat dengan presisi arbitrer (lebih besar dari `Number.MAX_SAFE_INTEGER` = 2^53-1). Ditulis dengan akhiran `n`, misalnya `10n + 5n`.

**Browser**
Aplikasi (seperti Chrome, Firefox, Safari) yang digunakan pengguna untuk mengakses dan menampilkan halaman web. Browser bertugas menerjemahkan HTML, CSS, dan JavaScript menjadi halaman visual yang interaktif. Baca lebih lanjut di MDN.

**Bundler**
Tool yang menggabungkan banyak file JavaScript/CSS menjadi satu (atau beberapa) file final untuk produksi. Contoh: Webpack, Vite (rolldown), Rollup, esbuild, Parcel. Tugas bundler: module concatenation, tree-shaking, minification, code-splitting.

---

## C

**Cache**
Penyimpanan sementara data agar request berikutnya lebih cepat. Bisa di browser (HTTP cache, Service Worker cache), di CDN, atau di aplikasi. Strategi umum: *cache-first*, *network-first*, *stale-while-revalidate*.

**Callback**
Fungsi yang dikirimkan sebagai argumen ke fungsi lain, untuk dieksekusi nanti — biasanya setelah suatu operasi selesai. Konsep ini adalah fondasi asynchronous programming di JavaScript.

**CI/CD (Continuous Integration / Continuous Delivery)**
Praktik mengotomatiskan build, test, dan deploy kode setiap ada perubahan. CI: kode yang di-push otomatis di-build dan di-test. CD: jika test lulus, otomatis di-deploy ke server/staging. Tool populer: GitHub Actions, GitLab CI, Jenkins.

**Class**
Dalam JavaScript, class adalah template (cetak biru) untuk membuat object dengan properti dan method yang seragam. Diperkenalkan di ES6 sebagai *syntactic sugar* di atas prototype-based inheritance.

**Closure**
Fenomena di JavaScript dimana sebuah fungsi "mengingat" variabel dari scope luarnya, bahkan setelah scope luar tersebut selesai dieksekusi. Salah satu konsep paling powerful dan sering ditanyakan di interview.

**CMS (Content Management System)**
Platform yang memungkinkan pengguna membuat, mengelola, dan memodifikasi konten website tanpa harus menulis kode. Contoh populer: WordPress, Contentful, Strapi.

**CORS (Cross-Origin Resource Sharing)**
Mekanisme browser yang mengizinkan/memblokir request HTTP lintas domain. Browser memblokir request ke domain berbeda secara default demi keamanan; server harus mengirim header `Access-Control-Allow-Origin` untuk mengizinkannya. Penyebab paling sering error `fetch` pada dev.

**CSRF (Cross-Site Request Forgery)**
Serangan di mana website jahat membuat browser user yang sudah login "tanpa sadar" mengirim request ke website target (misal transfer saldo). Pencegahan: token CSRF, `SameSite` cookie, dan `Origin`/`Referer` header check.

**CSS (Cascading Style Sheets)**
Bahasa stylesheet yang digunakan untuk mengatur tampilan dan tata letak halaman web. CSS mengontrol warna, font, spasi, posisi, animasi, dan seluruh aspek visual website. Baca lebih lanjut di MDN.

**CSS Grid**
Sistem layout dua dimensi di CSS untuk mengatur elemen dalam baris DAN kolom secara serentak. Sangat cocok untuk layout halaman utama, galeri, dan dashboard kompleks. Baca lebih lanjut di MDN.

**CSS Flexbox**
Sistem layout satu dimensi di CSS untuk mengatur elemen secara fleksibel dalam satu baris ATAU satu kolom. Solusi modern untuk perataan, distribusi ruang, dan layout navigasi. Baca lebih lanjut di MDN.

---

## D

**Date**
Objek bawaan JavaScript untuk menyimpan & memanipulasi tanggal/waktu. `new Date()` memberi waktu sekarang; `toISOString()` & `Intl.DateTimeFormat` untuk formatting. Karena timezone rawan bug, banyak yang pakai librari `date-fns` atau `Temporal` (proposal).

**Debugging**
Proses mencari, menganalisis, dan memperbaiki bug (kesalahan) dalam kode. Browser DevTools dan `console.log()` adalah alat debugging paling dasar.

**DevTools**
Perangkat pengembang bawaan browser (F12) — panel Elements (HTML/CSS), Console (JS REPL), Sources (debugger), Network (HTTP request), Performance, Application (storage). Alat sehari-hari developer web.

**DOM (Document Object Model)**
Representasi struktur halaman HTML dalam bentuk pohon (tree) yang bisa dimanipulasi oleh JavaScript. Setiap tag HTML menjadi "node" yang bisa diakses, diubah, ditambah, atau dihapus secara dinamis. Baca lebih lanjut di MDN.

---

## E

**E2E (End-to-End) Testing**
Pengujian otomatis yang mensimulasikan perilaku user sungguhan di browser penuh — klik, ketik, navigasi. Berbeda dengan unit test (cek fungsi) / integration test (cek beberapa komponen). Tool populer: Playwright, Cypress, Puppeteer.

**ECMAScript (ES)**
Spesifikasi standar bahasa JavaScript yang dirawat oleh ECMA International (TC39). Versi rilis setahun sekali: ES2015 (ES6), ES2020, ES2024, dst. "JavaScript" = implementasi praktis ECMAScript + Web API.

**Element**
Satu unit HTML yang terdiri dari tag pembuka, konten, dan tag penutup. Contoh: `<p>Halo Dunia</p>` adalah satu elemen paragraf.

**ES6 (ECMAScript 2015)**
Pembaruan besar JavaScript yang dirilis tahun 2015. Memperkenalkan fitur modern seperti `let`/`const`, arrow function, template literal, destructuring, class, module import/export, dan Promise.

**Event**
Kejadian atau aksi yang terjadi di halaman web yang bisa "didengarkan" oleh JavaScript — seperti klik mouse, tekan keyboard, scroll, submit form, atau halaman selesai dimuat.

**Event Loop**
Mekanisme inti JavaScript (yang single-threaded) untuk menangani operasi async. Terus memproses antrian: call stack → microtask queue (Promise) → macrotask queue (setTimeout, klik, render). Penjelasan mendalam: lihat modul Async.

---

## F

**Fetch API**
Antarmuka JavaScript modern untuk melakukan HTTP request (GET, POST, PUT, DELETE) ke server. Menggantikan `XMLHttpRequest` yang lebih tua. Mengembalikan Promise.

**Framework**
Kerangka kerja siap pakai yang menyediakan struktur, aturan, dan komponen bawaan untuk membangun aplikasi. Framework "memanggil" kode Anda (Inversion of Control). Contoh: Laravel, Django, Next.js.

**Frontend (vs Backend)**
Frontend adalah segala sesuatu yang dilihat dan berinteraksi langsung dengan pengguna di browser (HTML, CSS, JavaScript). Backend adalah server, database, dan logika bisnis yang berjalan di belakang layar. Baca lebih lanjut di MDN.

**Function**
Blok kode yang dibuat untuk menjalankan tugas tertentu dan bisa dipanggil berulang kali. Fungsi bisa menerima input (parameter) dan mengembalikan output (return value).

---

## G

**Garbage Collection (GC)**
Mekanisme JavaScript engine yang otomatis membebaskan memori objek yang sudah tidak dirujuk lagi. Pengembang jarang mengaturnya manual, tetapi memahaminya penting untuk menghindari memory leak (mis: event listener tak dihapus, closure yang nahan referensi).

**Git**
Sistem version control terpopuler di dunia yang digunakan developer untuk melacak perubahan kode, berkolaborasi, dan mengelola versi proyek. Diciptakan oleh Linus Torvalds (pencipta Linux).

**GitHub**
Platform hosting berbasis web untuk repositori Git. Menyediakan fitur kolaborasi seperti Pull Request, Issues, Actions (CI/CD), dan menjadi "sosial media"-nya para developer.

**GraphQL**
Bahasa query API sebagai alternatif REST. Klien meminta persis field yang dibutuhkan dalam satu request (bukan beberapa endpoint REST), sehingga mengurangi *over-fetching*. Diciptakan oleh Meta/Facebook. Server: Apollo, relay; client: Apollo Client, urql.

---

## H

**HMR (Hot Module Replacement)**
Fitur dev server (Vite, Webpack) yang menukar modul yang berubah di memori tanpa me-refresh seluruh halaman. Mempertahankan state aplikasi — pengalaman dev jauh lebih cepat. Vite menyebutnya "HMR instan".

**Hoisting**
Mekanisme JavaScript yang "mengangkat" deklarasi variabel/fungsi ke atas scope-nya saat kompilasi. `var` diangkat bernilai `undefined`; `let`/`const` diangkat tapi berada di *Temporal Dead Zone* sampai deklarasi dievaluasi. Deklarasi fungsi hoisting menyeluruh, function expression tidak.

**Higher-Order Function (HOF)**
Fungsi yang menerima fungsi lain sebagai argumen ATAU mengembalikan fungsi. Contoh native: `map`, `filter`, `reduce`. Konsep kunci dari functional programming di JavaScript.

**HTML (HyperText Markup Language)**
Bahasa markup standar untuk membuat struktur dan konten halaman web. HTML menggunakan tag untuk mendefinisikan elemen seperti heading, paragraf, gambar, dan link. Baca lebih lanjut di MDN.

**HTTP / HTTPS**
Protokol komunikasi antara browser (client) dan server. HTTPS adalah versi aman dengan enkripsi SSL/TLS. Status code seperti 200 (OK), 404 (Not Found), 500 (Server Error) adalah bagian dari protokol ini.

**HTTP Method**
Kata kerja pada request HTTP yang menyatakan aksi: `GET` (ambil data), `POST` (kirim/buat data), `PUT`/`PATCH` (update), `DELETE` (hapus), `OPTIONS` (preflight CORS), `HEAD` (header saja). Idempoten vs tidak perlu dipahami saat desain REST.

---

## I

**IDE (Integrated Development Environment)**
Aplikasi desktop lengkap untuk menulis kode — dilengkapi editor kode, debugger, terminal terintegrasi, dan tools lainnya. Contoh: VS Code, WebStorm, Sublime Text.

---

## J

**JWT (JSON Web Token)**
Format token otentikasi stateless berbentuk string `xxx.yyy.zzz` (header.payload.signature). Server tidak perlu menyimpan sesi — client kirim JWT di header `Authorization: Bearer ...`. Waspada: payload JWT bisa dibaca siapa pun, jadi taruh data non-sensitif saja di sana.

**JSON (JavaScript Object Notation)**
Format pertukaran data ringan yang mudah dibaca manusia dan mudah diproses mesin. Strukturnya berbasis key-value pair. Adalah format standar komunikasi antara frontend dan backend via API.

**JavaScript (JS)**
Bahasa pemrograman yang berjalan di browser untuk membuat halaman web interaktif. Dengan Node.js, JavaScript juga bisa berjalan di server. Baca lebih lanjut di MDN.

**JavaScript Engine**
Mesin yang membaca dan menjalankan kode JS. Contoh: V8 (Chrome/Node), SpiderMonkey (Firefox), JavaScriptCore (Safari). V8 ditulis C++ dan terus dikembangkan: JIT, GC, optimasi hidden classes.

---

---

## L

**Library**
Kumpulan kode/fungsi siap pakai yang bisa Anda panggil untuk menyelesaikan tugas spesifik. Anda "memanggil" library (berbeda dengan framework yang "memanggil" Anda). Contoh: React, Lodash, Moment.js.

**Local Storage**
Penyimpanan di browser yang memungkinkan website menyimpan data secara persisten. Data tetap ada meskipun browser ditutup. Kapasitasnya sekitar 5-10 MB per domain.

**Loop (Perulangan)**
Struktur kontrol yang menjalankan blok kode berulang kali selama kondisi tertentu terpenuhi. Tipe utama: `for`, `while`, `do...while`, `for...of`, `for...in`.

---

## M

**Memory Leak**
Kondisi di mana memori yang sudah tidak terpakai tidak dibebaskan karena masih ada referensi (sengaja atau tidak). Di browser, sering disebabkan oleh: event listener tak dihapus, interval/timeout tak di-clear, closure yang menahan DOM besar, global variabel. Akibat: tab browser makin berat.

**Minification**
Proses mengompres kode untuk produksi: menghapus whitespace, rename variabel jadi pendek (`user` → `u`), hapus komentar. Hasilnya file lebih kecil → load lebih cepat. Tool: Terser, esbuild, SWC. Output biasanya `.min.js`.

**Mock**
Dalam testing, objek palsu yang menggantikan dependensi nyata (mis: API, database) agar test isolasi & cepat. Untuk dummy return value pura-pura. Contoh: `vi.fn()` di Vitest, `jest.fn()` di Jest, `sinon.stub`. Berbeda dengan *spy* (mata-mata, masih panggil asli) dan *stub* (versi sederhana).

**Mutation (DOM)**
Perubahan langsung pada DOM (tambah/hapus node, ubah teks). Operasi mahal karena memicu reflow/repaint. Framework modern (React/Vue) mengurangi manual mutation dengan Virtual DOM.

---

## N

**Node.js**
Runtime environment yang memungkinkan JavaScript berjalan di luar browser (di server/komputer). Dibangun di atas mesin V8 milik Chrome. Memungkinkan developer menggunakan JavaScript untuk full-stack development.

**NPM (Node Package Manager)**
Package manager default untuk Node.js. Tempat mengunduh, menginstal, dan mengelola library JavaScript. Registry NPM adalah koleksi package open-source terbesar di dunia.

---

## O

**Object**
Struktur data kompleks yang menyimpan koleksi properti dalam format key-value pair. Dalam JavaScript, hampir semuanya adalah object (array, fungsi, bahkan primitif punya wrapper object). Baca lebih lanjut di MDN.

**Open Source**
Model pengembangan software di mana kode sumbernya tersedia untuk publik — bisa dilihat, dimodifikasi, dan didistribusikan secara bebas. Contoh: Linux, VS Code, React, Firefox.

**Operator**
Simbol yang melakukan operasi terhadap satu atau lebih nilai (operand). Jenis: aritmatika (`+`, `-`, `*`, `/`), perbandingan (`===`, `>`, `<`), logika (`&&`, `||`, `!`), assignment (`=`).

**OAuth**
Protokol otorisasi yang memungkinkan user memberi akses terbatas ke akun mereka (di GitHub, Google, dll) tanpa memberi password ke aplikasi pihak ketiga. Sering disandingkan dengan OpenID Connect (OIDC) untuk autentikasi. Mendasari flow "Login dengan Google/GitHub".

---

---

## P

**Package**
Unit kode yang bisa diinstal melalui NPM dan digunakan di proyek. Satu package biasanya menyelesaikan satu masalah spesifik (misal: `axios` untuk HTTP request, `date-fns` untuk manipulasi tanggal).

**Polyfill**
Kode JavaScript yang menyediakan fitur modern di browser lama yang belum mendukungnya. Contoh: dulu `Promise` & `fetch` perlu polyfill es6-promise/whatwg-fetch. Dengan dukungan browser modern, makin jarang dibutuhkan.

**Promise**
Object JavaScript yang mewakili nilai yang mungkin tersedia sekarang, nanti, atau tidak sama sekali. Digunakan untuk menangani operasi asynchronous. Memiliki tiga state: pending, fulfilled, rejected.

**Prototype**
Mekanisme inheritance JavaScript: setiap object punya objek prototype, dan mewarisi properti darinya. `Array.prototype.map`, `Object.prototype.toString`. Class ES6 di atasnya membuat prototypal inheritance terlihat seperti OOP klasik. Rantai prototype = *prototype chain*.

**Pseudo-class**
Selektor CSS yang menargetkan **kondisi** elemen, ditulis `:`. Contoh: `:hover`, `:focus`, `:nth-child(2)`, `:checked`. Lawan: pseudo-element (`::before`) menargetkan bagian dari elemen.

**PWA (Progressive Web App)**
Aplikasi web yang "merasa" seperti native app: bisa di-install ke home screen, jalan offline lewat Service Worker, punya icon, push notification, dan manifest. Standar Web App Manifest + Service Worker adalah inti PWA.

---

## R

**React**
Library JavaScript untuk membangun antarmuka pengguna (UI) berbasis komponen. Dikembangkan oleh Meta (Facebook). Memperkenalkan konsep Virtual DOM, JSX, dan one-way data binding.

**Reflow & Repaint**
Dua tahap rendering browser setelah CSS dihitung. **Reflow** = menghitung ulang layout/geometri elemen (mahal). **Repaint** = menggambar ulang pixel tanpa mengubah layout (lebih murah). Mengubah `width`/`height` → reflow + repaint; mengubah `color`/`background` → repaint saja. Tips performa: pakai `transform`/`opacity` untuk animasi karena tidak menyebabkan reflow.

**RegExp (Regular Expression / Regex)**
Pola pencocokan teks. Mis: `/^\w+@\w+\.\w+$/` untuk email sederhana. Dipakai di `String.match`, `replace`, `split`, dan atribut HTML `pattern`. Bahasa mini yang Powerful tapi terkenal "write-only" — sulit dibaca jika kompleks.

**Responsive Design**
Pendekatan desain web yang membuat tampilan website menyesuaikan diri dengan ukuran layar perangkat (desktop, tablet, mobile). Dicapai dengan CSS media queries, fluid grid, dan flexible images.

**REST API**
Gaya arsitektur API yang menggunakan HTTP method standar (GET, POST, PUT, DELETE) untuk berkomunikasi dengan server. REST (REpresentational State Transfer) adalah standar paling umum untuk web API modern.

---

## S

**Scope**
Ruang lingkup atau area di mana sebuah variabel bisa diakses. JavaScript memiliki tiga jenis scope: Global Scope, Function Scope (var), dan Block Scope (let/const).

**Selector**
Pola di CSS yang digunakan untuk memilih elemen HTML mana yang akan diberi style. Jenis: tag selector (`p`), class selector (`.nama`), ID selector (`#nama`), attribute selector, pseudo-class.

**Semantic HTML**
Praktik menggunakan tag HTML sesuai dengan makna/artinya, bukan berdasarkan tampilan visual. Contoh: `<article>`, `<nav>`, `<section>` menggantikan `<div>` generik. Meningkatkan SEO dan aksesibilitas. Baca lebih lanjut di MDN.

**Semver (Semantic Versioning)**
Standar penomoran versi `MAJOR.MINOR.PATCH` (mis: `2.13.4`). PATCH: bug fix backward-compatible. MINOR: fitur baru backward-compatible. MAJOR: breaking change. Simbol NPM: `^1.2.3` (compatible minor & patch), `~1.2.3` (compatible patch saja), `1.2.3` (exact).

**Server**
Komputer yang menyimpan, memproses, dan mengirimkan data ke client (browser). Server menjalankan aplikasi backend, database, dan menangani request HTTP dari pengguna.

**Service Worker**
Script JavaScript yang berjalan di belakang layar browser (terpisah dari halaman web), bertindak sebagai proxy network. Mendasari fitur PWA: offline cache, push notification, background sync. Punya lifecycle sendiri (`install` → `activate` → `fetch`).

**SPA (Single Page Application)**
Pola aplikasi web di mana seluruh halaman dimuat satu kali, lalu navigasi antar "halaman" ditangani JavaScript dengan menukar konten (mis: React Router, Vue Router). Cepat & mulus, tapi tantangan: SEO, initial load besar, accessibility. Lawan/alternatif: MPA, SSR.

**Specificity**
Skor prioritas CSS: (inline, ID, class/attr/pseudo-class, element/pseudo-element). Saat beberapa aturan menarget elemen yang sama, specificity tertinggi menang. Detail ada di modul Pengenalan CSS.

**SSR (Server-Side Rendering)**
Pola rendering di mana HTML final dihasilkan server, lalu dikirim ke browser. Tantangan: server beban berat, butuh re-hidrasi di sisi client (konten statis dulu, lalu JS mengambil alih). Next.js/Nuxt.js mensuppor SSR. lawan: CSR (Client-Side Rendering).

**SSG (Static Site Generation)**
Pola rendering yang menghasilkan HTML statis saat build time (bukan saat request). Cocok untuk blog, dokumentasi (VitePress ini SSG), landing page. Cepat & SEO-friendly, tapi tidak cocok untuk konten yang dinamis per-user.

**State**
Data yang menentukan kondisi sebuah komponen atau aplikasi pada suatu waktu. Dalam React, state adalah data yang berubah seiring waktu dan memicu re-render UI saat berubah.

**String**
Tipe data yang merepresentasikan teks. Dalam JavaScript, string bisa ditulis dengan tanda kutip tunggal (`'...'`), ganda (`"..."`), atau backtick untuk template literal.

---

## T

**Tag**
Penanda dalam HTML yang membentuk elemen. Terdiri dari tag pembuka `<tag>` dan tag penutup `</tag>`. Beberapa tag bersifat self-closing seperti `<img>`, `<br>`, `<input>`.

**Template Literal**
Fitur ES6 untuk membuat string dengan sintaks backtick (`` ` ``) yang mendukung interpolasi variabel (`${variabel}`) dan multi-line string secara native.

**Terminal / CLI (Command Line Interface)**
Antarmuka berbasis teks untuk berinteraksi dengan sistem operasi melalui perintah. Developer menggunakannya untuk menjalankan script, Git, NPM, dan berbagai tool development.

**Transpiler**
Tool yang menerjemahkan kode dari satu sintaks ke sintaks lain (level bahasa sama). Berbeda dengan *compiler* (yang umumnya turun level). Contoh: Babel (JS modern → JS lama), TypeScript (TS → JS), SWC (Rust-based, super cepat).

**Tree-shaking**
Proses bundler menghapus kode yang tidak pernah dipakai ("cabang mati") dari bundle final. Syarat: pakai ES Modules (`import`/`export`), karena bersifat static & bisa dianalisis. Hasilnya: bundle produksi jauh lebih kecil.

**Type Coercion**
Konversi tipe otomatis JavaScript yang sering membingungkan: `1 + "1"` = `"11"` (string concat), `0 == false` → `true`, `null == undefined` → `true`. Hindari dengan `===` & `!==`. Detail di modul Dasar JavaScript.

**TypeScript**
Superset dari JavaScript yang menambahkan static typing (pengetikan statis). Membantu menangkap bug saat development sebelum kode dijalankan. Makin populer sebagai standar industri.

---

## U

**URL (Uniform Resource Locator)**
Alamat unik yang digunakan untuk mengakses resource di internet. Formatnya: `protokol://domain/path?query=value#fragment`.

---

## V

**Variable**
Wadah bernama yang menyimpan nilai data dalam program. Di JavaScript, variabel dideklarasikan dengan `let`, `const`, atau `var` (jangan dipakai). Baca lebih lanjut di MDN.

**Vite**
Build tool modern untuk JavaScript yang menawarkan dev server super cepat dengan HMR (Hot Module Replacement) instan. Alternatif yang jauh lebih ringan dan cepat dibanding Webpack.

**Vue.js**
Framework JavaScript progresif untuk membangun antarmuka pengguna. Dikenal karena kurva belajar yang landai, reaktivitas otomatis, dan Single File Component. Diciptakan oleh Evan You.

---

## W

**WCAG (Web Content Accessibility Guidelines)**
Standar internasional aksesibilitas web yang dirawat W3C. Versi terbaru: WCAG 2.2 (2023) & 3.0 draft. Tiga tingkat kepatuhan: A (minimum), AA (umumnya target legal), AAA (terbaik). Mengatur kontras warna, keyboard nav, teks alternatif, dll.

**Web Components**
Standar W3C untuk membuat komponen UI reusable lewat Custom Elements, Shadow DOM, HTML Templates, & ES Modules. Tidak butuh framework, native di browser. Framework (Lit, Stencil) di atas standar ini mempermudah penggunaannya.

**WebSocket**
Protokol komunikasi dua arah (full-duplex) yang berjalan di atas satu koneksi TCP. Beda dengan HTTP yang satu koneksi = satu request/response. Cocok untuk chat, notifikasi real-time, collaborative editing, game multiplayer.

---

## X

**XSS (Cross-Site Scripting)**
Serangan di mana attacker menyuntikkan script jahat ke halaman website yang ditampilkan ke user lain. Pencegahan: jangan `innerHTML` data user, escape output, gunakan Content-Security-Policy (CSP), pasang header `X-XSS-Protection`. Salah satu bug web paling klasik dan masih sering terjadi.
