# Git & Version Control Dasar

Pernahkah Anda berada dalam situasi ini?

> *"Tadi fiturnya sudah jalan, sekarang kok rusak? Siapa yang ubah? Kapan berubahnya? Apa yang diubah?"*

Tanpa **Version Control**, pertanyaan-pertanyaan itu hanya bisa dijawab dengan spekulasi. Dengan Git, jawabannya tersedia dalam satu perintah.

## Apa Itu Git & Version Control?

**Git** adalah sistem **Version Control** (pengontrol versi) yang paling populer di dunia. Ia merekam setiap perubahan yang terjadi pada kode proyek Anda dari waktu ke waktu.

**Analoginya:** Bayangkan Anda sedang menulis novel. Setiap hari Anda menyimpan versi terbaru dengan nama: `novel_v1.docx`, `novel_v2.docx`, `novel_v2_final.docx`, `novel_v2_final_revisi.docx`... Git menghilangkan semua kekacauan ini. Ia otomatis menyimpan dan melacak semua versi dalam satu tempat rapi. Kapan pun Anda ingin kembali ke versi 3 hari lalu, Anda bisa.

---

## Kenapa Developer Wajib Pakai Git?

1. **Riwayat Perubahan** — Setiap perubahan tercatat: siapa, kapan, apa yang diubah, dan kenapa.
2. **Kolaborasi** — Puluhan developer bisa mengerjakan satu proyek yang sama tanpa saling menimpa pekerjaan orang lain.
3. **Backup Otomatis** — Dengan Git hosting (GitHub, GitLab), kode Anda aman meskipun laptop rusak.
4. **Eksperimen Aman** — Ingin coba ide gila? Bikin branch. Kalau gagal, hapus branch-nya. Kode utama tetap aman.
5. **Portofolio** — Profil GitHub yang aktif adalah CV terbaik untuk developer di era modern.

---

## Istilah Penting

| Istilah | Arti |
|---|---|
| **Repository (Repo)** | Folder/tempat penyimpanan proyek yang dilacak oleh Git |
| **Commit** | Titik simpan permanen. Snapshot dari seluruh file pada suatu waktu. Setiap commit punya ID unik (hash SHA) |
| **Branch (Cabang)** | Jalur pengembangan terpisah. Cabang dari kode utama untuk mengerjakan fitur tanpa mengganggu yang lain |
| **Merge** | Menggabungkan perubahan dari satu branch ke branch lain |
| **Remote** | Repositori di server (GitHub, GitLab). Tempat sinkronisasi kode |
| **Clone** | Menyalin repo dari remote ke komputer lokal |
| **Pull** | Mengunduh perubahan terbaru dari remote ke lokal |
| **Push** | Mengunggah perubahan lokal ke remote |

---

## Setup Awal

### 1. Inisialisasi Repositori Lokal

```bash
# Buat folder proyek baru
mkdir proyek-pertama
cd proyek-pertama

# Inisialisasi Git di folder ini
git init
# Output: Initialized empty Git repository in /path/proyek-pertama/.git/
```

### 2. Konfigurasi Identitas (Sekali Saja)

```bash
git config --global user.name "Nama Anda"
git config --global user.email "email@anda.com"
```

Nama dan email ini akan muncul di setiap commit yang Anda buat. Gunakan email yang sama dengan akun GitHub Anda.

### 3. Menghubungkan ke GitHub

```bash
# Buat repo baru di GitHub (lewat website), lalu:
git remote add origin https://github.com/username/proyek-pertama.git

# Cek remote yang terhubung
git remote -v
```

---

## Workflow Dasar (Sehari-hari)

Ini adalah 4 perintah yang paling sering Anda pakai, setiap hari, berkali-kali:

```bash
# 1. Cek status: file apa yang berubah?
git status

# 2. Tandai file yang mau di-commit (staging)
git add nama-file.js
git add .             # Tambah SEMUA file yang berubah

# 3. Simpan perubahan secara permanen (commit)
git commit -m "Menambahkan fitur login dengan validasi email"

# 4. Kirim perubahan ke GitHub
git push origin main
```

### Penjelasan Step-by-Step

**`git status`** — Selalu mulai dengan ini. Ia memberi tahu:
- File apa yang baru (untracked)
- File apa yang sudah dimodifikasi (modified)
- File apa yang sudah di-staging (staged, siap commit)

**`git add`** — Memindahkan file ke **staging area** (area tunggu). Ini adalah konsep unik Git: Anda memilih secara eksplisit file mana yang masuk dalam commit berikutnya. Tidak semua file berubah harus di-commit sekaligus.

**`git commit -m "pesan"`** — Menyimpan snapshot permanen dari file yang ada di staging area. Flag `-m` diikuti pesan commit.

**`git push`** — Mengirim commit lokal ke remote (GitHub). Sampai tahap ini, baru rekan tim Anda bisa melihat perubahan Anda.

---

## `.gitignore` — File yang Wajib Ada

Tidak semua file perlu dilacak Git. Folder `node_modules/`, file konfigurasi IDE, file build, dan file yang berisi password/API key harus diabaikan.

Buat file bernama `.gitignore` di root proyek:

```
# Dependencies
node_modules/

# Build
dist/
build/

# Environment (password & API key)
.env

# Log
*.log

# Sistem Operasi
.DS_Store
Thumbs.db

# Editor
.vscode/
.idea/
```

> **PENTING:** Commit file `.gitignore` ini duluan — sebelum file lain — agar aturannya langsung berlaku.

---

## Branching — Bekerja di Jalur Terpisah

Branch adalah fitur paling powerful dari Git. Ia memungkinkan Anda mengerjakan fitur baru **tanpa menyentuh kode utama** (`main`).

```bash
# Membuat branch baru
git branch fitur-search

# Pindah ke branch tersebut
git checkout fitur-search

# Shorthand: buat + langsung pindah
git checkout -b fitur-search
```

### Menggabungkan Branch (Merge)

Setelah fitur selesai, gabungkan kembali ke `main`:

```bash
# Pindah ke branch main
git checkout main

# Gabungkan perubahan dari branch fitur
git merge fitur-search

# (Opsional) Hapus branch yang sudah tidak dipakai
git branch -d fitur-search
```

---

## Studi Kasus: Alur Kerja Fitur

Mari kita simulasikan alur kerja nyata menambahkan fitur *"halaman about"* ke website:

```bash
# 1. Pastikan kode lokal sudah yang terbaru
git checkout main
git pull origin main

# 2. Buat branch untuk fitur baru
git checkout -b halaman-about

# 3. Coding fitur...
#    (edit file, tambah komponen, styling, dll)

# 4. Cek status
git status

# 5. Staging & commit
git add pages/about.html css/about.css
git commit -m "Menambahkan halaman About dengan foto tim"

# 6. Edit lagi kalau ada revisi
git add pages/about.html
git commit -m "Memperbaiki typo di halaman About"

# 7. Push branch ke GitHub
git push origin halaman-about

# 8. Buka Pull Request di GitHub, diskusi dengan tim, lalu Merge!

# 9. Setelah di-merge, kembali ke main
git checkout main
git pull origin main
git branch -d halaman-about   # Hapus branch lokal (optional)
```

---

## Tips

### 1. Deskripsi Commit yang Jelas

Commit message adalah komunikasi Anda dengan developer lain (termasuk Anda sendiri 6 bulan ke depan).

```bash
# ❌ Buruk — tidak informatif
git commit -m "fix"
git commit -m "update"
git commit -m "wkwkwk"

# ✅ Baik — langsung paham isinya
git commit -m "Menambahkan validasi email pada form registrasi"
git commit -m "Memperbaiki bug navbar yang tumpang tindih di tampilan mobile"
```

Gunakan pola: **kata kerja + apa yang diubah**. Awali dengan huruf kapital, jangan diakhiri titik.

### 2. Commit Sering, Tapi Terukur

Jangan commit 100 file sekaligus. Juga jangan commit setiap 1 baris.

```
✅ Ideal: 1 commit = 1 perubahan logis
   Contoh:
   - Commit 1: "Menambahkan komponen Card"
   - Commit 2: "Mengintegrasi Card ke halaman Home"
   - Commit 3: "Menambahkan animasi hover pada Card"
```

### 3. Selalu Pull Sebelum Push

Sebelum push, biasakan `git pull` dulu. Ini mencegah konflik (conflict) karena kode di remote sudah berubah oleh rekan tim.

```bash
git pull origin main   # Download perubahan terbaru
# Jika ada konflik, selesaikan dulu
git push origin main   # Baru upload
```

### 4. Jangan Commit File Sensitif

Sekali ter-commit, file sensitif tetap ada di riwayat Git selamanya — meskipun Anda hapus di commit berikutnya. Selalu masukkan file `.env`, `credentials.json`, dan file sejenis ke `.gitignore`.

### 5. Gunakan Branch untuk Semua Perubahan

Jangan pernah coding langsung di `main`. Selalu buat branch baru, bahkan untuk perbaikan kecil. Ini melindungi `main` agar selalu dalam kondisi "siap deploy".

---

## Tool Pendukung

### VS Code Git Integration

VS Code memiliki GUI Git bawaan yang sangat intuitif. Di sidebar kiri, Anda bisa melihat:
- File yang berubah (dengan diff warna hijau/merah)
- Tombol stage (+), commit, dan push
- History commit
- Branch manager

Ini sangat membantu pemula untuk memahami konsep Git secara visual.

### GitHub Desktop

Jika CLI terasa terlalu abstrak, [GitHub Desktop](https://desktop.github.com/) adalah aplikasi GUI resmi dari GitHub. Semua operasi Git bisa dilakukan dengan klik — melihat diff, commit, push, pull, merge, resolusi konflik.

### Terminal CLI (Rekomendasi)

Meskipun GUI memudahkan, **belajar Git lewat terminal adalah investasi terbaik**. Semua server, CI/CD, dan tutorial internasional menggunakan CLI Git. Plus, akses fitur lanjutan jauh lebih mudah lewat terminal.

---

## Cheat Sheet Perintah Git

| Perintah | Fungsi |
|---|---|
| `git init` | Membuat repositori Git baru |
| `git clone <url>` | Menyalin repo dari remote |
| `git status` | Melihat status perubahan file |
| `git add <file>` | Menambahkan file ke staging area |
| `git add .` | Menambahkan semua perubahan ke staging |
| `git commit -m "pesan"` | Menyimpan perubahan (commit) |
| `git log` | Melihat riwayat commit |
| `git push origin <branch>` | Upload commit ke remote |
| `git pull origin <branch>` | Download perubahan dari remote |
| `git branch` | Melihat daftar branch lokal |
| `git branch <nama>` | Membuat branch baru |
| `git checkout <nama>` | Pindah ke branch lain |
| `git checkout -b <nama>` | Membuat + langsung pindah branch |
| `git merge <branch>` | Menggabungkan branch ke branch saat ini |
| `git branch -d <nama>` | Menghapus branch |
| `git remote -v` | Melihat daftar remote |
| `git diff` | Melihat perbedaan detail antar file |
