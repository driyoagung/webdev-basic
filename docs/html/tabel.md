# Membuat Tabel (Tables)

Di masa-masa kelam awal web developer (tahun 2000-an), elemen tabel digunakan untuk membuat layout kerangka keseluruhan website. Namun saat ini, **tabel murni digunakan hanya untuk menyajikan data terstruktur atau tabular** (seperti spreadsheet Excel), bukan untuk *layouting* (CSS Flexbox/Grid adalah yang benar untuk layout).

## Struktur Dasar Tabel

Sebuah tabel HTML tersusun atas baris (rows) dan kolom sel (cells).

- **`<table>`**: Elemen bungkus utama tabel.
- **`<tr>` (Table Row)**: Membuat satu baris baru mendatar.
- **`<th>` (Table Header)**: Sel judul kolom (Teks akan tebal dan berada di tengah).
- **`<td>` (Table Data)**: Sel data biasa.

```html
<table border="1"> <!-- Atribut border="1" murni untuk melihat batas tabel secara kasar tanpa CSS -->
  <tr>
    <th>No</th>
    <th>Nama Buah</th>
    <th>Harga / Kg</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Apel Merah</td>
    <td>Rp 40.000</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Pisang Cavendish</td>
    <td>Rp 25.000</td>
  </tr>
</table>
```

<div class="preview-box">
  <table border="1" style="width: 100%; text-align: left;">
    <tr>
      <th>No</th>
      <th>Nama Buah</th>
      <th>Harga / Kg</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Apel Merah</td>
      <td>Rp 40.000</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Pisang Cavendish</td>
      <td>Rp 25.000</td>
    </tr>
  </table>
</div>

## Struktur Semantik Tabel (Lanjutan)

Jika data tabel Anda sangat banyak, sangat direkomendasikan untuk membagi tabel ke dalam blok Kepala (*Head*), Tubuh (*Body*), dan Kaki (*Foot*). Hal ini penting untuk pembaca layar (Screen Reader) dan juga saat tabel di-print, header akan otomatis terulang di setiap halaman.

- **`<thead>`**: Kepala tabel (biasanya membungkus baris header `<th>`).
- **`<tbody>`**: Isi konten utama tabel.
- **`<tfoot>`**: Kaki tabel (biasanya untuk baris total/kesimpulan).
- **`<caption>`**: Judul resmi / keterangan tabel (Letakkan tepat di bawah tag pembuka `<table>`).

```html
<table border="1" width="100%">
  <caption>Daftar Penjualan Toko Bulan Ini</caption>
  
  <thead>
    <tr>
      <th>Produk</th>
      <th>Terjual</th>
      <th>Pendapatan</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td>Keyboard Mekanik</td>
      <td>50 unit</td>
      <td>Rp 25.000.000</td>
    </tr>
    <tr>
      <td>Mouse Wireless</td>
      <td>100 unit</td>
      <td>Rp 15.000.000</td>
    </tr>
  </tbody>
  
  <tfoot>
    <tr>
      <td colspan="2"><strong>Total Pendapatan</strong></td>
      <td><strong>Rp 40.000.000</strong></td>
    </tr>
  </tfoot>
</table>
```

## Menggabungkan Sel: Colspan dan Rowspan

Mirip fitur *Merge Cells* di Microsoft Excel, Anda bisa membuat satu kolom memakan ruang dua kolom, atau satu baris memanjang ke bawah.

- **`colspan` (Column Span)**: Menggabungkan kolom secara mendatar (Kiri ke Kanan).
- **`rowspan` (Row Span)**: Menggabungkan baris secara vertikal (Atas ke Bawah).

```html
<table border="1">
  <tr>
    <th colspan="2">Data Diri Pegawai (Tergabung 2 Kolom)</th>
  </tr>
  <tr>
    <td>Nama:</td>
    <td>Budi Santoso</td>
  </tr>
  <tr>
    <td rowspan="2">Alamat (Tergabung 2 Baris ke bawah):</td>
    <td>Jl. Mawar Merah No 5</td>
  </tr>
  <tr>
    <td>Kecamatan Sukamaju</td>
  </tr>
</table>
```

> **Tips CSS untuk Tabel:** Secara bawaan (default), tampilan tabel HTML sangatlah kaku dan jelek. Kita butuh sentuhan CSS (seperti `border-collapse: collapse;`, `padding`, dan `background-color`) untuk menyulap tabel ini menjadi indah layaknya tabel di dashboard aplikasi modern!
