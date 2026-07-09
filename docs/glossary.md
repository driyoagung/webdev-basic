# Glosarium / Kamus Istilah Web Development

Berikut adalah daftar istilah penting dalam dunia web development yang telah muncul di seluruh materi pembelajaran. Gunakan halaman ini sebagai referensi cepat saat Anda menemukan istilah asing.

---

## A

**API (Application Programming Interface)**
Antarmuka yang memungkinkan dua aplikasi berbeda saling berkomunikasi. Seperti pelayan restoran: Anda (frontend) memesan menu, pelayan (API) meneruskan ke dapur (backend), lalu mengembalikan hasilnya. Baca lebih lanjut di MDN.

**Async / Await**
Sintaks modern JavaScript untuk menangani operasi asynchronous (Promise) dengan cara yang lebih bersih dan mudah dibaca. Menulis kode async seolah-olah ia berjalan secara synchronous.

**Attribute**
Informasi tambahan yang ditambahkan ke dalam tag HTML untuk mengonfigurasi perilaku atau tampilan elemen. Contoh: `src` pada `<img>`, `href` pada `<a>`, `class`, dan `id`.

---

## B

**Browser**
Aplikasi (seperti Chrome, Firefox, Safari) yang digunakan pengguna untuk mengakses dan menampilkan halaman web. Browser bertugas menerjemahkan HTML, CSS, dan JavaScript menjadi halaman visual yang interaktif. Baca lebih lanjut di MDN.

---

## C

**Callback**
Fungsi yang dikirimkan sebagai argumen ke fungsi lain, untuk dieksekusi nanti — biasanya setelah suatu operasi selesai. Konsep ini adalah fondasi asynchronous programming di JavaScript.

**Class**
Dalam JavaScript, class adalah template (cetak biru) untuk membuat object dengan properti dan method yang seragam. Diperkenalkan di ES6 sebagai *syntactic sugar* di atas prototype-based inheritance.

**Closure**
Fenomena di JavaScript dimana sebuah fungsi "mengingat" variabel dari scope luarnya, bahkan setelah scope luar tersebut selesai dieksekusi. Salah satu konsep paling powerful dan sering ditanyakan di interview.

**CMS (Content Management System)**
Platform yang memungkinkan pengguna membuat, mengelola, dan memodifikasi konten website tanpa harus menulis kode. Contoh populer: WordPress, Contentful, Strapi.

**CSS (Cascading Style Sheets)**
Bahasa stylesheet yang digunakan untuk mengatur tampilan dan tata letak halaman web. CSS mengontrol warna, font, spasi, posisi, animasi, dan seluruh aspek visual website. Baca lebih lanjut di MDN.

**CSS Grid**
Sistem layout dua dimensi di CSS untuk mengatur elemen dalam baris DAN kolom secara serentak. Sangat cocok untuk layout halaman utama, galeri, dan dashboard kompleks. Baca lebih lanjut di MDN.

**CSS Flexbox**
Sistem layout satu dimensi di CSS untuk mengatur elemen secara fleksibel dalam satu baris ATAU satu kolom. Solusi modern untuk perataan, distribusi ruang, dan layout navigasi. Baca lebih lanjut di MDN.

---

## D

**Debugging**
Proses mencari, menganalisis, dan memperbaiki bug (kesalahan) dalam kode. Browser DevTools dan `console.log()` adalah alat debugging paling dasar.

**DOM (Document Object Model)**
Representasi struktur halaman HTML dalam bentuk pohon (tree) yang bisa dimanipulasi oleh JavaScript. Setiap tag HTML menjadi "node" yang bisa diakses, diubah, ditambah, atau dihapus secara dinamis. Baca lebih lanjut di MDN.

---

## E

**Element**
Satu unit HTML yang terdiri dari tag pembuka, konten, dan tag penutup. Contoh: `<p>Halo Dunia</p>` adalah satu elemen paragraf.

**ES6 (ECMAScript 2015)**
Pembaruan besar JavaScript yang dirilis tahun 2015. Memperkenalkan fitur modern seperti `let`/`const`, arrow function, template literal, destructuring, class, module import/export, dan Promise.

**Event**
Kejadian atau aksi yang terjadi di halaman web yang bisa "didengarkan" oleh JavaScript — seperti klik mouse, tekan keyboard, scroll, submit form, atau halaman selesai dimuat.

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

**Git**
Sistem version control terpopuler di dunia yang digunakan developer untuk melacak perubahan kode, berkolaborasi, dan mengelola versi proyek. Diciptakan oleh Linus Torvalds (pencipta Linux).

**GitHub**
Platform hosting berbasis web untuk repositori Git. Menyediakan fitur kolaborasi seperti Pull Request, Issues, Actions (CI/CD), dan menjadi "sosial media"-nya para developer.

---

## H

**HTML (HyperText Markup Language)**
Bahasa markup standar untuk membuat struktur dan konten halaman web. HTML menggunakan tag untuk mendefinisikan elemen seperti heading, paragraf, gambar, dan link. Baca lebih lanjut di MDN.

**HTTP / HTTPS**
Protokol komunikasi antara browser (client) dan server. HTTPS adalah versi aman dengan enkripsi SSL/TLS. Status code seperti 200 (OK), 404 (Not Found), 500 (Server Error) adalah bagian dari protokol ini.

---

## I

**IDE (Integrated Development Environment)**
Aplikasi desktop lengkap untuk menulis kode — dilengkapi editor kode, debugger, terminal terintegrasi, dan tools lainnya. Contoh: VS Code, WebStorm, Sublime Text.

---

## J

**JSON (JavaScript Object Notation)**
Format pertukaran data ringan yang mudah dibaca manusia dan mudah diproses mesin. Strukturnya berbasis key-value pair. Adalah format standar komunikasi antara frontend dan backend via API.

**JavaScript (JS)**
Bahasa pemrograman yang berjalan di browser untuk membuat halaman web interaktif. Dengan Node.js, JavaScript juga bisa berjalan di server. Baca lebih lanjut di MDN.

---

## L

**Library**
Kumpulan kode/fungsi siap pakai yang bisa Anda panggil untuk menyelesaikan tugas spesifik. Anda "memanggil" library (berbeda dengan framework yang "memanggil" Anda). Contoh: React, Lodash, Moment.js.

**Local Storage**
Penyimpanan di browser yang memungkinkan website menyimpan data secara persisten. Data tetap ada meskipun browser ditutup. Kapasitasnya sekitar 5-10 MB per domain.

**Loop (Perulangan)**
Struktur kontrol yang menjalankan blok kode berulang kali selama kondisi tertentu terpenuhi. Tipe utama: `for`, `while`, `do...while`, `for...of`, `for...in`.

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

---

## P

**Package**
Unit kode yang bisa diinstal melalui NPM dan digunakan di proyek. Satu package biasanya menyelesaikan satu masalah spesifik (misal: `axios` untuk HTTP request, `date-fns` untuk manipulasi tanggal).

**Promise**
Object JavaScript yang mewakili nilai yang mungkin tersedia sekarang, nanti, atau tidak sama sekali. Digunakan untuk menangani operasi asynchronous. Memiliki tiga state: pending, fulfilled, rejected.

---

## R

**React**
Library JavaScript untuk membangun antarmuka pengguna (UI) berbasis komponen. Dikembangkan oleh Meta (Facebook). Memperkenalkan konsep Virtual DOM, JSX, dan one-way data binding.

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

**Server**
Komputer yang menyimpan, memproses, dan mengirimkan data ke client (browser). Server menjalankan aplikasi backend, database, dan menangani request HTTP dari pengguna.

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
