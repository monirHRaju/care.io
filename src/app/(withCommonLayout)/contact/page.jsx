// app/contact/page.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // null | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send to Firebase / backend / email service
    // For demo: simulate success after 1s
    setStatus("loading");

    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FF7A59] to-[#e66a4d] py-20 md:py-28 text-white text-center">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            We're Here to Help
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto opacity-95">
            Have questions about finding the right caregiver? Our team is ready to assist you and your family.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100">
            <h2 className="text-3xl font-bold text-[#333333] mb-8">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF7A59] focus:ring-2 focus:ring-[#FF7A59]/30 outline-none transition"
                  placeholder="Your name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF7A59] focus:ring-2 focus:ring-[#FF7A59]/30 outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF7A59] focus:ring-2 focus:ring-[#FF7A59]/30 outline-none transition"
                    placeholder="+880 1X XXX XXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF7A59] focus:ring-2 focus:ring-[#FF7A59]/30 outline-none transition resize-none"
                  placeholder="How can we help you and your family today?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className={`
                  w-full flex items-center justify-center gap-3
                  bg-[#FF7A59] hover:bg-[#e66a4d] 
                  text-white font-semibold text-lg 
                  py-4 rounded-full shadow-lg 
                  transition-all duration-300 transform hover:scale-[1.02] 
                  disabled:opacity-70 disabled:cursor-not-allowed
                `}
              >
                <Send className="w-5 h-5" />
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg text-center">
                  Thank you! Your message has been sent. We'll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-lg text-center">
                  Please fill in all required fields.
                </div>
              )}
            </form>
          </div>

          {/* Right: Contact Info + Map */}
          <div className="space-y-10 lg:space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-[#333333] mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#4A90E2]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-[#4A90E2]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#333333] mb-1">Email Us</h3>
                    <p className="text-gray-600 text-lg">
                      <a href="mailto:support@care.io" className="hover:text-[#FF7A59] transition">
                        support@care.io
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#34C759]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-[#34C759]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#333333] mb-1">Call Us</h3>
                    <p className="text-gray-600 text-lg">
                      <a href="tel:+8801712345678" className="hover:text-[#FF7A59] transition">
                        +880 1712-345678
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Mon–Sun: 8:00 AM – 10:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#FF7A59]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-[#FF7A59]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#333333] mb-1">Visit Us</h3>
                    <p className="text-gray-600 text-lg">
                      House 12, Road 5, Dhanmondi,<br />
                      Dhaka 1205, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder (replace with real Google Maps embed) */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-80 lg:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902295!2d90.381!3d23.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0x5c4d8d!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1690000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Care.IO Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}