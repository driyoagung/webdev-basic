# CSS Box Model

Konsep **Box Model** (Model Kotak) adalah konsep paling fundamental dalam CSS. Semua elemen HTML pada dasarnya adalah kotak persegi. 

Ketika kita mengatur jarak antar elemen atau ukuran sebuah elemen, kita harus memahami anatomi dari kotak tersebut yang terdiri dari 4 lapisan (dari dalam ke luar):
1. **Content**: Isi elemen itu sendiri (Teks atau Gambar).
2. **Padding**: Jarak transparant di dalam kotak (antara Content dan Border).
3. **Border**: Garis tepi yang mengelilingi Padding.
4. **Margin**: Jarak transparant di luar kotak (jarak antara kotak ini dengan kotak lainnya).

## Visualisasi Box Model

```html
<style scoped>
  .kotak-belajar {
    background-color: #E3F2FD; /* Warna latar belakang content */
    width: 200px;
    padding: 20px;
    border: 5px solid #2196F3;
    margin: 30px auto; /* 30px atas-bawah, rata tengah (auto) kiri-kanan */
    text-align: center;
    font-weight: bold;
  }
</style>

<div class="kotak-belajar">
  Ini adalah Konten
</div>
```

<div class="preview-box">
<div class="kotak-belajar">
  Ini adalah Konten (200px)
</div>
<div style="text-align:center; font-size: 0.8rem; color: gray;">
  ^ Kotak di atas memiliki Margin (luar), Border (biru 5px), dan Padding (ruang dalam 20px).
</div>
</div>

<style scoped>
  .kotak-belajar {
    background-color: #E3F2FD;
    width: 200px;
    padding: 20px;
    border: 5px solid #2196F3;
    margin: 30px auto;
    text-align: center;
    font-weight: bold;
    color: #333;
  }
</style>

## Membedah Properti Box Model

### 1. Margin
Mengatur jarak **luar** elemen. Margin tidak memiliki warna latar (selalu transparan).
```css
margin: 20px; /* Atas, Kanan, Bawah, Kiri semua 20px */
margin-top: 10px; /* Khusus atas */
margin: 10px 20px; /* Atas-Bawah 10px, Kiri-Kanan 20px */
```

### 2. Padding
Mengatur jarak **dalam** elemen. Jika elemen memiliki warna latar belakang (*background*), padding akan ikut terwarnai.
```css
padding: 15px; /* Semua sisi 15px */
padding-left: 20px; /* Khusus kiri */
```

### 3. Border
Garis tepi kotak. Membutuhkan 3 nilai: Ketebalan, Gaya garis (solid, dashed, dotted), dan Warna.
```css
border: 2px solid black; 
border-bottom: 1px dashed red; /* Hanya garis bawah yang putus-putus merah */
```

### 4. Width & Height
Lebar dan tinggi dari *Content* area.

---

## Masalah Klasik Lebar Kotak (Box-Sizing)

Secara bawaan CSS standar, jika Anda mengatur `width: 100px;`, lalu menambahkan `padding: 20px` dan `border: 5px`, maka total lebar kotak Anda menjadi:
**100 (width) + 40 (kiri-kanan padding) + 10 (kiri-kanan border) = 150px.**

Ini sering membuat elemen menjadi "tumpah" melebihi lebar layar.

### Solusi Modern: `box-sizing: border-box;`
Atribut sakti ini memaksa agar `width: 100px;` sudah mencakup Content + Padding + Border. Jika ada padding, konten di dalamnya akan mengecil agar lebar total elemen tetap persis 100px.

> **Tips Profesional:** Developer profesional web selalu memasukkan kode ini di baris paling atas CSS mereka agar perhitungan lebar selalu konsisten.

```css
/* Atur border-box untuk SEMUA elemen di HTML dengan selector Universal (*) */
* {
  box-sizing: border-box;
}
```
