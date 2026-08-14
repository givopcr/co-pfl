import React, { useEffect, useState } from 'react';
import ButtonComponent from '../components/ButtonComponent';
import SectionTitleComponent from '../components/SectionTitleComponent';
import ProgramStudiCardComponent from '../components/ProgramStudiCardComponent';
import ProgramStudiData from '../data/ProgramStudiData';
import {
  fetchHomepageData,
  createSlide,
  updateSlide,
  deleteSlide,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
  createPartner,
  updatePartner,
  deletePartner,
  createTuitionFee,
  updateTuitionFee,
  deleteTuitionFee,
} from '../services/homepageService';

const EMPTY_SLIDE = {
  title: '',
  subtitle: '',
  description: '',
  image_url: '',
  button_label: 'Lihat Detail',
  button_link: '/prodi',
};

const EMPTY_TESTIMONIAL = {
  name: '',
  role: '',
  quote: '',
  rating: 5,
};

const EMPTY_PARTNER = {
  name: '',
  website_url: '',
  logo_url: '',
};

const EMPTY_FEE = {
  category: '',
  description: '',
  amount: 0,
  currency: 'IDR',
  is_featured: true,
};

const formatCurrency = (amount, currency = 'IDR') => {
  if (!amount && amount !== 0) return 'Rp 0';
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
};

const HomePage = () => {
  const [slides, setSlides] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [partners, setPartners] = useState([]);
  const [tuitionFees, setTuitionFees] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  const [slideForm, setSlideForm] = useState(EMPTY_SLIDE);
  const [testimonialForm, setTestimonialForm] = useState(EMPTY_TESTIMONIAL);
  const [partnerForm, setPartnerForm] = useState(EMPTY_PARTNER);
  const [tuitionForm, setTuitionForm] = useState(EMPTY_FEE);

  const loadHomepageData = async () => {
    try {
      setLoading(true);
      const data = await fetchHomepageData();
      setSlides(data.slides);
      setTestimonials(data.testimonials);
      setPartners(data.partners);
      setTuitionFees(data.tuitionFees);
      setMessage('');
    } catch (error) {
      setMessage(error.message || 'Terjadi kesalahan saat memuat data halaman utama.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHomepageData();
  }, []);

  const handleSlideSubmit = async (event) => {
    event.preventDefault();
    try {
      if (slideForm.id) {
        const updated = await updateSlide(slideForm.id, slideForm);
        setSlides((current) => current.map((item) => (item.id === updated[0].id ? updated[0] : item)));
      } else {
        const created = await createSlide(slideForm);
        setSlides((current) => [...current, created[0]]);
      }
      setSlideForm(EMPTY_SLIDE);
      setMessage('Data slideshow berhasil disimpan.');
    } catch (error) {
      setMessage(error.message || 'Gagal menyimpan slideshow.');
    }
  };

  const handleTestimonialSubmit = async (event) => {
    event.preventDefault();
    try {
      if (testimonialForm.id) {
        const updated = await updateTestimonial(testimonialForm.id, testimonialForm);
        setTestimonials((current) => current.map((item) => (item.id === updated[0].id ? updated[0] : item)));
      } else {
        const created = await createTestimonial(testimonialForm);
        setTestimonials((current) => [...current, created[0]]);
      }
      setTestimonialForm(EMPTY_TESTIMONIAL);
      setMessage('Data testimoni berhasil disimpan.');
    } catch (error) {
      setMessage(error.message || 'Gagal menyimpan testimoni.');
    }
  };

  const handlePartnerSubmit = async (event) => {
    event.preventDefault();
    try {
      if (partnerForm.id) {
        const updated = await updatePartner(partnerForm.id, partnerForm);
        setPartners((current) => current.map((item) => (item.id === updated[0].id ? updated[0] : item)));
      } else {
        const created = await createPartner(partnerForm);
        setPartners((current) => [...current, created[0]]);
      }
      setPartnerForm(EMPTY_PARTNER);
      setMessage('Data mitra berhasil disimpan.');
    } catch (error) {
      setMessage(error.message || 'Gagal menyimpan mitra.');
    }
  };

  const handleTuitionSubmit = async (event) => {
    event.preventDefault();
    try {
      if (tuitionForm.id) {
        const updated = await updateTuitionFee(tuitionForm.id, tuitionForm);
        setTuitionFees((current) => current.map((item) => (item.id === updated[0].id ? updated[0] : item)));
      } else {
        const created = await createTuitionFee(tuitionForm);
        setTuitionFees((current) => [...current, created[0]]);
      }
      setTuitionForm(EMPTY_FEE);
      setMessage('Data biaya kuliah berhasil disimpan.');
    } catch (error) {
      setMessage(error.message || 'Gagal menyimpan biaya kuliah.');
    }
  };

  const deleteItem = async (type, id) => {
    try {
      if (type === 'slides') {
        await deleteSlide(id);
        setSlides((current) => current.filter((item) => item.id !== id));
      }
      if (type === 'testimonials') {
        await deleteTestimonial(id);
        setTestimonials((current) => current.filter((item) => item.id !== id));
      }
      if (type === 'partners') {
        await deletePartner(id);
        setPartners((current) => current.filter((item) => item.id !== id));
      }
      if (type === 'tuitionFees') {
        await deleteTuitionFee(id);
        setTuitionFees((current) => current.filter((item) => item.id !== id));
      }
      setMessage('Data berhasil dihapus.');
    } catch (error) {
      setMessage(error.message || 'Gagal menghapus data.');
    }
  };

  const currentSlide = slides[activeSlide] || slides[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <main className="pt-8 md:pt-10">
        <section className="bg-gradient-to-br from-sky-100 via-white to-sky-50 px-6 pb-20 pt-10 md:px-16">
          <div className="mx-auto max-w-6xl items-center gap-12 lg:grid lg:grid-cols-2">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
                Selamat Datang di Politeknik Caltex Riau
              </p>
              <h1 className="text-4xl font-black leading-tight text-sky-900 md:text-5xl lg:text-6xl">
                {currentSlide?.title || 'Politeknik Caltex Riau'}
              </h1>
              <p className="mt-5 max-w-xl text-lg text-slate-600">
                {currentSlide?.subtitle ||
                  'Menjadi kampus unggul yang mencetak lulusan siap kerja, inovatif, dan berdaya saing tinggi di era industri modern.'}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonComponent label={currentSlide?.button_label || 'Lihat Program Studi'} color="sky" />
                <ButtonComponent label="Hubungi Kami" color="blue" className="bg-sky-700 hover:bg-sky-800" />
              </div>

              <div className="mt-8 flex gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id || index}
                    aria-label={`Pilih slide ${index + 1}`}
                    onClick={() => setActiveSlide(index)}
                    className={`h-3 w-10 rounded-full transition ${activeSlide === index ? 'bg-sky-600' : 'bg-sky-200'}`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-sky-100 lg:mt-0">
              <img
                src={currentSlide?.image_url || 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80'}
                alt={currentSlide?.title || 'Kampus'}
                className="h-80 w-full object-cover"
              />
              <div className="space-y-3 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Highlight</p>
                <p className="text-lg font-semibold text-slate-800">{currentSlide?.description || 'Learning by Doing, kolaborasi industri, dan inovasi teknologi.'}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="program-studi" className="px-6 py-20 md:px-16">
          <div className="mx-auto max-w-6xl">
            <SectionTitleComponent
              title="Program Studi"
              subtitle="Pilihan Fokus Keahlian"
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {ProgramStudiData.map((program) => (
                <ProgramStudiCardComponent
                  key={program.id}
                  nama={program.nama}
                  deskripsi={program.deskripsi}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 md:px-16">
          <div className="mx-auto max-w-6xl">
            <SectionTitleComponent title="Biaya Kuliah" subtitle="Transparent & Terjangkau" />
            <div className="grid gap-6 md:grid-cols-3">
              {tuitionFees.map((fee) => (
                <div key={fee.id} className="rounded-2xl border border-sky-100 bg-sky-50 p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">{fee.category}</p>
                  <h3 className="mt-4 text-3xl font-extrabold text-sky-900">{formatCurrency(fee.amount, fee.currency)}</h3>
                  <p className="mt-3 text-slate-600">{fee.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-16">
          <div className="mx-auto max-w-6xl">
            <SectionTitleComponent title="Testimoni" subtitle="Apa Kata Mereka" />
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <div key={item.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <img
                      src={item.avatar_url || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80'}
                      alt={item.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-slate-800">{item.name}</h3>
                      <p className="text-sm text-slate-500">{item.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-600">“{item.quote}”</p>
                  <div className="mt-4 text-sky-600">{'★'.repeat(item.rating || 5)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-100 px-6 py-20 md:px-16">
          <div className="mx-auto max-w-6xl">
            <SectionTitleComponent title="Mitra & Kerja Sama" subtitle="Kolaborasi Industri" />
            <div className="grid gap-5 md:grid-cols-4">
              {partners.map((partner) => (
                <div key={partner.id} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                  <img
                    src={partner.logo_url || 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=200&q=80'}
                    alt={partner.name}
                    className="mx-auto h-16 w-16 rounded-full object-cover"
                  />
                  <h3 className="mt-4 font-semibold text-slate-800">{partner.name}</h3>
                  <a href={partner.website_url} className="mt-2 inline-block text-sm text-sky-600" target="_blank" rel="noreferrer">
                    Kunjungi
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-16">
          <div className="mx-auto max-w-6xl">
            <SectionTitleComponent title="Kelola Konten Homepage" subtitle="CMS Sederhana" />

            {message && (
              <div className="mb-6 rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm text-sky-800">
                {message}
              </div>
            )}

            <div className="grid gap-6 lg:grid-cols-2">
              <form onSubmit={handleSlideSubmit} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-sky-800">Tambah / Edit Slideshow</h3>
                <div className="space-y-3">
                  <input value={slideForm.title} onChange={(e) => setSlideForm({ ...slideForm, title: e.target.value })} placeholder="Judul" className="w-full rounded-xl border border-slate-200 p-3" />
                  <input value={slideForm.subtitle} onChange={(e) => setSlideForm({ ...slideForm, subtitle: e.target.value })} placeholder="Subjudul" className="w-full rounded-xl border border-slate-200 p-3" />
                  <textarea value={slideForm.description} onChange={(e) => setSlideForm({ ...slideForm, description: e.target.value })} placeholder="Deskripsi" className="h-24 w-full rounded-xl border border-slate-200 p-3" />
                  <input value={slideForm.image_url} onChange={(e) => setSlideForm({ ...slideForm, image_url: e.target.value })} placeholder="URL Gambar" className="w-full rounded-xl border border-slate-200 p-3" />
                  <input value={slideForm.button_label} onChange={(e) => setSlideForm({ ...slideForm, button_label: e.target.value })} placeholder="Label Tombol" className="w-full rounded-xl border border-slate-200 p-3" />
                  <input value={slideForm.button_link} onChange={(e) => setSlideForm({ ...slideForm, button_link: e.target.value })} placeholder="Link Tombol" className="w-full rounded-xl border border-slate-200 p-3" />
                </div>
                <div className="mt-4 flex gap-3">
                  <button type="submit" className="rounded-full bg-sky-600 px-4 py-2 font-semibold text-white">Simpan</button>
                  <button type="button" onClick={() => setSlideForm(EMPTY_SLIDE)} className="rounded-full bg-slate-200 px-4 py-2 font-semibold text-slate-700">Reset</button>
                </div>
                <div className="mt-4 space-y-2">
                  {slides.map((slide) => (
                    <div key={slide.id} className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
                      <span>{slide.title}</span>
                      <div className="flex gap-2">
                        <button type="button" onClick={() => setSlideForm(slide)} className="text-sky-600">Edit</button>
                        <button type="button" onClick={() => deleteItem('slides', slide.id)} className="text-red-500">Hapus</button>
                      </div>
                    </div>
                  ))}
                </div>
              </form>

              <form onSubmit={handleTestimonialSubmit} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-sky-800">Tambah / Edit Testimoni</h3>
                <div className="space-y-3">
                  <input value={testimonialForm.name} onChange={(e) => setTestimonialForm({ ...testimonialForm, name: e.target.value })} placeholder="Nama" className="w-full rounded-xl border border-slate-200 p-3" />
                  <input value={testimonialForm.role} onChange={(e) => setTestimonialForm({ ...testimonialForm, role: e.target.value })} placeholder="Peran / Jurusan" className="w-full rounded-xl border border-slate-200 p-3" />
                  <textarea value={testimonialForm.quote} onChange={(e) => setTestimonialForm({ ...testimonialForm, quote: e.target.value })} placeholder="Testimoni" className="h-24 w-full rounded-xl border border-slate-200 p-3" />
                  <input type="number" min="1" max="5" value={testimonialForm.rating} onChange={(e) => setTestimonialForm({ ...testimonialForm, rating: Number(e.target.value) })} placeholder="Rating" className="w-full rounded-xl border border-slate-200 p-3" />
                </div>
                <div className="mt-4 flex gap-3">
                  <button type="submit" className="rounded-full bg-sky-600 px-4 py-2 font-semibold text-white">Simpan</button>
                  <button type="button" onClick={() => setTestimonialForm(EMPTY_TESTIMONIAL)} className="rounded-full bg-slate-200 px-4 py-2 font-semibold text-slate-700">Reset</button>
                </div>
                <div className="mt-4 space-y-2">
                  {testimonials.map((item) => (
                    <div key={item.id} className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
                      <span>{item.name}</span>
                      <div className="flex gap-2">
                        <button type="button" onClick={() => setTestimonialForm(item)} className="text-sky-600">Edit</button>
                        <button type="button" onClick={() => deleteItem('testimonials', item.id)} className="text-red-500">Hapus</button>
                      </div>
                    </div>
                  ))}
                </div>
              </form>

              <form onSubmit={handlePartnerSubmit} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-sky-800">Tambah / Edit Mitra</h3>
                <div className="space-y-3">
                  <input value={partnerForm.name} onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })} placeholder="Nama Mitra" className="w-full rounded-xl border border-slate-200 p-3" />
                  <input value={partnerForm.logo_url} onChange={(e) => setPartnerForm({ ...partnerForm, logo_url: e.target.value })} placeholder="URL Logo" className="w-full rounded-xl border border-slate-200 p-3" />
                  <input value={partnerForm.website_url} onChange={(e) => setPartnerForm({ ...partnerForm, website_url: e.target.value })} placeholder="Website" className="w-full rounded-xl border border-slate-200 p-3" />
                </div>
                <div className="mt-4 flex gap-3">
                  <button type="submit" className="rounded-full bg-sky-600 px-4 py-2 font-semibold text-white">Simpan</button>
                  <button type="button" onClick={() => setPartnerForm(EMPTY_PARTNER)} className="rounded-full bg-slate-200 px-4 py-2 font-semibold text-slate-700">Reset</button>
                </div>
                <div className="mt-4 space-y-2">
                  {partners.map((partner) => (
                    <div key={partner.id} className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
                      <span>{partner.name}</span>
                      <div className="flex gap-2">
                        <button type="button" onClick={() => setPartnerForm(partner)} className="text-sky-600">Edit</button>
                        <button type="button" onClick={() => deleteItem('partners', partner.id)} className="text-red-500">Hapus</button>
                      </div>
                    </div>
                  ))}
                </div>
              </form>

              <form onSubmit={handleTuitionSubmit} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-sky-800">Tambah / Edit Biaya Kuliah</h3>
                <div className="space-y-3">
                  <input value={tuitionForm.category} onChange={(e) => setTuitionForm({ ...tuitionForm, category: e.target.value })} placeholder="Kategori" className="w-full rounded-xl border border-slate-200 p-3" />
                  <textarea value={tuitionForm.description} onChange={(e) => setTuitionForm({ ...tuitionForm, description: e.target.value })} placeholder="Deskripsi" className="h-24 w-full rounded-xl border border-slate-200 p-3" />
                  <input type="number" value={tuitionForm.amount} onChange={(e) => setTuitionForm({ ...tuitionForm, amount: Number(e.target.value) })} placeholder="Jumlah" className="w-full rounded-xl border border-slate-200 p-3" />
                  <select value={tuitionForm.currency} onChange={(e) => setTuitionForm({ ...tuitionForm, currency: e.target.value })} className="w-full rounded-xl border border-slate-200 p-3">
                    <option value="IDR">IDR</option>
                    <option value="USD">USD</option>
                  </select>
                </div>
                <div className="mt-4 flex gap-3">
                  <button type="submit" className="rounded-full bg-sky-600 px-4 py-2 font-semibold text-white">Simpan</button>
                  <button type="button" onClick={() => setTuitionForm(EMPTY_FEE)} className="rounded-full bg-slate-200 px-4 py-2 font-semibold text-slate-700">Reset</button>
                </div>
                <div className="mt-4 space-y-2">
                  {tuitionFees.map((fee) => (
                    <div key={fee.id} className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
                      <span>{fee.category}</span>
                      <div className="flex gap-2">
                        <button type="button" onClick={() => setTuitionForm(fee)} className="text-sky-600">Edit</button>
                        <button type="button" onClick={() => deleteItem('tuitionFees', fee.id)} className="text-red-500">Hapus</button>
                      </div>
                    </div>
                  ))}
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
