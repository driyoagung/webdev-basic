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
