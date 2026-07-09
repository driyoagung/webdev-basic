# CSS Custom Properties (Variables)

Bayangkan Anda sedang mengecat seluruh rumah dengan warna yang sama. Tiba-tiba klien minta ganti warna. Jika Anda menuangkan cat langsung ke setiap sudut ruangan satu per satu, mengganti semuanya akan sangat menyakitkan. Tapi bagaimana jika Anda punya **satu ember cat besar berlabel** yang tinggal diubah warnanya, lalu semua ruangan otomatis ikut berubah?

Itulah analogi dari **CSS Custom Properties** — dikenal juga sebagai **CSS Variables**.

## Definisi

CSS Variables adalah fitur native CSS yang memungkinkan Anda menyimpan nilai dalam satu tempat dan menggunakannya kembali di seluruh stylesheet.

Sintaksnya terdiri dari dua bagian:
- **Deklarasi**: `--nama-variabel: nilai;`
- **Pemakaian**: `var(--nama-variabel)`

```css
/* Mendeklarasikan variabel */
:root {
  --warna-utama: #2196F3;
  --ukuran-font: 16px;
}

/* Menggunakan variabel */
.tombol {
  background-color: var(--warna-utama);
  font-size: var(--ukuran-font);
}
```

<div class="preview-box">
  <p style="margin-top:0;font-weight:bold;font-size:0.85rem;">Variabel dideklarasikan sekali, dipakai di banyak tempat</p>
  <div style="--warna-demo: #4CAF50;display:flex;gap:10px;">
    <span style="background:var(--warna-demo,#4CAF50);color:white;padding:10px 16px;border-radius:6px;">Tombol 1</span>
    <span style="background:var(--warna-demo,#4CAF50);color:white;padding:10px 16px;border-radius:6px;">Tombol 2</span>
    <span style="background:var(--warna-demo,#4CAF50);color:white;padding:10px 16px;border-radius:6px;">Tombol 3</span>
  </div>
  <p style="font-size:0.75rem;color:gray;margin-top:8px;">Ketiga tombol menggunakan <code style="background:#eee;padding:2px 6px;border-radius:3px;">var(--warna-demo)</code> yang sama.</p>
</div>

---

## Kenapa Penting?

1. **Konsistensi tema** — Semua elemen yang menggunakan variabel akan selalu seragam. Tidak ada lagi 5 shade biru yang berbeda di satu halaman.
2. **Dark mode** — Dengan menimpa beberapa variabel root, seluruh tampilan website bisa berubah drastis hanya dalam beberapa baris kode.
3. **Maintainability** — Saat klien minta ganti warna brand, Anda cukup ubah satu baris, bukan 50 baris.
4. **Dynamic update** — CSS variables bisa diubah lewat JavaScript, tidak seperti variabel SASS/LESS yang statis setelah compile.

---

## Scope (Ruang Lingkup)

### Global Scope — `:root`

Selector pseudo-class `:root` merepresentasikan elemen `<html>` dengan spesifisitas lebih tinggi. Tempatkan semua variabel global di sini.

```css
:root {
  --primary: #3F51B5;
  --secondary: #FF4081;
  --spacing-unit: 8px;
}
```

### Local Scope — Selector Spesifik

Variabel yang dideklarasikan di dalam selector tertentu hanya bisa diakses oleh elemen di dalam selector itu (termasuk anak-anaknya).

```css
.card {
  --card-radius: 12px;
  --card-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
}

/* ⚠️ Di luar .card, --card-radius TIDAK dikenali */
```

<div class="preview-box">
  <p style="margin-top:0;font-weight:bold;font-size:0.85rem;">Reassign variabel di scope berbeda — hasilnya berbeda!</p>
  <div style="display:flex;gap:12px;">
    <div class="demo-scope-a" style="--bg-demo: #2196F3; --text-demo: white; background:var(--bg-demo);color:var(--text-demo);padding:20px 28px;border-radius:8px;text-align:center;flex:1;">
      <strong>Card Default</strong><br>
      <span style="font-size:0.8rem;">--bg: #2196F3</span>
    </div>
    <div class="demo-scope-b" style="--bg-demo: #FF9800; --text-demo: #333; background:var(--bg-demo);color:var(--text-demo);padding:20px 28px;border-radius:8px;text-align:center;flex:1;">
      <strong>Card Retheme</strong><br>
      <span style="font-size:0.8rem;">--bg: #FF9800</span>
    </div>
  </div>
  <p style="text-align:center;font-size:0.75rem;color:gray;margin-top:8px;">Kedua card menggunakan <code style="background:#eee;padding:2px 6px;border-radius:3px;">var(--bg-demo)</code> yang sama, tapi nilai variabelnya berbeda karena scope berbeda!</p>
</div>

---

## Contoh Deklarasi

### Warna

```css
:root {
  --color-primary: #3F51B5;
  --color-primary-light: #7986CB;
  --color-primary-dark: #303F9F;
  --color-accent: #FF4081;
  --color-text: #212121;
  --color-text-secondary: #757575;
  --color-background: #FAFAFA;
}
```

### Font Size

```css
:root {
  --fs-sm: 0.875rem;   /* 14px */
  --fs-base: 1rem;     /* 16px */
  --fs-lg: 1.25rem;    /* 20px */
  --fs-xl: 1.5rem;     /* 24px */
  --fs-2xl: 2rem;      /* 32px */
}
```

### Spacing

```css
:root {
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-6: 1.5rem;   /* 24px */
  --space-8: 2rem;     /* 32px */
}
```

> **Tips Pro:** Sistem spacing berbasis kelipatan seperti di atas disebut *spacing scale*. Ini menjamin semua jarak di website Anda konsisten secara matematis.

---

## Fallback Value

Terkadang sebuah variabel mungkin belum terdefinisi. CSS Variables mendukung nilai cadangan (*fallback*):

```css
.tombol {
  background-color: var(--warna-utama, #333);
  /* Jika --warna-utama tidak ditemukan, pakai #333 */
}
```

Anda bahkan bisa menumpuk beberapa fallback:

```css
.judul {
  font-family: var(--font-heading, var(--font-body, sans-serif));
  /* Coba --font-heading, lalu --font-body, terakhir sans-serif */
}
```

---

## Studi Kasus: Membuat Tema Warna Website

Mari kita bangun sistem tema warna yang rapi untuk seluruh website hanya dengan CSS Variables:

```css
:root {
  /* Palet warna utama */
  --color-primary: #3F51B5;
  --color-secondary: #FF4081;
  --color-accent: #00BCD4;

  /* Warna netral */
  --color-bg: #FFFFFF;
  --color-surface: #F5F5F5;
  --color-text: #212121;
  --color-border: #E0E0E0;

  /* Jarak */
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;

  /* Radius */
  --radius: 8px;

  /* Bayangan */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.12);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.15);
}

/* Dark Mode — cukup timpa variabel di root */
[data-theme="dark"] {
  --color-bg: #121212;
  --color-surface: #1E1E1E;
  --color-text: #EEEEEE;
  --color-border: #333333;
}
```

Dengan struktur di atas, beralih ke dark mode hanya dilakukan dengan menambahkan atribut `data-theme="dark"` ke elemen `<html>`. Semua komponen yang menggunakan variabel-variabel tersebut akan otomatis menyesuaikan.

<div class="preview-box">
  <p style="margin-top:0;font-weight:bold;font-size:0.85rem;">Simulasi Light Mode vs Dark Mode</p>
  <div style="display:flex;gap:12px;">
    <div style="--theme-bg:#FFFFFF;--theme-surface:#F5F5F5;--theme-text:#212121;--theme-border:#E0E0E0;--theme-primary:#3F51B5;--theme-accent:#FF4081;background:var(--theme-bg);color:var(--theme-text);border:1px solid var(--theme-border);padding:16px;border-radius:8px;flex:1;">
      <div style="background:var(--theme-surface);padding:12px;border-radius:6px;border:1px solid var(--theme-border);margin-bottom:8px;">
        <strong>☀️ Light Mode</strong>
        <p style="margin:4px 0 0;font-size:0.8rem;color:var(--theme-text);">Konten card dengan tema terang.</p>
      </div>
      <span style="background:var(--theme-primary,#3F51B5);color:white;padding:6px 14px;border-radius:6px;font-size:0.85rem;">Tombol Primary</span>
      <span style="background:var(--theme-accent,#FF4081);color:white;padding:6px 14px;border-radius:6px;font-size:0.85rem;margin-left:6px;">Tombol Accent</span>
    </div>
    <div style="--theme-bg:#121212;--theme-surface:#1E1E1E;--theme-text:#EEEEEE;--theme-border:#333333;--theme-primary:#3F51B5;--theme-accent:#FF4081;background:var(--theme-bg);color:var(--theme-text);border:1px solid var(--theme-border);padding:16px;border-radius:8px;flex:1;">
      <div style="background:var(--theme-surface);padding:12px;border-radius:6px;border:1px solid var(--theme-border);margin-bottom:8px;">
        <strong>🌙 Dark Mode</strong>
        <p style="margin:4px 0 0;font-size:0.8rem;">Konten card dengan tema gelap.</p>
      </div>
      <span style="background:var(--theme-primary,#3F51B5);color:white;padding:6px 14px;border-radius:6px;font-size:0.85rem;">Tombol Primary</span>
      <span style="background:var(--theme-accent,#FF4081);color:white;padding:6px 14px;border-radius:6px;font-size:0.85rem;margin-left:6px;">Tombol Accent</span>
    </div>
  </div>
  <p style="text-align:center;font-size:0.75rem;color:gray;margin-top:8px;">HTML dan CSS yang digunakan <strong>identik</strong>. Hanya variabel yang nilainya ditimpa!</p>
</div>

---

## Best Practices

### 1. Gunakan Naming Convention yang Konsisten

Pakai prefix namespace untuk mengelompokkan variabel berdasarkan fungsinya:

```css
:root {
  /* Color */
  --color-primary: #3F51B5;
  --color-primary-hover: #303F9F;

  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;

  /* Shadow */
  --shadow-elevation-1: 0 1px 3px rgba(0,0,0,0.12);
  --shadow-elevation-2: 0 4px 12px rgba(0,0,0,0.15);
}
```

### 2. Selalu Sediakan Fallback

```css
/* ❌ Kurang aman */
.card { color: var(--text-color); }

/* ✅ Aman */
.card { color: var(--text-color, #212121); }
```

### 3. Kelompokkan di `:root`

Kumpulkan semua variabel global di `:root` di bagian paling atas stylesheet Anda. Ini seperti *inventory* atau daftar inventaris yang memudahkan pencarian saat proses debugging.

### 4. Jangan Gunakan untuk Nilai Dinamis Kompleks

CSS Variables bekerja paling baik untuk nilai sederhana (warna, angka, string pendek). Hindari menyimpan seluruh `box-shadow` kompleks dalam satu variabel jika Anda hanya ingin mengubah salah satu propertinya.

### 5. Manfaatkan di Media Queries

```css
:root {
  --fs-base: 16px;
}

@media (min-width: 768px) {
  :root {
    --fs-base: 18px;
  }
}

body {
  font-size: var(--fs-base);
  /* Otomatis 16px di mobile, 18px di tablet ke atas */
}
```

---

## Cheat Sheet CSS Variables

| Sintaks | Fungsi |
|---|---|
| `--nama: nilai;` | Mendeklarasikan variabel |
| `var(--nama)` | Memanggil nilai variabel |
| `var(--nama, fallback)` | Memanggil dengan nilai cadangan |
| `:root { }` | Scope global (seluruh halaman) |
| `selector { }` | Scope lokal (hanya di dalam selector) |
