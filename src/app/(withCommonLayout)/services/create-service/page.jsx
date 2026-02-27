"use client";

import { useState } from "react";
import { createService } from '@/services/services.service';

const CreateServicePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    shortDescription: "",
    description: "",
    hourlyRate: "",
    dailyRate: "",
    icon: "",
    category: "",
    features: "",
    available: true,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setMessage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // Convert features from comma-separated string to array
    const featuresArray = formData.features
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    const serviceData = {
      ...formData,
      features: featuresArray,
      hourlyRate: formData.hourlyRate ? Number(formData.hourlyRate) : undefined,
      dailyRate: formData.dailyRate ? Number(formData.dailyRate) : undefined,
      available: formData.available === true,
    };

    console.log("Submitting service data:", serviceData);

    try {
      const res = await createService(serviceData);

      if (res?.message) {
        setMessage({ type: "success", text: res.message || "Service created successfully!" });
        // Reset form
        setFormData({
          name: "",
          shortDescription: "",
          description: "",
          hourlyRate: "",
          dailyRate: "",
          icon: "",
          category: "",
          features: "",
          available: true,
        });
      } else {
        setMessage({ type: "error", text: "Failed to create service" });
      }
    } catch (err) {
      setMessage({ type: "error", text: err.message || "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center py-12 px-4">
      <div className="bg-slate-800 rounded-2xl shadow-2xl p-8 w-full max-w-2xl border border-slate-700">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Create New Service
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-slate-300 font-medium mb-2">Service Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Baby Care"
              required
              className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
            />
          </div>

          {/* Short Description */}
          <div>
            <label className="block text-slate-300 font-medium mb-2">Short Description</label>
            <input
              type="text"
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
              placeholder="e.g. Loving and professional care for your little ones"
              className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
            />
          </div>

          {/* Full Description */}
          <div>
            <label className="block text-slate-300 font-medium mb-2">Full Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              placeholder="Detailed explanation of the service..."
              required
              className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
            />
          </div>

          {/* Pricing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-slate-300 font-medium mb-2">Hourly Rate (৳)</label>
              <input
                type="number"
                name="hourlyRate"
                value={formData.hourlyRate}
                onChange={handleChange}
                placeholder="e.g. 650"
                min="0"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-medium mb-2">Daily Rate (৳)</label>
              <input
                type="number"
                name="dailyRate"
                value={formData.dailyRate}
                onChange={handleChange}
                placeholder="e.g. 5200"
                min="0"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
              />
            </div>
          </div>

          {/* Icon & Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-slate-300 font-medium mb-2">Icon (emoji or text)</label>
              <input
                type="text"
                name="icon"
                value={formData.icon}
                onChange={handleChange}
                placeholder="e.g. 👶 or 🩺"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-medium mb-2">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="e.g. childcare, eldercare"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
              />
            </div>
          </div>

          {/* Features (comma-separated) */}
          <div>
            <label className="block text-slate-300 font-medium mb-2">
              Features (comma separated)
            </label>
            <textarea
              name="features"
              value={formData.features}
              onChange={handleChange}
              rows={3}
              placeholder="e.g. Age-appropriate activities, Feeding & hygiene support, Safe play environment"
              className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
            />
          </div>

          {/* Availability */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="available"
              checked={formData.available}
              onChange={handleChange}
              className="w-5 h-5 accent-purple-500"
            />
            <label className="text-slate-300 font-medium">Service is currently available</label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`
              w-full py-4 mt-4 rounded-lg font-bold text-lg transition-all
              ${loading 
                ? "bg-purple-700 cursor-not-allowed" 
                : "bg-purple-600 hover:bg-purple-700 active:bg-purple-800"
              }
              text-white shadow-lg hover:shadow-xl
            `}
          >
            {loading ? "Creating Service..." : "Create Service"}
          </button>

          {/* Feedback Message */}
          {message && (
            <div
              className={`mt-4 p-4 rounded-lg text-center ${
                message.type === "success"
                  ? "bg-green-900/40 text-green-300 border border-green-700"
                  : "bg-red-900/40 text-red-300 border border-red-700"
              }`}
            >
              {message.text}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateServicePage;