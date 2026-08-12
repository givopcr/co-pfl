import React from 'react';

const SectionTitleComponent = ({ title, subtitle }) => {
  return (
    <div className="mb-10 text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
        {subtitle}
      </p>
      <h2 className="text-3xl font-extrabold text-sky-900 md:text-4xl">{title}</h2>
    </div>
  );
};

export default SectionTitleComponent;
