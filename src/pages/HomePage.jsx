import React from 'react';
import ButtonComponent from '../components/ButtonComponent';
import SectionTitleComponent from '../components/SectionTitleComponent';
import ProgramStudiCardComponent from '../components/ProgramStudiCardComponent';
import ProgramStudiData from '../data/ProgramStudiData';

const HomePage = () => {
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
                Politeknik Caltex Riau
              </h1>
              <p className="mt-5 max-w-xl text-lg text-slate-600">
                Menjadi kampus unggul yang mencetak lulusan siap kerja, inovatif, dan berdaya saing tinggi di era industri modern.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonComponent label="Lihat Program Studi" color="sky" />
                <ButtonComponent label="Hubungi Kami" color="blue" className="bg-sky-700 hover:bg-sky-800" />
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-white p-6 shadow-xl ring-1 ring-sky-100 lg:mt-0">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-sky-50 p-6">
                  <p className="text-sm text-slate-500">Jumlah Prodi</p>
                  <h3 className="mt-2 text-3xl font-extrabold text-sky-900">5+</h3>
                </div>
                <div className="rounded-2xl bg-blue-50 p-6">
                  <p className="text-sm text-slate-500">Lulusan</p>
                  <h3 className="mt-2 text-3xl font-extrabold text-blue-900">12K+</h3>
                </div>
                <div className="rounded-2xl bg-slate-100 p-6 md:col-span-2">
                  <p className="text-sm text-slate-500">Keunggulan</p>
                  <p className="mt-2 text-lg font-semibold text-slate-800">
                    Learning by Doing, kolaborasi industri, dan inovasi teknologi.
                  </p>
                </div>
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
      </main>
    </div>
  );
};

export default HomePage;
