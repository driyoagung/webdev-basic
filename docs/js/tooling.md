# Tooling & Development Environment untuk JavaScript

Menulis JavaScript modern tidak cukup hanya dengan text editor dan browser. Ekosistem JavaScript memiliki serangkaian alat (*tooling*) yang membuat proses development lebih cepat, kode lebih rapi, dan hasil build lebih optimal. Modul ini akan memandu Anda mengenal satu per satu.

## Node.js & NPM

### Node.js — JavaScript di Luar Browser

Node.js adalah **runtime environment** yang memungkinkan JavaScript berjalan di luar browser — di server, di terminal, di laptop Anda. Sebelum Node.js ada (2009), JavaScript hanya bisa berjalan di browser.

```bash
# Cek apakah Node.js sudah terinstal
node --version
# Output: v20.x.x

# Menjalankan file JavaScript langsung dari terminal
node app.js
```

### NPM — Package Manager

**NPM** (Node Package Manager) adalah alat untuk mengunduh, mengelola, dan berbagi paket/library JavaScript. NPM terinstal otomatis bersama Node.js.

```bash
npm --version
# Output: 10.x.x
```

---

## `package.json` — Identitas Proyek

`package.json` adalah file jantung dari setiap proyek JavaScript. Ia menyimpan:

- Nama dan versi proyek
- Daftar dependensi (library yang dibutuhkan)
- Script perintah yang sering digunakan
- Metadata (author, license, dll)

```json
{
  "name": "aplikasi-saya",
  "version": "1.0.0",
  "description": "Proyek pertama saya dengan Vite",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.6.0"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "eslint": "^8.50.0",
    "prettier": "^3.0.0"
  }
}
```

### Dependencies vs DevDependencies

| | `dependencies` | `devDependencies` |
|---|---|---|
| **Digunakan saat** | Aplikasi berjalan di production | Hanya saat development (coding) |
| **Contoh** | React, Axios, Vue, Lodash | Vite, ESLint, Prettier, Vitest |
| **Terinstal via** | `npm install paket` | `npm install -D paket` |
| **Dikirim ke server?** | Ya | Tidak (bikin ringan) |

> **Analoginya:** `dependencies` seperti bahan makanan yang harus ada di dapur restoran. `devDependencies` seperti alat masak yang hanya dipakai koki saat menyiapkan masakan — tamu tidak perlu melihatnya.

### `npm install` vs `npx`

```bash
# npm install: mengunduh dan menginstal paket ke node_modules/
npm install vite

# npx: menjalankan paket tanpa menginstalnya secara permanen
npx create-vite my-app
npx vitest run
```

`npx` sangat berguna untuk tool yang hanya perlu dijalankan sekali atau sesekali. Ia akan mengunduh paket sementara, menjalankannya, lalu menghapusnya.

---

## Vite — Build Tool Modern

**Vite** (bahasa Prancis untuk "cepat") adalah build tool generasi baru yang diciptakan oleh Evan You (yang juga menciptakan Vue.js). Vite menggantikan tools lama seperti Webpack dengan pendekatan yang jauh lebih cepat.

### Kenapa Vite Lebih Cepat dari Webpack?

| Aspek | Webpack | Vite |
|---|---|---|
| **Dev Server** | Bundle semua file dulu, baru jalan (lambat saat project besar) | Pake native ES modules browser, tidak perlu bundle ulang |
| **HMR (Hot Reload)** | Reload penuh atau partial lambat | HMR instan — edit file, langsung tampil di browser |
| **Build** | Webpack bundler sendiri | Rollup (jauh lebih cepat) |
| **Konfigurasi** | Rumit, banyak boilerplate | Minimal, zero-config untuk kasus umum |

### Fitur Utama Vite

```bash
# Membuat project baru dengan Vite
npm create vite@latest nama-proyek

# Masuk ke folder proyek
cd nama-proyek

# Instal dependensi
npm install

# Menjalankan dev server
npm run dev
# → http://localhost:5173
```

Fitur yang langsung tersedia tanpa konfigurasi tambahan:
- **Hot Module Replacement (HMR)**: Edit file, hasilnya langsung muncul di browser tanpa refresh manual.
- **CSS Preprocessors**: File `.scss` atau `.less` langsung dikenali tanpa setup tambahan.
- **TypeScript**: File `.ts` langsung didukung out of the box.
- **Static Assets**: Import gambar, font, JSON langsung dari JavaScript.

---

## ESLint — Linter untuk Kode Konsisten

**ESLint** adalah alat yang membaca kode Anda dan memperingatkan jika ada masalah — seperti variabel yang tidak dipakai, sintaks mencurigakan, atau pelanggaran aturan tertentu.

```bash
npm install -D eslint
```

### Kenapa Butuh ESLint?

```js
// ❌ Masalah yang ditangkap ESLint:
const nama = "Budi";     // ⚠️ Variabel tidak pernah dipakai
console.log(namaa);       // ⚠️ Typo! ESLint tahu 'namaa' tidak didefinisikan
let x = 10;               // 💡 x tidak pernah berubah, sebaiknya pakai const
```

### Konfigurasi Dasar

File `.eslintrc.json` atau `eslint.config.js`:

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "off",
    "prefer-const": "error",
    "eqeqeq": ["error", "always"]
  }
}
```

Rule populer:
| Rule | Fungsi |
|---|---|
| `no-unused-vars` | Peringatkan variabel yang tidak dipakai |
| `prefer-const` | Sarankan `const` jika variabel tidak di-reassign |
| `eqeqeq` | Larang `==`, harus pakai `===` |
| `no-console` | Larang `console.log` di production |

---

## Prettier — Code Formatter Otomatis

Jika ESLint memeriksa **logika dan best practice**, Prettier bertugas mengurusi **kerapian visual** — indentasi, spasi, koma, titik koma.

```bash
npm install -D prettier
```

### Sebelum vs Sesudah Prettier

```js
// SEBELUM Prettier (berantakan)
function hitung ( a,b ){
const hasil=a+b;
return hasil;}

// SESUDAH Prettier (rapi otomatis)
function hitung(a, b) {
  const hasil = a + b;
  return hasil;
}
```

### Konfigurasi `.prettierrc`

```json
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80
}
```

> **Tips Pro:** Pasang extension ESLint dan Prettier di VS Code, lalu aktifkan **Format on Save**. Setiap kali Anda menekan `Ctrl+S`, kode otomatis rapi seperti disulap.

---

## `.gitignore` — Menjaga Repositori Bersih

File `.gitignore` memberi tahu Git file dan folder mana yang **tidak boleh** dilacak. Jangan sampai folder `node_modules/` (yang bisa berukuran ratusan MB) ikut ter-commit ke repositori.

Contoh `.gitignore` standar untuk proyek JavaScript:

```
# Dependencies
node_modules/

# Build output
dist/
build/

# Environment variables (bisa mengandung API key rahasia)
.env
.env.local

# Log files
*.log

# OS files
.DS_Store
Thumbs.db

# Editor
.vscode/
.idea/
```

> **Penting:** File `.env` jangan pernah di-commit! File ini biasanya berisi API key, password database, dan informasi sensitif lainnya.

---

## Struktur Proyek Modern

Ini adalah struktur folder yang umum ditemukan di proyek JavaScript modern:

```
proyek/
├── node_modules/      ← Library yang diinstal (JANGAN di-commit!)
├── public/            ← Asset statis (favicon, robots.txt)
├── src/               ← Kode sumber aplikasi
│   ├── assets/        ← Gambar, font, style global
│   ├── components/    ← Komponen UI
│   ├── utils/         ← Fungsi bantuan/utilitas
│   ├── main.js        ← Entry point aplikasi
│   └── style.css      ← Style global
├── .gitignore         ← File yang diabaikan Git
├── .eslintrc.json     ← Konfigurasi ESLint
├── .prettierrc        ← Konfigurasi Prettier
├── index.html         ← Halaman HTML utama
├── package.json       ← Metadata & dependensi proyek
└── vite.config.js     ← Konfigurasi Vite (optional)
```

---

## Cara Setup Proyek JavaScript dari Nol dengan Vite

Mari kita praktikkan setup proyek modern langkah demi langkah:

### Langkah 1: Buat Proyek dengan Vite

```bash
npm create vite@latest belajar-tooling
# Pilih: Vanilla → JavaScript

cd belajar-tooling
npm install
```

### Langkah 2: Instal ESLint & Prettier

```bash
npm install -D eslint prettier
```

### Langkah 3: Inisialisasi Konfigurasi

```bash
# Buat konfigurasi ESLint
npx eslint --init

# Buat file konfigurasi Prettier
echo '{ "semi": true, "singleQuote": false, "tabWidth": 2 }' > .prettierrc
```

### Langkah 4: Edit `package.json` — Tambah Script

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src/",
    "format": "prettier --write src/"
  }
}
```

### Langkah 5: Jalankan Dev Server

```bash
npm run dev
# Buka http://localhost:5173 di browser
```

### Langkah 6: Coding, Linting, Formatting

```bash
# Jalankan linter untuk cek masalah
npm run lint

# Format semua file secara otomatis
npm run format
```

---

## Tips Best Practices untuk Pemula

1. **Selalu pakai `const`** — Kalau nilainya tidak berubah, gunakan `const`. Jika perlu re-assign, baru pakai `let`. JANGAN pakai `var`.

2. **ESLint strict mode sejak awal** — Atur aturan ESLint seketat mungkin (`error`, bukan `warn`). Lebih baik dibentak ESLint saat coding daripada error di production.

3. **Commit `.gitignore` duluan** — Sebelum commit apapun, commit file `.gitignore` terlebih dahulu. Ini mencegah `node_modules/` tidak sengaja masuk repositori.

4. **Gunakan `npx` untuk tool sementara** — Tidak perlu menginstal `create-vite` secara global. `npx create-vite` otomatis mengunduh versi terbaru setiap kali dijalankan.

5. **Format sebelum commit** — Biasakan menjalankan `npm run format` sebelum setiap commit. Atau lebih baik lagi, pasang pre-commit hook.

6. **Satu tanggung jawab per file** — File `utils/math.js` hanya berisi fungsi matematika. Jangan campur fungsi fetch API di file yang sama.

7. **Jangan modifikasi `node_modules/`** — Folder ini adalah hasil unduhan NPM. Jika ada bug di library yang Anda gunakan, Anda tidak memperbaiki isi folder ini, melainkan buka issue di repositori library tersebut.
