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

---

## Aksesibilitas Tabel

Screen reader (pembaca layar untuk tunanetra) membaca tabel baris per baris, kolom per kolom layaknya kita menyusuri spreadsheet dengan jari. Tanpa markup yang tepat, pengguna screen reader akan tersesat — tidak tahu apakah sel tertentu adalah header atau data biasa.

### Atribut `scope` pada `<th>`

Tambahkan `scope="col"` untuk header kolom (vertikal, di atas) dan `scope="row"` untuk header baris (horizontal, di kiri). Ini memberi tahu screen reader: "Aku adalah judul untuk semua sel di bawahku / di samping kananku."

```html
<!-- SEBELUM: Tanpa scope -->
<table>
  <tr>
    <th>Nama</th>
    <th>Nilai</th>
  </tr>
  <tr>
    <td>Andi</td>
    <td>85</td>
  </tr>
</table>

<!-- SESUDAH: Dengan scope yang benar -->
<table>
  <tr>
    <th scope="col">Nama</th>
    <th scope="col">Nilai</th>
  </tr>
  <tr>
    <td>Andi</td>
    <td>85</td>
  </tr>
</table>
```
<div class="preview-box">
  <p style="margin-top:0; font-size: 0.85rem;">Dengan <code>scope="col"</code>, screen reader akan mengumumkan: <em>"Nama: Andi, Nilai: 85"</em> — bukan hanya <em>"Andi, 85"</em> tanpa konteks.</p>
  <table border="1" style="width: 100%; border-collapse: collapse;">
    <tr style="background-color: var(--vp-c-bg-alt);">
      <th scope="col" style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Nama</th>
      <th scope="col" style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Nilai</th>
    </tr>
    <tr>
      <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Andi</td>
      <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">85</td>
    </tr>
    <tr>
      <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Budi</td>
      <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">92</td>
    </tr>
  </table>
</div>

### `headers` + `id` untuk Tabel Kompleks

Untuk tabel dengan header bertingkat atau sel yang merujuk ke beberapa header sekaligus, gunakan atribut `headers` pada `<td>` yang berisi ID header terkait (dipisah spasi).

```html
<table>
  <tr>
    <th id="produk">Produk</th>
    <th id="q1">Q1</th>
    <th id="q2">Q2</th>
  </tr>
  <tr>
    <th id="jan" headers="produk">Januari</th>
    <td headers="q1 jan">100</td>
    <td headers="q2 jan">—</td>
  </tr>
  <tr>
    <th id="feb" headers="produk">Februari</th>
    <td headers="q1 feb">—</td>
    <td headers="q2 feb">150</td>
  </tr>
</table>
```

### 💡 Tips Praktis:
- **Selalu tambahkan `scope`** pada setiap `<th>` — ini adalah aksesibilitas paling sederhana dengan dampak paling besar.
- Gunakan `headers` + `id` hanya untuk tabel yang benar-benar kompleks (multi-level header). Untuk tabel biasa, `scope` sudah cukup.

---

## Tabel Responsif

Tabel lebar dengan banyak kolom akan "meledak" keluar layar di smartphone — teks terpotong, layout rusak, pengalaman buruk.

**Solusi paling sederhana:** bungkus tabel dengan `<div>` yang memiliki `overflow-x: auto`. Pengguna HP tinggal **scroll horizontal** untuk melihat seluruh data.

```html
<div style="overflow-x: auto;">
  <table>
    <tr>
      <th>No</th>
      <th>Nama Produk</th>
      <th>SKU</th>
      <th>Stok</th>
      <th>Harga Beli</th>
      <th>Harga Jual</th>
      <th>Margin</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Keyboard Mekanik RGB</td>
      <td>KB-MEK-001</td>
      <td>120</td>
      <td>Rp 450.000</td>
      <td>Rp 750.000</td>
      <td>Rp 300.000</td>
    </tr>
  </table>
</div>
```
<div class="preview-box">
  <p style="margin-top:0; font-size: 0.85rem; color: #666;">Coba scroll horizontal area di bawah ini untuk melihat seluruh kolom:</p>
  <div style="overflow-x: auto; border: 1px solid var(--vp-c-divider); border-radius: 4px;">
    <table style="width: 700px; min-width: 100%; border-collapse: collapse; font-size: 0.85rem;">
      <thead style="background-color: var(--vp-c-bg-alt);">
        <tr>
          <th style="padding: 0.5rem; border: 1px solid var(--vp-c-divider); text-align: left;">No</th>
          <th style="padding: 0.5rem; border: 1px solid var(--vp-c-divider); text-align: left;">Nama Produk</th>
          <th style="padding: 0.5rem; border: 1px solid var(--vp-c-divider); text-align: left;">SKU</th>
          <th style="padding: 0.5rem; border: 1px solid var(--vp-c-divider); text-align: left;">Stok</th>
          <th style="padding: 0.5rem; border: 1px solid var(--vp-c-divider); text-align: left;">Harga Beli</th>
          <th style="padding: 0.5rem; border: 1px solid var(--vp-c-divider); text-align: left;">Harga Jual</th>
          <th style="padding: 0.5rem; border: 1px solid var(--vp-c-divider); text-align: left;">Margin</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">1</td>
          <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Keyboard Mekanik RGB</td>
          <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">KB-MEK-001</td>
          <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">120</td>
          <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Rp 450.000</td>
          <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Rp 750.000</td>
          <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Rp 300.000</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

### 💡 Tips Praktis:
- Jangan gunakan `overflow-x: auto` langsung pada `<table>`. Selalu bungkus dengan `<div>` wrapper — ini lebih kompatibel di semua browser.
- Untuk tabel yang sangat panjang, pertimbangkan pendekatan "Card Layout" di mobile — ubah baris tabel menjadi kartu vertikal menggunakan CSS media query.

---

## `<colgroup>` dan `<col>` — Styling per Kolom

Ingin memberi background warna kuning ke **seluruh kolom ke-3** tanpa menambahkan `class` di setiap `<td>`? Gunakan `<colgroup>` dan `<col>` — elemen ini mendefinisikan style untuk seluruh kolom sekaligus.

**Analogi:** Seperti mewarnai **seluruh pita kolom** di spreadsheet Excel, bukan mewarnai satu per satu sel.

```html
<table>
  <colgroup>
    <col style="background-color: #f9f9f9;">
    <col span="2" style="background-color: #e8f4e8;">
    <col style="background-color: #fff3cd;">
  </colgroup>
  <tr>
    <th>ID</th>
    <th>Nama</th>
    <th>Email</th>
    <th>Status</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Andi</td>
    <td>andi@mail.com</td>
    <td>Aktif</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Budi</td>
    <td>budi@mail.com</td>
    <td>Nonaktif</td>
  </tr>
</table>
```
<div class="preview-box">
  <table style="width: 100%; border-collapse: collapse;">
    <colgroup>
      <col style="background-color: #f9f9f9;">
      <col span="2" style="background-color: #e8f4e8;">
      <col style="background-color: #fff3cd;">
    </colgroup>
    <tr>
      <th style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">ID</th>
      <th style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Nama</th>
      <th style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Email</th>
      <th style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Status</th>
    </tr>
    <tr>
      <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">1</td>
      <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Andi</td>
      <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">andi@mail.com</td>
      <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Aktif</td>
    </tr>
    <tr>
      <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">2</td>
      <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Budi</td>
      <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">budi@mail.com</td>
      <td style="padding: 0.5rem; border: 1px solid var(--vp-c-divider);">Nonaktif</td>
    </tr>
  </table>
</div>

---

## Properti CSS Penting untuk Tabel

Beberapa properti CSS yang wajib Anda kuasai untuk styling tabel profesional:

### `border-collapse: collapse`
Menggabungkan border antar sel menjadi satu garis (rapi, modern). Nilai default `separate` membuat border ganda (terkesan jadul).

### `border-spacing`
Mengatur jarak antar sel — hanya bekerja jika `border-collapse: separate`.

### `table-layout: fixed`
Browser tidak perlu menganalisis seluruh isi tabel untuk menentukan lebar kolom. Lebar kolom mengikuti baris pertama. Hasilnya: rendering tabel **jauh lebih cepat** untuk data besar.

### `empty-cells: hide`
Menyembunyikan border dan background sel yang kosong. Berguna untuk tampilan tabel yang bersih.

```html
<table style="border-collapse: collapse; width: 100%;">
  <tr>
    <th style="border: 1px solid #333; padding: 0.5rem;">Kolom A</th>
    <th style="border: 1px solid #333; padding: 0.5rem;">Kolom B</th>
    <th style="border: 1px solid #333; padding: 0.5rem;">Kolom C</th>
  </tr>
  <tr>
    <td style="border: 1px solid #333; padding: 0.5rem;">Data 1</td>
    <td style="border: 1px solid #333; padding: 0.5rem;"></td>
    <td style="border: 1px solid #333; padding: 0.5rem;">Data 3</td>
  </tr>
</table>
```
<div class="preview-box">
  <p style="margin-top:0; font-size: 0.85rem;"><strong>Perbandingan:</strong> Tabel atas (<code>border-collapse: collapse</code>) vs Tabel bawah (<code>border-collapse: separate</code>)</p>
  <p style="font-size: 0.8rem; color: #4CAF50; margin-bottom:0;"><strong>collapse</strong> — border rapat, profesional:</p>
  <table style="border-collapse: collapse; width: 100%; margin-bottom: 1rem;">
    <tr>
      <td style="border: 2px solid #333; padding: 0.5rem;">Sel 1</td>
      <td style="border: 2px solid #333; padding: 0.5rem;">Sel 2</td>
    </tr>
    <tr>
      <td style="border: 2px solid #333; padding: 0.5rem;">Sel 3</td>
      <td style="border: 2px solid #333; padding: 0.5rem;">Sel 4</td>
    </tr>
  </table>
  <p style="font-size: 0.8rem; color: #F44336; margin-bottom:0;"><strong>separate</strong> — border ganda, terkesan jadul:</p>
  <table style="border-collapse: separate; border-spacing: 2px; width: 100%;">
    <tr>
      <td style="border: 2px solid #333; padding: 0.5rem;">Sel 1</td>
      <td style="border: 2px solid #333; padding: 0.5rem;">Sel 2</td>
    </tr>
    <tr>
      <td style="border: 2px solid #333; padding: 0.5rem;">Sel 3</td>
      <td style="border: 2px solid #333; padding: 0.5rem;">Sel 4</td>
    </tr>
  </table>
</div>

---

## Sticky Header Tabel

Untuk tabel dengan puluhan atau ratusan baris, header yang ikut menghilang saat di-scroll sangat menyulitkan pembaca. Solusi: **sticky header** menggunakan `position: sticky` pada `<thead>`.

```css
thead th {
  position: sticky;
  top: 0;
  background: #f4f4f4;
  z-index: 1;
}
```

```html
<div style="max-height: 250px; overflow-y: auto;">
  <table>
    <thead>
      <tr>
        <th>No</th>
        <th>Nama Siswa</th>
        <th>Nilai UTS</th>
        <th>Nilai UAS</th>
        <th>Rata-rata</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>1</td><td>Andi Pratama</td><td>85</td><td>90</td><td>87.5</td></tr>
      <tr><td>2</td><td>Budi Santoso</td><td>78</td><td>82</td><td>80.0</td></tr>
      <tr><td>3</td><td>Citra Dewi</td><td>92</td><td>88</td><td>90.0</td></tr>
      <tr><td>4</td><td>Dian Permata</td><td>75</td><td>80</td><td>77.5</td></tr>
      <tr><td>5</td><td>Eko Nugroho</td><td>88</td><td>95</td><td>91.5</td></tr>
      <tr><td>6</td><td>Fani Rahmawati</td><td>70</td><td>74</td><td>72.0</td></tr>
      <tr><td>7</td><td>Gilang Ramadhan</td><td>82</td><td>86</td><td>84.0</td></tr>
      <tr><td>8</td><td>Hana Suryani</td><td>91</td><td>93</td><td>92.0</td></tr>
    </tbody>
  </table>
</div>
```
<div class="preview-box">
  <p style="margin-top:0; font-size: 0.85rem; color: #666;">Coba scroll area di bawah — header tetap terlihat di atas:</p>
  <div style="max-height: 220px; overflow-y: auto; border: 1px solid var(--vp-c-divider); border-radius: 4px;">
    <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem;">
      <thead>
        <tr>
          <th style="position: sticky; top: 0; background: #f4f4f4; padding: 0.5rem; border-bottom: 2px solid var(--vp-c-divider); text-align: left; z-index: 1;">No</th>
          <th style="position: sticky; top: 0; background: #f4f4f4; padding: 0.5rem; border-bottom: 2px solid var(--vp-c-divider); text-align: left; z-index: 1;">Nama Siswa</th>
          <th style="position: sticky; top: 0; background: #f4f4f4; padding: 0.5rem; border-bottom: 2px solid var(--vp-c-divider); text-align: left; z-index: 1;">Nilai UTS</th>
          <th style="position: sticky; top: 0; background: #f4f4f4; padding: 0.5rem; border-bottom: 2px solid var(--vp-c-divider); text-align: left; z-index: 1;">Nilai UAS</th>
          <th style="position: sticky; top: 0; background: #f4f4f4; padding: 0.5rem; border-bottom: 2px solid var(--vp-c-divider); text-align: left; z-index: 1;">Rata-rata</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">1</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">Andi Pratama</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">85</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">90</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">87.5</td></tr>
        <tr><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">2</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">Budi Santoso</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">78</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">82</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">80.0</td></tr>
        <tr><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">3</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">Citra Dewi</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">92</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">88</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">90.0</td></tr>
        <tr><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">4</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">Dian Permata</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">75</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">80</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">77.5</td></tr>
        <tr><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">5</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">Eko Nugroho</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">88</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">95</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">91.5</td></tr>
        <tr><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">6</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">Fani Rahmawati</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">70</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">74</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">72.0</td></tr>
        <tr><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">7</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">Gilang Ramadhan</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">82</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">86</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">84.0</td></tr>
        <tr><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">8</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">Hana Suryani</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">91</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">93</td><td style="padding: 0.5rem; border-bottom: 1px solid var(--vp-c-divider);">92.0</td></tr>
      </tbody>
    </table>
  </div>
</div>

### 💡 Tips Praktis:
- `position: sticky` di dalam wrapper dengan `overflow: auto/scroll` adalah kombinasi wajib.
- Selalu tambahkan `background` solid pada `<th>` yang sticky agar konten tabel yang scrolling tidak "tembus" terlihat di bawah header.
- Hindari `border-collapse: collapse` jika menggunakan sticky + border — beberapa browser bermasalah. Gunakan `border-collapse: separate` + `border-spacing: 0` sebagai workaround.
