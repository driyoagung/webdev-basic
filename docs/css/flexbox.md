# CSS Flexbox (Layout 1 Dimensi)

**Flexbox** (Flexible Box Module) adalah fitur CSS revolusioner untuk mengatur tata letak elemen secara dinamis dalam satu dimensi (baris ATAU kolom). Sebelum Flexbox, developer memakai teknik `float` dan `position` yang sangat merepotkan hanya untuk memposisikan div ke tengah.

## Konsep Dasar: Container & Items

Flexbox bekerja pada hubungan **Parent-Child** (Ayah-Anak):
- **Flex Container** (Parent): Elemen yang diberi `display: flex;`.
- **Flex Items** (Children): Anak-anak langsung dari container tersebut.

---

## Properti Flex Container

### 1. `display: flex;`
Mengaktifkan mode Flexbox pada kontainer.

### 2. `flex-direction` (Arah Alur)
Menentukan **sumbu utama** (main axis) dan arah anak-anaknya dijajarkan.

```css
.container { display: flex; flex-direction: row; }       /* Kiri → Kanan (Default) */
.container { display: flex; flex-direction: column; }    /* Atas → Bawah */
.container { display: flex; flex-direction: row-reverse; }    /* Kanan → Kiri */
.container { display: flex; flex-direction: column-reverse; } /* Bawah → Atas */
```

<div class="preview-box">
  <p style="margin-top:0; font-weight:bold; font-size:0.85rem;">flex-direction: row (Default)</p>
  <div style="display:flex; flex-direction:row; gap:8px; margin-bottom:1rem;">
    <div style="background:#2196F3;color:white;padding:10px 20px;border-radius:4px;">1</div>
    <div style="background:#2196F3;color:white;padding:10px 20px;border-radius:4px;">2</div>
    <div style="background:#2196F3;color:white;padding:10px 20px;border-radius:4px;">3</div>
  </div>
  <p style="font-weight:bold; font-size:0.85rem;">flex-direction: column</p>
  <div style="display:flex; flex-direction:column; gap:8px; max-width:120px;">
    <div style="background:#FF9800;color:white;padding:10px 20px;border-radius:4px;text-align:center;">1</div>
    <div style="background:#FF9800;color:white;padding:10px 20px;border-radius:4px;text-align:center;">2</div>
    <div style="background:#FF9800;color:white;padding:10px 20px;border-radius:4px;text-align:center;">3</div>
  </div>
</div>

### 3. `justify-content` (Perataan Sumbu Utama)

Mengatur distribusi item **sepanjang sumbu utama** (horizontal jika `row`, vertikal jika `column`).

| Nilai | Deskripsi |
|---|---|
| `flex-start` | Item merapat ke awal (Default) |
| `center` | Item berkumpul di tengah |
| `flex-end` | Item merapat ke akhir |
| `space-between` | Item pertama di awal, terakhir di akhir, sisanya rata |
| `space-around` | Setiap item diberi jarak kiri-kanan yang sama |
| `space-evenly` | Semua celah (termasuk tepi) berukuran sama rata |

<div class="preview-box">
  <p style="margin-top:0;font-weight:bold;font-size:0.85rem;">justify-content: flex-start</p>
  <div style="display:flex;justify-content:flex-start;gap:8px;background:#f0f0f0;padding:10px;border-radius:6px;margin-bottom:10px;">
    <div style="background:#4CAF50;color:white;padding:8px 16px;border-radius:4px;">A</div>
    <div style="background:#4CAF50;color:white;padding:8px 16px;border-radius:4px;">B</div>
    <div style="background:#4CAF50;color:white;padding:8px 16px;border-radius:4px;">C</div>
  </div>
  <p style="font-weight:bold;font-size:0.85rem;">justify-content: center</p>
  <div style="display:flex;justify-content:center;gap:8px;background:#f0f0f0;padding:10px;border-radius:6px;margin-bottom:10px;">
    <div style="background:#2196F3;color:white;padding:8px 16px;border-radius:4px;">A</div>
    <div style="background:#2196F3;color:white;padding:8px 16px;border-radius:4px;">B</div>
    <div style="background:#2196F3;color:white;padding:8px 16px;border-radius:4px;">C</div>
  </div>
  <p style="font-weight:bold;font-size:0.85rem;">justify-content: space-between</p>
  <div style="display:flex;justify-content:space-between;background:#f0f0f0;padding:10px;border-radius:6px;margin-bottom:10px;">
    <div style="background:#FF5722;color:white;padding:8px 16px;border-radius:4px;">A</div>
    <div style="background:#FF5722;color:white;padding:8px 16px;border-radius:4px;">B</div>
    <div style="background:#FF5722;color:white;padding:8px 16px;border-radius:4px;">C</div>
  </div>
  <p style="font-weight:bold;font-size:0.85rem;">justify-content: space-evenly</p>
  <div style="display:flex;justify-content:space-evenly;background:#f0f0f0;padding:10px;border-radius:6px;">
    <div style="background:#9C27B0;color:white;padding:8px 16px;border-radius:4px;">A</div>
    <div style="background:#9C27B0;color:white;padding:8px 16px;border-radius:4px;">B</div>
    <div style="background:#9C27B0;color:white;padding:8px 16px;border-radius:4px;">C</div>
  </div>
</div>

### 4. `align-items` (Perataan Sumbu Silang / Vertikal)

Mengatur posisi item **tegak lurus** terhadap sumbu utama (vertikal jika `row`).

| Nilai | Deskripsi |
|---|---|
| `stretch` | Item ditarik memenuhi tinggi container (Default) |
| `flex-start` | Item merapat ke atas |
| `center` | Item berada di tengah secara vertikal |
| `flex-end` | Item merapat ke bawah |
| `baseline` | Item sejajar berdasarkan garis dasar teksnya |

<div class="preview-box">
  <p style="margin-top:0;font-weight:bold;font-size:0.85rem;">align-items: stretch (Default)</p>
  <div style="display:flex;align-items:stretch;gap:8px;height:100px;background:#f0f0f0;padding:10px;border-radius:6px;margin-bottom:10px;">
    <div style="background:#673AB7;color:white;padding:8px 16px;border-radius:4px;">Pendek</div>
    <div style="background:#673AB7;color:white;padding:8px 16px;border-radius:4px;">Tinggi<br>Sekali</div>
    <div style="background:#673AB7;color:white;padding:8px 16px;border-radius:4px;">Sedang</div>
  </div>
  <p style="font-weight:bold;font-size:0.85rem;">align-items: center</p>
  <div style="display:flex;align-items:center;gap:8px;height:100px;background:#f0f0f0;padding:10px;border-radius:6px;margin-bottom:10px;">
    <div style="background:#E91E63;color:white;padding:8px 16px;border-radius:4px;">Pendek</div>
    <div style="background:#E91E63;color:white;padding:8px 16px;border-radius:4px;">Tinggi<br>Sekali</div>
    <div style="background:#E91E63;color:white;padding:8px 16px;border-radius:4px;">Sedang</div>
  </div>
  <p style="font-weight:bold;font-size:0.85rem;">align-items: flex-end</p>
  <div style="display:flex;align-items:flex-end;gap:8px;height:100px;background:#f0f0f0;padding:10px;border-radius:6px;">
    <div style="background:#009688;color:white;padding:8px 16px;border-radius:4px;">Pendek</div>
    <div style="background:#009688;color:white;padding:8px 16px;border-radius:4px;">Tinggi<br>Sekali</div>
    <div style="background:#009688;color:white;padding:8px 16px;border-radius:4px;">Sedang</div>
  </div>
</div>

### 5. `flex-wrap` (Pembungkusan)

Secara default, semua flex items akan dipaksa masuk dalam satu baris meskipun melebihi lebar container. `flex-wrap` mengubah perilaku ini.

```css
.container { flex-wrap: nowrap; }  /* Default: semua item di satu baris */
.container { flex-wrap: wrap; }    /* Item yang meluber pindah ke baris baru */
```

<div class="preview-box">
  <p style="margin-top:0;font-weight:bold;font-size:0.85rem;">flex-wrap: wrap (Item otomatis turun ke baris baru)</p>
  <div style="display:flex;flex-wrap:wrap;gap:8px;background:#f0f0f0;padding:10px;border-radius:6px;">
    <div style="background:#FF5722;color:white;padding:10px 30px;border-radius:4px;">Item 1</div>
    <div style="background:#FF5722;color:white;padding:10px 30px;border-radius:4px;">Item 2</div>
    <div style="background:#FF5722;color:white;padding:10px 30px;border-radius:4px;">Item 3</div>
    <div style="background:#FF5722;color:white;padding:10px 30px;border-radius:4px;">Item 4</div>
    <div style="background:#FF5722;color:white;padding:10px 30px;border-radius:4px;">Item 5</div>
    <div style="background:#FF5722;color:white;padding:10px 30px;border-radius:4px;">Item 6</div>
    <div style="background:#FF5722;color:white;padding:10px 30px;border-radius:4px;">Item 7</div>
    <div style="background:#FF5722;color:white;padding:10px 30px;border-radius:4px;">Item 8</div>
  </div>
</div>

### 6. `gap`
Menambahkan jarak konstan di antara item. Jauh lebih bersih daripada menggunakan `margin` pada setiap item.

```css
.container {
  display: flex;
  gap: 20px; /* Jarak antar semua item */
  /* atau */
  row-gap: 10px;    /* Jarak antar baris */
  column-gap: 20px; /* Jarak antar kolom */
}
```

---

## Properti Flex Items (Anak)

Selain properti untuk Container, ada properti khusus yang hanya berlaku pada **item individual**:

### 1. `flex-grow` (Kemampuan Mengembang)
Menentukan seberapa besar item tersebut boleh mengembang untuk mengisi sisa ruang kosong. Nilai default-nya adalah `0` (tidak mengembang).

```css
.item-a { flex-grow: 1; } /* Mengambil 1 bagian sisa ruang */
.item-b { flex-grow: 2; } /* Mengambil 2 bagian sisa ruang (2x lebih besar dari A) */
```

<div class="preview-box">
  <p style="margin-top:0;font-weight:bold;font-size:0.85rem;">flex-grow: 1 vs 2 vs 1</p>
  <div style="display:flex;gap:8px;background:#f0f0f0;padding:10px;border-radius:6px;">
    <div style="flex-grow:1;background:#2196F3;color:white;padding:12px;border-radius:4px;text-align:center;">grow: 1</div>
    <div style="flex-grow:2;background:#F44336;color:white;padding:12px;border-radius:4px;text-align:center;">grow: 2</div>
    <div style="flex-grow:1;background:#4CAF50;color:white;padding:12px;border-radius:4px;text-align:center;">grow: 1</div>
  </div>
</div>

### 2. `flex-shrink` (Kemampuan Menyusut)
Menentukan seberapa besar item boleh menyusut jika ruang container tidak cukup. Default `1`. Set `0` jika item tidak boleh menyusut sama sekali.

### 3. `flex-basis` (Ukuran Dasar)
Menentukan ukuran awal item sebelum `flex-grow` atau `flex-shrink` diterapkan. Mirip `width` tapi khusus flex.

### 4. Shorthand `flex`
Ketiga properti di atas sering ditulis dalam satu baris:

```css
.item {
  flex: 1;         /* flex-grow:1, flex-shrink:1, flex-basis:0% */
  flex: 0 0 200px; /* Tidak grow, tidak shrink, basis 200px (ukuran tetap) */
}
```

### 5. `align-self` (Override Perataan Individual)
Menimpa nilai `align-items` milik container untuk satu item spesifik saja.

<div class="preview-box">
  <p style="margin-top:0;font-weight:bold;font-size:0.85rem;">Container: align-items: flex-start, tapi Item 2 punya align-self: flex-end</p>
  <div style="display:flex;align-items:flex-start;gap:8px;height:100px;background:#f0f0f0;padding:10px;border-radius:6px;">
    <div style="background:#607D8B;color:white;padding:10px 16px;border-radius:4px;">Item 1</div>
    <div style="background:#FF5722;color:white;padding:10px 16px;border-radius:4px;align-self:flex-end;font-weight:bold;">Item 2 ↓</div>
    <div style="background:#607D8B;color:white;padding:10px 16px;border-radius:4px;">Item 3</div>
  </div>
</div>

### 6. `order` (Mengubah Urutan Visual)
Secara default semua item memiliki `order: 0`. Dengan mengubah nilai ini, Anda bisa mengatur ulang urutan tampilan tanpa mengubah urutan HTML.

<div class="preview-box">
  <p style="margin-top:0;font-weight:bold;font-size:0.85rem;">Di HTML: A, B, C — tapi B diberi order: -1 sehingga tampil paling depan</p>
  <div style="display:flex;gap:8px;background:#f0f0f0;padding:10px;border-radius:6px;">
    <div style="background:#9E9E9E;color:white;padding:10px 20px;border-radius:4px;order:0;">A (order: 0)</div>
    <div style="background:#E91E63;color:white;padding:10px 20px;border-radius:4px;order:-1;font-weight:bold;">B (order: -1)</div>
    <div style="background:#9E9E9E;color:white;padding:10px 20px;border-radius:4px;order:0;">C (order: 0)</div>
  </div>
</div>

---

## Studi Kasus Nyata

### 1. Navbar Responsif

```html
<nav style="display:flex; justify-content:space-between; align-items:center; background:#333; color:white; padding:15px 20px; border-radius:8px;">
  <div><strong>MY-LOGO</strong></div>
  <ul style="display:flex; gap:15px; list-style:none; margin:0; padding:0;">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</nav>
```

<div class="preview-box">
  <nav style="display:flex;justify-content:space-between;align-items:center;background:#333;color:white;padding:15px 20px;border-radius:8px;">
    <div><strong>MY-LOGO</strong></div>
    <ul style="display:flex;gap:15px;list-style:none;margin:0;padding:0;">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
</div>

### 2. Dead Center (Teknik Legendaris)

Dulu memposisikan elemen ke tengah persis sangat sulit. Dengan Flexbox, cukup **3 baris CSS**:

```css
.container {
  display: flex;
  justify-content: center; /* Tengah Horizontal */
  align-items: center;     /* Tengah Vertikal */
}
```

<div class="preview-box">
  <div style="display:flex;justify-content:center;align-items:center;height:150px;background:#e0f7fa;border:2px dashed #00bcd4;border-radius:8px;">
    <div style="background:#00bcd4;color:white;padding:15px 25px;font-weight:bold;border-radius:4px;">Saya di tengah persis!</div>
  </div>
</div>

### 3. Card Layout dengan Footer Menempel di Bawah

Masalah klasik: Card yang tingginya berbeda-beda, tapi tombol/link di bagian bawah harus tetap sejajar.

```css
.card {
  display: flex;
  flex-direction: column; /* Konten dari atas ke bawah */
}
.card-body {
  flex-grow: 1; /* Bagian body mengembang mengisi ruang kosong */
}
/* Tombol di bawah akan otomatis menempel di bawah */
```

<div class="preview-box">
  <div style="display:flex;gap:12px;">
    <div style="display:flex;flex-direction:column;flex:1;border:1px solid #ddd;border-radius:8px;overflow:hidden;">
      <div style="padding:16px;flex-grow:1;">
        <h4 style="margin:0 0 8px 0;">Artikel Pendek</h4>
        <p style="margin:0;font-size:0.9rem;color:#666;">Paragraf singkat saja.</p>
      </div>
      <div style="padding:12px 16px;background:#f5f5f5;border-top:1px solid #eee;">
        <span style="color:#2196F3;font-weight:bold;font-size:0.85rem;">Baca →</span>
      </div>
    </div>
    <div style="display:flex;flex-direction:column;flex:1;border:1px solid #ddd;border-radius:8px;overflow:hidden;">
      <div style="padding:16px;flex-grow:1;">
        <h4 style="margin:0 0 8px 0;">Artikel Panjang</h4>
        <p style="margin:0;font-size:0.9rem;color:#666;">Paragraf ini jauh lebih panjang sehingga card-nya lebih tinggi. Tapi tombol "Baca" tetap sejajar di bawah.</p>
      </div>
      <div style="padding:12px 16px;background:#f5f5f5;border-top:1px solid #eee;">
        <span style="color:#2196F3;font-weight:bold;font-size:0.85rem;">Baca →</span>
      </div>
    </div>
    <div style="display:flex;flex-direction:column;flex:1;border:1px solid #ddd;border-radius:8px;overflow:hidden;">
      <div style="padding:16px;flex-grow:1;">
        <h4 style="margin:0 0 8px 0;">Artikel Sedang</h4>
        <p style="margin:0;font-size:0.9rem;color:#666;">Isi sedang.</p>
      </div>
      <div style="padding:12px 16px;background:#f5f5f5;border-top:1px solid #eee;">
        <span style="color:#2196F3;font-weight:bold;font-size:0.85rem;">Baca →</span>
      </div>
    </div>
  </div>
  <p style="text-align:center;font-size:0.8rem;margin-top:10px;color:gray;"><em>Perhatikan tombol "Baca →" selalu sejajar di bawah meskipun tinggi konten berbeda!</em></p>
</div>

---

## Cheat Sheet Flexbox

| Properti | Diterapkan di | Fungsi |
|---|---|---|
| `display: flex` | Container | Mengaktifkan flexbox |
| `flex-direction` | Container | Arah alur item (row/column) |
| `justify-content` | Container | Perataan sumbu utama |
| `align-items` | Container | Perataan sumbu silang |
| `flex-wrap` | Container | Izinkan item pindah baris |
| `gap` | Container | Jarak antar item |
| `flex-grow` | Item | Kemampuan item mengembang |
| `flex-shrink` | Item | Kemampuan item menyusut |
| `flex-basis` | Item | Ukuran dasar item |
| `align-self` | Item | Override align-items untuk 1 item |
| `order` | Item | Mengubah urutan visual item |

---

## `flex-flow` Shorthand

`flex-flow` adalah shorthand yang menggabungkan `flex-direction` dan `flex-wrap` dalam satu properti:

```css
.container {
  flex-flow: row wrap;           /* flex-direction: row + flex-wrap: wrap */
  flex-flow: column nowrap;      /* flex-direction: column + flex-wrap: nowrap */
  flex-flow: row-reverse wrap;   /* flex-direction: row-reverse + flex-wrap: wrap */
}
```

Penggunaan `flex-flow` membuat kode lebih ringkas dibanding menulis dua properti terpisah.

```css
/* ❌ Panjang */
.container {
  flex-direction: row;
  flex-wrap: wrap;
}

/* ✅ Ringkas */
.container {
  flex-flow: row wrap;
}
```

---

## `align-content` — Perataan Multi-Line

`align-content` mengatur perataan **baris-baris flex** (bukan item individual) ketika `flex-wrap: wrap` aktif dan container memiliki tinggi lebih. Berbeda dengan `align-items` yang mengatur per item dalam satu baris.

| Nilai | Deskripsi |
|---|---|
| `stretch` | Baris ditarik memenuhi tinggi container (Default) |
| `flex-start` | Baris merapat ke atas |
| `center` | Baris berkumpul di tengah |
| `flex-end` | Baris merapat ke bawah |
| `space-between` | Baris pertama di atas, terakhir di bawah, sisanya rata |
| `space-around` | Setiap baris diberi jarak atas-bawah yang sama |

```css
.container {
  display: flex;
  flex-wrap: wrap;
  height: 300px;
  align-content: center; /* Semua baris di tengah secara vertikal */
}
```

<div class="preview-box">
<p style="margin-top:0;font-weight:bold;font-size:0.85rem;">align-content: space-between (flex-wrap: wrap)</p>
<div style="display:flex;flex-wrap:wrap;align-content:space-between;height:180px;gap:8px;background:#f0f0f0;padding:10px;border-radius:6px;">
  <div style="background:#2196F3;color:white;padding:8px 20px;border-radius:4px;width:30%;">Item 1</div>
  <div style="background:#2196F3;color:white;padding:8px 20px;border-radius:4px;width:30%;">Item 2</div>
  <div style="background:#2196F3;color:white;padding:8px 20px;border-radius:4px;width:30%;">Item 3</div>
  <div style="background:#2196F3;color:white;padding:8px 20px;border-radius:4px;width:30%;">Item 4</div>
  <div style="background:#2196F3;color:white;padding:8px 20px;border-radius:4px;width:30%;">Item 5</div>
  <div style="background:#2196F3;color:white;padding:8px 20px;border-radius:4px;width:30%;">Item 6</div>
</div>
<p style="text-align:center;font-size:0.8rem;color:gray;margin-top:8px;">Baris-baris flex terdistribusi space-between secara vertikal. Coba bandingkan dengan align-items!</p>
</div>

---

## Bug `min-width: auto` pada Flex Item

Secara default, flex item memiliki `min-width: auto` — artinya item **tidak akan menyusut lebih kecil dari ukuran kontennya**. Ini sering menyebabkan layout "bocor" saat container mengecil.

### Contoh Kasus Nyata

Anda punya flex container dengan teks panjang di dalam item, lalu container di-resize lebih kecil — teks akan meluber keluar container meskipun sudah pakai `flex-shrink: 1`:

```css
/* ❌ Flex item tidak menyusut di bawah ukuran konten */
.item { flex-shrink: 1; } /* Tidak cukup! */
```

<div class="preview-box">
<p style="margin-top:0;font-weight:bold;font-size:0.85rem;">Bug: teks panjang membuat item tidak menyusut</p>
<div style="display:flex;gap:8px;background:#f0f0f0;padding:10px;border-radius:6px;max-width:400px;">
  <div style="background:#FF5722;color:white;padding:10px;border-radius:4px;flex-shrink:1;">Sidebar</div>
  <div style="background:#2196F3;color:white;padding:10px;border-radius:4px;flex-shrink:1;">IniKontenYangSangatPanjangTanpaSpasiDanMembuatItemTidakMenyusut</div>
</div>
</div>

### Solusi

```css
.item {
  min-width: 0;      /* ✅ Izinkan item menyusut sampai nol */
  /* atau */
  overflow: hidden;  /* ✅ Alternatif — buat BFC baru */
}
```

<div class="preview-box">
<p style="margin-top:0;font-weight:bold;font-size:0.85rem;">Setelah fix: min-width: 0 pada item bermasalah</p>
<div style="display:flex;gap:8px;background:#f0f0f0;padding:10px;border-radius:6px;max-width:400px;">
  <div style="background:#FF5722;color:white;padding:10px;border-radius:4px;flex-shrink:1;">Sidebar</div>
  <div style="background:#4CAF50;color:white;padding:10px;border-radius:4px;flex-shrink:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">IniKontenYangSangatPanjangTanpaSpasiDanMembuatItemTidakMenyusut</div>
</div>
</div>

> **Kapan ini terjadi:** Sering muncul pada layout sidebar + konten, tabel data dengan kolom fleksibel, atau card grid dengan konten dinamis.

---

## Holy Grail Layout dengan Flexbox

Holy Grail Layout adalah layout klasik web: **Header di atas, konten + sidebar di tengah (full height), Footer di bawah**. Bisa dibuat murni dengan Flexbox:

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full height viewport */
}
header, footer {
  /* Tinggi tetap */
}
.main-wrapper {
  display: flex;
  flex: 1; /* Mengisi sisa tinggi */
}
.sidebar {
  width: 200px;
}
.content {
  flex: 1; /* Mengisi sisa lebar */
}
```

<div class="preview-box">
<div style="display:flex;flex-direction:column;min-height:260px;border:2px solid #333;border-radius:8px;overflow:hidden;">
  <div style="background:#333;color:white;padding:12px;text-align:center;font-weight:bold;">HEADER</div>
  <div style="display:flex;flex:1;">
    <div style="background:#795548;color:white;padding:12px;width:130px;display:flex;align-items:center;justify-content:center;font-size:0.85rem;">SIDEBAR</div>
    <div style="background:white;color:#333;padding:16px;flex:1;display:flex;align-items:center;justify-content:center;font-size:0.85rem;">CONTENT (flex: 1)</div>
    <div style="background:#607D8B;color:white;padding:12px;width:100px;display:flex;align-items:center;justify-content:center;font-size:0.8rem;">ASIDE</div>
  </div>
  <div style="background:#333;color:white;padding:10px;text-align:center;font-size:0.8rem;">FOOTER</div>
</div>
</div>

---

## Form Layout dengan Flexbox

Form dengan label dan input sejajar horizontal sering dibuat dengan Flexbox:

```css
.form-group {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}
.form-group label {
  width: 100px;       /* Lebar label tetap */
  flex-shrink: 0;     /* Label tidak menyusut */
  text-align: right;
}
.form-group input {
  flex: 1;            /* Input mengisi sisa lebar */
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
```

<div class="preview-box">
<div style="background:white;padding:20px;border-radius:8px;border:1px solid #ddd;max-width:450px;">
  <p style="margin-top:0;font-weight:bold;font-size:0.85rem;">Form Pendaftaran</p>
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
    <label style="width:80px;flex-shrink:0;text-align:right;font-size:0.85rem;">Nama</label>
    <input style="flex:1;padding:8px 12px;border:1px solid #ccc;border-radius:6px;font-size:0.85rem;" placeholder="Masukkan nama" />
  </div>
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
    <label style="width:80px;flex-shrink:0;text-align:right;font-size:0.85rem;">Email</label>
    <input style="flex:1;padding:8px 12px;border:1px solid #ccc;border-radius:6px;font-size:0.85rem;" placeholder="nama@email.com" />
  </div>
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
    <label style="width:80px;flex-shrink:0;text-align:right;font-size:0.85rem;">Password</label>
    <input style="flex:1;padding:8px 12px;border:1px solid #ccc;border-radius:6px;font-size:0.85rem;" type="password" placeholder="Min. 8 karakter" />
  </div>
  <button style="margin-left:92px;padding:8px 24px;background:#2196F3;color:white;border:none;border-radius:6px;cursor:pointer;font-size:0.85rem;">Daftar</button>
</div>
</div>

---

## `order` dan Aksesibilitas — Peringatan Penting

Properti `order` **hanya mengubah urutan VISUAL**, BUKAN urutan DOM. Ini memiliki implikasi serius:

- **Screen reader** (pembaca layar untuk tunanetra) akan tetap membaca konten sesuai urutan DOM asli, bukan urutan visual
- **Navigasi keyboard** (Tab) akan mengikuti urutan DOM, bukan urutan visual
- **Copy-paste** teks akan mengikuti urutan DOM

```html
<!-- ❌ BERBAHAYA: Urutan visual berbeda dengan urutan DOM -->
<div style="display:flex;">
  <div style="order:2;">1. Konten Utama</div>   <!-- Dibaca pertama oleh screen reader -->
  <div style="order:1;">2. Sidebar</div>         <!-- Tampil pertama secara visual -->
</div>
```

> **Aturan Emas:** Gunakan `order` hanya untuk **perubahan kecil** (seperti memindahkan icon), bukan untuk restrukturisasi layout halaman. Jika Anda butuh mengubah urutan konten secara signifikan, ubah urutan HTML-nya langsung.
