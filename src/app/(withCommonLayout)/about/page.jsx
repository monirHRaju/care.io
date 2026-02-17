// app/about/page.jsx   (or components/AboutPage.jsx if you prefer to import it)

import Link from "next/link";
import { Heart, ShieldCheck, Star, PhoneCall } from "lucide-react"; // npm install lucide-react if not already

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#FF7A59] to-[#e66a4d] py-24 md:py-32 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern-family.svg')] bg-repeat"></div> {/* optional subtle pattern */}
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-lg">
            Caring for Families,<br className="hidden sm:block" /> One Connection at a Time
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto opacity-95">
            Care.IO was born from a simple belief: every family deserves access to trusted, compassionate, and reliable caregiving — without stress or worry.
          </p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-6 leading-tight">
                Our Mission
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                We exist to make caregiving simple, safe, and accessible for every family in Bangladesh and beyond. Whether it's finding a loving babysitter, compassionate elderly support, or professional medical assistance — we connect you with caregivers who truly care.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Founded in Dhaka, Care.IO is built by people who understand the importance of family and the challenges of modern life. We verify every caregiver so you can focus on what matters most — your loved ones.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=2340"
                alt="Family with caregiver"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#333333] mb-12 md:mb-16">
            Why Families Trust Care.IO
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#FF7A59]/10 flex items-center justify-center">
                <ShieldCheck className="w-10 h-10 text-[#FF7A59]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#333333] mb-4">
                Verified Caregivers
              </h3>
              <p className="text-gray-700">
                Every caregiver passes background checks, reference verification, and training.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#34C759]/10 flex items-center justify-center">
                <Star className="w-10 h-10 text-[#34C759]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#333333] mb-4">
                Top Rated
              </h3>
              <p className="text-gray-700">
                4.8+ average rating from real families who’ve experienced our care.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#4A90E2]/10 flex items-center justify-center">
                <PhoneCall className="w-10 h-10 text-[#4A90E2]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#333333] mb-4">
                24/7 Support
              </h3>
              <p className="text-gray-700">
                Our team is always here to help — day or night.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#FF7A59]/10 flex items-center justify-center">
                <Heart className="w-10 h-10 text-[#FF7A59]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#333333] mb-4">
                Family First
              </h3>
              <p className="text-gray-700">
                We treat every booking like it’s our own family — because trust matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA at bottom */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-[#FF7A59] to-[#e66a4d] text-white text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience Care You Can Trust?
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            Join thousands of families across Bangladesh today.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-white text-[#FF7A59] font-bold text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}