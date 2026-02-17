// app/register/page.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Mail, Phone, Lock, Loader2 } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    nid: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
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
    if (!formData.fullName || !formData.nid || !formData.email || !formData.password) {
      setError("Please fill in all required fields");
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    // Here you would call Firebase Auth / createUserWithEmailAndPassword
    // + save additional profile data (name, nid, phone) to Firestore
    try {
      // Simulate registration delay
      await new Promise((resolve) => setTimeout(resolve, 1800));

      setSuccess(true);

      // Redirect after success (e.g. to login or dashboard)
      setTimeout(() => {
        router.push("/login?registered=true");
      }, 2000);
    } catch (err) {
      setError("Registration failed. Please try again or use a different email.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    // Implement Firebase Google Auth + profile creation
    alert("Google sign-up triggered (connect Firebase in production)");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        {/* Header */}
        <div className="text-center">
          <Link href="/" className="inline-block">
            <span className="text-4xl font-bold">
              <span className="text-[#FF7A59]">Care.</span>
              <span className="text-[#333333]">IO</span>
            </span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-[#333333]">
            Create Your Account
          </h2>
          <p className="mt-2 text-gray-600">
            Join thousands of families who trust Care.IO for reliable caregiving
          </p>
        </div>

        {/* Google Signup */}
        <button
          onClick={handleGoogleSignup}
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
          Sign up with Google
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
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:border-[#FF7A59] focus:ring-2 focus:ring-[#FF7A59]/30 outline-none transition"
                placeholder="Md. Rahim Khan"
              />
            </div>
          </div>

          {/* NID / National ID */}
          <div>
            <label htmlFor="nid" className="block text-sm font-medium text-gray-700 mb-1">
              National ID (NID) Number *
            </label>
            <input
              id="nid"
              name="nid"
              type="text"
              required
              value={formData.nid}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#FF7A59] focus:ring-2 focus:ring-[#FF7A59]/30 outline-none transition"
              placeholder="1234567890123"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:border-[#FF7A59] focus:ring-2 focus:ring-[#FF7A59]/30 outline-none transition"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:border-[#FF7A59] focus:ring-2 focus:ring-[#FF7A59]/30 outline-none transition"
                  placeholder="+880 1X XXX XXXX"
                />
              </div>
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password *
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:border-[#FF7A59] focus:ring-2 focus:ring-[#FF7A59]/30 outline-none transition"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password *
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:border-[#FF7A59] focus:ring-2 focus:ring-[#FF7A59]/30 outline-none transition"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`
              w-full flex justify-center items-center gap-2
              py-3.5 px-4 border border-transparent rounded-full
              text-white bg-[#FF7A59] hover:bg-[#e66a4d]
              font-medium text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF7A59]
              transition duration-200 shadow-md hover:shadow-lg
              disabled:opacity-60 disabled:cursor-not-allowed mt-2
            `}
          >
            {loading && <Loader2 className="h-5 w-5 animate-spin" />}
            {loading ? "Creating account..." : "Create Account"}
          </button>

          {/* Feedback Messages */}
          {error && (
            <div className="text-center text-red-600 text-sm bg-red-50 p-3 rounded-lg mt-4">
              {error}
            </div>
          )}
          {success && (
            <div className="text-center text-green-600 text-sm bg-green-50 p-3 rounded-lg mt-4">
              Account created successfully! Redirecting to login...
            </div>
          )}
        </form>

        {/* Login Link */}
        <div className="text-center text-sm text-gray-600 mt-8">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-[#FF7A59] hover:text-[#e66a4d] transition"
          >
            Sign in here
          </Link>
        </div>
      </div>
    </div>
  );
}