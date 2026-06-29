# Pengenalan CSS

**CSS (Cascading Style Sheets)** adalah bahasa *penata gaya* yang digunakan untuk mempercantik dan mengatur tata letak halaman web yang telah dibuat menggunakan HTML. Jika HTML adalah "kerangka/tulang" dari sebuah rumah, maka CSS adalah cat, wallpaper, dan dekorasinya.

## 3 Cara Menulis CSS

Ada tiga cara untuk menerapkan CSS ke dalam elemen HTML:

### 1. Inline CSS (Di dalam elemen)
Digunakan langsung pada tag HTML menggunakan atribut `style`. **Kekurangan:** Membuat HTML kotor dan sulit di-maintain.
```html
<h1 style="color: blue; text-align: center;">Judul Biru</h1>
```

### 2. Internal CSS (Di dalam tag `<head>`)
Ditulis di dalam elemen `<style>` yang diletakkan di dalam `<head>`. Cocok untuk *styling* khusus satu halaman.
```html
<style>
  h1 { color: red; }
</style>
```

### 3. External CSS (Di file terpisah) - *Best Practice*
Ditulis di file berekstensi `.css` (contoh: `style.css`), lalu dihubungkan ke HTML menggunakan tag `<link>`.
```html
<!-- Di dalam head HTML -->
<link rel="stylesheet" href="style.css">
```

---

## Selektor CSS (CSS Selectors)

Untuk memberi gaya pada elemen, CSS harus tahu **elemen mana yang ingin dituju**. Inilah fungsi selektor.

### 1. Selektor Elemen (Element/Tag Selector)
Menargetkan semua elemen dengan nama tag tertentu di seluruh halaman.
```css
/* Akan mengubah semua paragraf <p> menjadi abu-abu */
p {
  color: gray;
}
```

### 2. Selektor Class (Class Selector)
Menargetkan elemen berdasarkan atribut `class="..."`. Ditandai dengan **tanda titik (`.`)**. Class bisa dipakai berulang kali oleh elemen berbeda. Ini adalah selektor **paling sering digunakan**.
```css
/* Menargetkan elemen seperti <button class="btn-utama"> */
.btn-utama {
  background-color: blue;
  color: white;
}
```

### 3. Selektor ID (ID Selector)
Menargetkan elemen spesifik berdasarkan atribut `id="..."`. Ditandai dengan **tanda pagar (`#`)**. ID harus **unik** (hanya boleh ada satu elemen dengan ID tertentu dalam 1 halaman).
```css
/* Menargetkan <div id="header-utama"> */
#header-utama {
  background-color: black;
}
```

### Preview: Menggabungkan HTML & CSS

Berikut adalah contoh bagaimana CSS menyulap HTML polos menjadi lebih menarik:

```html
<style scoped>
  .card-contoh {
    background-color: white;
    border: 2px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
  }
  
  .card-contoh h2 {
    color: #4CAF50;
    margin-top: 0;
  }
  
  .card-contoh p {
    color: #555;
    font-size: 16px;
  }
</style>

<div class="card-contoh">
  <h2>Ini adalah Judul Card</h2>
  <p>Teks ini berada di dalam sebuah div yang diberi class "card-contoh".</p>
</div>
```

<div class="preview-box">
<style scoped>
  .card-contoh {
    background-color: white;
    border: 2px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
  }
  .card-contoh h2 {
    color: #4CAF50;
    margin-top: 0;
  }
  .card-contoh p {
    color: #555;
    font-size: 16px;
  }
</style>
<div class="card-contoh">
  <h2>Ini adalah Judul Card</h2>
  <p>Teks ini berada di dalam sebuah div yang diberi class "card-contoh".</p>
</div>
</div>
