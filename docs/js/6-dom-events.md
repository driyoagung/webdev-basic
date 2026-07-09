# 6. DOM Manipulation & Events

Meskipun framework modern (React/Vue) akan mengurus DOM untuk Anda secara otomatis (*Virtual DOM*), pemahaman dasar DOM (*Document Object Model*) wajib dikuasai untuk memahami cara web bekerja di balik layar.

DOM adalah representasi struktur HTML Anda dalam bentuk Objek yang bisa dimanipulasi oleh JavaScript.

---

## 1. Memilih Elemen HTML (Selection)

```html
<div id="app"></div>
<p class="teks">Satu</p>
<p class="teks">Dua</p>
```

```js
// 1. querySelector (Cara Modern - Sangat Kuat)
// Memilih SEBUAH elemen (yang pertama cocok dengan selector CSS)
const pSatu = document.querySelector(".teks"); 

// 2. querySelectorAll
// Memilih SEMUA elemen menjadi bentuk NodeList (mirip Array)
const semuaP = document.querySelectorAll(".teks"); 

// 3. getElementById (Cara Lama tapi cepat)
const appBox = document.getElementById("app");
```

---

## 2. Memanipulasi DOM (Manipulation)

### Mengubah Konten & Attribute
```js
const box = document.querySelector("#app");

// Mengubah teks murni
box.textContent = "Halo Dunia!";

// Mengubah Struktur HTML
box.innerHTML = "<strong>Halo Dunia!</strong>";

// Mengubah Dataset (Atribut data-*)
// <div id="app" data-id-user="5">
console.log(box.dataset.idUser); // "5"
```

### Mengubah Style CSS
```js
box.style.backgroundColor = "blue";
box.style.marginTop = "20px"; // kebab-case diubah jadi camelCase
```

### ClassList (Menambah/Hapus Class CSS)
```js
// <div id="app" class="kotak">
box.classList.add("aktif");    // <div class="kotak aktif">
box.classList.remove("kotak"); // <div class="aktif">
box.classList.toggle("gelap"); // Tambah jika tidak ada, Hapus jika sudah ada
```

---

## 3. Menambah dan Menghapus Elemen (Create & Remove)

```js
// 1. Membuat elemen <li> baru di memory
const liBaru = document.createElement("li");
liBaru.textContent = "Item List Baru";

// 2. Memasukkan elemen ke HTML yang ada
const ul = document.querySelector("ul");
ul.appendChild(liBaru); // Masuk jadi anak paling bawah

// 3. Menghapus elemen
const tombolSampah = document.querySelector("#btn-sampah");
tombolSampah.remove(); // Lenyap dari halaman!
```

---

## 4. Events (Mendengarkan Aksi User)

JavaScript bisa bereaksi terhadap tindakan pengguna menggunakan `addEventListener`.

### Event Dasar: `click`, `input`, `change`, `keydown`
```js
const inputNama = document.querySelector("#input-nama");
const tombolSubmit = document.querySelector("#btn-submit");

// Memicu saat pengguna mengetik huruf
inputNama.addEventListener("input", () => {
  console.log("Sedang mengetik...");
});

// Memicu saat tombol diklik
tombolSubmit.addEventListener("click", () => {
  alert("Data Tersimpan!");
});
```

### The `event` Object (Objek Kejadian)
Setiap kali event terjadi, JS mengirimkan argumen tak terlihat berupa "Buku Catatan Kejadian" (biasanya disingkat `e` atau `event`) yang berisi informasi lengkap tentang aksi tersebut.

```js
const formBox = document.querySelector("#form-login");

formBox.addEventListener("submit", (e) => {
  // 1. preventDefault()
  // MENCEGAH perilaku default HTML (seperti merefresh halaman saat form disubmit!)
  e.preventDefault(); 
  
  // 2. target
  // Elemen spesifik mana yang sebenarnya diklik
  console.log("Form yang disubmit:", e.target);
});
```

### `stopPropagation()`
Mencegah efek "Bubbling". Jika ada Tombol di dalam Box, dan keduanya punya Event `click`, saat Anda mengeklik tombol, box juga akan ikut terklik. `stopPropagation()` mencegah event itu merambat naik.

```js
tombol.addEventListener("click", (e) => {
  e.stopPropagation(); // Hanya tombol yang terklik, parent box-nya tidak
});
```

---

## Preview: DOM Interaktif (Dark Mode Toggle)

*(Silakan klik tombol di bawah untuk melihat manipulasi DOM (Event Click & Class Toggle) secara langsung)*

<script setup>
import { ref } from 'vue'

const isDark = ref(false)
const inputTeks = ref('')
</script>

<div class="preview-box">
<div :style="{ padding: '20px', textAlign: 'center', border: '2px solid #ccc', borderRadius: '8px', transition: 'all 0.3s ease', backgroundColor: isDark ? '#222' : 'white', color: isDark ? 'white' : 'black', borderColor: isDark ? '#444' : '#ccc' }">
<h3 style="margin-top:0;">{{ isDark ? 'Dark Mode Aktif 🌙' : 'Light Mode Aktif ☀️' }}</h3>
<div style="margin: 20px 0;">
<p style="margin-bottom: 5px; font-size: 0.85rem;"><strong>Event 'input'</strong> (Ketik di bawah):</p>
<input v-model="inputTeks" placeholder="Ketik sesuatu..." style="padding: 8px; border-radius: 4px; border: 1px solid #ccc; width: 80%;" />
<p style="margin-top: 10px; font-weight: bold; color: #2196F3;">{{ inputTeks || '(Teks akan muncul di sini)' }}</p>
</div>
<button @click="isDark = !isDark" :style="{ padding: '10px 20px', fontWeight: 'bold', cursor: 'pointer', border: 'none', borderRadius: '4px', backgroundColor: isDark ? '#FF9800' : '#2196F3', color: 'white' }">Ganti Tema (Event 'click')</button>
</div>
</div>

---

## 5. Event Delegation (Delegasi Event)

Daripada menempelkan event listener ke puluhan elemen anak satu per satu, tempelkan **satu listener ke elemen parent**. Pattern ini sangat efisien karena:

- Hanya ada **1 listener** (bukan N listener untuk N anak).
- **Anak baru** yang dibuat via JS *otomatis* ikut tertangani — tanpa perlu `addEventListener` ulang.

```js
// ❌ Cara boros: listener per <li>
document.querySelectorAll("li").forEach(li => {
  li.addEventListener("click", () => console.log("Klik:", li.textContent));
});

// ✅ Cara delegasi: 1 listener di <ul>
const daftar = document.querySelector("#daftar-belanja");

daftar.addEventListener("click", (e) => {
  // closest() mencari parent terdekat yang cocok dengan selector
  const item = e.target.closest("li");
  if (!item) return; // klik bukan pada <li> — abaikan
  console.log("Klik:", item.textContent);
});

// 🆕 Item baru yang di-append nanti TETAP akan tertangani!
const liBaru = document.createElement("li");
liBaru.textContent = "Roti Tawar";
daftar.appendChild(liBaru); // ✅ langsung bisa diklik!
```

---

## 6. Event Capturing vs Bubbling

Setiap kali event terjadi di halaman, ia melewati **3 fase**:

```
┌─────────────────────────────────────────┐
│  Fase 1: CAPTURE (Turun dari root)      │
│  window → document → <html> → <body>    │
│       ↓                                 │
│  Fase 2: TARGET (Elemen yang diklik)    │
│       ↓                                 │
│  Fase 3: BUBBLE  (Naik ke root)         │
│  <body> → <html> → document → window    │
└─────────────────────────────────────────┘
```

Secara **default**, `addEventListener` mendengarkan saat fase **Bubble** (naik). Untuk mendengarkan di fase **Capture** (turun), beri parameter ketiga:

```js
// Default: mendengarkan saat fase BUBBLE
elemen.addEventListener("click", handler);

// Mendengarkan saat fase CAPTURE
elemen.addEventListener("click", handler, { capture: true });
// atau cara lama:
elemen.addEventListener("click", handler, true);
```

> **Tips praktis:** 99% kasus cukup pakai fase bubble. Fase capture jarang dibutuhkan kecuali untuk intercept event sebelum mencapai target.

---

## 7. `removeEventListener` & Memory Leak

Jika Anda menambah event listener pada elemen yang suatu saat **dihapus dari DOM**, listener itu **tidak otomatis hilang** — ia akan tetap tersangkut di memori. Ini disebut *detached DOM memory leak*.

```js
// ❌ Memory leak: listener tetap ada walau tombol sudah di-remove
const tombol = document.querySelector("#tombol-sementara");
tombol.addEventListener("click", () => {
  console.log("Diklik!");
  tombol.remove(); // Elemen hilang, tapi listener MASIH di memori!
});

// ✅ Pola cleanup yang benar
function setupTombolSementara() {
  const tombol = document.querySelector("#tombol-sementara");

  function handlerKlik() {
    console.log("Diklik!");
    tombol.remove();
    tombol.removeEventListener("click", handlerKlik); // Bersihkan!
  }

  tombol.addEventListener("click", handlerKlik);
}
```

> **Rule of thumb:** Jika Anda `remove()` sebuah elemen, pastikan listener-nya juga di-*remove* atau referensinya dibersihkan.

---

## 8. Opsi `once: true`

Listener yang otomatis *self-destruct* setelah dipanggil **satu kali**. Cocok untuk tombol yang hanya boleh diklik sekali (misal: "Claim Hadiah").

```js
tombolKlaim.addEventListener("click", () => {
  alert("Hadiah diklaim!");
}, { once: true });

// Setelah klik pertama, listener otomatis dihapus.
// Klik kedua dan seterusnya: tidak terjadi apa-apa.
```

---

## 9. Custom Events

Anda bisa membuat event sendiri untuk komunikasi antar komponen — tanpa perlu coupling langsung.

```js
// === File: komponen-keranjang.js ===
const keranjang = document.querySelector("#keranjang");

// Kirim event custom dengan data
const event = new CustomEvent("item-ditambahkan", {
  detail: { id: 42, nama: "Sepatu Lari", harga: 350000 },
  bubbles: true // biar bisa ditangkap parent
});
keranjang.dispatchEvent(event);

// === File: komponen-notifikasi.js ===
// Tangkap event dimana saja (asal bubbles: true)
document.addEventListener("item-ditambahkan", (e) => {
  console.log(`📦 ${e.detail.nama} masuk keranjang!`);
  // Tampilkan toast notifikasi, update badge counter, dll.
});
```

---

## 10. Peringatan Keamanan XSS pada `innerHTML`

Jangan pernah memasukkan **user input mentah** ke `innerHTML`. Penyerang bisa menyisipkan `&lt;script&gt;` berbahaya (XSS — *Cross-Site Scripting*).

```js
// ❌ BAHAYA: user bisa menyuntikkan HTML/script
const inputUser = '<img src=x onerror="alert(\'Dibobol!\')">';
box.innerHTML = inputUser; // Script penyerang DIEKSEKUSI!

// ✅ AMAN: gunakan textContent (tidak mengeksekusi HTML)
box.textContent = inputUser; // Ditampilkan sebagai teks biasa

// ✅ Alternatif: sanitize dengan library seperti DOMPurify
// import DOMPurify from 'dompurify';
// box.innerHTML = DOMPurify.sanitize(inputUser);
```

> **Ingat:** `innerHTML` hanya untuk HTML yang **Anda kontrol sendiri**. Untuk konten dari user, API, atau URL parameter → selalu `textContent`.

---

## 11. Modern DOM API

Selain `appendChild()` dan `createElement()`, JS modern punya method yang lebih ekspresif:

```js
const ul = document.querySelector("ul");

// === insertAdjacentHTML(posisi, htmlString) ===
// Tidak perlu createElement dulu — langsung inject HTML string
ul.insertAdjacentHTML("beforeend", "<li>Item dari HTML string</li>");

// Empat posisi yang tersedia:
// "beforebegin" → sebelum elemen
// "afterbegin"  → di dalam elemen, sebelum anak pertama
// "beforeend"   → di dalam elemen, setelah anak terakhir (mirip appendChild)
// "afterend"    → setelah elemen

// === Method modern untuk manipulasi elemen ===
const item = document.querySelector("li");

item.before("<p>Sebelum item</p>");   // Sisipkan di luar, sebelum elemen
item.after("<p>Setelah item</p>");    // Sisipkan di luar, setelah elemen
item.prepend("⭐ ");                   // Sisipkan di dalam, sebelum anak pertama
item.append(" ✅");                    // Sisipkan di dalam, setelah anak terakhir
item.replaceWith("<li>Pengganti</li>"); // Ganti elemen ini sepenuhnya
```

> **`append()` vs `appendChild()`:** `append()` bisa menerima string dan banyak argumen sekaligus. `appendChild()` hanya menerima satu Node dan return Node tersebut.

---

## 12. Observer APIs

### MutationObserver — Mengawasi Perubahan DOM

Berguna saat Anda perlu bereaksi terhadap perubahan DOM yang dilakukan oleh library pihak ketiga.

```js
const daftar = document.querySelector("#daftar-belanja");

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutasi) => {
    if (mutasi.type === "childList") {
      console.log("Anak baru ditambahkan:", mutasi.addedNodes);
      console.log("Anak dihapus:", mutasi.removedNodes);
    }
  });
});

observer.observe(daftar, {
  childList: true,   // pantau penambahan/penghapusan anak
  attributes: true,  // pantau perubahan atribut
  subtree: true      // pantau seluruh keturunan (deep)
});

// Nanti jika ada yang appendChild/removeChild ke daftar, callback akan terpicu
```

### IntersectionObserver — Deteksi Elemen Masuk Viewport

Sempurna untuk **lazy loading gambar** atau **infinite scroll**.

```js
const gambar = document.querySelectorAll("img[data-src]");

const observerGambar = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src; // Ganti src asli
      observerGambar.unobserve(img); // Stop pantau setelah loaded
    }
  });
}, { threshold: 0.5 }); // 0.5 = terpicu saat 50% elemen terlihat

gambar.forEach((img) => observerGambar.observe(img));
```

### ResizeObserver — Deteksi Perubahan Ukuran Elemen

Lebih akurat daripada `window.onresize` karena fokus pada **satu elemen spesifik**.

```js
const panel = document.querySelector("#panel-samping");

const observerUkuran = new ResizeObserver((entries) => {
  const { width, height } = entries[0].contentRect;
  console.log(`Panel berubah: ${width}px x ${height}px`);
});

observerUkuran.observe(panel);
```

---

## 13. Form Events: `submit`, `change`, `input`

Perbedaan krusial antara `change` dan `input`:

| Event    | Kapan Terpicu?                                   | Cocok untuk            |
|----------|--------------------------------------------------|------------------------|
| `input`  | **Real-time** setiap karakter diketik            | Validasi live, counter |
| `change` | Setelah **blur** (fokus pindah) + nilai berubah  | Final save, form dirty |
| `submit` | Saat form di-submit (Enter atau klik Submit)     | Kirim data ke server   |

```js
const form = document.querySelector("#form-profil");

// Real-time: perbarui karakter tersisa saat mengetik
form.nama.addEventListener("input", (e) => {
  const sisa = 50 - e.target.value.length;
  document.querySelector("#counter").textContent = `Sisa ${sisa} karakter`;
});

// Saat blur: validasi final setelah user selesai mengetik
form.nama.addEventListener("change", () => {
  console.log("User selesai mengisi nama:", form.nama.value);
});

// Submit form: prevent refresh + kirim data
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Mengirim data...");
});
```

---

## 14. Keyboard & Focus Events

```js
const inputCari = document.querySelector("#input-cari");

// Keyboard events
inputCari.addEventListener("keydown", (e) => {
  console.log("Tombol ditekan:", e.key);
  if (e.key === "Escape") inputCari.blur(); // Tutup search
});
inputCari.addEventListener("keyup", (e) => {
  console.log("Tombol dilepas:", e.key);
});

// Focus events: elemen mendapat/meninggalkan fokus
inputCari.addEventListener("focus", () => {
  console.log("Input mendapatkan fokus — tampilkan suggestion");
});
inputCari.addEventListener("blur", () => {
  console.log("Input kehilangan fokus — sembunyikan suggestion");
});

// focusin & focusout: SAMA seperti focus & blur, tapi BUBBLE ke parent
// Berguna untuk delegasi — pasang di form untuk pantau semua input di dalamnya
form.addEventListener("focusin", () => {
  console.log("Ada input di dalam form yang difokuskan");
});
form.addEventListener("focusout", () => {
  console.log("Ada input di dalam form yang kehilangan fokus");
});
```

### `tabindex` & Tab Order

Atribut `tabindex` mengontrol urutan fokus elemen saat user menekan Tab:

```html
<!-- 0: ikut dalam urutan Tab normal (default untuk input/button) -->
<div tabindex="0">Saya bisa difokuskan dengan Tab</div>

<!-- -1: TIDAK bisa Tab, tapi BISA difokuskan via JS (elemen.focus()) -->
<div tabindex="-1">Hanya via JS</div>

<!-- Angka positif (> 0): ANTRIAN KHUSUS (tidak disarankan) -->
<div tabindex="1">Pertama</div>
<div tabindex="3">Ketiga</div>
<div tabindex="2">Kedua</div>
```

> **Best practice:** Hanya gunakan `tabindex="0"` dan `tabindex="-1"`. Hindari angka positif karena mengacaukan urutan Tab alami.
