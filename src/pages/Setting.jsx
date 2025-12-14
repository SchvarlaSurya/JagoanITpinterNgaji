import { useEffect, useState } from "react";

export default function Setting() {
  const [dark, setDark] = useState(false);
  const [notif, setNotif] = useState(true);
  const [emailNotif, setEmailNotif] = useState(false);
  const [loading, setLoading] = useState(true);

  // SIMULASI LOAD DATA
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SettingSkeleton />;

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 ${
        dark ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-900"
      }`}
    >
      <div className="max-w-4xl mx-auto p-8 space-y-8">

        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-sm opacity-70">
            Manage your account preferences
          </p>
        </div>

        {/* PROFILE */}
        <Section title="Profile Settings">
          <Input label="Full Name" placeholder="Your name" />
          <Input label="Email Address" placeholder="you@email.com" />
        </Section>

        {/* SECURITY */}
        <Section title="Security">
          <Input label="Current Password" type="password" />
          <Input label="New Password" type="password" />
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Update Password
          </button>
        </Section>

        {/* NOTIFICATIONS */}
        <Section title="Notifications">
          <Toggle
            label="Push Notifications"
            active={notif}
            onClick={() => setNotif(!notif)}
          />
          <Toggle
            label="Email Notifications"
            active={emailNotif}
            onClick={() => setEmailNotif(!emailNotif)}
          />
        </Section>

        {/* APPEARANCE */}
        <Section title="Appearance">
          <Toggle
            label="Dark Mode"
            active={dark}
            onClick={() => setDark(!dark)}
          />
        </Section>

      </div>
    </div>
  );
}

/* ================= UI COMPONENTS ================= */

function Section({ title, children }) {
  return (
    <div className="bg-white/90 rounded-2xl shadow-md p-6 space-y-4">
      <h2 className="text-xl font-semibold text-blue-600">{title}</h2>
      {children}
    </div>
  );
}

function Input({ label, type = "text", placeholder }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm opacity-80">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="px-4 py-2 rounded-lg border outline-none focus:ring-2 focus:ring-blue-500 transition bg-transparent"
      />
    </div>
  );
}

function Toggle({ label, active, onClick }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-medium">{label}</span>
      <button
        onClick={onClick}
        className={`w-14 h-7 rounded-full relative transition ${
          active ? "bg-blue-600" : "bg-gray-400"
        }`}
      >
        <span
          className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition ${
            active ? "translate-x-7" : ""
          }`}
        />
      </button>
    </div>
  );
}

/* ================= SKELETON ================= */

function SettingSkeleton() {
  return (
    <div className="min-h-screen w-full bg-slate-100">
      <div className="max-w-4xl mx-auto p-8 space-y-8 animate-pulse">

        {/* HEADER */}
        <div className="space-y-2">
          <div className="h-8 w-40 bg-gray-300 rounded" />
          <div className="h-4 w-64 bg-gray-200 rounded" />
        </div>

        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow p-6 space-y-4"
          >
            <div className="h-5 w-48 bg-blue-200 rounded" />
            <div className="h-10 w-full bg-gray-200 rounded" />
            <div className="h-10 w-full bg-gray-200 rounded" />
          </div>
        ))}

      </div>
    </div>
  );
}
