import React from 'react';
import SectionTitleComponent from '../components/SectionTitleComponent';
import ProgramStudiData from '../data/ProgramStudiData';
import ProgramStudiCardComponent from '../components/ProgramStudiCardComponent';

const ProgramStudiPage = () => {
  return (
    <section className="px-6 py-16 md:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionTitleComponent
          title="Program Studi"
          subtitle="Pilihan Keahlian"
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
  );
};

export default ProgramStudiPage;
