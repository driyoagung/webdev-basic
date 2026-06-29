# Lanjut: Asynchronous JavaScript

Ini adalah topik yang paling membedakan Web Developer pemula dengan profesional. 

JavaScript secara default bersifat **Synchronous (Satu per satu)**. Ia akan menjalankan baris 1, lalu baris 2, lalu baris 3. Jika baris 2 memakan waktu 5 detik (misalnya mengambil data dari server database), maka seluruh website akan macet / *freeze* selama 5 detik menunggu baris 2 selesai. 

Itu sangat buruk! Untuk itulah diciptakan konsep **Asynchronous (Paralel / Jalan bersamaan)**. Kode yang lama akan dieksekusi di *background* tanpa memblokir kode selanjutnya.

## Konsep Async: The Restaurant Metaphor
Bayangkan JS adalah seorang Pelayan Restoran (Waiter).
- **Synchronous**: Pelayan mencatat pesanan Meja 1, pergi ke dapur, **DIAM MENUNGGU** selama 20 menit sampai koki selesai memasak, mengantar makanan ke Meja 1, barulah beralih menanyakan pesanan Meja 2. (Gila!)
- **Asynchronous**: Pelayan mencatat pesanan Meja 1, **menyerahkannya ke dapur (background process)**, lalu langsung pergi mencatat pesanan Meja 2 dan Meja 3. Ketika dapur membunyikan bel (makanan siap), pelayan akan berhenti sejenak untuk mengantar makanan tersebut ke Meja 1. (Efisien!)

---

## 1. Callbacks (Cara Klasik - Hindari)
Cara pertama JS menangani Async. Anda memasukkan sebuah fungsi di dalam fungsi lain, yang akan dipanggil (called back) nanti setelah proses selesai. Sering berujung pada **Callback Hell** (kode bertumpuk ke dalam seperti piramida).

```js
ambilDataDatabase(function(data) {
  formatData(data, function(dataFormatted) {
    simpanData(dataFormatted, function() {
      console.log("Semua selesai!");
    });
  });
}); // Sangat sulit dibaca jika prosesnya panjang
```

---

## 2. Promises (Cara Modern ES6)
Promise (Janji) adalah objek yang merepresentasikan keberhasilan atau kegagalan sebuah proses Async di masa depan. 

Bayangkan saat Anda pesan GoFood. Gojek memberi Anda *Promise* "Pesanan sedang diproses". Anda bisa lanjut nonton TV. Nanti hasilnya ada dua:
1. **Resolved (.then)**: Makanan sampai!
2. **Rejected (.catch)**: Pesanan dibatalkan warung.

```js
// Simulasi request API
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    // Jika berhasil terkoneksi, ubah data ke bentuk JSON
    return response.json(); 
  })
  .then((data) => {
    // Cetak datanya
    console.log(data);
  })
  .catch((error) => {
    // Jika gagal (Misal internet mati)
    console.error("Gagal mengambil data:", error);
  });
```

---

## 3. Async / Await (Standar Terkini - Wajib Dikuasai)
Meskipun `.then` sudah bagus, JS mengeluarkan cara yang jauh lebih elegan pada tahun 2017: **Async/Await**.

Ini memungkinkan Anda menulis kode Asynchronous dengan gaya penulisan layaknya kode Synchronous biasa yang dibaca dari atas ke bawah. Ini adalah standar industri masa kini.

Aturannya:
1. Fungsi pembungkus harus diberi kata kunci `async`.
2. Gunakan kata kunci `await` di depan perintah yang memakan waktu (seperti fetch API). JS akan menjeda fungsi tersebut sampai data tiba, tapi *tanpa memblokir* sisa website.
3. Gunakan blok `try...catch` untuk menangani Error.

```js
// 1. Deklarasikan fungsi sebagai async
async function ambilDaftarPengguna() {
  try {
    // 2. Tunggu (await) sampai server merespon
    console.log("Mengambil data...");
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    // 3. Tunggu lagi (await) sampai data diubah jadi JSON
    const data = await response.json();
    
    // 4. Data siap dipakai!
    console.log("Data berhasil diambil:", data[0].name);

  } catch (error) {
    // 5. Tangkap error jika internet mati atau server mati
    console.log("Terjadi Kesalahan:", error);
  }
}

// Jalankan fungsinya
ambilDaftarPengguna();
```

> **Catatan Penting**: Kode yang berada di bawah pemanggilan `ambilDaftarPengguna()` di luar fungsi tersebut akan tetap langsung dieksekusi secara instan, karena fungsi tersebut berjalan secara asynchronous di background!
