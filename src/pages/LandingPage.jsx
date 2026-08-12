import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import ButtonComponent from '../components/ButtonComponent';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 relative overflow-x-hidden">
      {/* Header / Navbar */}
      <NavbarComponent />

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#e0f2fe]">
        {/* Curved White Background on the Left */}
        <div className="absolute top-0 left-0 w-full lg:w-[60%] h-full bg-white z-10 rounded-br-[100px] lg:rounded-br-[300px] border-r-4 border-b-4 border-[#29b6f6]"></div>

        <div className="container mx-auto px-6 md:px-16 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 pr-0 lg:pr-12">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-[#0f5499] leading-tight mb-6">
              Lorem ipsum <br />
              <span className="text-[#29b6f6]">Lorem</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
            </p>

            {/* List Services */}
            <div className="space-y-4 mb-8">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center space-x-3 text-gray-700">
                  <svg className="w-5 h-5 text-[#29b6f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                  </svg>
                  <span className="font-semibold text-[#0f5499]">Services {num}</span>
                </div>
              ))}
            </div>

            <ButtonComponent label="I need help" color="sky" />
          </div>

          {/* Hero Right Content (Contact Form & Image placeholder background) */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl w-full max-w-md border-2 border-gray-100 z-30">
              <h3 className="text-2xl font-bold text-[#0f5499] text-center mb-6">Contact Us</h3>
              <form className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                    className="w-full px-4 py-3 rounded-xl bg-sky-50 border border-transparent focus:border-[#29b6f6] focus:bg-white outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-xl bg-sky-50 border border-transparent focus:border-[#29b6f6] focus:bg-white outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Pesan"
                    rows="3"
                    className="w-full px-4 py-3 rounded-xl bg-sky-50 border border-transparent focus:border-[#29b6f6] focus:bg-white outline-none transition-all duration-200 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#29b6f6] hover:bg-[#039be5] text-white font-semibold rounded-full shadow-lg transition-colors duration-200 active:scale-95"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-16 text-center">
          <h2 className="text-4xl font-extrabold text-[#0f5499] mb-16 relative inline-block">
            About Us
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#29b6f6] rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left max-w-6xl mx-auto mb-12">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-sky-100 border border-[#29b6f6] flex items-center justify-center font-bold text-[#0f5499]">
                    {num}
                  </div>
                  <h4 className="font-bold text-lg text-gray-800">Langkah Ke-{num}</h4>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                </p>
              </div>
            ))}
          </div>

          <ButtonComponent label="I need help" color="sky" />
        </div>
      </section>

      {/* Services Section */}
      <section id="prodi" className="py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-6 md:px-16 text-center">
          <h2 className="text-4xl font-extrabold text-[#0f5499] mb-16 relative inline-block">
            Services
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#29b6f6] rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
                <div className="h-48 bg-gradient-to-br from-sky-400 to-[#29b6f6] flex items-center justify-center p-6 text-white text-5xl font-black">
                  Service {item}
                </div>
                <div className="p-6 text-left flex-grow">
                  <h4 className="font-bold text-xl text-[#0f5499] mb-3">Lorem Ipsum</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <ButtonComponent label="I need help" color="sky" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#90caf9]">
        <div className="container mx-auto px-6 md:px-16 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-16 relative inline-block">
            Testimonials
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12 text-left">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-3xl p-6 shadow-lg flex items-start space-x-4">
                <div className="w-14 h-14 rounded-full bg-pink-200 flex-shrink-0 flex items-center justify-center font-bold text-[#0f5499]">
                  CH
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#0f5499]">Courtney Henry</h4>
                  <p className="text-gray-500 text-xs leading-relaxed my-2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <ButtonComponent label="I need help" color="sky" className="bg-white !text-[#0f5499] hover:bg-gray-100" />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
