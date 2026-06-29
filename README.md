# Web Dev Basic

Repository ini adalah tempat belajar interaktif untuk dasar-dasar Web Development, mencakup **HTML**, **CSS**, dan **JavaScript**. 

Arsitektur repository ini dibangun dengan memisahkan teori dan praktik:
- **`docs/`**: Berisi materi teori dan dokumentasi yang dibangun menggunakan [VitePress](https://vitepress.dev/).
- **`src/`**: Berisi file-file mentah praktik (HTML, CSS, JS murni) untuk melakukan studi kasus secara langsung.

## Menjalankan Dokumentasi (Lokal)

Pastikan Anda sudah menginstal Node.js di komputer Anda.

1. Clone repository ini:
   ```bash
   git clone git@github.com:driyoagung/webdev-basic.git
   ```
2. Install dependensi:
   ```bash
   npm install
   ```
3. Jalankan development server untuk dokumentasi:
   ```bash
   npm run docs:dev
   ```
4. Buka browser dan arahkan ke localhost yang muncul di terminal (biasanya `http://localhost:5173`).

## Struktur Folder

```text
webdev-basic/
├── docs/           # Area Teori & Dokumentasi (VitePress)
│   ├── .vitepress/ # Konfigurasi web VitePress
│   ├── html/       # Materi HTML
│   ├── css/        # Materi CSS
│   └── js/         # Materi JavaScript
├── src/            # Area Praktik & Studi Kasus
│   ├── html/       # Latihan HTML
│   ├── css/        # Latihan CSS
│   └── js/         # Latihan JavaScript
└── package.json    # Konfigurasi NPM & Scripts
```
