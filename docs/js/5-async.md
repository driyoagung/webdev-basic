# 5. Asynchronous JavaScript (WAJIB)

Konsep Asinkron adalah jantung dari aplikasi web interaktif yang menarik data dari server (API). 

JavaScript itu **Synchronous** (Satu baris jalan, baris lain menunggu). Jika proses sinkron terjebak lambat (misal: antri download), seluruh UI akan macet (*Freeze*). Solusinya adalah mendelegasikan tugas berat ke proses **Asynchronous (berjalan di background)**.

## Evolusi Asynchronous

### 1. Callback (Cara Klasik - Callback Hell)
Cara paling lama menangani proses delay.

```js
function ambilDataUser(callback) {
  setTimeout(() => {
    callback("Data User A");
  }, 1000);
}

// Kekurangan: Jika proses bersambung, akan terjadi penumpukan (Callback Hell)
ambilDataUser((user) => {
  ambilDetailUser(user, (detail) => {
    ambilFoto(detail, (foto) => {
       console.log(foto); // Makin lama makin menjorok ke dalam (Pyramid of Doom)
    });
  });
});
```

### 2. Promise (Janji)
Objek Promise merepresentasikan operasi masa depan yang akan sukses (`resolve`) atau gagal (`reject`).

```js
// 1. Membuat Promise
const janjiCuaca = new Promise((resolve, reject) => {
  const cuacaCerah = true;
  
  if (cuacaCerah) {
    resolve("Ayo kita pergi liburan!");
  } else {
    reject("Hujan, di rumah saja.");
  }
});

// 2. Mengonsumsi Promise (Menggunakan .then dan .catch)
janjiCuaca
  .then((hasil) => {
    console.log(hasil); // Jika Resolved!
  })
  .catch((error) => {
    console.log(error); // Jika Rejected!
  });
```

### 3. Async / Await (Modern ES8 - Wajib!)
Cara modern membaca Promise agar kodenya terlihat lurus seperti Synchronous (tidak ada Callback Hell, tidak perlu banyak `.then()`).

1. Tambahkan `async` di depan nama fungsi.
2. Tambahkan `await` di depan perintah Promise (JS akan menjeda fungsi ini di background sampai janjinya ditepati).

```js
// Fungsi Async
async function prosesLiburan() {
  try {
    // Tunggu janji ditepati
    const hasil = await janjiCuaca; 
    console.log(hasil); // Output: "Ayo kita pergi liburan!"
    
  } catch (error) {
    // Jika janji gagal (rejected), masuk ke blok catch ini
    console.log(error); 
  }
}

prosesLiburan();
```

## `Promise.all()` (Paralel)
Jika Anda punya 3 proses Async yang **tidak saling bergantung**, Anda bisa menjalankannya secara serentak (paralel) ketimbang satu per satu, sangat menghemat waktu!

```js
const ambilProduk = fetch('/api/produk');
const ambilUser = fetch('/api/user');
const ambilKategori = fetch('/api/kategori');

async function ambilSemua() {
  try {
    // Ketiganya berjalan bersamaan, dan baru selesai jika ketiganya selesai!
    const [produk, user, kategori] = await Promise.all([ambilProduk, ambilUser, ambilKategori]);
    
    console.log("Semua data siap digunakan!");
  } catch(e) {
    console.log("Salah satu gagal, maka semua batal.");
  }
}
```
