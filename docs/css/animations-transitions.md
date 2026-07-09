# CSS Animations & Transitions

Web yang statis terasa kaku. Web yang bergerak — tombol merespons saat disentuh, halaman muncul dengan transisi halus, loading spinner berputar — terasa **hidup**. Di sinilah CSS Animations dan Transitions berperan. Keduanya adalah alat utama untuk menghadirkan gerakan di halaman web.

## Perbedaan Transition vs Animation

| Aspek | Transition | Animation |
|---|---|---|
| Pemicu | Butuh trigger (hover, click, class change) | Bisa berjalan otomatis tanpa trigger |
| Kompleksitas | Hanya dari state A ke B | Bisa banyak state (A → B → C → ...) |
| Perulangan | Tidak bisa loop | Bisa infinite loop |
| Use case | Hover effect, smooth state change | Loading spinner, animasi kompleks |

> **Analoginya:** Transition seperti pintu geser — bergerak dari tertutup ke terbuka saat didorong. Animation seperti kincir angin — berputar terus-menerus tanpa henti.

---

## Transition

Transition memungkinkan properti CSS berubah secara halus dari satu nilai ke nilai lain dalam durasi tertentu.

### Sintaks Dasar

```css
.transisi {
  transition-property: background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
}

/* Shorthand */
.transisi-cepat {
  transition: all 0.2s ease-in-out;
}
```

### Properti Transition

```css
.tombol {
  background-color: #2196F3;
  /* property | duration | timing-function | delay */
  transition: background-color 0.3s ease, transform 0.2s linear;
}

.tombol:hover {
  background-color: #1565C0;
  transform: scale(1.1);
}
```

### `transition-timing-function`

Menentukan kurva kecepatan animasi — bagaimana perubahan terjadi sepanjang durasi.

| Nilai | Deskripsi | Analogi |
|---|---|---|
| `ease` | Mulai pelan, cepat di tengah, pelan di akhir (Default) | Mobil berhenti halus |
| `linear` | Kecepatan konstan dari awal sampai akhir | Kereta di rel lurus |
| `ease-in` | Mulai pelan, makin cepat | Mobil ngegas dari 0 |
| `ease-out` | Mulai cepat, makin pelan | Mobil mengerem |
| `ease-in-out` | Pelan di awal dan akhir, cepat di tengah | Ayunan bandul |

<style scoped>
.timing-box {
  background: #4CAF50;
  color: white;
  padding: 12px;
  border-radius: 6px;
  text-align: center;
  margin-bottom: 8px;
  transition: width 1.5s;
  width: 100px;
}
.timing-demo:hover .timing-box { width: 100%; }
.timing-ease { transition-timing-function: ease; }
.timing-linear { transition-timing-function: linear; }
.timing-ease-in { transition-timing-function: ease-in; }
.timing-ease-out { transition-timing-function: ease-out; }
.timing-ease-in-out { transition-timing-function: ease-in-out; }
</style>

<div class="preview-box">
  <p style="margin-top:0;font-weight:bold;font-size:0.85rem;">Bandingkan timing function (hover kotak di bawah)</p>
  <div class="timing-demo" style="background:#f5f5f5;padding:12px;border-radius:8px;">
    <div class="timing-box timing-ease" style="background:#4CAF50;">ease (Default)</div>
    <div class="timing-box timing-linear" style="background:#2196F3;">linear</div>
    <div class="timing-box timing-ease-in" style="background:#FF9800;">ease-in</div>
    <div class="timing-box timing-ease-out" style="background:#E91E63;">ease-out</div>
    <div class="timing-box timing-ease-in-out" style="background:#9C27B0;">ease-in-out</div>
  </div>
  <p style="text-align:center;font-size:0.75rem;color:gray;margin-top:8px;">Hover area abu-abu untuk melihat perbedaan kecepatan gerak.</p>
</div>

---

## Contoh Transition

### Tombol Membesar saat Hover

```css
.btn {
  background: #2196F3;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(33,150,243,0.4);
}
```

<div class="preview-box">
  <button class="btn-hover" style="background:#2196F3;color:white;padding:12px 24px;border:none;border-radius:6px;cursor:pointer;transition:transform 0.2s ease,box-shadow 0.2s ease;font-size:0.95rem;font-family:inherit;">Hover Saya!</button>
</div>

### Card Naik saat Hover

```css
.card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.15);
}
```

<div class="preview-box">
  <div style="display:flex;gap:12px;">
    <div class="card-hover" style="background:white;padding:20px;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.1);transition:transform 0.3s ease,box-shadow 0.3s ease;cursor:pointer;text-align:center;flex:1;">
      <strong>🐦 Twitter</strong>
      <p style="margin:8px 0 0;font-size:0.85rem;color:#666;">Micro-blogging platform</p>
    </div>
    <div class="card-hover" style="background:white;padding:20px;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.1);transition:transform 0.3s ease,box-shadow 0.3s ease;cursor:pointer;text-align:center;flex:1;">
      <strong>📸 Instagram</strong>
      <p style="margin:8px 0 0;font-size:0.85rem;color:#666;">Photo sharing app</p>
    </div>
    <div class="card-hover" style="background:white;padding:20px;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.1);transition:transform 0.3s ease,box-shadow 0.3s ease;cursor:pointer;text-align:center;flex:1;">
      <strong>💼 LinkedIn</strong>
      <p style="margin:8px 0 0;font-size:0.85rem;color:#666;">Professional network</p>
    </div>
  </div>
  <p style="text-align:center;font-size:0.75rem;color:gray;margin-top:10px;">Hover masing-masing card — card akan terangkat ke atas (<code style="background:#eee;padding:2px 6px;border-radius:3px;">translateY(-8px)</code>)</p>
</div>

---

## Animation

Animation memungkinkan Anda membuat gerakan kompleks dengan banyak tahapan (*keyframes*) dan kontrol penuh atas perulangan, arah, dan status akhir.

### `@keyframes`

Keyframes mendefinisikan "titik-titik penting" sepanjang jalannya animasi. Minimal dua titik: `from` (0%) dan `to` (100%).

```css
@keyframes nama-animasi {
  from { /* State awal */
    opacity: 0;
    transform: translateY(20px);
  }
  to { /* State akhir */
    opacity: 1;
    transform: translateY(0);
  }
}

/* Bisa juga dengan persentase */
@keyframes berdenyut {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.1); }
  100% { transform: scale(1); }
}
```

### Properti Animation

```css
.element {
  animation-name: nama-animasi;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: infinite; /* atau angka: 1, 2, 3... */
  animation-direction: normal; /* normal | reverse | alternate | alternate-reverse */
  animation-fill-mode: forwards; /* none | forwards | backwards | both */
}

/* Shorthand */
.element {
  animation: fadeIn 1s ease 0s 1 forwards;
}
```

### `animation-direction`

| Nilai | Perilaku |
|---|---|
| `normal` | 0% → 100%, lalu loncat kembali ke 0% (Default) |
| `reverse` | 100% → 0% (kebalikan) |
| `alternate` | 0% → 100% → 0% → 100% ... (bolak-balik halus) |
| `alternate-reverse` | 100% → 0% → 100% → 0% ... |

### `animation-fill-mode`

Menentukan apakah elemen mempertahankan style dari keyframe pertama/sebelum animasi dimulai atau setelah animasi selesai.

| Nilai | Perilaku |
|---|---|
| `none` | Kembali ke style asli sebelum animasi (Default) |
| `forwards` | Tetap di state keyframe terakhir (100%) setelah animasi selesai |
| `backwards` | Ambil state keyframe pertama (0%) selama masa `animation-delay` |
| `both` | Kombinasi `forwards` + `backwards` |

---

## Contoh Animation

### Loading Spinner

```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #e0e0e0;
  border-top-color: #2196F3;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
```

<div class="preview-box">
  <div style="display:flex;align-items:center;gap:16px;padding:10px;">
    <div class="spinner" style="width:40px;height:40px;border:4px solid #e0e0e0;border-top-color:#2196F3;border-radius:50%;animation:spin 0.8s linear infinite;"></div>
    <span style="font-size:0.9rem;color:#666;">Memuat data...</span>
  </div>
</div>

### Fade-In Element

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.konten {
  animation: fadeInUp 0.6s ease forwards;
}
```

<div class="preview-box">
  <div style="background:#E8F5E9;border-left:4px solid #4CAF50;padding:16px;border-radius:6px;animation:fadeInUp 0.6s ease forwards;">
    <strong>✅ Berhasil!</strong>
    <p style="margin:4px 0 0;font-size:0.9rem;">Data telah disimpan ke database.</p>
  </div>
</div>

---

## `transform`

Properti `transform` adalah pasangan wajib animation/transition karena ia bekerja di GPU (tidak menyebabkan reflow/repaint). Gunakan `transform` selalu untuk animasi posisi dan ukuran, bukan `top/left/width/height`.

| Fungsi | Efek | Contoh |
|---|---|---|
| `translate(x, y)` | Geser posisi | `translate(50px, -20px)` |
| `translateX(n)` | Geser horizontal | `translateX(100px)` |
| `translateY(n)` | Geser vertikal | `translateY(-10px)` |
| `scale(n)` | Perbesar/perkecil | `scale(1.2)` |
| `rotate(deg)` | Putar | `rotate(45deg)` |
| `skew(deg)` | Miringkan | `skew(10deg)` |
| `scaleX(n)` / `scaleY(n)` | Skala per sumbu | `scaleX(1.5)` |

<div class="preview-box">
  <p style="margin-top:0;font-weight:bold;font-size:0.85rem;">Berbagai transformasi</p>
  <div style="display:flex;flex-wrap:wrap;gap:10px;">
    <div style="background:#2196F3;color:white;padding:20px;border-radius:8px;transition:transform 0.3s;">Normal</div>
    <div style="background:#4CAF50;color:white;padding:20px;border-radius:8px;transform:translateX(0);transition:transform 0.3s;" onmouseover="this.style.transform='translateX(20px)'" onmouseout="this.style.transform='translateX(0)'">translateX(20px)</div>
    <div style="background:#FF9800;color:white;padding:20px;border-radius:8px;transform:scale(1);transition:transform 0.3s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">scale(1.2)</div>
    <div style="background:#E91E63;color:white;padding:20px;border-radius:8px;transform:rotate(0deg);transition:transform 0.3s;" onmouseover="this.style.transform='rotate(15deg)'" onmouseout="this.style.transform='rotate(0deg)'">rotate(15deg)</div>
    <div style="background:#9C27B0;color:white;padding:20px;border-radius:8px;transform:skew(0deg);transition:transform 0.3s;" onmouseover="this.style.transform='skew(-10deg)'" onmouseout="this.style.transform='skew(0deg)'">skew(-10deg)</div>
  </div>
  <p style="text-align:center;font-size:0.75rem;color:gray;margin-top:10px;">Hover masing-masing kotak untuk melihat efek transformasi.</p>
</div>

---

## `will-change` untuk Performa

Animasi yang lambat dan patah-patah merusak pengalaman pengguna. Properti `will-change` memberi tahu browser: *"Hei, properti ini akan segera berubah, siapkan resource dari sekarang."*

```css
.card-animasi {
  will-change: transform, opacity;
  transition: transform 0.3s ease;
}
```

> **Tips Penting:** Jangan pakai `will-change` di semua elemen — hanya untuk elemen yang benar-benar akan dianimasikan. Gunakan sesaat sebelum animasi terjadi dan hapus setelah selesai. Terlalu banyak `will-change` justru membebani memori browser.

---

## Studi Kasus

### 1. Animasi Loading Dots

Animasi titik-titik yang muncul bergantian, sering dipakai di chat bubble untuk memberi tahu pengguna bahwa lawan bicara sedang mengetik.

```css
@keyframes dotPulse {
  0%, 100% { opacity: 0.3; transform: scale(0.8); }
  50%      { opacity: 1;   transform: scale(1); }
}

.dot {
  width: 10px;
  height: 10px;
  background: #999;
  border-radius: 50%;
  animation: dotPulse 1.4s ease-in-out infinite;
  display: inline-block;
}

.dot:nth-child(2) { animation-delay: 0.2s; }
.dot:nth-child(3) { animation-delay: 0.4s; }
```

<div class="preview-box">
  <div style="background:#eee;padding:12px 20px;border-radius:18px;display:inline-flex;gap:6px;align-items:center;">
    <div class="dot" style="width:10px;height:10px;background:#999;border-radius:50%;animation:dotPulse 1.4s ease-in-out infinite;display:inline-block;"></div>
    <div class="dot" style="width:10px;height:10px;background:#999;border-radius:50%;animation:dotPulse 1.4s ease-in-out infinite;display:inline-block;animation-delay:0.2s;"></div>
    <div class="dot" style="width:10px;height:10px;background:#999;border-radius:50%;animation:dotPulse 1.4s ease-in-out infinite;display:inline-block;animation-delay:0.4s;"></div>
  </div>
</div>

### 2. Animasi Fade-In Card Bertahap (Staggered)

Card muncul satu per satu dengan sedikit jeda, menciptakan efek "kaskade" yang elegan.

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

.card-list .card {
  opacity: 0;
  animation: fadeInUp 0.5s ease forwards;
}

.card:nth-child(1) { animation-delay: 0.1s; }
.card:nth-child(2) { animation-delay: 0.2s; }
.card:nth-child(3) { animation-delay: 0.3s; }
.card:nth-child(4) { animation-delay: 0.4s; }
```

<div class="preview-box">
  <div style="display:flex;flex-wrap:wrap;gap:10px;">
    <div class="stagger-card" style="background:#673AB7;color:white;padding:20px;border-radius:8px;flex:1 1 100px;text-align:center;animation:fadeInUp 0.5s ease forwards;opacity:0;animation-delay:0.1s;">Card 1</div>
    <div class="stagger-card" style="background:#673AB7;color:white;padding:20px;border-radius:8px;flex:1 1 100px;text-align:center;animation:fadeInUp 0.5s ease forwards;opacity:0;animation-delay:0.2s;">Card 2</div>
    <div class="stagger-card" style="background:#673AB7;color:white;padding:20px;border-radius:8px;flex:1 1 100px;text-align:center;animation:fadeInUp 0.5s ease forwards;opacity:0;animation-delay:0.3s;">Card 3</div>
    <div class="stagger-card" style="background:#673AB7;color:white;padding:20px;border-radius:8px;flex:1 1 100px;text-align:center;animation:fadeInUp 0.5s ease forwards;opacity:0;animation-delay:0.4s;">Card 4</div>
  </div>
</div>

---

## Preview: Berbagai Jenis Animasi

<style scoped>
@keyframes bounceDemo { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-15px)} }
@keyframes fadeDemo { 0%,100%{opacity:0.4} 50%{opacity:1} }
@keyframes slideInDemo { 0%{transform:translateX(-30px);opacity:0} 100%{transform:translateX(0);opacity:1} }
@keyframes rotateDemo { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
</style>

<div class="preview-box">
  <p style="margin-top:0;font-weight:bold;font-size:0.85rem;">Eksplorasi efek animasi yang berbeda</p>
  <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 120px;background:#f5f5f5;padding:16px;border-radius:10px;text-align:center;">
      <div style="width:40px;height:40px;background:#F44336;border-radius:50%;margin:0 auto 8px;animation:bounceDemo 0.6s ease infinite;"></div>
      <strong style="font-size:0.85rem;">Bounce</strong>
      <p style="margin:4px 0 0;font-size:0.75rem;color:#666;">translateY + infinite</p>
    </div>
    <div style="flex:1 1 120px;background:#f5f5f5;padding:16px;border-radius:10px;text-align:center;">
      <div style="width:40px;height:40px;background:#2196F3;border-radius:50%;margin:0 auto 8px;animation:fadeDemo 1.5s ease infinite;"></div>
      <strong style="font-size:0.85rem;">Fade</strong>
      <p style="margin:4px 0 0;font-size:0.75rem;color:#666;">opacity pulse</p>
    </div>
    <div style="flex:1 1 120px;background:#f5f5f5;padding:16px;border-radius:10px;text-align:center;">
      <div style="width:40px;height:40px;background:#4CAF50;border-radius:8px;margin:0 auto 8px;animation:slideInDemo 0.6s ease infinite alternate;"></div>
      <strong style="font-size:0.85rem;">Slide In</strong>
      <p style="margin:4px 0 0;font-size:0.75rem;color:#666;">translateX + alternate</p>
    </div>
    <div style="flex:1 1 120px;background:#f5f5f5;padding:16px;border-radius:10px;text-align:center;">
      <div style="width:40px;height:40px;border:4px solid #FF9800;border-top-color:transparent;border-radius:50%;margin:0 auto 8px;animation:rotateDemo 1s linear infinite;"></div>
      <strong style="font-size:0.85rem;">Rotate</strong>
      <p style="margin:4px 0 0;font-size:0.75rem;color:#666;">rotate + linear infinite</p>
    </div>
  </div>
</div>

---

## Accessibility: `prefers-reduced-motion`

Tidak semua pengguna nyaman dengan animasi. Beberapa pengguna dengan gangguan vestibular (keseimbangan) bisa merasa mual akibat gerakan di layar. Sistem operasi modern menyediakan pengaturan **Reduce Motion**.

Hormati preferensi pengguna dengan media query ini:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Dengan kode di atas, jika pengguna mengaktifkan *Reduce Motion* di sistem operasi mereka, semua animasi akan berjalan hampir instan (tetap ada transisi, tapi tidak terlihat). Atau alternatifnya, matikan animasi sepenuhnya:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

> **Tips Pro:** Selalu uji website Anda dengan setting *Reduce Motion* aktif. Di Windows: Settings → Accessibility → Visual Effects → Animation effects. Di macOS: System Settings → Accessibility → Display → Reduce motion.

---

## Cheat Sheet Animation & Transition

| Properti | Fungsi |
|---|---|
| `transition` | Animasi halus antar state (butuh trigger) |
| `transition-property` | Properti CSS mana yang dianimasikan |
| `transition-duration` | Berapa lama transisi berlangsung |
| `transition-timing-function` | Kurva kecepatan (ease, linear, dll) |
| `transition-delay` | Jeda sebelum transisi dimulai |
| `@keyframes` | Mendefinisikan tahapan animasi |
| `animation-name` | Nama keyframes yang digunakan |
| `animation-duration` | Durasi satu siklus animasi |
| `animation-iteration-count` | Berapa kali animasi diulang (infinite = terus) |
| `animation-direction` | Arah animasi (normal, reverse, alternate) |
| `animation-fill-mode` | Style sebelum/sesudah animasi berjalan |
| `animation-delay` | Jeda sebelum animasi dimulai |
| `transform` | Memanipulasi bentuk/posisi (GPU-accelerated) |
| `will-change` | Optimasi performa untuk properti yang akan berubah |
| `prefers-reduced-motion` | Media query untuk aksesibilitas |
