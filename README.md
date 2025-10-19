REST API Layanan Cuci Sepatu
- Deskripsi Umum Proyek
Proyek ini adalah REST API sederhana yang dibuat untuk mengelola daftar barang (sepatu) di sebuah layanan cuci sepatu. API ini berfungsi sebagai backend yang menangani semua proses Create, Read, Update, Delete (CRUD) data sepatu.
Proyek ini dibuat dengan menggunakan Node.js, Express.js, dan Supabase sebagai database. API ini juga di-deploy ke Vercel agar dapat diakses secara publik.

- Tujuan dan Fitur Utama
Tujuan utama dari API ini adalah menyediakan endpoint yang fungsional untuk mengelola data cucian sepatu.

-  Fitur utama meliputi:
Create: Menambahkan data sepatu baru ke dalam daftar antrean.
Read: Mengambil semua data sepatu atau data sepatu spesifik berdasarkan ID.
Update: Memperbarui data sepatu, seperti mengubah status cucian.
Delete: Menghapus data sepatu dari daftar.
Filter: Mengambil data sepatu yang sudah difilter berdasarkan status (misalnya, Diterima, Dicuci, Selesai).

- Struktur Data
API ini menggunakan satu tabel di database Supabase (PostgreSQL) bernama shoe_items dengan skema sebagai berikut:

SQL

create table shoe_items (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  shoe_type text,
  status text default 'Diterima', -- Contoh: Diterima, Dicuci, Selesai
  created_at timstamptz default now()
);
Contoh Request dan Response
Berikut adalah contoh penggunaan endpoint API utama.

BASE URL (Lokal): http://localhost:3000/api/items BASE URL (Publik): [https://responsimod1-d8va.vercel.app/]

1. Create: Menambahkan Item Baru
Menambahkan data cucian sepatu baru.

Request: POST /api/items Body (JSON):

JSON

{
  "customer_name": "Radhito",
  "shoe_type": "Sepatu hitam",
  "status": "Diterima"
}
Response: 201 Created

JSON

{
  "id": "a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8",
  "customer_name": "Radhito",
  "shoe_type": "Sepatu Hitam",
  "status": "Diterima",
  "created_at": "2025-10-19T08:30:00.123456+00:00"
}
2. Read: Mendapatkan Semua Item
Mengambil seluruh daftar cucian sepatu.

Request: GET /api/items

Response: 200 OK

JSON

[
  {
    "id": "a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8",
    "customer_name": "Radhito",
    "shoe_type": "Sepatu Hitam",
    "status": "Diterima",
    "created_at": "2025-10-19T08:30:00.123456+00:00"
  },
  {
    "id": "b2c3d4e5-f6g7-8901-h2i3-j4k5l6m7n8o9",
    "customer_name": "Ana Maria",
    "shoe_type": "Boots Kulit",
    "status": "Dicuci",
    "created_at": "2025-10-19T08:31:00.123456+00:00"
  }
]
3. Read (Filter): Mendapatkan Item Berdasarkan Status
Mengambil daftar cucian sepatu yang statusnya "Dicuci".

Request: GET /api/items?status=Dicuci

Response: 200 OK

JSON

[
  {
    "id": "b2c3d4e5-f6g7-8901-h2i3-j4k5l6m7n8o9",
    "customer_name": "Ana Maria",
    "shoe_type": "Boots Kulit",
    "status": "Dicuci",
    "created_at": "2025-10-19T08:31:00.123456+00:00"
  }
]
4. Update: Mengubah Status Item
Memperbarui status cucian sepatu milik Budi.

Request: PUT /api/items/a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8 Body (JSON):

JSON

{
  "status": "Selesai"
}
Response: 200 OK

JSON

{
  "id": "a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8",
  "customer_name": "Budi Santoso",
  "shoe_type": "Sneakers Putih",
  "status": "Selesai",
  "created_at": "2025-10-19T08:30:00.123456+00:00"
}
5. Delete: Menghapus Item
Menghapus data cucian sepatu.

Request: DELETE /api/items/a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8

Response: 200 OK

JSON

{
  "message": "Item deleted successfully"
}

- Langkah Instalasi dan Menjalankan API
Untuk menjalankan proyek ini di komputer lokal Anda, ikuti langkah-langkah berikut:

Clone Repositori

git clone https://github.com/Sh1r0uuu/responsimod1.git
cd responsimod1

Install Dependensi
npm install
Siapkan Variabel Lingkungan Buat file baru bernama .env di direktori utama proyek. Isi dengan kredensial Supabase Anda.

Code snippet

SUPABASE_URL= https://https://ejlpsuwnsdppdghsiqyq.supabase.co
SUPABASE_KEY= eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqbHBzdXduc2RwcGRnaHNpcXlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA4NTYzMTIsImV4cCI6MjA3NjQzMjMxMn0.voR0ZSFYGgU0slaLqoDWfOkmSGK63hOHjtDhfS1hSek
PORT=3000

Jalankan Server (Mode Development) Perintah ini akan menjalankan server menggunakan nodemon, yang akan otomatis me-restart server setiap ada perubahan kode.

npm run dev
Server Siap API Anda sekarang berjalan di http://localhost:3000.
