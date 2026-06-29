# 7. Fetch API

Aplikasi web jarang yang hanya berdiri sendiri; mereka butuh berkomunikasi dengan database melalui server (Backend/API).
Di JavaScript modern, standar komunikasi ini menggunakan **Fetch API**. (Menggantikan cara kuno `XMLHttpRequest` atau library `jQuery.ajax`).

Fetch API selalu mengembalikan **Promise**, sehingga Anda **WAJIB** menggabungkannya dengan `async/await` agar kodenya bersih.

---

## 1. Melakukan Permintaan Sederhana (GET)

Jika Anda hanya memanggil `fetch(url)`, secara default metode yang digunakan adalah **GET** (hanya mengambil data).

```js
async function ambilDataCuaca() {
  try {
    // 1. Tembak API
    const respons = await fetch("https://api.cuaca.com/jakarta");
    
    // 2. Parse (Ubah) data mentah menjadi JSON Object
    const data = await respons.json();
    
    // 3. Gunakan data tersebut
    console.log("Suhu hari ini:", data.suhu);
    
  } catch (error) {
    console.error("Gagal mengambil data:", error);
  }
}
```

---

## 2. Mengirim Data ke Server (POST)

Untuk mengirim data (seperti Form Login / Pendaftaran), Anda harus mengubah metode dari GET ke POST, menyertakan **Headers** (untuk memberi tahu server jenis datanya), dan mengubah Object JavaScript (body) menjadi string teks mentah (**JSON.stringify**).

```js
async function daftarUserBaru(namaUser, emailUser) {
  // Data mentah JavaScript
  const dataBaru = {
    name: namaUser,
    email: emailUser
  };

  try {
    const respons = await fetch("https://api.website.com/users", {
      method: "POST", // Tipe Metode HTTP
      headers: {
        // Beri tahu server bahwa kita mengirim format JSON
        "Content-Type": "application/json"
      },
      // Ubah Object JS menjadi bentuk teks JSON
      body: JSON.stringify(dataBaru) 
    });

    const hasil = await respons.json();
    console.log("Berhasil daftar!", hasil);

  } catch (error) {
    console.error("Gagal mendaftar:", error);
  }
}
```

---

## 3. Ragam HTTP Methods

Dalam dunia pembuatan API (biasa disebut RESTful API), standar operasinya mengikuti 4 metode utama (CRUD):

1. **GET (Read)**: Mengambil data dari server (tanpa `body`).
2. **POST (Create)**: Mengirim data baru ke server.
3. **PUT / PATCH (Update)**: Mengubah data yang sudah ada di server. `PUT` mengubah seluruh objek, `PATCH` mengubah sebagian.
4. **DELETE (Delete)**: Menghapus data di server.

### Contoh Menghapus Data (DELETE)
Sangat simpel, biasanya tidak perlu `body` dan cukup memanggil ID data di URL.

```js
async function hapusUser(id) {
  const respons = await fetch(`https://api.website.com/users/${id}`, {
    method: "DELETE" // Hanya panggil metode DELETE
  });
  
  if (respons.ok) {
    console.log("User berhasil dihapus");
  }
}
```

> **Tips:** Object `respons` dari hasil fetch memiliki properti pembantu `respons.ok` yang bernilai `true` jika status jaringan HTTP berada di angka 200-299 (Sukses). Jika nilainya 404 (Not Found) atau 500 (Server Error), nilainya akan `false`.
