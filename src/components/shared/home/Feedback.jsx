// components/Feedback.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Optional: if you want navigation arrows later
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    name: "Robert Thompson",
    relation: "Son caring for elderly parent",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote:
      "The elderly care specialist we found through Care.IO has been amazing with my father. Professional, caring, and always on time.",
  },
  {
    id: 2,
    name: "Ayesha Rahman",
    relation: "Mother of two young children",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote:
      "Our babysitter from Care.IO is like family now. My kids love her, and I finally have peace of mind when I need to work late.",
  },
  {
    id: 3,
    name: "James Wilson",
    relation: "Husband supporting recovering wife",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote:
      "The sick care service was a lifesaver during my wife's recovery. Reliable, compassionate, and very professional team.",
  },
  {
    id: 4,
    name: "Fatima Begum",
    relation: "Daughter for aging mother",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote:
      "Care.IO helped us find someone who treats my mother with real respect and kindness. We couldn't be happier.",
  },
  // Add more as needed
];

export default function Feedback() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
            What Families Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from families who trust Care.IO for their loved ones' care.
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: "!bg-[#FF7A59] !w-3 !h-3",
            bulletClass:
              "bg-gray-300 w-2.5 h-2.5 mx-1.5 rounded-full transition-all cursor-pointer",
          }}
          loop={true}
          className="!pb-12 md:!pb-16"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div
                className="
                  bg-white rounded-2xl p-6 lg:p-8 
                  shadow-lg border border-gray-100
                  flex flex-col h-full
                  transition-transform duration-300 hover:shadow-xl
                "
              >
                {/* Avatar & Info */}
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-[#FF7A59]/20"
                  />
                  <div>
                    <h4 className="font-semibold text-[#333333] text-lg lg:text-xl">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm lg:text-base text-gray-500">
                      {testimonial.relation}
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-2xl ${
                        i < testimonial.rating ? "text-[#34C759]" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 text-base lg:text-lg leading-relaxed italic flex-grow">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}