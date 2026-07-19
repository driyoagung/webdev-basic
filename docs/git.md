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

## Merge Conflict — Saat Dua Developer Mengubah File yang Sama

Konflik terjadi ketika dua branch mengubah **baris yang sama** di file yang sama. Git tidak bisa memutuskan versi mana yang menang — ia menyerahkan ke Anda.

Saat `git merge` (atau `git pull`) menjumpai konflik, file akan ditandai dengan penanda khusus:

```
<<<<<<< HEAD
const nama = "Budi";          // versi lokal (branch sekarang)
=======
const nama = "Andi";          // versi dari branch masuk
>>>>>>> fitur-nama-baru
```

Cara menyelesaikan:

```bash
# 1. Cek file yang konflik
git status
# both modified:   src/user.js

# 2. Buka file di editor, cari penanda <<<<<<< ======= >>>>>>>
#    - Pilih salah satu versi, ATAU gabung jadi versi baru
#    - Hapus tanda penanda

# 3. Setelah file bersih, stage & commit
git add src/user.js
git commit                  # tanpa -m → buka editor dgn pesan default
```

::: tip Cara cepat di VS Code
Klik file yang konflik → VS Code menyoroti 4 tombol: **Accept Current** / **Accept Incoming** / **Accept Both** / **Compare**. Lebih cepat dari merangkai tangan.
:::

Untuk membatalkan merge yang belum rampung selesai:
```bash
git merge --abort       # kembali ke keadaan sebelum merge
```

::: warning Hindari konflik sejak awal
- Buat branch kecil & merge cepat (1–2 hari, bukan 1 bulan)
- Sering `git pull` dari `main`
- Bagi file besar jadi file kecil agar jarang menyentuh baris yang sama
- Diskusikan perubahan struktural besar dengan tim sebelum coding
:::

---

## Rebase vs Merge — Kapan Pakai Yang Mana?

`git rebase` adalah alternatif `git merge` yang menghasilkan **riwayat linear** (tidak ada commit merge). Ia "memindahkan" branch Anda ke atas ujung branch target, seolah-olah Anda mulai dari posisi terkini.

```bash
# Skenario: branch `fitur` dikerjakan 3 hari, sementara `main` sudah maju
git checkout fitur
git rebase main           # ulang commit-commit fitur di atas puncak main
# Setiap commit lama fitur "di-copy" sebagai commit baru di atas main

# Kalau ada konflik, resolve lalu:
git rebase --continue
# atau batalkan:
git rebase --abort
```

| Aspek | `git merge` | `git rebase` |
|---|---|---|
| Riwayat | Ada commit merge (bifurkasi) | Linear, seolah satu jalur |
| Keamanan | Aman — tidak ubah commit lama | Berbahaya kalau branch sudah di-push publik |
| Kapan pakai | Branch fitur → main (umum) | Sinkronkan branch fitur ke main baru sebelum merge (`git pull --rebase`) |
| Aturan emas | — | **Jangan rebase branch publik** yang sudah di-push & dikerjakan orang lain |

**Aturan emas rebase:** *Jangan pernah rebase commit yang sudah ada di branch publik.* Rebase membuat commit baru (hash berubah) → push ditolak → rekan tim yang sudah pull akan bingung.

### Squash: merapikan banyak commit sebelum merge
Saat suatu fitur sudah rampung, Anda sering punya banyak commit kecil ("wip", "fix typo", "lagi fix"). Di Pull Request, squash menyatukannya jadi 1 commit yang bersih:

```bash
git rebase -i HEAD~3      # interactive rebase 3 commit terakhir
# Pilih: pick / squash / reword / drop
# squash  → gabung ke commit sebelumnya
# reword  → ganti pesan commit
# drop    → hapus commit
```

---

## `git stash` — Parkir Perubahan yang Belum Di-commit

Sedang coding di branch A, tapi tiba-tiba perlu switch ke branch B untuk fix bug. Perubahan yang belum di-commit akan ikut pindah (yang sering bikin bingung). `git stash` "menyimpannya ke kantong" sementara:

```bash
git stash                 # simpan perubahan belum-commit ke stash list
git stash list            # lihat isi stash: stash@{0}, stash@{1}, ...
git checkout main         # bebas pindah branch
# ... fix bug, commit, kembali ke A
git checkout A
git stash pop             # ambil kembali stash terbaru & hapus dari list
git stash apply           # ambil tapi tetap simpan di stash list (idempotent)
git stash drop stash@{0}  # hapus satu stash
git stash clear           # hapus semua
```

`git stash -u` juga menyertakan file *untracked* (baru). `git stash -m "pesan saya"` memberi label pada stash.

---

## `git cherry-pick` — Mengambil Commit Tertentu

Kadang ada satu commit bagus di branch lain yang ingin Anda ambil **tanpa** meng-merge seluruh branch:

```bash
git cherry-pick <commit-hash>   # ambil 1 commit ke branch sekarang
git cherry-pick A B C           # ambil 3 commit sekaligus
git cherry-pick A..D            # ambil range (A tidak ikut, D ikut)
```

Hasilnya commit baru dengan ID berbeda tetapi isi patch sama.

---

## `git tag` — Menandai Versi Rilis

Tag = penanda permanen pada commit tertentu, biasanya untuk rilis (`v1.0.0`). Berbeda dengan branch yang bergerak, tag diam di satu commit.

```bash
git tag v1.0.0                  # tag ringan (lightweight)
git tag -a v1.0.0 -m "Rilis pertama"   # tag beranotasi (direkomendasikan)

# Push tag ke remote (tidak otomatis ter-push bersama commit!)
git push origin v1.0.0
git push origin --tags         # push semua tag

# Lihat & hapus
git tag                        # daftar semua tag
git tag -d v1.0.0              # hapus lokal
git push origin :refs/tags/v1.0.0   # hapus dari remote
```

Konvensi [Semver](./glossary#semver-semantic-versioning): `vMAJOR.MINOR.PATCH` (mis `v1.4.2`). Tag beranotasi menyimpan pembuat, tanggal, & pesan — gunakan ini untuk rilis publik.

---

## Undo & Penyelamat: `reset` / `revert` / `reflog`

Tiga senjata untuk membatalkan perubahan:

### `git reset` — Pindahkan HEAD (lokal)
```bash
git reset --soft HEAD~1     # undo commit, perubahan tetap di staging
git reset --mixed HEAD~1    # undo commit + unstaging (default)
git reset --hard HEAD~1     # undo commit + HAPUS perubahan (berbahaya!)
```
::: warning
`git reset --hard` menghapus perubahan yang belum di-commit **secara permanen**. Hanya `git reflog` yang bisa menyelamatkan Anda. Pakai hanya bila Anda yakin.
:::

### `git revert` — Buat Commit Kebalik (aman untuk branch publik)
Tidak mengubah riwayat — melainkan menambah commit baru yang "membatalkan" commit target. **Pilihan aman untuk branch publik.**
```bash
git revert <commit-hash>    # buat commit baru yang membalik commit-hash
git revert HEAD             # batalkan commit terakhir
```

### `git reflog` — Penyelamat Saat "Hilang"
Git mencatat **setiap kali HEAD bergerak**, meskipun commit itu sudah tidak dirujuk branch mana pun. Anda bisa "kembali ke masa lalu" lewat reflog.

```bash
git reflog
# a3b1c2d HEAD@{0}: reset: moving to HEAD~3
# e4f5a6b HEAD@{1}: commit: percobaan yang tak sengaja ter-reset

git reset --hard e4f5a6b    # kembalikan ke commit yang "hilang"
```

::: tip
Semua commit yang Anda buat (bahkan setelah `reset --hard`) sebenarnya masih ada di Git selama ~30 hari. Jangan panik — `git reflog` mungkin bisa menolong.
:::

---

## Melihat Riwayat: `git log` Versi Visualization

```bash
# Riwayat one-line
git log --oneline

# Dengan grafik branch (paling berguna)
git log --oneline --graph --all
# Output contoh:
# * 9d7f3a2 (HEAD -> main) Merge pull request #42
# |\
# | * 2c1d3b7 (fitur-search) tambah komponen search
# | * 8a9b3c1 wire up API
# |/
# * 4e5f6a7 refactor layout

# Filter
git log --author="Budi"            # hanya commit oleh Budi
git log --since="2 weeks ago"      # 2 minggu terakhir
git log --grep="fix"               # commit yang pesannya cocok regex
git log -p src/user.js             # lihat diff file tertentu
git log --stat                     # ringkasan file yang berubah tiap commit
```

Tip: alias `git lg` untuk perintah cantik:
```bash
git config --global alias.lg "log --oneline --graph --all --decorate"
# Sekarang `git lg` = riwayat grafik indah
```

---

## GitHub Flow — Kolaborasi Lewat Pull Request

Saat bekerja di tim / proyek open source, alurnya:

1. **Fork** repo target (kalau Anda bukan anggota) → muncul copy di akun Anda
2. **Clone** fork ke lokal
3. **Branch** baru: `git checkout -b fitur-newton`
4. **Commit** perubahan kecil, sering
5. **Push** ke fork Anda: `git push origin fitur-newton`
6. Buka **Pull Request (PR)** di GitHub web dari fork → target branch
7. **Review**: reviewer beri komentar/request changes
8. Anda update (lanjut commit & push ke branch yang sama), PR otomatis update
9. Setelah approved & lulus CI: **Squash & merge** (atau Rebase & merge) di GitHub
10. Hapus branch lokal & remote

Tip menjaga PR bersih:
- 1 PR = 1 topik (jangan campur fitur yang tak berhubungan)
- Tulis deskripsi PR jelas (apa, kenapa, cara test)
- Tanggapi komentar review dengan commit perbaikan, bukan memaksa argumen

---

## Git Hooks & CI/CD — Otomatisasi

### Git Hooks — script yang berjalan otomatis
Git bisa menjalankan shell script pada event tertentu. Letakkan di `.git/hooks/` (file tanpa ekstensi, harus executable):

| Hook | Kapan | Pakai umum |
|---|---|---|
| `pre-commit` | Sebelum commit dibuat | Lint, format, cek typo |
| `commit-msg` | Saat tulis pesan commit | Validasi Conventional Commits |
| `pre-push` | Sebelum push | Run test, build |
| `post-merge` | Setelah merge | Install dependencies |

Manual menyimpan hook di `.git/hooks/` rawan hilang saat clone. Pakai **[Husky](https://typicode.github.io/husky/)** + **lint-staged** agar hooks disimpan di repo:

```bash
npm install -D husky lint-staged
npx husky init                          # buat .husky/pre-commit
echo "npx lint-staged" > .husky/pre-commit
```

```json
// package.json
{
  "lint-staged": {
    "*.{js,ts}": ["eslint --fix", "prettier --write"],
    "*.css": ["prettier --write"]
  }
}
```

### GitHub Actions — CI/CD populer untuk repo Git
File YAML di `.github/workflows/*.yml` otomatis berjalan saat push/PR:

```yaml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci            # install seperti lock, bukan npm install
      - run: npm run lint
      - run: npm test          # jalankan unit test
```

Workflow umum:
- **CI**: lint + typecheck + test on every PR → blokir merge jika gagal (lindungi `main` lewat branch protection rules)
- **CD**: build & deploy otomatis saat tag/commit ke `main` → Vercel/Netlify/GitHub Pages

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
