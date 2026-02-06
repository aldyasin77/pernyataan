# Surat Pernyataan SAMSAT

Website untuk Surat Pernyataan Penguasaan Kendaraan dan Komitmen Pembayaran Pajak - SAMSAT Jawa Barat.

## Fitur

- Form surat pernyataan dinamis
- Tanda tangan digital dengan canvas
- Integrasi dengan backend BUSUR GANDIWA
- Responsive design dengan Tailwind CSS

## Instalasi

Jalankan perintah berikut untuk menginstal dependencies:

```bash
npm install
```

## Menjalankan Development Server

```bash
npm run dev
```

Buka browser dan akses `http://localhost:5173`

## Build untuk Production

```bash
npm run build
```

## Preview Build Production

```bash
npm run preview
```

## Teknologi

- React 18
- Vite 6
- Tailwind CSS
- react-signature-canvas
- lucide-react (icons)

## Struktur Project

```
├── src/
│   ├── App.jsx            # Komponen utama dengan fetch data
│   ├── pernyataan.jsx     # Komponen surat pernyataan
│   ├── App.css            # Custom styles
│   ├── main.jsx           # Entry point aplikasi
│   └── index.css          # Global styles + Tailwind
├── public/                # Static assets & logos
├── index.html             # HTML template
├── tailwind.config.js     # Konfigurasi Tailwind CSS
├── vite.config.js         # Konfigurasi Vite
└── package.json           # Dependencies dan scripts
```
