insert into public.homepage_slides (title, subtitle, description, image_url, button_label, button_link, is_active)
values
  ('Politeknik Caltex Riau', 'Belajar dengan pendekatan industri dan inovasi.', 'Kampus unggulan yang membangun lulusan siap kerja dan siap bersaing secara global.', 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80', 'Lihat Program Studi', '/prodi', true),
  ('Learning by Doing', 'Praktik langsung di laboratorium dan proyek nyata.', 'Mahasiswa dibekali pengalaman nyata agar mudah beradaptasi dengan kebutuhan industri.', 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80', 'Kenali Kampus', '/tentang', true);

insert into public.testimonials (name, role, quote, rating, avatar_url, is_active)
values
  ('Muhammad Rizki', 'Mahasiswa Teknik Informatika', 'Dosen dan laboratorium di PCR sangat membantu saya membangun portofolio serta kepercayaan diri saat menghadapi dunia kerja.', 5, 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80', true),
  ('Ayu Lestari', 'Mahasiswa Akuntansi', 'Pembelajaran yang aplikatif membuat saya lebih siap menghadapi dunia industri dan skripsi dengan lebih terarah.', 5, 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80', true),
  ('Dian Pratama', 'Alumni Teknik Mesin', 'Saya mendapat pengalaman kerja nyata dan jaringan industri yang cukup kuat sejak masa kuliah.', 5, 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80', true);

insert into public.partners (name, logo_url, website_url, is_active)
values
  ('PT Telkom Indonesia', 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=200&q=80', 'https://www.telkom.co.id', true),
  ('Bank Riau Kepri', 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=200&q=80', 'https://www.bankriau-kepri.co.id', true),
  ('Google for Education', 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=200&q=80', 'https://edu.google.com', true),
  ('Microsoft', 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=200&q=80', 'https://www.microsoft.com', true);

insert into public.tuition_fees (category, description, amount, currency, is_featured, is_active)
values
  ('Semester 1', 'Uang pangkal dan biaya pendidikan awal', 2400000, 'IDR', true, true),
  ('Semester 2 - 6', 'Biaya perkuliahan setiap semester', 2200000, 'IDR', true, true),
  ('Laboratorium & Praktikum', 'Biaya kegiatan praktikum dan perangkat pendukung', 750000, 'IDR', false, true);
