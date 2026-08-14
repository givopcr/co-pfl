# Naskah Video 10 Menit: Supabase sebagai Backend Homepage

## Judul video
Integrasi Supabase untuk Homepage Politeknik Caltex Riau: CRUD Testimoni, Mitra, Biaya Kuliah, dan Slideshow

## Tujuan video
- Menunjukkan project React yang sudah dibuat dan dikembangkan dengan backend Supabase
- Menampilkan perubahan homepage yang sebelumnya statis menjadi data-driven
- Menjelaskan alur kerja CRUD untuk 4 tabel utama
- Menunjukkan bagaimana admin bisa mengelola konten tanpa harus mengubah kode

## Durasi 10 menit

### 0:00 - 1:00 | Pembuka
**Narasi**
"Halo semuanya, pada video hari ini saya akan menampilkan perkembangan project homepage Politeknik Caltex Riau yang sudah diintegrasikan dengan Supabase sebagai backend. Sebelumnya halaman homepage masih bersifat statis, lalu kita ubah agar kontennya bisa dikelola dari database dan bisa diperbarui dengan mudah."

**Visual**
- Tampilkan landing page awal
- Tunjukkan bagian hero, program studi, testimoni, mitra, dan biaya kuliah

### 1:00 - 2:30 | Gambaran project yang sudah dibuat
**Narasi**
"Project ini dibuat dengan React + Vite. Kita fokus pada homepage yang berisi slideshow, testimoni mahasiswa, mitra/kerja sama, dan informasi biaya kuliah. Tujuan utamanya adalah supaya konten halaman utama tidak lagi hardcode di file frontend, tetapi berasal dari database." 

**Visual**
- Buka struktur folder
- Tunjukkan file utama: App.jsx, HomePage.jsx, services/homepageService.js, lib/supabase.js

### 2:30 - 4:30 | Penjelasan Supabase dan database schema
**Narasi**
"Langkah pertama adalah membuat project Supabase. Setelah project dibuat, kitaambil URL dan anon key lalu simpan ke environment file. Kemudian kita buat 4 tabel utama: homepage_slides, testimonials, partners, dan tuition_fees. Setiap tabel dilengkapi dengan field yang relevan seperti title, description, image_url, rating, amount, dan created_at."

**Visual**
- Buka Supabase SQL editor
- Jalankan schema SQL
- Tunjukkan tabel yang berhasil dibuat

### 4:30 - 6:00 | Demo CRUD: Testimoni
**Narasi**
"Fitur yang saya pilih untuk dijelaskan lebih dalam adalah CRUD Testimoni. Di dalam aplikasi, admin bisa menambah data baru, melihat list testimoni, edit isi, maupun hapus data. Semua proses ini langsung terhubung ke tabel testimonials di Supabase." 

**Visual**
- Buka form testimoni di halaman homepage
- Klik Tambah testimoni
- Masukkan nama, peran, quote, rating
- Klik Simpan
- Tampilkan data muncul di homepage

### 6:00 - 7:30 | Demo CRUD lainnya
**Narasi**
"Selain testimoni, kita juga menerapkan CRUD untuk slideshow, mitra, dan biaya kuliah. Slideshow mengatur hero image dan text utama, mitra menampilkan logo dan link kerja sama, sedangkan biaya kuliah digunakan untuk menampilkan rincian transparan. Dengan model ini, konten dapat dikelola dari satu tempat dan tampil otomatis di homepage." 

**Visual**
- Tampilkan form slideshow
- Tampilkan form mitra
- Tampilkan form biaya kuliah
- Ubah salah satu data lalu refresh tampilan

### 7:30 - 8:30 | Alur kerja aplikasi
**Narasi**
"Adapun alur kerjanya adalah front-end memanggil fungsi dari homepageService, fungsi tersebut mengirim request ke Supabase client, dan database memberikan data yang kemudian dirender ke komponen React. Jadi user tidak lagi melihat konten yang di-hardcode, tetapi data yang hidup dan mudah diubah."

**Visual**
- Tunjukkan diagram alur sederhana
- Tekankan flow request-response

### 8:30 - 9:30 | Keunggulan dan manfaat
**Narasi**
"Keunggulan dari pendekatan ini adalah waktu update lebih cepat, konten lebih terstruktur, dan aplikasi lebih siap untuk pengelolaan admin di masa depan. Ini juga mempermudah tim marketing atau pihak kampus untuk memperbarui halaman tanpa harus meminta developer tiap kali ingin mengganti content."

**Visual**
- Tampilkan benefit list
- Menunjukkan adaptasi ke admin panel ke depan

### 9:30 - 10:00 | Penutup
**Narasi**
"Kesimpulannya, Supabase berhasil menjadi backend yang simple namun powerful untuk homepage. Integrasi ini membuka peluang untuk pengembangan fitur lanjutan seperti admin dashboard, upload media, dan berita kampus. Terima kasih atas perhatian kalian."

**Visual**
- Close shot dengan halaman homepage penuh
- Tampilkan gratitude

---

## Flow diagram 15 blok yang saling terhubung

```mermaid
flowchart LR
    A[1. User membuka homepage] --> B[2. HomePage.jsx render]
    B --> C[3. fetchHomepageData() dipanggil]
    C --> D[4. homepageService.js]
    D --> E[5. supabase client dibuat]
    E --> F[6. Query ke tabel testimonials]
    F --> G[7. Query ke tabel partners]
    F --> H[8. Query ke tabel tuition_fees]
    F --> I[9. Query ke tabel homepage_slides]
    I --> J[10. Supabase mengembalikan data JSON]
    G --> J
    H --> J
    J --> K[11. Data diubah ke state React]
    K --> L[12. Komponen render card/testimoni/mitra/biaya]
    L --> M[13. Admin submit form CRUD]
    M --> N[14. create/update/delete function dipanggil]
    N --> O[15. Data tersimpan di Supabase dan homepage otomatis update]
```

## Catatan narasi untuk video
- Fokus pada satu fitur utama: CRUD Testimoni
- Jelaskan secara sederhana tanpa bahasa teknis yang terlalu berat
- Sebutkan bahwa project ini siap dikembangkan ke admin panel lebih lanjut
- Tunjukkan output nyata: data yang berubah di homepage setelah submit

## Tips saat rekaman
- Gunakan 1 cut untuk demo aplikasi, 1 cut untuk menjelaskan kode, dan 1 cut untuk closing
- Jangan terlalu lama di layar code
- Prioritaskan tampilan hasil yang jelas dan mudah dibaca
- Disarankan menambahkan subtitle agar mudah dipahami
