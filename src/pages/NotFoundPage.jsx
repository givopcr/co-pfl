import React from 'react';
import { Link } from 'react-router-dom';
import ButtonComponent from '../components/ButtonComponent';

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-sky-50 px-6">
      <div className="w-full max-w-xl rounded-3xl bg-white p-10 text-center shadow-xl ring-1 ring-sky-100">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-600">404</p>
        <h1 className="mt-4 text-4xl font-black text-sky-900">Halaman tidak ditemukan</h1>
        <p className="mt-4 text-slate-600">
          Halaman yang Anda cari mungkin sudah dipindahkan atau tidak tersedia.
        </p>
        <div className="mt-8 flex justify-center">
          <Link to="/">
            <ButtonComponent label="Kembali ke Home" color="sky" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
