# ALYA ZAHRA Portfolio

Website portfolio statis milik Alya Zahra dengan tampilan responsif, bagian pendidikan, keahlian, pengalaman modeling, proyek, galeri foto, dan kontak.

## Teknologi

- HTML5
- CSS3
- JavaScript
- Font Awesome 6.4 melalui CDN
- Google Fonts melalui CDN

## Struktur Folder

```text
Alya/
├── index.html
├── style.css
├── script.js
├── foto.jpeg
├── galeri/
│   ├── 1.jpeg
│   ├── 2.jpeg
│   └── 3.jpeg
└── project/
    └── project1.jpg
```

## Menjalankan di Komputer Lokal

### XAMPP

1. Salin folder `Alya` ke `C:\xampp\htdocs\`.
2. Jalankan Apache dari XAMPP Control Panel.
3. Buka `http://localhost/Alya/` di browser.

### Tanpa server

Untuk perubahan HTML/CSS sederhana, `index.html` dapat dibuka langsung di browser. Server lokal tetap lebih disarankan agar perilakunya mendekati hosting sebenarnya.

## Hosting ke GitHub Pages

1. Buat repository baru di GitHub.
2. Upload seluruh isi folder proyek, termasuk folder `galeri` dan `project`.
3. Buka **Settings > Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch utama dan folder `/root`, lalu simpan.
6. Tunggu proses deployment selesai, kemudian buka URL yang diberikan GitHub Pages.

## Hosting ke cPanel

1. Kompres isi folder proyek menjadi file ZIP.
2. Buka **File Manager** di cPanel.
3. Masuk ke folder `public_html` atau folder domain yang digunakan.
4. Upload file ZIP, lalu ekstrak di lokasi tersebut.
5. Pastikan `index.html` berada di folder utama website.
6. Buka domain untuk memeriksa hasilnya.

## Checklist Sebelum Upload

- Pastikan nama file dan folder sama persis, termasuk huruf besar-kecil.
- Upload folder `galeri` dan `project` beserta seluruh gambarnya.
- Periksa semua tautan sosial dan email pada bagian kontak.
- Uji tampilan desktop dan mobile.
- Pastikan koneksi internet tersedia karena Font Awesome dan Google Fonts dimuat dari CDN.

## Catatan

Website ini tidak memerlukan database, PHP, Node.js, atau proses build. Seluruh file dapat di-host sebagai static website.
