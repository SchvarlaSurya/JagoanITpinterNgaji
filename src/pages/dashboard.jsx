import React from "react";  
import { 
  LayoutDashboard, BookOpen, FileText, BarChart3, Calendar,
  HelpCircle, Settings, LogOut, Search, Bell
} from "lucide-react";

// Chart.js + react-chartjs-2
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import Chart from 'chart.js/auto';

  export default function App() {

  // Register Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

  // Data untuk bar chart
  const chartData = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Study Hours',
        data: [3, 7, 9, 6, 8, 9.5, 4.5],
        backgroundColor: 'rgba(0, 105, 255, 0.8)',
        borderColor: 'rgba(0, 105, 255, 1)',
        borderWidth: 1,
        borderRadius: 6,
        borderSkipped: false,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => `Hours: ${ctx.raw}`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(0, 0, 0, 0.05)' },
        ticks: { callback: (v) => v + 'h' },
        title: { display: true, text: 'Hours' }
      },
      x: { grid: { display: false } }
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#f8f9fc] flex font-sans">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-xl">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-[#0069ff]">BetaBet</h1>
          </div>

          <nav className="px-4">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Main Menu</p>
            <ul className="space-y-1">
              {[
                { Icon: LayoutDashboard, label: "Dashboard", active: true },
                { Icon: BookOpen, label: "My Courses" },
                { Icon: FileText, label: "Assignment" },
                { Icon: BarChart3, label: "Progress" },
                { Icon: Calendar, label: "Calendar" },
              ].map(({ Icon, label, active }, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition ${
                    active 
                      ? "bg-[#0069ff] text-white shadow-md" 
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-8 mb-3">Other Menu</p>
            <ul className="space-y-1">
              {[
                { Icon: HelpCircle, label: "Help Center" },
                { Icon: Settings, label: "Settings" },
                { Icon: LogOut, label: "Log Out" },
              ].map(({ Icon, label }, i) => (
                <li key={i} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition font-medium">
                  <Icon size={20} />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main */}
        <div className="flex-1 p-8">
          
          {/* Header */}
          <header className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Welcome Back,<br />
                <span className="text-gray-500">Let's learn something New Today!</span>
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-12 pr-6 py-3 w-80 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0069ff]/30"
                />
              </div>
              <button className="p-3 bg-white rounded-xl shadow-sm">
                <Bell size={20} className="text-gray-600" />
              </button>
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            </div>
          </header>

          {/* Top Cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">

            {/* Course Card */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-bold mb-3">Design SNSB Fundamental</h3>
              <div className="flex gap-6 text-sm text-gray-500 mb-4">
                <span>Ver-Games</span>
                <span>E-Capier</span>
                <span>Python</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full mb-3 overflow-hidden">
                <div className="h-full bg-[#0069ff] rounded-full" style={{ width: "60%" }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">60%</span>
                <button className="px-6 py-3 bg-[#0069ff] text-white rounded-xl font-medium hover:bg-[#0055cc] transition">
                  Attribute Request →
                </button>
              </div>
            </div>

            {/* Progress Card */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-bold mb-4">Staticity <span className="text-sm text-gray-400">Month</span></h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex justify-between"><span>Skin</span> <span className="font-bold">85%</span></li>
                <li className="flex justify-between"><span>Mesh</span> <span className="font-bold">92%</span></li>
                <li className="flex justify-between"><span>Avg. Score</span> <span className="font-bold">88.5%</span></li>
              </ul>
            </div>

            {/* Activity Card */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-bold mb-4">Your Activity</h3>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#0069ff]">17 <span className="text-2xl text-gray-700">Days</span></div>
                <div className="flex flex-wrap justify-center gap-1 mt-4">
                  {Array.from({ length: 35 }, (_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${i < 17 ? "bg-orange-400" : "bg-gray-200"}`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-2 gap-6">

            {/* Study Statics - Chart */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold">Study Statics</h3>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-sm bg-[#0069ff] text-white rounded-lg">Weekly</button>
                  <button className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-lg">Monthly</button>
                </div>
              </div>

              <div className="h-64">
                <Bar data={chartData} options={chartOptions} />
              </div>
            </div>

            {/* Top Mentors */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-lg font-bold">Top Mentors</h3>
                <a href="#" className="text-sm text-gray-400 hover:text-[#0069ff]">View All →</a>
              </div>

              <ul className="space-y-4">
                {[
                  { name: "Mechanimal Afts", email: "mmoemdahid@gmail.com", website: "https://www.mechanimalafts.com" },
                  { name: "Aleksion Yugey", email: "palepsbpsy@gmail.com", website: "https://www.plepsbpsy@gmail.com" },
                  { name: "Dzaky Wixu Kerasis", email: "anyalidaiyang@gmail.com", website: "https://www.dzakywixu@gmail.com" },
                  { name: "Dzaky Veral Normal", email: "dzakywixu@gmail.com", website: "https://www.dzakywixu@gmail.com" },
                  { name: "Young Lex", email: "termontonketua@gmail.com", website: "https://www.termontonketua@gmail.com" },
                  { name: "Mechanimal Naruto", email: "narutomaruto@gmail.com", website: "https://narutomaruto@gmail.com" }
                ].map((mentor, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                      <span className="font-bold text-blue-600">{mentor.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{mentor.name}</p>
                      <a 
                        href={mentor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-500 hover:underline"
                      >
                        {mentor.email}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}
