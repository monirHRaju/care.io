// components/HeroSlider.jsx
"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles (you can also import only what you need)
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Optional: if you want fade effect instead of slide
// import "swiper/css/effect-fade";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // warm family/care image
    heading: "Trusted Care for Your Little Ones",
    subheading: "Professional babysitters you can count on — any time, any place.",
    buttonText: "Book Baby Care Now",
    buttonLink: "/services/baby-care",
  },
  {
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // elderly care warm scene
    heading: "Compassionate Support for Your Loved Ones",
    subheading: "Experienced caregivers dedicated to elderly comfort and safety.",
    buttonText: "Explore Elderly Services",
    buttonLink: "/services/elderly-service",
  },
  {
    image: "https://images.unsplash.com/photo-1576092768241-dec2310aa9f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // caring for sick person
    heading: "Reliable Help When It Matters Most",
    subheading: "Skilled care for those recovering or needing extra support.",
    buttonText: "Find Sick Care Services",
    buttonLink: "/services/sick-people-service",
  },
];

export default function HeroSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full h-[80vh] min-h-[500px] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: "bg-[#FF7A59]",
          bulletClass: "bg-white/50 w-3 h-3 mx-2 rounded-full transition-all",
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        // Optional: fade effect (uncomment import above)
        // effect="fade"
        // fadeEffect={{ crossFade: true }}
        speed={800}
        className="h-full"
        onInit={(swiper) => {
          // Make custom nav buttons work after init
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                {/* Dark/Warm Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex items-center justify-center h-full px-6 text-center md:text-left md:justify-start md:pl-16 lg:pl-24">
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg leading-tight mb-4">
                    {slide.heading}
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                    {slide.subheading}
                  </p>
                  <a
                    href={slide.buttonLink}
                    className="inline-block bg-[#FF7A59] hover:bg-[#e66a4d] text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#FF7A59]/40"
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows (modern & minimal) */}
      <button
        ref={prevRef}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/30 backdrop-blur-sm rounded-full text-white hover:bg-[#FF7A59] transition text-2xl shadow-md"
      >
        ←
      </button>
      <button
        ref={nextRef}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/30 backdrop-blur-sm rounded-full text-white hover:bg-[#FF7A59] transition text-2xl shadow-md"
      >
        →
      </button>
    </div>
  );
}