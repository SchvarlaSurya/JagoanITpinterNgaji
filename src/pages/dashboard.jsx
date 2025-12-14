// src/pages/Dashboard.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { useClerk } from "@clerk/clerk-react";
import {
 SignedIn, UserButton, SignInButton, SignedOut
} from "@clerk/clerk-react";
import {
  Menu,
  X,
  ArrowRight,
  Star,
  Users,
  BookOpen,
  Award,
  Clock,
  Globe,
  TrendingUp,
  CheckCircle,
  Sparkles,
  Headphones,
  Laptop,
  Shield,
} from "lucide-react";
import { motion } from "motion/react";

export default function Dashboard() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { signOut } = useClerk();

  const handleLogout = async () => {
    await signOut(); // Clerk akan handle session & redirect
  };

  return (
    <div className="min-h-screen w-full bg-gray-200 flex">
      {/* 🔥 MODAL KONFIRMASI LOGOUT */}
      {showLogoutModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowLogoutModal(false)}
        >
          <div
            className="relative bg-white w-full max-w-md rounded-xl p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Are you sure?
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Do you really want to log out? You'll need to sign in again to
              continue.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 py-2 px-4 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
              >
                No
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 py-2 px-4 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r p-6 flex flex-col justify-between">
        <div>
          <img
            src="src/assets/BetaBet.svg"
            alt="BetaBet"
            className="h-8 w-auto mb-6"
          />

          <h2 className="text-gray-500 text-sm mb-3">MAIN MENU</h2>
          <nav className="flex flex-col gap-2">
            <button className="flex items-center gap-3 px-4 py-2 rounded-lg bg-blue-600 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14 9q-.425 0-.712-.288T13 8V4q0-.425.288-.712T14 3h6q.425 0 .713.288T21 4v4q0 .425-.288.713T20 9zM4 13q-.425 0-.712-.288T3 12V4q0-.425.288-.712T4 3h6q.425 0 .713.288T11 4v8q0 .425-.288.713T10 13zm10 8q-.425 0-.712-.288T13 20v-8q0-.425.288-.712T14 11h6q.425 0 .713.288T21 12v8q0 .425-.288.713T20 21zM4 21q-.425 0-.712-.288T3 20v-4q0-.425.288-.712T4 15h6q.425 0 .713.288T11 16v4q0 .425-.288.713T10 21z"
                />
              </svg>
              Dashboard
            </button>
            <button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path
                    fill="currentColor"
                    fill-opacity="0"
                    stroke-dasharray="64"
                    stroke-dashoffset="64"
                    d="M13.5 3l5.5 5.5v11.5c0 0.55 -0.45 1 -1 1h-12c-0.55 0 -1 -0.45 -1 -1v-16c0 -0.55 0.45 -1 1 -1Z"
                  >
                    <animate
                      fill="freeze"
                      attributeName="fill-opacity"
                      begin="0.8s"
                      dur="0.15s"
                      values="0;0.3"
                    />
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.6s"
                      values="64;0"
                    />
                  </path>
                  <path d="M14.5 3.5l2.25 2.25l2.25 2.25z" opacity="0">
                    <animate
                      fill="freeze"
                      attributeName="d"
                      begin="0.6s"
                      dur="0.2s"
                      values="M14.5 3.5l2.25 2.25l2.25 2.25z;M14.5 3.5l0 4.5l4.5 0z"
                    />
                    <set
                      fill="freeze"
                      attributeName="opacity"
                      begin="0.6s"
                      to="1"
                    />
                  </path>
                </g>
              </svg>
              <Link to="/mycourses">My Courses</Link>
            </button>
            <button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T4 3h4.2q.325-.9 1.088-1.45T12 1t1.713.55T14.8 3H19q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm2-4h7v-2H7zm0-4h10v-2H7zm0-4h10V7H7zm5-4.75q.325 0 .538-.213t.212-.537t-.213-.537T12 2.75t-.537.213t-.213.537t.213.538t.537.212"
                />
              </svg>
              Assignment
            </button>
            <button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <rect width="14" height="0" x="5" y="5" fill="currentColor">
                  <animate
                    fill="freeze"
                    attributeName="height"
                    begin="0.6s"
                    dur="0.2s"
                    values="0;3"
                  />
                </rect>
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path
                    stroke-dasharray="64"
                    stroke-dashoffset="64"
                    d="M12 4h7c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1Z"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.6s"
                      values="64;0"
                    />
                  </path>
                  <path
                    stroke-dasharray="4"
                    stroke-dashoffset="4"
                    d="M7 4v-2M17 4v-2"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.6s"
                      dur="0.2s"
                      values="4;0"
                    />
                  </path>
                  <path
                    stroke-dasharray="12"
                    stroke-dashoffset="12"
                    d="M7 11h10"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.8s"
                      dur="0.2s"
                      values="12;0"
                    />
                  </path>
                  <path stroke-dasharray="8" stroke-dashoffset="8" d="M7 15h7">
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="1s"
                      dur="0.2s"
                      values="8;0"
                    />
                  </path>
                </g>
              </svg>
              Calendar
            </button>
          </nav>

          <h2 className="text-gray-500 text-sm mt-10 mb-3">OTHER MENU</h2>
          <nav className="flex flex-col gap-2">
            <button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11.95 18q.525 0 .888-.363t.362-.887t-.362-.888t-.888-.362t-.887.363t-.363.887t.363.888t.887.362m-.9-3.85h1.85q0-.825.188-1.3t1.062-1.3q.65-.65 1.025-1.238T15.55 8.9q0-1.4-1.025-2.15T12.1 6q-1.425 0-2.312.75T8.55 8.55l1.65.65q.125-.45.563-.975T12.1 7.7q.8 0 1.2.438t.4.962q0 .5-.3.938t-.75.812q-1.1.975-1.35 1.475t-.25 1.825M12 22q-2.075 0-3.9-.787t-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                />
              </svg>
              Help Center
            </button>
            <button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M14.208 4.83q.68.21 1.3.54l1.833-1.1a1 1 0 0 1 1.221.15l1.018 1.018a1 1 0 0 1 .15 1.221l-1.1 1.833q.33.62.54 1.3l2.073.519a1 1 0 0 1 .757.97v1.438a1 1 0 0 1-.757.97l-2.073.519q-.21.68-.54 1.3l1.1 1.833a1 1 0 0 1-.15 1.221l-1.018 1.018a1 1 0 0 1-1.221.15l-1.833-1.1q-.62.33-1.3.54l-.519 2.073a1 1 0 0 1-.97.757h-1.438a1 1 0 0 1-.97-.757l-.519-2.073a7.5 7.5 0 0 1-1.3-.54l-1.833 1.1a1 1 0 0 1-1.221-.15L4.42 18.562a1 1 0 0 1-.15-1.221l1.1-1.833a7.5 7.5 0 0 1-.54-1.3l-2.073-.519A1 1 0 0 1 2 12.72v-1.438a1 1 0 0 1 .757-.97l2.073-.519q.21-.68.54-1.3L4.27 6.66a1 1 0 0 1 .15-1.221L5.438 4.42a1 1 0 0 1 1.221-.15l1.833 1.1q.62-.33 1.3-.54l.519-2.073A1 1 0 0 1 11.28 2h1.438a1 1 0 0 1 .97.757zM12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
                />
              </svg>
              Settings
            </button>
            {/* ✅ TOMBOL LOG OUT YANG BENER */}
            <button
              onClick={() => setShowLogoutModal(true)}
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 12h-9.5m7.5 3l3-3l-3-3m-5-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-1"
                />
              </svg>
              Log Out
            </button>
          </nav>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6">
        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-xl font-semibold text-black">Welcome Back</h1>
            <p className="text-gray-500 text-sm">
              Lets Learn Something New Today!
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative text-black">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border rounded-full w-64 text-black"
              />
                 <UserButton />
            </div>
            <span className="text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-black"
              >
                <path
                  fill="currentColor"
                  d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6zm-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2"
                />
              </svg>
            </span>
            <span className="text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-black"
              >
                <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                  <path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
                  <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.99 8.99 0 0 1 12.065 14a8.98 8.98 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.96 8.96 0 0 1-5.672-2.012A6.99 6.99 0 0 1 12.065 16a6.99 6.99 0 0 1 5.689 2.92A8.96 8.96 0 0 1 12 21" />
                </g>
              </svg>
            </span>
          </div>
        </div>

        {/* PROFILE CARD + CALENDAR */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="col-span-2 bg-white rounded-lg p-6 shadow-md flex items-center gap-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/71/Christus.jpg"
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="flex flex-col gap-1 text-sm text-black">
              <h2 className="text-lg font-semibold">MOEHAMMAD SCHAVARLA</h2>
              <p>Langgangan Kursus Mulai Dari : 40 Agustus 25</p>
              <p>Asal : Malang, Jl Soekarno Hatta</p>
              <p>Nomer Hape : 08217133977</p>
              <p>Email : Carakaprawira23@Gmail.Com</p>
              <p>Sosmed : @SSU.Com</p>
              <div className="flex gap-5 mt-2">
                {[...Array(4)].map((_, i) => (
                  <button key={i} className="rounded-full bg-[#096EF4] p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md text-black">
            <h2 className="font-semibold mb-3">Calender</h2>
            <div className="bg-blue-100 rounded-lg p-4 flex flex-col items-center">
              <p className="font-semibold">JANUARY</p>
              <p className="text-sm leading-6 text-center">
                1 2 3 4 5 6 7 8<br />
                9 10 11 12 13 14 15
                <br />
                16 17 18 19 20 21 22
                <br />
                23 24 25 26 27 28 29 30
              </p>
              <img
                src="https://i.imgur.com/4AiXzf8.jpeg"
                className="w-28 mt-3 rounded-lg"
              />
              <div className="mt-2 text-2xl font-bold">20:00</div>
            </div>
          </div>
        </div>

        {/* PROGRESS SECTION */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="font-semibold mb-4 text-black">PROGRES</h2>
          <div className="flex flex-col gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex flex-col items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                  {i !== 3 && <span className="h-12 w-1 bg-blue-400"></span>}
                </div>
                <div className="flex-1 bg-blue-500 text-white p-4 rounded-lg font-semibold transform transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_0_0_#1e40af] active:translate-y-0 active:shadow-[0_0px_0_0_#1e40af]">
                  <h3 className="font-semibold">UI/UX DESIGN</h3>
                  <p>Tahap {i}: Bilalialalaialalala</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
