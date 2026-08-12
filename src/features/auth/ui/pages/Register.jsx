import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { User, Mail, Lock, Sparkles, Command } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

export default function Register() {
  let { register, handleSubmit, onRegisterSubmit, errors, navigate } =
    useAuth();

  const [passwordStrength, setPasswordStrength] = useState(1);

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#0E0E11] text-white flex flex-col font-sans">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left Side - Graphic & Copy */}
        {/* Note: Replace the background image URL with your actual asset "image_f700f8.jpg" */}
        <div className="hidden lg:flex w-[45%] h-full relative flex-col justify-between p-10 bg-[#12121A] bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center border-r border-gray-800">
          <div className="absolute inset-0 bg-linear-to-b from-[#0E0E11]/80 via-transparent to-[#0E0E11]/90 z-0"></div>

          <div className="relative z-10">
            <h2 className="text-xl font-bold tracking-wide">Synthetix AI</h2>
          </div>

          <div className="relative z-10 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-700 bg-gray-800/40 backdrop-blur-sm text-xs font-semibold text-gray-300 mb-4 uppercase tracking-wider">
              <Sparkles size={14} className="text-purple-400" />
              Next-Gen Intelligence
            </div>

            <h1 className="text-4xl xl:text-5xl font-bold leading-tight mb-4">
              Accelerate your team's
              <br />
              intelligence.
            </h1>

            <p className="text-gray-400 text-base xl:text-lg max-w-md leading-relaxed mb-10">
              Connect your enterprise data to our specialized AI models and
              unlock unparalleled strategic insights in seconds.
            </p>

            <div className="flex gap-12">
              <div>
                <p className="text-2xl xl:text-3xl font-bold text-gray-200 mb-1">
                  99.9%
                </p>
                <p className="text-xs xl:text-sm text-gray-500">Uptime SLA</p>
              </div>
              <div>
                <p className="text-2xl xl:text-3xl font-bold text-gray-200 mb-1">
                  ISO
                </p>
                <p className="text-xs xl:text-sm text-gray-500">
                  27001 Certified
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-[55%] h-full flex flex-col justify-center items-center p-6 lg:p-12 relative overflow-hidden">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="mb-6 xl:mb-8">
              <h2 className="text-2xl xl:text-3xl font-bold mb-2">
                Create your account
              </h2>
              <p className="text-gray-400 text-xs xl:text-sm">
                Experience the future of collaborative data intelligence.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit(onRegisterSubmit)}
              className="space-y-3 xl:space-y-4"
            >
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-[11px] xl:text-xs font-semibold text-gray-300 ml-1">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    <User size={16} />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full bg-[#16161D] border border-gray-700 focus:border-purple-500 rounded-lg py-2.5 pl-9 pr-4 text-sm text-gray-200 placeholder-gray-600 focus:outline-none transition-colors"
                    {...register("fullName", { required: true })}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-[11px] xl:text-xs font-semibold text-gray-300 ml-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    <Mail size={16} />
                  </div>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="w-full bg-[#16161D] border border-gray-700 focus:border-purple-500 rounded-lg py-2.5 pl-9 pr-4 text-sm text-gray-200 placeholder-gray-600 focus:outline-none transition-colors"
                    {...register("email", { required: true })}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1">
                <label className="text-[11px] xl:text-xs font-semibold text-gray-300 ml-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    <Lock size={16} />
                  </div>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-[#16161D] border border-gray-700 focus:border-purple-500 rounded-lg py-2.5 pl-9 pr-4 text-sm text-gray-200 placeholder-gray-600 focus:outline-none transition-colors"
                    {...register("password", { required: true })}
                  />
                </div>

                {/* Password Strength Indicator */}
                <div className="pt-1.5">
                  <div className="flex gap-1.5 mb-1">
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`h-1 flex-1 rounded-full ${
                          level <= passwordStrength
                            ? "bg-[#9C82F6]"
                            : "bg-gray-800"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-[10px] xl:text-xs text-[#9C82F6] font-medium ml-1">
                    Strong password
                  </p>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-2.5 py-1.5">
                <div className="flex items-center h-4 xl:h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    className="w-3.5 h-3.5 xl:w-4 xl:h-4 bg-[#16161D] border-gray-700 rounded text-purple-500 focus:ring-purple-500 focus:ring-offset-gray-900"
                    {...register("terms", { required: true })}
                  />
                </div>
                <label
                  htmlFor="terms"
                  className="text-[11px] xl:text-xs text-gray-400"
                >
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-linear-to-r from-[#9C82F6] to-[#B39DFF] hover:from-[#8A6EE3] hover:to-[#A38AEE] text-gray-900 font-semibold rounded-lg py-2.5 xl:py-3 text-sm transition-all shadow-[0_0_15px_rgba(156,130,246,0.3)] mt-2"
              >
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-800"></div>
              </div>
              <div className="relative flex justify-center text-[9px] xl:text-[10px] font-bold tracking-widest uppercase">
                <span className="bg-[#0E0E11] px-4 text-gray-600">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-3 xl:gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-2 bg-[#121216] border border-gray-800 hover:bg-gray-800 rounded-lg py-2 xl:py-2.5 text-xs xl:text-sm font-medium transition-colors"
              >
                <svg className="w-3.5 h-3.5 xl:w-4 xl:h-4" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M5.266 9.765A7.077 7.077 0 0112 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115z"
                  />
                  <path
                    fill="#34A853"
                    d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 01-6.723-4.849L1.248 17.34C3.2 21.3 7.27 24 12 24c2.923 0 5.377-1.054 7.14-2.86l-3.1-2.427z"
                  />
                  <path
                    fill="#4A90E2"
                    d="M19.834 20.366C22.027 18.232 23.411 15.285 23.411 12c0-.814-.076-1.595-.224-2.345H12v4.614h6.425c-.29 1.488-1.127 2.766-2.385 3.67l3.794 2.427z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.277 14.242A7.125 7.125 0 014.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 000 12c0 1.92.445 3.73 1.237 5.335l4.04-3.093z"
                  />
                </svg>
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 bg-[#121216] border border-gray-800 hover:bg-gray-800 rounded-lg py-2 xl:py-2.5 text-xs xl:text-sm font-medium transition-colors"
              >
                <Command size={14} className="text-gray-400" />
                SSO
              </button>
            </div>

            {/* Log In Link */}
            <p
              onClick={() => navigate("/")}
              className="text-center mt-6 xl:mt-8 text-xs xl:text-sm text-gray-400"
            >
              Already have an account?{" "}
              <a
                href="#"
                className="text-white font-semibold hover:text-purple-400 transition-colors"
              >
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full shrink-0 border-t border-gray-800/60 bg-[#0E0E11] px-6 py-4 flex flex-col md:flex-row items-center justify-between text-[10px] xl:text-xs text-gray-500 relative z-20">
        <div className="font-bold text-gray-300 mb-2 md:mb-0">Synthetix AI</div>

        <div className="flex gap-4 xl:gap-6 mb-2 md:mb-0">
          <a href="#" className="hover:text-gray-300 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Security
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            System Status
          </a>
        </div>

        <div>© 2024 Synthetix AI. Enterprise Intelligence Platforms.</div>
      </footer>
    </div>
  );
}
