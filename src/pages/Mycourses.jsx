import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X, ArrowRight, Star, Users, BookOpen, Award, Clock, Globe, TrendingUp, CheckCircle, Sparkles, Headphones, Laptop, Shield } from 'lucide-react'
import { motion } from 'motion/react'

export default function MyCoursesUI() {
  return (
    <div className="min-h-screen bg-[#E9F1FA] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col justify-between">
        <div>
          <img src="src/assets/BetaBet.svg" alt="BetaBet" className='w-25' />

          <h2 className="text-gray-500 text-sm mb-3">MAIN MENU</h2>
          <nav className="flex flex-col gap-2">
            <button className="flex items-center gap-3 px-4 py-2  text-black">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14 9q-.425 0-.712-.288T13 8V4q0-.425.288-.712T14 3h6q.425 0 .713.288T21 4v4q0 .425-.288.713T20 9zM4 13q-.425 0-.712-.288T3 12V4q0-.425.288-.712T4 3h6q.425 0 .713.288T11 4v8q0 .425-.288.713T10 13zm10 8q-.425 0-.712-.288T13 20v-8q0-.425.288-.712T14 11h6q.425 0 .713.288T21 12v8q0 .425-.288.713T20 21zM4 21q-.425 0-.712-.288T3 20v-4q0-.425.288-.712T4 15h6q.425 0 .713.288T11 16v4q0 .425-.288.713T10 21z"/></svg></span>
              <Link to='/dashboard' >Dashboard</Link>
            </button>
            <button className="flex items-center gap-3 px-4 py-2 rounded-lg bg-blue-600 text-white rounded-lg">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M13.5 3l5.5 5.5v11.5c0 0.55 -0.45 1 -1 1h-12c-0.55 0 -1 -0.45 -1 -1v-16c0 -0.55 0.45 -1 1 -1Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"/><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/></path><path d="M14.5 3.5l2.25 2.25l2.25 2.25z" opacity="0"><animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M14.5 3.5l2.25 2.25l2.25 2.25z;M14.5 3.5l0 4.5l4.5 0z"/><set fill="freeze" attributeName="opacity" begin="0.6s" to="1"/></path></g></svg></span>
              My courses
            </button>
            <button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4.2q.325-.9 1.088-1.45T12 1t1.713.55T14.8 3H19q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm2-4h7v-2H7zm0-4h10v-2H7zm0-4h10V7H7zm5-4.75q.325 0 .538-.213t.212-.537t-.213-.537T12 2.75t-.537.213t-.213.537t.213.538t.537.212"/></svg></span>
               Assignment
            </button>
            <button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect width="14" height="0" x="5" y="5" fill="currentColor"><animate fill="freeze" attributeName="height" begin="0.6s" dur="0.2s" values="0;3"/></rect><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="64" stroke-dashoffset="64" d="M12 4h7c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/></path><path stroke-dasharray="4" stroke-dashoffset="4" d="M7 4v-2M17 4v-2"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="4;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M7 11h10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="12;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M7 15h7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="8;0"/></path></g></svg></span>
               Calendar
            </button>
          </nav>

          <h2 className="text-gray-500 text-sm mt-10 mb-3">OTHER MENU</h2>
          <nav className="flex flex-col gap-2">
            <button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.95 18q.525 0 .888-.363t.362-.887t-.362-.888t-.888-.362t-.887.363t-.363.887t.363.888t.887.362m-.9-3.85h1.85q0-.825.188-1.3t1.062-1.3q.65-.65 1.025-1.238T15.55 8.9q0-1.4-1.025-2.15T12.1 6q-1.425 0-2.312.75T8.55 8.55l1.65.65q.125-.45.563-.975T12.1 7.7q.8 0 1.2.438t.4.962q0 .5-.3.938t-.75.812q-1.1.975-1.35 1.475t-.25 1.825M12 22q-2.075 0-3.9-.787t-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg></span>
               Help Center
            </button>
            <button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M14.208 4.83q.68.21 1.3.54l1.833-1.1a1 1 0 0 1 1.221.15l1.018 1.018a1 1 0 0 1 .15 1.221l-1.1 1.833q.33.62.54 1.3l2.073.519a1 1 0 0 1 .757.97v1.438a1 1 0 0 1-.757.97l-2.073.519q-.21.68-.54 1.3l1.1 1.833a1 1 0 0 1-.15 1.221l-1.018 1.018a1 1 0 0 1-1.221.15l-1.833-1.1q-.62.33-1.3.54l-.519 2.073a1 1 0 0 1-.97.757h-1.438a1 1 0 0 1-.97-.757l-.519-2.073a7.5 7.5 0 0 1-1.3-.54l-1.833 1.1a1 1 0 0 1-1.221-.15L4.42 18.562a1 1 0 0 1-.15-1.221l1.1-1.833a7.5 7.5 0 0 1-.54-1.3l-2.073-.519A1 1 0 0 1 2 12.72v-1.438a1 1 0 0 1 .757-.97l2.073-.519q.21-.68.54-1.3L4.27 6.66a1 1 0 0 1 .15-1.221L5.438 4.42a1 1 0 0 1 1.221-.15l1.833 1.1q.62-.33 1.3-.54l.519-2.073A1 1 0 0 1 11.28 2h1.438a1 1 0 0 1 .97.757zM12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"/></svg></span>
               Settings
            </button>
            <button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12h-9.5m7.5 3l3-3l-3-3m-5-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-1"/></svg></span>
               Log Out
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        {/* Search + Card */}
        <div className="flex items-start justify-between">
          <div className="flex-1 mr-6">
            <div className="bg-white p-5 rounded-xl shadow-md">
                <div className="relative text-black">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border rounded-full w-64 text-black"
              />
              <span className="absolute left-3 top-2.5 text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg></span>
            </div>

              <h2 className="text-xl font-bold mb-1 text-black">Welcome Back, Roberto Manchino!</h2>
              <p className="text-gray-600 text-sm mb-4 text-black">
                Yuk, Belajar Jangan Sampai Tertinggal Paket Ekslusif Yang Kami Sediakan Saat Ini!
              </p>

              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold transform transition-all duration-200hover:-translate-y-1 hover:shadow-[0_8px_0_0_#1e40af] active:translate-y-0 active:shadow-[0_0px_0_0_#1e40af] ">
                Buy Lesson
              </button>
            </div>

            {/* Classes */}
            <h2 className="mt-10 font-bold text-lg text-black">Classes</h2>

            <div className="grid grid-cols-3 gap-6 mt-4 text-black">
              <div className="bg-blue-600 rounded-xl shadow-md p-6 text-center font-semibold px-6 py-3 text-white rounded-lg font-semibold transform transition-all duration-200hover:-translate-y-1 hover:shadow-[0_8px_0_0_#1e40af] active:translate-y-0 active:shadow-[0_0px_0_0_#1e40af]">
                UNIT III
              </div>
              <div className="bg-blue-600 rounded-xl shadow-md p-6 text-center font-semibold px-6 py-3 text-white rounded-lg font-semibold transform transition-all duration-200hover:-translate-y-1 hover:shadow-[0_8px_0_0_#1e40af] active:translate-y-0 active:shadow-[0_0px_0_0_#1e40af]">
                UNIT II
              </div>
              <div className="bg-blue-600 rounded-xl shadow-md p-6 text-center font-semibold px-6 py-3 text-white rounded-lg font-semibold transform transition-all duration-200hover:-translate-y-1 hover:shadow-[0_8px_0_0_#1e40af] active:translate-y-0 active:shadow-[0_0px_0_0_#1e40af]">
                UNIT I
              </div>
            </div>

            {/* Placeholder Lessons */}
            <div className="mt-10 space-y-4">
              <div className="bg-white rounded-xl shadow-md h-12 text-black">class</div>
              <div className="bg-white rounded-xl shadow-md h-12 text-black">class</div>
              <div className="bg-white rounded-xl shadow-md h-12 text-black">class</div>
            </div>
          </div>

          {/* Right Profile Card */}
          <div className="w-72 bg-white p-6 shadow-md rounded-xl flex flex-col items-center">
            <img
              src="/"
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover mb-4"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
