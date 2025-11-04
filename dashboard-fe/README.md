This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Technical Test – Junior Frontend (Dashboard Developer)

**Summit Global Teknologi**

---

## Overview

Project ini dibuat sebagai bagian dari **Technical Test – Junior Frontend (Dashboard Developer Position)** di **Summit Global Teknologi**.  
Aplikasi ini merupakan dashboard produk dengan integrasi API backend dan Firebase Authentication.

---

## Tech Stack

| Layer            | Technology                                          |
| ---------------- | --------------------------------------------------- |
| Frontend         | Next.js 14, TypeScript, Ant Design 5, Axios         |
| Backend          | Express.js (Node.js, SWC compiler)                  |
| Authentication   | Firebase Authentication (Email & Password)          |
| State Management | React Hooks (`useState`, `useEffect`, `useContext`) |
| Styling          | Ant Design + Custom CSS                             |
| Tools            | Node.js, Concurrently, ESLint                       |

---

## Persyaratan Sistem (System Requirements)

| Komponen | Versi yang Digunakan                            |
| -------- | ----------------------------------------------- |
| Node.js  | **v22.17.1**                                    |
| npm      | **v10.8.2** (terpasang otomatis dengan Node.js) |
| Browser  | Chrome / Edge terbaru                           |
| OS       | Windows 10/11 atau macOS                        |

---

## Langkah Instalasi (Installation Steps)

### Clone Project

Buka terminal, lalu jalankan:

```bash
# Pindah ke direktori tempat Anda ingin menyimpan project
cd Desktop

# Clone repository dari GitHub
git clone <your-repo-url>

# Masuk ke folder project
cd "Test coding SGT"

# Masuk ke folder frontend
cd dashboard-fe

# Install semua dependency yang dibutuhkan
npm install

# Kembali satu level ke folder utama
cd ..

# Masuk ke folder backend
cd technical-test-be

# Install dependency backend
npm install

# Pastikan berada di folder backend
npm run dev

# Jika berhasil, terminal akan menampilkan:
Port : 8001
Server is running on http://localhost:8001

# Pindah ke folder frontend
cd dashboard-fe

# Jalankan server Next.js
npm run dev

# Jika berhasil, terminal akan menampilkan:
Local:   http://localhost:3000

#Kalau ingin menjalankan keduanya otomatis, cukup jalankan:
Dari folder dashboard-fe
npm run start-all
```
