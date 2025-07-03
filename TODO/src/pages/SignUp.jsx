 

import React, { useState, useEffect } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    agreeTerms: false
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
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
        {/* Form Container */}
        <div className={`w-full max-w-[600px] rounded-2xl p-8 transition-all duration-300 ${
          darkMode 
            ? 'bg-gray-800/60 backdrop-blur-sm shadow-xl' 
            : 'bg-white/90 backdrop-blur-sm shadow-lg'
        }`}>
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-2">Create Your Account</h1>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Join us and manage your tasks smartly
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-[#FF4500] transition-all duration-300 ${
                    darkMode 
                      ? 'bg-gray-700/50 placeholder-gray-400 text-white' 
                      : 'bg-gray-100 placeholder-gray-500 text-gray-900'
                  }`}
                  required
                />
              </div>

              {/* <div className="space-y-2">
                <label className="block text-sm font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className={`w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-[#FF4500] transition-all duration-300 ${
                    darkMode 
                      ? 'bg-gray-700/50 placeholder-gray-400 text-white' 
                      : 'bg-gray-100 placeholder-gray-500 text-gray-900'
                  }`}
                  required
                />
              </div> */}

              <div className="space-y-2 md:col-span-2">
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
                    placeholder="Create a password"
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

              <div className="space-y-2">
                <label className="block text-sm font-medium">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    className={`w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-[#FF4500] transition-all duration-300 ${
                      darkMode 
                        ? 'bg-gray-700/50 placeholder-gray-400 text-white' 
                        : 'bg-gray-100 placeholder-gray-500 text-gray-900'
                    }`}
                    required
                  />
                  <button 
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  >
                    <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'} ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}></i>
                  </button>
                </div>
              </div>

              
            </div>

            <div className="mb-6">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  className="h-5 w-5 rounded border-none focus:ring-2 focus:ring-[#FF4500] text-[#FF4500]"
                  required
                />
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  I agree to the <a href="#" className="text-[#FF4500] hover:underline">Terms and Conditions</a>
                </span>
              </label>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-[#FF4500] text-white font-semibold rounded-lg hover:bg-[#E03E00] transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                Sign Up
              </button>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                Already have an account? <a href="#" className="text-[#FF4500] hover:underline">Sign in</a>
              </p>
            </div>
          </form>
        </div>

        {/* Motivational Card */}
        <div className="hidden lg:block w-full max-w-[400px]">
          <div className="bg-[#FF4500] rounded-2xl p-8 h-full flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-white mb-4">Plan today, succeed tomorrow</h2>
            <p className="text-xl text-white/90 mb-6">Join our platform and take control of your tasks with our powerful management tools.</p>
            <div className="mt-auto space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <i className="fas fa-tasks text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-white font-medium">Task Management</h3>
                  <p className="text-white/80 text-sm">Organize and prioritize your work</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <i className="fas fa-chart-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-white font-medium">Performance Tracking</h3>
                  <p className="text-white/80 text-sm">Monitor progress and achievements</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <i className="fas fa-users text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-white font-medium">Team Collaboration</h3>
                  <p className="text-white/80 text-sm">Work together seamlessly</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;
