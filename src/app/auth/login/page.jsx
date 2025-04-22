'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';

export default function Login() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', loginData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Welcome User</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3">
              <FiMail className="text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                required
                className="w-full px-2 py-2 outline-none"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3">
              <FiLock className="text-gray-400 mr-2" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={loginData.password}
                onChange={handleChange}
                required
                className="w-full px-2 py-2 outline-none"
                placeholder="••••••••"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer text-gray-500"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <Link href={'/userboard'}><button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-2 rounded-md"
          >
            Login
          </button> </Link>
        </form>

        {/* Register Link */}
        <p className="text-sm text-center mt-6 text-gray-600">
          Dont have an account?{' '}
          <Link href="/auth/register" className="text-blue-500 hover:underline font-medium">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
