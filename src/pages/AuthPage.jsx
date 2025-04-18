import React, { useState } from 'react';
import loginbackground from "../assets/login-bg-image.png";
import signupbackground from "../assets/signup-bg-image.png";
import logo from "../assets/logo.png";

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleAuthMode = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div
      className="w-screen min-h-screen flex flex-col bg-cover bg-center relative"
      style={{ backgroundImage: `url(${isSignup ? signupbackground : loginbackground})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#CCAB4A] opacity-30 z-0" />

      <div className="flex-grow flex items-center justify-center px-4 relative z-10">
        <div className={`bg-[#F7F4EF] ${isSignup ? 'py-6 px-6' : 'p-8 sm:p-10'} rounded-2xl shadow-lg w-full max-w-sm`}>
          {/* Logo */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <img
              src={logo}
              alt="tendr logo"
              className="w-48 sm:w-48 md:w-[300px] lg:w-[326px] h-auto"
            />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-center mb-4 sm:mb-6 text-gray-800">
            {isSignup ? 'Welcome to tendr!' : 'Sign in to tendr!'}
          </h2>

          {/* Forms */}
          {isSignup ? (
            <form className="space-y-3">
              {['Full Name', 'Email', 'Password', 'Phone Number'].map((label, idx) => (
                <div key={idx}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                  <input
                    type={label === 'Password' ? 'password' : label === 'Email' ? 'email' : label === 'Phone Number' ? 'tel' : 'text'}
                    className="w-full px-3 py-1.5 text-sm border border-yellow-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <select
                  className="w-full px-3 py-1.5 text-sm border border-yellow-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="">Select a location</option>
                  <option value="delhi">Delhi</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="bangalore">Bangalore</option>
                </select>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="text-white text-sm font-semibold rounded-xl w-28 h-9"
                  style={{ backgroundColor: "#CCAB4A" }}
                >
                  Sign Up
                </button>
              </div>
            </form>
          ) : (
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-yellow-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-yellow-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="text-right text-sm font-bold text-gray-600 hover:underline cursor-pointer">
                Forgot Your Password?
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="text-white font-semibold rounded-xl w-32 h-10"
                  style={{ backgroundColor: "#CCAB4A" }}
                >
                  Sign In
                </button>
              </div>
            </form>
          )}

          {/* Toggle Auth Mode */}
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center text-sm text-gray-700 font-bold gap-1">
            <span>{isSignup ? 'Already have an account?' : 'New to tendr?'}</span>
            <span
              className="font-semibold cursor-pointer hover:underline"
              style={{ color: "#CCAB4A" }}
              onClick={toggleAuthMode}
            >
              {isSignup ? 'Sign In' : 'Create an account'}
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-black text-sm py-3 px-4 text-center bg-opacity-60 mt-8">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          <span>tendr ©</span>
          <span>|</span>
          <a href="#" className="hover:underline cursor-pointer">Support</a>
          <span>|</span>
          <a href="#" className="hover:underline cursor-pointer">Help Center</a>
          <span>|</span>
          <a href="#" className="hover:underline cursor-pointer">Vendor Support</a>
          <span>|</span>
          <a href="#" className="hover:underline cursor-pointer">Get in touch</a>
        </div>
      </footer>
    </div>
  );
};

export default AuthPage;
