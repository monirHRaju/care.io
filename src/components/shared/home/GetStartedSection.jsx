// components/GetStartedSection.jsx
import Link from "next/link";

export default function GetStartedSection() {
  return (
    <section className="relative w-full bg-[#FF7A59] py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Optional subtle background pattern / gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A59] via-[#FF7A59] to-[#e66a4d] opacity-90"></div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 md:mb-8 drop-shadow-md">
          Ready to Find Your Perfect
          <br className="hidden sm:block" />
          Caregiver?
        </h2>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light mb-10 md:mb-14 max-w-4xl mx-auto">
          Join thousands of families who trust Care.IO for their
          <br className="hidden md:block" />
          caregiving needs
        </p>

        {/* CTA Button */}
        <Link
          href="/signup" // or "/get-started" / "/register" – change as needed
          className="
            inline-block 
            bg-white text-[#FF7A59] 
            font-bold text-xl sm:text-2xl 
            px-10 sm:px-14 py-5 sm:py-6 
            rounded-full 
            shadow-2xl hover:shadow-3xl 
            transition-all duration-300 
            transform hover:scale-105 hover:-translate-y-1 
            focus:outline-none focus:ring-4 focus:ring-white/40
          "
        >
          Get Started Now
        </Link>

        {/* Optional small trust line below button */}
        <p className="mt-8 text-white/80 text-base sm:text-lg">
          It's free to join • No commitment required
        </p>
      </div>
    </section>
  );
}