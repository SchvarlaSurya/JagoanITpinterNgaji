import anime from 'animejs/lib/anime.es.js';
import  { useEffect, useRef, useState } from 'react';

// Import ikon dari react-icons
import { FaGoogle, FaFacebookF, FaEye, FaEyeSlash, FaEnvelope, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const BetaBetLogin = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('signin');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const createFloatingParticles = () => {
    const container = document.querySelector('.particles-container');
    if (!container) return;

    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-blue-400 rounded-full opacity-20';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      anime({
        targets: particle,
        translateX: () => anime.random(-20, 20),
        translateY: () => anime.random(-20, 20),
        duration: () => anime.random(2000, 4000),
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true,
        delay: () => anime.random(0, 1000)
      });

      container.appendChild(particle);
    }
  };

  useEffect(() => {
    // Animasi untuk judul
    anime({
      targets: titleRef.current,
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutElastic(1, .8)',
    });

    // Animasi untuk container utama
    anime({
      targets: containerRef.current,
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 800,
      easing: 'easeOutQuad',
      delay: 300
    });

    // Animasi untuk form elemen
    const formElements = formRef.current.querySelectorAll('.form-element');
    anime({
      targets: formElements,
      opacity: [0, 1],
      translateX: [-30, 0],
      duration: 600,
      easing: 'easeOutQuad',
      delay: anime.stagger(100),
    });

    // Animasi background particles
    createFloatingParticles();
  }, []);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', formData);
    
    // Animasi tombol saat diklik
    anime({
      targets: '.login-btn',
      scale: [1, 0.95, 1],
      duration: 300,
      easing: 'easeInOutQuad'
    });
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    
    // Animasi tombol sosial
    anime({
      targets: `.social-${provider.toLowerCase()}`,
      scale: [1, 0.9, 1],
      duration: 300,
      easing: 'easeInOutQuad'
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    
    // Animasi tab switch
    anime({
      targets: '.tab-indicator',
      translateX: tab === 'signin' ? '0%' : '100%',
      duration: 300,
      easing: 'easeInOutQuad'
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Background Particles */}
      <div className="particles-container fixed inset-0 pointer-events-none z-0"></div>
      
      {/* Logo BetaBet dengan animasi */}
      <div ref={titleRef} className="mb-8 text-center z-10">
        <div className="relative inline-block">
          <div className="absolute -inset-4 bg-blue-700  rounded-full blur-lg opacity-30"></div>
          <h1 className="relative text-5xl font-bold bg-blue-700 from-blue-400 to-purple-500 bg-clip-text text-transparent">
            BetaBet
          </h1>
        </div>
        <p className="text-gray-400 mt-2">Welcome to the future of betting</p>
      </div>

      {/* Tab Switcher */}
      <div className="w-full max-w-md mb-6 bg-gray-800 rounded-full p-1 shadow-lg z-10">
        <div className="relative flex">
          <div className="tab-indicator absolute w-1/2 h-full bg-blue-700 from-blue-600 to-purple-600 rounded-full transition-transform duration-300"></div>
          <button 
            onClick={() => handleTabSwitch('signin')}
            className={`flex-1 py-3 px-4 text-center font-medium rounded-full transition-all duration-300 relative z-10 ${
              activeTab === 'signin' ? 'text-white' : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            Sign In
          </button>
          <button 
            onClick={() => handleTabSwitch('signup')}
            className={`flex-1 py-3 px-4 text-center font-medium rounded-full transition-all duration-300 relative z-10 ${
              activeTab === 'signup' ? 'text-white' : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Form Container */}
      <div
        ref={containerRef}
        className="w-full max-w-md bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 space-y-6 border border-gray-700/50 z-10"
        style={{ opacity: 0 }}
      >
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="form-element">
            <label className="text-sm font-medium text-gray-300 mb-2 flex items-center">
              <MdEmail className="mr-2" />
              Email
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter Your Email"
                className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="form-element">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-gray-300 flex items-center">
                <FaLock className="mr-2" />
                Password
              </label>
              <button 
                type="button"
                className="text-blue-400 text-sm hover:text-blue-300 transition hover:underline"
                onClick={() => console.log('Forgot password clicked')}
              >
                Forget?
              </button>
            </div>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter Your Password"
                className="w-full pl-10 pr-12 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Sign In Button */}
          <div className="form-element">
            <button 
              type="submit" 
              className="login-btn w-full py-3 bg-blue-700 from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="form-element">
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="px-4 text-sm text-gray-400">Or Continue With</span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>
        </div>

        {/* Social Buttons */}
        <div className="form-element grid grid-cols-2 gap-4">
          <button 
            onClick={() => handleSocialLogin('google')}
            className="social-google flex items-center justify-center py-3 bg-gray-900/50 border border-gray-700 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <FaGoogle className="text-red-500 mr-2" size={20} />
            <span className="text-gray-300 font-medium">Google</span>
          </button>
          <button 
            onClick={() => handleSocialLogin('facebook')}
            className="social-facebook flex items-center justify-center py-3 bg-gray-900/50 border border-gray-700 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <FaFacebookF className="text-blue-500 mr-2" size={20} />
            <span className="text-gray-300 font-medium">Facebook</span>
          </button>
        </div>

        {/* Terms and Privacy */}
        <div className="form-element text-center text-sm text-gray-500 mt-6">
          By continuing, you agree to our{' '}
          <button className="text-blue-400 hover:text-blue-300 transition">Terms</button>
          {' '}and{' '}
          <button className="text-blue-400 hover:text-blue-300 transition">Privacy Policy</button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-gray-500 text-sm z-10">
        <p>© 2024 BetaBet. All rights reserved.</p>
        <p className="mt-1">For 18+ only. Please gamble responsibly.</p>
      </div>
    </div>
  );
};

export default BetaBetLogin; 