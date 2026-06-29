# Manipulasi DOM & Event Handling

**DOM (Document Object Model)** adalah representasi struktur HTML halaman web Anda di dalam memori komputer. Ketika browser memuat HTML Anda, browser mengubah setiap tag (`div`, `h1`, `p`) menjadi "Objek" yang bisa disentuh, dibaca, dan diubah oleh JavaScript secara *real-time*.

Inilah yang membuat sebuah website bisa berubah tampilannya tanpa perlu me-*refresh* halaman!

---

## 1. Memilih Elemen HTML (Selecting)

Sebelum Anda bisa mengubah sebuah tag HTML, JS harus "menemukan" tag tersebut terlebih dahulu.

### Cara Modern: `querySelector`
Metode ini adalah cara paling kuat karena menggunakan sintaks Selektor CSS persis seperti yang Anda pelajari di fase CSS (menggunakan `.` untuk class, `#` untuk ID).

```html
<h1 id="judul-utama">Halo Semua</h1>
<p class="teks-merah">Paragraf 1</p>
<p class="teks-merah">Paragraf 2</p>

<script>
  // Mengambil SATU elemen (yang pertama ditemukan)
  const judul = document.querySelector("#judul-utama");
  
  // Mengambil SEMUA elemen (menghasilkan bentuk seperti Array)
  const semuaParagraf = document.querySelectorAll(".teks-merah");
</script>
```

---

## 2. Mengubah Konten dan Style (Manipulating)

Setelah elemen didapatkan, kita bisa mengubah isi atau tampilannya!

### Mengubah Teks HTML
```js
const judul = document.querySelector("#judul-utama");

// Mengubah teks saja
judul.textContent = "Selamat Datang di Website Saya!";

// Mengubah teks beserta tag HTML di dalamnya (Hati-hati serangan XSS!)
judul.innerHTML = "Selamat Datang <strong>di Website Saya!</strong>";
```

### Mengubah CSS Langsung
```js
judul.style.color = "blue";
judul.style.fontSize = "30px"; // Penulisan CSS diubah menjadi camelCase
```

### Menambah / Menghapus Class (Lebih Aman dari mengubah style langsung)
```js
// Tambah class
judul.classList.add("aktif");

// Hapus class
judul.classList.remove("aktif");

// Toggle (Jika tidak ada ditambah, jika sudah ada dihapus)
judul.classList.toggle("aktif"); 
```

---

## 3. Event Listener (Mendengarkan Aksi User)

JavaScript bisa mendengarkan segala aksi yang dilakukan pengguna di website (misalnya: klik mouse, ketik keyboard, scroll layar) melalui **Event Listener**.

Bentuk umum: `elemen.addEventListener('nama_event', fungsi_yang_dijalankan_jika_terjadi)`

### Kasus: Tombol Klik

```html
<button id="btn-sapa">Klik Saya!</button>

<script>
  // 1. Ambil elemen tombol
  const tombol = document.querySelector("#btn-sapa");

  // 2. Pasang 'telinga' (event listener)
  tombol.addEventListener("click", () => {
    alert("Terima kasih sudah mengeklik!");
  });
</script>
```

---

## 4. Preview DOM Interaktif Asli!

Mari kita praktikkan semua pengetahuan DOM tersebut menjadi sebuah Dark Mode Toggle yang fungsional di bawah ini! Silakan coba klik tombolnya.

<div class="preview-box">
  <!-- Area HTML yang akan dimanipulasi -->
  <div id="demo-box" style="padding: 20px; text-align: center; border: 2px solid #ccc; border-radius: 8px; background-color: white; color: black; transition: all 0.3s ease;">
    <h3 id="demo-judul">Light Mode Aktif ☀️</h3>
    <p>Coba klik tombol di bawah untuk meminta JavaScript mengubah tampilan kotak ini secara instan!</p>
    
    <button id="btn-toggle" style="padding: 10px 20px; font-weight: bold; cursor: pointer; border: none; border-radius: 4px; background-color: #2196F3; color: white;">Ganti Tema</button>
  </div>

  <!-- Script JS Asli yang Berjalan di Browser Anda Sekarang -->
  <script>
    // Hanya dieksekusi setelah halaman termuat
    setTimeout(() => {
      // 1. Pilih elemen-elemen
      const box = document.querySelector("#demo-box");
      const judul = document.querySelector("#demo-judul");
      const tombol = document.querySelector("#btn-toggle");

      // Variabel status
      let isDark = false;

      // 2. Pasang event listener pada tombol
      tombol.addEventListener("click", () => {
        isDark = !isDark; // Balikkan nilai status

        if (isDark) {
          // 3. Manipulasi DOM menjadi Dark Mode
          box.style.backgroundColor = "#222";
          box.style.color = "white";
          box.style.borderColor = "#444";
          judul.textContent = "Dark Mode Aktif 🌙";
          tombol.style.backgroundColor = "#FF9800";
        } else {
          // Manipulasi DOM kembali ke Light Mode
          box.style.backgroundColor = "white";
          box.style.color = "black";
          box.style.borderColor = "#ccc";
          judul.textContent = "Light Mode Aktif ☀️";
          tombol.style.backgroundColor = "#2196F3";
        }
      });
    }, 1000);
  </script>
</div>

> **Catatan:** Dalam framework web modern masa kini seperti Vue, React, atau Svelte, Anda jarang akan menulis DOM manipulation manual seperti `.querySelector` atau `.textContent`. Framework melakukan semua manipulasi DOM kompleks ini *di belakang layar* untuk Anda. Meskipun begitu, mengerti fundamental cara kerja DOM manual tetap wajib hukumnya!
