import React from 'react';
import { Link } from 'react-router-dom';
import ButtonComponent from '../components/ButtonComponent';

const TentangPage = () => {
  return (
    <section className="px-6 py-16 md:px-16">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-lg ring-1 ring-sky-100 md:p-12">
        <h1 className="text-3xl font-extrabold text-sky-900 md:text-4xl">Tentang Politeknik Caltex Riau</h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          Politeknik Caltex Riau merupakan perguruan tinggi vokasi yang berfokus pada pengembangan kompetensi
          teknologi, inovasi, dan kewirausahaan. Kami mendorong mahasiswa untuk belajar secara aktif, kreatif,
          dan siap menghadapi tantangan industri modern.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ['Visi', 'Menjadi perguruan tinggi unggulan dalam bidang teknologi dan kewirausahaan.' ],
            ['Misi', 'Menyediakan pendidikan yang aplikatif, inovatif, dan berdaya saing tinggi.' ],
            ['Nilai', 'Integritas, kolaborasi, inovasi, dan kepedulian terhadap masyarakat.' ]
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-sky-100 bg-sky-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-sky-900">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link to="/">
            <ButtonComponent label="Kembali ke Beranda" color="sky" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TentangPage;
