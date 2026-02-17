// components/AboutSection.jsx
export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left: Text Content */}
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] leading-tight">
              About Care.IO
            </h2>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We believe every family deserves access to trusted, compassionate care. 
              Care.IO connects you with verified caregivers who share our commitment 
              to putting families first.
            </p>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Our platform makes it easy to find the perfect caregiver for your loved 
              ones—whether you need help with childcare, elderly support, or 
              specialized medical assistance.
            </p>
          </div>

          {/* Right: 3 Wider Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-8">
            {/* Card 1 - Verified Caregivers */}
            <div 
              className="
                bg-gray-50 rounded-2xl p-6 lg:p-8 
                shadow-sm hover:shadow-md transition-all duration-300
                flex items-center gap-6 lg:gap-8
                min-h-[120px] lg:min-h-[140px]
              "
            >
              <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#FF7A59]/10 flex items-center justify-center text-3xl lg:text-4xl">
                <span className="text-[#FF7A59]">✓</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl lg:text-2xl font-semibold text-[#333333] mb-1 lg:mb-2">
                  Verified Caregivers
                </h3>
                <p className="text-base lg:text-lg text-gray-600">
                  Background-checked professionals
                </p>
              </div>
            </div>

            {/* Card 2 - Top Rated */}
            <div 
              className="
                bg-gray-50 rounded-2xl p-6 lg:p-8 
                shadow-sm hover:shadow-md transition-all duration-300
                flex items-center gap-6 lg:gap-8
                min-h-[120px] lg:min-h-[140px]
              "
            >
              <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#34C759]/10 flex items-center justify-center text-3xl lg:text-4xl">
                <span className="text-[#34C759]">★</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl lg:text-2xl font-semibold text-[#333333] mb-1 lg:mb-2">
                  Top Rated
                </h3>
                <p className="text-base lg:text-lg text-gray-600">
                  4.8+ average rating
                </p>
              </div>
            </div>

            {/* Card 3 - 24/7 Support */}
            <div 
              className="
                bg-gray-50 rounded-2xl p-6 lg:p-8 
                shadow-sm hover:shadow-md transition-all duration-300
                flex items-center gap-6 lg:gap-8
                min-h-[120px] lg:min-h-[140px]
              "
            >
              <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#4A90E2]/10 flex items-center justify-center text-2xl lg:text-3xl font-bold">
                <span className="text-[#4A90E2]">24/7</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl lg:text-2xl font-semibold text-[#333333] mb-1 lg:mb-2">
                  24/7 Support
                </h3>
                <p className="text-base lg:text-lg text-gray-600">
                  Always here to help
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}