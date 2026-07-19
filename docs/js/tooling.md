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

## Semver — Membaca Versi & Simbol `^` `~`

Versi paket mengikuti standar **Semver** (Semantic Versioning): `MAJOR.MINOR.PATCH`.

- `MAJOR` (1.x.x) — perubahan **breaking** (migrasi manual)
- `MINOR` (x.1.x) — fitur baru **backward-compatible**
- `PATCH` (x.x.1) — bug fix **backward-compatible**

Contoh: `1.4.2 → 1.4.3` (patch), `1.4.2 → 1.5.0` (minor), `1.4.2 → 2.0.0` (major breaking).

### Simbol di `package.json`

```json
{
  "dependencies": {
    "axios": "^1.6.0",    // caret: ≥1.6.0 <2.0.0   (patch + minor, bukan major)
    "lodash": "~4.17.20", // tilde: ≥4.17.20 <4.18.0 (patch saja)
    "react": "18.2.0",     // exact: HANYA 18.2.0
    "vue": "*"             // any version (jangan!)
  }
}
```

| Simbol | Range diizinkan | Cocok untuk |
|---|---|---|
| `^1.6.0` (caret) | Patch & minor → aman untuk fitur non-breaking | Default NPM, mayoritas paket |
| `~1.6.0` (tilde) | Hanya patch → sangat konservatif | Library kritis, tak boleh rusak |
| `1.6.0` (exact) | Versi persis | CI, monorepo, paket dengan riwayat breaking sering |

```bash
# Update ke minor/patch tertinggi yang kompatibel
npm update axios

# Update ke versi eksak (ubah package.json)
npm install axios@1.8.0

# Lihat versi tersedia
npm view axios versions
```

::: tip Mengapa `npm install` kadang "tiba-tiba rusak"?
Karena `^` mengizinkan update minor, `npm install` di mesin baru bisa dapat versi lebih baru → ada bug. Maka penting commit `package-lock.json` agar versi eksak terkunci.
:::

---

## `package-lock.json` & `npm ci`

`package-lock.json` adalah file yang **menyimpan versi eksak dari semua dependency** (termasuk sub-dependency) beserta hash-nya. Tujuannya:

- Hasil instalasi **reproduksibel** di mesin lain / CI → komitabel
- Mencegah *dependency drift* antar anggota tim
- Deteksi *supply chain attack* (hash mismatch)

```bash
npm install             # baca package.json → tulis/update lockfile kalaur perlu
npm ci                  # (clean install) hapus node_modules, install EKSAK dari lockfile
                        # wajib ada package-lock.json, tidak akan mengubahnya
                        # lebih cepat & deterministik → ideal untuk CI
```

::: tip
- Selalu commit `package-lock.json` (NPM) / `yarn.lock` (Yarn) / `pnpm-lock.yaml` (pnpm).
- Hapus `node_modules/` dan jalankan `npm ci` kalau repo Anda "rusak aneh" — sering kali install ulang dari lock menyelesaikannya.
:::

---

## Alternatif Package Manager: pnpm & Yarn

NPM adalah default, tetapi banyak tim/product pick lain:

| Package Manager | Ciri khas | Kelebihan |
|---|---|---|
| **NPM** | Default Node | Paling universal, dukungan docs terbanyak |
| **pnpm** | Symlink + store global | Hemat disk (1 copy per versi), install paralel super cepat, strict (no phantom deps) |
| **Yarn (v4)** | Zero-install, PnP | Cepat, offline-first, workspaces bawaan |
| **Bun** | All-in-one (runtime + pkg + bundler) | Performa ekstrem (native code) |

Pemula disarankan pakai NPM dulu — dokumentasi proyek open source paling sering pakai NPM. Beralih ke pnpm saat Anda mulai merasa NPM lambat di monorepo.

Perintah setara:

| Aksi | NPM | pnpm | Yarn |
|---|---|---|---|
| Install all | `npm install` | `pnpm install` | `yarn` |
| Tambah paket | `npm i axios` | `pnpm add axios` | `yarn add axios` |
| Run script | `npm run dev` | `pnpm dev` | `yarn dev` |
| Exec binary | `npx vite` | `pnpm dlx vite` / `pnpm exec vite` | `yarn dlx vite` |

---

## `nvm` — Mengelola Banyak Versi Node

Proyek A butuh Node 18, proyek B butuh Node 20, dan Anda beralih bolak-balik. Pasang [**nvm**](https://github.com/nvm-sh/nvm) (Linux/Mac/WSL) atau [**fnm**](https://github.com/Schniz/fnm) / [**Volta**](https://volta.sh) (Windows).

```bash
nvm install 20            # install Node 20
nvm use 20                # ganti ke Node 20 untuk shell ini
nvm ls                    # daftar versi terinstall
nvm alias default 20      # jadikan default saat buka terminal baru
```

Tip: tambah file `.nvmrc` di root proyek berisi `20`, lalu `nvm use` otomatis pakai versi itu.

```bash
# .nvmrc
20
```

```bash
# di PowerShell / shell
nvm use          # baca .nvmrc → switch
```

::: tip Windows
`nvm-windows` adalah port terpisah (orang berbeda). fnm lebih aktif & cross-platform. Volta paling "zero-config" (auto-switch berdasar folder).
:::

---

## TypeScript — Static Typing untuk JavaScript

**TypeScript (TS)** adalah superset JavaScript yang menambahkan **tipe statis**. Kode TS tidak langsung berjalan di browser — ia di-*compile* (transpile) menjadi JavaScript biasa.

Mengapa industri beralih:
- Catch bug saat *development* (sebelum `npm run build`) — variabel typo, typo properti object, lupa kasih argumen
- Editor autocomplete jauh lebih cerdas ( IntelliSense tahu bentuk objek dari API/library)
- Self-documented: tipe = dokumentasi yang tidak bisa outdated

```ts
// TypeScript                          // JavaScript equivalent
function tambah(a: number, b: number): number {
  return a + b;
}

interface User {
  id: number;
  nama: string;
  email?: string;                    // ? = optional
}

const user: User = { id: 1, nama: "Budi" };
//                               ^^^ TS langsung merah kalau lupa field wajib
```

Saat ini hampir semua proyek produksi (Vercel, GitHub, Microsoft, dll) pakai TypeScript. Bahkan framework like Next.js, Nuxt, SvelteKit default-nya TS. Vite & Vitest mendukung `.ts` out of the box — tinggal `npm install -D typescript`.

Setup minimal:
```bash
npm install -D typescript
npx tsc --init              # buat tsconfig.json
```

::: tip Mulai bertahap
Tidak perlu migrasi semua file ke TS sekaligus. Sebagian proyek hybrid: file lama `.js`, file baru `.ts`. TS bisa menampung keduanya. Atau pakai **JSDoc** type annotations (`/** @param {number} a */`) — dapat manfaat IDE tanpa migrasi.
:::

---

## Husky + lint-staged — Pre-commit Hook Praktis

Tips §5 mengatakan "format sebelum commit, atau pakai pre-commit hook". Sekarang kita wujudkan dengan **Husky** (manage Git hooks) + **lint-staged** (run command only pada file yang di-stage).

```bash
# Setup satu kali per proyek
npm install -D husky lint-staged
npx husky init                    # buat .husky/ + .husky/pre-commit sample

# Custom pre-commit
echo "npx lint-staged" > .husky/pre-commit
chmod +x .husky/pre-commit        # Windows skip (Husky handle)
```

Tambah config `lint-staged` di `package.json`:
```json
{
  "lint-staged": {
    "*.{js,ts}":  ["eslint --fix", "prettier --write"],
    "*.{css,html,json,md}": ["prettier --write"]
  }
}
```

Sekarang setiap `git commit` hanya memformat file yang Anda stage — bukan seluruh repo. Cepat & aman. Lalu tambahkan **commit-msg hook** untuk enforce [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, dll):

```bash
echo "npx --no-install commitlint --edit \$1" > .husky/commit-msg
```

---

## `.env` — Environment Variables yang Aman

File `.env` menyimpan **konfigurasi** per-environment (dev/staging/prod): API endpoint, token, fitur flag. Wajib di-`.gitignore`!

```bash
# .env
VITE_API_URL=https://api.example.com
VITE_GA_ID=G-XXXXXXXX
DATABASE_URL=postgres://user:pass@db:5432/app          # server-side only
```

Cara baca di kode (Vite):
```js
// Hanya variabel berawalan VITE_ yang diekspos ke client
const apiUrl = import.meta.env.VITE_API_URL;
```

Untuk Node.js murni (yang tidak punya `import.meta.env`):
```bash
npm install dotenv
```
```js
import "dotenv/config";                 // load .env ke process.env
console.log(process.env.DATABASE_URL);
```

::: warning
Variabel yang berawalan `VITE_` atau `NEXT_PUBLIC_` **di-bundle ke file JS** dan bisa dilihat user di DevTools. Jangan taruh secret server di sana. Token sens-itif harus tinggal di backend dan diakses lewat API.
:::

Untuk CI/CD (GitHub Actions, Vercel), variabel env disimpan lewat UI panel, bukan file. Lalu diakses dalam workflow GitHub Actions lewat sintaks `secrets.API_KEY` (lihat dokumentasi GitHub untuk sintaks lengkap).

---

## Debugging JavaScript di VS Code

Kapan pakai debugger (lebih powerful dari `console.log`)? Saat bug kompleks, Redux state aneh, atau ingin inspeksi call stack lengkap.

### Debug Node.js / Vite SSR
1. Buka file JS/TS
2. Beralih ke panel **Run and Debug** (Ctrl+Shift+D)
3. Klik **create a launch.json file** → pilih **Node.js**
4. Tambah breakpoint (klik kiri nomor baris, bulatan merah)
5. Tekan **F5** untuk mulai debug

```json
// .vscode/launch.json minimal
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Jalankan Vitest aktif",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/node_modules/vitest/vitest.mjs",
      "args": ["run", "${file}"],
      "skipFiles": ["<node_internals>/**"]
    }
  ]
}
```

### Debug browser di VS Code (Edge/Chrome)
Install ekstensi **Debugger for Chrome** (bawaan Edge/Chrome debugger sering sudah cukup) atau pakai built-in `launch.json`:
```json
{
  "type": "chrome",
  "request": "launch",
  "name": "Debug Vite di Chrome",
  "url": "http://localhost:5173",
  "webRoot": "${workspaceFolder}/src"
}
```

### Fitur inti debugger
- **Breakpoint**: pause eksekusi di baris tertentu
- **Step over (F10)**: jalankan baris berikut, lewati panggilan fungsi
- **Step into (F11)**: masuk ke dalam fungsi
- **Step out (Shift+F11)**: keluar dari fungsi sekarang
- **Watch**: pantau ekspresi (`user.address?.city`, `x * 2`)
- **Call Stack**: lintasan pemanggilan fungsi (untuk "bagaimana sampai sini?")
- **Conditional breakpoint**: klik kanan breakpoint → "Edit Breakpoint" → kondisi, mis `i === 50` (pause hanya saat i=50)

::: tip Trick `debugger; statement`
Tulis `debugger;` di kode Anda. Saat DevTools terbuka di browser, eksekusi pause persis di baris itu — kalau DevTools tidak terbuka, baris ini diabaikan. Berguna saat console.log sudah tak cukup.
:::

---

## Tips Best Practices untuk Pemula

1. **Selalu pakai `const`** — Kalau nilainya tidak berubah, gunakan `const`. Jika perlu re-assign, baru pakai `let`. JANGAN pakai `var`.

2. **ESLint strict mode sejak awal** — Atur aturan ESLint seketat mungkin (`error`, bukan `warn`). Lebih baik dibentak ESLint saat coding daripada error di production.

3. **Commit `.gitignore` duluan** — Sebelum commit apapun, commit file `.gitignore` terlebih dahulu. Ini mencegah `node_modules/` tidak sengaja masuk repositori.

4. **Gunakan `npx` untuk tool sementara** — Tidak perlu menginstal `create-vite` secara global. `npx create-vite` otomatis mengunduh versi terbaru setiap kali dijalankan.

5. **Format sebelum commit** — Biasakan menjalankan `npm run format` sebelum setiap commit. Atau lebih baik lagi, pasang pre-commit hook.

6. **Satu tanggung jawab per file** — File `utils/math.js` hanya berisi fungsi matematika. Jangan campur fungsi fetch API di file yang sama.

7. **Jangan modifikasi `node_modules/`** — Folder ini adalah hasil unduhan NPM. Jika ada bug di library yang Anda gunakan, Anda tidak memperbaiki isi folder ini, melainkan buka issue di repositori library tersebut.
