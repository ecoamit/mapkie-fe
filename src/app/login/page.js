"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Hardcoded credentials
    const validEmail = 'founder@mapkie.com';
    const validPassword = 'mapkie123';

    // Simulate API call delay
    setTimeout(() => {
      if (email === validEmail && password === validPassword) {
        // Store login state (you might want to use proper auth context later)
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        router.push('/dashboard'); // or wherever you want to redirect
      } else {
        setError('Invalid email or password');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
    <Navbar />
    <div 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: '#e8f0f3' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.8'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating elements for visual interest */}
      <div 
        className="absolute top-20 left-20 w-32 h-32 rounded-full opacity-20 animate-pulse"
        style={{ backgroundColor: '#d4e4e9' }}
      ></div>
      <div 
        className="absolute bottom-20 right-20 w-24 h-24 rounded-full opacity-20 animate-pulse delay-1000"
        style={{ backgroundColor: '#c0d7dd' }}
      ></div>
      <div 
        className="absolute top-1/2 left-10 w-16 h-16 rounded-full opacity-20 animate-pulse delay-500"
        style={{ backgroundColor: '#acc9d1' }}
      ></div>

      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl border border-white/50 p-8 space-y-6 transform transition-all duration-300 hover:scale-105">
          {/* Header */}
          <div className="text-center">
            <div 
              className="mx-auto h-12 w-12 rounded-full flex items-center justify-center mb-4"
              style={{ backgroundColor: '#acc9d1' }}
            >
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600">
              Sign in to your Mapkie account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm text-center animate-pulse">
                {error}
              </div>
            )}

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 bg-gray-50/80 focus:bg-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ 
                  '--tw-ring-color': '#acc9d1',
                  '--tw-ring-opacity': 0.5 
                }}
                onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px rgba(172, 201, 209, 0.5)'}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 bg-gray-50/80 focus:bg-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ 
                  '--tw-ring-color': '#acc9d1',
                  '--tw-ring-opacity': 0.5 
                }}
                onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px rgba(172, 201, 209, 0.5)'}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 shadow-md ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'hover:shadow-lg transform hover:-translate-y-0.5'
              }`}
              style={{
                backgroundColor: isLoading ? undefined : '#acc9d1',
                background: isLoading ? undefined : 'linear-gradient(135deg, #acc9d1 0%, #8bb4be 100%)'
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.target.style.background = 'linear-gradient(135deg, #8bb4be 0%, #76a5b1 100%)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading) {
                  e.target.style.background = 'linear-gradient(135deg, #acc9d1 0%, #8bb4be 100%)';
                }
              }}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing In...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;