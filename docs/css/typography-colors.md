# Typography & Colors

Tampilan teks (Tipografi) dan Warna adalah dua elemen visual yang paling cepat ditangkap oleh mata pengguna. 

## Properti Teks & Font

### 1. Mengubah Jenis Font (`font-family`)
CSS membaca font berdasarkan ketersediaannya di komputer pengguna. Oleh karena itu, kita sering menulis beberapa font sekaligus (sebagai cadangan / fallback).
```css
p {
  /* Jika komputer tidak punya Arial, pakai Helvetica, jika tidak ada pakai sans-serif bawaan os */
  font-family: Arial, Helvetica, sans-serif;
}
```
*(Catatan: Saat ini, mayoritas developer menggunakan layanan gratis seperti **Google Fonts** untuk mengimpor font custom modern secara online).*

### 2. Ukuran Teks (`font-size`)
Bisa menggunakan `px` (Pixel - Fix), `rem` (Relatif terhadap root), atau `em` (Relatif terhadap parent). Praktik modern sangat menyarankan penggunaan `rem` (1rem biasanya = 16px).
```css
h1 {
  font-size: 2rem; /* Sekitar 32px */
}
```

### 3. Ketebalan (`font-weight`)
Bisa menggunakan nilai string (`normal`, `bold`) atau angka (`400`, `700`).
```css
.teks-tebal { font-weight: bold; } /* atau 700 */
.teks-tipis { font-weight: 300; }
```

### 4. Perataan dan Dekorasi
- `text-align`: Meratakan teks (`left`, `center`, `right`, `justify`).
- `text-decoration`: Memberi garis teks (Sering dipakai `none` untuk menghapus garis bawah pada tautan `<a>`).
- `line-height`: Jarak antar baris kalimat (spasi paragraf).
- `letter-spacing`: Jarak antar huruf.

## Properti Warna (Colors & Background)

### 3 Cara Menulis Warna di CSS:
1. **Nama Warna:** Bahasa inggris dasar (`red`, `blue`, `green`, `tomato`).
2. **Hex Code:** Kode heksadesimal 6 digit (Paling sering dipakai desainer). Contoh: `#FF0000` (Merah).
3. **RGB / RGBA:** Kombinasi Red, Green, Blue. `rgba` punya ekstra `a` (Alpha) untuk transparansi (0.0 sampai 1.0).

```css
/* Mengubah warna teks */
.teks-merah { color: red; }
.teks-hijau { color: #4CAF50; }

/* Mengubah warna latar belakang */
.latar-gelap { background-color: #333333; }
.latar-transparan { background-color: rgba(0, 0, 0, 0.5); } /* Hitam transparan 50% */
```

## Preview: Kombinasi Tipografi & Warna

```html
<style scoped>
  .contoh-artikel {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f9f9f9;
    padding: 30px;
    border-radius: 10px;
    border-left: 6px solid #FF5722;
  }
  
  .contoh-artikel h2 {
    color: #333;
    font-size: 1.8rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 0;
  }
  
  .contoh-artikel p {
    color: #555;
    line-height: 1.6; /* Spasi baris agar nyaman dibaca */
    text-align: justify;
  }
  
  .badge {
    background-color: #FF5722;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 0.8rem;
  }
</style>

<div class="contoh-artikel">
  <h2>Berita Terkini <span class="badge">HOT</span></h2>
  <p>Penggunaan kombinasi font yang tepat, dipadukan dengan jarak baris (line-height) yang ideal dan kontras warna yang baik, akan membuat artikel website Anda terlihat sangat profesional dan nyaman dibaca berlama-lama oleh pengunjung. Ini adalah kunci dari UI/UX Design dasar.</p>
</div>
```

<div class="preview-box">
<div class="contoh-artikel">
  <h2>Berita Terkini <span class="badge">HOT</span></h2>
  <p>Penggunaan kombinasi font yang tepat, dipadukan dengan jarak baris (line-height) yang ideal dan kontras warna yang baik, akan membuat artikel website Anda terlihat sangat profesional dan nyaman dibaca berlama-lama oleh pengunjung. Ini adalah kunci dari UI/UX Design dasar.</p>
</div>
</div>

<style scoped>
  .contoh-artikel {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f9f9f9;
    padding: 30px;
    border-radius: 10px;
    border-left: 6px solid #FF5722;
  }
  .contoh-artikel h2 {
    color: #333;
    font-size: 1.8rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 0;
  }
  .contoh-artikel p {
    color: #555;
    line-height: 1.6;
    text-align: justify;
  }
  .badge {
    background-color: #FF5722;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 0.8rem;
  }
</style>
