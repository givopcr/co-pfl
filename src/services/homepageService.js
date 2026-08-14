import { supabase } from '../lib/supabase'

// Ubah isi data di sini jika ingin mengganti angka atau teks default yang tampil di homepage.
// Misalnya: data biaya kuliah di bagian tuitionFees, testimoni, mitra, dan slideshow.
export const fallbackHomepageData = {
  slides: [
    {
      id: 'slide-1',
      title: 'Politeknik Caltex Riau',
      subtitle: 'Menjadi kampus unggul yang mencetak lulusan siap kerja dan siap berinovasi.',
      description: 'Belajar melalui pendekatan praktik, kolaborasi industri, dan inovasi teknologi.',
      image_url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
      button_label: 'Lihat Program Studi',
      button_link: '/prodi',
      is_active: true,
      created_at: '2025-01-01T00:00:00.000Z'
    }
  ],
  testimonials: [
    {
      id: 'testimonial-1',
      name: 'Muhammad Rizki',
      role: 'Mahasiswa Teknik Informatika',
      quote: 'Dosen dan laboratorium di PCR sangat membantu saya membangun portofolio serta kepercayaan diri saat menghadapi dunia kerja.',
      rating: 5,
      is_active: true,
      created_at: '2025-01-01T00:00:00.000Z'
    },
    {
      id: 'testimonial-2',
      name: 'Ayu Lestari',
      role: 'Mahasiswa Akuntansi',
      quote: 'Pembelajaran yang aplikatif membuat saya lebih siap menghadapi dunia industri dan skripsi dengan lebih terarah.',
      rating: 5,
      is_active: true,
      created_at: '2025-01-01T00:00:00.000Z'
    },
    {
      id: 'testimonial-3',
      name: 'Dian Pratama',
      role: 'Alumni Teknik Mesin',
      quote: 'Saya mendapat pengalaman kerja nyata dan jaringan industri yang cukup kuat sejak masa kuliah.',
      rating: 5,
      is_active: true,
      created_at: '2025-01-01T00:00:00.000Z'
    }
  ],
  partners: [
    { id: 'partner-1', name: 'PT Telkom Indonesia', website_url: 'https://www.telkom.co.id', is_active: true, created_at: '2025-01-01T00:00:00.000Z' },
    { id: 'partner-2', name: 'Bank Riau Kepri', website_url: 'https://www.bankriau-kepri.co.id', is_active: true, created_at: '2025-01-01T00:00:00.000Z' },
    { id: 'partner-3', name: 'Google for Education', website_url: 'https://edu.google.com', is_active: true, created_at: '2025-01-01T00:00:00.000Z' },
    { id: 'partner-4', name: 'Microsoft', website_url: 'https://www.microsoft.com', is_active: true, created_at: '2025-01-01T00:00:00.000Z' }
  ],
  tuitionFees: [
    { id: 'fee-1', category: 'Semester 1', description: 'Uang pangkal dan biaya pendidikan awal', amount: 19500000, currency: 'IDR', is_featured: true, created_at: '2025-01-01T00:00:00.000Z' },
    { id: 'fee-2', category: 'Semester 2-6', description: 'Biaya kuliah per semester', amount: 6950000, currency: 'IDR', is_featured: true, created_at: '2025-01-01T00:00:00.000Z' },
    { id: 'fee-3', category: 'Laboratorium & Praktikum', description: 'Biaya kegiatan praktikum dan peralatan', amount: 500000, currency: 'IDR', is_featured: false, created_at: '2025-01-01T00:00:00.000Z' }
  ]
}

const fetchTable = async (tableName) => {
  if (!supabase) {
    return []
  }

  const { data, error } = await supabase
    .from(tableName)
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: true })

  if (error) {
    console.error(`Error loading ${tableName}:`, error.message)
    return []
  }

  return data ?? []
}

export const fetchHomepageData = async () => {
  if (!supabase) {
    return fallbackHomepageData
  }

  const [slides, testimonials, partners, tuitionFees] = await Promise.all([
    fetchTable('homepage_slides'),
    fetchTable('testimonials'),
    fetchTable('partners'),
    fetchTable('tuition_fees')
  ])

  return {
    slides: slides.length ? slides : fallbackHomepageData.slides,
    testimonials: testimonials.length ? testimonials : fallbackHomepageData.testimonials,
    partners: partners.length ? partners : fallbackHomepageData.partners,
    tuitionFees: tuitionFees.length ? tuitionFees : fallbackHomepageData.tuitionFees
  }
}

export const createTestimonial = async (payload) => {
  if (!supabase) {
    throw new Error('Supabase belum dikonfigurasi. Tambahkan VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY.')
  }

  const { data, error } = await supabase.from('testimonials').insert([payload]).select()

  if (error) {
    throw error
  }

  return data
}

export const updateTestimonial = async (id, payload) => {
  if (!supabase) {
    throw new Error('Supabase belum dikonfigurasi. Tambahkan VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY.')
  }

  const { data, error } = await supabase.from('testimonials').update(payload).eq('id', id).select()

  if (error) {
    throw error
  }

  return data
}

export const deleteTestimonial = async (id) => {
  if (!supabase) {
    throw new Error('Supabase belum dikonfigurasi. Tambahkan VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY.')
  }

  const { error } = await supabase.from('testimonials').delete().eq('id', id)

  if (error) {
    throw error
  }
}

export const createPartner = async (payload) => {
  if (!supabase) {
    throw new Error('Supabase belum dikonfigurasi. Tambahkan VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY.')
  }

  const { data, error } = await supabase.from('partners').insert([payload]).select()

  if (error) {
    throw error
  }

  return data
}

export const updatePartner = async (id, payload) => {
  if (!supabase) {
    throw new Error('Supabase belum dikonfigurasi. Tambahkan VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY.')
  }

  const { data, error } = await supabase.from('partners').update(payload).eq('id', id).select()

  if (error) {
    throw error
  }

  return data
}

export const deletePartner = async (id) => {
  if (!supabase) {
    throw new Error('Supabase belum dikonfigurasi. Tambahkan VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY.')
  }

  const { error } = await supabase.from('partners').delete().eq('id', id)

  if (error) {
    throw error
  }
}

export const createTuitionFee = async (payload) => {
  if (!supabase) {
    throw new Error('Supabase belum dikonfigurasi. Tambahkan VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY.')
  }

  const { data, error } = await supabase.from('tuition_fees').insert([payload]).select()

  if (error) {
    throw error
  }

  return data
}

export const updateTuitionFee = async (id, payload) => {
  if (!supabase) {
    throw new Error('Supabase belum dikonfigurasi. Tambahkan VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY.')
  }

  const { data, error } = await supabase.from('tuition_fees').update(payload).eq('id', id).select()

  if (error) {
    throw error
  }

  return data
}

export const deleteTuitionFee = async (id) => {
  if (!supabase) {
    throw new Error('Supabase belum dikonfigurasi. Tambahkan VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY.')
  }

  const { error } = await supabase.from('tuition_fees').delete().eq('id', id)

  if (error) {
    throw error
  }
}

export const createSlide = async (payload) => {
  if (!supabase) {
    throw new Error('Supabase belum dikonfigurasi. Tambahkan VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY.')
  }

  const { data, error } = await supabase.from('homepage_slides').insert([payload]).select()

  if (error) {
    throw error
  }

  return data
}

export const updateSlide = async (id, payload) => {
  if (!supabase) {
    throw new Error('Supabase belum dikonfigurasi. Tambahkan VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY.')
  }

  const { data, error } = await supabase.from('homepage_slides').update(payload).eq('id', id).select()

  if (error) {
    throw error
  }

  return data
}

export const deleteSlide = async (id) => {
  if (!supabase) {
    throw new Error('Supabase belum dikonfigurasi. Tambahkan VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY.')
  }

  const { error } = await supabase.from('homepage_slides').delete().eq('id', id)

  if (error) {
    throw error
  }
}
