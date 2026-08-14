# Panduan Supabase untuk Homepage

## 1. Buat project baru di Supabase
1. Buka https://supabase.com
2. Klik New Project
3. Masukkan nama project, password database, dan region
4. Tunggu proses provisioning selesai

## 2. Dapatkan kredensial project
Di menu Project Settings > API, ambil:
- Project URL
- anon public key

Lalu simpan di file .env:

```bash
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## 3. Buat tabel sesuai schema
Buka SQL Editor di Supabase, lalu jalankan isi file:
- supabase/homepage_schema.sql
- supabase/seed.sql

## 4. Tabel yang dibuat
- homepage_slides
- testimonials
- partners
- tuition_fees

## 5. Struktur data
### homepage_slides
- id uuid
- title text
- subtitle text
- description text
- image_url text
- button_label text
- button_link text
- is_active boolean
- created_at timestamptz

### testimonials
- id uuid
- name text
- role text
- quote text
- rating integer
- avatar_url text
- is_active boolean
- created_at timestamptz

### partners
- id uuid
- name text
- logo_url text
- website_url text
- is_active boolean
- created_at timestamptz

### tuition_fees
- id uuid
- category text
- description text
- amount numeric
- currency text
- is_featured boolean
- is_active boolean
- created_at timestamptz

## 6. CRUD yang digunakan
Project ini sudah memanggil fungsi berikut:
- createSlide / updateSlide / deleteSlide
- createTestimonial / updateTestimonial / deleteTestimonial
- createPartner / updatePartner / deletePartner
- createTuitionFee / updateTuitionFee / deleteTuitionFee

Semua fungsi diimplementasikan di file:
- src/services/homepageService.js

## 7. Catatan penting
- Aplikasi memiliki fallback data saat Supabase belum dikonfigurasi.
- Saat project sudah aktif, frontend otomatis menarik data dari tabel Supabase.
- Gunakan mode Authenticated untuk edit data di runtime jika dibutuhkan.
