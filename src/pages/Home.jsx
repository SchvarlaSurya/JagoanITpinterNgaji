import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-blue-600">JAGOAN IT PINTER NGAJI</h2>
            <div className="flex items-center space-x-10">
              <a href="#home" className="text-gray-800 hover:text-blue-600 font-medium transition hover-3d">Home</a>
              <a href="#about" className="text-gray-800 hover:text-blue-600 font-medium transition hover-3d">About</a>
              <a href="#testimonials" className="text-gray-800 hover:text-blue-600 font-medium transition hover-3d">Testimonials</a>
              <a href="#contact" className="text-gray-800 hover:text-blue-600 font-medium transition hover-3d">Contact</a>
              <a href="#signin" className="text-gray-600 font-medium hover:text-blue-600 font-medium transition hover-3d">Sign In</a>
              <a href="#getstarted" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition hover-3d">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-500 to-purple-600 text-white ">
        <div className="hero bg-white  shadow-lg min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-1xl font-bold text-black">Membawa Pendidikan Ke Level Baru Melalui Inovasi Digital</h1>
      <p className="py-6 text-black leading-relaxed text-justify">
         Ingin Berkembang Dan Membuka Peluang Karier Yang Lebih Besar?<br/>
                Di Sini, Kamu Bisa Memilih Berbagai Program Pembelajaran Interaktif Yang Seru, 
                Terstruktur, Dan Dirancang Untuk Hasil Nyata.<br/>
                Jangan Tunda Kesempatanmu. Masa Depan Dimulai Dari Keputusan Hari ini.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-16 flex-wrap">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-blue-600 mb-2">100K</h3>
              <p className="text-gray-600 text-xl font-medium">Siswa Aktif</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold text-blue-600 mb-2">10K</h3>
              <p className="text-gray-600 text-xl font-medium">Program Pembelajaran</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold text-blue-600 mb-2">100K</h3>
              <p className="text-gray-600 text-xl font-medium">Alumni Berhasil Berkarir</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;