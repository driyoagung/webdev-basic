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
