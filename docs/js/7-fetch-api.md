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

---

## 4. Error Handling yang Benar

**Jebakan umum:** `fetch()` HANYA melempar error pada **network error** (internet mati, DNS gagal, timeout koneksi). HTTP error seperti `404 Not Found` atau `500 Internal Server Error` **TIDAK** membuat fetch reject — Anda harus cek manual!

```js
// ❌ Kode ini TIDAK menangkap 404 atau 500!
async function ambilDataSalah() {
  try {
    const res = await fetch("https://api.contoh.com/user/99999");
    const data = await res.json(); // Tetap jalan walau status 404!
  } catch (err) {
    console.log("Ini hanya terpicu jika internet mati.");
  }
}

// ✅ Pola yang benar: cek response.ok + throw manual
async function ambilDataBenar() {
  try {
    const res = await fetch("https://api.contoh.com/user/99999");

    if (!res.ok) {
      // Lempar error dengan info status agar bisa ditangkap catch
      throw new Error(`HTTP Error! Status: ${res.status} — ${res.statusText}`);
    }

    const data = await res.json();
    return data;

  } catch (err) {
    console.error("Gagal fetch:", err.message);
    // Tampilkan pesan UI yang ramah ke user
  }
}
```

---

## 5. `response.status` & `response.headers`

Object `Response` menyimpan banyak metadata selain body:

```js
const res = await fetch("https://api.contoh.com/users");

console.log(res.status);        // 200
console.log(res.statusText);    // "OK"
console.log(res.ok);            // true
console.log(res.url);           // URL final (berguna setelah redirect)

// Membaca headers response
console.log(res.headers.get("content-type"));     // "application/json"
console.log(res.headers.get("x-ratelimit-remaining")); // Custom header

// Iterasi semua headers
for (const [key, value] of res.headers) {
  console.log(`${key}: ${value}`);
}
```

---

## 6. Non-JSON Response

Tidak semua API mengembalikan JSON. Fetch menyediakan method untuk berbagai format:

```js
// 📝 Teks biasa (HTML, CSV, plain text)
const teks = await (await fetch("/changelog.txt")).text();

// 🖼️ Gambar / File biner
const blob = await (await fetch("/foto-profil.png")).blob();
const urlGambar = URL.createObjectURL(blob);
document.querySelector("img").src = urlGambar;

// 📋 Form Data
const form = await (await fetch("/data")).formData();
console.log(form.get("nama"));
```

---

## 7. AbortController — Membatalkan Fetch

Untuk membatalkan request yang sedang berjalan (timeout, user cancel, navigasi halaman):

```js
async function fetchDenganTimeout(url, timeoutMs = 5000) {
  const controller = new AbortController();
  const sinyal = controller.signal;

  // Timer: batalkan fetch jika melebihi batas waktu
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, { signal: sinyal });
    clearTimeout(timer); // Bersihkan timer jika sukses
    return await res.json();
  } catch (err) {
    if (err.name === "AbortError") {
      console.error(`⏰ Request timeout setelah ${timeoutMs}ms`);
    } else {
      console.error("Gagal:", err.message);
    }
  }
}

// Contoh: batalkan jika user klik tombol "Batal"
let controllerBatal = null;

tombolCari.addEventListener("click", async () => {
  controllerBatal = new AbortController();
  const res = await fetch("/api/cari?q=...", { signal: controllerBatal.signal });
});

tombolBatal.addEventListener("click", () => {
  controllerBatal?.abort(); // Batalkan request yang sedang jalan
});
```

---

## 8. CORS (Cross-Origin Resource Sharing)

Browser memblokir request dari `domain-A.com` ke `api-domain-B.com` secara default demi keamanan. Ini disebut **CORS policy**.

```js
// Jika API Anda ada di domain berbeda, server harus mengirim header:
// Access-Control-Allow-Origin: https://domain-anda.com

// Opsi fetch terkait CORS:
fetch("https://api-eksternal.com/data", {
  mode: "cors",            // Default: izinkan cross-origin (asal server mendukung)
  credentials: "include",  // Sertakan cookie/httpOnly token
});

// mode lain:
// "same-origin" → hanya request ke domain sendiri
// "no-cors"     → opaque response (tidak bisa baca body, kasus langka)
```

**Preflight Request:** Untuk method selain GET/POST atau header custom tertentu, browser otomatis mengirim `OPTIONS` request dulu ke server untuk "minta izin" sebelum request asli dikirim.

---

## 9. Auth dengan `Authorization` Header

Menyertakan token autentikasi (JWT, API Key) di header:

```js
const TOKEN = "eyJhbGciOi..."; // Simpan di httpOnly cookie, BUKAN localStorage!

async function ambilProfil() {
  const res = await fetch("https://api.contoh.com/profil", {
    headers: {
      Authorization: `Bearer ${TOKEN}`, // Standar: "Bearer <token>"
    },
  });

  if (res.status === 401) {
    console.log("Token expired — redirect ke login");
    return;
  }

  return await res.json();
}
```

> **Keamanan:** Jangan simpan token di localStorage (rawan XSS). Gunakan **httpOnly cookie** dari server.

---

## 10. Retry Pattern Sederhana

Wrapper untuk mencoba ulang fetch jika gagal (berguna untuk jaringan tidak stabil):

```js
async function fetchDenganRetry(url, options = {}, maxRetry = 3, delay = 1000) {
  for (let percobaan = 0; percobaan < maxRetry; percobaan++) {
    try {
      const res = await fetch(url, options);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn(`Percobaan ${percobaan + 1} gagal: ${err.message}`);
      if (percobaan === maxRetry - 1) throw err; // Lempar jika sudah habis
      await new Promise((r) => setTimeout(r, delay * (percobaan + 1))); // Exponential backoff
    }
  }
}
```

---

## 11. Integrasi Fetch dengan DOM (Contoh Lengkap)

Berikut alur lengkap menampilkan data API ke halaman — **Loading → Data → Error states**:

```js
const daftarEl = document.querySelector("#daftar-user");
const loadingEl = document.querySelector("#loading");
const errorEl = document.querySelector("#error");

async function tampilkanDaftarUser() {
  // State 1: Loading
  loadingEl.hidden = false;
  errorEl.hidden = true;
  daftarEl.innerHTML = "";

  try {
    const users = await fetchDenganRetry("https://api.contoh.com/users");

    // State 2: Sukses — render list
    loadingEl.hidden = true;
    if (users.length === 0) {
      daftarEl.innerHTML = "<li>Tidak ada user ditemukan.</li>";
      return;
    }
    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.name} — ${user.email}`;
      daftarEl.appendChild(li);
    });

  } catch (err) {
    // State 3: Error
    loadingEl.hidden = true;
    errorEl.hidden = false;
    errorEl.textContent = `Gagal memuat data: ${err.message}`;
  }
}

tampilkanDaftarUser();
```

HTML pendukung (disediakan terpisah):
```html
<ul id="daftar-user"></ul>
<p id="loading">⏳ Memuat data...</p>
<p id="error" hidden style="color:red;"></p>
```

---

## 12. Upload File dengan Fetch

Mengirim file (gambar, PDF, dll.) menggunakan `FormData`:

```js
const inputFile = document.querySelector("#input-file");
const formUpload = document.querySelector("#form-upload");

formUpload.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("avatar", inputFile.files[0]); // "avatar" = nama field server
  formData.append("deskripsi", "Foto profil baru"); // Bisa campur teks

  const res = await fetch("https://api.contoh.com/upload", {
    method: "POST",
    body: formData, // ⚠️ JANGAN set Content-Type! Browser otomatis dengan boundary
  });

  if (res.ok) {
    console.log("Upload sukses!");
  }
});
```

> **Penting:** Saat pakai `FormData`, **jangan** set `Content-Type` header manual. Browser akan otomatis menyertakan `multipart/form-data` beserta `boundary` yang tepat.

---

## 13. WebSocket & SSE (Real-Time Data)

Untuk data real-time (chat, notifikasi, live score), fetch kurang cocok karena hanya *request-response*. Gunakan alternatif berikut:

| Teknologi          | Arah           | Use Case                   |
|--------------------|----------------|----------------------------|
| **WebSocket**      | Bidirectional  | Chat, game multiplayer     |
| **SSE** (Server-Sent Events) | Server → Client | Notifikasi, live feed |

```js
// WebSocket: komunikasi dua arah
const ws = new WebSocket("wss://chat.contoh.com");
ws.addEventListener("message", (e) => {
  console.log("Pesan masuk:", e.data);
});
ws.send("Halo dari client!"); // Kirim ke server

// SSE: server push ke client (satu arah)
const eventSource = new EventSource("https://api.contoh.com/notifikasi");
eventSource.addEventListener("notif-baru", (e) => {
  console.log("Notifikasi:", JSON.parse(e.data));
});
```
