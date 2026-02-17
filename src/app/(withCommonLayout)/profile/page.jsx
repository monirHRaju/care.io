// app/profile/page.jsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { User, Mail, Phone, ShieldCheck, Calendar, LogOut, Edit2, Save, X } from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();

  // Simulated user data (replace with Firebase auth + Firestore fetch)
  const [user, setUser] = useState({
    fullName: "Rahim Khan",
    email: "rahim.khan@example.com",
    phone: "+8801712345678",
    nid: "1234567890123",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    joined: "January 2025",
    totalBookings: 7,
    activeBookings: 2,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    // In real app: check if user is logged in → redirect if not
    // Example: onAuthStateChanged(auth, (u) => { if (!u) router.push("/login"); });
  }, [router]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setLoading(true);
    setMessage(null);

    // Simulate save to Firebase
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setUser({ ...formData });
      setIsEditing(false);
      setMessage({ type: "success", text: "Profile updated successfully!" });
    } catch (err) {
      setMessage({ type: "error", text: "Failed to update profile. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    // In real app: signOut(auth).then(() => router.push("/"));
    alert("Logout triggered (connect Firebase Auth in production)");
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header / Banner */}
      <div className="bg-gradient-to-r from-[#FF7A59] to-[#e66a4d] py-12 md:py-16 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">My Profile</h1>
          <p className="text-white/90 text-lg">
            Manage your account and view your caregiving activity
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 -mt-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-8 text-center">
                <div className="relative inline-block mb-6">
                  <img
                    src={user.avatar}
                    alt={user.fullName}
                    className="w-32 h-32 rounded-full object-cover border-4 border-[#FF7A59]/20 mx-auto"
                  />
                  {isEditing && (
                    <button className="absolute bottom-2 right-2 bg-[#FF7A59] text-white p-2 rounded-full shadow">
                      <Edit2 size={16} />
                    </button>
                  )}
                </div>

                <h2 className="text-2xl font-bold text-[#333333] mb-1">
                  {user.fullName}
                </h2>
                <p className="text-gray-600 mb-4">Member since {user.joined}</p>

                <div className="flex justify-center gap-8 mb-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#34C759]">{user.totalBookings}</p>
                    <p className="text-sm text-gray-600">Bookings</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#FF7A59]">{user.activeBookings}</p>
                    <p className="text-sm text-gray-600">Active</p>
                  </div>
                </div>

                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="w-full py-3 bg-[#FF7A59] hover:bg-[#e66a4d] text-white font-medium rounded-full transition flex items-center justify-center gap-2"
                  >
                    <Edit2 size={18} /> Edit Profile
                  </button>
                ) : (
                  <div className="flex gap-3">
                    <button
                      onClick={handleSave}
                      disabled={loading}
                      className="flex-1 py-3 bg-[#34C759] hover:bg-[#2da84f] text-white font-medium rounded-full transition flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {loading ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setIsEditing(false);
                        setFormData({ ...user });
                      }}
                      className="flex-1 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-full transition flex items-center justify-center gap-2"
                    >
                      <X size={18} /> Cancel
                    </button>
                  </div>
                )}

                <button
                  onClick={handleLogout}
                  className="w-full mt-4 py-3 border border-red-300 text-red-600 hover:bg-red-50 font-medium rounded-full transition flex items-center justify-center gap-2"
                >
                  <LogOut size={18} /> Log Out
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Details & Bookings */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Information */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-[#333333]">Personal Information</h3>
                {!isEditing && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="text-[#FF7A59] hover:text-[#e66a4d] flex items-center gap-1 text-sm font-medium"
                  >
                    <Edit2 size={16} /> Edit
                  </button>
                )}
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <User className="w-6 h-6 text-[#FF7A59] mt-1" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Full Name</p>
                    {isEditing ? (
                      <input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#FF7A59] focus:ring-1 focus:ring-[#FF7A59]/30"
                      />
                    ) : (
                      <p className="font-medium text-[#333333]">{user.fullName}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-[#34C759] mt-1" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">National ID (NID)</p>
                    {isEditing ? (
                      <input
                        name="nid"
                        value={formData.nid}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#FF7A59] focus:ring-1 focus:ring-[#FF7A59]/30"
                      />
                    ) : (
                      <p className="font-medium text-[#333333]">{user.nid}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#4A90E2] mt-1" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-[#333333]">{user.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#FF7A59] mt-1" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Phone Number</p>
                    {isEditing ? (
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#FF7A59] focus:ring-1 focus:ring-[#FF7A59]/30"
                      />
                    ) : (
                      <p className="font-medium text-[#333333]">{user.phone}</p>
                    )}
                  </div>
                </div>
              </div>

              {message && (
                <div
                  className={`mt-6 p-4 rounded-lg text-center ${
                    message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {message.text}
                </div>
              )}
            </div>

            {/* Recent Bookings */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-[#333333] mb-6 flex items-center gap-3">
                <Calendar className="text-[#FF7A59]" /> Recent Bookings
              </h3>

              <div className="space-y-6">
                {/* Placeholder bookings */}
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-gray-50 rounded-xl"
                  >
                    <div>
                      <h4 className="font-medium text-[#333333]">Elderly Care • 3 days</h4>
                      <p className="text-sm text-gray-600 mt-1">Status: Confirmed • Feb 10–12, 2026</p>
                    </div>
                    <Link
                      href="/my-bookings"
                      className="text-[#FF7A59] hover:text-[#e66a4d] font-medium flex items-center gap-1"
                    >
                      View Details →
                    </Link>
                  </div>
                ))}

                <Link
                  href="/my-bookings"
                  className="block text-center text-[#4A90E2] hover:text-[#3a7bc8] font-medium mt-4"
                >
                  View All Bookings →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}