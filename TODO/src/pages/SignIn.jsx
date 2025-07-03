import React, { useState, useEffect } from 'react';

const SignIn = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign In data:', formData);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${darkMode ? 'bg-[#0D1117] text-white' : 'bg-[#F5F5F5] text-gray-800'}`}>
      <div className="absolute top-6 right-6">
        <button 
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
        >
          {darkMode ? (
            <i className="fas fa-sun text-xl"></i>
          ) : (
            <i className="fas fa-moon text-xl"></i>
          )}
        </button>
      </div>

      <div className="w-full max-w-6xl px-4 py-8 flex flex-col lg:flex-row gap-8 items-center">
        {/* Sign In Form */}
        <div className={`w-full max-w-[600px] rounded-2xl p-8 transition-all duration-300 ${
          darkMode 
            ? 'bg-gray-800/60 backdrop-blur-sm shadow-xl' 
            : 'bg-white/90 backdrop-blur-sm shadow-lg'
        }`}>
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-2">Welcome Back</h1>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Log in to your account to access your dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className={`w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-[#FF4500] transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-700/50 placeholder-gray-400 text-white' 
                    : 'bg-gray-100 placeholder-gray-500 text-gray-900'
                }`}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className={`w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-[#FF4500] transition-all duration-300 ${
                    darkMode 
                      ? 'bg-gray-700/50 placeholder-gray-400 text-white' 
                      : 'bg-gray-100 placeholder-gray-500 text-gray-900'
                  }`}
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                >
                  <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}></i>
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-[#FF4500] text-white font-semibold rounded-lg hover:bg-[#E03E00] transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Orange Motivational Card */}
        <div className="hidden lg:block w-full max-w-[400px]">
          <div className="bg-[#FF4500] rounded-2xl p-8 h-full flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-white mb-4">Welcome to Your Workspace</h2>
            <p className="text-xl text-white/90 mb-6">Stay on top of your responsibilities and unlock your full potential. One sign-in away from productivity.</p>
            <div className="mt-auto space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <i className="fas fa-lock text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-white font-medium">Secure Access</h3>
                  <p className="text-white/80 text-sm">Your data is safe with us</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <i className="fas fa-bolt text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-white font-medium">Fast Onboarding</h3>
                  <p className="text-white/80 text-sm">Start managing in seconds</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <i className="fas fa-sync-alt text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-white font-medium">Seamless Sync</h3>
                  <p className="text-white/80 text-sm">Stay updated across devices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;