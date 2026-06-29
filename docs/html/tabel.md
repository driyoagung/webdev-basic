# Membuat Tabel (Tables)

Di masa-masa kelam awal web developer (tahun 2000-an), elemen tabel digunakan untuk membuat layout kerangka keseluruhan website. Namun saat ini, **tabel murni digunakan hanya untuk menyajikan data terstruktur atau tabular** (seperti spreadsheet Excel), bukan untuk *layouting* (CSS Flexbox/Grid adalah yang benar untuk layout).

## Struktur Dasar Tabel

Sebuah tabel HTML tersusun atas baris (rows) dan kolom sel (cells).

- **`<table>`**: Elemen bungkus utama tabel.
- **`<tr>` (Table Row)**: Membuat satu baris baru mendatar.
- **`<th>` (Table Header)**: Sel judul kolom (Teks akan tebal dan berada di tengah).
- **`<td>` (Table Data)**: Sel data biasa.

```html
<table border="1">
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
  <table border="1" style="width: 100%; text-align: left; border-collapse: collapse;">
    <tr>
      <th style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">No</th>
      <th style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Nama Buah</th>
      <th style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Harga / Kg</th>
    </tr>
    <tr>
      <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">1</td>
      <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Apel Merah</td>
      <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Rp 40.000</td>
    </tr>
    <tr>
      <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">2</td>
      <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Pisang Cavendish</td>
      <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Rp 25.000</td>
    </tr>
  </table>
</div>

## Struktur Semantik Tabel (Lanjutan)

Jika data tabel Anda sangat banyak, sangat direkomendasikan untuk membagi tabel ke dalam blok Kepala (*Head*), Tubuh (*Body*), dan Kaki (*Foot*). Hal ini penting untuk pembaca layar (Screen Reader) dan juga saat tabel di-print, header akan otomatis terulang di setiap halaman.

- **`<thead>`**: Kepala tabel (biasanya membungkus baris header `<th>`).
- **`<tbody>`**: Isi konten utama tabel.
- **`<tfoot>`**: Kaki tabel (biasanya untuk baris total/kesimpulan).
- **`<caption>`**: Judul resmi / keterangan tabel.

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

<div class="preview-box">
  <table border="1" style="width: 100%; text-align: left; border-collapse: collapse;">
    <caption style="margin-bottom: 0.5rem; font-weight: bold; font-size: 1.1em;">Daftar Penjualan Toko Bulan Ini</caption>
    <thead style="background-color: var(--vp-c-bg-alt);">
      <tr>
        <th style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Produk</th>
        <th style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Terjual</th>
        <th style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Pendapatan</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Keyboard Mekanik</td>
        <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">50 unit</td>
        <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Rp 25.000.000</td>
      </tr>
      <tr>
        <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Mouse Wireless</td>
        <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">100 unit</td>
        <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Rp 15.000.000</td>
      </tr>
    </tbody>
    <tfoot style="background-color: var(--vp-c-bg-alt);">
      <tr>
        <td colspan="2" style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);"><strong>Total Pendapatan</strong></td>
        <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);"><strong>Rp 40.000.000</strong></td>
      </tr>
    </tfoot>
  </table>
</div>

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
    <td rowspan="2">Alamat<br>(Tergabung 2 Baris ke bawah):</td>
    <td>Jl. Mawar Merah No 5</td>
  </tr>
  <tr>
    <td>Kecamatan Sukamaju</td>
  </tr>
</table>
```

<div class="preview-box">
  <table border="1" style="width: 100%; text-align: left; border-collapse: collapse;">
    <tr>
      <th colspan="2" style="padding: 0.5rem; border: 1px solid var(--vp-c-divider); text-align: center; background-color: var(--vp-c-bg-alt);">Data Diri Pegawai (Tergabung 2 Kolom)</th>
    </tr>
    <tr>
      <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider); font-weight: bold; width: 40%;">Nama:</td>
      <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Budi Santoso</td>
    </tr>
    <tr>
      <td rowspan="2" style="padding: 0.5rem; border: 1px solid var(--vp-c-divider); font-weight: bold; vertical-align: top;">Alamat<br><span style="font-size:0.8em; font-weight:normal;">(Tergabung 2 Baris ke bawah):</span></td>
      <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Jl. Mawar Merah No 5</td>
    </tr>
    <tr>
      <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Kecamatan Sukamaju</td>
    </tr>
  </table>
</div>
