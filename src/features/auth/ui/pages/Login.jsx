import React from "react";
import { useForm } from "react-hook-form";
import { Network, Cloud, Terminal, LogIn } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  let { register, handleSubmit, onLoginSubmit, errors, navigate } = useAuth();

  return (
    <div className="min-h-screen bg-[#111114] text-white flex flex-col items-center justify-center p-4 font-sans relative overflow-hidden">
      {/* Decorative Background Element (bottom right abstract shape placeholder) */}
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-900/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Login Card */}
      <div className="w-full max-w-105 bg-[#18181B] rounded-[20px] p-8 border border-gray-800/60 shadow-2xl z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-[#7559C1] rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-purple-900/20">
            <Network size={24} className="text-white" />
          </div>
          <h1 className="text-2xl font-semibold mb-2">Team Sync</h1>
          <p className="text-gray-400 text-sm">Sign in to your workspace</p>
        </div>

        {/* OAuth Buttons */}
        <div className="flex gap-4 mb-8">
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 bg-[#202024] border border-gray-700/50 hover:bg-[#2A2A2F] text-xs font-semibold tracking-wide text-gray-200 py-2.5 rounded-lg transition-colors uppercase"
          >
            <Cloud size={16} />
            Google
          </button>
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 bg-[#202024] border border-gray-700/50 hover:bg-[#2A2A2F] text-xs font-semibold tracking-wide text-gray-200 py-2.5 rounded-lg transition-colors uppercase"
          >
            <Terminal size={16} />
            Github
          </button>
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800/80"></div>
          </div>
          <div className="relative flex justify-center text-[11px] font-medium text-gray-500">
            <span className="bg-[#18181B] px-4">or continue with email</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onLoginSubmit)} className="space-y-5">
          {/* Email Address */}
          <div className="space-y-2">
            <label className="block text-[11px] font-bold text-gray-400 tracking-wider uppercase">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@company.com"
              className="w-full bg-[#0E0E11] border border-gray-800 focus:border-[#7559C1] rounded-lg py-3 px-4 text-sm text-gray-200 placeholder-gray-600 focus:outline-none transition-colors"
              {...register("email", { required: true })}
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-[11px] font-bold text-gray-400 tracking-wider uppercase">
                Password
              </label>
              <a
                href="#"
                className="text-xs text-[#8A73D6] hover:text-[#A38AEE] transition-colors"
              >
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-[#0E0E11] border border-gray-800 focus:border-[#7559C1] rounded-lg py-3 px-4 text-sm text-gray-200 placeholder-gray-600 focus:outline-none transition-colors"
              {...register("password", { required: true })}
            />
          </div>

          {/* Stay Signed In */}
          <div className="flex items-center gap-2 pt-1 pb-2">
            <input
              id="staySignedIn"
              type="checkbox"
              className="w-4 h-4 bg-[#0E0E11] border-gray-800 rounded text-[#7559C1] focus:ring-[#7559C1] focus:ring-offset-[#18181B]"
              {...register("staySignedIn")}
            />
            <label
              htmlFor="staySignedIn"
              className="text-xs text-gray-300 cursor-pointer"
            >
              Stay signed in
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#7559C1] hover:bg-[#8365D6] text-white font-medium rounded-lg py-3 text-sm transition-colors flex items-center justify-center gap-2"
          >
            Sign In
            <LogIn size={16} />
          </button>
        </form>

        {/* Footer inside card */}
        <div className="mt-8 text-center text-xs text-gray-400">
          Don't have an account?{" "}
          <a
            onClick={() => navigate("/register")}
            href="#"
            className="text-white font-semibold hover:text-[#7559C1] transition-colors"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Global Footer underneath card */}
      <div className="mt-8 text-center space-y-2 z-10">
        <p className="text-xs text-gray-600">
          © 2024 Synthetix AI. Enterprise Intelligence Platforms.
        </p>
        <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
          <a href="#" className="hover:text-gray-300 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
}
