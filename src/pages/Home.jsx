import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X, ArrowRight, Star, Users, BookOpen, Award, Clock, Globe, TrendingUp, CheckCircle, Sparkles, Headphones, Laptop, Shield } from 'lucide-react'
import { motion } from 'motion/react'

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 overflow-x-hidden">
        <div className="fixed inset-0 -z-10 bg-linear-to-tr from-blue-500/5 via-transparent to-purple-500/5" />

        {/* Navbar Fixed */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 lg:px-16 backdrop-blur-xl bg-white/80 border-b border-gray-100 shadow-sm">
          <div className="max-w-7x mx-auto flex items-center justify-between">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3">
              <div className="p-3 bg-blue-700 rounded-2xl shadow-lg">
                <BookOpen className="w-8 h-7 text-white" />
              </div>
              <img src="src/assets/BetaBet.svg" alt="BetaBet" className="w-40"/>
            </motion.div>
             <div className="hidden lg:flex items-center gap-10 text-gray-700 font-semibold   ">
              <a
                href="#hero"
                className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-blue-700 after:transition-transform hover:after:scale-x-100 hover:text-blue-700 transition"
              >Home</a>
              <a
                href="#kursus"
                className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-blue-700 after:transition-transform hover:after:scale-x-100 hover:text-blue-700 transition"
              >Kursus </a>
              <a
                href="#mentor"
                className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-blue-700 after:transition-transform hover:after:scale-x-100 hover:text-blue-700 transition"
              >Mentor</a>
              <a
                href="#testimoni"
                className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-blue-700 after:transition-transform hover:after:scale-x-100 hover:text-blue-700 transition"
              >Testimoni</a>
              <a
                href="#kontak"
                className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-blue-700 after:transition-transform hover:after:scale-x-100 hover:text-blue-700 transition"
              >Kontak </a>
                </div>

            <div className="hidden lg:flex items-center gap-4">
              <Link to='/signin' className="px-6 py-3 text-blue-700 font-bold rounded-full border-2 border-blue-200 hover:bg-blue-50 transition bg-white">
                Masuk
              </Link>
              <Link to="/signup" className="px-8 py-3 bg-blue-700 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition flex items-center gap-2">
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <button onClick={() => setMobileMenu(!mobileMenu)} className="lg:hidden">
              {mobileMenu ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </nav>

        {/* Hero */}
        <section id='hero' className="pt-32 pb-20 px-6 lg:px-16">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
                Belajar Tanpa Ribet !
              </motion.span>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="mt-6 text-5xl lg:text-5xl font-black text-gray-900 leading-tight">
                Membawa Pendidikan Ke<br />
                <span className="bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Level Baru Melalui<br />Inovasi Digital.
                </span>
              </motion.h1>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                className="mt-8 text-xl text-gray-700 leading-relaxed">
                Belajar Skill Relevan Industri Bersama BetaBet, Suasana Berpengala  man Dan Sistem Pembelajaran Modern Berbasis Teknologi. 
                Bukan Sekadar Teori — Tapi Kemampuan Nyata Untuk Masa Depan Yang Kompetitif.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
                className="mt-10 flex flex-col sm:flex-row gap-5">
                <button className="px-10 py-5 bg-blue-700 text-white font-bold text-xl rounded-full shadow-2xl hover:scale-105 transition">
                  Daftar Sekarang
                </button>
                <button className="px-10 py-5 border-2 border-gray-300 text-gray-700 font-bold text-xl rounded-full hover:bg-blue-700 hover:text-white transition">
                  Daftar Nanti
                </button>
              </motion.div>

              <div className="mt-9 flex row gap-10 text-center">
                {[
                  { number: "100K+", label: "Siswa Aktif" },
                  { number: "10K+", label: "Program Pembelajaran" },
                  { number: "100K+", label: "Alumni Berhasil Berkarir" }
                ].map((stat, i) => (
                  <div key={i}>
                    <h3 className="text-4xl font-black text-gray-900">{stat.number}</h3>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="-mt-21 lg:-mt-70">
              <img src="src/assets/bismillah.jpg" alt="Happy Students" className="rounded-3xl shadow-2xl w-full max-w-2xl mx-auto" />
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id='' className="px-6 lg:px-16 py-24 bg-linear-to-b from-white to-blue-50">
          <div className="max-w-6x1 mx-auto text-center">
            <h2 className="text-4xl font-black text-gray-900">Kenapa Harus BetaBet?</h2>
            <p className="mt-6 text-md  text-gray-600 max-w-4xl mx-auto">
              Kami bukan cuma platform belajar. Kami adalah gerbang menuju karier impianmu.
            </p>

            <div className="mt-20 grid md:grid-cols-3 gap-10">
              {[
                { icon: BookOpen, title: "Pembelajaran dari Big Tech & Startup", desc: "Belajar langsung dari praktisi Website" },
                { icon: Laptop, title: "100% Praktik + Project Real", desc: "Setiap materi langsung bikin portfolio siap interview" },
                { icon: Award, title: "Sertifikat + Job Guarantee*", desc: "Lulus = langsung dapet rekomendasi kerja (*syarat berlaku)" },
                { icon: Clock, title: "Belajar Fleksibel 24/7", desc: "Kapan pun, di mana pun — sesuai ritme hidupmu" },
                { icon: Users, title: "Komunitas 100K+ Member", desc: "Diskusi, networking, sampe kolplay bareng" },
                { icon: Shield, title: "Bebas Berkomunikasi", desc: "Gak puas? Kontak, no question asked" }
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-4 border border-gray-100 group">
                  <div className="w-18 h-18 mx-auto mb-6 bg-blue-700 rounded-2xl p-4 shadow-lg group-hover:scale-110 transition flex items-center justify-center">
                    <item.icon className="w-10 h-10 text-white mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: PENGEN BISA JAGO SPEAKING BAHASA INGGRIS, TAPI... */}
        <section id='kursus' className="py-20 lg:py-32 bg-linear-to-b from-black- to-white text-black overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            {/* Judul Besar */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-4xl lg:text-3xl font-black mb-16 lg:mb-20"
            >
              Pengen Bisa <span className="text-blue-700 hover:text-blue-500 transition">Jago Ngoding</span> Banyak Bahasa,{" "}
              <span className="block">Tapi...</span>
            </motion.h2>

            {/* Card Utama + Foto Orang */}
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl lg:rounded-[40px] p-8 lg:p-2 shadow-2xl border border-white">
              
              <div className="lg:grid-cols-2items-center flex">
                
                {/* Kiri: Daftar Masalah */}
                <div className="space-y-6 w-full max-w-md">
                  {[
                    "Pengen ngoding, tapi takut salah",
                    "Bahasa coding? Aduh, bikin pusing!",
                    "Syntax minim, jadi bingung mau nulis apa",
                    "Bikin website? Langsung ngeblank!",
                    "Ngerti pake Ai, tapi gak paham cara kerjanya"
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-5 border border-white/20 text-left ml-auto"
                    >
                      <div className="text-2xl px-8 py-3  text-white font-bold rounded-2x1 shadow-xl hover:shadow-2xl hover:scale-105 transition flex items-center gap-2">❌</div>
                      <p className="text-lg lg:text-xl font-medium px-8 py-3  rounded-2x1 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2  hover:bg-blue-700 hover:text-white transition">{text}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative mb-10">
                    <div className='flex justify-center'>
                    <img 
                      src="src/assets/0230eee1cced79a881276b4be2fb0d30.jpg" 
                      alt="Pengen jago Ngoding tapi..."
                      className="w-80 lg:w-96 rounded-3xl shadow-2xl"
                    />
                    </div>
                </motion.div>

                {/* Kanan: Foto Orang Stres + Daftar Masalah */}
                  <div className="space-y-6 w-full max-w-md">
                    {[
                      "Nggak pede sama Website sendiri, takut diketawain",
                      "Bikin satu baris aja mikirnya lama",
                      "Takut salah penulisan, jadi malah diam",
                      "Kalau disuruh bikin web, langsung panik!",
                      "Rasanya pengen bisa, tapi selalu ragu mulai"
                    ].map((text, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.1 }}
                        className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-5 border border-white/20 text-left ml-auto"
                      >
                        <div className="text-2xl px-8 py-3  text-white font-bold rounded-2x1 shadow-xl hover:shadow-2xl hover:scale-105 transition flex items-center gap-2">❌</div>
                        <p className="text-lg lg:text-xl  px-8 py-3 font-medium rounded-2x1 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2  hover:bg-blue-700 hover:text-white transition">{text}</p>
                      </motion.div>
                    ))}
                  </div>
              </div>
            </div>

            {/* CTA Bawah */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mt-16"
            >
              <p className="text-2xl lg:text-4xl font-bold mb-8">
                Gak usah panik, kami punya solusinya
              </p>
              <button className="px-10 py-6 bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-black text-2xl rounded-full shadow-2xl hover:scale-105 transition flex items-center gap-4 mx-auto">
                Saya Mau Jago Ngoding!
              </button>
            </motion.div>

          </div>
        </section>

        {/* Testimoni */}
        <section id='testimoni' className="px-6 lg:px-16 py-24">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-black text-gray-900">Apa Kata Alumni Kami?</h2>
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {[
                { name: "Rizky A.", from: "Fresh Grad → Frontend Engineer @ Startup Unicorn", text: "Dari nol sampe gaji 15jt/bulan dalam 6 bulan. Gila sih BetaBet!" },
                { name: "Salsa M.", from: "Ibu Rumah Tangga → Freelancer Full-time", text: "Belajar sambil ngurus anak. Sekarang bisa ambil project 8-15jt/bulan!" },
                { name: "Dani P.", from: "Karyawan → Full Remote Developer", text: "Naik gaji 3x lipat + kerja dari Bali. Terima kasih BetaBet!" }
              ].map((t, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-gray-700 italic mb-6">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {t.name[0]}
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">{t.name}</h4>
                      <p className="text-sm text-gray-600">{t.from}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id='mentor' className="relative px-6 py-24 lg:py-32 overflow-hidden bg-linear-to-br from-blue-600 to-blue-700">
          <div className="absolute inset-0 bg-black/10" />
          
          <div className="relative max-w-7xl mx-auto text-center">
            {/* Judul */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-4xl font-black text-white mb-16 lg:mb-20"
            >
              Rasakan Pengalaman Belajar<br />
              <span className="text-yellow-300">yang Beneran Berbeda</span>
            </motion.h2>

            {/* Foto Besar Mentor + Siswa */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative max-w-2xl mx-auto mb-16 lg:mb-20 -mt-10"
            >
              <div className="rounded-3xl overflow-hidden shadow-3xl border-8 border-white/20">
                <img src="src/assets/4d35f40de453901dfa94d86b9f763584.jpg"/>
              </div>
              {/* Efek glass overlay biar makin premium */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent rounded-3xl" />
            </motion.div>

            {/* Dua Card di Bawah */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 max-w-9xl mx-auto">
              {/* Card Kiri */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 lg:p-12 border border-white/20 shadow-2xl"
              >
                <h3 className="text-4xl lg:text-3xl font-black text-white mb-8">
                  Belajar Nyaman Sesuai <span className="text-yellow-300">Tujuanmu</span>
                </h3>
                <div className="space-y-8 text-left">
                  {[
                    { emoji: "👂", title: "Kami Mendengar dan Memahami", desc: "Setiap peserta dipersilakan nyampaikan kebutuhan, target skill, dan kesulitannya. Di BetaBet, mentor bukan cuma ngajar—tapi juga dengerin dan bantu kamu nemu cara belajar yang paling pas." },
                    { emoji: "🎯", title: "Program Disesuaikan Kebutuhanmu", desc: "Mau fokus bikin website, belajar JavaScript, backend, UI/UX, atau fullstack — semua materi bisa disesuaikan 100% sama tujuan dan level kamu." },
                    { emoji: "✨", title: "Program Supportif & Seru", desc: "Nggak ada nge-judge code kamu berantakan. Yang ada cuma support, diskusi santai, dan tempat belajar yang aman buat eksplorasi." },
                    { emoji: "🥰", title: "Staf dan Admin Ramah", desc: "Kamu akan disambut senyum tulus dan energi positif dari hari pertama." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="text-2xl">{item.emoji}</div>
                      <div>
                        <h4 className="text-xl font-bold text-yellow-300 mb-2">{item.title}</h4>
                        <p className="text-white/90 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Card Kanan */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 lg:p-12 border border-white/20 shadow-2xl"
              >
                <h3 className="text-4xl lg:text-3 xl font-black text-white mb-8">
                  Didampingi Kegiatan Unik, <span className="text-yellow-300">& Seru!</span>
                </h3>
                <div className="space-y-8 text-left">
                  {[
                    { emoji: "💬", title: "Pengalaman Mengajar Personal", desc: "Program kami adaptif, bisa handle pemula sampai yang udah pernah ngoding. Pendekatan satu-satu bikin kamu makin pede nulis code." },
                    { emoji: "📊", title: "Evaluasi & Supervisi Profesional", desc: "Setiap Program dievaluasi rutin oleh tim senior engineer — supaya kualitas pembelajaran selalu konsisten dan up-to-date dengan standar industri." },
                    { emoji: "🤝", title: "Komunikatif di Dalam & Luar Kelas", desc: "Diskusi, debugging bareng, tanya-tanya syntax — mentor selalu ready bantu, bahkan setelah sesi belajar selesai." },
                    { emoji: "🎓", title: "Praktisi Berpengalaman", desc: "Semua tutor punya sertifikasi resmi pengajaran + pengalaman real di lapangan.Dipandu oleh praktisi yang punya sertifikasi resmi dan pengalaman langsung mengembangkan website serta aplikasi di dunia nyata." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="text-2xl">{item.emoji}</div>
                      <div>
                        <h4 className="text-xl font-bold text-yellow-300 mb-2">{item.title}</h4>
                        <p className="text-white/90 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-16 flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link to='/signin' className="px-12 py-6 bg-yellow-400 text-black font-black text-2xl rounded-full shadow-2xl hover:scale-110 transition">
                Daftar Sekarang
              </Link>
              <button className="px-12 py-6 bg-white/20 backdrop-blur-xl text-white font-bold text-xl rounded-full border-2 border-white hover:bg-white/30 transition">
                Konsultasi Dulu
              </button>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 lg:px-16 py-32">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
              className="bg-linear-to-r from-blue-600 to-blue-800 rounded-3xl p-16 shadow-2xl text-white">
              <h2 className="text-5xl lg:text-5xl font-black mb-6">
                Jangan Cuma Nonton,<br />
                <span className="text-yellow-300">Mulai Karier Impianmu Sekarang!</span>
              </h2>
              <p className="text-md mb-10 opacity-90">
                Setiap Hari Akses Full GRATIS • Tanpa Kartu Kredit • Bisa Mulai Kapan Aja
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to='/signin' className="px-10 py-4 bg-white text-blue-700 font-black text-2xl rounded-full shadow-2xl hover:scale-90 transition">
                  Mulai Belajar!
                </Link>
                <button className="px-10 py-3 border-2 border-white text-white font-bold text-2x1 rounded-full hover:bg-white/20 transition flex items-center justify-center gap-3">
                  <Headphones className="w-8 h-8" /> Chat Mentor Sekarang
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FOOTER ALA COURSMOS 2025 — SUPER PREMIUM */}
        <footer className="relative bg-linear-to-b from-gray-900 to-black text-white">
          <div className="px-6 lg:px-16 py-11">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

              {/* Logo + Tagline + Social */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-700 rounded-2xl shadow-lg">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <img src="src/assets/BetaBet.svg" alt="BetaBet" className="w-40" />
                </div>
                <p className="text-gray-400 text-lg leading-relaxed max-w-xs">
                  Transforming Your Career, One Course at a Time.
                </p>
                <div className="flex gap-4">
                  {[
                    { icon: "facebook", href: "" },
                    { icon: "twitter", href: "#" },
                    { icon: "instagram", href: "#" },
                    { icon: "linkedin", href: "#" },
                    { icon: "youtube",Href: "#" }
                  ].map((social, i) => (
                    <a key={i} href={social.href} className="w-12 h-12 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition backdrop-blur-sm">
                      <div className="w-6 h-6 bg-black rounded-full" /> {/* Ganti dengan icon SVG asli nanti */}
                    </a>
                  ))}
                </div>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-white">Company</h3>
                <ul className="space-y-4 text-gray-400">
                  {['About Us', 'Contact Us', 'Latest Reads', 'Courses', 'Career'].map((item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-blue-400 transition duration-200 inline-block">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Links */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-white">Legal Information</h3>
                <ul className="space-y-4 text-gray-400">
                  {['Disclaimer', 'Privacy Policy', 'Terms And Conditions', 'Cookie Policy', 'Refund Policy'].map((item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-blue-400 transition duration-200 inline-block">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Address + Back to Top */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-6 text-white">BetaBet Indonesia</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <span className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                      Jl. Sudirman No. 88, Jakarta Pusat<br />
                      DKI Jakarta 10220, Indonesia
                    </span>
                  </p>
                </div>

                {/* Back to Top Button */}
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="mt-8 w-14 h-14 bg-linear-to-br from-blue-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all group"
                >
                  <ArrowRight className="w-7 h-7 text-white -rotate-90 group-hover:-translate-y-1 transition" />
                </button>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-2 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
              <p>© 2025 BetaBet. All Rights Reserved.</p>
              <p className="mt-4 md:mt-0">Made with love in Indonesia</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}