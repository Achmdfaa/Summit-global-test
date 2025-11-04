# Summit-global-test
Frontend &amp; Backend Technical Test - Summit Global Teknologi (Next.js + Ant Design + Firebase Auth)

🧑‍💻 Developed by: Achmd F

Tech Stack:

Frontend: Next.js (TypeScript) + Ant Design + Axios

Backend: Node.js (TypeScript, Express)

Authentication: Firebase Authentication

Database: Mock (in-memory API via backend service)

🚀 Project Overview

Project ini merupakan hasil dari Technical Test Junior Frontend (Dashboard Developer).
Aplikasi ini menampilkan Product Dashboard dengan fitur lengkap:

Product List (Ant Design Table)

Real-time Search (debounce 300ms)

Pagination

Create / Edit / Delete Product (Modal Form)

Login & Logout menggunakan Firebase Authentication

Protected Route (akses /products hanya setelah login)

🧩 System Requirements

Node.js: v22.17.1 atau versi terbaru

npm: v10+

Browser modern (Chrome, Edge, Firefox)

🧠 Installation Steps
# 1. Clone repository
git clone https://github.com/Achmdfaa/Summit-global-test.git
cd Summit-global-test

# 2. Jalankan Backend
cd technical-test-be
npm install
npm run dev
# Backend jalan di: http://localhost:8001

# 3. Jalankan Frontend
cd ../dashboard-fe
npm install
npm run dev
# Frontend jalan di: http://localhost:3000


🧩 Firebase Authentication

Login menggunakan email & password (untuk login bisa contact saya)

Setelah login, user otomatis diarahkan ke /products

Logout tersedia di sidebar bawah (warna merah)


