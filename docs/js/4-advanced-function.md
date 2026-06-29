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
