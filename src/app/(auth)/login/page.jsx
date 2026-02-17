// app/login/page.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, Loader2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Basic client-side validation
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    // Here you would call Firebase Auth / your backend
    // For demo: simulate login success after 1.5s
    try {
      // Example: await signInWithEmailAndPassword(auth, email, password);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSuccess(true);
      // Redirect after success (e.g. to homepage or /my-bookings)
      setTimeout(() => {
        router.push("/my-bookings");
      }, 1500);
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // Implement Firebase Google Auth here
    // Example: signInWithPopup(auth, googleProvider);
    alert("Google login triggered (connect Firebase in production)");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        {/* Header */}
        <div className="text-center">
          <Link href="/" className="inline-block">
            <span className="text-4xl font-bold">
              <span className="text-[#FF7A59]">Care.</span>
              <span className="text-[#333333]">IO</span>
            </span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-[#333333]">
            Welcome Back
          </h2>
          <p className="mt-2 text-gray-600">
            Log in to manage your bookings and find trusted caregivers
          </p>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="
            w-full flex items-center justify-center gap-3 
            bg-white border border-gray-300 
            text-gray-700 font-medium py-3 rounded-full 
            hover:bg-gray-50 transition duration-200
            shadow-sm hover:shadow
          "
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">or</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="
                  appearance-none block w-full pl-10 pr-3 py-3 
                  border border-gray-300 rounded-lg 
                  placeholder-gray-400 focus:outline-none 
                  focus:ring-2 focus:ring-[#FF7A59]/50 focus:border-[#FF7A59]
                  transition duration-200
                "
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="
                  appearance-none block w-full pl-10 pr-3 py-3 
                  border border-gray-300 rounded-lg 
                  placeholder-gray-400 focus:outline-none 
                  focus:ring-2 focus:ring-[#FF7A59]/50 focus:border-[#FF7A59]
                  transition duration-200
                "
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link
                href="/forgot-password"
                className="font-medium text-[#4A90E2] hover:text-[#3a7bc8] transition"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`
              w-full flex justify-center items-center gap-2
              py-3 px-4 border border-transparent rounded-full
              text-white bg-[#FF7A59] hover:bg-[#e66a4d]
              font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF7A59]
              transition duration-200 shadow-md hover:shadow-lg
              disabled:opacity-60 disabled:cursor-not-allowed
            `}
          >
            {loading && <Loader2 className="h-5 w-5 animate-spin" />}
            {loading ? "Signing in..." : "Sign In"}
          </button>

          {/* Error / Success Messages */}
          {error && (
            <div className="text-center text-red-600 text-sm bg-red-50 p-3 rounded-lg">
              {error}
            </div>
          )}
          {success && (
            <div className="text-center text-green-600 text-sm bg-green-50 p-3 rounded-lg">
              Login successful! Redirecting...
            </div>
          )}
        </form>

        {/* Register Link */}
        <div className="text-center text-sm text-gray-600 mt-8">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-[#FF7A59] hover:text-[#e66a4d] transition"
          >
            Create one now
          </Link>
        </div>
      </div>
    </div>
  );
}