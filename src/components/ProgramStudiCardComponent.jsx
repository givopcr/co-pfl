import React from 'react';

const ProgramStudiCardComponent = ({ nama, deskripsi }) => {
  return (
    <div className="group rounded-2xl border border-sky-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-lg font-bold text-sky-700">
        {nama.charAt(0)}
      </div>
      <h3 className="mb-3 text-xl font-bold text-sky-900">{nama}</h3>
      <p className="text-sm leading-relaxed text-gray-600">{deskripsi}</p>
    </div>
  );
};

export default ProgramStudiCardComponent;
